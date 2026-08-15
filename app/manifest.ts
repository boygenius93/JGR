import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_INITIALS, DESCRIPTION } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    // Home-screen icons truncate long names — JGR is the initialism this
    // short_name exists for.
    short_name: SITE_INITIALS,
    description: DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#15161A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
