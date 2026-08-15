import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

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
          title="You’re growing. Hiring shouldn’t slow you down."
          description="You’ve raised the capital. You’re expanding. The hiring plan is getting bigger. Suddenly recruiting becomes another job for the founder, hiring manager, or operations team."
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
            You don&rsquo;t necessarily need a recruiting department.
          </p>
          <p className="mt-2 text-xl leading-relaxed text-ink">
            You may just need an experienced recruiter who can plug in and get to
            work.
          </p>
        </div>
      </Container>
    </section>
  );
}
