import type { BenefitIcon } from "./servicesData";

type Props = { kind: BenefitIcon; className?: string };

export default function BenefitIconRenderer({ kind, className = "h-6 w-6 fill-current" }: Props) {
  switch (kind) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      );
    case "tooth":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 2c-4 0-6 2-6 4 0 1 0 4-1 6-1 2-1 4-1 5 0 2 1 4 3 4 2 0 2-2 3-4s2-2 2-2 1 0 2 2 1 4 3 4c2 0 3-2 3-4 0-1 0-3-1-5-1-2-1-5-1-6 0-2-2-4-6-4z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 0L13.5 8.5L22 12L13.5 15.5L12 24L10.5 15.5L2 12L10.5 8.5L12 0Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v16c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13z" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case "smile":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-4-9h2V9H8v2zm6 0h2V9h-2v2zm-2 5.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
      );
    case "lightning":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M7 2v11h3v9l7-12h-4l4-8H7z" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M19 3H5L2 9l10 13L22 9l-3-6zM5.38 5h13.24l1.59 3.18L12 18.91 3.79 8.18 5.38 5zM7.5 9L12 17l4.5-8h-9z" />
        </svg>
      );
    case "wallet":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0022 15V9a2 2 0 00-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
          <circle cx="16" cy="12" r="1.5" />
        </svg>
      );
    case "stethoscope":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M19 8c-1.66 0-3 1.34-3 3 0 1.31.84 2.41 2 2.83V15c0 1.66-1.34 3-3 3s-3-1.34-3-3v-.17a5.001 5.001 0 003.99-4.83V3h-4v2h3v5c0 1.66-1.34 3-3 3s-3-1.34-3-3V5h3V3H5v7c0 2.42 1.72 4.44 4 4.93V15c0 2.76 2.24 5 5 5s5-2.24 5-5v-1.17c1.16-.42 2-1.52 2-2.83 0-1.66-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      );
    default:
      return null;
  }
}
