import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Positioning } from "@/components/sections/Positioning";
import { ServicePaths } from "@/components/sections/ServicePaths";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
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
        <ServicePaths />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
