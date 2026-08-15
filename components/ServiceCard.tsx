import { Button } from "@/components/Button";

export function ServiceCard({
  index,
  title,
  headline,
  description,
  items,
  ctaLabel,
  ctaHref,
}: {
  index: string;
  title: string;
  headline: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-8 transition-shadow duration-200 hover:shadow-raised">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold tracking-[0.14em] text-accent">{index}</span>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
          {title}
        </span>
      </div>
      <h3 className="mt-5 text-xl leading-snug text-ink">{headline}</h3>
      <p className="mt-3 text-stone-600">{description}</p>
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
