import { renderOgImage, OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "About",
    title: "Hi, I’m Derek.",
    description: "6+ years recruiting inside growing healthcare and technology companies.",
  });
}
