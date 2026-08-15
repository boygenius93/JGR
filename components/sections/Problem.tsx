import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

const PAIN_POINTS = [
  "Too many open roles",
  "Not enough sourcing capacity",
  "Difficult-to-find talent",
  "Hiring managers overwhelmed",
  "Inconsistent candidate pipelines",
  "No need for a full-time recruiting team yet",
];

export function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="The Problem"
          title="Growing shouldn’t make hiring harder."
          description="You’ve got more roles. More hiring managers. More pressure. And recruiting is becoming another job for people who already have one."
        />

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-md border border-stone-200 bg-white px-5 py-4"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-stone-700">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 max-w-2xl border-l-2 border-accent pl-6">
          <p className="text-xl leading-relaxed text-ink">
            The problem isn&rsquo;t always that you need a recruiting team.
          </p>
          <p className="mt-2 text-xl leading-relaxed text-ink">
            Sometimes you just need experienced recruiting capacity.
          </p>
          <Button href="#services" variant="secondary" className="mt-8" trackId="problem_see_how_we_help">
            See How We Help
          </Button>
        </div>
      </Container>
    </section>
  );
}
