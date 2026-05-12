"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { whyChooseItems } from "./data";
import { ChevronDownIcon } from "./icons";

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

export default function WhyChoose() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute left-0 bottom-20 h-72 w-72 rounded-full bg-navy/[0.04] blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <Sparkle className="pointer-events-none absolute left-[5%] top-[18%] h-3 w-3 animate-sparkle text-gold/50" />
      <Sparkle className="pointer-events-none absolute right-[6%] top-[60%] h-4 w-4 animate-sparkle text-gold/50" style={{ animationDelay: "1.4s" }} />

      <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
        <div className="mb-12 text-center lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Why Patients Choose Us
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
            Why Choose Bal Dental Centre
            <br className="hidden sm:inline" />
            {" "}as Your Trusted{" "}
            <span className="text-gradient-gold">Dentist in Scarborough?</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-16 shimmer-line" />
        </div>

        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-14">
          <div className="flex w-full flex-1 flex-col gap-3">
            {whyChooseItems.map((item, idx) => {
              const isOpen = open === idx;
              const num = String(idx + 1).padStart(2, "0");
              return (
                <div
                  key={idx}
                  className={`group animate-fade-up overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                    isOpen
                      ? "border-gold/30 bg-white shadow-card"
                      : "border-cream-line bg-white hover:border-gold/25 hover:shadow-card"
                  }`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors lg:px-6 lg:py-5"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold transition-all duration-500 ${
                          isOpen
                            ? "bg-gold text-white shadow-gold scale-110"
                            : "bg-cream text-gold group-hover:bg-gold/15 group-hover:scale-105"
                        }`}
                      >
                        {isOpen && (
                          <span className="absolute inset-0 rounded-full bg-gold/30 animate-pulse-ring" />
                        )}
                        <span className="relative">{num}</span>
                      </span>
                      <span
                        className={`text-[14px] font-semibold transition-colors sm:text-[15px] ${
                          isOpen ? "text-navy" : "text-navy/90 group-hover:text-gold"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                    <ChevronDownIcon
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 fill-gold" : "fill-navy/40 group-hover:fill-gold"
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[76px] lg:px-6 lg:pb-6 lg:pl-[88px]">
                        <p className="text-[13.5px] leading-[1.75] text-ink-muted sm:text-[14px]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative w-full shrink-0 lg:w-[480px]">
            <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-tr-3xl border-r-2 border-t-2 border-gold/40" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-20 w-20 rounded-bl-3xl border-b-2 border-l-2 border-gold/40" />
            <div className="pointer-events-none absolute -right-8 top-1/4 h-16 w-16 animate-spin-slow rounded-full border-2 border-dashed border-gold/25" />

            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="hover-lift animate-fade-up overflow-hidden rounded-2xl shadow-card hover:shadow-lift">
                <Image
                  src="/images/about-why-choose.png"
                  alt="Smiling patient"
                  width={320}
                  height={240}
                  className="h-[180px] w-full object-cover transition-transform duration-700 hover:scale-110 sm:h-[210px]"
                />
              </div>
              <div className="hover-lift animate-fade-up overflow-hidden rounded-2xl shadow-card hover:shadow-lift" style={{ animationDelay: "150ms" }}>
                <Image
                  src="/images/patient-smiles-collage-2.png"
                  alt="Patient collage"
                  width={320}
                  height={240}
                  className="h-[180px] w-full object-cover transition-transform duration-700 hover:scale-110 sm:h-[210px]"
                />
              </div>
              <div className="hover-lift animate-fade-up col-span-2 overflow-hidden rounded-2xl shadow-card hover:shadow-lift" style={{ animationDelay: "300ms" }}>
                <Image
                  src="/images/about-why-choose-sm.png"
                  alt="Senior couple smiling"
                  width={640}
                  height={260}
                  className="h-[200px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[220px]"
                />
              </div>
            </div>

            {/* Trust card */}
            <div className="hover-lift group mt-5 flex items-center gap-4 rounded-2xl border border-cream-line bg-cream/40 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-card">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:ring-gold">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-transform duration-500 group-hover:rotate-12">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-bold text-navy">Award-Winning Care</p>
                <p className="text-[12px] leading-[1.5] text-ink-muted">
                  Readers&apos; Choice Winner 2013–17
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
