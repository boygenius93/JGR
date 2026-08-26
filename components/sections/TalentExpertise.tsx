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
          description="These are focus areas, not a claim that we’ve filled every one of these roles. Our experience spans clinical, technical, go-to-market, and operating functions."
        />

        <div className="mt-10 rounded-lg border border-stone-200 bg-white p-7 sm:p-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <div key={category.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                  {category.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {category.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full bg-stone-50 px-2.5 py-1 text-xs text-stone-600"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
