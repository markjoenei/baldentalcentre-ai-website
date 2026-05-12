"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOK_URL, PHONE_DISPLAY, PHONE_TEL, navAbout, navServices } from "./data";
import { ArrowRightIcon, ChevronDownIcon, CloseIcon, MenuIcon, PhoneHandsetIcon } from "./icons";

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", dropdown: navAbout },
  { label: "Our Services", href: "/services", dropdown: navServices },
  { label: "New Patients", href: "/new-patients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-cream-line/80 bg-white/90 shadow-nav-scrolled backdrop-blur-lg"
          : "border-transparent bg-cream/95 shadow-nav backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between px-4 transition-[height] duration-300 ${
          scrolled ? "h-[68px] lg:h-[76px]" : "h-[80px] lg:h-[92px]"
        }`}
      >
        <Link href="/" className="group shrink-0">
          <Image
            src="/images/logo-main.png"
            alt="Bal Dental Centre"
            width={112}
            height={70}
            priority
            className={`h-auto w-[80px] transition-all duration-300 group-hover:scale-[1.03] ${
              scrolled ? "lg:w-[92px]" : "lg:w-[112px]"
            }`}
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-medium text-navy/80 transition-all duration-200 hover:bg-gold/[0.08] hover:text-gold"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDownIcon className="h-3 w-3 fill-current transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>
              {item.dropdown && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[260px] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-cream-line/80 bg-white py-2 shadow-dropdown">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="group/sub flex items-center justify-between px-4 py-2 text-[13.5px] text-navy/85 transition-colors hover:bg-cream/60 hover:text-gold"
                      >
                        <span>{sub.label}</span>
                        <ArrowRightIcon className="h-3 w-3 -translate-x-1 fill-gold opacity-0 transition-all duration-200 group-hover/sub:translate-x-0 group-hover/sub:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="group inline-flex items-center gap-3 text-[17px] font-bold text-navy transition-colors hover:text-gold"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white shadow-gold transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 rounded-full bg-gold/30 animate-pulse-ring" />
              <PhoneHandsetIcon className="relative h-4 w-4 text-white" />
            </span>
            <span className="hidden xl:inline">{PHONE_DISPLAY}</span>
          </a>
          <Link
            href={BOOK_URL}
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[13px] font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:shadow-gold"
          >
            Book Now
            <ArrowRightIcon className="h-3.5 w-3.5 fill-white transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-navy transition-colors hover:bg-gold/10 hover:text-gold lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t bg-white/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[640px] border-cream-line" : "max-h-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-0.5 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-cream-line/70 py-3.5 text-[15px] font-medium text-navy transition-colors hover:text-gold"
            >
              {item.label}
              <ArrowRightIcon className="h-3.5 w-3.5 fill-gold" />
            </Link>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-3 flex items-center gap-3 rounded-lg bg-cream/60 px-3 py-3 text-[16px] font-bold text-navy"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold">
              <PhoneHandsetIcon className="h-4 w-4 text-white" />
            </span>
            {PHONE_DISPLAY}
          </a>
          <Link
            href={BOOK_URL}
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-center text-[14px] font-semibold text-white shadow-gold transition-opacity hover:opacity-90"
          >
            Book Appointment
            <ArrowRightIcon className="h-3.5 w-3.5 fill-white" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
