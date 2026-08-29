import { AboutDerek } from "@/components/sections/AboutDerek";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Meet Derek, founder of Just Genius Recruiting. 6+ years recruiting inside growing healthcare and technology companies.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutDerek />;
}
