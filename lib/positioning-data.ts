/**
 * The four Un-Agency beliefs, shared between Positioning.tsx (Home, full
 * dark treatment) and WhyFractional.tsx (/fractional-recruiting, light
 * treatment). Centralized so the two pages state the same philosophy in
 * the same words rather than drifting apart over future edits.
 */

export interface UnAgencyBelief {
  title: string;
  description: string;
}

export const UN_AGENCY_BELIEFS: UnAgencyBelief[] = [
  {
    title: "Partnership economics",
    description:
      "We’re paid for the engagement, not a fee every time someone accepts an offer.",
  },
  {
    title: "Full pipeline visibility",
    description:
      "You see search progress and candidate status as it happens, not just when we’ve got someone to show you.",
  },
  {
    title: "We build it, you keep it",
    description:
      "Scorecards, process, and market intel stay with your team after the engagement ends.",
  },
  {
    title: "Capacity that flexes",
    description:
      "Add recruiting support when hiring accelerates, without adding headcount you’re not ready for.",
  },
];
