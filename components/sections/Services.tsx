import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";

const SERVICES = [
  {
    index: "01",
    title: "Fractional Recruiting",
    headline: "Your recruiter without the full-time headcount.",
    description:
      "Dedicated recruiting capacity that plugs into your team, tools, and hiring process.",
    items: [
      "Recruiting strategy",
      "Intake",
      "Sourcing",
      "Candidate outreach",
      "Screening",
      "Candidate presentation",
      "Interview management",
      "Offer support",
      "Recruiting reporting",
    ],
    ctaLabel: "Explore Fractional Recruiting",
    ctaHref: "#contact",
  },
  {
    index: "02",
    title: "Specialized Search",
    headline: "For the roles that can’t wait.",
    description:
      "Focused recruiting support for critical, technical, clinical, GTM, and leadership searches.",
    items: [
      "Market mapping",
      "Targeted sourcing",
      "Outreach",
      "Screening",
      "Candidate calibration",
      "Search strategy",
    ],
    ctaLabel: "Discuss a Search",
    ctaHref: "#contact",
  },
  {
    index: "03",
    title: "Recruiting Strategy",
    headline: "Build the hiring engine before you build the TA team.",
    description:
      "Recruiting process, tooling, and enablement so hiring holds up as headcount grows.",
    items: [
      "Recruiting process",
      "Interview design",
      "Scorecards",
      "Job descriptions",
      "Sourcing strategy",
      "ATS optimization",
      "Hiring-manager enablement",
      "Recruiting metrics",
    ],
    ctaLabel: "Talk Strategy",
    ctaHref: "#contact",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow="Services" title="Three ways we can help." />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
