import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { DifferentiatorCard } from "@/components/DifferentiatorCard";

const DIFFERENTIATORS = [
  {
    index: "01",
    title: "Startup-Native",
    description:
      "We understand changing priorities, lean teams, and imperfect processes.",
  },
  {
    index: "02",
    title: "Fractional by Design",
    description:
      "Get experienced recruiting capacity without adding another full-time hire right away.",
  },
  {
    index: "03",
    title: "Quality Over Volume",
    description:
      "We’d rather hand you five people worth a phone call than thirty resumes that technically check the boxes.",
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

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <DifferentiatorCard key={item.index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
