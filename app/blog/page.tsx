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
import { blogPosts } from "../../components/shared/aboutData";
import { ArrowRightIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Blog & Dental Insights — Bal Dental Centre, Scarborough",
  description:
    "Honest, plain-English answers to your biggest dental questions — from same-day emergencies to whitening myths to Invisalign vs braces.",
};

const categories = [
  "All",
  "Preventive Care",
  "Orthodontics",
  "Implants",
  "Cosmetic",
  "Pediatric",
  "Patient Comfort",
];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p !== featured);

  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="The Bal Dental Blog"
        title={
          <>
            Honest Answers To Your{" "}
            <span className="text-gradient-gold">Biggest Dental Questions</span>
          </>
        }
        description="No jargon, no fluff — just plain-English insights from our clinical team to help you make smarter decisions about your smile."
        image="/images-about/blog-hero.jpg"
        imageAlt="Reading dental wellness content"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        cta={{ label: "Book Appointment", href: "/book-appointment" }}
        stats={[
          { value: "50+", label: "Articles Published" },
          { value: "12K", label: "Monthly Readers" },
          { value: "Weekly", label: "New Content" },
        ]}
      />
      <InfoBar />

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.05] blur-3xl animate-glow-pulse" />
        <Sparkle className="pointer-events-none absolute left-[6%] top-[15%] h-3 w-3 animate-sparkle text-gold/50" />
        <Sparkle
          className="pointer-events-none absolute right-[8%] bottom-[20%] h-4 w-4 animate-sparkle text-gold/50"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 lg:py-24">
          {/* Category chips */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 lg:mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                  i === 0
                    ? "bg-gold text-white shadow-gold"
                    : "border border-cream-line bg-white text-navy hover:-translate-y-0.5 hover:border-gold/30 hover:text-gold hover:shadow-soft"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <a
            href={`#${featured.slug}`}
            className="group hover-lift mb-14 grid grid-cols-1 overflow-hidden rounded-3xl border border-cream-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-gold shadow-soft backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                Featured Post
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.12em] text-gold">
                <span>{featured.category}</span>
                <span className="inline-block h-1 w-1 rounded-full bg-gold/40" />
                <span className="text-ink-muted">{featured.readTime}</span>
              </div>
              <h2 className="mt-4 text-[24px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[28px] lg:text-[32px]">
                {featured.title}
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.75] text-ink-muted lg:text-[15px]">
                {featured.excerpt}
              </p>
              <div className="mt-7 flex items-center justify-between gap-4 border-t border-cream-line pt-5">
                <span className="text-[12.5px] text-ink-muted">{featured.date}</span>
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                  Read Article
                  <ArrowRightIcon className="h-3.5 w-3.5 fill-current" />
                </span>
              </div>
            </div>
          </a>

          <div className="mb-10 flex items-end justify-between">
            <h3 className="text-[20px] font-bold tracking-[-0.01em] text-navy sm:text-[24px]">
              More from <span className="text-gradient-gold">Our Blog</span>
            </h3>
            <span className="text-[12.5px] text-ink-muted">
              {rest.length} more articles
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {rest.map((post, i) => (
              <a
                key={post.slug}
                href={`#${post.slug}`}
                className="group hover-lift animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-cream-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gold backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[11.5px] font-medium text-ink-muted">
                    <span>{post.date}</span>
                    <span className="inline-block h-1 w-1 rounded-full bg-gold/40" />
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="mt-3 flex-1 text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-navy">
                    {post.title}
                  </h4>
                  <p className="mt-3 text-[13px] leading-[1.65] text-ink-muted">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                    Read more
                    <ArrowRightIcon className="h-3 w-3 fill-current" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Got a question we{" "}
            <span className="text-gradient-gold">haven't covered?</span>
          </>
        }
        description="Email us your dental question and we may turn it into the next post — anonymously, of course. Or skip the blog and just book a consult."
      />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
