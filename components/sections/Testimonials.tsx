import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials-data";

export function Testimonials() {
  return (
    <section className="bg-ivory-alt py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Credibility"
          title="What people who’ve worked with Derek say."
          description="Feedback from hiring managers, recruiting leaders, and colleagues Derek has worked with directly."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
