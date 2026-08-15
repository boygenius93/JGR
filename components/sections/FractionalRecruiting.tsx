import { Container } from "@/components/Container";

const JOURNEY = [
  { label: "Founder-Led Hiring", featured: false },
  { label: "Hiring Demand Grows", featured: false },
  { label: "Recruiting Becomes a Bottleneck", featured: false },
  { label: "Just Genius", featured: true },
  { label: "Internal TA Function", featured: false },
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
          <p>You don’t always need another full-time employee.</p>
          <p>
            Sometimes you need someone who can step in, understand your hiring goals, build
            the pipeline, partner with your hiring managers, and get to work.
          </p>
          <p>That’s what fractional recruiting is designed to do.</p>
        </div>

        <div className="mt-14 rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
            {JOURNEY.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-2">
                <span
                  className={
                    stage.featured
                      ? "rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory"
                      : "rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600"
                  }
                >
                  {stage.label}
                </span>
                {i < JOURNEY.length - 1 ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-stone-300"
                  >
                    <path
                      d="M2 8H14M14 8L9 3M14 8L9 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-xl text-center text-stone-600">
            Just Genius sits in the messy middle, helping companies move from founder-led
            recruiting toward a more scalable hiring function.
          </p>
        </div>
      </Container>
    </section>
  );
}
