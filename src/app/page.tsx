import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Award, Coins, CheckCircle2, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import {
  company,
  objectives,
  keyStats,
  completionReward,
  faqs,
  stages,
  marqueeSkills,
} from "@/content/academy";

/** One photo per "why" objective, in the same order as `objectives`. */
const objectiveImages = [
  { src: "/images/why-build.webp", alt: "Two developers reviewing code together on a laptop" },
  { src: "/images/why-gates.webp", alt: "Project dashboards marking progress through each stage" },
  { src: "/images/why-ai.webp", alt: "Analytics screens on a developer's workstation" },
  { src: "/images/why-hire.webp", alt: "A Jadvix workspace with a laptop showing the Jadvix website" },
];

const stageImages: Record<string, { src: string; alt: string }> = {
  frontend: { src: "/images/stage-frontend.webp", alt: "A developer desk with a web interface on screen" },
  backend: { src: "/images/stage-backend.webp", alt: "Cloud and server infrastructure visual" },
  agentic: { src: "/images/stage-agentic.webp", alt: "The Jadvix mark surrounded by connected AI capabilities" },
};

const stageTag: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  agentic: "Agentic AI",
};

const heroWords = ["Learn.", "Build.", "Ship."];

export default function HomePage() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative">
        <div className="container-page grid items-center gap-12 pb-14 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
          <div>
            <span className="jx-eyebrow jx-rise" style={{ ["--d" as string]: "0ms" }}>
              A Jadvix product · Train-to-hire
            </span>
            <h1 className="jx-display-xl mt-7 !text-[clamp(44px,5.3vw,74px)]">
              {heroWords.slice(0, 2).map((w, i) => (
                <span key={w}>
                  <span className="jx-word" style={{ ["--i" as string]: i }}>{w}</span>{" "}
                </span>
              ))}
              <br />
              <span className="jx-word" style={{ ["--i" as string]: 2 }}>{heroWords[2]}</span>{" "}
              <span className="jx-word accent" style={{ ["--i" as string]: 3 }}>Get</span>{" "}
              <span className="jx-word accent" style={{ ["--i" as string]: 4 }}>hired.</span>
            </h1>
            <p className="jx-lead jx-rise mt-7 max-w-xl" style={{ ["--d" as string]: "480ms" }}>
              {company.tagline} — a {company.programType} from {company.legalName}. Three
              gated stages, a 6-month paid internship, and a UK-issued certificate: a direct
              pathway to employment at {company.legalName}.
            </p>
            <div className="jx-rise mt-9 flex flex-wrap gap-3" style={{ ["--d" as string]: "580ms" }}>
              <Link href="/apply" className="btn btn-spark">
                Apply Now <ArrowUpRight size={17} />
              </Link>
              <Link href="/fees" className="btn btn-ghost">
                View Fees
              </Link>
            </div>
            <ul className="jx-rise mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink-2" style={{ ["--d" as string]: "680ms" }}>
              {keyStats.slice(0, 3).map((s) => (
                <li key={s.label} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>
                    <strong className="font-semibold text-ink">{s.value}</strong> {s.label.toLowerCase()}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="photo jx-photo-in aspect-[4/3] rounded-panel shadow-md lg:aspect-[5/4]">
              <Image
                src="/images/hero-studio.webp"
                alt="Trainee developers working through a project with a mentor"
                fill
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className="jx-rise absolute -left-4 bottom-8 hidden sm:block"
              style={{ ["--d" as string]: "900ms" }}
            >
              <div className="jx-float card flex items-center gap-3 px-4 py-3" style={{ ["--fd" as string]: "0s" }}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
                  <CheckCircle2 size={18} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-ink">Backend gate cleared</p>
                  <p className="text-xs text-muted">Backend Development Intern offer</p>
                </div>
              </div>
            </div>
            <div
              className="jx-rise absolute -right-3 top-6 hidden sm:block"
              style={{ ["--d" as string]: "1050ms" }}
            >
              <div className="jx-float card flex items-center gap-2.5 px-4 py-2.5" style={{ ["--fd" as string]: "1.5s" }}>
                <Sparkles size={16} className="text-accent" />
                <p className="text-[13px] font-semibold text-ink">AI-assisted with Claude Code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-line bg-surface">
          <Marquee items={marqueeSkills} />
        </div>
      </section>

      {/* ───────────── Why ───────────── */}
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
          <Reveal>
            <Link href="/curriculum" className="link-arrow">
              View the curriculum <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((obj, i) => (
            <Reveal key={obj.title} delay={i * 80} className="card jx-hover flex h-full flex-col p-0">
              <div className="photo aspect-[4/3] rounded-b-none">
                <Image
                  src={objectiveImages[i].src}
                  alt={objectiveImages[i].alt}
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="jx-label text-[11px] text-muted">0{i + 1}</p>
                <h3 className="mt-2 text-lg">{obj.title}</h3>
                <p className="mt-2 text-[15px] text-ink-2">{obj.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────────── Pathway (navy) ───────────── */}
      <Section tone="navy">
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
        <Reveal className="mt-10">
          <Link href="/program" className="btn btn-ghost">
            Explore the full program <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>

      {/* ───────────── Stages ───────────── */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The program"
            title={
              <>
                Frontend to Backend to <span className="accent">Agentic AI.</span>
              </>
            }
            lead="One curriculum and one standard of craft — the standard Jadvix engineering teams work to."
          />
          <Reveal>
            <Link href="/curriculum" className="link-arrow">
              All curriculum <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 90} className="card jx-hover flex flex-col p-0">
              <div className="photo aspect-[16/10] rounded-b-none">
                <Image
                  src={stageImages[stage.id].src}
                  alt={stageImages[stage.id].alt}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="jx-label rounded-full bg-navy/80 px-2.5 py-1 text-[11px] text-white backdrop-blur">
                    {stageTag[stage.id]}
                  </span>
                  <span className="jx-label rounded-full bg-white/90 px-2.5 py-1 text-[11px] text-navy">
                    {stage.months}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl">{stage.name}</h3>
                <p className="mt-2 flex-1 text-[15px] text-ink-2">{stage.summary}</p>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                  <Link href="/curriculum" className="link-arrow text-sm">
                    Details <ArrowRight size={15} />
                  </Link>
                  <Link href="/apply" className="btn btn-primary btn-sm">
                    Apply
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────────── About + stats ───────────── */}
      <Section tone="band">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="photo photo-zoom aspect-[4/3] rounded-panel shadow-md">
            <Image
              src="/images/about.webp"
              alt="A Jadvix desk: laptop, notebook reading Strategy, Design, Develop, Grow"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About the program"
              title={
                <>
                  Training that turns effort into <span className="accent">a career.</span>
                </>
              }
              lead={`Jadvix Academy is built by ${company.legalName}, the UK and India IT company behind jadvix.uk. We train engineers to the standard our own teams work to — then hire from within.`}
            />
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-[var(--line)]">
              {keyStats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 70} className="bg-surface p-5">
                  <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">{stat.value}</p>
                  <p className="jx-label mt-2 text-[11px] text-muted">{stat.label}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-7">
              <Link href="/about" className="link-arrow">
                More about us <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ───────────── Completion reward ───────────── */}
      <Section>
        <Reveal className="card grid items-center gap-8 p-7 sm:p-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Badge tone="spark">
              <Award size={13} /> Completion reward
            </Badge>
            <h2 className="jx-headline mt-4">
              Finish the capstone, go full-time — and it&apos;s <span className="accent">recognised.</span>
            </h2>
            <p className="mt-3 text-ink-2">{completionReward.summary}</p>
          </div>
          <ul className="space-y-3">
            {completionReward.items.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-card border border-line bg-surface-2 p-4">
                {item.toLowerCase().includes("gold") ? (
                  <Coins className="shrink-0 text-spark" />
                ) : (
                  <Award className="shrink-0 text-accent" />
                )}
                <span className="font-medium text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ───────────── FAQ teaser ───────────── */}
      <Section tone="band">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Questions" title="A few quick answers" />
            <Reveal className="mt-8">
              <Link href="/faq" className="btn btn-ghost">
                See all FAQs <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="divide-y divide-[var(--line)] border-y border-line">
            {faqs.slice(0, 4).map((f, i) => (
              <Reveal key={f.q} delay={i * 60} className="py-6">
                <h3 className="text-[17px] font-medium">{f.q}</h3>
                <p className="mt-2 text-[15px] text-ink-2">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────────── Final CTA ───────────── */}
      <section className="container-page py-16 sm:py-20">
        <Reveal className="jx-navy rounded-panel">
          <div className="absolute inset-0 opacity-35">
            <Image src="/images/hero-studio.webp" alt="" fill sizes="1240px" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
          <div className="relative px-7 py-14 sm:px-14 sm:py-20">
            <p className="jx-label text-[11px] text-on-navy-2">A {company.legalName} product</p>
            <h2 className="jx-display-lg mt-4 max-w-2xl text-white">
              Ready to start your <span className="accent">pathway?</span>
            </h2>
            <p className="mt-5 max-w-xl text-on-navy-2">
              Apply to the next cohort, or explore the stage-by-stage curriculum and fees first.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/apply" className="btn btn-spark">
                Apply Now <ArrowUpRight size={17} />
              </Link>
              <Link href="/curriculum" className="btn btn-ghost">
                View Curriculum
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
