import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingCard } from "@/components/PricingCard";
import { FRACTIONAL_PLANS } from "@/lib/services-data";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Fractional Pricing"
          title="Recruiting support that scales with you."
          description="Starting prices below. Scope varies by company, so not every engagement looks identical."
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {FRACTIONAL_PLANS.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mt-8 max-w-2xl space-y-2 text-sm text-stone-500">
          <p>
            All pricing is a starting point. Final scope is based on hiring volume, role
            complexity, seniority, and the level of recruiting support required.
          </p>
          <p>Most fractional engagements begin with a 90-day commitment.</p>
        </div>
      </Container>
    </section>
  );
}
