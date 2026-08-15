import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { IndustryCard } from "@/components/IndustryCard";

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Who We Serve"
          title="Built for companies in the messy middle."
          description="We specialize in early-stage companies where hiring demand is accelerating faster than internal recruiting capacity."
        />

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-2.5">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">
            Primary Stage
          </span>
          <span className="text-sm font-semibold text-ink">Seed → Series A</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <IndustryCard
            title="Healthcare & Healthtech"
            description="Companies building the technology and services that touch clinical care and health operations."
            examples={[
              "Digital health",
              "Healthcare SaaS",
              "Care delivery",
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
              "Developer tools",
              "Workflow & productivity platforms",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
