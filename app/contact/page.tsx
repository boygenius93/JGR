import { ContactSection } from "@/components/sections/ContactSection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Just Genius Recruiting. Book a call or send a message about your hiring needs.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactSection />;
}
