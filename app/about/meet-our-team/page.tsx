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
import { teamMembers, teamLeadBio } from "../../../components/shared/aboutData";
import { CheckIcon } from "../../../components/icons";

export const metadata: Metadata = {
  title: "Meet Our Team — Bal Dental Centre, Scarborough",
  description:
    "Meet the award-winning dentists, hygienists and care coordinators at Bal Dental Centre. Decades of experience, gentle care, and a smile for every age.",
};

export default function MeetOurTeamPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="The People Behind Your Smile"
        title={
          <>
            Meet the Team at{" "}
            <span className="text-gradient-gold">Bal Dental Centre</span>
          </>
        }
        description="Seven licensed dentists led by founder Dr. Gus Bal, supported by a multilingual hygiene and administrative team — and a shared belief that every patient deserves to be treated like family. Get to know the people you'll be smiling alongside for years to come."
        image="/images-about/team-hero.jpg"
        imageAlt="Dentist with smiling patient at Bal Dental Centre"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
          { label: "Meet Our Team" },
        ]}
        cta={{ label: "Book With Our Team", href: "/book-appointment" }}
        stats={[
          { value: "25+", label: "Years Serving Scarborough" },
          { value: "10K+", label: "Patients Treated" },
          { value: "7", label: "Languages Spoken" },
        ]}
      />
      <InfoBar />

      {/* Lead doctor spotlight */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <Sparkle className="pointer-events-none absolute left-[6%] top-[20%] h-3 w-3 animate-sparkle text-gold/50" />
        <Sparkle
          className="pointer-events-none absolute right-[10%] bottom-[15%] h-4 w-4 animate-sparkle text-gold/50"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative w-full shrink-0 lg:w-[460px]">
              <div className="pointer-events-none absolute -inset-2 animate-gradient rounded-3xl bg-gradient-to-br from-gold/40 via-gold-tint/30 to-gold/40 opacity-60 blur-md" />
              <div className="pointer-events-none absolute -right-5 -bottom-5 h-16 w-16 animate-spin-slow rounded-full border-2 border-dashed border-gold/30" />
              <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-cream-line">
                <Image
                  src={teamLeadBio.image}
                  alt={teamLeadBio.name}
                  width={520}
                  height={620}
                  className="h-[460px] w-full object-cover lg:h-[540px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-tint">
                    Founder
                  </p>
                  <p className="text-[18px] font-bold text-white">{teamLeadBio.name}</p>
                  <p className="text-[13px] text-white/80">{teamLeadBio.role}</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                A Message from Our Founder
              </span>
              <h2 className="animate-fade-up mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[38px]">
                Two decades of care.{" "}
                <span className="text-gradient-gold">One simple promise.</span>
              </h2>
              <div className="animate-fade-up mt-5 flex flex-col gap-4 text-[14.5px] leading-[1.8] text-ink-muted lg:text-[15px]">
                {teamLeadBio.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="animate-fade-up mt-7 grid grid-cols-3 gap-4">
                {teamLeadBio.stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-cream-line bg-cream/40 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-card"
                  >
                    <p className="text-[24px] font-extrabold text-gold sm:text-[28px]">{s.value}</p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-cream/30 to-white">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.06] blur-3xl animate-glow-pulse" />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="mb-12 text-center lg:mb-14">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Our Clinical Team
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              Award-Winning <span className="text-gradient-gold">Dental Professionals</span>
            </h2>
            <p className="animate-fade-up mx-auto mt-4 max-w-[640px] text-[14.5px] leading-[1.7] text-ink-muted">
              Each team member brings specialized training and a calm, patient-first chair-side manner.
              Hover any card to see their credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {teamMembers.map((m, i) => (
              <article
                key={m.name}
                className="group hover-lift animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-cream-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <div className="absolute inset-x-4 bottom-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-gold backdrop-blur-sm">
                      {m.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[18px] font-bold tracking-[-0.01em] text-navy">{m.name}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-muted">{m.bio}</p>
                  <ul className="mt-5 flex flex-col gap-2 border-t border-cream-line pt-5">
                    {m.credentials.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-[12.5px] leading-[1.5] text-navy/80"
                      >
                        <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                          <CheckIcon className="h-2.5 w-2.5 fill-gold" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Ready to meet <span className="text-gradient-gold">your new dental team?</span>
          </>
        }
        description="Book a complimentary consultation. Tour the office, meet the team, and leave with a clear plan — no pressure, no commitment."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
