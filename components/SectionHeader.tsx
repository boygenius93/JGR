import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1]">{title}</h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-stone-600">{description}</p>
      ) : null}
    </div>
  );
}
