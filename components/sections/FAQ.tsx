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
    question: "Who do you work with?",
    answer:
      "Growing healthcare and SaaS companies that have outgrown founder-led hiring but aren’t ready — or don’t need — to build a full internal recruiting team.",
  },
  {
    question: "What company stages do you work with?",
    answer:
      "Seed through Series A is our sweet spot, when hiring demand tends to outpace internal recruiting capacity. We also support Series B, Series C, and established companies with a temporary or specialized recruiting need.",
  },
  {
    question: "Do you work with healthcare and SaaS?",
    answer:
      "Yes. Healthcare and healthtech, and SaaS, are the two primary focus areas, with recruiting approaches tailored to each.",
  },
  {
    question: "What roles can you recruit for?",
    answer:
      "Clinical and healthcare operations, technical roles like engineering and product, GTM roles like sales and customer success, and G&A roles like people and finance.",
  },
  {
    question: "How long are engagements?",
    answer:
      "Fractional plans carry a 90-day minimum. Specialized searches and strategy engagements are scoped to the work.",
  },
  {
    question: "Can you work inside our ATS?",
    answer:
      "Yes. Recruiting support plugs into the tools and process you already use.",
  },
  {
    question: "Do you handle sourcing and screening?",
    answer:
      "Yes. Sourcing, outreach, and screening are core to every engagement, along with candidate presentation and interview support.",
  },
  {
    question: "Can you help with one difficult search?",
    answer:
      "Yes. Specialized Search is built for a single critical role rather than an ongoing engagement.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Fractional plans are a predictable monthly investment. Pricing is a starting point and adjusts based on scope, seniority, and hiring volume.",
  },
  {
    question: "Do you offer contingency recruiting?",
    answer:
      "No. Just Genius is built around fractional and embedded engagements rather than a pay-per-placement model.",
  },
  {
    question: "What happens after I submit an inquiry?",
    answer:
      "You’ll hear back to schedule a short call to discuss your hiring needs and whether Just Genius is a fit.",
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
