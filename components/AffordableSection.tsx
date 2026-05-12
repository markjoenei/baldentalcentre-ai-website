import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "./icons";

const features = [
  "Direct insurance billing",
  "Flexible financing plans",
  "Transparent upfront pricing",
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

export default function AffordableSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-navy-gradient-animated shadow-lift">
          {/* Decorative accents */}
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-15" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-blob rounded-full bg-gold/[0.20] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 animate-blob rounded-full bg-gold/[0.12] blur-3xl" style={{ animationDelay: "3s" }} />
          <Sparkle className="pointer-events-none absolute right-[20%] top-[15%] h-4 w-4 animate-sparkle text-gold/70" />
          <Sparkle className="pointer-events-none absolute right-[12%] bottom-[20%] h-3 w-3 animate-sparkle text-gold/60" style={{ animationDelay: "1.3s" }} />

          <div className="relative flex flex-col items-stretch gap-0 md:flex-row">
            <div className="group relative h-[280px] w-full shrink-0 overflow-hidden md:h-auto md:w-[44%]">
              <Image
                src="/images/affordable-dentistry.png"
                alt="Senior woman smiling — affordable dentistry"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 44vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/40 md:to-navy/60" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold shadow-soft backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                Affordable Care
              </div>
            </div>
            <div className="flex-1 px-7 py-10 md:px-10 lg:px-14 lg:py-14">
              <h2 className="animate-fade-up text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-cream sm:text-[34px] lg:text-[42px]">
                Committed to{" "}
                <span className="text-gradient-gold">Affordable Dentistry</span>
                <br className="hidden sm:inline" />
                {" "}in Scarborough
              </h2>
              <p className="animate-fade-up mt-5 max-w-[580px] text-[14.5px] leading-[1.75] text-cream/80 lg:text-[15px]" style={{ animationDelay: "100ms" }}>
                Our <span className="font-semibold text-white">Dentists in Scarborough</span>,
                located near Eglinton East, works hard to ensure your visits with us are productive,
                comfortable, and stress free. We never want concerns about cost to stand between
                you and your smile.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {features.map((f, i) => (
                  <li
                    key={f}
                    className="group/feat animate-fade-up flex items-center gap-3 text-[13.5px] text-cream/90 transition-transform duration-300 hover:translate-x-1"
                    style={{ animationDelay: `${200 + i * 80}ms` }}
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover/feat:scale-110 group-hover/feat:bg-gold group-hover/feat:ring-gold">
                      <CheckIcon className="h-3 w-3 fill-gold transition-colors duration-300 group-hover/feat:fill-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="animate-fade-up mt-8" style={{ animationDelay: "500ms" }}>
                <Link
                  href="/services"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-3.5 text-[13.5px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <span className="relative">Explore Financial Options</span>
                  <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                    <ArrowRightIcon className="h-3 w-3 fill-white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
