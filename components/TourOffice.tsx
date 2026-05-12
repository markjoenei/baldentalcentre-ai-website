import Image from "next/image";
import { ArrowRightIcon, MapPinIcon } from "./icons";
import { DIRECTIONS_URL } from "./data";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0L13.5 8.5L22 12L13.5 15.5L12 24L10.5 15.5L2 12L10.5 8.5L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function TourOffice() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-gradient-animated">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-15" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-blob rounded-full bg-gold/[0.07] blur-3xl" style={{ animationDelay: "3s" }} />

      <Sparkle className="pointer-events-none absolute left-[10%] top-[20%] h-4 w-4 animate-sparkle text-gold/70" />
      <Sparkle className="pointer-events-none absolute left-[42%] bottom-[15%] h-3 w-3 animate-sparkle text-gold/60" style={{ animationDelay: "1.5s" }} />
      <Sparkle className="pointer-events-none absolute right-[8%] top-[15%] h-3.5 w-3.5 animate-sparkle text-gold/60" style={{ animationDelay: "0.8s" }} />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-10 px-4 py-16 md:flex-row md:gap-14 md:py-24">
        <div className="flex-1">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-tint">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Visit Our Office
          </span>
          <h2 className="animate-fade-up mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-cream sm:text-[40px] lg:text-[48px]" style={{ animationDelay: "100ms" }}>
            Tour Our Scarborough
            <br className="hidden sm:inline" />
            {" "}<span className="text-gradient-gold">Dental Office</span>
          </h2>
          <div className="animate-fade-up mt-6 flex items-start gap-3" style={{ animationDelay: "200ms" }}>
            <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 animate-pin-drop">
              <MapPinIcon className="h-[12px] w-[12px] fill-gold" />
            </span>
            <p className="text-[15px] leading-[1.65] text-cream/85">
              4 Greystone Walk Dr #4, Scarborough,
              <br className="hidden sm:inline" />
              {" "}ON M1K 5J2, Canada
            </p>
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-fade-up mt-7 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-[13.5px] font-semibold text-gold-tint backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-white hover:shadow-gold"
            style={{ animationDelay: "300ms" }}
          >
            Get Directions
            <ArrowRightIcon className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative w-full flex-shrink-0 animate-fade-up md:w-[480px]" style={{ animationDelay: "200ms" }}>
          <div className="pointer-events-none absolute -inset-1 animate-gradient rounded-3xl bg-gradient-to-br from-gold/40 via-gold-tint/30 to-gold/40 opacity-70 blur-md" />
          <div className="pointer-events-none absolute -right-6 -top-6 h-14 w-14 animate-spin-slow rounded-full border-2 border-dashed border-gold/30" />
          <div className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src="/images/office-tour-1.png"
              alt="Bal Dental Centre treatment room"
              width={560}
              height={340}
              className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-[300px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-tint">
                Modern Facility
              </p>
              <p className="text-[14px] font-semibold text-white">
                State-of-the-art treatment rooms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
