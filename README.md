# Jadvix Academy — Website

Public marketing website for **Jadvix Academy**, the training arm of **Jadvix LTD**
(Ruislip, UK · Chennai & Coimbatore, India). The Academy runs a 10-month,
milestone-gated, train-to-hire program: *Full Stack Development with Agentic AI*.

This is a **static frontend** (no backend / no database). It builds to plain
HTML/CSS/JS and deploys anywhere, including Vercel.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (brand tokens in `tailwind.config.ts`)
- **lucide-react** icons; **next/font** for Space Grotesk (display) + Inter (body)
- **zod** for form validation
- **Vitest** for unit tests
- Static export via `output: "export"` in `next.config.ts`

## Project structure

```
src/
  app/                 App Router pages + SEO routes
    page.tsx           Home
    program/           Program & pipeline
    curriculum/        Curriculum
    evaluations/       Evaluations & internship
    fees/              Fees + interactive calculator
    apply/             Application / enquiry form
    faq/               FAQ accordion
    about/             About
    contact/           Contact form + offices
    legal/             terms · refund · privacy
    sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx, icon.svg
  components/          Header, Footer, PipelineDiagram, FeeCalculator,
                       FAQAccordion, forms/, ui/
  content/
    academy.ts         ⭐ SINGLE SOURCE OF TRUTH — all program facts
  lib/
    fees.ts            Fee quoting (pure, tested)
    refund.ts          Refund calculation per policy 4.6 (pure, tested)
    validation.ts      zod schemas + honeypot (tested)
    forms.ts           Stubbed static form submit (endpoint via env)
    cn.ts
public/brand/          Logos (⚠ placeholders — replace with official SVGs)
```

## Single source of truth

**All** program facts — fees, durations, rules, curriculum, policy, FAQ,
navigation — live in [`src/content/academy.ts`](src/content/academy.ts) and are
imported by every page. **Never hard-code numbers or policy text in components.**
Change a fee or a rule there and it updates everywhere.

Open policy questions and missing content are collected in the `TODOS` array in
that file (see **Outstanding TODOs** below).

## Getting started

```bash
npm install
npm run dev            # http://localhost:3000
```

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build + static export to `out/` |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Run the Vitest unit tests |

Before shipping: `npm run lint && npm run typecheck && npm run test && npm run build`.

## Environment

Copy `.env.example` to `.env.local`. **No secrets are required** to run or build.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Optional public form endpoint (e.g. Formspree). Blank = stubbed demo submit, no data stored. |
| `NEXT_PUBLIC_CONTACT_EMAIL` / `NEXT_PUBLIC_CONTACT_PHONE` | Public contact details (shown as TODO until set). |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata / sitemap / OG. |

> Public env vars are embedded in the client bundle — never put secret keys here.

## Forms

The Apply and Contact forms validate with zod, include a honeypot and a
client-side rate limit, and submit through `src/lib/forms.ts`. With no
`NEXT_PUBLIC_FORM_ENDPOINT` set they resolve as a **demo submission** (nothing is
stored or sent). To collect submissions, point `NEXT_PUBLIC_FORM_ENDPOINT` at a
public form backend.

## Deploying to Vercel

1. Push this repo to GitHub and import it in Vercel.
2. Framework preset: **Next.js** (Vercel detects it automatically).
   - Build command: `next build` · Output: handled by Next.
3. Set environment variables (at least `NEXT_PUBLIC_SITE_URL`) in the Vercel
   project settings.
4. Deploy.

Because the site is a static export, it can also be hosted on any static host
(Netlify, Cloudflare Pages, S3/CloudFront, GitHub Pages) by serving the `out/`
directory produced by `npm run build`.

## Brand

See [`CLAUDE.md`](CLAUDE.md) for the full brand and content rules. In short:
navy dominant, blue primary accent, orange for CTAs, red sparingly; a
blue/red/orange tri-color stripe is the recurring motif. Logos must never be
recolored, stretched, or cropped — white logo on dark, dark logo on light.

## Outstanding TODOs

These are tracked in `TODOS` in `src/content/academy.ts` and surfaced in the UI
where relevant:

- **Replace placeholder logos** in `public/brand/` with the official Jadvix SVGs.
- Confirm **academy email & phone** (currently placeholders).
- Policy: what happens **after the 2 retry attempts** are used up.
- Operations: **intern capacity per cohort** and **cohort start dates**.
- Fees: **stipend amount** (intentionally not published) and **international
  pricing** (only INR is defined).
- Legal: **Privacy Policy** and **Terms** are drafts — review with legal.
- Forms: connect a **real form endpoint** if you want to collect submissions.
