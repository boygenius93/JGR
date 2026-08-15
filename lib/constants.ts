export const SITE_NAME = "Just Genius Recruiting";
export const SITE_SHORT_NAME = "Just Genius";
export const SITE_INITIALS = "JGR";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.justgeniusrecruiting.com";

export const TAGLINE = "Your recruiter before you're ready for a recruiting team.";
export const DESCRIPTION =
  "Fractional recruiting and talent acquisition support for growing healthcare and SaaS companies.";

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "derekj2011@gmail.com";
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

/** Primary conversion target: the booking link when configured, otherwise the on-page contact form. */
export const PRIMARY_CTA_HREF = BOOKING_URL ? BOOKING_URL : "#contact";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Who We Help", href: "#who-we-serve" },
  { label: "Why Just Genius", href: "#why-just-genius" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
] as const;
