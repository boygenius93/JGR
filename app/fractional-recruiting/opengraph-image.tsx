import { renderOgImage, OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Fractional Recruiting",
    title: "Experienced recruiting capacity, when you need it.",
    description:
      "Dedicated recruiting support that plugs into your team, without the cost of a full-time hire.",
  });
}
