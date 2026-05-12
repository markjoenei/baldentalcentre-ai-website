import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "../icons";
import { BOOK_URL, PHONE_DISPLAY, PHONE_TEL } from "../data";
import Sparkle from "./Sparkle";

type Props = {
  title: React.ReactNode;
  description: string;
};

export default function CTABand({ title, description }: Props) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-navy-gradient-animated shadow-lift">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-15" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-blob rounded-full bg-gold/[0.20] blur-3xl" />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 animate-blob rounded-full bg-gold/[0.12] blur-3xl"
            style={{ animationDelay: "3s" }}
          />
          <Sparkle className="pointer-events-none absolute right-[12%] top-[18%] h-4 w-4 animate-sparkle text-gold/70" />
          <Sparkle
            className="pointer-events-none absolute left-[10%] bottom-[16%] h-3 w-3 animate-sparkle text-gold/60"
            style={{ animationDelay: "1.3s" }}
          />

          <div className="relative flex flex-col items-center gap-8 px-7 py-12 text-center md:px-12 lg:px-16 lg:py-16">
            <h2 className="max-w-[760px] text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-cream sm:text-[34px] lg:text-[42px]">
              {title}
            </h2>
            <p className="max-w-[620px] text-[14.5px] leading-[1.75] text-cream/80 lg:text-[15px]">
              {description}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href={BOOK_URL}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-4 text-[14px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <span className="relative">Book Appointment</span>
                <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                  <ArrowRightIcon className="h-3.5 w-3.5 fill-white" />
                </span>
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="group inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-7 py-4 text-[14px] font-semibold text-gold-tint backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-white hover:shadow-gold"
              >
                <PhoneIcon className="h-3.5 w-3.5 fill-current" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
