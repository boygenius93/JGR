import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same "Ascent" mark as app/icon.svg, rasterized at apple-touch-icon size —
// SVG favicons aren't reliably honored for iOS home-screen icons, so this
// covers that gap with the identical geometry.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#15161A",
          borderRadius: 40,
        }}
      >
        <svg viewBox="0 0 64 64" width="180" height="180" fill="none">
          <line x1="14" y1="46" x2="32" y2="28" stroke="#9C978A" strokeWidth="6" strokeLinecap="round" />
          <line x1="32" y1="28" x2="50" y2="14" stroke="#7A6BFF" strokeWidth="6" strokeLinecap="round" />
          <circle cx="14" cy="46" r="6" fill="#9C978A" />
          <circle cx="32" cy="28" r="7.5" fill="#DCD9D0" />
          <circle cx="50" cy="14" r="9.5" fill="#7A6BFF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
