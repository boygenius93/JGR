import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { AboutDerek } from "@/components/sections/AboutDerek";
import { Positioning } from "@/components/sections/Positioning";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { TalentExpertise } from "@/components/sections/TalentExpertise";
import { ServicePaths } from "@/components/sections/ServicePaths";
import { FractionalRecruiting } from "@/components/sections/FractionalRecruiting";
import { WhyFractional } from "@/components/sections/WhyFractional";
import { Pricing } from "@/components/sections/Pricing";
import { TalentProjects } from "@/components/sections/TalentProjects";
import { WhyJustGenius } from "@/components/sections/WhyJustGenius";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <AboutDerek />
      <Positioning />
      <WhoWeServe />
      <TalentExpertise />
      <ServicePaths />
      <FractionalRecruiting />
      <WhyFractional />
      <Pricing />
      <TalentProjects />
      <WhyJustGenius />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <ContactSection />
    </>
  );
}
