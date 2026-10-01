import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  GitBranch,
  Bot,
  Users,
  Award,
  Coins,
  Code2,
  Server,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { Marquee } from "@/components/Marquee";
import {
  company,
  objectives,
  keyStats,
  completionReward,
  faqs,
  stages,
  marqueeSkills,
} from "@/content/academy";

const objectiveIcons = [Target, GitBranch, Bot, Users];
const stageIcons = [Code2, Server, Sparkles];
const stageTag: Record<string, string> = {
  frontend: "FRONTEND",
  backend: "BACKEND",
  agentic: "AGENTIC AI",
};

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(55rem 30rem at 85% -5%, rgba(69,153,211,0.30) 0, transparent 60%), radial-gradient(40rem 24rem at -5% 115%, rgba(240,86,35,0.16) 0, transparent 55%)",
          }}
        />
        <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow-pill">Train-to-hire · {company.legalName}</span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.0] sm:text-6xl lg:text-7xl">
              Learn. Build. <br />
              Ship. <span className="accent">Get hired.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-400">
              {company.tagline} — a {company.programType}. Three milestone-gated
              stages, a 6-month paid internship, and a UK-issued certificate: a
              direct pathway to employment at {company.legalName}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/apply" className="btn-primary">
                Apply Now <ArrowUpRight size={16} />
              </Link>
              <Link href="/fees" className="btn-outline">
                View Fees
              </Link>
            </div>
          </div>

          <HeroVisual />
        </div>

        {/* Marquee of skills */}
        <div className="border-y border-white/5 bg-night-800/40">
          <div className="container-page">
            <Marquee items={marqueeSkills} />
          </div>
        </div>
      </section>

      {/* ──────────────────── Why Jadvix (services style) ──────────────────── */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Why Jadvix Academy"
            title={
              <>
                Built to make you <span className="accent">employable.</span>
              </>
            }
          />
          <Link href="/curriculum" className="link-arrow">
            View the curriculum <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((obj, i) => {
            const Icon = objectiveIcons[i] ?? Target;
            return (
              <Card key={obj.title} className="flex h-full flex-col">
                <div className="artframe mb-5 h-28 w-full">
                  <Icon size={40} strokeWidth={1.25} />
                </div>
                <h3 className="text-lg text-white">{obj.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{obj.body}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ──────────────────── Pipeline ──────────────────── */}
      <Section className="pt-0">
        <SectionHeading
          eyebrow="The pathway"
          title={
            <>
              Three stages, three gates, <span className="accent">one pathway.</span>
            </>
          }
          lead="Clear each evaluation to unlock the next stage and its paid internship. Strong internship performance leads to a full-time offer."
        />
        <div className="mt-12">
          <PipelineDiagram compact />
        </div>
        <div className="mt-8">
          <Link href="/program" className="btn-outline">
            Explore the full program <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* ──────────────────── Stages (ecosystem style) ──────────────────── */}
      <Section className="pt-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The program"
            title={
              <>
                Three stages, <span className="accent">one platform.</span>
              </>
            }
            lead="One curriculum, one standard of craft — Frontend to Backend to Agentic AI."
          />
          <Link href="/curriculum" className="link-arrow">
            All curriculum <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stages.map((stage, i) => {
            const Icon = stageIcons[i] ?? Code2;
            return (
              <Card key={stage.id} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="blue">{stageTag[stage.id]}</Badge>
                    <Badge tone="outline">{stage.months}</Badge>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-night-800 text-blue-400">
                    <Icon size={18} />
                  </span>
                </div>
                <BarMotif />
                <h3 className="mt-5 text-xl text-white">{stage.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{stage.summary}</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Link href="/apply" className="btn-blue w-full">
                    Apply
                  </Link>
                  <Link href="/curriculum" className="btn-outline w-full">
                    Details
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ──────────────────── Stats (light surface) ──────────────────── */}
      <Section light>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="eyebrow-pill">About the program</span>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">
              Training that turns effort into <span className="accent">a career.</span>
            </h2>
            <p className="mt-5 text-ink/60">
              Based in the UK and India, Jadvix Academy trains engineers to the
              standard Jadvix teams work to — then hires from within.
            </p>
            <Link href="/about" className="link-arrow mt-6">
              More about us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {keyStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-steel/60 bg-white p-6 shadow-card">
                <p className="font-display text-4xl font-bold text-navy sm:text-5xl">
                  {stat.value}
                </p>
                <div className="mt-3 h-0.5 w-10 bg-blue" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ──────────────────── Completion reward ──────────────────── */}
      <Section>
        <Card className="overflow-hidden">
          <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <Badge tone="orange">
                <Award size={14} /> Completion reward
              </Badge>
              <h2 className="mt-4 text-2xl sm:text-3xl">
                Finish the capstone, go full-time — and it&apos;s{" "}
                <span className="accent">recognised.</span>
              </h2>
              <p className="mt-3 text-slate-400">{completionReward.summary}</p>
            </div>
            <ul className="space-y-3">
              {completionReward.items.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-night-800/60 p-4">
                  {item.toLowerCase().includes("gold") ? (
                    <Coins className="shrink-0 text-orange" />
                  ) : (
                    <Award className="shrink-0 text-blue-300" />
                  )}
                  <span className="font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Section>

      {/* ──────────────────── FAQ teaser ──────────────────── */}
      <Section light className="pt-0">
        <SectionHeading eyebrow="Questions" title="A few quick answers" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {faqs.slice(0, 4).map((f) => (
            <div key={f.q} className="rounded-3xl border border-steel/60 bg-white p-6 shadow-card">
              <h3 className="text-base text-navy">{f.q}</h3>
              <p className="mt-2 text-sm text-ink/60">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/faq" className="btn-outline-dark">
            See all FAQs <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* ──────────────────── Final CTA ──────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(45rem 24rem at 50% 120%, rgba(69,153,211,0.25) 0, transparent 60%)",
          }}
        />
        <div className="container-page relative py-20 text-center sm:py-28">
          <h2 className="text-4xl sm:text-5xl">
            Ready to start your <span className="accent">pathway?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Apply to the next cohort, or explore the stage-by-stage curriculum and
            fees first.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/apply" className="btn-primary">
              Apply Now <ArrowUpRight size={16} />
            </Link>
            <Link href="/curriculum" className="btn-outline">
              View Curriculum
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------- */
/* Local visual helpers (typographic / diagram-based, no stock photo) */
/* ---------------------------------------------------------------- */

/** A glassy "app window" mock for the hero — shows the pipeline at a glance. */
function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/15 to-orange-500/10 blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-float">
        <div className="flex items-center gap-2 border-b border-white/10 bg-night-800/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red/70" />
          <span className="h-3 w-3 rounded-full bg-orange/70" />
          <span className="h-3 w-3 rounded-full bg-blue/70" />
          <span className="ml-3 text-xs text-slate-500">jadvix-academy · pipeline</span>
        </div>
        <div className="space-y-3 p-5">
          {[
            { label: "Stage 1 · Frontend", pct: "100%", tone: "bg-blue" },
            { label: "Stage 2 · Backend", pct: "100%", tone: "bg-orange" },
            { label: "Stage 3 · Agentic AI", pct: "60%", tone: "bg-white" },
          ].map((row, i) => (
            <div key={row.label} className="rounded-2xl border border-white/10 bg-night-800/60 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2
                    size={15}
                    className={i < 2 ? "text-emerald-400" : "text-slate-600"}
                  />
                  {row.label}
                </span>
                <span className="text-xs text-slate-500">{row.pct}</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className={`h-full ${row.tone}`} style={{ width: row.pct }} />
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
            <span className="text-sm font-medium text-white">6-month paid internship</span>
            <ArrowRight size={16} className="text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Minimal bar-chart motif used on the stage cards. */
function BarMotif() {
  const bars = [40, 65, 48, 80, 55, 92, 60];
  return (
    <div className="mt-6 flex h-16 items-end gap-2" aria-hidden>
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-md ${i === 5 ? "bg-blue" : "bg-white/10"}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
