import { TalentProjects } from "@/components/sections/TalentProjects";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Talent Projects",
  description:
    "Fixed-scope recruiting and talent acquisition projects: ATS setup, hiring process design, sourcing sprints, and more. No ongoing commitment required.",
  path: "/talent-projects",
});

export default function TalentProjectsPage() {
  return (
    <>
      <TalentProjects />
      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
