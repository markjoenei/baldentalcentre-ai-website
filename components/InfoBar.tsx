import Link from "next/link";
import { BOOK_URL, PHONE_DISPLAY, PHONE_TEL } from "./data";
import { ArrowRightIcon, BellIcon, CalendarIcon, PhoneIcon } from "./icons";

const items = [
  { icon: BellIcon, label: "Dental Emergencies Welcome" },
  { icon: CalendarIcon, label: "Open 7 Days a Week" },
  { icon: PhoneIcon, label: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
];

export default function InfoBar() {
  return (
    <div className="relative w-full overflow-hidden bg-navy-gradient-animated">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gold/5 to-transparent" />
      <div className="pointer-events-none absolute -left-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto flex max-w-[1400px] flex-col lg:flex-row">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-3 px-6 py-4">
          {items.map(({ icon: Icon, label, href }, i) => {
            const Content = (
              <>
                <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:ring-gold group-hover:shadow-gold">
                  <Icon className="h-[15px] w-[15px] fill-white transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle" />
                </span>
                <span className="text-[14px] font-medium text-white transition-colors group-hover:text-gold-tint">
                  {label}
                </span>
              </>
            );
            return (
              <div key={label} className="flex items-center">
                {href ? (
                  <a href={href} className="group flex items-center gap-3 px-3 py-1.5">
                    {Content}
                  </a>
                ) : (
                  <div className="group flex items-center gap-3 px-3 py-1.5">{Content}</div>
                )}
                {i < items.length - 1 && (
                  <span className="hidden h-6 w-px bg-cream/15 lg:inline-block" />
                )}
              </div>
            );
          })}
        </div>
        <Link
          href={BOOK_URL}
          className="group relative flex shrink-0 items-center justify-center gap-2.5 overflow-hidden bg-gold px-10 py-5 text-[15px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-gold-deep"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          <span className="relative">Book Appointment</span>
          <ArrowRightIcon className="relative h-4 w-4 fill-white transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
