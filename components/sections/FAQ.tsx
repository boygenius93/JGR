import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";

const FAQS: FAQItem[] = [
  {
    question: "What is fractional recruiting?",
    answer:
      "Dedicated, part-time recruiting support instead of a full-time hire or a per-placement agency. You get consistent recruiting capacity without adding permanent headcount.",
  },
  {
    question: "What’s the difference between Fractional Recruiting and a Talent Project?",
    answer:
      "Fractional Recruiting is an ongoing monthly partnership for companies with continuous hiring demand. Talent Projects are fixed-scope engagements for a specific problem, like an ATS setup or one hard-to-fill role, with no ongoing commitment required.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Growing healthcare and SaaS companies that have outgrown founder-led hiring. Maybe they’re not ready for a full internal recruiting team yet, maybe they just don’t need one.",
  },
  {
    question: "What company stages do you work with?",
    answer:
      "Seed through Series A is our sweet spot, since that’s usually when hiring outpaces internal recruiting capacity. We also work with Series B, Series C, and established companies that need extra recruiting support for a stretch.",
  },
  {
    question: "Do you work with healthcare and SaaS?",
    answer:
      "Yes. Healthcare and healthtech, and SaaS, are our two main focus areas, with recruiting approaches built for each.",
  },
  {
    question: "What roles can you recruit for?",
    answer:
      "Clinical and healthcare operations, technical roles like engineering and product, GTM roles like sales and customer success, and G&A roles like people and finance.",
  },
  {
    question: "How long are engagements?",
    answer:
      "Fractional partnerships begin with a 90-day commitment. Talent Projects are fixed-scope and typically run days to a few weeks, depending on the project.",
  },
  {
    question: "Can you work inside our ATS?",
    answer:
      "Yes. We plug into whatever tools and process you’re already using.",
  },
  {
    question: "Do you handle sourcing and screening?",
    answer:
      "Yes. Sourcing, outreach, and screening are core to every engagement, plus candidate presentation and interview support.",
  },
  {
    question: "Can you help with one difficult search?",
    answer:
      "Yes. A Talent Sourcing Sprint is built for exactly that: focused sourcing support for a single role that’s proving hard to fill, without an ongoing engagement.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Every engagement is scoped around your hiring goals, complexity, seniority, and volume, so there isn’t a one-size number that fits every company. Let’s talk about what you’re building and we’ll recommend the right level of support and a price to match.",
  },
  {
    question: "Do you offer contingency recruiting?",
    answer:
      "No. Just Genius runs on fractional and embedded engagements, not a pay-per-placement model.",
  },
  {
    question: "What happens after I submit an inquiry?",
    answer:
      "You’ll hear back to schedule a short call and see if Just Genius is a fit for what you’re hiring for.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow="FAQ" title="Common questions." />
        <div className="mt-12 max-w-3xl">
          <FAQAccordion items={FAQS} />
        </div>
      </Container>
    </section>
  );
}
