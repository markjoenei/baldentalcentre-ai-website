"use client";

import { useState } from "react";
import { ChevronDownIcon } from "../icons";

type Props = {
  faqs: Array<{ q: string; a: string }>;
};

export default function ServiceFAQ({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, idx) => {
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
                  isOpen
                    ? "bg-gold rotate-180 shadow-gold scale-110"
                    : "bg-cream group-hover:bg-gold/15 group-hover:scale-110"
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
  );
}
