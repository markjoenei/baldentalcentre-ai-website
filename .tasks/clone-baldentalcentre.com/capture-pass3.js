const { chromium } = require('C:/Users/markj/AppData/Roaming/npm/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const TARGET_URL = 'https://baldentalcentre.com/';
const SCREENSHOTS_DIR = 'C:/Users/markj/Desktop/Claude-Projects/Done Claude Ai Dental Websites/baldentalcentre-ai-website/.tasks/clone-baldentalcentre.com/screenshots';

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  // ===== PASS 3: Pixel-accurate named section captures =====
  console.log('\n=== PASS 3: Named sections via full DOM analysis ===');
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(3000);

  // Capture popup before dismissing
  try {
    const popup = page.locator('#elementor-popup-modal-2108');
    if (await popup.isVisible({ timeout: 3000 })) {
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-popup-modal.png') });
      console.log('Captured: component-popup-modal.png (full page with popup)');
      // Close it
      const closeBtn = page.locator('.elementor-popup-modal .dialog-close-button, .elementor-popup-modal [aria-label*="close" i], #elementor-popup-modal-2108 button').first();
      try {
        if (await closeBtn.isVisible({ timeout: 500 })) {
          await closeBtn.click();
        } else {
          await page.keyboard.press('Escape');
        }
      } catch (e) {
        await page.keyboard.press('Escape');
      }
      await delay(500);
      console.log('Popup dismissed');
    }
  } catch (e) {
    console.log('No popup or popup capture failed: ' + e.message.substring(0, 80));
    await page.keyboard.press('Escape');
    await delay(300);
  }

  // Scroll through to trigger all lazy loading
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let pos = 0; pos <= totalHeight; pos += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), pos);
    await delay(100);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(1000);

  // Full DOM audit with text content
  const fullAudit = await page.evaluate(() => {
    function getAbsoluteTop(el) {
      let top = 0;
      while (el) {
        top += el.offsetTop || 0;
        el = el.offsetParent;
      }
      return top;
    }

    // All divs with data-section or meaningful elementor sections
    const containers = document.querySelectorAll(
      '.elementor-section, .e-con, .elementor-container > .elementor-row > .elementor-column'
    );

    // Better: get the actual content sections
    const sections = document.querySelectorAll('.elementor-section[data-element_type="section"]');
    return Array.from(sections).map((el, i) => {
      const top = getAbsoluteTop(el);
      const height = el.offsetHeight;
      const text = (el.innerText || '').replace(/\s+/g, ' ').trim().substring(0, 300);
      const hasImages = el.querySelectorAll('img').length;
      const hasForms = el.querySelectorAll('form, input, select, textarea').length;
      const hasSlider = el.querySelectorAll('[class*="swiper"], [class*="slider"]').length;
      const hasFlipBox = el.querySelectorAll('[class*="flip-box"]').length;
      const classes = el.className.toString();
      const id = el.id;
      return { index: i, top, height, text, hasImages, hasForms, hasSlider, hasFlipBox, classes: classes.substring(0, 100), id };
    }).filter(s => s.height > 30);
  });

  console.log(`\nFull DOM audit: ${fullAudit.length} Elementor sections`);
  fullAudit.forEach(s => {
    const preview = s.text.substring(0, 100);
    console.log(`  [${s.index}] top:${s.top}px h:${s.height}px imgs:${s.hasImages} forms:${s.hasForms} slider:${s.hasSlider} flip:${s.hasFlipBox} | "${preview}"`);
  });

  // Named section capture
  const NAMED_SECTIONS = [];
  const usedNames = new Set();

  for (const sec of fullAudit) {
    const textLower = sec.text.toLowerCase();
    const top = sec.top;
    const height = sec.height;

    let name;
    // Classify by content
    if (top < 100 && height < 100) {
      name = 'section-topbar';
    } else if (sec.hasSlider > 0 && top < 2000) {
      name = 'section-hero';
    } else if (textLower.includes('facebook') && textLower.includes('instagram') && height < 100) {
      name = 'section-social-bar';
    } else if ((textLower.includes('emergency') || textLower.includes('7 days') || textLower.includes('open')) && height < 100) {
      name = 'section-info-bar';
    } else if (textLower.includes('book appointment') && height < 200) {
      name = 'section-book-bar';
    } else if (textLower.includes('welcome') || textLower.includes('about bal dental')) {
      name = 'section-about';
    } else if (textLower.includes('our service') || textLower.includes('dental service') || (textLower.includes('service') && sec.hasFlipBox > 0)) {
      name = 'section-services';
    } else if (sec.hasFlipBox > 0 && !textLower.includes('service')) {
      name = 'section-features-flipbox';
    } else if (textLower.includes('our team') || textLower.includes('meet our') || textLower.includes('dr.') || textLower.includes('dentist')) {
      name = 'section-team';
    } else if (textLower.includes('testimonial') || textLower.includes('review') || textLower.includes('what our patient') || textLower.includes('patient')) {
      name = 'section-testimonials';
    } else if (textLower.includes('gallery') || textLower.includes('before') && textLower.includes('after')) {
      name = 'section-gallery';
    } else if (textLower.includes('contact') && textLower.includes('us')) {
      name = 'section-contact-info';
    } else if (textLower.includes('office hour') || textLower.includes('monday') || textLower.includes('tuesday')) {
      name = 'section-hours';
    } else if (textLower.includes('our location') || textLower.includes('greystone') || textLower.includes('scarborough')) {
      name = 'section-location';
    } else if (textLower.includes('open 7 days') && textLower.includes('accepting')) {
      name = 'section-cta-banner';
    } else if (textLower.includes('english') || textLower.includes('punjabi') || textLower.includes('hindi')) {
      name = 'section-languages';
    } else if (textLower.includes('write a review') || textLower.includes('google review')) {
      name = 'section-reviews-cta';
    } else if (textLower.includes('appointment') && height > 200) {
      name = 'section-appointment-form';
    } else if (sec.hasImages > 3 && height > 300) {
      name = 'section-image-gallery';
    } else {
      name = `section-block-${sec.index}`;
    }

    let filename = `${name}.png`;
    let counter = 2;
    while (usedNames.has(filename)) {
      filename = `${name}-${counter}.png`;
      counter++;
    }
    usedNames.add(filename);
    NAMED_SECTIONS.push({ ...sec, filename });
  }

  // Now capture each named section
  for (const sec of NAMED_SECTIONS) {
    await page.evaluate((top) => window.scrollTo(0, Math.max(0, top - 60)), sec.top);
    await delay(600);

    const clipHeight = Math.min(sec.height + 80, 1400);
    try {
      await page.screenshot({
        path: path.join(SCREENSHOTS_DIR, sec.filename),
        clip: { x: 0, y: 0, width: 1920, height: clipHeight }
      });
      console.log(`Captured: ${sec.filename} (h:${sec.height}px)`);
    } catch (e) {
      console.log(`Failed: ${sec.filename}: ${e.message.substring(0, 80)}`);
    }
  }

  // ===== MOBILE - Full mobile menu attempt =====
  console.log('\n=== Mobile Menu Capture ===');
  const mobileCtx = await browser.newContext({
    viewport: { width: 375, height: 812 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(2000);
  await mobilePage.keyboard.press('Escape');
  await delay(300);

  // Inspect the mobile header
  const mobileHeaderInfo = await mobilePage.evaluate(() => {
    const allInteractive = document.querySelectorAll('button, [role="button"], input[type="button"], input[type="submit"], [class*="toggle"], [class*="burger"], [class*="hamburger"]');
    return Array.from(allInteractive).map(el => ({
      tag: el.tagName,
      id: el.id,
      classes: el.className.toString().substring(0, 100),
      text: el.innerText?.trim().substring(0, 30),
      ariaLabel: el.getAttribute('aria-label'),
      visible: el.offsetParent !== null
    }));
  });

  console.log('Mobile interactive elements:');
  mobileHeaderInfo.forEach(el => console.log(`  ${el.tag}#${el.id} | .${el.classes.split(' ')[0]} | "${el.text}" | visible:${el.visible}`));

  // Try each button
  for (const btn of mobileHeaderInfo.filter(b => b.visible)) {
    try {
      const el = mobilePage.locator(`#${btn.id || '__none__'}, .${btn.classes.split(' ')[0].replace(/[^a-zA-Z0-9_-]/g, '')}`).first();
      if (await el.isVisible({ timeout: 500 })) {
        await el.click();
        await delay(1000);
        // Check if a menu appeared
        const navOpen = await mobilePage.evaluate(() => {
          return document.querySelectorAll('nav ul li, [class*="mobile-nav"] li, [class*="mobile-menu"] li').length > 0;
        });
        if (navOpen) {
          await mobilePage.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-mobile-open.png') });
          console.log('Captured: nav-mobile-open.png');
          break;
        }
      }
    } catch (e) {}
  }

  // Astra theme hamburger
  try {
    const astraHamburger = mobilePage.locator('#ast-mobile-header .ast-mobile-menu-buttons, .ast-mobile-menu-trigger-btn, [class*="ast-mobile"]').first();
    if (await astraHamburger.isVisible({ timeout: 1000 })) {
      await astraHamburger.click();
      await delay(1000);
      await mobilePage.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-mobile-open.png') });
      console.log('Captured: nav-mobile-open.png (Astra)');
    }
  } catch (e) {
    console.log('Astra hamburger: ' + e.message.substring(0, 60));
  }

  // Last resort: click at typical hamburger position (top-right)
  try {
    await mobilePage.mouse.click(350, 50);
    await delay(800);
    const hasMenu = await mobilePage.evaluate(() => {
      const nav = document.querySelector('[class*="mobile-nav"], .ast-main-navigation-opened, [class*="open"]');
      return nav && nav.offsetHeight > 100;
    });
    if (hasMenu) {
      await mobilePage.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-mobile-open.png') });
      console.log('Captured: nav-mobile-open.png (click position)');
    } else {
      console.log('Mobile menu could not be opened; saving what we have');
    }
  } catch (e) {
    console.log('Position click: ' + e.message.substring(0, 60));
  }

  await mobileCtx.close();

  // ===== ADDITIONAL DESKTOP COMPONENT CAPTURES =====
  console.log('\n=== Additional Component Captures ===');
  const ctx2 = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page2 = await ctx2.newPage();
  await page2.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(3000);
  await page2.keyboard.press('Escape');
  await delay(300);

  // Scroll to load all content
  const ph = await page2.evaluate(() => document.body.scrollHeight);
  for (let pos = 0; pos <= ph; pos += 400) {
    await page2.evaluate((y) => window.scrollTo(0, y), pos);
    await delay(100);
  }
  await page2.evaluate(() => window.scrollTo(0, 0));
  await delay(500);

  // HERO detailed - viewport at top
  await page2.screenshot({ path: path.join(SCREENSHOTS_DIR, 'hero-desktop.png') });
  console.log('Captured: hero-desktop.png');

  // Services section - Find "dentalServices" class
  try {
    const dentalServices = page2.locator('.dentalServices, [class*="dentalServices"]').first();
    if (await dentalServices.isVisible({ timeout: 2000 })) {
      await dentalServices.scrollIntoViewIfNeeded();
      await delay(500);
      await page2.screenshot({ path: path.join(SCREENSHOTS_DIR, 'services-section-desktop.png'), clip: { x: 0, y: 0, width: 1920, height: 1080 } });
      console.log('Captured: services-section-desktop.png');
    }
  } catch (e) {
    console.log('Services section: ' + e.message.substring(0, 80));
  }

  // Bal Dental Card section
  try {
    const balCard = page2.locator('#BalDental-Card').first();
    if (await balCard.isVisible({ timeout: 2000 })) {
      await balCard.scrollIntoViewIfNeeded();
      await delay(500);
      await balCard.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-baldental-card.png') });
      console.log('Captured: component-baldental-card.png');
    }
  } catch (e) {
    console.log('BalDental card: ' + e.message.substring(0, 80));
  }

  // Swiper/slider component
  try {
    const swiper = page2.locator('.swiper-container, .swiper, [class*="swiper-wrapper"]').first();
    if (await swiper.isVisible({ timeout: 2000 })) {
      await swiper.scrollIntoViewIfNeeded();
      await delay(500);
      await swiper.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-slider-carousel.png') });
      console.log('Captured: component-slider-carousel.png');
    }
  } catch (e) {
    console.log('Swiper: ' + e.message.substring(0, 80));
  }

  // Flip boxes - force hover with JS
  try {
    const flipBoxes = page2.locator('.elementor-flip-box');
    const count = await flipBoxes.count();
    console.log(`Flip boxes found: ${count}`);
    if (count > 0) {
      await flipBoxes.first().scrollIntoViewIfNeeded();
      await delay(500);
      // Take screenshot of 3 flip boxes together
      const parentRow = flipBoxes.first().locator('../..');
      await page2.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-flipbox-row.png'), clip: { x: 0, y: 0, width: 1920, height: 500 } });
      console.log('Captured: component-flipbox-row.png');

      // Individual default
      await flipBoxes.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-flipbox-default.png') });
      console.log('Captured: component-flipbox-default.png');

      // Force hover state via JS
      await page2.evaluate(() => {
        const box = document.querySelector('.elementor-flip-box');
        if (box) box.classList.add('elementor-flip-box--hover');
      });
      await delay(400);
      await flipBoxes.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-flipbox-flipped.png') });
      await page2.evaluate(() => {
        const box = document.querySelector('.elementor-flip-box');
        if (box) box.classList.remove('elementor-flip-box--hover');
      });
      console.log('Captured: component-flipbox-flipped.png');
    }
  } catch (e) {
    console.log('Flip box: ' + e.message.substring(0, 80));
  }

  // Icon list component
  try {
    const iconList = page2.locator('.elementor-icon-list-items, [class*="icon-list"]').first();
    if (await iconList.isVisible({ timeout: 1000 })) {
      await iconList.scrollIntoViewIfNeeded();
      await delay(300);
      await iconList.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-icon-list.png') });
      console.log('Captured: component-icon-list.png');
    }
  } catch (e) {}

  // Image close-up
  try {
    const heroImg = page2.locator('.elementor-slides .elementor-slide-bg, .elementor-background-slideshow, .slick-slide img').first();
    if (await heroImg.isVisible({ timeout: 1000 })) {
      await heroImg.scrollIntoViewIfNeeded();
      await delay(300);
      const imgSrc = await heroImg.getAttribute('src') || await heroImg.evaluate(el => el.style.backgroundImage);
      console.log('Hero background/image: ' + imgSrc?.substring(0, 100));
    }
  } catch (e) {}

  // Phone number button
  try {
    const phoneBtn = page2.locator('a[href*="tel:"]').first();
    if (await phoneBtn.isVisible({ timeout: 1000 })) {
      await phoneBtn.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-phone-button.png') });
      console.log('Captured: component-phone-button.png');
    }
  } catch (e) {}

  // Footer - full capture at bottom
  await page2.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await delay(1000);
  await page2.screenshot({ path: path.join(SCREENSHOTS_DIR, 'footer-desktop.png') });
  console.log('Captured: footer-desktop.png');

  await ctx2.close();
  await browser.close();

  console.log('\n=== PASS 3 COMPLETE ===');
  const files = fs.readdirSync(SCREENSHOTS_DIR).filter(f => f.endsWith('.png'));
  console.log(`\nTotal files: ${files.length}`);
  files.sort().forEach(f => console.log(`  - ${f}`));
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
