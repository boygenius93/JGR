import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AnalyticsListener } from "@/components/AnalyticsListener";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL, DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Fractional Recruiting for Healthcare & SaaS Startups`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "fractional recruiter",
    "fractional recruiting",
    "healthcare recruiting",
    "SaaS recruiting",
    "healthcare startup recruiting",
    "SaaS startup recruiting",
    "fractional talent acquisition",
    "startup recruiter",
  ],
  authors: [{ name: "Just Genius Recruitment Solutions" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Fractional Recruiting for Healthcare & SaaS Startups`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Fractional Recruiting for Healthcare & SaaS Startups`,
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
