import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "./icons";
import { BOOK_URL, PHONE_DISPLAY, PHONE_TEL } from "./data";

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

export default function NIHBSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-cream/30 to-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream-line to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/[0.08] blur-3xl animate-glow-pulse" />
      <Sparkle className="pointer-events-none absolute left-[8%] top-[25%] h-3 w-3 animate-sparkle text-gold/60" />
      <Sparkle className="pointer-events-none absolute right-[10%] top-[20%] h-4 w-4 animate-sparkle text-gold/60" style={{ animationDelay: "1.3s" }} />
      <Sparkle className="pointer-events-none absolute left-[20%] bottom-[15%] h-3 w-3 animate-sparkle text-gold/60" style={{ animationDelay: "0.8s" }} />

      <div className="relative mx-auto max-w-[1100px] px-4 py-16 text-center lg:py-20">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          NIHB Program
        </span>
        <h2 className="animate-fade-up mt-5 text-[26px] font-bold leading-[1.25] tracking-[-0.01em] text-navy sm:text-[30px] lg:text-[36px]" style={{ animationDelay: "100ms" }}>
          Bal Dental Centre Accepts{" "}
          <span className="text-gradient-gold">NIHB</span>{" "}
          for First Nations
          <br className="hidden sm:inline" />
          {" "}and Inuit Patients in Scarborough
        </h2>
        <div className="animate-fade-up mx-auto mt-5 h-px w-16 shimmer-line" style={{ animationDelay: "200ms" }} />
        <p className="animate-fade-up mx-auto mt-6 max-w-[860px] text-[14px] leading-[1.8] text-ink-muted lg:text-[15px]" style={{ animationDelay: "250ms" }}>
          At Bal Dental Centre, we are proud to provide dental services for{" "}
          <Link href="/about/nihb" className="font-semibold text-gold underline-offset-4 hover:underline">
            the NIHB Program
          </Link>
          {" "}to all eligible First Nation and Inuit community members. We want you and your family to get whatever dental treatment you need efficiently so that you may get it with ease, rather than hassle over paperwork or insurance details. We have a friendly staff of financial advisors who are ready to assist you at every turn, and with compassion.
        </p>
        <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "350ms" }}>
          <Link
            href={BOOK_URL}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-3.5 text-[13.5px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            <span className="relative">Book Appointment</span>
            <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
              <ArrowRightIcon className="h-3 w-3 fill-white" />
            </span>
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group inline-flex items-center gap-3 rounded-full border border-navy/15 bg-white px-7 py-3.5 text-[13.5px] font-semibold text-navy shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-card"
          >
            <PhoneIcon className="h-3.5 w-3.5 fill-gold transition-transform duration-300 group-hover:animate-wiggle" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
