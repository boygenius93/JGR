import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingCard } from "@/components/PricingCard";

const PLANS = [
  {
    name: "Starter",
    price: "$3,500",
    audience: "For companies with 1–2 priority searches.",
    features: [
      "Dedicated recruiting support",
      "Sourcing",
      "Outreach",
      "Candidate screening",
      "Candidate presentation",
      "Weekly pipeline reporting",
    ],
    minimum: "90-day minimum.",
    ctaLabel: "Let’s Talk",
    ctaHref: "#contact",
  },
  {
    name: "Growth",
    price: "$5,000",
    audience: "For companies actively scaling.",
    badge: "Most Popular",
    featured: true,
    features: [
      "Everything in Starter",
      "Up to 3 concurrent searches",
      "Hiring-manager partnership",
      "Interview support",
      "Offer support",
      "Recruiting strategy",
      "Weekly hiring sync",
    ],
    minimum: "90-day minimum.",
    ctaLabel: "Let’s Talk",
    ctaHref: "#contact",
  },
  {
    name: "Embedded",
    price: "$7,000+",
    audience: "For companies that need deeper recruiting support.",
    features: [
      "Embedded recruiting support",
      "Multiple concurrent searches",
      "ATS ownership",
      "Hiring strategy",
      "Recruiting operations",
      "Executive partnership",
      "Custom scope",
    ],
    ctaLabel: "Let’s Talk",
    ctaHref: "#contact",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Recruiting support that scales with you."
          description="Starting prices below. Scope varies by company, so not every engagement looks identical."
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-stone-500">
          Pricing is a starting point and may vary based on scope, role complexity,
          seniority, and hiring volume.
        </p>
      </Container>
    </section>
  );
}
