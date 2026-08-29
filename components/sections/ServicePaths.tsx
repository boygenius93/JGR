import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicePathCard } from "@/components/ServicePathCard";

export function ServicePaths() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="How We Can Help"
          title="Recruiting support that fits where you are."
          description="Whether you need an experienced recruiter in your corner or help solving one specific hiring challenge, Just Genius can meet you where you are."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ServicePathCard
            category="Fractional Recruiting"
            headline="Your recruiter without the full-time headcount."
            description="Dedicated recruiting capacity that plugs into your team, tools, and hiring process, without requiring you to build a full internal recruiting function."
            supporting="Best for companies with ongoing hiring demand that need an experienced recruiting partner."
            indicators={["Ongoing", "Monthly", "Flexible"]}
            ctaLabel="Explore Fractional Recruiting"
            ctaHref="/fractional-recruiting"
            trackId="service_path_fractional"
            featured
          />
          <ServicePathCard
            category="Talent Projects"
            headline="Need something specific? Let’s fix it."
            description="Focused recruiting and talent projects designed to solve a specific problem without committing to an ongoing engagement."
            supporting="Best for companies that need a defined recruiting, hiring, or talent-acquisition project completed."
            indicators={["Fixed Scope", "Project Based", "Defined Outcome"]}
            ctaLabel="Explore Talent Projects"
            ctaHref="/talent-projects"
            trackId="service_path_projects"
          />
        </div>
      </Container>
    </section>
  );
}
