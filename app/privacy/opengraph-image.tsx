import { renderOgImage, OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Privacy Policy",
    title: "How we handle your information.",
    description: "How Just Genius Recruiting collects, uses, and protects your information.",
  });
}
