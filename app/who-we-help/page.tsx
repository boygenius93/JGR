import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { TalentExpertise } from "@/components/sections/TalentExpertise";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Who We Help",
  description:
    "Just Genius works with growing healthcare and SaaS companies that have outgrown founder-led hiring, recruiting across clinical, technical, GTM, and G&A roles.",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <WhoWeServe />
      <Reveal>
        <TalentExpertise />
      </Reveal>
      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
