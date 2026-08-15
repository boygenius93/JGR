import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_INITIALS, SITE_NAME } from "@/lib/constants";

/**
 * The "Ascent" mark: three nodes climbing left to right, tracing the same
 * founder-led → Just Genius → internal-team shape used in the Positioning
 * section. Reused as-is for the nav/footer lockup, the browser favicon, the
 * OG image badge, and the apple touch icon so one mark shows up everywhere.
 */
export function AscentMark({ className, dark = false }: { className?: string; dark?: boolean }) {
  const dim = dark ? "#9C978A" : "#79766D";
  const mid = dark ? "#DCD9D0" : "#454339";
  const accent = dark ? "#7A6BFF" : "#4536D9";

  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <line x1="14" y1="46" x2="32" y2="28" stroke={dim} strokeWidth="6" strokeLinecap="round" />
      <line x1="32" y1="28" x2="50" y2="14" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      <circle cx="14" cy="46" r="6" fill={dim} />
      <circle cx="32" cy="28" r="7.5" fill={mid} />
      <circle cx="50" cy="14" r="9.5" fill={accent} />
    </svg>
  );
}

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight",
        dark ? "text-ivory" : "text-ink",
        className
      )}
      aria-label={`${SITE_NAME} (${SITE_INITIALS}) home`}
    >
      <AscentMark className="h-7 w-7 shrink-0" dark={dark} />
      <span>JUST GENIUS</span>
    </Link>
  );
}
