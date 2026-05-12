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
import { ArrowRightIcon } from "../../components/icons";
import { services } from "../../components/shared/servicesData";

export const metadata: Metadata = {
  title: "Our Services — Bal Dental Centre, Scarborough",
  description:
    "Complete dental services in Scarborough — preventive, restorative, cosmetic, orthodontics, and emergency care. All under one roof, billed direct to insurance.",
};

const categories = [
  { name: "Preventive", label: "Preventive Care", description: "Stop problems before they start." },
  { name: "Restorative", label: "Restorative", description: "Repair, replace, and renew teeth." },
  { name: "Cosmetic", label: "Cosmetic", description: "Designed smiles built around your face." },
  { name: "Orthodontics", label: "Orthodontics", description: "Straighter teeth for every age." },
  { name: "Specialty", label: "Specialty Care", description: "Sedation, TMJ, emergency expertise." },
] as const;

export default function ServicesHubPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />

      <PageHero
        eyebrow="Complete Dental Care"
        title={
          <>
            Eighteen Services,{" "}
            <span className="text-gradient-gold">One Trusted Practice</span>
          </>
        }
        description="From your child's first cleaning to grandpa's implants — every dental need answered under one roof. Direct insurance billing, transparent pricing, and treatment plans you can take home in writing."
        image="/images-services/hub-hero.jpg"
        imageAlt="Family enjoying time together"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        cta={{ label: "Book A Consultation", href: "/book-appointment" }}
        stats={[
          { value: "18", label: "Specialized Services" },
          { value: "7 Days", label: "Open Per Week" },
          { value: "$0", label: "Down to Start" },
        ]}
      />
      <InfoBar />

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <div
          className="pointer-events-none absolute left-0 bottom-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse"
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
              Browse by Category
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              Explore <span className="text-gradient-gold">Every Service</span> We Offer
            </h2>
          </div>

          <div className="flex flex-col gap-16 lg:gap-20">
            {categories.map((cat, catIdx) => {
              const items = services.filter((s) => s.category === cat.name);
              if (items.length === 0) return null;
              return (
                <div key={cat.name}>
                  <div className="animate-fade-up mb-8 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
                        Category {String(catIdx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-[22px] font-bold tracking-[-0.01em] text-navy sm:text-[26px] lg:text-[30px]">
                        {cat.label}
                      </h3>
                      <p className="mt-1 text-[13.5px] text-ink-muted">{cat.description}</p>
                    </div>
                    <span className="hidden text-[12px] text-ink-muted sm:block">
                      {items.length} service{items.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {items.map((s, i) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group hover-lift animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-cream-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift"
                        style={{ animationDelay: `${i * 60}ms` }}
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src={s.hubImage}
                            alt={s.label}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                          <div className="absolute left-4 top-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-gold backdrop-blur-sm">
                              {cat.name}
                            </span>
                          </div>
                          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                            <h4 className="text-[16px] font-bold leading-tight text-white lg:text-[18px]">
                              {s.label}
                            </h4>
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:rotate-[-12deg] group-hover:bg-gold group-hover:ring-gold group-hover:shadow-gold">
                              <ArrowRightIcon className="h-3.5 w-3.5 fill-white" />
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 p-5">
                          <p className="text-[13px] leading-[1.6] text-ink-muted">
                            {s.shortDescription}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-2 text-[12.5px] font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                            Explore service
                            <ArrowRightIcon className="h-3 w-3 fill-current" />
                          </span>
                        </div>
                      </Link>
                    ))}
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
            Not sure where to start?{" "}
            <span className="text-gradient-gold">We'll guide you.</span>
          </>
        }
        description="Book a 30-minute consultation and we'll listen first, examine carefully, and recommend only what you actually need — in plain English, with a written quote."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
