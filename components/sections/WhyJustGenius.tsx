import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { DifferentiatorCard } from "@/components/DifferentiatorCard";

const DIFFERENTIATORS = [
  {
    index: "01",
    title: "In-House Experience",
    description:
      "We understand what happens behind the job description because we’ve worked inside growing companies.",
  },
  {
    index: "02",
    title: "Healthcare + SaaS Experience",
    description:
      "We understand the different hiring realities of healthcare, healthtech, and SaaS organizations.",
  },
  {
    index: "03",
    title: "Startup-Native",
    description:
      "We know startup priorities change quickly. Our recruiting support is designed to move with you.",
  },
  {
    index: "04",
    title: "Fractional by Design",
    description:
      "Get experienced recruiting capacity without immediately adding another full-time employee.",
  },
  {
    index: "05",
    title: "Quality Over Volume",
    description:
      "We’d rather send five highly relevant candidates than thirty resumes that technically match a job description.",
  },
];

export function WhyJustGenius() {
  return (
    <section id="why-just-genius" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Just Genius"
          title="Recruiters who have sat on your side of the table."
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
