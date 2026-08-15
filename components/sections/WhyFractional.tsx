import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

const ROWS = [
  {
    label: "Flexibility",
    agency: "Ad hoc, project by project",
    fullTime: "Fixed, always-on capacity",
    justGenius: "Scales up or down with hiring needs",
  },
  {
    label: "Engagement Model",
    agency: "Pay per placement",
    fullTime: "Salary and benefits",
    justGenius: "Predictable monthly engagement",
  },
  {
    label: "Recruiting Ownership",
    agency: "External vendor runs the search",
    fullTime: "Owns the process, in-house",
    justGenius: "Owns the process, working inside your team",
  },
  {
    label: "Relationship",
    agency: "Transactional",
    fullTime: "Long-term, single company",
    justGenius: "Embedded partnership",
  },
  {
    label: "Capacity",
    agency: "Limited to what you post",
    fullTime: "May be underutilized in slower periods",
    justGenius: "Right-sized to what you’re hiring for",
  },
];

export function WhyFractional() {
  return (
    <section className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Fractional Recruiting"
          title="Why fractional recruiting?"
          description="You’re not ready for another full-time employee. But founder-led recruiting isn’t sustainable either. Just Genius sits between the traditional agency and the full-time recruiting hire."
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
