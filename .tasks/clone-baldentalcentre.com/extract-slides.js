const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const PROJECT_ROOT = 'C:/Users/markj/Desktop/Claude-Projects/Done Claude Ai Dental Websites/baldentalcentre-ai-website';
const IMAGES_DIR = path.join(PROJECT_ROOT, 'public/images');
[IMAGES_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve) => {
    if (!fileUrl || fileUrl.startsWith('data:')) { resolve(null); return; }
    try {
      let url = fileUrl.startsWith('//') ? 'https:' + fileUrl : fileUrl;
      const parsed = new URL(url);
      const lib = parsed.protocol === 'https:' ? https : http;
      const file = fs.createWriteStream(destPath);
      const req = lib.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, res => {
        if ([301,302,303,307].includes(res.statusCode) && res.headers.location) {
          file.close(); fs.unlink(destPath, () => {});
          downloadFile(res.headers.location, destPath).then(resolve); return;
        }
        if (res.statusCode !== 200) { file.close(); fs.unlink(destPath, () => {}); resolve(null); return; }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(destPath); });
        file.on('error', () => { file.close(); fs.unlink(destPath, () => {}); resolve(null); });
      });
      req.on('error', () => resolve(null));
      req.setTimeout(30000, () => { req.destroy(); resolve(null); });
    } catch (e) { resolve(null); }
  });
}

async function dl(url, dest) {
  const r = await downloadFile(url, dest);
  if (r) console.log('  OK:', path.basename(dest), '<-', url.replace('https://baldentalcentre.com', ''));
  else console.log('  FAIL:', url.replace('https://baldentalcentre.com', ''));
  return r;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36'
  });
  const page = await ctx.newPage();

  // Intercept network requests to capture all image URLs
  const capturedImgUrls = new Set();
  page.on('response', async (response) => {
    const url = response.url();
    const contentType = response.headers()['content-type'] || '';
    if (contentType.includes('image') || url.match(/\.(jpg|jpeg|png|webp|avif|svg|gif)(\?|$)/i)) {
      capturedImgUrls.add(url);
    }
  });

  console.log('Loading page...');
  await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

  // Dismiss popup
  try { await page.click('[data-elementor-type="popup"] .dialog-close-button, .dialog-close-button', { timeout: 2000 }); } catch {}

  // Scroll slowly to trigger lazy loading and swiper slides
  console.log('Scrolling to trigger all lazy loads...');
  for (let pos = 0; pos <= 10000; pos += 300) {
    await page.evaluate(p => window.scrollTo(0, p), pos);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(2000);

  // Click through all swiper slides
  console.log('Cycling through slides...');
  for (let i = 0; i < 7; i++) {
    try {
      await page.click('.swiper-button-next, .elementor-swiper-button-next', { timeout: 2000 });
      await page.waitForTimeout(1500);
    } catch {}
  }
  await page.waitForTimeout(2000);

  // Get ALL full-resolution image URLs from the DOM
  const fullUrls = await page.evaluate(() => {
    const results = {
      allImgs: [],
      allBgs: [],
      swiperSlides: [],
      popupImgs: [],
      dataAttributes: [],
      flipBoxImages: [],
      sectionsBgImages: [],
    };

    // ALL img elements with full src
    results.allImgs = [...document.querySelectorAll('img')].map(img => ({
      src: img.src,
      currentSrc: img.currentSrc,
      dataSrc: img.getAttribute('data-src') || img.getAttribute('data-lazy-src') || img.getAttribute('data-original'),
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      classes: img.className.substring(0, 60),
      parentClass: img.parentElement?.className?.substring(0, 60) || ''
    })).filter(i => (i.src || i.currentSrc) && !(i.src || '').startsWith('data:'));

    // ALL background images (ALL elements)
    results.allBgs = [...document.querySelectorAll('*')].reduce((acc, el) => {
      const style = el.getAttribute('style') || '';
      const bgComp = getComputedStyle(el).backgroundImage;
      [bgComp, style].forEach(bg => {
        if (bg && bg.includes('url(')) {
          [...bg.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)].forEach(m => {
            const url = m[1];
            if (!url.startsWith('data:') && !acc.find(a => a.url === url)) {
              acc.push({
                url,
                elTag: el.tagName,
                elId: el.id,
                elClass: el.className?.toString()?.substring(0, 60) || '',
                source: bg === bgComp ? 'computed' : 'style-attr'
              });
            }
          });
        }
      });
      return acc;
    }, []);

    // Swiper slide data settings
    results.swiperSlides = [...document.querySelectorAll('.swiper-slide')].map((slide, i) => {
      const cs = getComputedStyle(slide);
      const bg = cs.backgroundImage;
      const bgUrl = bg && bg !== 'none' ? [...bg.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)].map(m => m[1]) : [];
      const imgs = [...slide.querySelectorAll('img')].map(img => ({
        src: img.currentSrc || img.src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight
      }));
      const heading = slide.querySelector('[class*="heading"], h1, h2, h3, h4');
      const desc = slide.querySelector('[class*="description"], p');
      const btn = slide.querySelector('[class*="button"], a.elementor-button');
      const allText = slide.textContent.trim().substring(0, 200);

      // Check slide inner elements for bg
      const innerBgs = [...slide.querySelectorAll('*')].reduce((acc, el) => {
        const bg2 = getComputedStyle(el).backgroundImage;
        if (bg2 && bg2 !== 'none' && bg2.includes('url(')) {
          [...bg2.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)].forEach(m => {
            if (!m[1].startsWith('data:')) acc.push(m[1]);
          });
        }
        return acc;
      }, []);

      return {
        index: i,
        bgUrls: [...new Set([...bgUrl, ...innerBgs])],
        imgs,
        heading: heading?.textContent?.trim()?.substring(0, 80),
        desc: desc?.textContent?.trim()?.substring(0, 100),
        btnText: btn?.textContent?.trim(),
        btnHref: btn?.href || btn?.getAttribute('href'),
        allText: allText.substring(0, 150)
      };
    });

    // Check for popup
    const popup = document.querySelector('[id*="popup"], .elementor-popup-modal, .mfp-wrap, .fancybox');
    if (popup) {
      results.popupImgs = [...popup.querySelectorAll('img')].map(i => i.currentSrc || i.src);
    }

    // About/team section images
    results.flipBoxImages = [...document.querySelectorAll('.elementor-flip-box')].map((box, i) => {
      const front = box.querySelector('.elementor-flip-box__front');
      const back = box.querySelector('.elementor-flip-box__back');

      function getBgFromEl(el) {
        if (!el) return [];
        const urls = [];
        const cs = getComputedStyle(el);
        if (cs.backgroundImage && cs.backgroundImage !== 'none') {
          [...cs.backgroundImage.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)].forEach(m => {
            if (!m[1].startsWith('data:')) urls.push(m[1]);
          });
        }
        // Also check children
        [...el.querySelectorAll('*')].forEach(child => {
          const cs2 = getComputedStyle(child);
          if (cs2.backgroundImage && cs2.backgroundImage !== 'none') {
            [...cs2.backgroundImage.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)].forEach(m => {
              if (!m[1].startsWith('data:')) urls.push(m[1]);
            });
          }
        });
        return [...new Set(urls)];
      }

      const frontImgs = [...(front?.querySelectorAll('img') || [])].map(i => i.currentSrc || i.src);
      const backImgs = [...(back?.querySelectorAll('img') || [])].map(i => i.currentSrc || i.src);
      const frontBg = getBgFromEl(front);
      const backBg = getBgFromEl(back);
      const frontTitle = front?.querySelector('[class*="title"], h1,h2,h3,h4')?.textContent?.trim();
      const backTitle = back?.querySelector('[class*="title"], h1,h2,h3,h4')?.textContent?.trim();
      const backDesc = back?.querySelector('[class*="description"], p')?.textContent?.trim()?.substring(0, 150);
      const backBtn = back?.querySelector('a, button');

      const frontCs = front ? getComputedStyle(front) : null;
      const backCs = back ? getComputedStyle(back) : null;

      return {
        index: i,
        frontBgColor: frontCs?.backgroundColor,
        frontBgImages: frontBg,
        frontImgSrcs: frontImgs.filter(Boolean),
        frontTitle,
        backBgColor: backCs?.backgroundColor,
        backBgImages: backBg,
        backImgSrcs: backImgs.filter(Boolean),
        backTitle,
        backDesc,
        backBtnText: backBtn?.textContent?.trim(),
        backBtnHref: backBtn?.href || backBtn?.getAttribute('href'),
        width: box.offsetWidth,
        height: box.offsetHeight
      };
    });

    // Get the "dentalServices" section details
    const servicesSection = document.querySelector('#dentalServices, [id*="service"], [class*="service"]');
    if (servicesSection) {
      results.servicesSectionText = servicesSection.textContent.trim().substring(0, 500);
    }

    // About section content
    const aboutSection = document.querySelector('#about, [id*="about"], .about-section');
    if (aboutSection) {
      results.aboutText = aboutSection.textContent.trim().substring(0, 300);
    }

    return results;
  });

  console.log('\n=== ALL SWIPER SLIDES (with full data) ===');
  fullUrls.swiperSlides.forEach(s => {
    console.log(`\nSlide ${s.index}:`);
    console.log(`  heading: "${s.heading}"`);
    console.log(`  desc: "${s.desc ? s.desc.substring(0,60) : ''}"`);
    console.log(`  btn: "${s.btnText}" -> ${s.btnHref}`);
    console.log(`  bgUrls: ${s.bgUrls.join(', ')}`);
    console.log(`  imgs: ${s.imgs.map(i => i.src?.substring(0,80)).join(', ')}`);
  });

  console.log('\n=== FLIP BOX IMAGES ===');
  fullUrls.flipBoxImages.forEach(f => {
    console.log(`\nFlipBox ${f.index}: ${f.width}x${f.height}`);
    console.log(`  front: "${f.frontTitle}" bg=${f.frontBgColor} imgs=${f.frontImgSrcs.join(',')} bgImgs=${f.frontBgImages.join(',')}`);
    console.log(`  back: "${f.backTitle}" bg=${f.backBgColor} desc="${f.backDesc?.substring(0,60)}" btn="${f.backBtnText}" -> ${f.backBtnHref}`);
    console.log(`  backBgImgs: ${f.backBgImages.join(',')}`);
  });

  console.log('\n=== ALL BACKGROUND IMAGES ===');
  fullUrls.allBgs.forEach(b => {
    console.log(`  ${b.elTag}#${b.elId} .${b.elClass.substring(0,30)}: ${b.url}`);
  });

  console.log('\n=== ALL IMG SRCS (full) ===');
  fullUrls.allImgs.forEach(i => {
    console.log(`  ${i.src} | ${i.alt} | ${i.width}x${i.height}`);
  });

  console.log('\n=== CAPTURED NETWORK IMAGES ===');
  [...capturedImgUrls].forEach(u => console.log(' ', u));

  // Now download everything
  console.log('\n=== DOWNLOADING ===');

  const allToDownload = new Map();

  // Add captured network images
  for (const url of capturedImgUrls) {
    if (url.includes('baldentalcentre.com/wp-content/uploads')) {
      const filename = path.basename(new URL(url).pathname);
      allToDownload.set(url, filename);
    }
  }

  // Override with descriptive names for known assets
  const descriptiveNames = {
    'BALDental_Logo.png': 'logo-main.png',
    'BALDental-IMG-Award.png': 'award-badge.png',
    'BALDental-IMG-Smiles.png': 'smiles-collage.png',
    'BALDental-IMG-Grid.png': 'gallery-grid.png',
  };

  const downloaded = new Set();
  for (const [url, defaultName] of allToDownload) {
    if (downloaded.has(url)) continue;
    downloaded.add(url);
    const name = descriptiveNames[defaultName] || defaultName;
    await dl(url, path.join(IMAGES_DIR, name));
  }

  // Also try to get the hero slide backgrounds by extracting from the Elementor JS data
  const pageSource = await page.content();
  const slideImageMatches = [...pageSource.matchAll(/https:\/\/baldentalcentre\.com\/wp-content\/uploads\/[^"'\s,)]+\.(jpg|jpeg|png|webp|avif)/gi)];
  const uniqueSlideUrls = [...new Set(slideImageMatches.map(m => m[0]))];

  console.log('\n=== IMAGE URLS FROM PAGE SOURCE ===');
  uniqueSlideUrls.forEach(u => console.log(' ', u));

  // Download any missing ones
  for (const url of uniqueSlideUrls) {
    if (downloaded.has(url)) continue;
    downloaded.add(url);
    const filename = path.basename(new URL(url).pathname);
    const name = descriptiveNames[filename] || filename;
    await dl(url, path.join(IMAGES_DIR, name));
  }

  await browser.close();
  console.log('\nDone!');
}

main().catch(e => { console.error(e); process.exit(1); });
