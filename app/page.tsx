import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { AboutDerek } from "@/components/sections/AboutDerek";
import { Positioning } from "@/components/sections/Positioning";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { TalentExpertise } from "@/components/sections/TalentExpertise";
import { ServicePaths } from "@/components/sections/ServicePaths";
import { FractionalRecruiting } from "@/components/sections/FractionalRecruiting";
import { Pricing } from "@/components/sections/Pricing";
import { WhyFractional } from "@/components/sections/WhyFractional";
import { TalentProjects } from "@/components/sections/TalentProjects";
import { WhyJustGenius } from "@/components/sections/WhyJustGenius";
import { Proof } from "@/components/sections/Proof";
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
      <Pricing />
      <WhyFractional />
      <TalentProjects />
      <WhyJustGenius />
      <Proof />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <ContactSection />
    </>
  );
}
