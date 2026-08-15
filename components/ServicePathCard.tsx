import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

export function ServicePathCard({
  category,
  headline,
  description,
  supporting,
  indicators,
  ctaLabel,
  ctaHref,
  trackId,
  featured = false,
}: {
  category: string;
  headline: string;
  description: string;
  supporting: string;
  indicators: string[];
  ctaLabel: string;
  ctaHref: string;
  trackId?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-lg border bg-white p-8 sm:p-10",
        featured ? "border-2 border-accent" : "border-stone-200"
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {category}
      </span>
      <h3 className="mt-4 text-2xl leading-snug text-ink sm:text-[1.75rem]">{headline}</h3>
      <p className="mt-4 text-stone-600">{description}</p>
      <p className="mt-4 text-sm font-medium text-stone-500">{supporting}</p>

      <ul className="mt-7 flex flex-wrap gap-2">
        {indicators.map((indicator) => (
          <li
            key={indicator}
            className="rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-stone-600"
          >
            {indicator}
          </li>
        ))}
      </ul>

      <Button
        href={ctaHref}
        variant={featured ? "primary" : "secondary"}
        className="mt-8 w-full sm:w-auto"
        trackId={trackId}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
