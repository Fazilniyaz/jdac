# CLAUDE.md — Jadvix Academy Website

Guidance for working in this repository.

## What this is

The public, **static** marketing website for **Jadvix Academy** (training arm of
**Jadvix LTD**). A 10-month, milestone-gated, train-to-hire program: *Full Stack
Development with Agentic AI*. Frontend only — **no backend, no database**.

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Static export (`output: "export"` in `next.config.ts`) — deploy-ready for Vercel
  and any static host
- `lucide-react` icons; fonts shared with jadvix.uk: Clash Display (headings) and
  Satoshi (body), self-hosted in `src/app/fonts/`, plus Space Grotesk for labels
- `zod` validation; `vitest` unit tests

## The one rule: single source of truth

**All program facts live in `src/content/academy.ts`.** Fees, durations, stage
rules, curriculum tables, evaluations, refund policy, FAQ, navigation, office
list — everything. Pages and components import from there.

- **Never** hard-code a fee, duration, percentage, or policy sentence in a
  component. Fees and policy change; this file is where they change.
- Derived values (e.g. monthly totals) are computed in `src/lib/` (`fees.ts`),
  never duplicated as literals.
- Missing or undecided content goes in the `TODOS` array in `academy.ts` and is
  surfaced visibly in the UI — never silently invented.

## Brand rules

- **Logos** (`public/brand/`): white logo on dark/navy backgrounds, dark logo on
  light. **Never recolor, stretch, or crop.** These are the official Jadvix
  SVGs, copied from the jadvix.uk site (`jadvix-main-26/public/`); keep the two
  in sync. The favicon `src/app/icon.svg` is the logo's mark only, cropped
  square from the same artwork.
- **Design system = the company site's.** The Academy is a Jadvix product, so it uses
  the jadvix.uk (`jadvix-main-26`) tokens: brand blue `#1fa6e0`, navy `#041826`,
  one coral "spark" CTA (`btn-spark`, `#ff6a2c`) per screen, Clash Display +
  Satoshi. Classes live in `src/app/globals.css` (`card`, `btn`, `jx-*`).
- **Theme:** light by default, dark via `html[data-theme="dark"]` (toggle in the
  header, stored in `localStorage["jx-theme"]`, same key as jadvix.uk). Use the
  theme tokens (`bg-surface`, `text-ink`, `text-ink-2`, `border-line`, ...),
  never fixed dark/light colours, or one theme breaks. `Section tone="navy"` is a
  theme-independent navy band. Tailwind opacity modifiers (`/50`) do not work on
  the CSS-variable colours.
- **Radii are restrained** (inputs 8 · cards 12 · panels 18); buttons stay pills.
- **Imagery:** photos in `public/images/` (WebP, ~50–90 KB). Two were generated
  for this site; the rest come from the jadvix.uk library. Do not use the team
  portraits from jadvix.uk here — on the Academy they would read as instructors.
- **Motion:** opening intro (`IntroCurtain`, once per session), hero word rise,
  scroll `Reveal`. All of it switches off for `prefers-reduced-motion`.
- **After changing `tailwind.config.ts`, restart `npm run dev`** — the running
  dev server keeps the old config and new colour classes silently do nothing.
- The **blue/red/orange tri-color stripe** (`TriStripe`, `.tri-stripe`) is a
  recurring brand motif.
- Tone: confident, clear, honest, professional — not hype. Modern, technical
  typography.

## Guardrails (do not break these)

- **Do not invent facts.** No fake testimonials, student/placement numbers,
  partner or instructor names, stipend amounts, accreditation claims, or
  deadlines. Missing info → a visible `TODO` in `academy.ts`.
- **Do not promise guaranteed jobs.** Internships and employment depend on
  passing evaluations and on Jadvix's confirmed intern capacity per cohort.
  Marketing copy says *"a direct pathway to employment"*, never *"guaranteed job"*.
- **Do not state the stipend amount** — copy says "Paid, as per Jadvix
  internship policy."
- Open policy questions (post-retry outcome, failed-payment policy, cohort
  capacity/dates, stipend, international pricing) are **TODOs**, not decisions to
  make here.
- **No secrets** in the repo or in `NEXT_PUBLIC_*` env vars (those ship to the
  client).

## Forms

Static site: forms (`src/components/forms/`) validate with zod, use a honeypot
+ client-side rate limit, and submit via `src/lib/forms.ts`. With no
`NEXT_PUBLIC_FORM_ENDPOINT` they resolve as a demo submission (no storage).
Wire a public form backend to collect real submissions.

## Accessibility & performance

- WCAG AA: semantic landmarks, skip link, visible focus rings, labelled form
  fields with `aria-describedby` errors, accessible accordion/menu, reduced-motion
  support. Keep it that way.
- Mobile-first and fast (static, minimal JS). Don't add heavy client deps.

## Run / test / build

```bash
npm install
npm run dev        # local dev
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run test       # vitest (fees, refund, validation)
npm run build      # production build + static export to out/
```

**Always run lint, typecheck, test, and build before considering a change done.**
Pure logic (`lib/fees.ts`, `lib/refund.ts`, `lib/validation.ts`) must stay unit
tested — the refund calculator implements policy section 4.6 exactly.
