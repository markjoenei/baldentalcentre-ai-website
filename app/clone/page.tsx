"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"

/* =====================================================
   DATA / CONTENT
   ===================================================== */

const navServices = [
  "Preventive Dentistry",
  "Dental Implants",
  "Dental Crowns & Bridges",
  "Dentures & Partials",
  "Tooth-Colored Fillings",
  "Root Canal",
  "Tooth Extractions",
  "Cosmetic Dentistry",
  "Porcelain Veneers",
  "Teeth Whitening",
  "Lumineers",
  "Orthodontics",
  "Composite Bonding",
  "Invisalign Clear Braces",
  "Snap-On Smile",
  "TMJ Therapy",
  "Sedation Dentistry",
  "Dental Emergency",
]

const navAbout = [
  "Meet Our Team",
  "Why Us",
  "Tour Our Office",
  "How To Select The Best Dentist",
  "Smile Gallery",
  "Blog",
  "NIHB (First Nations)",
]

const faqItems = [
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we accept most major insurance plans and will direct-bill on your behalf. We work with CDCP, NIHB, and many private insurers.",
  },
  {
    q: "Are you open on weekends?",
    a: "Yes! We are open 7 days a week — Monday to Saturday 9am–7pm (Sunday by appointment). We also accept dental emergencies.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book online via our booking page, call us at 416-267-6789, or walk in during office hours.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Absolutely. We offer flexible financing options to make your dental care affordable. Ask our team for details.",
  },
]

const whyChooseItems = [
  {
    title: "We Do It All",
    body: "From routine cleanings to dental implants, cosmetic veneers, and emergency care — we provide comprehensive dentistry under one roof so you never need a referral.",
  },
  {
    title: "Highly Trained Team",
    body: "Our dentists and hygienists undergo continuous education to bring you the latest techniques and technology in modern dentistry.",
  },
  {
    title: "IV Sedation Dentistry Available",
    body: "Anxious about dental visits? Our IV sedation option lets you sleep comfortably through complex procedures, waking up to a beautiful smile.",
  },
  {
    title: "State-Of-The-Art Dental Office",
    body: "We invest in the best equipment — digital X-rays, intraoral cameras, and comfortable treatment chairs — for precise, efficient care.",
  },
  {
    title: "Flexible Appointments",
    body: "Open 7 days a week including evenings and weekends. We work around your schedule so you never have to miss care.",
  },
  {
    title: "Dental Emergencies Welcome",
    body: "Tooth pain or injury? We accept same-day emergency appointments. Call us and we'll see you as soon as possible.",
  },
]

const featuredServices = [
  {
    id: 0,
    label: "Preventive Dentistry",
    heading: "PREVENTIVE DENTISTRY — PROTECT YOUR SMILE FOR LIFE",
    body: "Regular cleanings, exams, and fluoride treatments keep your teeth healthy and catch problems early before they become costly issues.",
    image: "/images/hero-slide-1-comprehensive-dental-care.png",
    url: "https://baldentalcentre.com/preventive-dentistry/",
  },
  {
    id: 1,
    label: "Dental Crowns & Bridges",
    heading: "DENTAL CROWNS & BRIDGES RESTORE TEETH & REGAIN CONFIDENCE",
    body: "Damaged or missing teeth can affect your smile and confidence. Our custom-crafted crowns and bridges restore full function and a natural appearance.",
    image: "/images/hero-slide-2-dental-crowns-bridges.png",
    url: "https://baldentalcentre.com/dental-crowns/",
  },
  {
    id: 2,
    label: "Root Canals & Emergencies",
    heading: "ROOT CANALS & EMERGENCIES — SAME-DAY PAIN RELIEF",
    body: "Severe toothache? We provide same-day emergency care and gentle root canal therapy to relieve pain and save your natural tooth.",
    image: "/images/hero-slide-3-dental-emergencies.png",
    url: "https://baldentalcentre.com/dental-emergency/",
  },
  {
    id: 3,
    label: "Cosmetic Dentistry",
    heading: "COSMETIC DENTISTRY — GET THE SMILE OF YOUR DREAMS",
    body: "Veneers, bonding, whitening, and smile makeovers — our cosmetic treatments are tailored to give you a radiant, confident smile.",
    image: "/images/hero-slide-4-cosmetic-dentistry.png",
    url: "https://baldentalcentre.com/cosmetic-dentistry/",
  },
  {
    id: 4,
    label: "Dental Implants",
    heading: "DENTAL IMPLANTS — PERMANENT NATURAL-FEELING TEETH",
    body: "Replace one or all your missing teeth with permanent implants that look and function exactly like your natural teeth. Starting at $3,000 all-inclusive.",
    image: "/images/hero-slide-5-dental-implants.png",
    url: "https://baldentalcentre.com/dental-implants/",
  },
  {
    id: 5,
    label: "Invisalign Clear Braces",
    heading: "INVISALIGN CLEAR BRACES — DISCREETLY STRAIGHTEN TEETH",
    body: "Virtually invisible aligners gradually straighten your teeth without metal wires or brackets. Available from $5,000.",
    image: "/images/hero-slide-6-invisalign.png",
    url: "https://baldentalcentre.com/invisalign/",
  },
]

/* =====================================================
   INLINE SVG HELPERS (reused across top bar + footer)
   ===================================================== */
function FacebookSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 512" className={className}>
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  )
}

function InstagramSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" className={className}>
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  )
}

function YouTubeSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 576 512" className={className}>
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  )
}

/* =====================================================
   MAIN COMPONENT
   ===================================================== */

export default function ClonePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [openWhyItem, setOpenWhyItem] = useState<number>(0)
  const [activeService, setActiveService] = useState<number>(1)

  return (
    <>
      {/* Google Fonts + keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Roboto:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-dropdown { display: none; position: absolute; top: 100%; left: 0; z-index: 9999; }
        .nav-item:hover .nav-dropdown { display: block; }
        @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-scroll-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      <div
        style={{ fontFamily: "Poppins, sans-serif", color: "#000033", overflowX: "hidden" }}
        className="min-h-screen bg-white"
      >
        {/* =====================================================
            TOP ADDRESS / SOCIAL BAR  (h=58px, bg=#000033)
            ===================================================== */}
        <div
          style={{ backgroundColor: "#000033", height: "58px", fontFamily: "Poppins, sans-serif" }}
          className="w-full flex items-center px-4"
        >
          <div className="max-w-[1200px] w-full mx-auto grid grid-cols-3 items-center">
            {/* Left: Address */}
            <div className="flex items-center gap-2 text-[#f7f5ea] text-[13px]">
              <svg viewBox="0 0 384 512" className="w-[14px] h-[14px] fill-[#a2844e] flex-shrink-0">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
              <span className="hidden sm:inline">4 Greystone Walk Dr #4 Scarborough, ON M1K 5J2</span>
              <span className="sm:hidden">Scarborough, ON M1K 5J2</span>
            </div>
            {/* Center: Phone */}
            <div className="flex items-center justify-center gap-2">
              <svg viewBox="0 0 512 512" className="w-[14px] h-[14px] fill-[#a2844e] flex-shrink-0">
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
              </svg>
              <a href="tel:+14162676789" style={{ color: "#a2844e", fontSize: "14px", fontWeight: 600, textDecoration: "none" }} className="hover:opacity-80 transition-opacity whitespace-nowrap">
                416-267-6789
              </a>
            </div>
            {/* Right: Social Icons */}
            <div className="flex items-center gap-2 justify-end">
              <a href="https://www.facebook.com/profile.php?id=61554432576015" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-[10%] bg-[#000033] border border-[#333] flex items-center justify-center group transition-all duration-300 hover:bg-[#1877f2]" aria-label="Facebook">
                <FacebookSVG className="w-[18px] h-[18px] fill-[#69727d] group-hover:fill-white transition-colors duration-300" />
              </a>
              <a href="https://www.instagram.com/baldentalcentreca/" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-[10%] bg-[#000033] border border-[#333] flex items-center justify-center group transition-all duration-300 hover:bg-[#e1306c]" aria-label="Instagram">
                <InstagramSVG className="w-[18px] h-[18px] fill-[#69727d] group-hover:fill-white transition-colors duration-300" />
              </a>
              <a href="https://www.youtube.com/channel/UCSMxHRacxLftVjytujOSfmw" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-[10%] bg-[#000033] border border-[#333] flex items-center justify-center group transition-all duration-300 hover:bg-[#ff0000]" aria-label="YouTube">
                <YouTubeSVG className="w-[18px] h-[18px] fill-[#69727d] group-hover:fill-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            STICKY NAVIGATION  (h=92px, bg=#f7f5ea)
            ===================================================== */}
        <nav
          style={{ backgroundColor: "#f7f5ea", height: "92px", fontFamily: "Poppins, sans-serif" }}
          className="sticky top-0 z-[1000] w-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        >
          <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-4">
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/logo-main.png" alt="Bal Dental Centre" width={112} height={70} priority />
            </Link>
            <div className="hidden lg:flex items-center gap-6">
              <a href="https://baldentalcentre.com/" style={{ color: "#a2844e", fontSize: "16px", fontWeight: 400 }} className="transition-all duration-300 hover:opacity-70 whitespace-nowrap">Home</a>
              <div className="nav-item relative">
                <button style={{ color: "#a2844e", fontSize: "16px", fontWeight: 400 }} className="flex items-center gap-1 transition-all duration-300 hover:opacity-70 whitespace-nowrap bg-transparent border-none cursor-pointer">
                  About Us
                  <svg viewBox="0 0 20 20" className="w-4 h-4 fill-[#a2844e]"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                <div className="nav-dropdown min-w-[220px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-lg py-2">
                  {navAbout.map((item) => (
                    <a key={item} href="#" style={{ color: "#000033", fontSize: "14px" }} className="block px-4 py-2 hover:bg-[#f7f5ea] hover:text-[#a2844e] transition-colors duration-200">{item}</a>
                  ))}
                </div>
              </div>
              <div className="nav-item relative">
                <button style={{ color: "#a2844e", fontSize: "16px", fontWeight: 400 }} className="flex items-center gap-1 transition-all duration-300 hover:opacity-70 whitespace-nowrap bg-transparent border-none cursor-pointer">
                  Our Services
                  <svg viewBox="0 0 20 20" className="w-4 h-4 fill-[#a2844e]"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                <div className="nav-dropdown min-w-[260px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-lg py-2">
                  {navServices.map((item) => (
                    <a key={item} href="#" style={{ color: "#000033", fontSize: "14px" }} className="block px-4 py-2 hover:bg-[#f7f5ea] hover:text-[#a2844e] transition-colors duration-200">{item}</a>
                  ))}
                </div>
              </div>
              <a href="#" style={{ color: "#a2844e", fontSize: "16px", fontWeight: 400 }} className="transition-all duration-300 hover:opacity-70 whitespace-nowrap">New Patients</a>
              <a href="#" style={{ color: "#a2844e", fontSize: "16px", fontWeight: 400 }} className="transition-all duration-300 hover:opacity-70 whitespace-nowrap">Blog</a>
              <a href="#" style={{ color: "#a2844e", fontSize: "16px", fontWeight: 400 }} className="transition-all duration-300 hover:opacity-70 whitespace-nowrap">Contact Us</a>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+14162676789" style={{ color: "#000033", fontSize: "24px", fontWeight: 700, padding: "24px 32px", borderRadius: "8px", transition: "all 0.3s ease", textDecoration: "none" }} className="hover:text-[#a2844e] inline-flex items-center gap-3">
                <span aria-hidden="true" className="inline-flex items-center justify-center w-11 h-11 rounded-full" style={{ backgroundColor: "#a2844e" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                416-267-6789
              </a>
            </div>
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <div className="w-6 h-0.5 bg-[#000033] mb-1.5 transition-all" />
              <div className="w-6 h-0.5 bg-[#000033] mb-1.5 transition-all" />
              <div className="w-6 h-0.5 bg-[#000033] transition-all" />
            </button>
          </div>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="lg:hidden overflow-hidden bg-[#f7f5ea] border-t border-[#e8e4d0]">
                <div className="px-4 py-4 flex flex-col gap-3">
                  {["Home", "About Us", "Our Services", "New Patients", "Blog", "Contact Us"].map((item) => (
                    <a key={item} href="#" style={{ color: "#a2844e", fontSize: "16px" }} className="py-2 border-b border-[#e8e4d0]">{item}</a>
                  ))}
                  <a href="tel:+14162676789" style={{ color: "#000033", fontSize: "20px", fontWeight: 700 }} className="py-2">416-267-6789</a>
                  <a href="https://baldentalcentre.com/bookings/" style={{ backgroundColor: "#a2844e", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", textAlign: "center" }}>Book Appointment</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* =====================================================
            HERO — static two-column layout
            LEFT: award badge, label, H1, paragraph, CTA
            RIGHT: 2×2 patient photo collage
            ===================================================== */}
        <section style={{ backgroundColor: "#f7f5ea", fontFamily: "Poppins, sans-serif", padding: "80px 0" }} className="w-full">
          <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-5">
              <div>
                <Image src="/images/award-badge.png" alt="Award badge" width={205} height={163} priority className="max-w-[140px] h-auto" />
              </div>
              <p style={{ color: "#a2844e", fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Dentist — Scarborough, Ontario
              </p>
              <h1 style={{ color: "#000033", fontSize: "42px", fontWeight: 700, lineHeight: "1.2" }}>
                Smile Brighter with Dentist in Scarborough
              </h1>
              <p style={{ color: "#000033", fontSize: "16px", lineHeight: "1.65" }}>
                At Bal Dental Centre, we offer complete family dentistry — from checkups and cleanings to crowns, implants, and cosmetic treatments. Open 7 days a week for your convenience.
              </p>
              <div>
                <a href="https://baldentalcentre.com/bookings/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#a2844e", color: "#ffffff", fontSize: "16px", fontWeight: 600, padding: "16px 36px", borderRadius: "8px", display: "inline-block", textDecoration: "none", transition: "all 0.3s ease" }} className="hover:opacity-90">
                  Book Appointment
                </a>
              </div>
            </div>
            {/* Right column: 2×2 collage */}
            <div className="flex-shrink-0 w-full lg:w-[520px]">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/patient-smiles-collage-wide.png" alt="Patient smiles" width={380} height={260} className="w-full h-[200px] object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/patient-smiles-collage-2.png" alt="Patient smiles" width={380} height={260} className="w-full h-[200px] object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/hero-slide-4-cosmetic-dentistry.png" alt="Cosmetic dentistry" width={380} height={260} className="w-full h-[200px] object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/hero-slide-1-comprehensive-dental-care.png" alt="Dental care" width={380} height={260} className="w-full h-[200px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EMERGENCY / 7-DAYS BAR  (bg=#000033)
            ===================================================== */}
        <div style={{ backgroundColor: "#000033", fontFamily: "Poppins, sans-serif" }} className="w-full flex items-stretch">
          <div className="flex-1 flex flex-wrap items-center justify-center gap-6 md:gap-10 px-6 py-5">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white flex-shrink-0">
                <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" />
              </svg>
              <span style={{ color: "#ffffff", fontSize: "15px", fontWeight: 500 }}>Dental Emergencies Welcome</span>
            </div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white flex-shrink-0">
                <path d="M148 288h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm108-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-96 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm192 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96-260v352c0 26.467-21.533 48-48 48H48c-26.467 0-48-21.533-48-48V112c0-26.467 21.533-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.467 0 48 21.533 48 48zm-48 346V160H48v298c0 3.309 2.691 6 6 6h340c3.309 0 6-2.691 6-6z" />
              </svg>
              <span style={{ color: "#ffffff", fontSize: "15px", fontWeight: 500 }}>Open 7 Days a Week</span>
            </div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 512 512" className="w-5 h-5 fill-white flex-shrink-0">
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
              </svg>
              <a href="tel:+14162676789" style={{ color: "#ffffff", fontSize: "15px", fontWeight: 500, textDecoration: "none" }} className="hover:text-[#a2844e] transition-colors">416-267-6789</a>
            </div>
          </div>
          <a href="https://baldentalcentre.com/bookings/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#a2844e", color: "#ffffff", fontSize: "16px", fontWeight: 600, padding: "0 40px", textDecoration: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", transition: "all 0.3s ease" }} className="hover:opacity-90 flex-shrink-0">
            Book Appointment
          </a>
        </div>

        {/* =====================================================
            PROMOTIONS STRIP  (bg=#000033, 4 cards)
            First card has gold bg, other three stay navy
            ===================================================== */}
        <section style={{ backgroundColor: "#000033", padding: "50px 0", fontFamily: "Poppins, sans-serif" }} className="w-full">
          <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Card 1 — Holiday Special (gold bg) */}
            <motion.div
              initial={{ y: 40, opacity: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-center py-8 px-6 rounded-lg"
              style={{ backgroundColor: "#a2844e" }}
            >
              <h4 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 800, textTransform: "uppercase", marginBottom: "8px" }}>Holiday Special</h4>
              <h2 style={{ color: "#ffffff", fontSize: "50px", fontWeight: 800, lineHeight: "1.1", marginBottom: "4px" }}>$3,999</h2>
              <p style={{ color: "#fff8ee", fontSize: "14px" }}>Clear Aligners for only</p>
              <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, textTransform: "uppercase" }}>All Inclusive</p>
            </motion.div>
            {/* Cards 2-4 — navy */}
            {[
              { delay: 0.2, label: "Invisalign", price: "$5,000", sub: "INVISALIGN", note: "ALL INCLUSIVE" },
              { delay: 0.4, label: "Dental Implants", price: "$3,000", sub: "DENTAL IMPLANTS", note: "ALL INCLUSIVE" },
              { delay: 0.6, label: "Hygiene Services", price: "$99", sub: "HYGIENE SERVICES", note: "ALL INCLUSIVE" },
            ].map((promo, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: promo.delay }}
                className="text-center py-8 px-6"
              >
                <h4 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 800, textTransform: "uppercase", marginBottom: "8px" }}>{promo.label}</h4>
                <h2 style={{ color: "#ffffff", fontSize: "50px", fontWeight: 800, lineHeight: "1.1", marginBottom: "4px" }}>{promo.price}</h2>
                <p style={{ color: "#f7f5ea", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>{promo.sub}</p>
                <p style={{ color: "#a2844e", fontSize: "12px", fontWeight: 600, textTransform: "uppercase" }}>{promo.note}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =====================================================
            WHY CHOOSE BAL DENTAL CENTRE
            Centered H2, then LEFT: accordion, RIGHT: 2×2 collage
            ===================================================== */}
        <section style={{ padding: "80px 0", fontFamily: "Poppins, sans-serif" }} className="w-full bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 style={{ color: "#000033", fontSize: "32px", fontWeight: 700, lineHeight: "1.25", textAlign: "center", marginBottom: "48px" }}>
              Why Choose Bal Dental Centre as Your Trusted Dentist in Scarborough?
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* LEFT: accordion */}
              <div className="flex-1 flex flex-col gap-2">
                {whyChooseItems.map((item, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-[#e0dccf]">
                    <button
                      onClick={() => setOpenWhyItem(openWhyItem === idx ? -1 : idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between transition-colors duration-200"
                      style={{ backgroundColor: openWhyItem === idx ? "#a2844e" : "#ffffff", fontFamily: "Poppins, sans-serif" }}
                    >
                      <span style={{ color: openWhyItem === idx ? "#ffffff" : "#000033", fontSize: "15px", fontWeight: 600 }}>{item.title}</span>
                      <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0 transition-transform duration-300" style={{ fill: openWhyItem === idx ? "#ffffff" : "#a2844e", transform: openWhyItem === idx ? "rotate(180deg)" : "rotate(0deg)" }}>
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openWhyItem === idx && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="px-5 py-4 bg-white border-t border-[#e0dccf]">
                            <p style={{ color: "#334155", fontSize: "14px", lineHeight: "1.65" }}>{item.body}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              {/* RIGHT: 2×2 collage */}
              <div className="flex-shrink-0 w-full lg:w-[460px]">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl overflow-hidden">
                    <Image src="/images/about-why-choose.png" alt="Why choose" width={320} height={240} className="w-full h-[200px] object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <Image src="/images/patient-smiles-collage-2.png" alt="Patient smiles" width={320} height={240} className="w-full h-[200px] object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <Image src="/images/hero-slide-5-dental-implants.png" alt="Dental implants" width={320} height={240} className="w-full h-[200px] object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <Image src="/images/smiles-collage.png" alt="Smiles collage" width={320} height={240} className="w-full h-[200px] object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TOUR OUR SCARBOROUGH DENTAL OFFICE
            Simplified tall navy section with H2 + address only
            ===================================================== */}
        <section style={{ backgroundColor: "#000033", padding: "100px 0", fontFamily: "Poppins, sans-serif" }} className="w-full">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 style={{ color: "#f7f5ea", fontSize: "48px", fontWeight: 700, lineHeight: "1.2", marginBottom: "28px" }}>
              Tour Our Scarborough Dental Office
            </h2>
            <div className="flex items-center justify-center gap-3">
              <svg viewBox="0 0 384 512" className="w-[18px] h-[18px] fill-[#a2844e] flex-shrink-0">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
              <p style={{ color: "#f7f5ea", fontSize: "18px" }}>4 Greystone Walk Dr #4 Scarborough, ON M1K 5J2</p>
            </div>
          </div>
        </section>

        {/* =====================================================
            SPECIAL DENTAL PROMOTIONS — 3 simple photo cards
            ===================================================== */}
        <section style={{ padding: "80px 0", fontFamily: "Poppins, sans-serif" }} className="w-full bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 style={{ color: "#a2844e", fontSize: "48px", fontWeight: 600, lineHeight: "1.2" }}>
                Special Dental Promotions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/images/flipbox-dental-implants-front.jpg", alt: "Dental Implants" },
                { src: "/images/flipbox-invisalign-front.jpg", alt: "Invisalign" },
                { src: "/images/flipbox-hygiene-front.jpg", alt: "Hygiene Services" },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 30, opacity: 1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                  style={{ height: "380px", position: "relative" }}
                >
                  <Image src={card.src} alt={card.alt} fill style={{ objectFit: "cover" }} className="rounded-2xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMITTED TO AFFORDABLE DENTISTRY
            Navy rounded card — image LEFT, text RIGHT
            ===================================================== */}
        <section style={{ padding: "80px 0", fontFamily: "Poppins, sans-serif" }} className="w-full bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div style={{ backgroundColor: "#000033", borderRadius: "20px", padding: "56px 48px" }} className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image left */}
              <div className="flex-shrink-0">
                <Image src="/images/affordable-dentistry.png" alt="Affordable dentistry" width={460} height={380} className="rounded-xl max-w-full h-auto" />
              </div>
              {/* Text right */}
              <div className="flex-1">
                <h2 style={{ color: "#f7f5ea", fontSize: "36px", fontWeight: 700, lineHeight: "1.25", marginBottom: "20px" }}>
                  Committed to Affordable Dentistry in Scarborough
                </h2>
                <p style={{ color: "#c8c4b8", fontSize: "16px", lineHeight: "1.7", marginBottom: "32px" }}>
                  We believe that quality dental care should be accessible to everyone. Bal Dental Centre offers a range of flexible payment options, direct insurance billing, and financing plans to ensure you can get the care you need — without financial stress.
                </p>
                <a href="https://baldentalcentre.com/bookings/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", backgroundColor: "#a2844e", color: "#ffffff", fontSize: "16px", fontWeight: 600, padding: "16px 32px", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s ease" }} className="hover:opacity-90">
                  Explore Financial Options
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED DENTAL SERVICES
            LEFT: vertical service accordion list
            RIGHT: active service card with patient photo
            ===================================================== */}
        <section style={{ padding: "80px 0", fontFamily: "Poppins, sans-serif" }} className="w-full bg-[#f7f5ea]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 style={{ color: "#a2844e", fontSize: "30px", fontWeight: 600, marginBottom: "4px" }}>Featured Dental Services</h2>
              <p style={{ color: "#000033", fontSize: "15px" }}>Click on a service below to learn more.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* LEFT: service list */}
              <div className="w-full lg:w-[280px] flex flex-col gap-2 flex-shrink-0">
                {featuredServices.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setActiveService(svc.id)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200"
                    style={{ backgroundColor: activeService === svc.id ? "#a2844e" : "transparent", border: activeService === svc.id ? "none" : "1px solid #e0dccf", fontFamily: "Poppins, sans-serif" }}
                  >
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: activeService === svc.id ? "rgba(255,255,255,0.25)" : "#a2844e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg viewBox="0 0 20 20" className="w-3 h-3 fill-white">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: activeService === svc.id ? "#ffffff" : "#000033", fontSize: "14px", fontWeight: 500 }}>{svc.label}</span>
                  </button>
                ))}
              </div>
              {/* RIGHT: active service card */}
              <div className="flex-1">
                {featuredServices.filter((s) => s.id === activeService).map((svc) => (
                  <div key={svc.id} style={{ backgroundColor: "#f5ead3", borderRadius: "16px", overflow: "hidden" }} className="flex flex-col md:flex-row h-full min-h-[360px]">
                    {/* Card text */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <h3 style={{ color: "#a2844e", fontSize: "20px", fontWeight: 700, textTransform: "uppercase", lineHeight: "1.3", marginBottom: "16px" }}>{svc.heading}</h3>
                        <p style={{ color: "#000033", fontSize: "15px", lineHeight: "1.65" }}>{svc.body}</p>
                      </div>
                      <div className="mt-6 flex items-center gap-6">
                        <a href={svc.url} target="_blank" rel="noopener noreferrer" style={{ color: "#a2844e", fontSize: "15px", fontWeight: 600, textDecoration: "none" }} className="hover:opacity-80 transition-opacity">
                          Read more →
                        </a>
                        {/* Dot pagination */}
                        <div className="flex gap-2">
                          {featuredServices.map((s) => (
                            <button key={s.id} onClick={() => setActiveService(s.id)} aria-label={`Select ${s.label}`} style={{ width: s.id === activeService ? "24px" : "8px", height: "8px", borderRadius: "4px", backgroundColor: s.id === activeService ? "#a2844e" : "#c9b89a", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Card image */}
                    <div className="w-full md:w-[260px] relative flex-shrink-0" style={{ minHeight: "260px" }}>
                      <Image src={svc.image} alt={svc.label} fill style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ SECTION — first item open by default
            ===================================================== */}
        <section style={{ padding: "80px 0", fontFamily: "Poppins, sans-serif" }} className="w-full bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 style={{ color: "#a2844e", fontSize: "30px", fontWeight: 600, marginBottom: "8px" }}>Frequently Asked Questions, Answered!</h2>
              <p style={{ color: "#000033", fontSize: "16px" }}>Still have a few questions on your mind? Let&apos;s talk.</p>
            </div>
            <div className="flex flex-col gap-3">
              {faqItems.map((item, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border border-[#e0dccf]">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between transition-colors duration-200"
                    style={{ backgroundColor: openFaq === idx ? "#a2844e" : "#ffffff", fontFamily: "Poppins, sans-serif" }}
                  >
                    <span style={{ color: openFaq === idx ? "#ffffff" : "#000033", fontSize: "16px", fontWeight: 600 }}>{item.q}</span>
                    <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0 transition-transform duration-300" style={{ fill: openFaq === idx ? "#ffffff" : "#a2844e", transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-6 py-4 bg-white border-t border-[#e0dccf]">
                          <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.65" }}>{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            NIHB SECTION — centered, two buttons below paragraph
            ===================================================== */}
        <section style={{ padding: "80px 0", fontFamily: "Poppins, sans-serif" }} className="w-full bg-[#f7f5ea]">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 style={{ color: "#a2844e", fontSize: "32px", fontWeight: 700, lineHeight: "1.3", marginBottom: "20px" }}>
              Bal Dental Centre Accepts NIHB for First Nations and Inuit Patients in Scarborough
            </h2>
            <p style={{ color: "#000033", fontSize: "16px", lineHeight: "1.7", marginBottom: "36px", maxWidth: "720px", margin: "0 auto 36px" }}>
              We proudly welcome patients covered under the Non-Insured Health Benefits (NIHB) program. Our team is experienced with NIHB coverage and will help you maximize your benefits. Contact us to learn more about covered services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://baldentalcentre.com/bookings/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#a2844e", color: "#ffffff", fontSize: "16px", fontWeight: 600, padding: "16px 36px", borderRadius: "8px", textDecoration: "none", display: "inline-block", transition: "all 0.3s ease" }} className="hover:opacity-90">
                Book Appointment
              </a>
              <a href="tel:+14162676789" style={{ backgroundColor: "#000033", color: "#ffffff", fontSize: "16px", fontWeight: 600, padding: "16px 36px", borderRadius: "8px", textDecoration: "none", display: "inline-block", transition: "all 0.3s ease" }} className="hover:opacity-80">
                416-267-6789
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONVENIENTLY LOCATED — two-column, no embedded map
            LEFT: label, H2, paragraph, 2 buttons
            RIGHT: 2×2 patient photo collage
            ===================================================== */}
        <section style={{ backgroundColor: "#f7f5ea", padding: "80px 0", fontFamily: "Poppins, sans-serif" }} className="w-full">
          <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            {/* Left */}
            <div className="flex-1">
              <p style={{ color: "#a2844e", fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Dentist — Scarborough, Ontario</p>
              <h2 style={{ color: "#000033", fontSize: "38px", fontWeight: 700, lineHeight: "1.2", marginBottom: "20px" }}>
                Conveniently Located Near You in Scarborough
              </h2>
              <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", marginBottom: "32px" }}>
                Our dental office is easily accessible by TTC and major roads — right in the heart of Scarborough. Plenty of free parking available. Whether you are visiting from Kingston Rd, Lawrence Ave, or Ellesmere Rd, we are just minutes away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://baldentalcentre.com/bookings/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#a2844e", color: "#ffffff", fontSize: "15px", fontWeight: 600, padding: "14px 24px", borderRadius: "8px", textDecoration: "none", display: "inline-block", transition: "all 0.3s ease", textAlign: "center" }} className="hover:opacity-90">
                  Request A Free Second Opinion
                </a>
                <a href="https://baldentalcentre.com/" style={{ backgroundColor: "#000033", color: "#ffffff", fontSize: "15px", fontWeight: 600, padding: "14px 24px", borderRadius: "8px", textDecoration: "none", display: "inline-block", transition: "all 0.3s ease", textAlign: "center" }} className="hover:opacity-80">
                  Student Discount Program
                </a>
              </div>
            </div>
            {/* Right: 2×2 collage */}
            <div className="flex-shrink-0 w-full lg:w-[460px]">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/about-dental-near-you.png" alt="Dental near you" width={320} height={240} className="w-full h-[200px] object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/patient-smiles-collage-wide.png" alt="Patient smiles" width={320} height={240} className="w-full h-[200px] object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/hero-slide-6-invisalign.png" alt="Invisalign" width={320} height={240} className="w-full h-[200px] object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/about-why-choose-sm.png" alt="Why choose" width={320} height={240} className="w-full h-[200px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MARQUEE SCROLLING BAR  (bg=#000033)
            ===================================================== */}
        <div style={{ backgroundColor: "#000033", padding: "15px 0", fontFamily: "Poppins, sans-serif", overflow: "hidden" }} className="w-full">
          <div className="relative overflow-hidden mb-2" style={{ isolation: "isolate" }}>
            <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee-scroll 30s linear infinite", width: "max-content" }}>
              {[0, 1].map((i) => (
                <span key={i} style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", paddingRight: "60px" }}>
                  OPEN 7 DAYS A WEEK&nbsp;&nbsp;|&nbsp;&nbsp;ACCEPTING APPOINTMENTS ON SATURDAY, SUNDAY AND LATE EVENINGS&nbsp;&nbsp;|&nbsp;&nbsp;OPEN 7 DAYS A WEEK&nbsp;&nbsp;|&nbsp;&nbsp;ACCEPTING APPOINTMENTS ON SATURDAY, SUNDAY AND LATE EVENINGS&nbsp;&nbsp;|&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ isolation: "isolate" }}>
            <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee-scroll-reverse 30s linear infinite", width: "max-content" }}>
              {[0, 1].map((i) => (
                <span key={i} style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", paddingRight: "60px" }}>
                  OPEN 7 DAYS A WEEK&nbsp;&nbsp;|&nbsp;&nbsp;ACCEPTING APPOINTMENTS ON SATURDAY, SUNDAY AND LATE EVENINGS&nbsp;&nbsp;|&nbsp;&nbsp;OPEN 7 DAYS A WEEK&nbsp;&nbsp;|&nbsp;&nbsp;ACCEPTING APPOINTMENTS ON SATURDAY, SUNDAY AND LATE EVENINGS&nbsp;&nbsp;|&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM GOOGLE MAPS EMBED
            ===================================================== */}
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.7!2d-79.2525449!3d43.7247278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce365ec14963%3A0x3204a1154c78196a!2sBal%20Dental%20Centre!5e0!3m2!1sen!2sca!4v1234567890"
            width="100%"
            height="458"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bal Dental Centre map"
          />
        </div>

        {/* =====================================================
            FOOTER — 3 columns + review CTA row
            Contact Us | Office Hours | Our Location
            ===================================================== */}
        <section style={{ backgroundColor: "#000033", padding: "64px 0 48px", fontFamily: "Poppins, sans-serif" }} className="w-full">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
              {/* Column 1: Contact Us */}
              <div>
                <h3 style={{ color: "#f7f5ea", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Contact Us</h3>
                <div style={{ color: "#c8c4b8", fontSize: "14px", lineHeight: "2" }}>
                  <a href="tel:+14162676789" style={{ color: "#f7f5ea", textDecoration: "none", display: "block" }} className="hover:text-[#a2844e]">416-267-6789</a>
                  <a href="mailto:info@baldentalcentre.com" style={{ color: "#f7f5ea", textDecoration: "none", display: "block", wordBreak: "break-all" }} className="hover:text-[#a2844e]">info@baldentalcentre.com</a>
                  <div style={{ marginTop: "12px" }}>
                    <div style={{ color: "#a2844e", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>Languages We Speak</div>
                    <div style={{ color: "#c8c4b8" }}>English, Punjabi, Hindi, Bangoli, Telugu, Tagalog, Cantonese</div>
                  </div>
                </div>
              </div>
              {/* Column 2: Office Hours */}
              <div>
                <h3 style={{ color: "#f7f5ea", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Office Hours</h3>
                <div style={{ color: "#c8c4b8", fontSize: "14px", lineHeight: "1.9" }}>
                  {[
                    ["Monday", "9:00 AM – 7:00 PM"],
                    ["Tuesday", "9:00 AM – 7:00 PM"],
                    ["Wednesday", "9:00 AM – 7:00 PM"],
                    ["Thursday", "9:00 AM – 7:00 PM"],
                    ["Friday", "9:00 AM – 7:00 PM"],
                    ["Saturday", "9:00 AM – 6:00 PM"],
                    ["Sunday", "By Appointment"],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between gap-4">
                      <span>{day}</span>
                      <span style={{ color: "#f7f5ea" }}>{hours}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: "8px", color: "#a2844e", fontWeight: 600, fontSize: "13px" }}>Open 7 Days a Week</div>
                </div>
              </div>
              {/* Column 3: Our Location */}
              <div>
                <h3 style={{ color: "#f7f5ea", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Our Location</h3>
                <p style={{ color: "#c8c4b8", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
                  4 Greystone Walk Dr #4<br />Scarborough, ON M1K 5J2
                </p>
                <a href="https://www.google.com/maps/place/Bal+Dental+Centre/@43.7247316,-79.2551198,785m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89d4ce365ec14963:0x3204a1154c78196a!8m2!3d43.7247278!4d-79.2525449!16s%2Fg%2F1hhksygg_?entry=tts" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", backgroundColor: "#a2844e", color: "#ffffff", fontSize: "14px", fontWeight: 600, padding: "10px 20px", borderRadius: "6px", textDecoration: "none", transition: "all 0.3s ease" }} className="hover:opacity-90">
                  Get Direction
                </a>
              </div>
            </div>

            {/* Review CTA row */}
            <div className="pt-8 border-t border-[#1a1a5a] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 style={{ color: "#f7f5ea", fontSize: "18px", fontWeight: 600, marginBottom: "4px" }}>How Was Your Experience?</h3>
                <p style={{ color: "#c8c4b8", fontSize: "14px" }}>We&apos;d love to hear your feedback. Leave us a review!</p>
              </div>
              <a href="https://chatrbee.com/recommend?Bal-Dental-Centre&name=aa&numb=00&uniquekey=Bal-Dental-Centre.108&code=T7aIVqEHY5kZxCy&useremail=email" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#a2844e", color: "#ffffff", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", fontSize: "16px", fontWeight: 600, transition: "all 0.3s ease", whiteSpace: "nowrap" }} className="hover:opacity-90">
                Write a Review
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            COPYRIGHT BAR  (bg=#f7f5ea, h=110px)
            ===================================================== */}
        <footer style={{ fontFamily: "Poppins, sans-serif" }} className="w-full">
          <div style={{ backgroundColor: "#f7f5ea", height: "110px", display: "flex", alignItems: "center" }}>
            <div className="max-w-[1200px] mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between gap-2">
              <p style={{ color: "#000033", fontSize: "12px", lineHeight: "1.65" }}>
                © Bal Dental Centre | Sitemap | All rights reserved
              </p>
              <div className="flex items-center gap-2">
                <span style={{ color: "#334155", fontSize: "11px" }}>Website by</span>
                <Image src="/images/pracpros-logo.png" alt="PracPros" width={80} height={24} style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
