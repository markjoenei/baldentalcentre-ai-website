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

export const metadata: Metadata = {
  title: "About Us — Bal Dental Centre, Scarborough",
  description:
    "Get to know Bal Dental Centre — our team, our office, our patients, and our award-winning commitment to dentistry in Scarborough.",
};

const aboutLinks = [
  {
    title: "Meet Our Team",
    description: "Six clinicians and a coordinator who treat every patient like family.",
    image: "/images-about/about-1.jpg",
    href: "/about/meet-our-team",
  },
  {
    title: "Why Us",
    description: "Four pillars of premium care that set us apart from the rest.",
    image: "/images-about/about-2.jpg",
    href: "/about/why-us",
  },
  {
    title: "Tour Our Office",
    description: "Step inside a dental office designed by patients, for patients.",
    image: "/images-about/about-3.png",
    href: "/about/tour-our-office",
  },
  {
    title: "How To Select The Best Dentist",
    description: "The six-point checklist we wish every patient had before choosing.",
    image: "/images-about/select-2.jpg",
    href: "/about/how-to-select-the-best-dentist",
  },
  {
    title: "Smile Gallery",
    description: "Real patients, real transformations. Filter by treatment type.",
    image: "/images-about/select-3.jpg",
    href: "/about/smile-gallery",
  },
  {
    title: "Blog",
    description: "Plain-English insights from our clinical team to your inbox.",
    image: "/images/popup-promo.jpg",
    href: "/blog",
  },
  {
    title: "NIHB (First Nations)",
    description: "Direct billing for status-card holders. Zero paperwork, zero out-of-pocket.",
    image: "/images-about/nihb-hero.jpg",
    href: "/about/nihb",
  },
];

export default function AboutHubPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="About Bal Dental Centre"
        title={
          <>
            More Than A Dentist —{" "}
            <span className="text-gradient-gold">A Neighbourhood Tradition</span>
          </>
        }
        description="Twenty-five years of award-winning dentistry, three generations of loyal patients, and one stubborn belief: that great dental care should feel calm, clear, and human."
        image="/images-about/about-hero.png"
        imageAlt="Welcoming face of Bal Dental Centre"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        cta={{ label: "Book A Welcome Visit", href: "/book-appointment" }}
        stats={[
          { value: "25+", label: "Years In Practice" },
          { value: "10K+", label: "Happy Patients" },
          { value: "5×", label: "Award Winner" },
        ]}
      />
      <InfoBar />

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.06] blur-3xl animate-glow-pulse" />
        <Sparkle className="pointer-events-none absolute left-[5%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />
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
              Explore About Us
            </span>
            <h2 className="animate-fade-up mt-4 text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[40px]">
              Pick A Place To <span className="text-gradient-gold">Start Exploring</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {aboutLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="group hover-lift animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-cream-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={link.image}
                    alt={link.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                    <h3 className="text-[18px] font-bold leading-tight text-white lg:text-[20px]">
                      {link.title}
                    </h3>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:rotate-[-12deg] group-hover:bg-gold group-hover:ring-gold group-hover:shadow-gold">
                      <ArrowRightIcon className="h-4 w-4 fill-white" />
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-5">
                  <p className="text-[13.5px] leading-[1.65] text-ink-muted">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Questions? <span className="text-gradient-gold">We're happy to chat.</span>
          </>
        }
        description="Call, message, or just walk in. Our team answers honestly, never pushes treatment, and is always glad to give a tour with no appointment."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
