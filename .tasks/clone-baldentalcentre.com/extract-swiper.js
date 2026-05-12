const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();
  await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

  const data = await page.evaluate(() => {
    // Get swiper element data-settings attribute
    const swipers = [...document.querySelectorAll('[data-settings], .swiper, .elementor-slides-wrapper, .elementor-main-swiper')];
    const swiperData = swipers.map(el => ({
      tag: el.tagName,
      id: el.id,
      classes: el.className.substring(0, 100),
      dataSettings: el.getAttribute('data-settings'),
      dataSliderId: el.getAttribute('data-slider-id'),
      dataAutoplay: el.getAttribute('data-autoplay'),
      dataLoop: el.getAttribute('data-loop'),
      dataSpeed: el.getAttribute('data-speed'),
      dataEffect: el.getAttribute('data-effect'),
    })).filter(e => e.dataSettings || e.dataAutoplay || e.dataSliderId);

    // Get navigation elements
    const swiperNav = {
      prevBtn: !!document.querySelector('.swiper-button-prev, .elementor-swiper-button-prev'),
      nextBtn: !!document.querySelector('.swiper-button-next, .elementor-swiper-button-next'),
      pagination: !!document.querySelector('.swiper-pagination'),
      paginationType: document.querySelector('.swiper-pagination-bullets') ? 'bullets' :
                      document.querySelector('.swiper-pagination-fraction') ? 'fraction' :
                      document.querySelector('.swiper-pagination-progressbar') ? 'progressbar' : 'none',
    };

    // Get slide content details for each slide
    const slides = [...document.querySelectorAll('.swiper-slide')].map((slide, i) => {
      const heading = slide.querySelector('.elementor-slide-heading, h1, h2, h3, h4, .elementor-heading-title');
      const desc = slide.querySelector('.elementor-slide-description, p, .elementor-text-editor');
      const btn = slide.querySelector('.elementor-slide-button, a.elementor-button, .elementor-button-link');
      const img = slide.querySelector('img');
      const cs = getComputedStyle(slide);

      // Check all children for bg images
      function getAllBgUrls(el) {
        const urls = [];
        const bg = getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none') {
          [...bg.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)].forEach(m => {
            if (!m[1].startsWith('data:')) urls.push(m[1]);
          });
        }
        [...el.children].forEach(child => urls.push(...getAllBgUrls(child)));
        return urls;
      }

      const bgUrls = getAllBgUrls(slide);

      return {
        index: i,
        isActive: slide.classList.contains('swiper-slide-active'),
        heading: heading?.textContent?.trim()?.substring(0, 100),
        headingColor: heading ? getComputedStyle(heading).color : null,
        headingFontSize: heading ? getComputedStyle(heading).fontSize : null,
        headingFontWeight: heading ? getComputedStyle(heading).fontWeight : null,
        headingTextTransform: heading ? getComputedStyle(heading).textTransform : null,
        desc: desc?.textContent?.trim()?.substring(0, 200),
        descColor: desc ? getComputedStyle(desc).color : null,
        btnText: btn?.textContent?.trim(),
        btnHref: btn?.href || btn?.getAttribute('href'),
        btnBg: btn ? getComputedStyle(btn).backgroundColor : null,
        btnColor: btn ? getComputedStyle(btn).color : null,
        btnBorderRadius: btn ? getComputedStyle(btn).borderRadius : null,
        imgSrc: img?.currentSrc || img?.src,
        bgUrls: [...new Set(bgUrls)],
        bgColor: cs.backgroundColor,
        bgAttachment: cs.backgroundAttachment,
        bgSize: cs.backgroundSize,
        bgPosition: cs.backgroundPosition,
        width: slide.offsetWidth,
        height: slide.offsetHeight,
        allText: slide.textContent.trim().substring(0, 300).replace(/\s+/g, ' ')
      };
    });

    // Check for the Elementor swiper config in window
    let elementorConfig = null;
    try {
      // Look at elementorFrontendConfig or elementorFrontend
      if (window.elementorFrontendConfig) {
        elementorConfig = JSON.stringify(window.elementorFrontendConfig).substring(0, 500);
      }
    } catch (e) {}

    // Get section background colors in detail
    const sectionColors = [...document.querySelectorAll('.elementor-section:not(.elementor-inner-section)')].map(sec => {
      const cs = getComputedStyle(sec);
      const bg = cs.backgroundImage;
      const bgUrl = bg && bg !== 'none' ? bg.match(/url\(['"]?([^'")\s]+)['"]?\)/) : null;
      return {
        id: sec.id,
        dataId: sec.getAttribute('data-id'),
        bgColor: cs.backgroundColor,
        bgUrl: bgUrl ? bgUrl[1] : null,
        bgSize: cs.backgroundSize,
        bgPosition: cs.backgroundPosition,
        bgAttachment: cs.backgroundAttachment,
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        paddingLeft: cs.paddingLeft,
        paddingRight: cs.paddingRight,
        minHeight: cs.minHeight,
        height: sec.offsetHeight,
        scrollY: sec.getBoundingClientRect().top + window.scrollY,
        headings: [...sec.querySelectorAll('h1,h2,h3,h4')].slice(0,2).map(h => h.textContent.trim().substring(0,50))
      };
    });

    // Get the hero section wrapper
    const heroWrapper = document.querySelector('.elementor-slides-wrapper, .swiper-wrapper');
    const heroSection = heroWrapper ? heroWrapper.closest('[class*="elementor-section"]') : null;
    let heroSectionStyle = null;
    if (heroSection) {
      const cs = getComputedStyle(heroSection);
      heroSectionStyle = {
        bgColor: cs.backgroundColor,
        height: heroSection.offsetHeight,
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
      };
    }

    // Get the popup modal details
    const popup = document.querySelector('[id*="popup"], .elementor-popup-modal');
    let popupDetails = null;
    if (popup) {
      const cs = getComputedStyle(popup);
      const img = popup.querySelector('img');
      const heading = popup.querySelector('h1,h2,h3,h4');
      const btn = popup.querySelector('a, button');
      popupDetails = {
        bg: cs.backgroundColor,
        width: cs.width,
        imgSrc: img ? (img.currentSrc || img.src) : null,
        heading: heading?.textContent?.trim(),
        btnText: btn?.textContent?.trim(),
        btnHref: btn?.href,
      };
    }

    // Get all anchor tags for CTA buttons with hrefs
    const ctaBtns = [...document.querySelectorAll('.elementor-button, a.elementor-button, .elementor-button-link')].map(btn => ({
      text: btn.textContent.trim(),
      href: btn.href || btn.getAttribute('href'),
      bg: getComputedStyle(btn).backgroundColor,
      color: getComputedStyle(btn).color,
      borderRadius: getComputedStyle(btn).borderRadius,
      padding: `${getComputedStyle(btn).paddingTop} ${getComputedStyle(btn).paddingRight}`,
      classes: btn.className.substring(0, 80)
    }));

    // Get all text colors used in headings and text
    const textColorsMap = new Map();
    [...document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,.elementor-heading-title')].forEach(el => {
      const c = getComputedStyle(el).color;
      if (!textColorsMap.has(c)) textColorsMap.set(c, { color: c, count: 0, sample: el.textContent.trim().substring(0, 30) });
      textColorsMap.get(c).count++;
    });

    return {
      swiperData,
      swiperNav,
      slides,
      elementorConfig,
      sectionColors,
      heroSectionStyle,
      popupDetails,
      ctaBtns: ctaBtns.slice(0, 15),
      textColors: [...textColorsMap.values()].sort((a,b) => b.count - a.count).slice(0, 10)
    };
  });

  console.log('\n=== SWIPER CONFIG ===');
  data.swiperData.forEach(s => {
    console.log(`${s.tag}.${s.classes.substring(0,40)}`);
    if (s.dataSettings) console.log('  data-settings:', s.dataSettings.substring(0, 500));
  });
  console.log('\nNav:', JSON.stringify(data.swiperNav));

  console.log('\n=== SLIDE DETAILS ===');
  data.slides.forEach(s => {
    console.log(`\nSlide ${s.index}${s.isActive ? ' [ACTIVE]' : ''}:`);
    console.log(`  heading: "${s.heading}" | color=${s.headingColor} | ${s.headingFontSize}/${s.headingFontWeight} | transform=${s.headingTextTransform}`);
    console.log(`  desc: "${s.desc ? s.desc.substring(0,80) : ''}" | color=${s.descColor}`);
    console.log(`  btn: "${s.btnText}" -> ${s.btnHref} | bg=${s.btnBg} color=${s.btnColor} radius=${s.btnBorderRadius}`);
    console.log(`  bgUrls: ${s.bgUrls.join(', ')}`);
    console.log(`  bgColor: ${s.bgColor} | ${s.width}x${s.height}`);
    console.log(`  full text: ${s.allText.substring(0,100)}`);
  });

  console.log('\n=== CTA BUTTONS ===');
  data.ctaBtns.forEach(b => console.log(`  "${b.text}" -> ${b.href} | bg=${b.bg} color=${b.color} radius=${b.borderRadius} pad=${b.padding}`));

  console.log('\n=== TEXT COLORS (most used) ===');
  data.textColors.forEach(c => console.log(`  ${c.color} (${c.count}x) e.g. "${c.sample}"`));

  console.log('\n=== SECTION COLORS ===');
  data.sectionColors.forEach(s => {
    if (s.bgColor !== 'rgba(0, 0, 0, 0)' || s.bgUrl) {
      console.log(`  [${s.id || s.dataId}] bg=${s.bgColor} url=${s.bgUrl ? s.bgUrl.substring(0,60) : ''} pad=${s.paddingTop}/${s.paddingBottom} h=${s.height}`);
      if (s.headings.length) console.log(`    headings: ${s.headings.join(' | ')}`);
    }
  });

  await browser.close();
  console.log('\nDone!');
}

main().catch(e => { console.error(e); process.exit(1); });
