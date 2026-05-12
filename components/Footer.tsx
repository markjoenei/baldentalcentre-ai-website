import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS_MULTI,
  DIRECTIONS_URL,
  EMAIL,
  PHONE_2_DISPLAY,
  PHONE_2_TEL,
  REVIEW_URL,
  languages,
  officeHours,
} from "./data";
import { ArrowRightIcon, PhoneIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-navy-gradient-animated text-cream">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-15" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.07] blur-3xl" style={{ animationDelay: "3s" }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Contact Us
            </h3>
            <div className="mt-3 h-px w-10 bg-gold/40" />
            <a
              href={`tel:${PHONE_2_TEL}`}
              className="group mt-5 flex items-center gap-3 text-[18px] font-bold text-white transition-colors hover:text-gold"
            >
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold shadow-gold transition-transform duration-300 group-hover:scale-105">
                <PhoneIcon className="h-4 w-4 fill-white" />
              </span>
              {PHONE_2_DISPLAY}
            </a>

            <h4 className="mt-8 text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Email Us
            </h4>
            <div className="mt-3 h-px w-10 bg-gold/40" />
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 block break-all text-[13.5px] text-cream-muted transition-colors hover:text-gold"
            >
              {EMAIL}
            </a>

            <div className="mt-8 flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61554432576015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-white/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold"
              >
                <svg viewBox="0 0 320 512" className="h-4 w-4 fill-gold transition-colors group-hover:fill-white" aria-hidden="true">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/baldentalcentreca/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-white/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold"
              >
                <svg viewBox="0 0 448 512" className="h-4 w-4 fill-gold transition-colors group-hover:fill-white" aria-hidden="true">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Office Hours
            </h3>
            <div className="mt-3 h-px w-10 bg-gold/40" />
            <div className="mt-5 space-y-2.5 text-[13px]">
              {officeHours.map(([day, hours]) => (
                <div
                  key={day}
                  className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-2 last:border-0"
                >
                  <span className="font-semibold text-white">{day}</span>
                  <span className="text-cream-muted">{hours}</span>
                </div>
              ))}
            </div>

            <h4 className="mt-8 text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Languages We Speak
            </h4>
            <div className="mt-3 h-px w-10 bg-gold/40" />
            <div className="mt-4 flex flex-wrap gap-1.5">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 text-[11px] font-medium text-gold-tint"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Our Location
            </h3>
            <div className="mt-3 h-px w-10 bg-gold/40" />
            <p className="mt-5 text-[13.5px] leading-[1.8] text-cream-muted">
              {ADDRESS_MULTI.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-gold transition-colors hover:text-gold-tint"
            >
              Get Directions
              <ArrowRightIcon className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <h4 className="mt-8 text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Open 7 Days a Week
            </h4>
            <div className="mt-3 h-px w-10 bg-gold/40" />
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-[12px] font-semibold text-green-300">Accepting New Patients</span>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              How Was Your Experience?
            </h3>
            <div className="mt-3 h-px w-10 bg-gold/40" />
            <div className="mt-5 flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  className="animate-fade-up h-4 w-4 fill-gold transition-transform duration-300 hover:scale-125"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.368-2.447a1 1 0 00-1.175 0l-3.369 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.957z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-[13.5px] leading-[1.7] text-cream-muted">
              We&apos;d love to hear your feedback. Leave us a review and help others find quality dental care.
            </p>
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-5 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-6 py-3 text-[13px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative">Write a Review</span>
              <ArrowRightIcon className="relative h-3.5 w-3.5 fill-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full border-t border-white/[0.06] bg-cream">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-main.png"
              alt="Bal Dental Centre"
              width={80}
              height={48}
              className="h-auto w-[64px]"
            />
          </Link>
          <p className="text-center text-[12px] text-navy/80">
            © {new Date().getFullYear()} Bal Dental Centre |{" "}
            <a href="#" className="font-medium transition-colors hover:text-gold">Sitemap</a> |
            All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-navy/60">Website by</span>
            <Image
              src="/images/pracpros-logo.png"
              alt="PracPros"
              width={80}
              height={24}
              className="h-auto w-[60px] object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
