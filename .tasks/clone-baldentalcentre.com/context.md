# Website Clone Task

**Target URL:** https://baldentalcentre.com/
**Project Type:** Next.js 16.2.6 (App Router) — see AGENTS.md: this is NOT the Next.js you know, breaking changes apply. Cloner MUST read `node_modules/next/dist/docs/` before writing code.
**Created:** 2026-05-12
**Status:** In Progress

## Output Conventions
- Component: `app/clone/page.tsx` (single file)
- Styling: Tailwind v4 with arbitrary values for exact colors (`bg-[#hex]`)
- Animations: `motion/react` (NOT framer-motion)
- Assets reference `/images/...`, `/videos/...`, `/icons/...` (from `public/`)

## Screenshot Inventory

### Full-page captures
- `full-page-desktop.png` — complete page at 1920x1080 viewport (full scroll)
- `full-page-tablet.png` — complete page at 1024x768 viewport (full scroll)
- `full-page-mobile.png` — complete page at 375x812 viewport (full scroll)

### Viewport scroll strips (desktop 1920x1080, sequential 900px windows)
- `viewport-scroll-00.png` — page top (scrollY: 0): hero/header area
- `viewport-scroll-01.png` — scrollY 900px: below hero, first content sections
- `viewport-scroll-02.png` — scrollY 1800px: mid-page content
- `viewport-scroll-03.png` — scrollY 2700px: team/about area
- `viewport-scroll-04.png` — scrollY 3600px: gallery/office tour area
- `viewport-scroll-05.png` — scrollY 4500px: services/promotions area
- `viewport-scroll-06.png` — scrollY 5400px: financial options / services cards
- `viewport-scroll-07.png` — scrollY 6300px: testimonials / reviews area
- `viewport-scroll-08.png` — scrollY 7200px: footer area
- `viewport-desktop-initial.png` — first viewport view (1920x1080) on page load before scroll

### Sections (desktop 1920x1080, element-level clips)
- `section-nav.png` — site header/navigation bar
- `section-hero.png` — hero slider section (viewport clip at top of page)
- `hero-desktop.png` — hero/header area captured at 1920x1080 initial viewport
- `hero-slide-2.png` — second slide of hero carousel (if captured)
- `section-about.png` — top info/announcement bar ("Dental Emergencies Welcome Open 7 Days")
- `section-services.png` — dental services section with flip boxes or service cards
- `section-services-2.png` — second services section / service listing variant
- `services-section-desktop.png` — "dentalServices" class section with Preventive & Cosmetic Dentistry cards
- `section-team.png` — team/doctor profile section
- `section-team-2.png` — secondary team-related section
- `section-team-3.png` — third team-related section
- `section-gallery.png` — gallery / image grid section
- `section-gallery-2.png` — second gallery section (before/after or office tour)
- `section-contact.png` — contact information panel ("Our Location" area)
- `section-testimonials.png` — testimonials / patient reviews section
- `section-appointment.png` — social media bar (Facebook/Instagram/YouTube icons)
- `section-appointment-2.png` — "Book Appointment" CTA bar
- `section-appointment-3.png` — "OPEN 7 DAYS A WEEK | ACCEPTING APPOINTMENTS" banner
- `section-footer.png` — footer section element
- `footer-desktop.png` — full footer as seen at bottom of page (1920x1080 clip)
- `section-block-5.png` through `section-block-34.png` — Elementor sub-section blocks (row/column level) captured in order of page position; these cover hero slideshow panels, about text, team photos, service cards, gallery items, appointment form, hours, languages, location, reviews CTA, and copyright bar

### Named sub-sections (pass 2 — content-identified)
- `section-appointment.png` — social media icon bar at very top
- `section-about.png` — emergency/hours announcement bar
- `section-appointment-2.png` — "Book Appointment" button bar
- `section-contact.png` — contact us / phone / email panel
- `section-block-26.png` — office hours panel (Mon–Sat 9am–7pm)
- `section-block-27.png` — languages spoken bar (English, Punjabi, Hindi, Bangoli, Telugu, Tagalog, Cantonese)
- `section-testimonials.png` — location address panel / reviews CTA area

### Components
- `component-nav-default.png` — top navigation bar in default (resting) state
- `component-nav-hover.png` — top navigation with first link hovered
- `component-nav-dropdown.png` — top navigation with dropdown/submenu visible
- `component-button-primary-default.png` — primary CTA button (phone number link) in default state
- `component-button-primary-hover.png` — primary CTA button in hover state
- `component-flipbox-default.png` — single flip box card in default (front) state
- `component-flipbox-flipped.png` — single flip box card in flipped (back/hover) state via JS class
- `component-flipbox-row.png` — row of 3 flip box cards at desktop width
- `component-baldental-card.png` — the BalDental Card element (#BalDental-Card)
- `component-slider-carousel.png` — Swiper carousel component close-up
- `component-icon-list.png` — Elementor icon list component
- `component-phone-button.png` — phone number anchor button element
- `component-social-icons.png` — social media icons widget (Facebook, Instagram, YouTube)

### Interactive / Navigation states
- `nav-mobile-default.png` — mobile header navigation bar at 375px width (closed state)
- `nav-mobile-open.png` — mobile navigation at 768px width after menu toggle click (Elementor menu)

## Animations Observed

- **Hero slider (Swiper.js)**: Full-width image carousel. Config: `transition: "slide"`, `transition_speed: 500ms`, `autoplay: true`, `autoplay_speed: 5000ms`, `infinite: true`, `navigation: "dots"` (pagination bullets), `pause_on_hover: true`. 6 slides total.
- **Flip box cards**: 3 cards. CSS 3D flip effect — `perspective: 1000px`, `transform-style: preserve-3d`. Both `.elementor-flip-box__front` and `.elementor-flip-box__back` transition: `0.6s ease-in-out` on `all` properties. Triggered on `:hover`.
- **Scroll-triggered sections**: Elementor animations via `data-settings` — `"animation":"slideInUp"` with staggered delays (0ms, 300ms, 500ms, 700ms) on promotion cards. Many sections use `"animation":"zoomIn"` via `_animation` attribute. These fire when section enters viewport.
- **Button hover**: All CTA buttons: `transition: all 0.3s ease`. Hover changes background color.
- **Nav link hover**: Nav links: `transition: all 0.3s ease`. Color change on hover.
- **Popup modal**: Elementor popup modal appears on page load. Contains promotional image (`popup-promo.jpg`). Dismissible via close button.
- **Social icons hover**: Social icon circles: `transition: all 0.3s ease`. Background color change on hover.

## Color Palette

All values from `getComputedStyle` — exact computed hex.

### Primary Brand Colors
| Role | Hex | Source / Used in |
|------|-----|-----------------|
| Brand gold / primary accent | `#a2844e` | Buttons (bg), nav links, headings, section bg, flip-box back (81% opacity: `rgba(162,132,78,0.81)`), footer bar, form submit |
| Brand navy / dark | `#000033` | Body text, H1 headings, paragraph text, header bg, footer bg, social icon bg, dark section bg |
| Brand cream / off-white | `#f7f5ea` | Page bg alternate sections, footer text color, header bg |

### Surface Colors
| Role | Hex | Used in |
|------|-----|---------|
| White | `#ffffff` | Body bg, button text, form inputs bg, flip-box front text |
| Cream / warm white | `#f7f5ea` | Section bg (nav, hero section wrapper, location section), secondary surface |
| Teal / mint (flip front) | `#1abc9c` | Flip box front face background |
| Dark charcoal accent | `#292d32` | Button accent bg (phone CTA wrapper bg), dark element |

### Text Colors
| Role | Hex | Used in |
|------|-----|---------|
| Primary text (navy) | `#000033` | Body paragraphs, H1, H4 headings |
| Secondary text (slate) | `#334155` | Body default, meta text |
| Muted text (slate) | `#475569` | Form placeholder, secondary |
| Dark medium | `#33373d` | Nav text, secondary labels |
| Gold / accent | `#a2844e` | H2, H6, heading titles, section labels, nav active links |
| Footer text | `#f7f5ea` | All footer headings, links, paragraphs |
| White | `#ffffff` | CTA button text, headings on dark backgrounds |
| Promo heading white | `#ffffff` | H2/H5 in promotion section on dark bg |

### Interactive Colors
| Role | Hex | Used in |
|------|-----|---------|
| Link color | `#046bd2` | Default `<a>` tags, Elementor flip-back links |
| Border default | `#d1d5db` | Form input borders |
| Border form focus | `#7aa4ff` | Input focus border |

### Section-Level Backgrounds (in scroll order)
| Section | Hex | Notes |
|---------|-----|-------|
| Top address bar | `#000033` | Fixed 58px height bar at very top |
| Nav row | `#f7f5ea` | Sticky nav, 92px height |
| Hero section wrapper | `#f7f5ea` | 918px height, contains Swiper |
| Emergency bar row | transparent / `rgba(0,0,0,0)` | 85px, inherits |
| Promotions row | `#000033` | 316px, dark bg, pad 50px T/B |
| Why Choose row | transparent | 736px |
| Office Tour / Gallery | `#000033` | 2220px, dark navy |
| Special Promos row | transparent | 692px, contains flip boxes |
| Affordable Dentistry | transparent | 469px |
| Featured Services | transparent | 131px |
| FAQ section | transparent | 424px |
| NIHB row | transparent | 368px |
| Location section | `#f7f5ea` | 758px |
| "Open 7 Days" banner | `#000033` | 114px, pad 15px T/B |
| Google Maps embed | transparent | 458px |
| Contact/footer info | `#000033` | 618px |
| Copyright bar | `#f7f5ea` | 110px |

### CSS Custom Properties (Elementor + Astra globals)
```css
--e-global-color-primary: #A2844E;
--e-global-color-secondary: #F7F5EA;
--e-global-color-text: #000033;
--e-global-color-accent: #292D32;
--ast-global-color-0: #046bd2;
--ast-global-color-1: #045cb4;
--ast-global-color-2: #1e293b;
--ast-global-color-3: #334155;
--ast-global-color-4: #F0F5FA;
--ast-global-color-5: #FFFFFF;
--ast-global-color-6: #D1D5DB;
--ast-normal-container-width: 1200px;
--container-max-width: 1440px;
--kit-widget-spacing: 20px;
```

## Typography

**Font stack**: `Poppins, sans-serif` for all headings, body, buttons, nav.
**Secondary**: `Roboto, sans-serif` used for hero slide description text.
**Icon fonts**: `remixicon`, `teenyicon`, `feather` (loaded as self-hosted icon fonts, not Google Fonts CDN link found — fonts appear bundled with Elementor kit).

Note: No `<link>` to Google Fonts found in `<head>` — Poppins and Roboto may be self-hosted or loaded via Elementor's inline CSS. Cloner should include: `<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet">`

| Role | Family | Size | Weight | Line Height | Letter Spacing | Text Transform | Color |
|------|--------|------|--------|-------------|----------------|----------------|-------|
| H1 (page title) | Poppins | 43px | 600 | 60.2px (1.4) | normal | none | `#000033` |
| H2 (section heading) | Poppins | 48–50px | 600–800 | varies | normal | none/capitalize | `#a2844e` or `#f7f5ea` |
| H2 (promo price) | Poppins | 50px | 800 | 65px (1.3) | normal | none | `#ffffff` |
| H3 (flip box title) | Poppins | 50px | 600 | 50px (1.0) | normal | none | `#ffffff` |
| H3 (footer section heads) | Poppins | 24px | 600 | normal | normal | none | `#f7f5ea` |
| H4 (promo label) | Poppins | 20px | 800 | 24px (1.2) | normal | uppercase | `#000033` or `#ffffff` |
| H5 (promo sub-label) | Poppins | 16px | 400–600 | normal | normal | uppercase | `#ffffff` |
| H6 (section label) | Poppins | 16px | 600 | normal | normal | none | `#a2844e` or `#f7f5ea` |
| Body / P | Poppins | 16px | 400 | 26.4px (1.65) | normal | none | `#000033` |
| Nav links | Poppins | 16px | 400 | 20px | normal | none | `#a2844e` |
| Hero slide heading | Poppins | 30px | 600 | 30px (1.0) | normal | uppercase | `#a2844e` |
| Hero slide description | Roboto | 17px | 400 | 23.8px (1.4) | normal | none | `#000033` |
| Primary button (phone) | Poppins | 24px | 700 | 24px | normal | none | `#000033` |
| CTA button (gold) | Poppins | 16px | 400 | normal | normal | none | `#ffffff` |
| Footer text / copyright | Poppins | 12px | 400 | 26.4px | normal | none | `#f7f5ea` |

## Spacing & Layout

### Global Layout
- **Body**: no padding/margin; full 1920px viewport width
- **Container max-width**: 1200px (`--ast-normal-container-width`) / 1440px (`--container-max-width`)
- **Elementor widget spacing**: 20px (`--kit-widget-spacing: 20px`, `--widgets-spacing: 20px 20px`)
- **WordPress block gap**: 24px (`--wp--style--block-gap`)

### Section Padding (computed)
- Most sections: `padding: 0px` (set by Elementor on the `.elementor-section` wrapper; internal columns handle padding)
- Promotions section: `padding-top: 50px; padding-bottom: 50px`
- "Open 7 Days" banner: `padding-top: 15px; padding-bottom: 15px`
- Top address bar height: `58px`
- Sticky nav height: `92px`
- Hero section height: `918px` (full viewport minus header)

### Button Padding
- Phone CTA button: `padding: 24px 32px` (height: 72px, width: ~262px)
- Gold CTA buttons ("Book Appointment"): `padding: 24px 35px`
- "Book Appointment" secondary variant: `padding: 24px 32px`
- Form submit button: `padding: 15px 0px` (full width)

### Card / Component Dimensions
- Flip box cards: `440px × 400px` each; arranged in 3-column row
- Flip box grid gap: `20px` (column and row gap)
- Office tour image grid: 5 images in 3-2 or mosaic layout

### Form
- Input: `padding: 12px 16px`, height ~40px, radius 4px, border `1px solid #d1d5db`, shadow `rgba(0,0,0,0.05) 0px 1px 2px`
- Submit: full width, `padding: 15px 0`, bg `#a2844e`, color `#fff`, hover bg `#f7f5ea`, hover color `#a2844e`

## Components

### Navigation (Sticky Header)
- Position: sticky (`sticky_on: ["desktop","tablet","mobile"]`, sticky offset 0)
- Background: `#f7f5ea` (cream)
- Height: 92px on desktop
- Layout: Logo left, nav links center, phone CTA + book btn right
- Logo: `logo-main.png` (112×70px)
- Nav links: Poppins 16px/400, color `#a2844e`, hover transition 300ms ease
- Dropdown menus with caret-down SVG icon
- Mobile: hamburger/burger toggle layout

### Phone CTA Button (Header)
- Text: "416-267-6789"
- Font: Poppins 24px/700
- Color: `#000033`
- Background: transparent (wrapper bg `#292d32` 0 opacity)
- Padding: 24px 32px
- Border radius: 8px
- Transition: all 0.3s ease

### Book Appointment Button (Primary CTA)
- Text: "Book Appointment"
- Background: `#a2844e` (brand gold)
- Color: `#ffffff`
- Padding: 24px 35px
- Border radius: 8px
- Font: Poppins 16px/400
- Transition: all 0.3s ease
- URL: https://baldentalcentre.com/bookings/

### Flip Box Cards (3 cards in "Special Promotions" section)
- Container: `440px × 400px`, `perspective: 1000px`, `transform-style: preserve-3d`
- **Front face**: bg `#1abc9c` (teal/mint), color `#ffffff`
  - Contains background images: `flipbox-dental-implants-front.jpg`, `flipbox-invisalign-front.jpg`, `flipbox-hygiene-front.jpg`
  - No visible title text on front (image only)
  - Transition: `all 0.6s ease-in-out`
- **Back face**: bg `rgba(162, 132, 78, 0.81)` (translucent gold)
  - Card 1: Title "Dental Implants", Desc "for $3,000 (all-inclusive)"
  - Card 2: Title "Invisalign", Desc "at $5,000"
  - Card 3: Title "Hygiene Services", Desc "at $99"
  - Title: H3, Poppins 50px/600, white
  - CTA button (gold bg `#a2844e`, white text, radius 8px)
  - Transition: `all 0.6s ease-in-out`
- Grid gap: 20px between cards

### Social Icons
- Platforms: Facebook, Instagram (ri-instagram-fill), YouTube
- Icon size: ~21px (font-based icons)
- Container: `38px × 38px`, border-radius 10%, bg `#000033`
- Icon color: `#69727d` (default), white on hover
- Transition: all 0.3s ease
- Facebook: https://www.facebook.com/profile.php?id=61554432576015
- Instagram: https://www.instagram.com/baldentalcentreca/
- YouTube: https://www.youtube.com/channel/UCSMxHRacxLftVjytujOSfmw

### Form (HappyForms contact form)
- Input bg: `#ffffff`, text `#475569`, border `1px solid #d1d5db`
- Input focus border: `#7aa4ff`
- Input border-radius: 4px
- Input padding: `12px 16px`
- Submit bg: `#a2844e`, text `#ffffff`, hover bg: `#f7f5ea`, hover text: `#a2844e`
- Submit border-radius: 4px
- Submit transition: 0.25s ease-in

### Hero Swiper Carousel
- Full width: 1920px; height: 918px (desktop)
- Transition type: `slide` (horizontal slide)
- Transition speed: `500ms`
- Autoplay: `5000ms` interval, pauses on hover
- Loop: infinite
- Navigation: dots/bullets pagination (no prev/next arrows)
- Slides: 6 total (see Page Structure for content)
- Slide layout: image RIGHT side, text content LEFT side (two columns within each slide)
- Heading style: Poppins 30px/600, uppercase, color `#a2844e`
- Description: Roboto 17px/400, color `#000033`
- CTA button: "Read more", gold bg `#a2844e`, white text, radius 8px, padding 24px 32px

### Office Tour Gallery
- 5 images arranged in grid (approximately 3-column + 2-column layout)
- Images: `office-tour-1.png` through `office-tour-5.png`
- Each image ~698×398px
- Section has `animation: "zoomIn"` on scroll

### Icon List Items
- Icon size: 35px (`--e-icon-list-icon-size: 35px`)
- Icon color: `#a2844e`
- Text: Poppins 16px/400, color `#000033` or `#f7f5ea`

## Animations

### Hero Slider (Swiper.js)
- Transition type: `slide` (horizontal)
- Transition duration: `500ms`
- Autoplay interval: `5000ms`
- Pause on hover: yes
- Pause on interaction: yes
- Loop: infinite
- Pagination: dots (bullets)

### Flip Box
- Mechanism: CSS 3D transform (`rotateY`)
- Container: `perspective: 1000px`, `transform-style: preserve-3d`
- Front: `transform: rotateY(0deg)` → `rotateY(-180deg)` on hover
- Back: `transform: rotateY(180deg)` → `rotateY(0deg)` on hover
- Duration: `600ms`, easing: `ease-in-out`
- Property: `all` (covers transform, opacity)

### Scroll-Triggered Animations (Elementor)
- Promotion cards (flip boxes): `animation: "slideInUp"` with stagger: 0ms, 300ms, 500ms, 700ms
- About / service sections: `animation: "zoomIn"` (many sections)
- Animations fire once when element enters viewport

### Button Hover
- All buttons: `transition: all 0.3s ease`
- Primary gold button hover: bg darkens (approx)
- Phone button: color shift

### Nav Links
- `transition: all 0.3s ease` (from `.elementor-button` computed value)

### Social Icons
- `transition: all 0.3s ease`
- Hover: icon color becomes white, background may lighten

### Popup Modal
- Appears on page load
- Contains `popup-promo.jpg` (promotional offer image)
- Dismissible via close button

## Page Structure

Top-to-bottom in render order (scroll positions approximate at 1920×1080):

1. **Top Address Bar** (y=0, h=58px) — bg `#000033`; icon list with address "4 GREYSTONE WALK DR #4, SCARBOROUGH, ON M1K 5J2, CANADA"; social icons (Facebook, Instagram, YouTube) on right side
2. **Sticky Navigation** (y=58, h=92px) — bg `#f7f5ea` cream; sticky (top=0); logo left; nav links center (Home, About Us▼, Our Services▼, New Patients, Blog, Contact Us); phone "416-267-6789" + "Book Appointment" button right
3. **Hero Swiper Section** (y=150, h=918px) — bg `#f7f5ea`; 6-slide carousel; LEFT column: H6 "Dentist - Scarborough, Ontario" (gold), H1 "Smile Brighter with Dentist in Scarborough" (navy 43px), description paragraph, "Read more" button; RIGHT column: hero slide image; slides auto-advance every 5s
   - Slide 1: "COMPREHENSIVE DENTAL CARE For Scarborough Families of All Ages" | `hero-slide-1-comprehensive-dental-care.png`
   - Slide 2: "DENTAL CROWNS & BRIDGES Restore Teeth & Regain Confidence" | `hero-slide-2-dental-crowns-bridges.png`
   - Slide 3: "DENTAL EMERGENCIES WELCOME Injured Tooth? In Pain?" | `hero-slide-3-dental-emergencies.png`
   - Slide 4: "STUNNING COSMETIC DENTISTRY Get the Smile of Your Dreams" | `hero-slide-4-cosmetic-dentistry.png`
   - Slide 5: "MODERN DENTAL IMPLANTS Replace Missing Teeth" | `hero-slide-5-dental-implants.png`
   - Slide 6: "INVISALIGN® CLEAR BRACES Discreetly Straighten Teeth" | `hero-slide-6-invisalign.png`
4. **Emergency / Services Bar** (y=1068, h=85px) — transparent bg; icon list items: "Dental Emergencies Welcome", "Open 7 Days a Week", phone "416-267-6789", address; single-row info strip
5. **Promotions / Holiday Special** (y=1153, h=316px) — bg `#000033`; padding 50px top/bottom; 4-column layout showing: "Holiday Special" (H4 uppercase navy→white), "$3,999" (H2 50px/800 white), "Clear Aligners for only" / "all inclusive" labels; then "$5,000 INVISALIGN", "$3,000 Dental Implants", "$99 Hygiene Services" — animated with `slideInUp` (stagger 0/300/500/700ms)
6. **Why Choose Us** (y=1519, h=736px) — transparent bg; H2 "Why Choose Bal Dental Centre as Your Trusted Dentist in Scarborough?" (gold 30px/600); image `about-why-choose.png` left, text content right; `animation: zoomIn` scroll trigger; includes icon list with services (Preventive Dentistry, Dental Crowns & Bridges, Root Canals, Cosmetic Dentistry, Dental Implants, Invisalign)
7. **Office Tour / Gallery** (y=2305, h=2220px) — bg `#000033`; H2 "Tour Our Scarborough Dental Office" (cream 48px/600); grid of 5 office tour photos (`office-tour-1.png` to `office-tour-5.png`); three-column mosaic layout; large section includes contact form and smiles collage (`smiles-collage.png`, `gallery-grid.png`); `animation: zoomIn`
8. **Special Dental Promotions** (y=4525, h=692px) — transparent bg; H2 "Special dental promotions" (gold 48px/600 capitalize); 3 flip-box cards side by side (440×400 each, 20px gaps): Dental Implants / Invisalign / Hygiene Services; front=teal bg with image, back=translucent gold with price info
9. **Committed to Affordable Dentistry** (y=5267, h=469px) — transparent bg; H2 "Committed to Affordable Dentistry in Scarborough" (cream 48px/600); image `affordable-dentistry.png` / `about-dental-near-you.png`; body text; "Explore Financial Options" button (gold)
10. **Featured Dental Services** (y=5787, h=131px + ~512px) — transparent bg; H2 "Featured Dental Services" (gold 30px/600); subtitle "Click on a service below to learn more."; two-column service icon lists: left: Preventive Dentistry, Dental Crowns & Bridges, Root Canals & Emergencies; right: Cosmetic Dentistry, Dental Implants, Invisalign Clear Braces; `animation: zoomIn`
11. **FAQ Section** (y=6530, h=424px) — transparent bg; H2 "Frequently Asked Questions, Answered!" (gold 30px/600); accordion-style FAQ items; "Still have a few questions on your mind? Let's talk."
12. **NIHB Section** (y=7003, h=368px) — transparent bg; H2 "Bal Dental Centre Accepts NIHB for First Nations and Inuit Patients in Scarborough" (gold 30px/600); body text; "Book Appointment" button (gold)
13. **Location / Map Section** (y=7371, h=758px) — bg `#f7f5ea`; H6 "Dentist - Scarborough, Ontario" (gold), H2 "Conveniently Located Near You in Scarborough" (navy 42px/600); embedded Google Map (iframe); contact columns below (phone, address, hours)
14. **"Open 7 Days" Announcement Banner** (y=8129, h=114px) — bg `#000033`; padding 15px T/B; H2 text "OPEN 7 DAYS A WEEK" | "Accepting appointments on Saturday, Sunday and Late evenings" (white, 30px/600, uppercase); repeating marquee-style text
15. **Second Google Maps Embed** (y=8243, h=458px) — iframe embed only
16. **Contact / Footer Info** (y=8692, h=618px) — bg `#000033`; 5 columns: "Contact Us" (phone 647-490-0674), "Email Us" (info@baldentalcentre.com), "Office Hours" (Mon-Sat 9am-7pm, Closed Sunday), "Language We Speak" (English, Punjabi, Hindi, Bangoli, Telugu, Tagalog, Cantonese), "Our Location" (address + directions link); social icons; "How Was Your Experience?" reviews CTA + "Write a Review" button; "FEATURED SERVICES" icon list (9 items); "Opening Hours" list; "HAVE QUESTIONS? GET ANSWERS." contact form (HappyForms)
17. **Copyright Bar** (y=9310, h=110px) — bg `#f7f5ea`; text "© Bal Dental Centre | Sitemap | All rights reserved"; Poppins 12px

**On-load popup**: Elementor popup modal fires on page load with `popup-promo.jpg` (1024×1024px promotional image), dismissible via X button.

**Nav dropdowns**:
- "About Us" → Meet Our Team, Why Us, Tour Our Office, How To Select The Best Dentist, Smile Gallery, Blog, NIHB (First Nations)
- "Our Services" → Preventive Dentistry, Dental Implants, Dental Crowns & Bridges, Dentures & Partials, Tooth-Colored Fillings, Root Canal, Tooth Extractions, Cosmetic Dentistry, Porcelain Veneers, Teeth Whitening, Lumineers, Orthodontics, Composite Bonding, Invisalign Clear Braces, Snap-On Smile, TMJ Therapy, Sedation Dentistry, Dental Emergency

## Asset Manifest

All files saved to `public/images/` (unless noted).

### Logo & Branding
| File | Description | Original Dimensions |
|------|-------------|-------------------|
| `public/images/logo-main.png` | Primary logo "Bal Dental Centre – trusted dentist in Scarborough" | 112×70px |
| `public/images/logo-secondary.png` | Secondary decorative logo / deco-logo | ~150×141px |
| `public/images/logo-secondary-sm.png` | Secondary logo small variant | 150×141px |
| `public/images/award-badge.png` | Award badge image | 205×163px |
| `public/images/pracpros-logo.png` | PracPros (website designer) logo in footer | small |

### Hero Slider Images (6 slides, right-column)
| File | Slide Content | Dimensions |
|------|--------------|------------|
| `public/images/hero-slide-1-comprehensive-dental-care.png` | Slide 1: Comprehensive dental care | ~1200×918px |
| `public/images/hero-slide-2-dental-crowns-bridges.png` | Slide 2: Dental crowns & bridges | similar |
| `public/images/hero-slide-3-dental-emergencies.png` | Slide 3: Dental emergencies welcome | similar |
| `public/images/hero-slide-4-cosmetic-dentistry.png` | Slide 4: Stunning cosmetic dentistry | similar |
| `public/images/hero-slide-5-dental-implants.png` | Slide 5: Modern dental implants | similar |
| `public/images/hero-slide-6-invisalign.png` | Slide 6: Invisalign clear braces | similar |

### About / Content Images
| File | Description | Dimensions |
|------|-------------|------------|
| `public/images/about-why-choose.png` | "Why Choose Us" section — happy patient photo | 525×568px |
| `public/images/about-why-choose-sm.png` | Smaller version | 277×300px |
| `public/images/about-dental-near-you.png` | Affordable dentistry section image | 676×568px |
| `public/images/about-dental-near-you-sm.png` | Smaller version | 300×252px |
| `public/images/affordable-dentistry.png` | Making dentistry affordable image | 304KB |

### Office Tour / Gallery
| File | Description | Dimensions |
|------|-------------|------------|
| `public/images/office-tour-1.png` | Office interior photo 1 | 698×398px |
| `public/images/office-tour-2.png` | Office interior photo 2 | 698×398px |
| `public/images/office-tour-3.png` | Office interior photo 3 | 698×398px |
| `public/images/office-tour-4.png` | Office interior photo 4 | 698×398px |
| `public/images/office-tour-5.png` | Office interior photo 5 | 698×398px |
| `public/images/smiles-collage.png` | Patient smiles photo collage | bg-image in office section |
| `public/images/gallery-grid.png` (now removed — see note) | Gallery grid background | bg-image |

### Flip Box Card Images (Front face backgrounds)
| File | Card | Dimensions |
|------|------|------------|
| `public/images/flipbox-dental-implants-front.jpg` | Flip box 3 — Dental Implants | ~121KB |
| `public/images/flipbox-invisalign-front.jpg` | Flip box 2 — Invisalign | ~107KB |
| `public/images/flipbox-hygiene-front.jpg` | Flip box 1 — Hygiene Services | ~121KB |

### Patient Smiles Gallery (patient testimonials / smiles section)
| File | Description | Dimensions |
|------|-------------|------------|
| `public/images/patient-smiles-portrait.jpeg` | Portrait of smiling patient | 289×400px |
| `public/images/patient-smiles-collage-2.png` | Smiling faces collage | 379×401px |
| `public/images/patient-smiles-collage-wide.png` | Wide smiling faces banner | 690×277px |

### Popup
| File | Description | Dimensions |
|------|-------------|------------|
| `public/images/popup-promo.jpg` | Popup modal promotional image (full quality) | 745KB |
| `public/images/popup-promo-1024.jpg` | 1024×1024 version | 131KB |
| `public/images/popup-promo-768.jpg` | 768×768 version | 83KB |

### Inline SVG Icons (`public/icons/`)
20 inline SVGs saved as `icon-0.svg` through `icon-19.svg` — these are Elementor icon list SVGs, social icons, nav caret, etc. The main ones are icon-format social icons and checkmark-style list icons in the gold brand color.

### Key Contact / Business Info (for cloner reference)
- **Practice name**: Bal Dental Centre
- **Phone (primary)**: 416-267-6789 (`tel:+14162676789`)
- **Phone (secondary)**: 647-490-0674
- **Email**: info@baldentalcentre.com
- **Address**: 4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2, Canada
- **Hours**: Mon–Fri 9am–7pm, Sat 9am–6pm, Sun Closed
- **Languages**: English, Punjabi, Hindi, Bangoli, Telugu, Tagalog, Cantonese
- **Booking URL**: https://baldentalcentre.com/bookings/
- **Google Maps link**: https://www.google.com/maps/dir//Bal+Dental+Centre,+4+Greystone+Walk+Dr+%234,+Scarborough,+ON+M1K+5J2,+Canada/
- **Facebook**: https://www.facebook.com/profile.php?id=61554432576015
- **Instagram**: https://www.instagram.com/baldentalcentreca/
- **YouTube**: https://www.youtube.com/channel/UCSMxHRacxLftVjytujOSfmw
- **Review URL**: https://chatrbee.com/recommend?Bal-Dental-Centre&name=aa&numb=00&uniquekey=Bal-Dental-Centre.108&code=T7aIVqEHY5kZxCy&useremail=email
