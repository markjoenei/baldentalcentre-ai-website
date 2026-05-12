"use client";

import { useState, type CSSProperties } from "react";
import { faqItems } from "./data";
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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream-line to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
      <Sparkle className="pointer-events-none absolute left-[8%] top-[20%] h-3 w-3 animate-sparkle text-gold/50" />
      <Sparkle className="pointer-events-none absolute right-[8%] bottom-[20%] h-3.5 w-3.5 animate-sparkle text-gold/50" style={{ animationDelay: "1.4s" }} />

      <div className="relative mx-auto max-w-[960px] px-4 py-20 lg:py-24">
        <div className="mb-10 text-center lg:mb-14">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            FAQ
          </span>
          <h2 className="animate-fade-up mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[38px]" style={{ animationDelay: "100ms" }}>
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions, Answered!</span>
          </h2>
          <p className="animate-fade-up mx-auto mt-4 max-w-[680px] text-[14px] leading-[1.75] text-ink-muted" style={{ animationDelay: "200ms" }}>
            Still have a few questions on your mind? Let us help you find the answers!
            With lunchtime, evening, and weekend hours, you&apos;re more than welcome to
            give our team a call at your convenience so we can assist you.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, idx) => {
            const isOpen = open === idx;
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
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors lg:px-6 lg:py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[14px] font-semibold transition-colors sm:text-[15.5px] ${
                      isOpen ? "text-navy" : "text-navy/90 group-hover:text-gold"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      isOpen ? "bg-gold rotate-180 shadow-gold scale-110" : "bg-cream group-hover:bg-gold/15 group-hover:scale-110"
                    }`}
                  >
                    {isOpen && (
                      <span className="absolute inset-0 rounded-full bg-gold/30 animate-pulse-ring" />
                    )}
                    <ChevronDownIcon
                      className={`relative h-3.5 w-3.5 transition-colors ${
                        isOpen ? "fill-white" : "fill-gold"
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                      <div className="h-px w-full bg-gradient-to-r from-cream-line via-cream-line/60 to-transparent" />
                      <p className="mt-4 text-[13.5px] leading-[1.8] text-ink-muted sm:text-[14.5px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
