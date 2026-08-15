import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

const COLUMNS = [
  {
    title: "Traditional Agency",
    points: ["Transactional", "Pay per placement", "External vendor relationship"],
  },
  {
    title: "Full-Time Recruiter",
    points: [
      "Salary",
      "Benefits",
      "Long-term commitment",
      "May be underutilized during slower periods",
    ],
  },
  {
    title: "Just Genius",
    featured: true,
    points: [
      "Predictable monthly investment",
      "Flexible capacity",
      "Hands-on recruiting",
      "Startup-focused",
      "Embedded partnership",
    ],
  },
];

export function WhyFractional() {
  return (
    <section className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Fractional Recruiting"
          title="Why hire fractional?"
          description="You’re not ready for another full-time employee. But founder-led recruiting isn’t sustainable either."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {COLUMNS.map((column) => (
            <div
              key={column.title}
              className={
                column.featured
                  ? "rounded-lg border-2 border-ink bg-ink p-7 text-ivory"
                  : "rounded-lg border border-stone-200 bg-white p-7"
              }
            >
              <h3 className={column.featured ? "text-sm font-semibold uppercase tracking-[0.1em] text-accent-soft" : "text-sm font-semibold uppercase tracking-[0.1em] text-stone-500"}>
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.points.map((point) => (
                  <li
                    key={point}
                    className={column.featured ? "text-sm text-stone-200" : "text-sm text-stone-700"}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-xl leading-relaxed text-ink">
          Just Genius sits between the traditional agency and the full-time
          recruiting hire.
        </p>
      </Container>
    </section>
  );
}
