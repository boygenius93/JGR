export const INDUSTRY_OPTIONS = ["Healthcare / Healthtech", "SaaS", "Other"] as const;
export const SUPPORT_OPTIONS = [
  "Fractional Recruiting Partnership",
  "Talent Project",
  "Not Sure Yet",
] as const;
export const STAGE_OPTIONS = [
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
  "Growth / Established",
  "Other",
] as const;

export type Industry = (typeof INDUSTRY_OPTIONS)[number];
export type SupportType = (typeof SUPPORT_OPTIONS)[number];
export type Stage = (typeof STAGE_OPTIONS)[number];

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  title: string;
  stage: string;
  industry: string;
  openRoles: string;
  hiringFor: string;
  supportType: string;
  message: string;
  /** Honeypot — real users never see or fill this field. */
  website?: string;
  /** Client-render timestamp (ms) — used to reject implausibly fast bot submissions. */
  renderedAt?: number;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

const MAX_LENGTHS: Partial<Record<keyof ContactFormData, number>> = {
  name: 120,
  email: 254,
  company: 160,
  title: 120,
  openRoles: 40,
  hiringFor: 1000,
  message: 3000,
};

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!data.name?.trim()) errors.name = "Name is required.";
  if (!data.email?.trim()) {
    errors.email = "Work email is required.";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.company?.trim()) errors.company = "Company is required.";
  if (!data.industry?.trim()) errors.industry = "Select an industry.";
  if (!data.supportType?.trim()) errors.supportType = "Select the type of support you need.";
  if (!data.hiringFor?.trim()) errors.hiringFor = "Let us know what you're hiring for.";

  for (const [key, max] of Object.entries(MAX_LENGTHS) as [keyof ContactFormData, number][]) {
    const value = data[key];
    if (typeof value === "string" && value.length > max) {
      errors[key] = `Keep this under ${max} characters.`;
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

/** Basic bot heuristics: filled honeypot, or submitted implausibly fast. */
export function looksLikeSpam(data: ContactFormData): boolean {
  if (data.website && data.website.trim().length > 0) return true;
  if (typeof data.renderedAt === "number") {
    const elapsed = Date.now() - data.renderedAt;
    if (elapsed >= 0 && elapsed < 1500) return true;
  }
  return false;
}
