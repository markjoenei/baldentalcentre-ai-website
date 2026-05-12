import { ArrowRightIcon, MapPinIcon } from "./icons";
import { ADDRESS_LINE, DIRECTIONS_URL, MAP_EMBED_URL } from "./data";

export default function MapSection() {
  return (
    <section className="relative w-full bg-navy">
      <div className="relative w-full">
        <iframe
          src={MAP_EMBED_URL}
          title="Bal Dental Centre location map"
          className="block h-[320px] w-full border-0 grayscale-[0.3] md:h-[420px] lg:h-[480px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Decorative pulse pin overlay */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="relative h-12 w-12">
            <span className="absolute inset-0 rounded-full bg-gold/30 animate-pulse-ring" />
            <span className="absolute inset-2 rounded-full bg-gold/50 animate-pulse-ring" style={{ animationDelay: "0.8s" }} />
            <span className="absolute inset-4 flex items-center justify-center rounded-full bg-gold shadow-gold-strong animate-bounce-soft">
              <MapPinIcon className="h-3.5 w-3.5 fill-white" />
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute left-4 top-4 max-w-[90%] md:left-10 md:top-10">
          <div className="pointer-events-auto animate-fade-up inline-flex flex-col gap-3 rounded-2xl bg-white/95 p-5 shadow-lift backdrop-blur-md md:p-6">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                <span className="absolute inset-0 rounded-full bg-gold/20 animate-pulse-ring" />
                <MapPinIcon className="relative h-4 w-4 fill-gold" />
              </span>
              <div>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold">
                  Visit Our Office
                </p>
                <p className="text-[14px] font-semibold text-navy">Bal Dental Centre</p>
              </div>
            </div>
            <p className="max-w-[280px] text-[12.5px] leading-[1.6] text-ink-muted">
              {ADDRESS_LINE}
            </p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-5 py-2.5 text-[12.5px] font-semibold text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative">Get Directions</span>
              <ArrowRightIcon className="relative h-3 w-3 fill-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
