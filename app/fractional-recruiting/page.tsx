import { FractionalRecruiting } from "@/components/sections/FractionalRecruiting";
import { WhyFractional } from "@/components/sections/WhyFractional";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Reveal } from "@/components/Reveal";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Fractional Recruiting",
  description:
    "Fractional recruiting capacity for growing healthcare and SaaS companies. Experienced recruiting support that plugs into your team, without the cost of a full-time hire.",
  path: "/fractional-recruiting",
});

export default function FractionalRecruitingPage() {
  return (
    <>
      <FractionalRecruiting />
      <Reveal>
        <WhyFractional />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
    </>
  );
}
