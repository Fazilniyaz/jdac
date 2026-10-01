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
- `lucide-react` icons; `next/font` (Space Grotesk display, Inter body)
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
  light. **Never recolor, stretch, or crop.** The current files are
  **placeholders** — replace with the official SVGs (a TODO).
- **Colors** (tokens in `tailwind.config.ts`): Blue `#4599D3`, Red `#E01E26`,
  Orange `#F05623`, Navy `#0B1F33`, Ink `#040707`, greys `#F2F6FA` / `#D5DEE7`.
  **Navy dominant, blue primary accent, orange for CTAs, red sparingly.**
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
