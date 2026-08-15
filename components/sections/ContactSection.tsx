import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeader
            eyebrow="Get Started"
            title="Tell us what you’re hiring for."
            description="Share a bit about your company and roles, and we’ll follow up to see if Just Genius is a fit. No pressure, no obligation."
          />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
