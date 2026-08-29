import type { UnAgencyBelief } from "@/lib/positioning-data";
import { cn } from "@/lib/utils";

export function BeliefGrid({
  beliefs,
  dark = false,
  className,
}: {
  beliefs: UnAgencyBelief[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2", className)}>
      {beliefs.map((belief) => (
        <div
          key={belief.title}
          className={cn("border-l-2 pl-5", dark ? "border-accent/60" : "border-accent")}
        >
          <h3 className={cn("text-base font-semibold", dark ? "text-ivory" : "text-ink")}>
            {belief.title}
          </h3>
          <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-stone-400" : "text-stone-600")}>
            {belief.description}
          </p>
        </div>
      ))}
    </div>
  );
}
