const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const PROJECT_ROOT = 'C:/Users/markj/Desktop/Claude-Projects/Done Claude Ai Dental Websites/baldentalcentre-ai-website';
const IMAGES_DIR = path.join(PROJECT_ROOT, 'public/images');
const ICONS_DIR = path.join(PROJECT_ROOT, 'public/icons');

[IMAGES_DIR, ICONS_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve) => {
    if (!fileUrl || fileUrl.startsWith('data:')) { resolve(null); return; }
    try {
      const parsed = new URL(fileUrl.startsWith('//') ? 'https:' + fileUrl : fileUrl);
      const lib = parsed.protocol === 'https:' ? https : http;
      const file = fs.createWriteStream(destPath);
      const req = lib.get(fileUrl.startsWith('//') ? 'https:' + fileUrl : fileUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlink(destPath, () => {});
          downloadFile(res.headers.location, destPath).then(resolve);
          return;
        }
        if (res.statusCode !== 200) { file.close(); fs.unlink(destPath, () => {}); resolve(null); return; }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(destPath); });
        file.on('error', () => { file.close(); fs.unlink(destPath, () => {}); resolve(null); });
      });
      req.on('error', () => resolve(null));
      req.setTimeout(20000, () => { req.destroy(); resolve(null); });
    } catch (e) { resolve(null); }
  });
}

const downloaded = new Set();
async function dl(url, dest) {
  if (downloaded.has(url)) return;
  downloaded.add(url);
  const r = await downloadFile(url, dest);
  if (r) console.log('  OK:', path.basename(dest), '<-', url.substring(0, 80));
  else console.log('  FAIL:', url.substring(0, 80));
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();

  console.log('Loading page...');
  await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

  // Dismiss popup
  try { await page.click('[data-elementor-type="popup"] .dialog-close-button, .mfp-close', { timeout: 2000 }); } catch {}

  // Scroll through entire page to trigger lazy load
  console.log('Scrolling page to trigger lazy loading...');
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let pos = 0;
      const interval = setInterval(() => {
        window.scrollTo(0, pos);
        pos += 500;
        if (pos > document.body.scrollHeight) { clearInterval(interval); resolve(); }
      }, 100);
    });
  });
  await page.waitForTimeout(3000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  // === DEEP ASSET EXTRACTION ===
  console.log('\nDeep asset extraction...');
  const deepAssets = await page.evaluate(() => {
    // ALL images including lazy-loaded
    const allImgs = [...document.querySelectorAll('img')].map(img => {
      const src = img.currentSrc || img.src || img.getAttribute('src') || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
      return {
        src,
        dataSrc: img.getAttribute('data-src') || img.getAttribute('data-lazy-src'),
        srcset: img.srcset,
        alt: img.alt,
        width: img.naturalWidth || img.getAttribute('width'),
        height: img.naturalHeight || img.getAttribute('height'),
        classes: img.className,
        parentClasses: img.parentElement ? img.parentElement.className : ''
      };
    }).filter(i => i.src && !i.src.startsWith('data:') && i.src.includes('http'));

    // Background images from ALL elements
    const allBgs = [...document.querySelectorAll('*')].reduce((acc, el) => {
      const cs = getComputedStyle(el);
      const bg = cs.backgroundImage;
      if (bg && bg !== 'none' && bg.includes('url(')) {
        const matches = [...bg.matchAll(/url\("?([^")\s]+)"?\)/g)];
        matches.forEach(m => {
          if (!m[1].startsWith('data:')) {
            acc.push({
              url: m[1],
              elTag: el.tagName,
              elId: el.id,
              elClass: el.className.toString().substring(0, 60),
              bgSize: cs.backgroundSize,
              bgPosition: cs.backgroundPosition
            });
          }
        });
      }
      return acc;
    }, []);

    // Swiper slides details
    const swiperSlides = [...document.querySelectorAll('.swiper-slide, .elementor-repeater-item')].map((slide, i) => {
      const cs = getComputedStyle(slide);
      const bg = cs.backgroundImage;
      const bgUrl = bg && bg !== 'none' ? bg.match(/url\("?([^")\s]+)"?\)/) : null;
      const heading = slide.querySelector('h1,h2,h3,.elementor-slide-heading');
      const desc = slide.querySelector('p,.elementor-slide-description');
      const btn = slide.querySelector('a,.elementor-button,.elementor-slide-button');
      return {
        index: i,
        bgUrl: bgUrl ? bgUrl[1] : null,
        bgColor: cs.backgroundColor,
        heading: heading ? heading.textContent.trim() : null,
        desc: desc ? desc.textContent.trim().substring(0, 100) : null,
        btnText: btn ? btn.textContent.trim() : null,
        btnHref: btn ? (btn.href || btn.getAttribute('href')) : null,
        btnClass: btn ? btn.className.substring(0, 80) : null,
        classes: slide.className.substring(0, 80)
      };
    });

    // Nav menu items
    const navItems = [...document.querySelectorAll('.ast-main-navigation li a, .main-navigation li a, nav li a, .elementor-nav-menu li a')].map(a => ({
      text: a.textContent.trim(),
      href: a.href,
      hasDropdown: !!a.closest('li').querySelector('ul'),
      depth: a.closest('.sub-menu') ? 1 : 0
    }));

    // Flip boxes details
    const flipBoxes = [...document.querySelectorAll('.elementor-flip-box')].map((box, i) => {
      const front = box.querySelector('.elementor-flip-box__front');
      const back = box.querySelector('.elementor-flip-box__back');
      const frontBg = front ? getComputedStyle(front).backgroundImage : null;
      const backBg = back ? getComputedStyle(back).backgroundImage : null;
      const frontBgColor = front ? getComputedStyle(front).backgroundColor : null;
      const backBgColor = back ? getComputedStyle(back).backgroundColor : null;
      const frontImg = front ? front.querySelector('img') : null;
      const backImg = back ? back.querySelector('img') : null;
      const frontTitle = front ? front.querySelector('h1,h2,h3,h4,.elementor-flip-box__layer__title') : null;
      const backTitle = back ? back.querySelector('h1,h2,h3,h4,.elementor-flip-box__layer__title') : null;
      const backDesc = back ? back.querySelector('p,.elementor-flip-box__layer__description') : null;
      const backBtn = back ? back.querySelector('a,.elementor-button') : null;

      return {
        index: i,
        frontBgColor,
        frontBgImg: frontBg && frontBg !== 'none' ? frontBg.match(/url\("?([^")\s]+)"?\)/)?.[1] : null,
        frontImgSrc: frontImg ? (frontImg.currentSrc || frontImg.src) : null,
        frontTitle: frontTitle ? frontTitle.textContent.trim() : null,
        backBgColor,
        backBgImg: backBg && backBg !== 'none' ? backBg.match(/url\("?([^")\s]+)"?\)/)?.[1] : null,
        backImgSrc: backImg ? (backImg.currentSrc || backImg.src) : null,
        backTitle: backTitle ? backTitle.textContent.trim() : null,
        backDesc: backDesc ? backDesc.textContent.trim().substring(0, 150) : null,
        backBtnText: backBtn ? backBtn.textContent.trim() : null,
        backBtnHref: backBtn ? (backBtn.href || backBtn.getAttribute('href')) : null,
      };
    });

    // Services / icon list items
    const iconLists = [...document.querySelectorAll('.elementor-icon-list-items, .elementor-widget-icon-list')].map((list, i) => {
      const items = [...list.querySelectorAll('.elementor-icon-list-item')].map(item => ({
        icon: item.querySelector('.elementor-icon-list-icon svg, .elementor-icon-list-icon i')?.outerHTML?.substring(0, 200),
        text: item.querySelector('.elementor-icon-list-text')?.textContent?.trim()
      }));
      return { index: i, items };
    });

    // Social icons
    const socialIcons = [...document.querySelectorAll('.elementor-social-icon')].map(icon => ({
      platform: [...icon.classList].find(c => c.startsWith('elementor-social-icon-') && c !== 'elementor-social-icon')?.replace('elementor-social-icon-', ''),
      href: icon.querySelector('a')?.href || icon.href,
      classes: icon.className.substring(0, 80)
    }));

    // All text content sections
    const textSections = [...document.querySelectorAll('.elementor-text-editor, .elementor-widget-text-editor')].map((el, i) => ({
      index: i,
      text: el.textContent.trim().substring(0, 200),
      html: el.innerHTML.substring(0, 300)
    }));

    // Get section-level colors (background colors of top-level sections)
    const sections = [...document.querySelectorAll('.elementor-section:not(.elementor-inner-section), .e-con:not(.e-child)')].map((sec, i) => {
      const cs = getComputedStyle(sec);
      const bg = cs.backgroundImage;
      const bgUrl = bg && bg !== 'none' ? bg.match(/url\("?([^")\s]+)"?\)/) : null;
      const rect = sec.getBoundingClientRect();
      const headings = [...sec.querySelectorAll('h1,h2,h3,h4')].slice(0, 3).map(h => h.textContent.trim().substring(0, 60));
      return {
        index: i,
        id: sec.id,
        dataId: sec.getAttribute('data-id'),
        bgColor: cs.backgroundColor,
        bgUrl: bgUrl ? bgUrl[1] : null,
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        scrollTop: Math.round(rect.top + window.scrollY),
        height: Math.round(sec.offsetHeight),
        headings,
        text: sec.textContent.trim().substring(0, 100).replace(/\s+/g, ' ')
      };
    });

    // Get all heading elements with context
    const allHeadings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => {
      const cs = getComputedStyle(h);
      return {
        tag: h.tagName,
        text: h.textContent.trim().substring(0, 80),
        color: cs.color,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        fontFamily: cs.fontFamily,
        textTransform: cs.textTransform,
        classes: h.className.substring(0, 60)
      };
    });

    // Nav header details
    const headerEl = document.querySelector('header, .site-header, .elementor-location-header');
    let headerDetails = null;
    if (headerEl) {
      const cs = getComputedStyle(headerEl);
      const logoImg = headerEl.querySelector('img, .custom-logo, .site-logo img');
      const phoneLink = headerEl.querySelector('a[href^="tel:"], a[href*="phone"]');
      const bookBtn = headerEl.querySelector('.elementor-button, a.btn, a[href*="book"], a[href*="appoint"]');
      headerDetails = {
        bg: cs.backgroundColor,
        height: headerEl.offsetHeight,
        isSticky: cs.position === 'sticky' || cs.position === 'fixed',
        position: cs.position,
        logoSrc: logoImg ? (logoImg.currentSrc || logoImg.src) : null,
        logoAlt: logoImg ? logoImg.alt : null,
        phoneText: phoneLink ? phoneLink.textContent.trim() : null,
        phoneHref: phoneLink ? phoneLink.href : null,
        bookBtnText: bookBtn ? bookBtn.textContent.trim() : null,
        bookBtnHref: bookBtn ? (bookBtn.href || bookBtn.getAttribute('href')) : null,
      };
    }

    // Footer details
    const footerEl = document.querySelector('footer, .site-footer, .elementor-location-footer');
    let footerDetails = null;
    if (footerEl) {
      const cs = getComputedStyle(footerEl);
      const links = [...footerEl.querySelectorAll('a')].map(a => ({ text: a.textContent.trim(), href: a.href })).filter(a => a.text);
      const headings = [...footerEl.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => h.textContent.trim());
      footerDetails = {
        bg: cs.backgroundColor,
        color: cs.color,
        links: links.slice(0, 30),
        headings: headings.slice(0, 10),
        text: footerEl.textContent.trim().substring(0, 500).replace(/\s+/g, ' ')
      };
    }

    // Google Fonts
    const gFonts = [...document.querySelectorAll('link[href*="fonts.googleapis.com"]')].map(l => l.href);
    const gFontsStyles = [...document.querySelectorAll('link[href*="fonts.gstatic.com"]')].map(l => l.href);

    // All unique font families on page
    const fontFamilies = new Set();
    [...document.querySelectorAll('*')].forEach(el => {
      const ff = getComputedStyle(el).fontFamily;
      if (ff) fontFamilies.add(ff);
    });

    return {
      allImgs,
      allBgs,
      swiperSlides,
      navItems,
      flipBoxes,
      iconLists,
      socialIcons,
      textSections,
      sections,
      allHeadings,
      headerDetails,
      footerDetails,
      gFonts,
      fontFamilies: [...fontFamilies]
    };
  });

  console.log('\n=== SWIPER SLIDES ===');
  deepAssets.swiperSlides.forEach(s => {
    console.log(`Slide ${s.index}: heading="${s.heading}" | desc="${s.desc ? s.desc.substring(0,50) : ''}" | btn="${s.btnText}" | bg=${s.bgUrl ? s.bgUrl.substring(0,60) : s.bgColor}`);
  });

  console.log('\n=== NAV ITEMS ===');
  deepAssets.navItems.forEach(n => console.log(`  ${n.depth > 0 ? '  - ' : ''}${n.text} -> ${n.href}`));

  console.log('\n=== FLIP BOXES ===');
  deepAssets.flipBoxes.forEach(f => {
    console.log(`FlipBox ${f.index}: front="${f.frontTitle}" frontBg=${f.frontBgColor} | back="${f.backTitle}" backBg=${f.backBgColor}`);
    if (f.backDesc) console.log(`  backDesc: ${f.backDesc.substring(0,80)}`);
    if (f.backBtnText) console.log(`  backBtn: "${f.backBtnText}" -> ${f.backBtnHref}`);
  });

  console.log('\n=== ICON LISTS ===');
  deepAssets.iconLists.forEach(list => {
    console.log(`List ${list.index}:`);
    list.items.forEach(item => console.log(`  - ${item.text}`));
  });

  console.log('\n=== SOCIAL ICONS ===');
  deepAssets.socialIcons.forEach(s => console.log(`  ${s.platform}: ${s.href}`));

  console.log('\n=== SECTIONS (top-level) ===');
  deepAssets.sections.forEach(s => {
    console.log(`  [${s.index}] id=${s.id || s.dataId} y=${s.scrollTop} h=${s.height} bg=${s.bgColor} padT=${s.paddingTop} padB=${s.paddingBottom}`);
    if (s.headings.length > 0) console.log(`    headings: ${s.headings.join(' | ')}`);
    console.log(`    text: ${s.text.substring(0,80)}`);
  });

  console.log('\n=== ALL HEADINGS ===');
  deepAssets.allHeadings.forEach(h => console.log(`  ${h.tag} "${h.text}" ${h.fontSize}/${h.fontWeight} ${h.color} tx=${h.textTransform}`));

  console.log('\n=== HEADER DETAILS ===');
  console.log(JSON.stringify(deepAssets.headerDetails, null, 2));

  console.log('\n=== FOOTER DETAILS ===');
  if (deepAssets.footerDetails) {
    console.log('bg:', deepAssets.footerDetails.bg);
    console.log('headings:', deepAssets.footerDetails.headings);
    console.log('links:', deepAssets.footerDetails.links.slice(0, 15));
    console.log('text:', deepAssets.footerDetails.text.substring(0, 300));
  }

  console.log('\n=== GOOGLE FONTS ===');
  deepAssets.gFonts.forEach(f => console.log(' ', f));

  console.log('\n=== FONT FAMILIES ===');
  deepAssets.fontFamilies.forEach(f => console.log(' ', f));

  console.log('\n=== ALL BG IMAGES ===');
  deepAssets.allBgs.forEach(b => console.log(`  ${b.elTag}#${b.elId}.${b.elClass.substring(0,30)}: ${b.url.substring(0,80)} size=${b.bgSize} pos=${b.bgPosition}`));

  console.log('\n=== ALL IMAGES ===');
  deepAssets.allImgs.forEach(i => console.log(`  src=${i.src ? i.src.substring(0,80) : ''} alt="${i.alt}" ${i.width}x${i.height}`));

  // Now download all assets found
  console.log('\n\n=== DOWNLOADING ASSETS ===');

  // Download hero slide bg images
  for (const slide of deepAssets.swiperSlides) {
    if (!slide.bgUrl) continue;
    const url = slide.bgUrl.startsWith('//') ? 'https:' + slide.bgUrl : slide.bgUrl;
    const num = slide.index + 1;
    const ext = path.extname(url.split('?')[0]) || '.jpg';
    await dl(url, path.join(IMAGES_DIR, `hero-slide-${num}${ext}`));
  }

  // Download all bg images
  const bgSeen = new Set();
  for (const bg of deepAssets.allBgs) {
    if (!bg.url || bgSeen.has(bg.url)) continue;
    bgSeen.add(bg.url);
    const url = bg.url.startsWith('//') ? 'https:' + bg.url : bg.url;
    let name = path.basename(url.split('?')[0]);
    // Give descriptive names
    if (name.includes('Logo') || name.includes('logo')) name = 'logo-main' + path.extname(name);
    else if (name.includes('Award') || name.includes('award')) name = 'award-badge' + path.extname(name);
    else if (name.includes('Smiles') || name.includes('smile')) name = 'smiles-collage' + path.extname(name);
    else if (name.includes('Grid') || name.includes('grid')) name = 'gallery-grid' + path.extname(name);
    else if (name.includes('hero') || name.includes('Hero') || name.includes('slide')) {
      name = 'hero-' + name;
    }
    await dl(url, path.join(IMAGES_DIR, name));
  }

  // Download all regular images
  for (const img of deepAssets.allImgs) {
    if (!img.src) continue;
    const url = img.src.startsWith('//') ? 'https:' + img.src : img.src;
    let name = '';
    if (img.alt) {
      name = img.alt.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').substring(0, 40);
    }
    if (!name) {
      name = path.basename(url.split('?')[0]).replace(/[^a-z0-9._-]/gi, '-').substring(0, 40);
    }
    const ext = path.extname(url.split('?')[0]) || '.jpg';
    if (!name.includes('.')) name = name + ext;
    // Determine dir
    const isSvg = ext === '.svg';
    const dir = isSvg ? ICONS_DIR : IMAGES_DIR;
    await dl(url, path.join(dir, name));
  }

  // Download flip box images
  for (const box of deepAssets.flipBoxes) {
    if (box.frontImgSrc) await dl(box.frontImgSrc, path.join(IMAGES_DIR, `flipbox-${box.index}-front${path.extname(box.frontImgSrc.split('?')[0]) || '.jpg'}`));
    if (box.backImgSrc) await dl(box.backImgSrc, path.join(IMAGES_DIR, `flipbox-${box.index}-back${path.extname(box.backImgSrc.split('?')[0]) || '.jpg'}`));
    if (box.frontBgImg) await dl(box.frontBgImg, path.join(IMAGES_DIR, `flipbox-${box.index}-front-bg${path.extname(box.frontBgImg.split('?')[0]) || '.jpg'}`));
    if (box.backBgImg) await dl(box.backBgImg, path.join(IMAGES_DIR, `flipbox-${box.index}-back-bg${path.extname(box.backBgImg.split('?')[0]) || '.jpg'}`));
  }

  // Save JSON
  fs.writeFileSync(
    path.join(path.dirname(__filename), 'design-deep.json'),
    JSON.stringify(deepAssets, null, 2)
  );
  console.log('\nSaved design-deep.json');

  await browser.close();
  console.log('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
