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

  // ===== PASS 2: Detailed section captures with popup dismissed =====
  console.log('\n=== PASS 2: Targeted section captures ===');
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();

  // First capture the popup if it appears
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(3000);

  // Check for popup
  try {
    const popup = page.locator('#elementor-popup-modal-2108, [class*="elementor-popup"], [class*="popup"]').first();
    if (await popup.isVisible({ timeout: 2000 })) {
      await popup.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-popup-modal.png') });
      console.log('Captured: component-popup-modal.png');

      // Close the popup
      const closeBtn = page.locator('[aria-label*="close" i], [aria-label*="Close" i], .dialog-close-button, [class*="close-button"], [class*="popup-close"], .elementor-popup-close, button.close').first();
      try {
        if (await closeBtn.isVisible({ timeout: 1000 })) {
          await closeBtn.click();
          await delay(500);
          console.log('Popup closed');
        } else {
          // Try pressing Escape
          await page.keyboard.press('Escape');
          await delay(500);
          console.log('Popup dismissed with Escape');
        }
      } catch (e) {
        await page.keyboard.press('Escape');
        await delay(500);
      }
    } else {
      console.log('No popup detected');
    }
  } catch (e) {
    console.log('Popup check: ' + e.message);
  }

  // --- Get the page structure more accurately ---
  const structure = await page.evaluate(() => {
    // Get top-level Elementor sections
    const topSections = document.querySelectorAll('.elementor-top-section, .elementor-section[data-element_type="section"], [class*="e-con-full"]');
    return Array.from(topSections).map((el, i) => {
      const rect = el.getBoundingClientRect();
      const classes = el.className || '';
      return {
        index: i,
        classes: classes.toString().substring(0, 150),
        id: el.id || '',
        top: Math.round(el.offsetTop),
        height: Math.round(el.offsetHeight),
        innerText: (el.innerText || '').substring(0, 200).replace(/\n/g, ' ')
      };
    }).filter(s => s.height > 50);
  });

  console.log(`\nFound ${structure.length} top-level sections:`);
  structure.forEach(s => {
    const preview = s.innerText.substring(0, 80);
    console.log(`  [${s.index}] top:${s.top}px h:${s.height}px | "${preview}"`);
  });

  // Scroll through all sections and capture
  const usedNames = new Set();
  for (const sec of structure) {
    await page.evaluate((top) => window.scrollTo(0, Math.max(0, top - 80)), sec.top);
    await delay(800);

    const textHint = sec.innerText.toLowerCase();
    const classHint = sec.classes.toLowerCase();
    const combined = textHint + ' ' + classHint;

    let baseName;
    if (combined.includes('welcome') || combined.includes('about bal') || (combined.includes('about') && sec.index < 3)) {
      baseName = 'section-about';
    } else if (combined.includes('our service') || combined.includes('dental service')) {
      baseName = 'section-services';
    } else if (combined.includes('our team') || combined.includes('meet our') || combined.includes('doctor') || combined.includes('dr.') || combined.includes('dentist')) {
      baseName = 'section-team';
    } else if (combined.includes('testimonial') || combined.includes('review') || combined.includes('what our patient') || combined.includes('patient say')) {
      baseName = 'section-testimonials';
    } else if (combined.includes('gallery') || combined.includes('before') && combined.includes('after')) {
      baseName = 'section-gallery';
    } else if (combined.includes('contact') || combined.includes('get in touch') || combined.includes('location')) {
      baseName = 'section-contact';
    } else if (combined.includes('appointment') || combined.includes('book') || combined.includes('schedule')) {
      baseName = 'section-appointment';
    } else if (combined.includes('why choose') || combined.includes('why us') || combined.includes('our advantage')) {
      baseName = 'section-why-choose-us';
    } else if (combined.includes('special') || combined.includes('offer') || combined.includes('promo')) {
      baseName = 'section-promotions';
    } else if (combined.includes('faq') || combined.includes('frequently')) {
      baseName = 'section-faq';
    } else if (combined.includes('insurance') || combined.includes('payment')) {
      baseName = 'section-insurance';
    } else if (combined.includes('blog') || combined.includes('news') || combined.includes('article')) {
      baseName = 'section-news';
    } else if (sec.index === 0) {
      baseName = 'section-hero';
    } else {
      baseName = `section-block-${sec.index}`;
    }

    let filename = `${baseName}.png`;
    let counter = 2;
    while (usedNames.has(filename)) {
      filename = `${baseName}-${counter}.png`;
      counter++;
    }
    usedNames.add(filename);

    const clipHeight = Math.min(sec.height + 80, 1400);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, filename), clip: { x: 0, y: 0, width: 1920, height: clipHeight } });
    console.log(`Captured: ${filename} (h:${sec.height}px, text: "${sec.innerText.substring(0,50)}")`);
  }

  // --- BUTTON HOVER (after popup dismiss) ---
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(300);
  // Dismiss any lingering popup
  await page.keyboard.press('Escape');
  await delay(300);

  try {
    const btns = page.locator('.elementor-button, .ast-button, a.btn, button.btn, [class*="cta-btn"]');
    const count = await btns.count();
    console.log(`Button count after popup: ${count}`);
    if (count > 0) {
      for (let i = 0; i < Math.min(count, 5); i++) {
        const btn = btns.nth(i);
        try {
          await btn.scrollIntoViewIfNeeded();
          await delay(200);
          if (await btn.isVisible({ timeout: 500 })) {
            await btn.screenshot({ path: path.join(SCREENSHOTS_DIR, `component-button-${i === 0 ? 'primary' : i}-default.png`) });
            await btn.hover({ force: true });
            await delay(400);
            await btn.screenshot({ path: path.join(SCREENSHOTS_DIR, `component-button-${i === 0 ? 'primary' : i}-hover.png`) });
            console.log(`Captured button ${i} default + hover`);
            break;
          }
        } catch (e) {
          console.log(`Button ${i}: ${e.message.substring(0, 80)}`);
        }
      }
    }
  } catch (e) {
    console.log('Button pass2: ' + e.message.substring(0, 100));
  }

  // --- MOBILE MENU (try different approach) ---
  const mobileCtx2 = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const mobilePage2 = await mobileCtx2.newPage();
  await mobilePage2.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await delay(2000);
  // Dismiss popup
  await mobilePage2.keyboard.press('Escape');
  await delay(300);

  // Try various hamburger selectors
  const allButtons = await mobilePage2.evaluate(() => {
    return Array.from(document.querySelectorAll('button, [role="button"], a')).map(el => ({
      tag: el.tagName,
      classes: el.className.toString().substring(0, 80),
      text: el.innerText.trim().substring(0, 30),
      ariaLabel: el.getAttribute('aria-label') || '',
      visible: el.offsetParent !== null && el.offsetHeight > 0
    })).filter(el => el.visible);
  });
  console.log('\nAll visible buttons/links on mobile:');
  allButtons.forEach(b => console.log(`  ${b.tag} | "${b.classes}" | "${b.text}" | aria:"${b.ariaLabel}"`));

  // Try to find and click the hamburger
  const menuBtnSelectors = [
    '.ast-mobile-menu-buttons button',
    'button.ast-mobile-menu-trigger-btn',
    '[class*="mobile-menu"] button',
    '[class*="mobile-nav"] button',
    'button[aria-expanded]',
    '.menu-toggle',
    '#ast-mobile-header button',
    '.ast-header-break-point button'
  ];
  let mobileMenuOpened = false;
  for (const sel of menuBtnSelectors) {
    try {
      const el = mobilePage2.locator(sel).first();
      if (await el.isVisible({ timeout: 500 })) {
        await el.click();
        await delay(1000);
        await mobilePage2.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-mobile-open.png') });
        console.log('Captured: nav-mobile-open.png');
        mobileMenuOpened = true;
        break;
      }
    } catch (e) {}
  }
  if (!mobileMenuOpened) {
    // Just capture the mobile nav area as-is
    await mobilePage2.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-mobile-default.png'), clip: { x: 0, y: 0, width: 375, height: 100 } });
    console.log('Captured: nav-mobile-default.png (fallback)');
  }
  await mobileCtx2.close();

  // --- GALLERY CLOSE-UP ---
  try {
    await page.evaluate(() => window.scrollTo(0, 0));
    const galleryItems = page.locator('[class*="gallery"] img, .elementor-gallery-item img, [class*="swiper"] img');
    const count = await galleryItems.count();
    console.log(`Gallery items: ${count}`);
    if (count > 0) {
      await galleryItems.first().scrollIntoViewIfNeeded();
      await delay(500);
      const parent = galleryItems.first().locator('..');
      await parent.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-gallery-item.png') });
      console.log('Captured: component-gallery-item.png');
    }
  } catch (e) {
    console.log('Gallery item: ' + e.message.substring(0, 100));
  }

  // --- TESTIMONIAL/REVIEW CARD ---
  try {
    const testimonials = page.locator('[class*="testimonial"], [class*="review"], .elementor-testimonial, [class*="testimonial-item"]');
    if (await testimonials.count() > 0) {
      await testimonials.first().scrollIntoViewIfNeeded();
      await delay(500);
      await testimonials.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-testimonial-card.png') });
      console.log('Captured: component-testimonial-card.png');
    }
  } catch (e) {
    console.log('Testimonial: ' + e.message.substring(0, 100));
  }

  // --- FORM (contact/appointment form) ---
  try {
    const forms = page.locator('form, [class*="contact-form"], [class*="appointment-form"]');
    if (await forms.count() > 0) {
      await forms.first().scrollIntoViewIfNeeded();
      await delay(500);
      await forms.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-form.png') });
      console.log('Captured: component-form.png');
    }
  } catch (e) {
    console.log('Form: ' + e.message.substring(0, 100));
  }

  // --- SERVICE CARD ---
  try {
    const serviceCards = page.locator('[class*="service"] .elementor-widget-container, [class*="service-item"], [class*="service-card"]');
    if (await serviceCards.count() > 0) {
      await serviceCards.first().scrollIntoViewIfNeeded();
      await delay(500);
      await serviceCards.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-service-card.png') });
      console.log('Captured: component-service-card.png');
    }
  } catch (e) {
    console.log('Service card: ' + e.message.substring(0, 100));
  }

  // --- TEAM MEMBER CARD ---
  try {
    const teamCards = page.locator('[class*="team-member"], [class*="staff-member"], .elementor-team-member');
    if (await teamCards.count() > 0) {
      await teamCards.first().scrollIntoViewIfNeeded();
      await delay(500);
      await teamCards.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-team-member-card.png') });
      console.log('Captured: component-team-member-card.png');
    }
  } catch (e) {
    console.log('Team card: ' + e.message.substring(0, 100));
  }

  // --- FLIP CARDS ---
  try {
    const flipCards = page.locator('.elementor-flip-box, [class*="flip-box"], [class*="flip-card"]');
    const count = await flipCards.count();
    if (count > 0) {
      console.log(`Found ${count} flip box cards`);
      await flipCards.first().scrollIntoViewIfNeeded();
      await delay(500);
      await flipCards.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-flipbox-default.png') });
      // Hover
      await flipCards.first().hover();
      await delay(600);
      await flipCards.first().screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-flipbox-hover.png') });
      console.log('Captured: component-flipbox-default.png + hover');
    }
  } catch (e) {
    console.log('Flip box: ' + e.message.substring(0, 100));
  }

  await ctx.close();
  await browser.close();
  console.log('\n=== PASS 2 COMPLETE ===');

  const files = fs.readdirSync(SCREENSHOTS_DIR).filter(f => f.endsWith('.png'));
  console.log(`\nTotal files: ${files.length}`);
  files.sort().forEach(f => console.log(`  - ${f}`));
}

main().catch(err => {
  console.error('FATAL ERROR:', err);
  process.exit(1);
});
