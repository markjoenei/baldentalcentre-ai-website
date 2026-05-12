import Image from "next/image";
import type { Metadata } from "next";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import InfoBar from "../../components/InfoBar";
import Marquee from "../../components/Marquee";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import PageHero from "../../components/shared/PageHero";
import Sparkle from "../../components/shared/Sparkle";
import BookingForm from "../../components/shared/BookingForm";
import { CheckIcon, PhoneIcon, MapPinIcon, CalendarIcon } from "../../components/icons";
import { ADDRESS_LINE, PHONE_DISPLAY, PHONE_TEL, officeHours } from "../../components/data";

export const metadata: Metadata = {
  title: "Book Appointment — Bal Dental Centre, Scarborough",
  description:
    "Book your dental appointment online. Same-day emergencies welcome. We confirm within 2 business hours and bill insurance directly.",
};

const guarantees = [
  "Confirmation call within 2 business hours",
  "Direct insurance billing — no paperwork",
  "Free first-visit consultation",
  "Same-day emergencies accepted 7 days a week",
];

export default function BookAppointmentPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />

      <PageHero
        eyebrow="Book Online"
        title={
          <>
            Reserve Your Visit —{" "}
            <span className="text-gradient-gold">It Takes 2 Minutes</span>
          </>
        }
        description="Tell us a bit about yourself and your preferred time. Our team confirms within 2 business hours, bills insurance directly, and never charges hidden fees."
        image="/images-pages/book-hero.jpg"
        imageAlt="Patient ready to book a visit"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Book Appointment" }]}
        stats={[
          { value: "2 hrs", label: "Confirmation Window" },
          { value: "7 Days", label: "A Week Available" },
          { value: "Free", label: "First Consult" },
        ]}
      />
      <InfoBar />

      {/* Form + sidebar */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.06] blur-3xl animate-glow-pulse" />
        <div
          className="pointer-events-none absolute left-0 bottom-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
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
                Step 1 of 1
              </span>
              <h2 className="animate-fade-up mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[30px] lg:text-[34px]">
                Request Your <span className="text-gradient-gold">Appointment</span>
              </h2>
              <p className="animate-fade-up mt-3 max-w-[580px] text-[14px] leading-[1.65] text-ink-muted">
                Fill the form below — we'll call to confirm within 2 business hours.
              </p>

              <div className="mt-7">
                <BookingForm />
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {guarantees.map((g, i) => (
                  <li
                    key={g}
                    className="group animate-fade-up flex items-start gap-3 rounded-2xl border border-cream-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-card"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:ring-gold">
                      <CheckIcon className="h-3 w-3 fill-gold transition-colors duration-300 group-hover:fill-white" />
                    </span>
                    <span className="text-[13.5px] leading-[1.5] font-medium text-navy">{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-cream-line">
                <Image
                  src="/images-pages/book-side.jpg"
                  alt="Welcoming dental visit"
                  width={520}
                  height={400}
                  className="h-[240px] w-full object-cover lg:h-[280px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold-tint">
                    Award-Winning Care
                  </p>
                  <p className="text-[15px] font-semibold leading-tight text-white">
                    Readers' Choice Winner 2013–17
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-cream-line bg-white p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                    <PhoneIcon className="h-4 w-4 fill-gold" />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold">
                      Prefer to Call?
                    </p>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-[18px] font-bold text-navy hover:text-gold"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-[12.5px] leading-[1.6] text-ink-muted">
                  Reach a live team member 7 days a week during office hours. After hours, leave a voicemail and we'll call first thing.
                </p>
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
                    Location
                  </p>
                </div>
                <p className="mt-4 text-[13px] leading-[1.6] text-navy">{ADDRESS_LINE}</p>
                <p className="mt-3 text-[12px] leading-[1.5] text-ink-muted">
                  Free on-site parking. Wheelchair accessible. Near Greystone Park and IV bus Superstation.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
