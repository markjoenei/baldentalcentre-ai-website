const { chromium } = require('C:/Users/markj/AppData/Roaming/npm/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const TARGET_URL = 'https://baldentalcentre.com/';
const SCREENSHOTS_DIR = 'C:/Users/markj/Desktop/Claude-Projects/Done Claude Ai Dental Websites/baldentalcentre-ai-website/.tasks/clone-baldentalcentre.com/screenshots';

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureScreenshot(page, filename, options = {}) {
  const filepath = path.join(SCREENSHOTS_DIR, filename);
  await page.screenshot({ path: filepath, fullPage: options.fullPage || false, ...options });
  console.log(`Captured: ${filename}`);
  return filepath;
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  // ===== DESKTOP 1920x1080 FULL PAGE =====
  console.log('\n=== DESKTOP FULL PAGE (1920x1080) ===');
  const desktopCtx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const desktopPage = await desktopCtx.newPage();
  await desktopPage.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(3000);
  await captureScreenshot(desktopPage, 'full-page-desktop.png', { fullPage: true });
  await desktopCtx.close();

  // ===== TABLET 1024x768 FULL PAGE =====
  console.log('\n=== TABLET FULL PAGE (1024x768) ===');
  const tabletCtx = await browser.newContext({ viewport: { width: 1024, height: 768 } });
  const tabletPage = await tabletCtx.newPage();
  await tabletPage.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(2000);
  await captureScreenshot(tabletPage, 'full-page-tablet.png', { fullPage: true });
  await tabletCtx.close();

  // ===== MOBILE 375x812 FULL PAGE =====
  console.log('\n=== MOBILE FULL PAGE (375x812) ===');
  const mobileCtx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(2000);
  await captureScreenshot(mobilePage, 'full-page-mobile.png', { fullPage: true });

  // Try to open mobile menu
  try {
    const hamburgerSelectors = [
      'button[aria-label*="menu" i]',
      'button[aria-label*="Menu" i]',
      '.hamburger',
      '.menu-toggle',
      '[class*="hamburger"]',
      '[class*="mobile-menu-toggle"]',
      '[class*="nav-toggle"]',
      'button.navbar-toggler',
      '.navbar-toggler',
      '[class*="burger"]'
    ];
    let menuOpened = false;
    for (const sel of hamburgerSelectors) {
      try {
        const el = mobilePage.locator(sel).first();
        if (await el.isVisible({ timeout: 1000 })) {
          await el.click();
          await delay(800);
          await captureScreenshot(mobilePage, 'nav-mobile-open.png');
          console.log('Captured: nav-mobile-open.png');
          menuOpened = true;
          break;
        }
      } catch (e) {}
    }
    if (!menuOpened) {
      console.log('Could not find/open mobile menu');
    }
  } catch (e) {
    console.log('Mobile menu error: ' + e.message);
  }
  await mobileCtx.close();

  // ===== DESKTOP SECTION CAPTURES =====
  console.log('\n=== DESKTOP SECTION CAPTURES ===');
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(3000);

  // Scroll through entire page slowly to trigger lazy-load/animations
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Total page height: ${pageHeight}px`);
  for (let pos = 0; pos <= pageHeight; pos += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), pos);
    await delay(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(1000);

  // --- CAPTURE NAV ---
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(300);
  const navSelectors = ['header', 'nav', '#header', '.header', '[class*="header"]', '[class*="navbar"]'];
  let navCaptured = false;
  for (const sel of navSelectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1000 })) {
        await el.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-nav.png') });
        console.log('Captured: section-nav.png');
        navCaptured = true;
        break;
      }
    } catch (e) {}
  }
  if (!navCaptured) {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-nav.png'), clip: { x: 0, y: 0, width: 1920, height: 120 } });
    console.log('Captured: section-nav.png (clip fallback)');
  }

  // --- NAV DEFAULT (viewport top) ---
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-nav-default.png'), clip: { x: 0, y: 0, width: 1920, height: 120 } });
  console.log('Captured: component-nav-default.png');

  // --- NAV HOVER ---
  try {
    const navLink = page.locator('nav a, header nav a').first();
    await navLink.hover();
    await delay(400);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-nav-hover.png'), clip: { x: 0, y: 0, width: 1920, height: 120 } });
    console.log('Captured: component-nav-hover.png');
  } catch (e) {
    console.log('Nav hover failed: ' + e.message);
  }

  // --- DROPDOWN MENU ---
  try {
    const dropdowns = page.locator('nav li:has(ul) > a, nav [class*="dropdown"] > a, nav [class*="has-sub"] > a, nav [class*="has-children"] > a');
    if (await dropdowns.count() > 0) {
      await dropdowns.first().hover();
      await delay(700);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-nav-dropdown.png'), clip: { x: 0, y: 0, width: 1920, height: 400 } });
      console.log('Captured: component-nav-dropdown.png');
    }
  } catch (e) {
    console.log('Dropdown: ' + e.message);
  }
  await page.mouse.move(0, 0);
  await delay(300);

  // --- HERO SECTION ---
  const heroSelectors = [
    '.hero', '#hero', '[class*="hero"]',
    '.banner', '#banner', '[class*="banner"]',
    '.slider', '[class*="slider"]',
    '.main-slider', '[class*="main-slider"]',
    'main section:first-child', 'main > div:first-child',
    '.home-hero', '[id*="home"]'
  ];
  let heroCaptured = false;
  for (const sel of heroSelectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1000 })) {
        await el.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-hero.png') });
        console.log('Captured: section-hero.png');
        heroCaptured = true;
        break;
      }
    } catch (e) {}
  }
  if (!heroCaptured) {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-hero.png'), clip: { x: 0, y: 0, width: 1920, height: 900 } });
    console.log('Captured: section-hero.png (viewport clip fallback)');
  }

  // --- GET ALL SECTIONS ---
  const sections = await page.evaluate(() => {
    const elements = document.querySelectorAll('section, [class*="section"], main > div, main > article, [class*="-section"]');
    return Array.from(elements).map((el, i) => {
      const rect = el.getBoundingClientRect();
      const classes = (el.className || '').toString();
      return {
        index: i,
        classes: classes.substring(0, 150),
        id: el.id || '',
        tagName: el.tagName,
        top: Math.round(el.offsetTop),
        height: Math.round(el.offsetHeight),
        text: (el.innerText || '').substring(0, 100)
      };
    }).filter(s => s.height > 80);
  });

  console.log(`\nFound ${sections.length} content sections:`);
  sections.forEach(s => console.log(`  [${s.index}] top:${s.top}px h:${s.height}px classes:"${s.classes.substring(0,60)}" id:"${s.id}"`));

  const usedNames = new Set();
  for (const section of sections) {
    await page.evaluate((top) => window.scrollTo(0, Math.max(0, top - 60)), section.top);
    await delay(800);

    const nameHint = (section.classes + ' ' + section.id + ' ' + section.text).toLowerCase();
    let baseName = `section-${section.index}`;

    if (nameHint.includes('hero') || nameHint.includes('banner') || nameHint.includes('slider') || nameHint.includes('home-top')) {
      baseName = 'section-hero';
    } else if (nameHint.includes('service') || nameHint.includes('treatment')) {
      baseName = 'section-services';
    } else if (nameHint.includes('about') && !nameHint.includes('appointment')) {
      baseName = 'section-about';
    } else if (nameHint.includes('team') || nameHint.includes('doctor') || nameHint.includes('staff') || nameHint.includes('dentist')) {
      baseName = 'section-team';
    } else if (nameHint.includes('testimonial') || nameHint.includes('review') || nameHint.includes('patient')) {
      baseName = 'section-testimonials';
    } else if (nameHint.includes('gallery') || nameHint.includes('photo') || nameHint.includes('image')) {
      baseName = 'section-gallery';
    } else if (nameHint.includes('contact') || nameHint.includes('location') || nameHint.includes('map')) {
      baseName = 'section-contact';
    } else if (nameHint.includes('appointment') || nameHint.includes('book') || nameHint.includes('schedule')) {
      baseName = 'section-appointment';
    } else if (nameHint.includes('cta') || nameHint.includes('call-to-action')) {
      baseName = 'section-cta';
    } else if (nameHint.includes('faq') || nameHint.includes('question')) {
      baseName = 'section-faq';
    } else if (nameHint.includes('feature') || nameHint.includes('why') || nameHint.includes('benefit')) {
      baseName = 'section-features';
    } else if (nameHint.includes('video')) {
      baseName = 'section-video';
    } else if (nameHint.includes('news') || nameHint.includes('blog') || nameHint.includes('article')) {
      baseName = 'section-news';
    } else if (nameHint.includes('partner') || nameHint.includes('brand') || nameHint.includes('logo')) {
      baseName = 'section-partners';
    } else if (nameHint.includes('stat') || nameHint.includes('counter') || nameHint.includes('number')) {
      baseName = 'section-stats';
    } else {
      // Clean class name for filename
      const cleanClasses = section.classes.replace(/[^a-zA-Z0-9-_ ]/g, '').trim().split(/\s+/)[0] || '';
      baseName = `section-${cleanClasses || section.index}`.toLowerCase().replace(/[^a-z0-9-]/g, '-').substring(0, 50);
    }

    // Ensure uniqueness
    let filename = `${baseName}.png`;
    let counter = 2;
    while (usedNames.has(filename)) {
      filename = `${baseName}-${counter}.png`;
      counter++;
    }
    usedNames.add(filename);

    try {
      const clipHeight = Math.min(section.height + 60, 1400);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, filename), clip: { x: 0, y: 0, width: 1920, height: clipHeight } });
      console.log(`Captured: ${filename}`);
    } catch (e) {
      console.log(`Failed ${filename}: ${e.message}`);
    }
  }

  // --- FOOTER ---
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await delay(1000);
  const footerSelectors = ['footer', '#footer', '.footer', '[class*="footer"]'];
  let footerCaptured = false;
  for (const sel of footerSelectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1000 })) {
        await el.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-footer.png') });
        console.log('Captured: section-footer.png');
        footerCaptured = true;
        break;
      }
    } catch (e) {}
  }
  if (!footerCaptured) {
    const ph = await page.evaluate(() => document.body.scrollHeight);
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'section-footer.png'),
      clip: { x: 0, y: Math.max(0, ph - 1080), width: 1920, height: 1080 }
    });
    console.log('Captured: section-footer.png (clip fallback)');
  }

  // --- BUTTON COMPONENTS ---
  try {
    const btnSelectors = ['a.btn, button.btn, [class*="btn-"], [class*="button-"], a[class*="cta"], .book-btn, [class*="book-btn"]'];
    const btns = page.locator(btnSelectors.join(', '));
    await page.evaluate(() => window.scrollTo(0, 0));
    await delay(300);
    const count = await btns.count();
    console.log(`Found ${count} button elements`);
    if (count > 0) {
      await btns.first().scrollIntoViewIfNeeded();
      await delay(300);
      await btns.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-button-primary-default.png') });
      console.log('Captured: component-button-primary-default.png');
      await btns.first().hover();
      await delay(400);
      await btns.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-button-primary-hover.png') });
      console.log('Captured: component-button-primary-hover.png');
    }
  } catch (e) {
    console.log('Button capture: ' + e.message);
  }

  // --- CARD COMPONENT ---
  try {
    const cardSelectors = ['.card', '[class*="service-card"]', '[class*="team-card"]', '[class*="treatment-card"]', '.item'];
    for (const sel of cardSelectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 1000 })) {
          await el.scrollIntoViewIfNeeded();
          await delay(300);
          await el.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-card-default.png') });
          console.log('Captured: component-card-default.png');
          break;
        }
      } catch (e) {}
    }
  } catch (e) {
    console.log('Card capture: ' + e.message);
  }

  // --- VIEWPORT INITIAL STATE ---
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(500);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'viewport-desktop-initial.png') });
  console.log('Captured: viewport-desktop-initial.png');

  await ctx.close();
  await browser.close();
  console.log('\n=== ALL CAPTURES COMPLETE ===');

  // List all captured files
  const files = fs.readdirSync(SCREENSHOTS_DIR).filter(f => f.endsWith('.png'));
  console.log(`\nTotal files: ${files.length}`);
  files.sort().forEach(f => console.log(`  - ${f}`));
}

main().catch(err => {
  console.error('FATAL ERROR:', err);
  process.exit(1);
});
