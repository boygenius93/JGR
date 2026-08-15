import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Positioning } from "@/components/sections/Positioning";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { TalentExpertise } from "@/components/sections/TalentExpertise";
import { Services } from "@/components/sections/Services";
import { WhyJustGenius } from "@/components/sections/WhyJustGenius";
import { Proof } from "@/components/sections/Proof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WhyFractional } from "@/components/sections/WhyFractional";
import { AboutDerek } from "@/components/sections/AboutDerek";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Positioning />
      <WhoWeServe />
      <TalentExpertise />
      <Services />
      <WhyJustGenius />
      <Proof />
      <HowItWorks />
      <Pricing />
      <WhyFractional />
      <AboutDerek />
      <FAQ />
      <CTASection />
      <ContactSection />
    </>
  );
}
