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
          <div
            style={{
              display: "flex",
              width: 36,
              height: 36,
              borderRadius: 6,
              backgroundColor: "#4536D9",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            JG
          </div>
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
