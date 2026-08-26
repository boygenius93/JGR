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
            <SectionHeader
              eyebrow="Get Started"
              title="Tell us what you’re hiring for."
              description="Share a bit about your company and roles, and we’ll follow up to see if Just Genius is a fit."
            />

            {BOOKING_URL ? (
              <div className="mt-8 rounded-lg border border-stone-200 bg-white p-6">
                <p className="text-sm font-semibold text-ink">Prefer to talk live?</p>
                <p className="mt-1.5 text-sm text-stone-600">
                  Skip the form and grab time directly on the calendar.
                </p>
                <Button
                  href={BOOKING_URL}
                  variant="secondary"
                  className="mt-4"
                  trackId="contact_book_call"
                >
                  Book a Call
                </Button>
              </div>
            ) : null}
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
