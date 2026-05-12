const TEXT =
  "OPEN 7 DAYS A WEEK — ACCEPTING APPOINTMENTS ON SATURDAY, SUNDAY AND LATE EVENINGS";

function Segment() {
  return (
    <span className="flex items-center gap-6 px-6 text-[13.5px] font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-[14.5px]">
      {TEXT}
      <span className="inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-navy py-4">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-15" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent" />
      <div className="marquee-track relative">
        {Array.from({ length: 8 }).map((_, i) => (
          <Segment key={i} />
        ))}
      </div>
    </div>
  );
}
