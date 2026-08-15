import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

export function PricingCard({
  name,
  positioning,
  price,
  priceSuffix = "/ month",
  bestFor,
  capacity,
  features,
  engagement,
  featured = false,
  badge,
  ctaLabel,
  ctaHref,
  trackId,
}: {
  name: string;
  positioning?: string;
  price: string;
  priceSuffix?: string;
  bestFor: string;
  capacity?: string;
  features: string[];
  engagement?: string;
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
  trackId?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-lg p-8",
        featured
          ? "border-2 border-ink bg-ink text-ivory shadow-raised"
          : "border border-stone-200 bg-white text-ink"
      )}
    >
      {badge ? (
        <span className="absolute -top-3.5 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      ) : null}
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">{name}</h3>
      {positioning ? (
        <p className={cn("mt-2 text-sm", featured ? "text-stone-300" : "text-stone-600")}>
          {positioning}
        </p>
      ) : null}

      <p className={cn("mt-5 text-xs font-medium uppercase tracking-[0.1em]", featured ? "text-stone-400" : "text-stone-500")}>
        Starting at
      </p>
      <div className="mt-1.5 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tracking-tight">{price}</span>
        <span className={cn("text-sm", featured ? "text-stone-300" : "text-stone-500")}>
          {priceSuffix}
        </span>
      </div>

      <p className={cn("mt-4 text-sm leading-relaxed", featured ? "text-stone-300" : "text-stone-600")}>
        {bestFor}
      </p>

      {capacity ? (
        <p
          className={cn(
            "mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
            featured ? "bg-white/10 text-stone-200" : "bg-stone-50 text-stone-600"
          )}
        >
          {capacity}
        </p>
      ) : null}

      <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6" style={featured ? undefined : { borderColor: "#EDEBE4" }}>
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span
              className={cn(
                "mt-2 h-1 w-1 shrink-0 rounded-full",
                featured ? "bg-accent-soft" : "bg-accent"
              )}
              aria-hidden="true"
            />
            <span className={featured ? "text-stone-200" : "text-stone-700"}>{feature}</span>
          </li>
        ))}
      </ul>

      {engagement ? (
        <p className={cn("mt-6 text-xs", featured ? "text-stone-400" : "text-stone-500")}>
          {engagement}
        </p>
      ) : null}

      <Button
        href={ctaHref}
        variant={featured ? "inverse" : "secondary"}
        className="mt-6 w-full"
        trackId={trackId}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
