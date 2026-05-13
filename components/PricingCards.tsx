import type { CSSProperties } from "react";
import Link from "next/link";

type Card = {
  tag: string;
  price: string;
  sub: string;
  href: string;
  highlight?: boolean;
  note?: string;
};

const cards: Card[] = [
  { tag: "Holiday Special", price: "$3,999", sub: "Clear Aligners", highlight: true, href: "/services/invisalign" },
  { tag: "All Inclusive", price: "$5,000", sub: "Invisalign", href: "/services/invisalign" },
  { tag: "All Inclusive", price: "$3,000", sub: "Dental Implants", href: "/services/dental-implants" },
  { tag: "All Inclusive", price: "$99", sub: "Hygiene Services", href: "/services/preventive-dentistry" },
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

export default function PricingCards() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-gradient-animated">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/[0.10] blur-3xl animate-glow-pulse" />
      <Sparkle className="pointer-events-none absolute left-[6%] top-[20%] h-3 w-3 animate-sparkle text-gold/60" />
      <Sparkle className="pointer-events-none absolute right-[8%] bottom-[20%] h-4 w-4 animate-sparkle text-gold/60" style={{ animationDelay: "1.3s" }} />

      <div className="relative mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {cards.map((c, i) => {
            const isGold = c.highlight;
            return (
              <Link
                key={i}
                href={c.href}
                className={`group hover-lift animate-fade-up relative flex flex-col items-center justify-center rounded-2xl px-6 py-8 text-center transition-all duration-300 ${
                  isGold
                    ? "bg-gradient-to-br from-gold via-gold to-gold-deep shadow-gold hover:-translate-y-1 hover:shadow-gold-strong"
                    : "border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06] hover:shadow-lift"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Shine sweep on hover — clipped to card bounds */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </span>

                {isGold && (
                  <>
                    <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-gold shadow-soft">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                      </span>
                      Limited Time
                    </span>
                    <Sparkle className="absolute right-3 top-3 h-3 w-3 animate-sparkle text-white/80" />
                    <Sparkle className="absolute bottom-3 left-3 h-2.5 w-2.5 animate-sparkle text-white/70" style={{ animationDelay: "1s" }} />
                  </>
                )}
                <span
                  className={`relative text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
                    isGold ? "text-white/90" : "text-gold"
                  }`}
                >
                  {c.tag}
                </span>
                <h2
                  className={`relative mt-2 text-[42px] font-extrabold leading-none tracking-tight transition-transform duration-300 group-hover:scale-110 lg:text-[52px] ${
                    isGold ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]" : "text-white"
                  }`}
                >
                  {c.price}
                </h2>
                <p
                  className={`relative mt-3 text-[11.5px] font-medium uppercase tracking-[0.1em] ${
                    isGold ? "text-cream-soft" : "text-cream-muted"
                  }`}
                >
                  {c.sub}
                </p>
                <span
                  className={`relative mt-4 inline-flex h-px transition-all duration-300 group-hover:w-16 ${
                    isGold ? "w-10 bg-white/40" : "w-10 bg-gold/30 group-hover:bg-gold/60"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
