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

  // ===== MOBILE NAV - Use smaller width to trigger Elementor mobile breakpoint =====
  console.log('\n=== Mobile Nav & Form ===');
  const mobileCtx = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(2000);
  await mobilePage.keyboard.press('Escape');
  await delay(300);

  // Find the Elementor menu toggle button (it's visible at mobile breakpoints)
  const mobileInfo = await mobilePage.evaluate(() => {
    const allEls = document.querySelectorAll('[class*="menu-toggle"], [class*="mobile"], button, [role="button"]');
    return Array.from(allEls).map(el => ({
      tag: el.tagName,
      id: el.id,
      classes: el.className.toString().substring(0, 120),
      text: (el.innerText || el.textContent || '').trim().substring(0, 30),
      rect: { top: el.getBoundingClientRect().top, left: el.getBoundingClientRect().left, w: el.getBoundingClientRect().width, h: el.getBoundingClientRect().height },
      visible: el.getBoundingClientRect().width > 0 && el.getBoundingClientRect().height > 0
    })).filter(el => el.visible);
  });

  console.log('Mobile (768px) visible interactive:');
  mobileInfo.forEach(el => console.log(`  ${el.tag} | "${el.classes.substring(0, 60)}" | "${el.text}" | rect:${JSON.stringify(el.rect)}`));

  // Try .elementor-menu-toggle
  let menuOpened = false;
  for (const elInfo of mobileInfo) {
    if (elInfo.classes.includes('menu-toggle') || elInfo.classes.includes('hamburger') || elInfo.classes.includes('mobile')) {
      try {
        await mobilePage.mouse.click(elInfo.rect.left + elInfo.rect.w/2, elInfo.rect.top + elInfo.rect.h/2);
        await delay(1000);
        const afterClick = await mobilePage.evaluate(() => {
          const navEl = document.querySelector('.ast-main-navigation, nav ul, .elementor-nav-menu--main');
          return { navVisible: navEl ? getComputedStyle(navEl).display : 'none', bodyClasses: document.body.className.substring(0, 200) };
        });
        console.log('After click:', afterClick);
        await mobilePage.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-mobile-open.png') });
        console.log('Captured: nav-mobile-open.png');
        menuOpened = true;
        break;
      } catch (e) {
        console.log('Click failed: ' + e.message.substring(0, 60));
      }
    }
  }

  if (!menuOpened) {
    // Try 375px viewport
    await mobileCtx.close();
    const mobileCtx375 = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const mp375 = await mobileCtx375.newPage();
    await mp375.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await delay(2000);
    await mp375.keyboard.press('Escape');
    await delay(300);

    // Force click at position where Astra hamburger typically is
    const headerBox = await mp375.evaluate(() => {
      const header = document.querySelector('#masthead, header, #site-header, .site-header');
      if (!header) return null;
      const rect = header.getBoundingClientRect();
      return { top: rect.top, bottom: rect.bottom, right: rect.right, height: rect.height };
    });
    console.log('Mobile header box:', headerBox);

    // Screenshot of nav at 375px
    await mp375.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-mobile-375px.png'), clip: { x: 0, y: 0, width: 375, height: 120 } });
    console.log('Captured: nav-mobile-375px.png');

    if (headerBox) {
      // Click top-right corner where hamburger usually is
      await mp375.mouse.click(headerBox.right - 20, headerBox.top + headerBox.height/2);
      await delay(1000);
      await mp375.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-mobile-open.png') });
      console.log('Captured: nav-mobile-open.png (position click)');
    }
    await mobileCtx375.close();
  } else {
    await mobileCtx.close();
  }

  // ===== DESKTOP: Contact form & remaining sections =====
  console.log('\n=== Desktop: Form & Remaining Sections ===');
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(3000);
  await page.keyboard.press('Escape');
  await delay(300);

  // Scroll to load everything
  const ph = await page.evaluate(() => document.body.scrollHeight);
  for (let pos = 0; pos <= ph; pos += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), pos);
    await delay(100);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(500);

  // --- Contact / Appointment form ---
  try {
    const forms = page.locator('.happyforms-form, [class*="happyforms"], form.elementor-form, .elementor-form-fields-wrapper, form');
    const count = await forms.count();
    console.log(`Forms found: ${count}`);
    for (let i = 0; i < count; i++) {
      const f = forms.nth(i);
      if (await f.isVisible({ timeout: 500 })) {
        await f.scrollIntoViewIfNeeded();
        await delay(400);
        await f.screenshot({ path: path.join(SCREENSHOTS_DIR, `component-form-${i === 0 ? 'contact' : i}.png`) });
        console.log(`Captured: component-form-${i === 0 ? 'contact' : i}.png`);
        if (i >= 1) break;
      }
    }
  } catch (e) {
    console.log('Form: ' + e.message.substring(0, 80));
  }

  // --- Hero slider next slide ---
  try {
    const sliderNext = page.locator('.elementor-swiper-button-next, .swiper-button-next, [class*="slider-next"], [aria-label*="next" i]').first();
    if (await sliderNext.isVisible({ timeout: 2000 })) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await delay(300);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'hero-desktop.png') });
      await sliderNext.click();
      await delay(1000);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'hero-slide-2.png') });
      console.log('Captured: hero-slide-2.png');
      try {
        await sliderNext.click();
        await delay(1000);
        await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'hero-slide-3.png') });
        console.log('Captured: hero-slide-3.png');
      } catch (e) {}
    }
  } catch (e) {
    console.log('Slider next: ' + e.message.substring(0, 80));
  }

  // --- Nav dropdown close-up ---
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(300);
  try {
    // Hover over nav items to see dropdown
    const navItems = page.locator('header .menu-item-has-children > a, header .ast-menu-item-has-children > a, nav .menu-item-has-children > a');
    const count = await navItems.count();
    console.log(`Nav dropdown triggers: ${count}`);
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        await navItems.nth(i).hover();
        await delay(500);
        const submenu = page.locator('.sub-menu:visible, .dropdown-menu:visible, ul.children:visible');
        if (await submenu.count() > 0) {
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, `component-nav-dropdown-${i}.png`), clip: { x: 0, y: 0, width: 1920, height: 400 } });
          console.log(`Captured: component-nav-dropdown-${i}.png`);
          await page.mouse.move(0, 500);
          await delay(300);
        }
      }
    }
  } catch (e) {
    console.log('Nav dropdown pass4: ' + e.message.substring(0, 80));
  }

  // --- Social icons bar ---
  try {
    const socialBar = page.locator('[class*="social-icon"], .elementor-social-icons-wrapper').first();
    if (await socialBar.isVisible({ timeout: 1000 })) {
      await socialBar.scrollIntoViewIfNeeded();
      await delay(300);
      const parent = socialBar.locator('..');
      await parent.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-social-icons.png') });
      console.log('Captured: component-social-icons.png');
    }
  } catch (e) {}

  // --- Language selector ---
  try {
    const langEl = page.locator('[class*="language"], [class*="lang-"], [class*="wpml"], #lang_sel, .pll-switcher').first();
    if (await langEl.isVisible({ timeout: 1000 })) {
      await langEl.scrollIntoViewIfNeeded();
      await delay(300);
      await langEl.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-language-switcher.png') });
      console.log('Captured: component-language-switcher.png');
    }
  } catch (e) {}

  // --- Testimonial/review slider ---
  try {
    const testimonialSlider = page.locator('[class*="testimonial"], .elementor-testimonial-carousel, [class*="review-slider"]').first();
    if (await testimonialSlider.isVisible({ timeout: 2000 })) {
      await testimonialSlider.scrollIntoViewIfNeeded();
      await delay(500);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-testimonials-carousel.png'), clip: { x: 0, y: 0, width: 1920, height: 700 } });
      console.log('Captured: section-testimonials-carousel.png');
    }
  } catch (e) {}

  // --- Section at specific page offsets ---
  // Do a systematic scroll capture of each 1080px viewport window
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`\nSystematic viewport captures (pageHeight: ${pageHeight}px):`);
  const viewportCount = Math.ceil(pageHeight / 900);
  for (let i = 0; i < viewportCount; i++) {
    const scrollY = i * 900;
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await delay(600);
    const filename = `viewport-scroll-${String(i).padStart(2, '0')}.png`;
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, filename) });
    console.log(`Captured: ${filename} (scrollY: ${scrollY})`);
  }

  await ctx.close();
  await browser.close();

  console.log('\n=== PASS 4 COMPLETE ===');
  const files = fs.readdirSync(SCREENSHOTS_DIR).filter(f => f.endsWith('.png'));
  console.log(`\nTotal files: ${files.length}`);
  files.sort().forEach(f => console.log(`  - ${f}`));
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
