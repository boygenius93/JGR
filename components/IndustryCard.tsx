export function IndustryCard({
  title,
  description,
  examples,
}: {
  title: string;
  description: string;
  examples: string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-8 sm:p-10">
      <h3 className="text-2xl leading-snug text-ink">{title}</h3>
      <p className="mt-3 text-stone-600">{description}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {examples.map((example) => (
          <span
            key={example}
            className="rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-sm text-stone-700"
          >
            {example}
          </span>
        ))}
      </div>
    </div>
  );
}
