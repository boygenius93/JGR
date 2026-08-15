import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { TalentProjectCard } from "@/components/TalentProjectCard";
import { RecruitingAssessmentCTA } from "@/components/RecruitingAssessmentCTA";
import { TALENT_PROJECTS } from "@/lib/services-data";
import { PRIMARY_CTA_HREF } from "@/lib/constants";

const CONVERSION_PATH = [
  "Specific Problem",
  "Talent Project",
  "Hiring Need Grows",
  "Fractional Partnership",
];

export function TalentProjects() {
  return (
    <section id="talent-projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Talent Projects"
          title="Need something specific? Let’s fix it."
          description="Focused recruiting and talent projects designed to solve a specific problem, without committing to an ongoing engagement."
        />

        <div className="mt-8 max-w-2xl space-y-1.5 text-stone-600">
          <p>Not every hiring challenge requires a monthly recruiting partner.</p>
          <p>Sometimes you need an ATS configured properly.</p>
          <p>Sometimes you need your hiring process rebuilt.</p>
          <p>Sometimes you need help finding candidates for one particularly difficult role.</p>
          <p className="pt-1 font-medium text-ink">That’s where Talent Projects come in.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TALENT_PROJECTS.map((project) => (
            <TalentProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-stone-200 bg-ivory-alt p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {CONVERSION_PATH.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className={
                    i === CONVERSION_PATH.length - 1
                      ? "text-sm font-semibold text-accent"
                      : "text-sm font-medium text-stone-500"
                  }
                >
                  {step}
                </span>
                {i < CONVERSION_PATH.length - 1 ? (
                  <span className="text-stone-300" aria-hidden="true">
                    &rarr;
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-stone-500">
            Some projects solve a single problem. Others uncover a larger recruiting need.
            When ongoing support makes sense, a project can evolve into a fractional
            partnership.
          </p>
        </div>

        <div className="mt-10">
          <RecruitingAssessmentCTA
            headline="Not sure which model fits?"
            copy="Tell us what’s happening with your hiring. We’ll spend about 30 minutes understanding your goals, your challenges, and where you’re getting stuck, then help you figure out the right level of support."
            primaryLabel="Get a Recruiting Assessment"
            primaryHref={PRIMARY_CTA_HREF}
            primaryTrackId="talent_projects_assessment"
            secondaryLabel="Discuss a Project"
            secondaryHref="#contact"
            secondaryTrackId="talent_projects_discuss"
          />
        </div>
      </Container>
    </section>
  );
}
