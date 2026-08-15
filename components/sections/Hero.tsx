import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PRIMARY_CTA_HREF } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <HeroBackdrop />
      <Container className="relative">
        <p className="eyebrow">Fractional Recruiting</p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
          We build your team while you build your company.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
          You don&rsquo;t need a recruiting team yet. You need a recruiting
          partner who moves like one.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-500 sm:text-lg">
          Just Genius plugs into your hiring process, fills your pipeline, and
          gets people in seats.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={PRIMARY_CTA_HREF} size="lg" trackId="hero_assessment">
            Get a Recruiting Assessment
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg" trackId="hero_how_it_works">
            See How It Works
          </Button>
        </div>

        <p className="mt-6 text-sm text-stone-500">
          No long-term contracts. No 20% placement fees. Just recruiting help,
          when you need it.
        </p>
      </Container>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <svg
        className="absolute right-[-10%] top-[-15%] h-[140%] w-[70%] text-stone-200 sm:right-0 sm:w-[55%]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1">
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => {
              const x = 40 + col * 90;
              const y = 40 + row * 90;
              return <circle key={`${row}-${col}`} cx={x} cy={y} r="2.5" fill="currentColor" />;
            })
          )}
        </g>
        <g stroke="#4536D9" strokeOpacity="0.35" strokeWidth="1.2">
          <line x1="130" y1="130" x2="310" y2="220" />
          <line x1="310" y1="220" x2="490" y2="130" />
          <line x1="310" y1="220" x2="310" y2="400" />
          <line x1="310" y1="400" x2="130" y2="490" />
          <line x1="310" y1="400" x2="490" y2="490" />
          <line x1="220" y1="310" x2="310" y2="220" />
        </g>
        <g fill="#4536D9">
          <circle cx="130" cy="130" r="4.5" />
          <circle cx="310" cy="220" r="5.5" />
          <circle cx="490" cy="130" r="4.5" />
          <circle cx="310" cy="400" r="5.5" />
          <circle cx="130" cy="490" r="4.5" />
          <circle cx="490" cy="490" r="4.5" />
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" />
    </div>
  );
}
