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
import { officeTour } from "../../../components/shared/aboutData";

export const metadata: Metadata = {
  title: "Tour Our Office — Bal Dental Centre, Scarborough",
  description:
    "Take a visual walk-through of our modern Scarborough dental office: private treatment suites, digital imaging, sterilization, and a calming welcome lounge.",
};

const amenities = [
  "Massage chairs in every suite",
  "Ceiling-mounted Netflix & noise-cancelling headphones",
  "Refreshment bar in the welcome lounge",
  "Hospital-grade sterilization (you can watch it happen)",
  "Wheelchair-accessible entrance & parking",
  "Free Wi-Fi & device charging stations",
];

export default function TourOfficePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="A Different Kind of Dental Office"
        title={
          <>
            Step Inside Our{" "}
            <span className="text-gradient-gold">Scarborough Dental Office</span>
          </>
        }
        description="Forget every clinical waiting room you've ever sat in. Our office was designed by patients, for patients — calm, contemporary, and engineered to remove every reason to feel nervous."
        image="/images-about/tour-hero.jpg"
        imageAlt="Modern dental treatment procedure"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
          { label: "Tour Our Office" },
        ]}
        cta={{ label: "Schedule An In-Person Tour", href: "/book-appointment" }}
        stats={[
          { value: "6", label: "Treatment Suites" },
          { value: "3,200ft²", label: "Modern Office" },
          { value: "Free", label: "On-Site Parking" },
        ]}
      />
      <InfoBar />

      {/* Office gallery — masonry-style */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <div
          className="pointer-events-none absolute right-0 bottom-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
        <Sparkle className="pointer-events-none absolute left-[5%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />
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
              The Virtual Tour
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              Every Corner, <span className="text-gradient-gold">Engineered for Calm</span>
            </h2>
            <p className="animate-fade-up mx-auto mt-4 max-w-[640px] text-[14.5px] leading-[1.7] text-ink-muted">
              From the moment you walk in, every detail — lighting, sound, scent, materials — is tuned to keep your heart-rate down and your smile up.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {officeTour.map((o, i) => (
              <article
                key={o.title}
                className={`group hover-lift animate-fade-up overflow-hidden rounded-3xl border border-cream-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    i === 0 ? "h-[320px] lg:h-[420px]" : "h-[280px] lg:h-[340px]"
                  }`}
                >
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-[18px] font-extrabold text-gold shadow-soft backdrop-blur-sm">
                    0{i + 1}
                  </div>
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="text-[20px] font-bold leading-tight text-white sm:text-[22px] lg:text-[26px]">
                      {o.title}
                    </h3>
                    <p className="mt-2 max-w-[640px] text-[13.5px] leading-[1.6] text-white/85">
                      {o.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities list */}
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
              Amenities You'll Notice
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-cream sm:text-[34px] lg:text-[40px]">
              Touches That <span className="text-gradient-gold">Set Us Apart</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <div
                key={a}
                className="group animate-fade-up flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.08]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:ring-gold group-hover:shadow-gold">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-gold transition-colors duration-300 group-hover:fill-white">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[14px] font-medium leading-[1.5] text-white">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Come see it in person.{" "}
            <span className="text-gradient-gold">Coffee's on us.</span>
          </>
        }
        description="Book a no-pressure tour. We'll show you around, introduce the team, and answer every question — no appointment required."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
