import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

export function ServiceCard({
  index,
  title,
  headline,
  description,
  emphasis,
  items,
  ctaLabel,
  ctaHref,
  badge,
  featured = false,
}: {
  index: string;
  title: string;
  headline: string;
  description: string;
  emphasis?: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-lg border bg-white p-8 transition-shadow duration-200 hover:shadow-raised",
        featured ? "border-2 border-accent" : "border-stone-200"
      )}
    >
      {badge ? (
        <span className="absolute -top-3.5 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      ) : null}
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold tracking-[0.14em] text-accent">{index}</span>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
          {title}
        </span>
      </div>
      <h3 className="mt-5 text-xl leading-snug text-ink">{headline}</h3>
      <p className="mt-3 text-stone-600">{description}</p>
      {emphasis ? (
        <p className="mt-3 text-sm font-medium text-accent-dim">{emphasis}</p>
      ) : null}
      <ul className="mt-6 flex-1 space-y-2.5 border-t border-stone-100 pt-6">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <Button href={ctaHref} variant="secondary" className="mt-8 w-full">
        {ctaLabel}
      </Button>
    </div>
  );
}
