import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "./icons";
import { BOOK_URL, PHONE_DISPLAY, PHONE_TEL } from "./data";

const trustPoints = [
  "Open 7 Days a Week",
  "Same-Day Emergencies",
  "All Insurance Accepted",
];

function Sparkle({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M12 0L13.5 8.5L22 12L13.5 15.5L12 24L10.5 15.5L2 12L10.5 8.5L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-cream">
      {/* Banner image background */}
      <Image
        src="/images/hero-banner.png"
        alt="Smiling patient at Bal Dental Centre"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover object-left-top lg:object-top"
      />
      {/* Decorative animated background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] animate-blob bg-gold/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] animate-blob bg-navy/[0.05] blur-3xl" style={{ animationDelay: "3s" }} />

      {/* Floating sparkles */}
      <Sparkle className="pointer-events-none absolute left-[8%] top-[18%] h-4 w-4 animate-sparkle text-gold/70" />
      <Sparkle className="pointer-events-none absolute left-[14%] top-[68%] h-3 w-3 animate-sparkle text-gold/60" style={{ animationDelay: "1.2s" }} />
      <Sparkle className="pointer-events-none absolute right-[42%] top-[12%] h-2.5 w-2.5 animate-sparkle text-gold/60" style={{ animationDelay: "2s" }} />
      <Sparkle className="pointer-events-none absolute right-[8%] top-[8%] h-5 w-5 animate-sparkle text-gold/60" style={{ animationDelay: "0.6s" }} />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start justify-center gap-12 px-4 py-5 text-left lg:h-screen lg:gap-14 lg:py-24">
        <div className="flex max-w-[620px] flex-col items-start gap-5">
          <div className="animate-fade-up inline-flex items-center gap-3">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-2 rounded-full bg-gold/15 blur-xl animate-glow-pulse" />
              <Image
                src="/images/award-badge.png"
                alt="Scarborough Mirror Readers' Choice Awards Winner 2013–17"
                width={205}
                height={163}
                priority
                className="relative h-auto w-[110px] drop-shadow-md lg:w-[128px]"
              />
            </div>
            <div className="hidden flex-col gap-1 border-l border-gold/30 pl-3 sm:flex">
              <div className="flex items-center gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="animate-fade-up h-4 w-4 fill-gold"
                    style={{ animationDelay: `${200 + i * 80}ms` }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.368-2.447a1 1 0 00-1.175 0l-3.369 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.957z" />
                  </svg>
                ))}
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-navy/70">
                Trusted by 1,000+ Patients
              </p>
            </div>
          </div>

          <p className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm" style={{ animationDelay: "60ms" }}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Dentist — Scarborough, Ontario
          </p>

          <h1 className="animate-fade-up text-[36px] font-bold leading-[1.1] tracking-[-0.01em] text-navy sm:text-[44px] lg:text-[54px]" style={{ animationDelay: "120ms" }}>
            Smile Brighter with
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-navy">Dentist</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-2.5 bg-gold/15 lg:h-3" />
              <Sparkle className="absolute -right-5 -top-2 h-4 w-4 animate-sparkle text-gold" style={{ animationDelay: "0.4s" }} />
            </span>
            <span className="text-navy"> in Scarborough</span>
          </h1>

          <ul className="animate-fade-up flex flex-wrap gap-x-5 gap-y-2.5" style={{ animationDelay: "240ms" }}>
            {trustPoints.map((point, i) => (
              <li
                key={point}
                className="group flex items-center gap-2 text-[13.5px] font-medium text-navy transition-transform duration-300 hover:translate-x-0.5"
                style={{ animationDelay: `${280 + i * 80}ms` }}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:ring-gold">
                  <CheckIcon className="h-3 w-3 fill-gold transition-colors duration-300 group-hover:fill-white" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="animate-fade-up flex flex-col items-stretch gap-3 pt-3 sm:flex-row sm:items-center" style={{ animationDelay: "300ms" }}>
            <Link
              href={BOOK_URL}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-4 text-[14px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative">Book Appointment</span>
              <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                <ArrowRightIcon className="h-3.5 w-3.5 fill-white" />
              </span>
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-navy/15 bg-white/70 px-6 py-4 text-[14px] font-semibold text-navy backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:bg-white hover:shadow-card"
            >
              <PhoneIcon className="h-4 w-4 fill-gold transition-transform duration-300 group-hover:animate-wiggle" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
