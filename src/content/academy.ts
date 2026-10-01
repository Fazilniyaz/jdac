/**
 * ============================================================================
 *  JADVIX ACADEMY — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Every program fact (fees, durations, rules, curriculum, policy) lives here
 *  and is imported by the pages. Do NOT hard-code numbers or policy text in
 *  components — fees and rules change, and this file is where they change.
 *
 *  Guardrails (see CLAUDE.md):
 *    - No invented facts: no testimonials, student counts, placement rates,
 *      partner names, instructor names, stipend amounts, or accreditation
 *      claims. Missing info is a visible TODO, collected in `TODOS` below.
 *    - Never promise a guaranteed job. Use "a direct pathway to employment".
 * ============================================================================
 */

export const company = {
  legalName: "Jadvix LTD",
  academyName: "Jadvix Academy",
  tagline: "Full Stack Development with Agentic AI",
  programType: "10-month, milestone-gated, train-to-hire program",
  footerLine: "Jadvix LTD · Ruislip, UK · Chennai & Coimbatore, India",
} as const;

/** Office locations. Keep factual — do not invent addresses. */
export const offices = [
  { city: "Ruislip", country: "United Kingdom", region: "uk" },
  { city: "Chennai", country: "India", region: "in" },
  { city: "Coimbatore", country: "India", region: "in" },
] as const;

/**
 * Contact details are placeholders until confirmed. Read from env where set,
 * otherwise show a clearly-marked TODO. See CLAUDE.md.
 */
export const contact = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "TODO: add academy email",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "TODO: add contact number",
  emailIsPlaceholder: !process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  phoneIsPlaceholder: !process.env.NEXT_PUBLIC_CONTACT_PHONE,
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://academy.jadvix.com";

/* ------------------------------------------------------------------ */
/* 4.1 Overview                                                        */
/* ------------------------------------------------------------------ */

export const overview = {
  trainingMonths: 10,
  internshipMonths: 6,
  delivery: "Online & Offline (hybrid)",
  stages: ["Frontend", "Backend", "Agentic AI"] as const,
  coordinators: [
    {
      role: "Technical Coordinator",
      summary:
        "Curriculum delivery, code reviews, gate-test design and evaluation.",
    },
    {
      role: "English Coordinator",
      summary:
        "Professional communication, client-facing readiness, spoken and written English coaching.",
    },
  ],
  // Worded as a pathway, never a guarantee (see guardrails).
  outcome:
    "A direct pathway to full-time employment at Jadvix LTD after the 6-month internship, subject to clearing each evaluation and Jadvix LTD's confirmed intern capacity per cohort.",
} as const;

/** The four "Why Jadvix Academy" objectives shown on Home. */
export const objectives = [
  {
    title: "Learn by building",
    body: "Guided, client-style project work and real code-review cycles — not passive lectures.",
  },
  {
    title: "Milestone-gated progress",
    body: "Each stage ends in an evaluation you must clear to unlock the next stage and its internship.",
  },
  {
    title: "Agentic AI, built in",
    body: "Modern AI-assisted engineering with Claude Code runs through the whole program, not as an afterthought.",
  },
  {
    title: "A pathway to hire",
    body: "Clear a stage, earn a paid internship; perform in the internship, earn a full-time offer at Jadvix LTD.",
  },
] as const;

/** Skills/tech taught across the program — used in the marquee row. */
export const marqueeSkills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Node.js",
  "REST APIs",
  "SQL & NoSQL",
  "Git & GitHub",
  "Claude Code",
  "Agentic AI",
  "Full Stack",
] as const;

export const keyStats = [
  { value: "10 months", label: "Structured training" },
  { value: "6 months", label: "Paid internship" },
  { value: "Hybrid", label: "Online & offline delivery" },
  { value: "UK-issued", label: "Jadvix Academy certificate" },
] as const;

/* ------------------------------------------------------------------ */
/* 4.2 / 4.4  Pipeline & stages                                       */
/* ------------------------------------------------------------------ */

export type StageId = "frontend" | "backend" | "agentic";

export interface Stage {
  id: StageId;
  index: number;
  name: string;
  months: string;
  monthCount: number;
  summary: string;
  internRole: string;
  gate: {
    name: string;
    when: string;
    onPass: string;
    onFail: string;
  };
}

export const stages: Stage[] = [
  {
    id: "frontend",
    index: 1,
    name: "Stage 1 — Frontend Development",
    months: "Months 1–4",
    monthCount: 4,
    summary:
      "Frontend Development with Claude Code: core web, React, and AI-assisted engineering.",
    internRole: "Frontend Development Intern",
    gate: {
      name: "Frontend Evaluation",
      when: "End of Month 4",
      onPass: "Frontend Development Intern offer; cleared for Stage 2.",
      onFail: "Continue Stage 1; retry after 2 weeks (max 2 attempts).",
    },
  },
  {
    id: "backend",
    index: 2,
    name: "Stage 2 — Backend Development",
    months: "Months 5–8",
    monthCount: 4,
    summary:
      "Server-side fundamentals, data, and full stack integration with your Stage 1 work.",
    internRole: "Backend Development Intern",
    gate: {
      name: "Backend Evaluation (practical test + full stack project)",
      when: "End of Month 8",
      onPass: "Backend Development Intern offer; cleared for Stage 3.",
      onFail: "Continue Stage 2; retry after 2 weeks (max 2 attempts).",
    },
  },
  {
    id: "agentic",
    index: 3,
    name: "Stage 3 — Agentic AI",
    months: "Months 9–10",
    monthCount: 2,
    summary:
      "LLM-powered agents, tool use, and shipping a production-style agentic capstone.",
    internRole: "Agentic AI Development Intern",
    gate: {
      name: "Agentic AI Capstone",
      when: "End of Month 10",
      onPass: "Agentic AI Development Intern offer (6 months).",
      onFail: "Continue Stage 3; retry after 2 weeks (max 2 attempts).",
    },
  },
];

/** Sequential unlocking rule — applies to lateral entry too. */
export const sequentialRule = {
  short: "Every evaluation must be cleared to unlock the next stage.",
  points: [
    "Backend cannot begin until the Frontend evaluation is cleared.",
    "Agentic AI cannot begin until the Backend evaluation (test AND project) is cleared.",
    "The same sequential rule applies to lateral (single-stage) entry.",
    "Each pass unlocks the matching 6-month paid internship.",
  ],
} as const;

export const retryPolicy = {
  coolingOffWeeks: 2,
  maxAttempts: 2,
  summary:
    "Students who fail an evaluation stay in their current stage, continue coursework, and may retry after a 2-week cooling-off period (maximum 2 attempts).",
} as const;

/* ------------------------------------------------------------------ */
/* 4.3 Curriculum                                                     */
/* ------------------------------------------------------------------ */

export interface CurriculumArea {
  area: string;
  coverage: string;
}

export interface CurriculumStage {
  stageId: StageId;
  name: string;
  months: string;
  areas: CurriculumArea[];
}

export const curriculum: CurriculumStage[] = [
  {
    stageId: "frontend",
    name: "Stage 1 — Frontend",
    months: "Months 1–4",
    areas: [
      {
        area: "Core Frontend",
        coverage:
          "HTML5, CSS3, JavaScript ES6+, responsive design, Git/GitHub workflow.",
      },
      {
        area: "Modern Framework",
        coverage: "React.js — components, hooks, state management, routing.",
      },
      {
        area: "AI-Assisted Engineering",
        coverage:
          "Frontend enhancement and productivity workflows using Claude Code.",
      },
      {
        area: "Applied Practice",
        coverage: "Guided client-style project builds and code-review cycles.",
      },
    ],
  },
  {
    stageId: "backend",
    name: "Stage 2 — Backend",
    months: "Months 5–8",
    areas: [
      {
        area: "Server-Side Fundamentals",
        coverage:
          "Node.js / Express or equivalent, REST API design, authentication & authorization.",
      },
      {
        area: "Data",
        coverage: "SQL & NoSQL design, query optimization, data modelling.",
      },
      {
        area: "Integration",
        coverage:
          "Full stack integration with Stage 1 frontend projects, deployment basics.",
      },
      {
        area: "Applied Practice",
        coverage: "End-to-end feature delivery under code review.",
      },
      {
        area: "Evaluation Project",
        coverage: "An individually assigned full stack project.",
      },
    ],
  },
  {
    stageId: "agentic",
    name: "Stage 3 — Agentic AI",
    months: "Months 9–10",
    areas: [
      {
        area: "Agentic Systems",
        coverage: "LLM-powered agents, tool use, workflow automation.",
      },
      {
        area: "Applied AI Engineering",
        coverage: "Building and shipping agentic features into full stack apps.",
      },
      {
        area: "Capstone",
        coverage:
          "A production-style agentic feature reviewed against Jadvix engineering standards.",
      },
    ],
  },
];

/** Supporting tracks run across all stages. */
export const supportingTracks = overview.coordinators;

/* ------------------------------------------------------------------ */
/* 4.4 Evaluations & Internship                                       */
/* ------------------------------------------------------------------ */

export const backendEvaluation = {
  parts: [
    {
      name: "Practical test",
      detail: "A timed, hands-on backend test designed by the Technical Coordinator.",
    },
    {
      name: "Full stack project",
      detail:
        "An individually assigned full stack project — assigned to every student — integrating Stage 1 and Stage 2 work.",
    },
  ],
  note: "Both parts must be cleared to pass the Backend Evaluation and unlock Stage 3.",
} as const;

export const internship = {
  lengthMonths: 6,
  // Do NOT state an amount (guardrail).
  stipend: "Paid, as per Jadvix internship policy.",
  work:
    "Interns work on live or client-adjacent projects under supervision of the Technical Coordinator and an assigned engineering lead.",
  parallelCoursework:
    "Frontend and Backend interns may continue coursework in parallel with their internship.",
  terms:
    "Interns sign standard confidentiality and IP assignment terms before starting.",
  capacityNote:
    "Internship offers are capped by Jadvix LTD's confirmed intern capacity per cohort.",
  conversion:
    "Conversion to a full-time employee (all three tracks) is based on code-review scores, sprint/task completion rate, reliability, and coordinator sign-off — leading to a full-time offer at Jadvix LTD.",
} as const;

export const completionReward = {
  summary:
    "Students who pass the Agentic AI capstone and convert to full-time employment receive a 1 gram gold coin and a UK-issued Jadvix Academy certificate.",
  items: ["1 gram gold coin", "UK-issued Jadvix Academy certificate"],
} as const;

/* ------------------------------------------------------------------ */
/* 4.5 Fees (INR)                                                     */
/* ------------------------------------------------------------------ */

export const currency = { code: "INR", symbol: "₹" } as const;

export interface FeePlan {
  oneTime: number;
  monthlyAmount: number;
  monthlyCount: number;
  get monthlyTotal(): number;
}

export interface FeeOption {
  id: "full" | StageId;
  label: string;
  durationMonths: number;
  oneTime: number;
  monthlyAmount: number;
  monthlyCount: number;
}

export const MONTHLY_RATE = 7500;

/** Pricing table. monthlyTotal is derived in src/lib/fees.ts (no duplication). */
export const feeOptions: FeeOption[] = [
  {
    id: "full",
    label: "Full pipeline (Stages 1–3)",
    durationMonths: 10,
    oneTime: 65000,
    monthlyAmount: MONTHLY_RATE,
    monthlyCount: 10,
  },
  {
    id: "frontend",
    label: "Stage 1 — Frontend",
    durationMonths: 4,
    oneTime: 26000,
    monthlyAmount: MONTHLY_RATE,
    monthlyCount: 4,
  },
  {
    id: "backend",
    label: "Stage 2 — Backend",
    durationMonths: 4,
    oneTime: 26000,
    monthlyAmount: MONTHLY_RATE,
    monthlyCount: 4,
  },
  {
    id: "agentic",
    label: "Stage 3 — Agentic AI",
    durationMonths: 2,
    oneTime: 15000,
    monthlyAmount: MONTHLY_RATE,
    monthlyCount: 2,
  },
];

export const feeNotes = {
  oneTimeWhen: "One-time fees are paid at enrollment.",
  monthlyWhen: "Monthly fees are auto-debited.",
  monthlyPremium:
    "The monthly plan carries roughly a 15% premium to cover admin overhead.",
} as const;

export const feeAdjustments = [
  {
    trigger: "Selected as a Frontend / Backend intern while continuing coursework",
    effect: "50% reduction on the remaining stage fee during the active internship.",
  },
  {
    trigger: "Converted to a full-time employee",
    effect: "Any remaining course balance is waived.",
  },
  {
    trigger: "Agentic AI capstone passed",
    effect: "No further course fees are due (all stages complete).",
  },
] as const;

export const feeCollection = [
  {
    audience: "Indian students",
    method: "Razorpay (UPI Autopay for monthly debits).",
  },
  {
    audience: "International students",
    method:
      "Stripe Billing (recurring card subscription with automated retry on failed payments).",
  },
] as const;

/* ------------------------------------------------------------------ */
/* 4.6 Refund Policy                                                  */
/* ------------------------------------------------------------------ */

export const refundPolicy = {
  oneTime:
    "One-time payment: no refund. This applies to the full pipeline and to any single stage.",
  monthly:
    "Monthly installments: refund for the remaining months, counted from the current month. On withdrawal the auto-debit is cancelled and the current month's installment (if already debited) plus all remaining months are refunded or not charged. Installments for completed months are not refunded.",
  method:
    "Refunds are returned to the original payment method via Razorpay or Stripe.",
} as const;

/* ------------------------------------------------------------------ */
/* Open policy questions — surfaced as visible TODOs                  */
/* ------------------------------------------------------------------ */

export const TODOS = [
  "Policy: what happens after the 2 failed retry attempts are used up (not decided).",
  "Policy: failed-payment access suspension and reinstatement policy (not decided).",
  "Operations: exact intern capacity per cohort and cohort start dates (not confirmed).",
  "Fees: internship stipend amount (intentionally not published).",
  "Fees: international pricing — only INR is currently defined.",
  "Contact: confirm academy email and phone number (currently placeholders).",
  "Brand: replace placeholder logos in /public/brand with the official Jadvix SVGs.",
  "Legal: Privacy Policy is a draft and must be reviewed by legal.",
  "Forms: wire Apply/Contact forms to a real endpoint (currently stubbed, no storage).",
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                */
/* ------------------------------------------------------------------ */

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "How does the program work?",
    a: "It is a 10-month, milestone-gated program in three stages — Frontend, Backend, then Agentic AI. Each stage ends in an evaluation you must clear to unlock the next stage and a matching 6-month paid internship. Strong internship performance leads to a full-time offer at Jadvix LTD.",
  },
  {
    q: "What happens if I fail a gate evaluation?",
    a: "You stay in your current stage, keep attending coursework, and can retry after a 2-week cooling-off period, up to a maximum of 2 attempts. (The policy for what happens after both retries are used is still being finalised.)",
  },
  {
    q: "Can I keep studying if I don't get an internship offer?",
    a: "Yes. Internship offers are capped by Jadvix LTD's confirmed intern capacity per cohort, so clearing an evaluation does not guarantee a place. You continue your coursework regardless, and clearing the gate keeps you eligible.",
  },
  {
    q: "What is your refund policy?",
    a: "One-time payments are non-refundable. On the monthly plan, if you withdraw we cancel the auto-debit and refund (or do not charge) the current month plus all remaining months; completed months are not refunded. Refunds go back to your original payment method.",
  },
  {
    q: "How do I pay?",
    a: "Indian students pay via Razorpay (UPI Autopay for monthly debits). International students pay via Stripe Billing (recurring card subscription). You can choose a one-time payment or a monthly plan.",
  },
  {
    q: "Is the program online or offline?",
    a: "Both. Delivery is hybrid — online and offline — so you can take part from Chennai, Coimbatore, or remotely.",
  },
  {
    q: "What certificate do I get?",
    a: "A UK-issued Jadvix Academy certificate. Students who pass the Agentic AI capstone and convert to full-time employment also receive a 1 gram gold coin.",
  },
  {
    q: "Who are the coordinators?",
    a: "Each cohort has a Technical Coordinator (curriculum delivery, code reviews, gate-test design and evaluation) and an English Coordinator (professional communication and client-facing readiness).",
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { href: "/program", label: "Program" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/evaluations", label: "Evaluations & Internship" },
  { href: "/fees", label: "Fees" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/legal/terms", label: "Terms & Conditions" },
  { href: "/legal/refund", label: "Refund Policy" },
  { href: "/legal/privacy", label: "Privacy Policy" },
] as const;
