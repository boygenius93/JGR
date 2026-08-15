export function ProcessStep({
  index,
  title,
  description,
  isLast = false,
}: {
  index: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-ivory">
          {index}
        </span>
        {!isLast ? <span className="mt-2 w-px flex-1 bg-stone-200" aria-hidden="true" /> : null}
      </div>
      <div className="pb-10">
        <h3 className="text-lg leading-snug text-ink">{title}</h3>
        <p className="mt-2 text-stone-600">{description}</p>
      </div>
    </div>
  );
}
