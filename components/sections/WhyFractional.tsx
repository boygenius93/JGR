import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

const ROWS = [
  {
    label: "Engagement Model",
    agency: "Transactional, often placement-based",
    fullTime: "Salary and benefits",
    justGenius: "Predictable monthly engagement",
  },
  {
    label: "Recruiting Ownership",
    agency: "External vendor, limited ongoing ownership",
    fullTime: "Owned in-house, requires internal hiring",
    justGenius: "Hands-on, working inside your team",
  },
  {
    label: "Capacity",
    agency: "Limited to what you post",
    fullTime: "Fixed; may fluctuate with hiring demand",
    justGenius: "Flexible, scales with hiring demand",
  },
  {
    label: "Relationship",
    agency: "Transactional",
    fullTime: "Long-term, single company",
    justGenius: "Embedded, hiring-manager partnership",
  },
  {
    label: "Strategic Support",
    agency: "Limited beyond the search itself",
    fullTime: "Depends on the individual hire",
    justGenius: "Strategic recruiting support built in",
  },
];

export function WhyFractional() {
  return (
    <section className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Fractional?"
          title="A model built between an agency and a full-time hire."
          description="Just Genius sits between a traditional agency and a full-time recruiting hire, embedded in your team like an in-house recruiter, flexible enough to scale with your hiring demand."
        />

        <div className="mt-12 overflow-x-auto rounded-lg border border-stone-200 bg-white">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                <th scope="col" className="p-5 text-left">
                  <span className="sr-only">Comparison dimension</span>
                </th>
                <th
                  scope="col"
                  className="p-5 text-left text-xs font-semibold uppercase tracking-[0.1em] text-stone-500"
                >
                  Traditional Agency
                </th>
                <th
                  scope="col"
                  className="p-5 text-left text-xs font-semibold uppercase tracking-[0.1em] text-stone-500"
                >
                  Full-Time Recruiter
                </th>
                <th
                  scope="col"
                  className="bg-accent-soft p-5 text-left text-xs font-semibold uppercase tracking-[0.1em] text-accent-dim"
                >
                  Just Genius
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-stone-100 last:border-0">
                  <th scope="row" className="p-5 text-left align-top text-sm font-semibold text-ink">
                    {row.label}
                  </th>
                  <td className="p-5 align-top text-stone-600">{row.agency}</td>
                  <td className="p-5 align-top text-stone-600">{row.fullTime}</td>
                  <td className="bg-accent-soft/50 p-5 align-top font-medium text-ink">
                    {row.justGenius}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
