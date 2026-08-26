import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AnalyticsListener } from "@/components/AnalyticsListener";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  SITE_INITIALS,
  DESCRIPTION,
  CONTACT_EMAIL,
  LINKEDIN_URL,
} from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#15161A",
};

// Organization schema for search engines. Deliberately carries no pricing
// (offers/priceRange), see the internal pricing-confidentiality direction
// elsewhere in this codebase (lib/internal-pricing.ts) — that applies to
// structured data exactly as much as visible copy.
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  email: CONTACT_EMAIL,
  areaServed: "US",
  founder: {
    "@type": "Person",
    name: "Derek",
    ...(LINKEDIN_URL ? { sameAs: [LINKEDIN_URL] } : {}),
  },
  ...(LINKEDIN_URL ? { sameAs: [LINKEDIN_URL] } : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Fractional Recruiting for Growing Companies`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "fractional recruiting",
    "fractional recruiter",
    "healthcare recruiting",
    "SaaS recruiting",
    "startup recruiting",
    "fractional talent acquisition",
    "healthcare startup recruiting",
    "SaaS startup recruiting",
    "recruiting consulting",
    "ATS optimization",
    "recruiting process optimization",
    "hiring strategy",
    "talent sourcing",
    "JGR",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    title: SITE_INITIALS,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Fractional Recruiting for Growing Companies`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Fractional Recruiting for Growing Companies`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <a href="#main-content" className="sr-only-focusable">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <AnalyticsListener />
        <Analytics />
      </body>
    </html>
  );
}
