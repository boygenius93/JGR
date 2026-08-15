export function DifferentiatorCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-t border-stone-200 pt-6">
      <span className="text-xs font-semibold tracking-[0.14em] text-accent">{index}</span>
      <h3 className="mt-3 text-lg leading-snug text-ink">{title}</h3>
      <p className="mt-2.5 text-stone-600">{description}</p>
    </div>
  );
}
