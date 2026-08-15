/**
 * Structured content for the two service models: recurring Fractional
 * Recruiting partnerships and fixed-scope Talent Projects. Centralized here
 * so pricing/copy can change without touching the section markup.
 */

export interface FractionalPlan {
  name: string;
  positioning: string;
  price: string;
  priceSuffix: string;
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
    price: "$8,000",
    priceSuffix: "/ month",
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
    price: "$12,000",
    priceSuffix: "/ month",
    badge: "Most Popular",
    featured: true,
    bestFor: "Companies actively scaling and hiring across multiple functions.",
    capacity: "3–5 concurrent searches",
    features: [
      "Everything in Foundation",
      "Deeper hiring-manager partnership",
      "Talent-market mapping",
      "Interview process optimization",
      "ATS ownership",
      "Hiring dashboards and reporting",
      "Compensation-market insight",
      "Employer messaging and outreach strategy",
      "Offer support",
      "Weekly leadership sync",
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
    price: "$18,000",
    priceSuffix: "+ / month",
    bestFor:
      "Companies that need deeper recruiting capacity or an embedded talent acquisition partner.",
    capacity: "5+ concurrent searches",
    features: [
      "Everything in Growth",
      "Embedded partnership with leadership",
      "Recruiting operations",
      "Hiring strategy and workforce planning",
      "Interview architecture",
      "Hiring-manager enablement",
      "Recruiting process design",
      "Recruiting analytics",
      "Employer branding support",
      "Expanded recruiting capacity",
    ],
    engagement: "Custom 3–6 month engagement",
    ctaLabel: "Build Your Recruiting Function",
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
  startingPrice: string;
  priceRange?: string;
  priceNote: string;
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
    startingPrice: "$2,500",
    priceNote: "Scope varies by ATS, complexity, and company size.",
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
    startingPrice: "$2,000",
    priceNote: "Scope varies by team size and process complexity.",
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
    startingPrice: "$3,500",
    priceNote: "Scope varies by number of roles and hiring functions covered.",
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
    startingPrice: "$3,500",
    priceRange: "$3,500–$6,000+",
    priceNote: "Price depends on role complexity, seniority, market scarcity, and number of roles.",
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
    startingPrice: "$1,500",
    priceNote: "Price may scale based on number of roles.",
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
    startingPrice: "$1,500",
    priceNote: "Deliverable is a written strategy and action plan.",
    duration: "Half-day or full-day",
    ctaLabel: "Discuss Project",
    ctaHref: "#contact",
  },
];
