import Image from "next/image";
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
import ContactForm from "../../components/shared/ContactForm";
import { PhoneIcon, MapPinIcon, CalendarIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "../../components/icons";
import {
  ADDRESS_MULTI,
  DIRECTIONS_URL,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_2_DISPLAY,
  PHONE_2_TEL,
  officeHours,
} from "../../components/data";

export const metadata: Metadata = {
  title: "Contact Us — Bal Dental Centre, Scarborough",
  description:
    "Get in touch with Bal Dental Centre. Call, email or use our quick contact form. Open 7 days a week — same-day emergencies welcome.",
};

const contactCards = [
  {
    eyebrow: "Call Us",
    label: "Primary",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    icon: "phone" as const,
  },
  {
    eyebrow: "Call Us",
    label: "Secondary",
    value: PHONE_2_DISPLAY,
    href: `tel:${PHONE_2_TEL}`,
    icon: "phone" as const,
  },
  {
    eyebrow: "Email",
    label: "General Inquiries",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: "mail" as const,
  },
];

function ContactIcon({ kind, className }: { kind: "phone" | "mail"; className?: string }) {
  if (kind === "phone") return <PhoneIcon className={className} />;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />

      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            We'd Love to{" "}
            <span className="text-gradient-gold">Hear From You</span>
          </>
        }
        description="Got a question, need a quote, or want to chat about a specific concern? Call, email or send us a message — we respond fast and never push you toward treatment you don't need."
        image="/images-pages/contact-hero.jpg"
        imageAlt="Friendly contact and conversation"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        cta={{ label: "Book Appointment Instead", href: "/book-appointment" }}
        stats={[
          { value: "<1 day", label: "Email Response" },
          { value: "7 Days", label: "Phone Coverage" },
          { value: "7 Languages", label: "Spoken Here" },
        ]}
      />
      <InfoBar />

      {/* Quick contact methods */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />

        <div className="relative mx-auto max-w-[1280px] px-4 py-16 lg:py-20">
          <div className="mb-10 text-center lg:mb-12">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Reach Us Your Way
            </span>
            <h2 className="animate-fade-up mt-4 text-[26px] font-bold tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[36px]">
              Three Ways to <span className="text-gradient-gold">Get in Touch</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {contactCards.map((c, i) => (
              <a
                key={c.value}
                href={c.href}
                className="group hover-lift animate-fade-up flex items-start gap-5 rounded-2xl border border-cream-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-white group-hover:ring-gold group-hover:shadow-gold">
                  <ContactIcon kind={c.icon} className="h-5 w-5 fill-current" />
                </span>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold">
                    {c.eyebrow}
                  </p>
                  <p className="mt-1 text-[12px] text-ink-muted">{c.label}</p>
                  <p className="mt-2 text-[18px] font-bold text-navy">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-cream/30 to-white">
        <div className="pointer-events-none absolute left-0 bottom-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <Sparkle className="pointer-events-none absolute left-[5%] top-[12%] h-3 w-3 animate-sparkle text-gold/50" />
        <Sparkle
          className="pointer-events-none absolute right-[6%] bottom-[18%] h-4 w-4 animate-sparkle text-gold/50"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div>
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                Send a Message
              </span>
              <h2 className="animate-fade-up mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[30px] lg:text-[34px]">
                Quick <span className="text-gradient-gold">Contact Form</span>
              </h2>
              <p className="animate-fade-up mt-3 max-w-[580px] text-[14px] leading-[1.65] text-ink-muted">
                For appointment requests, please use our{" "}
                <a href="/book-appointment" className="font-semibold text-gold hover:underline">
                  booking form
                </a>{" "}
                instead — it's faster.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-cream-line">
                <Image
                  src="/images-pages/contact-side.jpg"
                  alt="Welcoming team"
                  width={520}
                  height={400}
                  className="h-[240px] w-full object-cover lg:h-[300px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold-tint">
                    Our Team
                  </p>
                  <p className="text-[15px] font-semibold leading-tight text-white">
                    Multilingual, multicultural, always welcoming
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-cream-line bg-white p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                    <CalendarIcon className="h-4 w-4 fill-gold" />
                  </span>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold">
                    Office Hours
                  </p>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-[13px]">
                  {officeHours.map(([day, hours]) => (
                    <li
                      key={day}
                      className="flex items-baseline justify-between gap-3 border-b border-cream-line pb-1.5 last:border-0"
                    >
                      <span className="font-semibold text-navy">{day}</span>
                      <span className="text-ink-muted">{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-cream-line bg-white p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                    <MapPinIcon className="h-4 w-4 fill-gold" />
                  </span>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold">
                    Find Us
                  </p>
                </div>
                <div className="mt-4 text-[13.5px] leading-[1.6] text-navy">
                  {ADDRESS_MULTI.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[12.5px] font-semibold text-gold hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              <div className="rounded-3xl border border-cream-line bg-white p-6 shadow-card">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold">
                  Connect On Social
                </p>
                <div className="mt-4 flex gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61554432576015"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-cream-line bg-cream/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1877f2] hover:bg-[#1877f2]"
                  >
                    <FacebookIcon className="h-4 w-4 fill-gold transition-colors duration-300 group-hover:fill-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/baldentalcentreca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-cream-line bg-cream/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e1306c] hover:bg-[#e1306c]"
                  >
                    <InstagramIcon className="h-4 w-4 fill-gold transition-colors duration-300 group-hover:fill-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCSMxHRacxLftVjytujOSfmw"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-cream-line bg-cream/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff0000] hover:bg-[#ff0000]"
                  >
                    <YouTubeIcon className="h-4 w-4 fill-gold transition-colors duration-300 group-hover:fill-white" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Or skip the form —{" "}
            <span className="text-gradient-gold">just book a visit</span>
          </>
        }
        description="Most patients find it faster to book directly. Our team confirms within 2 business hours and answers any questions on the call."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
