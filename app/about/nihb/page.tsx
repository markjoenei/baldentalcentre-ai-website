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
import { nihbBenefits, nihbSteps } from "../../../components/shared/aboutData";
import { CheckIcon } from "../../../components/icons";

export const metadata: Metadata = {
  title: "NIHB (First Nations & Inuit) — Bal Dental Centre, Scarborough",
  description:
    "Direct billing to NIHB for First Nations and Inuit patients in Scarborough. Cleanings, fillings, root canals, dentures, and more — covered, with zero paperwork.",
};

function IconForBenefit({ kind }: { kind: string }) {
  switch (kind) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      );
    case "tooth":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M12 2c-4 0-6 2-6 4 0 1 0 4-1 6-1 2-1 4-1 5 0 2 1 4 3 4 2 0 2-2 3-4s2-2 2-2 1 0 2 2 1 4 3 4c2 0 3-2 3-4 0-1 0-3-1-5-1-2-1-5-1-6 0-2-2-4-6-4z" />
        </svg>
      );
    case "kids":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M12 6c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4zm0-4C7.58 2 4 5.58 4 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v16c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function NIHBPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="Non-Insured Health Benefits"
        title={
          <>
            <span className="text-gradient-gold">NIHB Coverage</span> for First
            Nations & Inuit Patients
          </>
        }
        description="We're proud to provide direct-billed dental services for the Non-Insured Health Benefits Program. Bring your status card — we handle the paperwork, you walk in and out with care."
        image="/images-about/nihb-hero.jpg"
        imageAlt="NIHB Non-Insured Health Benefits coverage"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
          { label: "NIHB (First Nations)" },
        ]}
        cta={{ label: "Book As An NIHB Patient", href: "/book-appointment" }}
        stats={[
          { value: "$0", label: "Out-of-Pocket" },
          { value: "Direct", label: "NIHB Billing" },
          { value: "7 Days", label: "A Week" },
        ]}
      />
      <InfoBar />

      {/* Benefits grid */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <Sparkle className="pointer-events-none absolute left-[6%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />
        <Sparkle
          className="pointer-events-none absolute right-[8%] bottom-[20%] h-4 w-4 animate-sparkle text-gold/50"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="mb-12 text-center lg:mb-14">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              What's Covered
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              Comprehensive <span className="text-gradient-gold">NIHB Benefits</span>
            </h2>
            <p className="animate-fade-up mx-auto mt-4 max-w-[640px] text-[14.5px] leading-[1.7] text-ink-muted">
              From routine cleanings to major restorative work, the NIHB program covers a wide range of dental services. We handle every claim directly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
            {nihbBenefits.map((b, i) => (
              <article
                key={b.title}
                className="group hover-lift animate-fade-up flex items-start gap-5 rounded-2xl border border-cream-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift lg:p-7"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:ring-gold group-hover:shadow-gold">
                  <IconForBenefit kind={b.icon} />
                </span>
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-navy lg:text-[19px]">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.7] text-ink-muted">{b.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process / Steps */}
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
          <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative w-full shrink-0 lg:w-[440px]">
              <div className="pointer-events-none absolute -inset-2 animate-gradient rounded-3xl bg-gradient-to-br from-gold/40 via-gold-tint/30 to-gold/40 opacity-60 blur-md" />
              <div className="pointer-events-none absolute -right-5 -bottom-5 h-16 w-16 animate-spin-slow rounded-full border-2 border-dashed border-gold/30" />
              <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-white/10">
                <Image
                  src="/images-about/nihb-2.jpg"
                  alt="NIHB program information"
                  width={520}
                  height={620}
                  className="h-[420px] w-full object-cover lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
            </div>

            <div className="flex-1">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-tint">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                Four Simple Steps
              </span>
              <h2 className="animate-fade-up mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-cream sm:text-[32px] lg:text-[38px]">
                How <span className="text-gradient-gold">Direct Billing</span> Works
              </h2>
              <p className="animate-fade-up mt-4 max-w-[560px] text-[14.5px] leading-[1.75] text-cream/80">
                No paperwork at the front desk. No filing your own claims. No out-of-pocket surprises. Here's exactly what to expect.
              </p>

              <ol className="mt-7 flex flex-col gap-4">
                {nihbSteps.map((s, i) => (
                  <li
                    key={s.num}
                    className="animate-fade-up flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/[0.08]"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-[12px] font-bold text-white shadow-gold">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-white">{s.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-[1.6] text-cream/75">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1100px] px-4 py-16 lg:py-20">
          <div className="rounded-3xl border border-cream-line bg-cream/30 p-8 lg:p-12">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h2 className="text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-navy sm:text-[26px] lg:text-[30px]">
                  Bring these to your first visit:
                </h2>
                <ul className="mt-5 flex flex-col gap-2">
                  {[
                    "Valid Indian Status Card or Certificate of Indian Status",
                    "Government-issued photo ID",
                    "Any prior X-rays or treatment records (optional)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] text-navy">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                        <CheckIcon className="h-3 w-3 fill-gold" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Ready to book? <span className="text-gradient-gold">We're ready for you.</span>
          </>
        }
        description="Tell us you're an NIHB patient when you book — we'll prepare your file in advance so your first visit is smooth, quick, and entirely paperwork-free."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
