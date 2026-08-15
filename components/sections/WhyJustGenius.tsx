import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { DifferentiatorCard } from "@/components/DifferentiatorCard";

const DIFFERENTIATORS = [
  {
    index: "01",
    title: "In-House Experience",
    description:
      "We’ve worked inside growing companies, not just around them.",
  },
  {
    index: "02",
    title: "Startup-Native",
    description:
      "We understand changing priorities, lean teams, and imperfect processes.",
  },
  {
    index: "03",
    title: "Healthcare + SaaS",
    description:
      "We understand the different recruiting realities of both industries.",
  },
  {
    index: "04",
    title: "Fractional by Design",
    description:
      "Get experienced recruiting capacity without immediately adding full-time headcount.",
  },
  {
    index: "05",
    title: "Quality Over Volume",
    description:
      "Relevant candidates and thoughtful recruiting — not resume volume.",
  },
];

export function WhyJustGenius() {
  return (
    <section id="why-just-genius" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Just Genius"
          title="Recruiting expertise without the agency baggage."
        />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <DifferentiatorCard key={item.index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
