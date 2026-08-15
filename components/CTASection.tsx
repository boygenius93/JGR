import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CONTACT_EMAIL, PRIMARY_CTA_HREF } from "@/lib/constants";

export function CTASection() {
  return (
    <section id="contact-cta" className="bg-ink py-24 sm:py-28">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl leading-[1.1] text-ivory sm:text-4xl lg:text-[2.75rem]">
          Growing your team?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-300">
          Tell us what you&rsquo;re building, what you&rsquo;re hiring for, and where
          recruiting is getting stuck.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={PRIMARY_CTA_HREF}
            variant="inverse"
            size="lg"
            trackId="final_cta_assessment"
          >
            Get a Recruiting Assessment
          </Button>
          <Button
            href={`mailto:${CONTACT_EMAIL}`}
            variant="inverse-outline"
            size="lg"
            trackId="final_cta_email"
          >
            Email Derek
          </Button>
        </div>
      </Container>
    </section>
  );
}
