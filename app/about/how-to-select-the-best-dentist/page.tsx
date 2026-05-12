import Image from "next/image";
import type { Metadata } from "next";
import TopBar from "../../../components/TopBar";
import Navbar from "../../../components/Navbar";
import InfoBar from "../../../components/InfoBar";
import Marquee from "../../../components/Marquee";
import MapSection from "../../../components/MapSection";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/shared/PageHero";
import CTABand from "../../../components/shared/CTABand";
import Sparkle from "../../../components/shared/Sparkle";
import { selectionCriteria } from "../../../components/shared/aboutData";

export const metadata: Metadata = {
  title: "How To Select The Best Dentist — Bal Dental Centre",
  description:
    "A six-point checklist for choosing a dentist you can trust: credentials, modern technology, transparent pricing, comfort, reviews, and emergency availability.",
};

const redFlags = [
  "Pressure to commit to expensive treatment on your first visit",
  "Refusing to provide a written treatment plan and quote",
  "No before-and-after photos of their own work",
  "Outdated equipment or paper-only records",
  "Limited weekend or evening availability",
  "Vague or evasive answers about insurance and financing",
];

export default function HowToSelectPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="The Smart Patient's Guide"
        title={
          <>
            How To Select{" "}
            <span className="text-gradient-gold">The Best Dentist</span> For You
          </>
        }
        description="Choosing a dentist is a long-term decision — the right pick saves you thousands in unnecessary work and decades of dental anxiety. Here's the six-point checklist we wish every patient had."
        image="/images-about/select-hero.jpg"
        imageAlt="Smiling couple — choosing the right dentist together"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
          { label: "How To Select The Best Dentist" },
        ]}
        cta={{ label: "Get A Free Second Opinion", href: "/book-appointment" }}
        stats={[
          { value: "6", label: "Key Criteria" },
          { value: "100%", label: "Up-Front Pricing" },
          { value: "Free", label: "Second Opinions" },
        ]}
      />
      <InfoBar />

      {/* Six-criteria grid */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
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
              The Six-Point Checklist
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              What To Look For (And{" "}
              <span className="text-gradient-gold">What To Avoid</span>)
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {selectionCriteria.map((c, i) => (
              <article
                key={c.num}
                className="group hover-lift animate-fade-up relative overflow-hidden rounded-2xl border border-cream-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift lg:p-7"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="pointer-events-none absolute -right-6 -top-6 text-[120px] font-extrabold leading-none text-gold/[0.06] transition-all duration-500 group-hover:text-gold/[0.12]">
                  {c.num}
                </span>
                <div className="relative">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-[14px] font-bold text-gold ring-1 ring-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-white group-hover:ring-gold">
                    {c.num}
                  </span>
                  <h3 className="mt-5 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-navy lg:text-[19px]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.7] text-ink-muted">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags + image */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-red-500/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-4 py-16 lg:py-20">
          <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative w-full shrink-0 lg:w-[440px]">
              <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-gold/40" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-gold/40" />
              <div className="hover-lift overflow-hidden rounded-3xl shadow-card hover:shadow-lift">
                <Image
                  src="/images-about/select-1.jpg"
                  alt="Confident patient evaluating dental options"
                  width={520}
                  height={620}
                  className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[500px]"
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-600">
                <svg viewBox="0 0 20 20" className="h-3 w-3 fill-red-500">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Red Flags To Walk Away From
              </span>
              <h2 className="mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[30px] lg:text-[36px]">
                If you see any of these,{" "}
                <span className="text-gradient-gold">find a different dentist.</span>
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {redFlags.map((r, i) => (
                  <li
                    key={r}
                    className="group flex items-start gap-3 rounded-xl border border-cream-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/30 hover:shadow-card"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 ring-1 ring-red-500/20">
                      <svg viewBox="0 0 20 20" className="h-3 w-3 fill-current">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-[13.5px] leading-[1.6] text-navy">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Want a <span className="text-gradient-gold">no-pressure second opinion?</span>
          </>
        }
        description="Bring us your existing treatment plan. We'll review it for free, give you our honest take, and you decide where to go from there. No commitment, no judgement."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
