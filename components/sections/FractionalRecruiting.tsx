import { Container } from "@/components/Container";

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
      </Container>
    </section>
  );
}
