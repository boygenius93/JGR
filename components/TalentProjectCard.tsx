import { Button } from "@/components/Button";
import type { TalentProject } from "@/lib/services-data";

export function TalentProjectCard({ project }: { project: TalentProject }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-6">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {project.category}
      </span>
      <h3 className="mt-3 text-lg leading-snug text-ink">{project.name}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-stone-600">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.deliverables.slice(0, 4).map((item) => (
          <li
            key={item}
            className="rounded-full bg-stone-50 px-2.5 py-1 text-xs text-stone-600"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1" />

      <div className="border-t border-stone-100 pt-5">
        {project.duration ? (
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-stone-500">
            {project.duration}
          </p>
        ) : null}

        <Button
          href={project.ctaHref}
          variant="secondary"
          className="mt-5 w-full"
          trackId={`talent_project_${project.id}`}
        >
          {project.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
