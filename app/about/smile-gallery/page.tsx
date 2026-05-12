"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TopBar from "../../../components/TopBar";
import Navbar from "../../../components/Navbar";
import InfoBar from "../../../components/InfoBar";
import Marquee from "../../../components/Marquee";
import MapSection from "../../../components/MapSection";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/shared/PageHero";
import CTABand from "../../../components/shared/CTABand";
import Sparkle from "../../../components/shared/Sparkle";
import { galleryCategories, galleryItems } from "../../../components/shared/aboutData";

export default function SmileGalleryPage() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const visible = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="Real Patients, Real Smiles"
        title={
          <>
            Our <span className="text-gradient-gold">Smile Gallery</span>
          </>
        }
        description="Every smile below is a real Bal Dental Centre patient — and every one tells a story. Filter by treatment to see the work we love most: veneers, whitening, Invisalign, and life-changing implants."
        image="/images-about/gallery-hero.jpg"
        imageAlt="Confident smile after dental treatment"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
          { label: "Smile Gallery" },
        ]}
        cta={{ label: "Start Your Smile Makeover", href: "/book-appointment" }}
        stats={[
          { value: "500+", label: "Smile Makeovers" },
          { value: "200+", label: "Implants Placed" },
          { value: "12", label: "Featured Below" },
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
          className="pointer-events-none absolute right-[10%] bottom-[20%] h-4 w-4 animate-sparkle text-gold/50"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          <div className="mb-10 text-center lg:mb-12">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Filter by Treatment
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              Browse <span className="text-gradient-gold">Real Patient Smiles</span>
            </h2>
          </div>

          {/* Filter chips */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 lg:mb-12">
            {galleryCategories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gold text-white shadow-gold"
                      : "border border-cream-line bg-white text-navy hover:-translate-y-0.5 hover:border-gold/30 hover:text-gold hover:shadow-soft"
                  }`}
                >
                  {isActive && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  )}
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {visible.map((item, i) => (
              <Link
                key={item.src}
                href="/book-appointment"
                className="group hover-lift animate-fade-up relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card ring-1 ring-cream-line/60 hover:-translate-y-1 hover:shadow-lift"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="absolute left-3 top-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-gold shadow-soft backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-x-3 bottom-3">
                  <p className="text-[12.5px] font-semibold leading-tight text-white">
                    {item.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Your smile <span className="text-gradient-gold">could be next.</span>
          </>
        }
        description="Free smile-makeover consultation: digital scan, photo simulation, and a written plan — yours to take home. No commitment required."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
