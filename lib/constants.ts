export const SITE_NAME = "Just Genius Recruiting";
export const SITE_SHORT_NAME = "Just Genius";
export const SITE_INITIALS = "JGR";
// Prefer an explicit override (set NEXT_PUBLIC_SITE_URL once the custom domain
// is live). Otherwise fall back to the domain Vercel actually deployed this
// build to, so absolute URLs (OG image, sitemap, canonical) never point at a
// domain that isn't serving the site, which is what makes social platforms
// abandon the OG image and scrape a fallback image from the page instead.
const VERCEL_PRODUCTION_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  VERCEL_PRODUCTION_URL ??
  "https://www.jgrtalent.com";

export const TAGLINE = "We build your team while you build your company.";
export const DESCRIPTION =
  "Fractional recruiting and talent acquisition support for growing healthcare and SaaS companies.";

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "team@jgrtalent.com";
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

/** Primary conversion target: the booking link when configured, otherwise the on-page contact form. */
export const PRIMARY_CTA_HREF = BOOKING_URL ? BOOKING_URL : "#contact";

// Optional social links. Unset by default; each renders only where a real
// value is configured, so nothing shows a dead or placeholder link.
export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Who We Help", href: "#who-we-serve" },
  { label: "Why Just Genius", href: "#why-just-genius" },
  { label: "Engagement Models", href: "#pricing" },
  { label: "About", href: "#about" },
] as const;
