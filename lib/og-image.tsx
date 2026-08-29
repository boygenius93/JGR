import { ImageResponse } from "next/og";

/**
 * Shared visual template for per-page Open Graph / Twitter card images.
 * Each app/**\/opengraph-image.tsx route file calls this with its own
 * eyebrow/title/description and re-exports the route-segment config
 * (runtime, size, contentType) itself — those three exports are read
 * statically by Next.js from the route file, so they can't live here.
 */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_CONTENT_TYPE = "image/png";

export function renderOgImage({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#15161A",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
            <line x1="14" y1="46" x2="32" y2="28" stroke="#9C978A" strokeWidth="6" strokeLinecap="round" />
            <line x1="32" y1="28" x2="50" y2="14" stroke="#7A6BFF" strokeWidth="6" strokeLinecap="round" />
            <circle cx="14" cy="46" r="6" fill="#9C978A" />
            <circle cx="32" cy="28" r="7.5" fill="#DCD9D0" />
            <circle cx="50" cy="14" r="9.5" fill="#7A6BFF" />
          </svg>
          <div style={{ display: "flex", fontSize: 22, color: "#FAF8F3", fontWeight: 700, letterSpacing: 1 }}>
            JUST GENIUS
          </div>
        </div>
        {eyebrow ? (
          <div
            style={{
              display: "flex",
              marginTop: 44,
              fontSize: 22,
              color: "#9F91FF",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            marginTop: eyebrow ? 16 : 48,
            fontSize: 54,
            lineHeight: 1.15,
            color: "#FAF8F3",
            fontWeight: 700,
            maxWidth: 950,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#C1BDB0", maxWidth: 900 }}>
          {description}
        </div>
      </div>
    ),
    OG_IMAGE_SIZE
  );
}
