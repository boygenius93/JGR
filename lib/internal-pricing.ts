/**
 * INTERNAL ONLY — JGR pricing guardrails.
 *
 * This file exists to preserve JGR's internal pricing architecture for
 * future authorized use (sales tooling, proposal generation, CRM
 * workflows, or an internal AI system), NOT for anything rendered on
 * the public website.
 *
 * Nothing on justgeniusrecruiting.com / jgrtalent.com imports this file.
 * It is not wired into any page, component, API route, or client bundle.
 * Do not import it from anything under app/ or components/ — doing so
 * would put these numbers into the public HTML/JS output. If a future
 * feature genuinely needs this data (e.g. an authenticated internal
 * tool), keep the consuming code server-only and never pass these
 * values as props into anything client-rendered.
 *
 * These are internal guardrails, not published rates — actual quotes
 * are set through conversation and can vary from these figures.
 */

export const INTERNAL_TALENT_PROJECT_PRICING = {
  "Talent Strategy Intensive": "$1,500",
  "Talent Acquisition Audit": "$2,500–$3,500",
  "ATS Optimization": "$2,500+",
  "ATS Implementation": "$4,000–$5,000+",
  "Interview Process / Scorecard Design": "$2,500–$4,000",
  "Compensation / Talent Market Intelligence": "$1,500–$3,000",
  "Sourcing Sprint": "$2,500–$4,000",
  "Recruiting Sprint": "$4,000–$6,000+",
} as const;

export const INTERNAL_RECURRING_PRICING = {
  "Recruiting Partner": "$4,500–$6,500/month",
  "Fractional Talent Partner": "$7,500–$10,000/month",
  "Embedded Talent Partner": "$12,000–$15,000+/month",
  "Strategic / Custom": "$15,000–$20,000+",
} as const;
