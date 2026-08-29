import { renderOgImage, OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Who We Help",
    title: "Growing companies. Ambitious teams.",
    description: "Fractional recruiting for growing healthcare and SaaS companies, at every stage.",
  });
}
