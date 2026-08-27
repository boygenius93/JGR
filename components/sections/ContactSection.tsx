import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { BOOKING_URL } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            {BOOKING_URL ? (
              <>
                <SectionHeader
                  eyebrow="Get Started"
                  title="Let’s find time to talk."
                  description="Pick a time that works for you and we’ll dig into what you’re hiring for and whether Just Genius is a fit."
                />
                <Button href={BOOKING_URL} size="lg" className="mt-8" trackId="contact_book_call">
                  Book a Call
                </Button>
              </>
            ) : (
              <SectionHeader
                eyebrow="Get Started"
                title="Tell us what you’re hiring for."
                description="Share a bit about your company and roles, and we’ll follow up to see if Just Genius is a fit."
              />
            )}
          </div>
          <div>
            {BOOKING_URL ? (
              <div className="mb-6">
                <p className="text-sm font-semibold text-ink">Not ready to book a call yet?</p>
                <p className="mt-1.5 text-sm text-stone-600">
                  Send a quick note instead. We want to hear from you even if you&rsquo;re not
                  ready to move forward yet.
                </p>
              </div>
            ) : null}
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
