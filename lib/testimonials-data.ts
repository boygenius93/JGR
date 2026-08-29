/**
 * Real testimonials sourced from Derek's LinkedIn recommendations, trimmed
 * to their strongest complete sentences. Nothing here is fabricated or
 * paraphrased beyond cutting for length — attribution (name, title,
 * company) reflects who each person was and where they worked with Derek
 * at the time, not necessarily their current employer.
 */

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "One of Derek’s most commendable strengths is his proactive approach to talent acquisition. He has taken the initiative to thoroughly understand our company culture, team dynamics, and hiring needs.",
    name: "Karima Alvarez",
    title: "Talent Acquisition Leader",
    company: "Origin",
  },
  {
    quote:
      "From the moment Derek joined he was quick to understand fit, ask questions when he needed to, and request feedback from myself and hiring managers alike.",
    name: "Emma Pessereau",
    title: "Recruiter",
    company: "Workramp",
  },
  {
    quote:
      "I was blown away by his genuine passion for people, his ability to learn and adapt quickly, and his infectious joy. He is a gifted relationship builder as well!",
    name: "En-Szu Hu-Van Wright",
    title: "Head of Talent Strategy",
    company: "Chili Piper",
  },
  {
    quote:
      "I loved working with Derek at Cartwheel. He’s one of those colleagues who brings real steadiness and kindness into fast-moving, high-pressure work. He handled complex hiring needs across several functions, and he always did it with clear judgment.",
    name: "Sav Cole, MS, MBA, LMFT",
    title: "Clinical Solutions Manager",
    company: "Cartwheel",
  },
  {
    quote:
      "He proactively volunteered to support key initiatives, including training new hires and helping streamline recruiting processes to improve efficiency and candidate experience. Derek is a trusted team player who leads by example, builds strong relationships, and delivers results.",
    name: "Donesha Gipson",
    title: "VP, Talent",
    company: "Hazel Health",
  },
  {
    quote:
      "Derek is the man! He nailed every placement we ever worked on together. He was excellent at sourcing candidates that fit the bill for what we were looking for.",
    name: "Robert Scarpati, CPA, MBA",
    title: "VP, Finance & Controller",
    company: "Hazel Health",
  },
];
