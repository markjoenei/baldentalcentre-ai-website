const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const url = require('url');

const BASE_URL = 'https://baldentalcentre.com/';
const PROJECT_ROOT = 'C:/Users/markj/Desktop/Claude-Projects/Done Claude Ai Dental Websites/baldentalcentre-ai-website';
const IMAGES_DIR = path.join(PROJECT_ROOT, 'public/images');
const VIDEOS_DIR = path.join(PROJECT_ROOT, 'public/videos');
const ICONS_DIR = path.join(PROJECT_ROOT, 'public/icons');

// Ensure directories exist
[IMAGES_DIR, VIDEOS_DIR, ICONS_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

function rgbToHex(rgb) {
  if (!rgb || rgb === 'none' || rgb === 'transparent') return 'transparent';
  const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return rgb;
  const r = parseInt(match[1]).toString(16).padStart(2, '0');
  const g = parseInt(match[2]).toString(16).padStart(2, '0');
  const b = parseInt(match[3]).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    if (!fileUrl || fileUrl.startsWith('data:')) { resolve(null); return; }
    try {
      const parsed = new URL(fileUrl);
      const lib = parsed.protocol === 'https:' ? https : http;
      const file = fs.createWriteStream(destPath);
      const req = lib.get(fileUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlink(destPath, () => {});
          downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(destPath, () => {});
          resolve(null);
          return;
        }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(destPath); });
        file.on('error', () => { file.close(); fs.unlink(destPath, () => {}); resolve(null); });
      });
      req.on('error', () => { resolve(null); });
      req.setTimeout(15000, () => { req.destroy(); resolve(null); });
    } catch (e) { resolve(null); }
  });
}

function getFilename(srcUrl, hint) {
  try {
    const parsed = new URL(srcUrl);
    return path.basename(parsed.pathname).split('?')[0];
  } catch (e) {
    return hint || 'asset';
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36'
  });
  const page = await context.newPage();

  console.log('Navigating to site...');
  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 60000 });

  // Dismiss popup if present
  try {
    await page.click('.elementor-popup-modal .dialog-close-button, .mfp-close, [data-elementor-type="popup"] .elementor-close', { timeout: 3000 });
    console.log('Dismissed popup');
  } catch (e) { /* no popup */ }

  await page.waitForTimeout(2000);

  // =====================
  // STEP 1: Enumerate all assets
  // =====================
  console.log('Enumerating assets...');
  const assets = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')].map(i => ({
      src: i.currentSrc || i.src,
      alt: i.alt,
      width: i.naturalWidth || i.width,
      height: i.naturalHeight || i.height,
      loading: i.loading
    })).filter(x => x.src && !x.src.startsWith('data:') && x.src !== window.location.href);

    const bgImgs = [...document.querySelectorAll('*')]
      .map(el => {
        const bg = getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none' && bg.includes('url(')) {
          const match = bg.match(/url\("?([^")\s]+)"?\)/);
          if (match && !match[1].startsWith('data:')) {
            return { el: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : ''), src: match[1] };
          }
        }
        return null;
      }).filter(Boolean);

    const videos = [...document.querySelectorAll('video, video source')].map(v => v.src || v.currentSrc).filter(Boolean);

    const svgEls = [...document.querySelectorAll('svg')].map(s => ({
      html: s.outerHTML.substring(0, 2000),
      width: s.getAttribute('width'),
      height: s.getAttribute('height'),
      viewBox: s.getAttribute('viewBox'),
      classes: s.className.baseVal || s.className
    }));

    const svgUseRefs = [...document.querySelectorAll('use')].map(u => u.getAttribute('href') || u.getAttribute('xlink:href')).filter(Boolean);

    const links = [...document.querySelectorAll('link[href]')]
      .map(l => ({ rel: l.rel, href: l.href }))
      .filter(l => l.href.includes('font') || l.href.includes('css'));

    const scripts = [...document.querySelectorAll('script[src]')]
      .map(s => s.src)
      .filter(s => s.includes('swiper') || s.includes('slider') || s.includes('animation'));

    return { imgs, bgImgs, videos, svgEls, svgUseRefs, links, scripts };
  });

  console.log(`Found ${assets.imgs.length} images, ${assets.bgImgs.length} bg images, ${assets.videos.length} videos, ${assets.svgEls.length} SVGs`);

  // Log font links
  console.log('\n=== FONT/CSS LINKS ===');
  assets.links.forEach(l => console.log(`${l.rel}: ${l.href}`));

  console.log('\n=== SCRIPTS ===');
  assets.scripts.forEach(s => console.log(s));

  // =====================
  // STEP 2: Color palette
  // =====================
  console.log('\nExtracting color palette...');
  const colors = await page.evaluate(() => {
    function rgbToHex(rgb) {
      if (!rgb || rgb === 'none') return null;
      const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return null;
      const a = match[0].match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)/);
      if (a && parseFloat(a[1]) < 0.05) return 'transparent';
      const r = parseInt(match[1]).toString(16).padStart(2, '0');
      const g = parseInt(match[2]).toString(16).padStart(2, '0');
      const b = parseInt(match[3]).toString(16).padStart(2, '0');
      return '#' + r + g + b;
    }

    const targets = {
      body: document.querySelector('body'),
      nav: document.querySelector('.site-header, header, nav, .ast-header-wrap'),
      hero: document.querySelector('.elementor-widget-container .elementor-slides-wrapper, .hero-section, .swiper-wrapper, [data-id] .elementor-section-wrap section'),
      h1: document.querySelector('h1'),
      h2: document.querySelector('h2'),
      h3: document.querySelector('h3'),
      p: document.querySelector('p'),
      a: document.querySelector('a'),
      btn: document.querySelector('.elementor-button, .ast-button-wrap a, button, .btn'),
      btnPrimary: document.querySelector('.elementor-button-link, .wp-block-button__link, a.elementor-button'),
      footer: document.querySelector('footer, .site-footer, .elementor-location-footer'),
      card: document.querySelector('.elementor-flip-box, .elementor-widget-flip-box .elementor-flip-box__front'),
      flipFront: document.querySelector('.elementor-flip-box__front'),
      flipBack: document.querySelector('.elementor-flip-box__back'),
      topBar: document.querySelector('.ast-above-header-bar, .top-bar, .elementor-top-bar'),
      emergencyBar: document.querySelector('.emergency-bar, .ast-above-header'),
      input: document.querySelector('input[type="text"], input[type="email"]'),
      socialIcon: document.querySelector('.elementor-social-icon, .social-icon'),
    };

    const result = {};
    Object.entries(targets).forEach(([key, el]) => {
      if (!el) { result[key] = null; return; }
      const cs = getComputedStyle(el);
      result[key] = {
        color: rgbToHex(cs.color),
        bg: rgbToHex(cs.backgroundColor),
        bgImage: cs.backgroundImage !== 'none' ? cs.backgroundImage.substring(0, 100) : null,
        border: cs.borderColor ? rgbToHex(cs.borderColor) : null,
        borderTop: rgbToHex(cs.borderTopColor),
        outline: rgbToHex(cs.outlineColor),
        tagName: el.tagName,
        classes: el.className ? el.className.toString().substring(0, 100) : ''
      };
    });

    // Also collect all unique colors from the page
    const allColors = new Set();
    [...document.querySelectorAll('*')].forEach(el => {
      const cs = getComputedStyle(el);
      ['color', 'backgroundColor', 'borderTopColor', 'borderBottomColor'].forEach(prop => {
        const hex = rgbToHex(cs[prop]);
        if (hex && hex !== 'transparent' && hex !== '#000000' && hex !== '#ffffff') {
          allColors.add(hex);
        }
      });
    });

    return { targets: result, allColors: [...allColors].sort() };
  });

  console.log('\n=== COLOR DATA ===');
  console.log(JSON.stringify(colors.targets, null, 2));
  console.log('\n=== ALL UNIQUE COLORS ===');
  console.log(colors.allColors.join(', '));

  // =====================
  // STEP 3: Typography
  // =====================
  console.log('\nExtracting typography...');
  const typography = await page.evaluate(() => {
    function getTypo(sel) {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        selector: sel,
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        textTransform: cs.textTransform,
        color: cs.color,
        text: el.textContent.trim().substring(0, 50)
      };
    }

    return {
      h1: getTypo('h1'),
      h2: getTypo('h2'),
      h3: getTypo('h3'),
      h4: getTypo('h4'),
      body: getTypo('body'),
      p: getTypo('p'),
      nav_a: getTypo('.main-navigation a, .ast-main-navigation a, nav a'),
      button: getTypo('.elementor-button, .ast-button-wrap a, a.btn'),
      caption: getTypo('.wp-caption, figcaption, .caption'),
      topBarText: getTypo('.ast-above-header-bar *, .top-bar *'),
      heroHeading: getTypo('.elementor-slide-heading, .swiper-slide h1, .swiper-slide h2, .elementor-headline'),
      heroSub: getTypo('.elementor-slide-description, .swiper-slide p'),
      footerText: getTypo('footer p, .site-footer p, .elementor-location-footer p'),
    };
  });

  console.log('\n=== TYPOGRAPHY ===');
  console.log(JSON.stringify(typography, null, 2));

  // =====================
  // STEP 4: Spacing and Layout
  // =====================
  console.log('\nExtracting spacing...');
  const spacing = await page.evaluate(() => {
    function getSpacing(sel) {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        selector: sel,
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        paddingLeft: cs.paddingLeft,
        paddingRight: cs.paddingRight,
        marginTop: cs.marginTop,
        marginBottom: cs.marginBottom,
        maxWidth: cs.maxWidth,
        width: Math.round(rect.width),
        gap: cs.gap,
        columnGap: cs.columnGap,
        rowGap: cs.rowGap,
      };
    }

    // Find container
    const containers = [...document.querySelectorAll('.elementor-container, .container, .entry-content, .ast-container')];
    const maxWidths = containers.map(el => getComputedStyle(el).maxWidth).filter(w => w !== 'none');

    return {
      body: getSpacing('body'),
      section: getSpacing('.elementor-section, section'),
      container: getSpacing('.elementor-container, .container'),
      heroSection: getSpacing('.elementor-slides-wrapper, .swiper-wrapper, .hero-section'),
      cardGrid: getSpacing('.elementor-widget-flip-box, .elementor-row, .elementor-columns'),
      card: getSpacing('.elementor-flip-box__front, .elementor-widget-container'),
      button: getSpacing('.elementor-button, a.elementor-button, .ast-button-wrap a'),
      nav: getSpacing('.ast-header-wrap, header, .site-header'),
      footer: getSpacing('.site-footer, footer'),
      topBar: getSpacing('.ast-above-header-bar, .elementor-top-bar'),
      containerMaxWidths: maxWidths.slice(0, 5),
      // Get actual widths of main containers
      mainContainer: (() => {
        const el = document.querySelector('.elementor-section-wrap, .site-main, main');
        if (!el) return null;
        return { width: el.getBoundingClientRect().width, maxWidth: getComputedStyle(el).maxWidth };
      })()
    };
  });

  console.log('\n=== SPACING ===');
  console.log(JSON.stringify(spacing, null, 2));

  // =====================
  // STEP 5: Component styles
  // =====================
  console.log('\nExtracting component styles...');
  const components = await page.evaluate(() => {
    function getComp(sel) {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        selector: sel,
        bg: cs.backgroundColor,
        color: cs.color,
        borderRadius: cs.borderRadius,
        border: `${cs.borderWidth} ${cs.borderStyle} ${cs.borderColor}`,
        boxShadow: cs.boxShadow,
        padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
        transition: cs.transition,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        textTransform: cs.textTransform,
        letterSpacing: cs.letterSpacing,
        display: cs.display,
        width: cs.width,
        height: cs.height,
        classes: el.className ? el.className.toString().substring(0, 100) : '',
        text: el.textContent.trim().substring(0, 60)
      };
    }

    return {
      primaryBtn: getComp('a.elementor-button, .elementor-button-link'),
      navLink: getComp('.ast-main-navigation a, .main-navigation a, .ast-header-break-point a'),
      flipFront: getComp('.elementor-flip-box__front'),
      flipBack: getComp('.elementor-flip-box__back'),
      flipBox: getComp('.elementor-flip-box'),
      card: getComp('.elementor-widget-wrap, .elementor-column-wrap'),
      topBarItem: getComp('.ast-above-header-bar .menu-item a, .top-bar a'),
      socialIcon: getComp('.elementor-social-icon a, .elementor-social-icon'),
      formInput: getComp('input[type="text"], input[type="email"], .hf-cs-field input'),
      formSubmit: getComp('button[type="submit"], input[type="submit"], .hf-cs-submit-wrap button'),
      heading: getComp('.elementor-heading-title, .elementor-widget-heading .elementor-heading-title'),
      iconBox: getComp('.elementor-icon-box-wrapper'),
      separator: getComp('.elementor-divider, hr'),
      badge: getComp('.elementor-badge, .badge'),
    };
  });

  console.log('\n=== COMPONENTS ===');
  console.log(JSON.stringify(components, null, 2));

  // =====================
  // STEP 6: Animations
  // =====================
  console.log('\nExtracting animations...');
  const animations = await page.evaluate(() => {
    function getAnim(sel) {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        selector: sel,
        transition: cs.transition,
        animation: cs.animation,
        transform: cs.transform,
        transitionDuration: cs.transitionDuration,
        transitionTimingFunction: cs.transitionTimingFunction,
        transitionProperty: cs.transitionProperty,
      };
    }

    // Get swiper config
    const swiperEl = document.querySelector('.elementor-swiper, .swiper-container, .swiper');
    let swiperConfig = null;
    if (swiperEl) {
      swiperConfig = {
        classes: swiperEl.className.substring(0, 100),
        dataSettings: swiperEl.getAttribute('data-settings') ? swiperEl.getAttribute('data-settings').substring(0, 500) : null
      };
    }

    // Check for CSS custom properties / variables
    const rootStyles = getComputedStyle(document.documentElement);
    const cssVars = {};
    // Common Elementor/Astra CSS vars
    ['--e-global-color-primary', '--e-global-color-secondary', '--e-global-color-accent', '--e-global-color-text',
     '--ast-global-color-0', '--ast-global-color-1', '--ast-global-color-2', '--ast-global-color-3',
     '--ast-global-color-4', '--ast-global-color-5', '--ast-global-color-6', '--ast-global-color-7',
     '--ast-global-color-8', '--ast-body-font-family', '--ast-heading-font-family',
     '--e-global-typography-primary-font-family', '--e-global-typography-secondary-font-family',
     '--e-global-typography-text-font-family', '--e-global-typography-accent-font-family',
    ].forEach(v => {
      const val = rootStyles.getPropertyValue(v).trim();
      if (val) cssVars[v] = val;
    });

    // Get all CSS custom properties with colors from :root
    const allVars = {};
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const sheet = document.styleSheets[i];
        for (let j = 0; j < sheet.cssRules.length; j++) {
          const rule = sheet.cssRules[j];
          if (rule.selectorText === ':root' || rule.type === CSSRule.STYLE_RULE) {
            const text = rule.cssText || '';
            const varMatches = text.match(/--[a-zA-Z-]+:\s*[^;]+/g);
            if (varMatches) {
              varMatches.forEach(m => {
                const [name, val] = m.split(':').map(s => s.trim());
                if (val && (val.includes('#') || val.includes('rgb') || val.includes('px') || val.includes('font'))) {
                  allVars[name] = val.substring(0, 60);
                }
              });
            }
          }
        }
      } catch (e) { /* cross-origin */ }
    }

    // Get flip box keyframes
    const flipData = {};
    const flipEl = document.querySelector('.elementor-flip-box');
    if (flipEl) {
      const cs = getComputedStyle(flipEl);
      flipData.perspective = cs.perspective;
      flipData.transformStyle = cs.transformStyle;
    }
    const flipFront = document.querySelector('.elementor-flip-box__front');
    if (flipFront) {
      flipData.frontTransition = getComputedStyle(flipFront).transition;
      flipData.frontTransform = getComputedStyle(flipFront).transform;
    }

    return {
      swiper: getAnim('.swiper-slide, .elementor-slides'),
      swiperConfig,
      flipBox: getAnim('.elementor-flip-box'),
      flipFront: getAnim('.elementor-flip-box__front'),
      flipBack: getAnim('.elementor-flip-box__back'),
      primaryBtn: getAnim('a.elementor-button, .elementor-button-link'),
      navLink: getAnim('.ast-main-navigation a'),
      socialIcon: getAnim('.elementor-social-icon'),
      section: getAnim('.elementor-section[data-aos], .elementor-section.wow, .elementor-section.animated'),
      cssVars,
      selectedVars: allVars,
      flipData,
    };
  });

  console.log('\n=== ANIMATIONS ===');
  console.log(JSON.stringify(animations, null, 2));

  // =====================
  // STEP 7: Page structure
  // =====================
  console.log('\nExtracting page structure...');
  const structure = await page.evaluate(() => {
    // Get all top-level sections in DOM order
    const sections = [];

    // Try Elementor sections first
    const elSections = document.querySelectorAll('.elementor-section, .elementor-container, .e-con');

    const topLevelSections = [...document.querySelectorAll(
      'header, .site-header, .ast-header-wrap, ' +
      '.elementor-location-header, .elementor-location-footer, ' +
      '.elementor-section:not(.elementor-inner-section), ' +
      'section, .wp-block-group, ' +
      'footer, .site-footer'
    )].filter(el => {
      // Filter to only top-level sections (not nested)
      const parent = el.parentElement;
      return !parent.closest('.elementor-section:not(.elementor-inner-section), section');
    });

    topLevelSections.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const headings = [...el.querySelectorAll('h1,h2,h3,h4')].map(h => h.textContent.trim().substring(0, 60)).filter(Boolean);
      const text = el.textContent.trim().substring(0, 150).replace(/\s+/g, ' ');
      const id = el.id || '';
      const classes = el.className ? el.className.toString().substring(0, 100) : '';
      const dataId = el.getAttribute('data-id') || '';
      const bgColor = cs.backgroundColor;
      const bgImg = cs.backgroundImage !== 'none' ? cs.backgroundImage.substring(0, 80) : null;

      sections.push({
        index: i + 1,
        tag: el.tagName,
        id,
        dataId,
        classes: classes.substring(0, 80),
        headings,
        textSnippet: text.substring(0, 100),
        bgColor,
        bgImg: bgImg ? bgImg.substring(0, 60) : null,
        scrollTop: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height)
      });
    });

    // Also get specific named sections
    const namedSections = {
      topSocialBar: !!document.querySelector('.ast-above-header-bar, .elementor-location-header'),
      emergencyBar: !!document.querySelector('[class*="emergency"], [class*="announcement"]'),
      mainNav: !!document.querySelector('.main-navigation, .ast-main-navigation'),
      heroSwiper: !!document.querySelector('.swiper-container, .elementor-slick-slider, .elementor-slides-wrapper'),
      flipBoxes: !!document.querySelector('.elementor-flip-box'),
      teamSection: !!document.querySelector('[class*="team"]'),
      gallerySection: !!document.querySelector('[class*="gallery"], .elementor-widget-image-gallery'),
      contactForm: !!document.querySelector('form, .happyforms-form, .hf-form'),
      testimonials: !!document.querySelector('[class*="testimonial"], [class*="review"]'),
      footer: !!document.querySelector('footer, .site-footer, .elementor-location-footer'),
    };

    return { sections, namedSections };
  });

  console.log('\n=== PAGE STRUCTURE ===');
  structure.sections.forEach(s => {
    console.log(`${s.index}. [${s.tag}#${s.id}] y=${s.scrollTop} h=${s.height} | headings: ${s.headings.join(' | ').substring(0, 60)} | text: ${s.textSnippet.substring(0,60)}`);
  });
  console.log('\nNamed sections found:', JSON.stringify(structure.namedSections, null, 2));

  // =====================
  // DOWNLOAD ASSETS
  // =====================
  console.log('\n\nDownloading assets...');

  const assetManifest = [];
  const downloaded = new Set();

  async function downloadAsset(srcUrl, destDir, descriptiveName) {
    if (!srcUrl || downloaded.has(srcUrl)) return null;
    downloaded.add(srcUrl);

    // Resolve relative URLs
    let fullUrl = srcUrl;
    if (srcUrl.startsWith('//')) fullUrl = 'https:' + srcUrl;
    else if (srcUrl.startsWith('/')) fullUrl = 'https://baldentalcentre.com' + srcUrl;

    const origFilename = getFilename(fullUrl, descriptiveName);
    const ext = path.extname(origFilename).toLowerCase();
    const destFile = descriptiveName ? descriptiveName + ext : origFilename;
    const destPath = path.join(destDir, destFile);

    const result = await downloadFile(fullUrl, destPath);
    if (result) {
      console.log(`  Downloaded: ${destFile} <- ${fullUrl.substring(0, 80)}`);
      return { file: destFile, originalSrc: fullUrl, dir: destDir.includes('icons') ? 'icons' : destDir.includes('videos') ? 'videos' : 'images' };
    }
    return null;
  }

  // Download all images
  const imgDescriptions = [
    'hero-slide-1', 'hero-slide-2', 'hero-slide-3', 'hero-slide-4', 'hero-slide-5', 'hero-slide-6',
    'team-doctor', 'team-member-2', 'team-member-3',
    'about-section', 'gallery-1', 'gallery-2', 'gallery-3', 'before-after',
    'logo', 'service-icon', 'favicon'
  ];

  for (let i = 0; i < assets.imgs.length; i++) {
    const img = assets.imgs[i];
    if (!img.src) continue;

    const src = img.src;
    const ext = path.extname(src.split('?')[0]).toLowerCase();
    const isSvg = ext === '.svg' || src.includes('.svg');
    const destDir = isSvg ? ICONS_DIR : IMAGES_DIR;

    // Generate descriptive name based on alt text or URL path
    let name = '';
    if (img.alt && img.alt.length > 0) {
      name = img.alt.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').substring(0, 40);
    }
    if (!name) {
      const fname = getFilename(src);
      name = fname.replace(/\.(jpg|jpeg|png|webp|avif|svg|gif)$/i, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase().substring(0, 40);
    }
    if (!name) name = `image-${i}`;

    const result = await downloadAsset(src, destDir, name);
    if (result) assetManifest.push({ ...result, alt: img.alt, width: img.width, height: img.height });
  }

  // Download background images
  for (const bg of assets.bgImgs) {
    if (!bg.src) continue;
    const ext = path.extname(bg.src.split('?')[0]).toLowerCase();
    const name = 'bg-' + bg.el.toLowerCase().replace(/[^a-z0-9]+/g, '-').substring(0, 30);
    const result = await downloadAsset(bg.src, IMAGES_DIR, name);
    if (result) assetManifest.push({ ...result, context: `bg of ${bg.el}` });
  }

  // Download videos
  for (const vid of assets.videos) {
    if (!vid) continue;
    const name = 'video-' + path.basename(vid.split('?')[0], path.extname(vid.split('?')[0])).substring(0, 40);
    const result = await downloadAsset(vid, VIDEOS_DIR, name);
    if (result) assetManifest.push(result);
  }

  // Save inline SVGs
  for (let i = 0; i < Math.min(assets.svgEls.length, 20); i++) {
    const svg = assets.svgEls[i];
    if (!svg.html || svg.html.length < 50) continue;
    const name = `icon-${i}.svg`;
    const destPath = path.join(ICONS_DIR, name);
    if (!fs.existsSync(destPath)) {
      fs.writeFileSync(destPath, svg.html);
      assetManifest.push({ file: name, dir: 'icons', context: `inline SVG ${i}`, classes: svg.classes });
    }
  }

  console.log('\nAsset manifest:', assetManifest.length, 'items');

  // =====================
  // OUTPUT RESULTS
  // =====================
  const results = {
    assets: assets.imgs.map(i => i.src).filter(Boolean),
    bgImages: assets.bgImgs,
    colors,
    typography,
    spacing,
    components,
    animations,
    structure,
    assetManifest
  };

  fs.writeFileSync(
    path.join(__dirname, 'design-extracted.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('\nSaved design-extracted.json');

  await browser.close();
  console.log('\nDone!');
}

main().catch(e => { console.error(e); process.exit(1); });
