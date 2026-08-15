import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProcessStep } from "@/components/ProcessStep";

const STEPS = [
  {
    index: "01",
    title: "Understand",
    description: "We learn your business, hiring goals, and recruiting bottlenecks.",
  },
  {
    index: "02",
    title: "Calibrate",
    description:
      "We align on the role, candidate profile, compensation, and hiring process.",
  },
  {
    index: "03",
    title: "Search",
    description: "We identify and engage relevant candidates.",
  },
  {
    index: "04",
    title: "Present",
    description:
      "You get curated candidates with context, not a pile of resumes lobbed over the fence.",
  },
  {
    index: "05",
    title: "Close",
    description:
      "We help move candidates through the process toward an accepted offer.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow="How It Works" title="Simple by design." />

        <div className="mt-12 max-w-xl">
          {STEPS.map((step, i) => (
            <ProcessStep key={step.index} {...step} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
