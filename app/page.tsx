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
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <Problem />
      </Reveal>
      <Reveal>
        <Positioning />
      </Reveal>
      <Reveal>
        <AboutDerek />
      </Reveal>
      <Reveal>
        <WhoWeServe />
      </Reveal>
      <Reveal>
        <TalentExpertise />
      </Reveal>
      <Reveal>
        <ServicePaths />
      </Reveal>
      <Reveal>
        <FractionalRecruiting />
      </Reveal>
      <Reveal>
        <WhyFractional />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <TalentProjects />
      </Reveal>
      <Reveal>
        <WhyJustGenius />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <CTASection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </>
  );
}
