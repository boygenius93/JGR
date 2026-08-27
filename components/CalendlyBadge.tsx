"use client";

import Script from "next/script";
import { BOOKING_URL } from "@/lib/constants";

/**
 * Calendly's floating "badge" widget, docked bottom-right (fixed by
 * Calendly, not configurable). Renders nothing when BOOKING_URL isn't
 * configured, same pattern as every other optional link on the site
 * (LINKEDIN_URL, the ContactSection "Book a Call" card). The URL comes
 * from the same BOOKING_URL constant every CTA button already uses, so
 * there's a single place to update if the booking link ever changes.
 */
export function CalendlyBadge() {
  if (!BOOKING_URL) return null;

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.Calendly?.initBadgeWidget({
            url: BOOKING_URL,
            text: "Schedule time with me",
            color: "#15161A",
            textColor: "#FAF8F3",
            branding: true,
          });
        }}
      />
    </>
  );
}

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}
