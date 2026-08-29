import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about fractional recruiting, talent projects, pricing, and how Just Genius Recruiting works.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <FAQ />
      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
