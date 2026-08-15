# Just Genius Recruiting (JGR) — Website

Marketing and lead-generation site for Just Genius, a fractional recruiting
partner for growing healthcare and SaaS companies (Seed–Series A is the
sweet spot, not an exclusion criterion). Positioning:
**"We build your team while you build your company."**

## Stack

- **Next.js 16** (App Router, TypeScript, static rendering where possible)
- **Tailwind CSS** for styling, with brand tokens in `tailwind.config.ts`
- **Resend** for transactional email (lead notification + prospect confirmation)
- **Vercel Analytics** for lightweight, privacy-respecting conversion tracking
- No database. No authentication. No CRM. This is intentional for V1 — see
  "Future Roadmap" below.

This repository was empty when this build started (no prior app, framework,
or branding to preserve), so the project was scaffolded from scratch rather
than migrated.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY at minimum
npm run dev
```

```bash
npm run lint       # eslint (flat config, eslint-config-next)
npm run typecheck  # tsc --noEmit
npm run build       # production build
```

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes, for the contact form to send email | Server-side only — never exposed to the client. |
| `CONTACT_EMAIL` | No (defaults to `derekj2011@gmail.com`) | Inbox that receives new lead notifications. |
| `RESEND_FROM_EMAIL` | No | Verified sending address in Resend (e.g. `Just Genius <hello@jgrtalent.com>`). Falls back to Resend's shared test sender, which works for development but should be replaced with a verified domain before launch. |
| `NEXT_PUBLIC_BOOKING_URL` | No | Calendly (or similar) link. When set, primary CTAs deep-link to it instead of scrolling to the on-page contact form. |
| `NEXT_PUBLIC_SITE_URL` | No (defaults to a placeholder) | Canonical URL used in metadata, sitemap, and Open Graph tags. Set this to the real production domain. |

See `.env.example` for the full list with inline comments.

## Architecture notes

- **No database.** Contact submissions are validated and emailed directly
  from a server-side API route (`app/api/contact/route.ts`) via Resend. No
  candidate or lead data is persisted anywhere in this app.
- **No auth, no client portal, no CRM.** Out of scope for V1 by design —
  see the prompt's phased roadmap (blog/case studies in Phase 2, client
  portal in Phase 3, internal ops platform in Phase 4).
- **Spam prevention** is a honeypot field plus a minimum-fill-time check
  (`lib/validation.ts`), enough for an unauthenticated marketing form
  without adding a CAPTCHA dependency.
- **Booking URL toggle**: `lib/constants.ts` exports `PRIMARY_CTA_HREF`,
  which resolves to `NEXT_PUBLIC_BOOKING_URL` when set, or `#contact`
  (the on-page form) otherwise. All primary CTAs use this constant so the
  toggle is a single environment variable change.
- **Analytics**: `components/AnalyticsListener.tsx` is a single delegated
  click listener that fires a Vercel Analytics custom event for any element
  carrying `data-track="event_name"` — see `Button`'s `trackId` prop. This
  keeps conversion tracking (form started/submitted, booking click, email
  click) out of individual component logic.
- **Design tokens** (charcoal/ivory/indigo palette, type scale) live in
  `tailwind.config.ts` and `app/globals.css`. Reusable UI primitives are in
  `components/` (Button, Container, SectionHeader, cards, FAQ accordion);
  page sections are in `components/sections/`.
- **SEO**: metadata lives in `app/layout.tsx`; `app/sitemap.ts` and
  `app/robots.ts` use the Next.js file-convention APIs; the Open Graph image
  is generated on the fly by `app/opengraph-image.tsx` (`next/og`), so there's
  no static image asset to keep in sync with copy changes.
- **Only verified claims are published.** The brief listed "6+ years
  recruiting experience," "150+ hires," and "95%+ offer acceptance" as
  *potential* metrics. Only the 6+ years figure is corroborated (it's
  restated in the About Derek copy), so the Proof section uses that plus
  methodology framing — no invented placement counts, testimonials, client
  logos, or case studies.

## Deploying to Vercel

1. Import the repository into Vercel.
2. Set the environment variables above in Project Settings → Environment
   Variables (at minimum `RESEND_API_KEY` and `NEXT_PUBLIC_SITE_URL`).
3. Verify a sending domain in Resend and set `RESEND_FROM_EMAIL` before
   sending real lead emails — the fallback `onboarding@resend.dev` sender
   is for testing only.
4. Deploy. Build command and output are the Next.js defaults
   (`next build`); no custom `vercel.json` is required.

## Future roadmap (not built — architecture leaves room for it)

- **Phase 2**: blog / recruiting insights, case studies, testimonials,
  expanded SEO pages, lead tracking.
- **Phase 3**: client portal, hiring pipeline dashboard, secure document
  sharing.
- **Phase 4**: internal recruiting operations platform, CRM integration,
  AI-assisted sourcing workflows.

None of these require reworking the current foundation — they're additive
routes/integrations on top of the existing App Router structure.
