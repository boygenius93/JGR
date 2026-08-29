import { Container } from "@/components/Container";

const BELIEFS = [
  {
    title: "Partnership economics",
    description:
      "We’re paid for the engagement, not a fee every time someone accepts an offer.",
  },
  {
    title: "Full pipeline visibility",
    description:
      "You see search progress and candidate status as it happens, not just when we’ve got someone to show you.",
  },
  {
    title: "We build it, you keep it",
    description:
      "Scorecards, process, and market intel stay with your team after the engagement ends.",
  },
  {
    title: "Capacity that flexes",
    description:
      "Add recruiting support when hiring accelerates, without adding headcount you’re not ready for.",
  },
];

export function Positioning() {
  return (
    <section className="border-y border-stone-200 bg-ink py-20 text-ivory sm:py-28">
      <Container>
        <p className="eyebrow text-accent-soft">The Un-Agency Approach</p>
        <h2 className="mt-6 max-w-2xl text-3xl leading-[1.1] text-ivory sm:text-4xl lg:text-[2.75rem]">
          Built for the messy middle.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
          Growing companies live somewhere between founder-led hiring and a
          fully built internal recruiting team. That&rsquo;s where Just
          Genius operates: experienced recruiting capacity for exactly that
          stage.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-300">
          We call it the Un-Agency approach. Traditional agencies get paid
          when a placement happens, so volume is the incentive. We get paid
          for the partnership, so a hiring process that actually works is
          the incentive.
        </p>

        <div className="mt-16 flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
          <ContinuumStage label="Founder-Led Hiring" subtle />
          <ContinuumArrow />
          <ContinuumStage label="Just Genius" featured />
          <ContinuumArrow />
          <ContinuumStage label="Internal TA Team" subtle />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {BELIEFS.map((belief) => (
            <div key={belief.title} className="border-l-2 border-accent/60 pl-5">
              <h3 className="text-base font-semibold text-ivory">{belief.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContinuumStage({ label, featured = false, subtle = false }: { label: string; featured?: boolean; subtle?: boolean }) {
  return (
    <div
      className={
        featured
          ? "flex-1 rounded-lg border-2 border-accent bg-accent/10 px-6 py-8 text-center"
          : "flex-1 rounded-lg border border-white/15 px-6 py-8 text-center"
      }
    >
      <span
        className={
          featured
            ? "text-lg font-semibold text-ivory sm:text-xl"
            : `text-base font-medium ${subtle ? "text-stone-400" : "text-stone-200"}`
        }
      >
        {label}
      </span>
    </div>
  );
}

function ContinuumArrow() {
  return (
    <div className="flex shrink-0 items-center justify-center py-3 sm:rotate-[-90deg] sm:py-0 sm:px-3" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3V19M11 19L5 13M11 19L17 13" stroke="#9C978A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
