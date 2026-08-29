import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

/**
 * Builds page-level metadata (title, canonical, Open Graph, Twitter card)
 * for a route. Each page must call this explicitly — Next.js does not deep
 * merge nested metadata objects like `openGraph` across route segments, so
 * a subpage that only sets `title` would otherwise inherit the root
 * layout's Open Graph title/URL and canonical, which point at the
 * homepage. `title` is passed as a plain string so the root layout's
 * `%s | Just Genius Recruiting` template still applies.
 */
export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
