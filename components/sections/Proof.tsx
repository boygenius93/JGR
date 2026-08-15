import { Container } from "@/components/Container";

const PILLARS = [
  {
    title: "In-house background",
    description:
      "Recruiting experience built inside growing companies, not learned from a call queue.",
  },
  {
    title: "Two verticals, one recruiter",
    description:
      "Healthcare and SaaS hiring don’t run the same playbook, and neither one gets treated like the side gig.",
  },
  {
    title: "Full-function coverage",
    description:
      "Clinical, technical, GTM, G&A. Recruiting across the whole org, not just one lane.",
  },
];

export function Proof() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-xl border border-stone-200 bg-white p-8 sm:p-12">
          <p className="eyebrow">Proof</p>
          <p className="mt-6 max-w-2xl text-2xl leading-snug text-ink sm:text-3xl">
            Built from 6+ years of in-house recruiting experience across
            healthcare, SaaS, technical, GTM, clinical, and G&amp;A hiring.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-stone-100 pt-10 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-base font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
