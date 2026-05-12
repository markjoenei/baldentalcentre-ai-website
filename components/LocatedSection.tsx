import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "./icons";

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

export default function LocatedSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 animate-blob rounded-full bg-navy/[0.04] blur-3xl" style={{ animationDelay: "3s" }} />
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.25]" />
      <Sparkle className="pointer-events-none absolute left-[6%] top-[15%] h-4 w-4 animate-sparkle text-gold/70" />
      <Sparkle className="pointer-events-none absolute right-[40%] top-[10%] h-3 w-3 animate-sparkle text-gold/60" style={{ animationDelay: "1.2s" }} />
      <Sparkle className="pointer-events-none absolute left-[42%] bottom-[12%] h-3.5 w-3.5 animate-sparkle text-gold/60" style={{ animationDelay: "0.8s" }} />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-stretch gap-12 px-4 py-16 lg:flex-row lg:items-center lg:gap-14 lg:py-24">
        <div className="flex-1">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Dentist — Scarborough, Ontario
          </span>
          <h2 className="animate-fade-up mt-4 text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[36px] lg:text-[44px]" style={{ animationDelay: "100ms" }}>
            Conveniently Located
            <br className="hidden sm:inline" />
            {" "}<span className="text-gradient-gold">Near You in Scarborough</span>
          </h2>
          <p className="animate-fade-up mt-5 max-w-[580px] text-[14.5px] leading-[1.8] text-ink-muted lg:text-[15px]" style={{ animationDelay: "200ms" }}>
            Looking for a skilled sedation dentist in your area? Interested in sleep apnea
            treatment? Time for your six-month checkup and cleaning? We look forward to
            welcoming you to our office at 4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2,
            Canada. You&apos;ll find us near Greystone Park, McDonald&apos;s, and IV bus Superstation.
          </p>

          <div className="group animate-fade-up mt-6 flex items-start gap-3 rounded-2xl border border-cream-line bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-card" style={{ animationDelay: "300ms" }}>
            <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:ring-gold">
              <MapPinIcon className="h-3.5 w-3.5 fill-gold transition-colors duration-300 group-hover:fill-white" />
            </span>
            <div className="text-[13.5px] leading-[1.6] text-navy">
              <p className="font-semibold">4 Greystone Walk Dr #4</p>
              <p className="text-ink-muted">Scarborough, ON M1K 5J2, Canada</p>
            </div>
          </div>

          <div className="animate-fade-up mt-7 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "400ms" }}>
            <Link
              href="/about/how-to-select-the-best-dentist"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-[13px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative">Request A Free Second Opinion</span>
              <ArrowRightIcon className="relative h-3.5 w-3.5 fill-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services/preventive-dentistry"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-navy px-6 py-3.5 text-[13px] font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-2 hover:shadow-card"
            >
              Student Discount Program
              <ArrowRightIcon className="h-3.5 w-3.5 fill-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative w-full shrink-0 lg:w-[480px]">
          <div className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-gold/40" />
          <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-gold/40" />
          <div className="pointer-events-none absolute -right-6 top-1/3 h-14 w-14 animate-spin-slow rounded-full border-2 border-dashed border-gold/30" />

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {[
              { src: "/images/about-dental-near-you.png", alt: "Patient smile" },
              { src: "/images/patient-smiles-collage-wide.png", alt: "Group of patients" },
              { src: "/images/about-why-choose-sm.png", alt: "Senior couple" },
              { src: "/images/hero-slide-6-invisalign.png", alt: "Smiling patient" },
            ].map((img, i) => (
              <div
                key={i}
                className="hover-lift animate-fade-up overflow-hidden rounded-2xl shadow-card ring-1 ring-white/40 hover:shadow-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={320}
                  height={240}
                  className="h-[180px] w-full object-cover transition-transform duration-700 hover:scale-110 sm:h-[200px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
