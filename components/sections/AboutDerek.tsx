import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { CONTACT_EMAIL } from "@/lib/constants";

export function AboutDerek() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,240px)_1fr]">
          <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border border-stone-200 bg-ivory-alt lg:mx-0 lg:w-60">
            <Image
              src="/images/derek.jpg"
              alt="Derek, founder of Just Genius"
              fill
              sizes="(min-width: 1024px) 240px, 192px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-3xl leading-[1.1] text-ink sm:text-4xl">
              Hi, I&rsquo;m Derek.
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-stone-600">
              <p>
                I&rsquo;ve spent 6+ years recruiting from inside growing healthcare
                and technology companies, hiring across clinical, technical, GTM, and
                G&amp;A functions.
              </p>
              <p>
                I started Just Genius to help growing companies access experienced
                recruiting support without immediately having to build a full
                internal recruiting team.
              </p>
              <p>
                I believe great recruiting is less about sending the most resumes
                and more about understanding the business, finding the right
                people, and creating a hiring process that actually works.
              </p>
            </div>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary" className="mt-8" trackId="about_connect_derek">
              Connect With Derek
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
