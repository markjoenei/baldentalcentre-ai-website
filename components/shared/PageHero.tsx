import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../icons";
import Sparkle from "./Sparkle";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbs: Crumb[];
  cta?: { label: string; href: string };
  stats?: Array<{ value: string; label: string }>;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
  cta,
  stats,
}: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-80" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] animate-blob rounded-full bg-gold/[0.08] blur-3xl" />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] animate-blob rounded-full bg-navy/[0.05] blur-3xl"
        style={{ animationDelay: "3s" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.35]" />

      <Sparkle className="pointer-events-none absolute left-[6%] top-[18%] h-4 w-4 animate-sparkle text-gold/70" />
      <Sparkle
        className="pointer-events-none absolute left-[12%] top-[72%] h-3 w-3 animate-sparkle text-gold/60"
        style={{ animationDelay: "1.2s" }}
      />
      <Sparkle
        className="pointer-events-none absolute right-[8%] top-[10%] h-5 w-5 animate-sparkle text-gold/60"
        style={{ animationDelay: "0.6s" }}
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-stretch gap-12 px-4 py-14 lg:flex-row lg:items-center lg:gap-14 lg:py-20">
        <div className="flex flex-1 flex-col gap-5">
          <nav aria-label="Breadcrumb" className="animate-fade-up">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px] font-medium text-navy/70">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-gold">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-navy">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ArrowRightIcon className="h-2.5 w-2.5 fill-gold/60" />
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p
            className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            {eyebrow}
          </p>

          <h1
            className="animate-fade-up text-[34px] font-bold leading-[1.1] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[50px]"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>

          <p
            className="animate-fade-up max-w-[580px] text-[15px] leading-[1.75] text-ink-muted lg:text-[16px]"
            style={{ animationDelay: "180ms" }}
          >
            {description}
          </p>

          {cta && (
            <div className="animate-fade-up pt-2" style={{ animationDelay: "240ms" }}>
              <Link
                href={cta.href}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-4 text-[14px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <span className="relative">{cta.label}</span>
                <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                  <ArrowRightIcon className="h-3.5 w-3.5 fill-white" />
                </span>
              </Link>
            </div>
          )}

          {stats && stats.length > 0 && (
            <div
              className="animate-fade-up grid grid-cols-3 gap-4 pt-4"
              style={{ animationDelay: "300ms" }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="border-l-2 border-gold/40 pl-3"
                  style={{ animationDelay: `${340 + i * 80}ms` }}
                >
                  <p className="text-[20px] font-bold leading-none text-navy sm:text-[24px]">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative w-full shrink-0 lg:w-[520px]">
          <div className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-gold/40" />
          <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-gold/40" />
          <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 animate-spin-slow rounded-full border-2 border-dashed border-gold/30" />

          <div className="hover-lift relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-white/40">
            <Image
              src={image}
              alt={imageAlt}
              width={760}
              height={520}
              priority
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[400px] lg:h-[460px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
