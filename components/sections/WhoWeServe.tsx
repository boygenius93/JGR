import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { IndustryCard } from "@/components/IndustryCard";
import { cn } from "@/lib/utils";

const STAGES = [
  { label: "Seed", sweetSpot: true },
  { label: "Series A", sweetSpot: true },
  { label: "Series B", sweetSpot: false },
  { label: "Series C+", sweetSpot: false },
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Who We Serve"
          title="Growing companies. Ambitious teams."
          description="We work with growing healthcare and SaaS companies across stages — from early startup teams to established organizations navigating periods of rapid hiring."
        />

        <div className="mt-10 rounded-lg border border-stone-200 bg-white px-6 py-5 sm:px-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              Early <span className="text-stone-300">→</span> Growth
            </span>
            <ul className="flex flex-wrap gap-2">
              {STAGES.map((stage) => (
                <li
                  key={stage.label}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm font-medium",
                    stage.sweetSpot
                      ? "border border-accent bg-accent-soft text-accent-dim"
                      : "border border-stone-200 text-stone-600"
                  )}
                >
                  {stage.label}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm text-stone-500">
            Seed–Series A is our sweet spot — but we support growing teams at
            every stage, including established companies with a temporary
            recruiting need.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <IndustryCard
            title="Healthcare & Healthtech"
            description="Companies building the technology and services that touch clinical care and health operations."
            examples={[
              "Digital health",
              "Care delivery",
              "Healthcare SaaS",
              "Healthcare AI",
              "Clinical technology",
              "Healthtech platforms",
            ]}
          />
          <IndustryCard
            title="SaaS"
            description="Software companies scaling product, go-to-market, and engineering teams at once."
            examples={[
              "B2B SaaS",
              "Vertical SaaS",
              "AI SaaS",
              "Enterprise software",
              "Workflow platforms",
              "Developer tools",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
