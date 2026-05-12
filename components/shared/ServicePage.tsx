import Image from "next/image";
import Link from "next/link";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import InfoBar from "../InfoBar";
import Marquee from "../Marquee";
import MapSection from "../MapSection";
import Footer from "../Footer";
import PageHero from "./PageHero";
import CTABand from "./CTABand";
import Sparkle from "./Sparkle";
import BenefitIconRenderer from "./BenefitIconRenderer";
import ServiceFAQ from "./ServiceFAQ";
import { CheckIcon, ArrowRightIcon } from "../icons";
import type { Service } from "./servicesData";
import { BOOK_URL } from "../data";

type Props = { service: Service };

export default function ServicePage({ service }: Props) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />

      <PageHero
        eyebrow={service.hero.eyebrow}
        title={
          <>
            {service.hero.title}{" "}
            <span className="text-gradient-gold">{service.hero.titleAccent}</span>
          </>
        }
        description={service.hero.description}
        image={service.hero.image}
        imageAlt={service.hero.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.label },
        ]}
        cta={{ label: "Book Consultation", href: BOOK_URL }}
        stats={service.hero.stats}
      />
      <InfoBar />

      {/* Intro / Overview */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <Sparkle className="pointer-events-none absolute left-[6%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />
        <Sparkle
          className="pointer-events-none absolute right-[10%] bottom-[18%] h-4 w-4 animate-sparkle text-gold/50"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative w-full shrink-0 lg:w-[480px]">
              <div className="pointer-events-none absolute -inset-2 animate-gradient rounded-3xl bg-gradient-to-br from-gold/30 to-transparent opacity-60 blur-md" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-gold/40" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-gold/40" />
              <div className="hover-lift relative overflow-hidden rounded-3xl shadow-card ring-1 ring-cream-line hover:shadow-lift">
                <Image
                  src={service.intro.image}
                  alt={service.intro.title}
                  width={760}
                  height={520}
                  className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[440px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
              </div>
            </div>

            <div className="flex-1">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                {service.intro.eyebrow}
              </span>
              <h2 className="animate-fade-up mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[30px] lg:text-[36px]">
                {service.intro.title}{" "}
                <span className="text-gradient-gold">{service.intro.titleAccent}</span>
              </h2>
              <div className="mt-5 flex flex-col gap-4">
                {service.intro.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="animate-fade-up text-[14.5px] leading-[1.8] text-ink-muted lg:text-[15px]"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {p}
                  </p>
                ))}
              </div>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.intro.bullets.map((b, i) => (
                  <li
                    key={b}
                    className="group/b animate-fade-up flex items-center gap-2.5 text-[13.5px] font-medium text-navy transition-transform duration-300 hover:translate-x-1"
                    style={{ animationDelay: `${200 + i * 80}ms` }}
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover/b:scale-110 group-hover/b:bg-gold group-hover/b:ring-gold">
                      <CheckIcon className="h-3 w-3 fill-gold transition-colors duration-300 group-hover/b:fill-white" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-cream/30 to-white">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.06] blur-3xl animate-glow-pulse" />
        <Sparkle className="pointer-events-none absolute left-[6%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />
        <Sparkle
          className="pointer-events-none absolute right-[8%] bottom-[18%] h-4 w-4 animate-sparkle text-gold/50"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="mb-12 text-center lg:mb-14">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Why It Matters
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              The <span className="text-gradient-gold">Real Benefits</span> Patients Notice
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {service.benefits.map((b, i) => (
              <article
                key={b.title}
                className="group hover-lift animate-fade-up flex flex-col rounded-2xl border border-cream-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-white group-hover:ring-gold group-hover:shadow-gold">
                  <BenefitIconRenderer kind={b.icon} />
                </span>
                <h3 className="mt-5 text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-navy lg:text-[17px]">
                  {b.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-ink-muted">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative w-full overflow-hidden bg-navy-gradient-animated">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-15" />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.10] blur-3xl" />
        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.07] blur-3xl"
          style={{ animationDelay: "3s" }}
        />
        <Sparkle className="pointer-events-none absolute left-[10%] top-[20%] h-4 w-4 animate-sparkle text-gold/70" />
        <Sparkle
          className="pointer-events-none absolute right-[10%] bottom-[20%] h-3.5 w-3.5 animate-sparkle text-gold/60"
          style={{ animationDelay: "1.2s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="mb-12 text-center lg:mb-14">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-tint">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              The Process
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-cream sm:text-[34px] lg:text-[40px]">
              From First Visit to{" "}
              <span className="text-gradient-gold">Finished Smile</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {service.process.map((p, i) => (
              <div
                key={p.num}
                className="group animate-fade-up relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.08]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="pointer-events-none absolute -right-3 -top-3 text-[80px] font-extrabold leading-none text-white/[0.06] transition-all duration-500 group-hover:text-gold/[0.20]">
                  {p.num}
                </span>
                <div className="relative">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-[12px] font-bold text-white shadow-gold transition-transform duration-300 group-hover:scale-110">
                    {p.num}
                  </span>
                  <h3 className="mt-4 text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-white lg:text-[17px]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-cream/80">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidates / Right For You */}
      <section className="relative w-full overflow-hidden bg-cream">
        <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-60" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.08] blur-3xl" />
        <Sparkle className="pointer-events-none absolute left-[6%] top-[18%] h-3 w-3 animate-sparkle text-gold/60" />
        <Sparkle
          className="pointer-events-none absolute right-[8%] bottom-[20%] h-4 w-4 animate-sparkle text-gold/60"
          style={{ animationDelay: "1.3s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="flex flex-col items-stretch gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
            <div className="relative w-full shrink-0 lg:w-[460px]">
              <div className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-gold/40" />
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-gold/40" />
              <div className="pointer-events-none absolute -left-6 top-1/4 h-14 w-14 animate-spin-slow rounded-full border-2 border-dashed border-gold/30" />
              <div className="hover-lift overflow-hidden rounded-3xl shadow-lift hover:shadow-lift">
                <Image
                  src={service.candidates.image}
                  alt={service.candidates.title}
                  width={520}
                  height={620}
                  className="h-[440px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[520px]"
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                Is This Right For You?
              </span>
              <h2 className="animate-fade-up mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[30px] lg:text-[36px]">
                {service.candidates.title}{" "}
                <span className="text-gradient-gold">{service.candidates.titleAccent}</span>
              </h2>
              <p className="animate-fade-up mt-5 max-w-[580px] text-[14.5px] leading-[1.8] text-ink-muted lg:text-[15px]">
                {service.candidates.description}
              </p>
              <ul className="mt-7 flex flex-col gap-3">
                {service.candidates.points.map((p, i) => (
                  <li
                    key={p}
                    className="group/c animate-fade-up flex items-start gap-3 rounded-xl border border-cream-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-card"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover/c:scale-110 group-hover/c:bg-gold group-hover/c:ring-gold">
                      <CheckIcon className="h-3 w-3 fill-gold transition-colors duration-300 group-hover/c:fill-white" />
                    </span>
                    <span className="text-[13.5px] leading-[1.6] text-navy">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />

        <div className="relative mx-auto max-w-[960px] px-4 py-20 lg:py-24">
          <div className="mb-10 text-center lg:mb-14">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Frequently Asked
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[36px]">
              Common Questions About{" "}
              <span className="text-gradient-gold">{service.label}</span>
            </h2>
          </div>
          <ServiceFAQ faqs={service.faqs} />
        </div>
      </section>

      {/* Pricing transparency band */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
          <div className="relative overflow-hidden rounded-3xl border border-cream-line bg-gradient-to-br from-cream-deep via-cream-soft to-white p-8 shadow-card md:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/[0.10] blur-3xl animate-glow-pulse" />
            <Sparkle className="pointer-events-none absolute right-[10%] top-[18%] h-4 w-4 animate-sparkle text-gold/70" />

            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold">
                  Transparent Pricing
                </p>
                <p className="mt-3 text-[40px] font-extrabold leading-none tracking-tight text-navy sm:text-[48px]">
                  {service.pricing.headline}
                </p>
                <p className="mt-2 text-[14px] font-medium text-navy/80">{service.pricing.sub}</p>
                <p className="mt-3 max-w-[480px] text-[13px] leading-[1.65] text-ink-muted">
                  {service.pricing.note}
                </p>
              </div>
              <Link
                href={BOOK_URL}
                className="group relative inline-flex shrink-0 items-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-4 text-[14px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <span className="relative">Get a Written Quote</span>
                <ArrowRightIcon className="relative h-3.5 w-3.5 fill-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            {service.cta.title}{" "}
            <span className="text-gradient-gold">{service.cta.titleAccent}</span>
          </>
        }
        description={service.cta.description}
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
