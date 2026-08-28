import { Container } from "@/components/Container";

const CAPABILITIES = [
  "Candidate sourcing and passive outreach",
  "Screening and candidate presentation",
  "Interview coordination and communication",
  "Recruiting strategy and role calibration",
  "Hiring-manager partnership",
  "Works inside your existing ATS and tools",
];

export function FractionalRecruiting() {
  return (
    <section id="fractional-recruiting" className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <p className="eyebrow">Fractional Recruiting</p>
        <h2 className="mt-6 max-w-2xl text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]">
          Experienced recruiting capacity, when you need it.
        </h2>

        <div className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-stone-600">
          <p>
            A fractional recruiter steps in and gets to work. They understand your hiring
            goals, build the pipeline, and partner directly with your hiring managers.
          </p>
          <p>
            That’s what fractional recruiting means at Just Genius: experienced recruiting
            capacity, built into your team.
          </p>
        </div>

        <ul className="mt-10 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {CAPABILITIES.map((item) => (
            <li key={item} className="flex items-start gap-3 text-stone-700">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
