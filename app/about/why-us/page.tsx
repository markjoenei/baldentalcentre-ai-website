import Image from "next/image";
import Link from "next/link";
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
import { whyUsFeatures } from "../../../components/shared/aboutData";
import { CheckIcon, ArrowRightIcon } from "../../../components/icons";

export const metadata: Metadata = {
  title: "Why Choose Us — Bal Dental Centre, Scarborough",
  description:
    "Award-winning care, same-day emergencies, transparent pricing, and a family-first practice. Four reasons Scarborough chooses Bal Dental Centre.",
};

export default function WhyUsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="Why Patients Pick Us"
        title={
          <>
            The Reasons Scarborough{" "}
            <span className="text-gradient-gold">Trusts Their Smile With Us</span>
          </>
        }
        description="Four things set us apart — and patients tell us they're the reason they keep coming back, generation after generation."
        image="/images-about/why-hero.jpg"
        imageAlt="Happy family laughing together"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
          { label: "Why Us" },
        ]}
        cta={{ label: "Experience The Difference", href: "/book-appointment" }}
        stats={[
          { value: "5×", label: "Readers' Choice" },
          { value: "4.9★", label: "Average Rating" },
          { value: "1,000+", label: "Five-Star Reviews" },
        ]}
      />
      <InfoBar />

      {/* Alternating feature blocks */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <div
          className="pointer-events-none absolute left-0 bottom-32 h-72 w-72 rounded-full bg-gold/[0.04] blur-3xl animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
        <Sparkle className="pointer-events-none absolute left-[6%] top-[12%] h-3 w-3 animate-sparkle text-gold/50" />
        <Sparkle
          className="pointer-events-none absolute right-[8%] bottom-[18%] h-4 w-4 animate-sparkle text-gold/50"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="mb-14 text-center">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Four Pillars of Premium Care
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              What Makes Us <span className="text-gradient-gold">Different</span>
            </h2>
          </div>

          <div className="flex flex-col gap-16 lg:gap-24">
            {whyUsFeatures.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={f.title}
                  className={`flex flex-col items-stretch gap-10 lg:items-center lg:gap-16 ${
                    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className="relative w-full shrink-0 lg:w-[480px]">
                    <div className="pointer-events-none absolute -inset-1 animate-gradient rounded-3xl bg-gradient-to-br from-gold/30 to-transparent opacity-60 blur-md" />
                    <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-gold/40" />
                    <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-gold/40" />
                    <div className="hover-lift relative overflow-hidden rounded-3xl shadow-card ring-1 ring-cream-line hover:shadow-lift">
                      <Image
                        src={f.image}
                        alt={f.title}
                        width={760}
                        height={520}
                        className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[420px]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-[20px] font-extrabold text-gold shadow-soft backdrop-blur-sm">
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="animate-fade-up text-[24px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[28px] lg:text-[34px]">
                      {f.title}
                    </h3>
                    <div className="mt-4 h-px w-12 shimmer-line" />
                    <p className="animate-fade-up mt-5 text-[14.5px] leading-[1.8] text-ink-muted lg:text-[15px]">
                      {f.body}
                    </p>
                    <ul className="mt-6 flex flex-col gap-3">
                      {f.points.map((p, j) => (
                        <li
                          key={p}
                          className="group/p flex items-center gap-3 text-[14px] text-navy transition-transform duration-300 hover:translate-x-1"
                          style={{ animationDelay: `${j * 80}ms` }}
                        >
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover/p:scale-110 group-hover/p:bg-gold group-hover/p:ring-gold">
                            <CheckIcon className="h-3 w-3 fill-gold transition-colors duration-300 group-hover/p:fill-white" />
                          </span>
                          <span className="font-medium">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/book-appointment"
                      className="group mt-7 inline-flex items-center gap-2 text-[13.5px] font-semibold text-gold transition-colors hover:text-gold-deep"
                    >
                      Learn more about this
                      <ArrowRightIcon className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            See the difference <span className="text-gradient-gold">for yourself</span>
          </>
        }
        description="Book a 30-minute complimentary consultation. Tour the office, meet the team, leave with a written plan — no pressure."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
