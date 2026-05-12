import { ADDRESS_LINE, PHONE_DISPLAY, PHONE_TEL } from "./data";
import { FacebookIcon, InstagramIcon, MapPinIcon, PhoneIcon, YouTubeIcon } from "./icons";

export default function TopBar() {
  return (
    <div className="relative w-full overflow-hidden bg-navy-gradient text-cream">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gold/[0.08] to-transparent" />
      <div className="relative mx-auto flex h-auto min-h-[44px] max-w-[1280px] flex-wrap items-center justify-between gap-y-2 px-4 py-2 md:h-[44px] md:flex-nowrap md:py-0">
        <div className="flex items-center gap-2.5 text-[12px] md:text-[13px]">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
            <MapPinIcon className="h-[11px] w-[11px] fill-gold" />
          </span>
          <span className="hidden text-cream/90 sm:inline">{ADDRESS_LINE}</span>
          <span className="text-cream/90 sm:hidden">4 Greystone Walk Dr #4, Scarborough</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 text-[13px] font-semibold text-gold transition-colors hover:text-gold-tint md:flex"
          >
            <PhoneIcon className="h-[12px] w-[12px] fill-gold" />
            {PHONE_DISPLAY}
          </a>
          <span className="hidden h-4 w-px bg-cream/15 md:inline-block" />
          <div className="flex items-center gap-1.5">
            <a
              href="https://www.facebook.com/profile.php?id=61554432576015"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1877f2] hover:bg-[#1877f2]"
            >
              <FacebookIcon className="h-[12px] w-[12px] fill-cream/60 transition-colors group-hover:fill-white" />
            </a>
            <a
              href="https://www.instagram.com/baldentalcentreca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e1306c] hover:bg-[#e1306c]"
            >
              <InstagramIcon className="h-[12px] w-[12px] fill-cream/60 transition-colors group-hover:fill-white" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSMxHRacxLftVjytujOSfmw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff0000] hover:bg-[#ff0000]"
            >
              <YouTubeIcon className="h-[12px] w-[12px] fill-cream/60 transition-colors group-hover:fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
