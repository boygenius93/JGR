import { Container } from "@/components/Container";

const ONGOING_SUPPORT = [
  "Supplemental capacity",
  "Specialized searches",
  "Overflow recruiting",
  "Strategic recruiting support",
];

export function Positioning() {
  return (
    <section className="border-y border-stone-200 bg-ink py-20 text-ivory sm:py-28">
      <Container>
        <p className="eyebrow text-accent-soft">Our Position</p>
        <h2 className="mt-6 max-w-2xl text-3xl leading-[1.1] text-ivory sm:text-4xl lg:text-[2.75rem]">
          Built for the messy middle.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
          Growing companies live somewhere between founder-led hiring and a
          fully built internal recruiting team. That&rsquo;s where Just
          Genius operates: experienced recruiting capacity for exactly that
          stage.
        </p>

        <div className="mt-16 flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
          <ContinuumStage label="Founder-Led Hiring" subtle />
          <ContinuumArrow />
          <ContinuumStage label="Just Genius" featured />
          <ContinuumArrow />
          <ContinuumStage label="Internal TA Team" subtle />
        </div>

        <div className="mt-12 max-w-2xl">
          <p className="text-sm leading-relaxed text-stone-400">
            Once you&rsquo;ve got an internal team in place, we don&rsquo;t
            disappear. We stick around for:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {ONGOING_SUPPORT.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-stone-200"
              >
                {item}
              </li>
            ))}
          </ul>
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
