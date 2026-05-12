import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import InfoBar from "../../components/InfoBar";
import Marquee from "../../components/Marquee";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import PageHero from "../../components/shared/PageHero";
import CTABand from "../../components/shared/CTABand";
import Sparkle from "../../components/shared/Sparkle";
import ServiceFAQ from "../../components/shared/ServiceFAQ";
import { CheckIcon, ArrowRightIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "New Patients — Bal Dental Centre, Scarborough",
  description:
    "Welcome to Bal Dental Centre. New patient info, what to expect, insurance & financing, and how to book your first visit — all in one place.",
};

const expectSteps = [
  {
    num: "01",
    title: "Warm Welcome",
    body: "Coffee or tea? Take a seat in our welcome lounge — calm music, fresh refreshments, no pressure.",
  },
  {
    num: "02",
    title: "Health Review",
    body: "We review your medical history, current concerns, and any goals — what brought you in matters most.",
  },
  {
    num: "03",
    title: "Comprehensive Exam",
    body: "Digital X-rays, oral cancer screening, gum-pocket check, and detailed bite analysis. About 30 minutes.",
  },
  {
    num: "04",
    title: "Your Written Plan",
    body: "Walk out with a custom plan in writing — pricing, options, insurance estimates and recommended sequence.",
  },
];

const insurances = [
  "Manulife",
  "Sun Life",
  "Canada Life",
  "Green Shield",
  "Blue Cross",
  "Desjardins",
  "iA / Industrial Alliance",
  "SSQ Insurance",
  "Equitable Life",
  "NIHB (First Nations)",
  "+ many more",
];

const financingOptions = [
  { title: "0% Interest Financing", body: "12–24 month payment plans on approved credit for treatments over $1,000." },
  { title: "Direct Insurance Billing", body: "We submit, follow up, and only collect your portion at checkout." },
  { title: "In-House Membership Plan", body: "No-insurance dental club: 2 cleanings/year + 20% off all treatment, $39/mo." },
  { title: "Senior & Student Discounts", body: "10% off all non-insured services for seniors 65+ and full-time students." },
];

const firstVisitFAQs = [
  { q: "What should I bring to my first visit?", a: "Photo ID, your insurance card (or details), and a list of any medications. If you have prior X-rays from another office, we'll happily review them for free." },
  { q: "How long is the first appointment?", a: "Plan for 60–75 minutes: 15 min check-in & paperwork, 30 min comprehensive exam, 15 min treatment planning chat. We never rush." },
  { q: "Can I get a cleaning at my first visit?", a: "Sometimes — it depends on your gum health. For some patients we recommend an exam first to plan a proper cleaning. We'll always discuss it with you up-front." },
  { q: "Do you accept walk-ins?", a: "For emergencies — yes, always. For non-urgent visits, booking ensures we have proper time set aside for you. Try our online booking or call ahead." },
  { q: "What if I'm nervous about the dentist?", a: "You're far from alone. We offer nitrous oxide (laughing gas), oral and IV sedation depending on your anxiety level. Just tell us — we'll go at your pace." },
  { q: "Will you push expensive treatment on me?", a: "Never. We diagnose what we see, prioritize what's urgent, and present options (not ultimatums). Every plan is yours to take home and think about — no pressure." },
];

export default function NewPatientsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />

      <PageHero
        eyebrow="New Patient Welcome"
        title={
          <>
            Welcome to{" "}
            <span className="text-gradient-gold">Bal Dental Centre</span>
          </>
        }
        description="Whether you're joining us for the first time or returning after years away — we're glad you're here. Find everything you need to make your first visit smooth, comfortable and stress-free."
        image="/images-pages/new-patients-hero.jpg"
        imageAlt="Family ready for their new patient visit"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "New Patients" }]}
        cta={{ label: "Book My First Visit", href: "/book-appointment" }}
        stats={[
          { value: "Free", label: "First Consultation" },
          { value: "60 min", label: "First Visit Length" },
          { value: "Zero", label: "Pressure to Commit" },
        ]}
      />
      <InfoBar />

      {/* What to expect */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <Sparkle className="pointer-events-none absolute left-[6%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="mb-12 text-center lg:mb-14">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Your First Visit
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              What to <span className="text-gradient-gold">Expect</span> on Day One
            </h2>
            <p className="animate-fade-up mx-auto mt-4 max-w-[640px] text-[14.5px] leading-[1.7] text-ink-muted">
              No clipboard pressure, no rushed exam, no surprise bills. Here's exactly how your first 60 minutes with us unfolds.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative w-full shrink-0 lg:w-[440px]">
              <div className="pointer-events-none absolute -inset-2 animate-gradient rounded-3xl bg-gradient-to-br from-gold/30 to-transparent opacity-60 blur-md" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-gold/40" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-gold/40" />
              <div className="hover-lift relative overflow-hidden rounded-3xl shadow-card ring-1 ring-cream-line hover:shadow-lift">
                <Image
                  src="/images-pages/new-patients-welcome.jpg"
                  alt="Welcoming patient experience"
                  width={520}
                  height={620}
                  className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[500px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
              </div>
            </div>

            <div className="flex-1">
              <ol className="flex flex-col gap-4">
                {expectSteps.map((step, i) => (
                  <li
                    key={step.num}
                    className="group animate-fade-up flex items-start gap-4 rounded-2xl border border-cream-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-card"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-[14px] font-bold text-white shadow-gold transition-transform duration-300 group-hover:scale-110">
                      <span className="absolute inset-0 rounded-2xl bg-gold/30 animate-pulse-ring opacity-0 group-hover:opacity-100" />
                      <span className="relative">{step.num}</span>
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-navy lg:text-[18px]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Forms section */}
      <section className="relative w-full overflow-hidden bg-navy-gradient-animated">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-15" />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.10] blur-3xl" />
        <Sparkle className="pointer-events-none absolute right-[10%] bottom-[20%] h-3.5 w-3.5 animate-sparkle text-gold/60" />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_460px] lg:gap-16">
            <div>
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-tint">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                Save 15 Minutes
              </span>
              <h2 className="animate-fade-up mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-cream sm:text-[32px] lg:text-[38px]">
                Fill out your{" "}
                <span className="text-gradient-gold">new patient paperwork</span> from home
              </h2>
              <p className="animate-fade-up mt-5 max-w-[560px] text-[14.5px] leading-[1.75] text-cream/80">
                Skip the clipboard. Complete our intake forms online before you arrive — your visit starts on time and your information stays secure on our HIPAA-compliant system.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  "Medical history & current medications",
                  "Dental concerns & goals",
                  "Insurance details (we verify benefits for you)",
                  "Emergency contact & consent forms",
                ].map((f, i) => (
                  <li
                    key={f}
                    className="group/f animate-fade-up flex items-center gap-3 text-[14px] text-cream/90 transition-transform duration-300 hover:translate-x-1"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover/f:scale-110 group-hover/f:bg-gold group-hover/f:ring-gold">
                      <CheckIcon className="h-3 w-3 fill-gold transition-colors duration-300 group-hover/f:fill-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-appointment"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-4 text-[14px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <span className="relative">Start Online Intake</span>
                  <ArrowRightIcon className="relative h-3.5 w-3.5 fill-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-7 py-4 text-[14px] font-semibold text-gold-tint backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-white"
                >
                  Have a Question?
                  <ArrowRightIcon className="h-3.5 w-3.5 fill-current" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-2 animate-gradient rounded-3xl bg-gradient-to-br from-gold/40 via-gold-tint/30 to-gold/40 opacity-60 blur-md" />
              <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-white/10">
                <Image
                  src="/images-pages/new-patients-forms.jpg"
                  alt="Filling out paperwork online"
                  width={520}
                  height={620}
                  className="h-[400px] w-full object-cover lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & financing */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="mb-12 text-center lg:mb-14">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Insurance & Financing
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[38px]">
              Pay Your Way —{" "}
              <span className="text-gradient-gold">No Surprises</span>
            </h2>
            <p className="animate-fade-up mx-auto mt-4 max-w-[640px] text-[14.5px] leading-[1.7] text-ink-muted">
              We bill insurance directly so you never pay full price up-front. For uncovered care, we offer 0% financing and an affordable in-house membership plan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-[18px] font-bold tracking-[-0.01em] text-navy lg:text-[20px]">
                Insurance Plans We Accept
              </h3>
              <div className="mt-1 h-px w-10 bg-gold/40" />
              <p className="mt-4 text-[13.5px] leading-[1.7] text-ink-muted">
                We bill direct to most major Canadian dental insurance providers. Not sure if we accept yours? Call us — we almost always do.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {insurances.map((ins) => (
                  <span
                    key={ins}
                    className="inline-flex items-center gap-1 rounded-full border border-cream-line bg-cream/40 px-3 py-1.5 text-[12.5px] font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white"
                  >
                    {ins}
                  </span>
                ))}
              </div>
              <div className="mt-7 overflow-hidden rounded-3xl shadow-card ring-1 ring-cream-line">
                <Image
                  src="/images-pages/new-patients-insurance.jpg"
                  alt="Affordable care for everyone"
                  width={560}
                  height={320}
                  className="h-[220px] w-full object-cover lg:h-[260px]"
                />
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-bold tracking-[-0.01em] text-navy lg:text-[20px]">
                Financing & Payment Options
              </h3>
              <div className="mt-1 h-px w-10 bg-gold/40" />
              <ul className="mt-5 flex flex-col gap-4">
                {financingOptions.map((opt, i) => (
                  <li
                    key={opt.title}
                    className="group animate-fade-up flex items-start gap-4 rounded-2xl border border-cream-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-card"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:ring-gold">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-gold transition-colors duration-300 group-hover:fill-white">
                        <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0022 15V9a2 2 0 00-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                        <circle cx="16" cy="12" r="1.5" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-[15px] font-bold tracking-[-0.01em] text-navy">
                        {opt.title}
                      </h4>
                      <p className="mt-2 text-[13px] leading-[1.65] text-ink-muted">{opt.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-cream/30 to-white">
        <div className="pointer-events-none absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />

        <div className="relative mx-auto max-w-[960px] px-4 py-20 lg:py-24">
          <div className="mb-10 text-center lg:mb-14">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              First-Visit FAQ
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[36px]">
              Common <span className="text-gradient-gold">New Patient Questions</span>
            </h2>
          </div>
          <ServiceFAQ faqs={firstVisitFAQs} />
        </div>
      </section>

      <CTABand
        title={
          <>
            Ready for a different kind of{" "}
            <span className="text-gradient-gold">dental experience?</span>
          </>
        }
        description="Book your first visit. Walk out with a written plan, a clear sense of cost, and zero pressure. That's our promise."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
