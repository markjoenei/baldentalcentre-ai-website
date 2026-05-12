import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

const promos = [
  {
    src: "/images/flipbox-dental-implants-front.jpg",
    alt: "Dental Implants Promotion",
    title: "Dental Implants",
    tag: "From $3,000",
    href: "/services/dental-implants",
  },
  {
    src: "/images/flipbox-invisalign-front.jpg",
    alt: "Invisalign Promotion",
    title: "Invisalign",
    tag: "From $5,000",
    href: "/services/invisalign",
  },
  {
    src: "/images/flipbox-hygiene-front.jpg",
    alt: "Hygiene Services Promotion",
    title: "Hygiene Services",
    tag: "Only $99",
    href: "/services/preventive-dentistry",
  },
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

export default function Promotions() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute right-0 bottom-32 h-72 w-72 rounded-full bg-gold/[0.04] blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <Sparkle className="pointer-events-none absolute left-[8%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />
      <Sparkle className="pointer-events-none absolute right-[6%] top-[30%] h-4 w-4 animate-sparkle text-gold/50" style={{ animationDelay: "1.2s" }} />
      <Sparkle className="pointer-events-none absolute left-[40%] bottom-[10%] h-3 w-3 animate-sparkle text-gold/50" style={{ animationDelay: "1.8s" }} />

      <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
        <div className="mb-12 text-center lg:mb-14">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Limited-Time Offers
          </span>
          <h2 className="animate-fade-up mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[38px] lg:text-[44px]" style={{ animationDelay: "100ms" }}>
            Special <span className="text-gradient-gold">Dental Promotions</span>
          </h2>
          <p className="animate-fade-up mx-auto mt-4 max-w-[580px] text-[14.5px] leading-[1.7] text-ink-muted" style={{ animationDelay: "200ms" }}>
            Save on the treatments you need most — exclusive offers from your Scarborough dentist.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
          {promos.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className="group hover-lift animate-fade-up relative h-[300px] overflow-hidden rounded-2xl shadow-card ring-1 ring-cream-line/60 hover:-translate-y-1 hover:shadow-lift md:h-[340px] lg:h-[380px]"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-85" />
              {/* Shine sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              {/* Gold corner glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-3xl transition-all duration-500 group-hover:bg-gold/30" />

              <div className="absolute left-4 top-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                  {p.tag}
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                <h3 className="text-[20px] font-bold leading-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5 lg:text-[22px]">
                  {p.title}
                </h3>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:rotate-[-12deg] group-hover:bg-gold group-hover:ring-gold group-hover:shadow-gold">
                  <ArrowRightIcon className="h-4 w-4 fill-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
