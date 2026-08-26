/**
 * Structured content for the two service models: recurring Fractional
 * Recruiting partnerships and fixed-scope Talent Projects. Centralized here
 * so copy can change without touching the section markup.
 *
 * Pricing is intentionally not part of this data. Engagement cost is
 * scoped through conversation, not published on the site, so none of
 * these records carry a rate, range, or dollar figure. See
 * lib/internal-pricing.ts for the private pricing architecture; that
 * file is never imported by anything client-rendered.
 */

export interface FractionalPlan {
  name: string;
  positioning: string;
  bestFor: string;
  capacity: string;
  features: string[];
  engagement: string;
  badge?: string;
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
  trackId: string;
}

export const FRACTIONAL_PLANS: FractionalPlan[] = [
  {
    name: "Foundation",
    positioning: "Recruiting capacity when you need it.",
    bestFor:
      "Companies with ongoing hiring needs that need dedicated recruiting support without a full-time recruiter.",
    capacity: "1–2 priority searches",
    features: [
      "Recruiting strategy",
      "Role intake and calibration",
      "Candidate sourcing",
      "Passive candidate outreach",
      "Candidate screening",
      "Candidate presentation",
      "Interview coordination",
      "Candidate communication",
      "Weekly pipeline reporting",
      "Hiring-manager partnership",
    ],
    engagement: "90-day minimum",
    ctaLabel: "Let’s Talk",
    ctaHref: "#contact",
    trackId: "pricing_foundation",
  },
  {
    name: "Growth",
    positioning: "Your fractional recruiting partner.",
    badge: "Most Popular",
    featured: true,
    bestFor: "Companies actively scaling and hiring across multiple functions.",
    capacity: "3–5 concurrent searches",
    features: [
      "Everything in Foundation",
      "Weekly hiring-manager and leadership syncs",
      "Talent-market mapping",
      "Interview process optimization",
      "ATS ownership",
      "Compensation-market insight",
      "Employer messaging and outreach strategy",
      "Offer support",
      "Hiring planning",
    ],
    engagement: "90-day minimum",
    ctaLabel: "Let’s Talk",
    ctaHref: "#contact",
    trackId: "pricing_growth",
  },
  {
    name: "Embedded",
    positioning: "A recruiting function without the buildout.",
    badge: "Limited Availability",
    bestFor:
      "Companies that need a full embedded recruiting function. We take on one Embedded partnership at a time, so it gets the attention a real internal hire would.",
    capacity: "5+ concurrent searches",
    features: [
      "Everything in Growth",
      "Embedded partnership with leadership",
      "Recruiting operations",
      "Hiring strategy and workforce planning",
      "Your company’s core hiring and interview process, designed to last beyond this engagement",
      "Hands-on coaching so hiring managers can run interviews and evaluate candidates independently",
      "Employer branding support",
    ],
    engagement: "Custom 3–6 month engagement",
    ctaLabel: "Check Availability",
    ctaHref: "#contact",
    trackId: "pricing_embedded",
  },
];

export interface TalentProject {
  id: string;
  category: string;
  name: string;
  description: string;
  deliverables: string[];
  duration?: string;
  ctaLabel: string;
  ctaHref: string;
}

export const TALENT_PROJECTS: TalentProject[] = [
  {
    id: "ats-setup",
    category: "Systems",
    name: "ATS Setup + Optimization",
    description:
      "Set up or clean up the systems and workflows that power your recruiting process.",
    deliverables: [
      "ATS configuration",
      "Hiring and interview stages",
      "Scorecards and templates",
      "Reporting and automations",
    ],
    ctaLabel: "Discuss Project",
    ctaHref: "#contact",
  },
  {
    id: "process-audit",
    category: "Process",
    name: "Recruiting Process Audit",
    description:
      "Identify what’s slowing down your hiring process and get a practical roadmap to fix it.",
    deliverables: [
      "Current-state assessment",
      "Funnel and bottleneck analysis",
      "Interview and ATS review",
      "30/60/90-day action plan",
    ],
    ctaLabel: "Discuss Project",
    ctaHref: "#contact",
  },
  {
    id: "process-design",
    category: "Process",
    name: "Hiring Process Design",
    description:
      "Build a consistent, scalable hiring process before recruiting volume gets out of control.",
    deliverables: [
      "Intake and job description framework",
      "Interview structure and scorecards",
      "Candidate communication framework",
      "Hiring SOP",
    ],
    ctaLabel: "Discuss Project",
    ctaHref: "#contact",
  },
  {
    id: "sourcing-sprint",
    category: "Sourcing",
    name: "Talent Sourcing Sprint",
    description: "Focused sourcing support for roles that are proving difficult to fill.",
    deliverables: [
      "Candidate profile calibration",
      "Talent-market mapping",
      "Passive candidate outreach",
      "Candidate presentation",
    ],
    duration: "2–4 weeks",
    ctaLabel: "Discuss Project",
    ctaHref: "#contact",
  },
  {
    id: "job-architecture",
    category: "Systems",
    name: "Job Architecture + Scorecards",
    description:
      "Create the structure your hiring team needs to consistently evaluate the right candidates.",
    deliverables: [
      "Job description framework",
      "Role competencies and candidate profile",
      "Scorecards and interview criteria",
    ],
    ctaLabel: "Discuss Project",
    ctaHref: "#contact",
  },
  {
    id: "hiring-strategy-intensive",
    category: "Strategy",
    name: "Hiring Strategy Intensive",
    description:
      "A focused working session to clarify your hiring priorities, recruiting strategy, and next steps.",
    deliverables: [
      "Hiring plan and role prioritization",
      "Recruiting strategy and capacity",
      "Written strategy and action plan",
    ],
    duration: "Half-day or full-day",
    ctaLabel: "Discuss Project",
    ctaHref: "#contact",
  },
];
