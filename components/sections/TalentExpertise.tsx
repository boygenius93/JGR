import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

const CATEGORIES = [
  {
    title: "Clinical & Healthcare",
    roles: ["Clinical", "Clinical Operations", "Healthcare Operations", "Behavioral Health", "Nursing", "Allied Health"],
  },
  {
    title: "Technical",
    roles: ["Software Engineering", "AI / ML", "Data", "Product", "Technical Leadership"],
  },
  {
    title: "GTM",
    roles: ["Sales", "Customer Success", "Partnerships", "Marketing", "Revenue Operations"],
  },
  {
    title: "G&A",
    roles: ["People", "Finance", "Operations", "Administrative Leadership"],
  },
];

export function TalentExpertise() {
  return (
    <section className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Talent Expertise"
          title="Recruiting across the teams that build and scale companies."
          description="Focus areas, not a promise that every role has been filled — recruiting expertise spans clinical, technical, go-to-market, and operating functions."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="rounded-lg border border-stone-200 bg-white p-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-accent">
                {category.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {category.roles.map((role) => (
                  <li key={role} className="text-sm text-stone-700">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
