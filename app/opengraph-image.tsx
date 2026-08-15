import { ImageResponse } from "next/og";
import { TAGLINE, DESCRIPTION } from "@/lib/constants";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 54,
            lineHeight: 1.15,
            color: "#FAF8F3",
            fontWeight: 700,
            maxWidth: 950,
          }}
        >
          {TAGLINE}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#C1BDB0", maxWidth: 900 }}>
          {DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  );
}
