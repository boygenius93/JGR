import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 text-lg font-semibold tracking-tight",
        dark ? "text-ivory" : "text-ink",
        className
      )}
      aria-label="Just Genius Recruitment Solutions home"
    >
      <span
        className="flex h-7 w-7 items-center justify-center rounded-sm bg-accent text-sm font-bold text-white"
        aria-hidden="true"
      >
        JG
      </span>
      <span>JUST GENIUS</span>
    </Link>
  );
}
