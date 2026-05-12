"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredServices } from "./data";
import { ArrowRightIcon, CheckIcon } from "./icons";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0L13.5 8.5L22 12L13.5 15.5L12 24L10.5 15.5L2 12L10.5 8.5L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FeaturedServices() {
  const [active, setActive] = useState<number>(1);
  const current = featuredServices.find((s) => s.id === active) ?? featuredServices[0];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
      <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.06] blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute left-0 bottom-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <Sparkle className="pointer-events-none absolute left-[5%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />
      <Sparkle className="pointer-events-none absolute right-[10%] bottom-[20%] h-4 w-4 animate-sparkle text-gold/50" style={{ animationDelay: "1.2s" }} />

      <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
        <div className="mb-12 text-center lg:mb-14">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Our Services
          </span>
          <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]" style={{ animationDelay: "100ms" }}>
            Featured <span className="text-gradient-gold">Dental Services</span>
          </h2>
          <p className="animate-fade-up mt-3 text-[14px] text-ink-muted" style={{ animationDelay: "200ms" }}>
            Click any service below to learn more about our personalized care
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <div className="flex w-full flex-col gap-2 lg:w-[320px] lg:shrink-0">
            {featuredServices.map((svc, i) => {
              const isActive = svc.id === active;
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setActive(svc.id)}
                  className={`group animate-fade-up flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cream-deep to-cream shadow-soft ring-1 ring-gold/20"
                      : "border border-cream-line bg-white hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-soft"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-gold shadow-gold scale-110"
                        : "border border-gold/40 bg-white group-hover:bg-gold/10"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gold/30 animate-pulse-ring" />
                    )}
                    <CheckIcon
                      className={`relative h-3.5 w-3.5 transition-colors ${isActive ? "fill-white" : "fill-gold"}`}
                    />
                  </span>
                  <span
                    className={`flex-1 text-[13.5px] font-medium ${
                      isActive ? "text-navy" : "text-navy/80 group-hover:text-gold"
                    }`}
                  >
                    {svc.label}
                  </span>
                  <ArrowRightIcon
                    className={`h-3.5 w-3.5 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 fill-gold opacity-100"
                        : "-translate-x-1 fill-gold opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="flex-1">
            <div className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-cream-deep to-cream-soft shadow-lift ring-1 ring-gold/15 md:flex-row">
              <Sparkle className="pointer-events-none absolute right-[6%] top-[8%] h-3 w-3 animate-sparkle text-gold/60" />
              <Sparkle className="pointer-events-none absolute left-[8%] bottom-[10%] h-2.5 w-2.5 animate-sparkle text-gold/60" style={{ animationDelay: "1.5s" }} />

              <div className="flex flex-1 flex-col justify-between p-7 lg:p-10">
                <div className="animate-fade-in" key={current.id}>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                    Featured Service
                  </span>
                  <h3 className="mt-4 text-[19px] font-bold uppercase leading-[1.25] tracking-wide text-navy lg:text-[22px]">
                    {current.heading}
                  </h3>
                  <div className="mt-4 h-px w-12 shimmer-line" />
                  <p className="mt-4 text-[14px] leading-[1.75] text-ink-muted lg:text-[15px]">
                    {current.body}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={current.url}
                    className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gold px-6 py-3 text-[13px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                    <span className="relative">Learn More</span>
                    <ArrowRightIcon className="relative h-3.5 w-3.5 fill-white transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <div className="flex items-center gap-1.5">
                    {featuredServices.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        aria-label={`Select ${s.label}`}
                        onClick={() => setActive(s.id)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          s.id === active
                            ? "w-7 bg-gold"
                            : "w-2 bg-gold/30 hover:bg-gold/60 hover:scale-125"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="group relative h-[240px] w-full shrink-0 overflow-hidden md:h-auto md:w-[42%] lg:w-[46%]">
                <Image
                  src={current.image}
                  alt={current.label}
                  fill
                  className="animate-fade-in object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 42vw"
                  key={current.id}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-cream-deep/20" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
