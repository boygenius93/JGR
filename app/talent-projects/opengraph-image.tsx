import { renderOgImage, OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Talent Projects",
    title: "Need something specific? Let’s fix it.",
    description:
      "Fixed-scope recruiting and talent acquisition projects, no ongoing commitment required.",
  });
}
