import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Target,
  GitBranch,
  Bot,
  Users,
  Award,
  Coins,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { TriStripe } from "@/components/TriStripe";
import {
  company,
  objectives,
  keyStats,
  completionReward,
  faqs,
} from "@/content/academy";

const objectiveIcons = [Target, GitBranch, Bot, Users];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(60rem 30rem at 80% -10%, #4599D3 0, transparent 60%), radial-gradient(40rem 24rem at 0% 110%, #F05623 0, transparent 55%)",
          }}
        />
        <div className="container-page relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <Badge tone="blue" className="bg-white/10 text-blue-200">
              <GraduationCap size={14} /> Train-to-hire · {company.legalName}
            </Badge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl text-white">
              From learner to <span className="text-blue-300">Jadvix engineer.</span>
            </h1>
            <p className="mt-5 text-lg text-white/80 sm:text-xl">
              {company.tagline} · {company.programType.replace(", ", " · ")}.
            </p>
            <p className="mt-4 max-w-2xl text-base text-white/70">
              Three milestone-gated stages, a 6-month paid internship, and a
              UK-issued certificate — a direct pathway to employment at{" "}
              {company.legalName}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/apply" className="btn-primary">
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link href="/fees" className="btn-ghost-light">
                View Fees
              </Link>
            </div>
          </div>
        </div>
        <TriStripe />
      </section>

      {/* Key stats */}
      <section className="border-b border-steel/60 bg-mist">
        <div className="container-page grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {keyStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold text-navy sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <Section>
        <SectionHeading
          eyebrow="The pipeline"
          title="Three stages. Three gates. One pathway."
          lead="Clear each evaluation to unlock the next stage and its paid internship. Strong internship performance leads to a full-time offer."
        />
        <div className="mt-10">
          <PipelineDiagram compact />
        </div>
        <div className="mt-8">
          <Link href="/program" className="btn-outline">
            Explore the full program <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Why Jadvix */}
      <section className="bg-mist">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Jadvix Academy"
            title="Built to make you employable — honestly."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((obj, i) => {
              const Icon = objectiveIcons[i] ?? Target;
              return (
                <Card key={obj.title} className="h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg">{obj.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{obj.body}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Completion reward */}
      <Section>
        <Card className="overflow-hidden border-navy/15 bg-navy text-white">
          <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <Badge tone="orange" className="bg-orange/20 text-orange-100">
                <Award size={14} /> Completion reward
              </Badge>
              <h2 className="mt-4 text-2xl text-white sm:text-3xl">
                Finish the Agentic AI capstone and go full-time — and it&apos;s
                recognised.
              </h2>
              <p className="mt-3 text-white/75">{completionReward.summary}</p>
            </div>
            <ul className="space-y-3">
              {completionReward.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-4"
                >
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

      {/* FAQ teaser */}
      <section className="bg-mist">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="Questions" title="A few quick answers" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.slice(0, 4).map((f) => (
              <Card key={f.q}>
                <h3 className="text-base">{f.q}</h3>
                <p className="mt-2 text-sm text-ink/70">{f.a}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="btn-outline">
              See all FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy">
        <div className="container-page py-16 text-center sm:py-20">
          <h2 className="text-3xl text-white sm:text-4xl">
            Ready to start your pathway?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Apply to the next cohort, or explore the stage-by-stage curriculum
            and fees first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/apply" className="btn-primary">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link href="/curriculum" className="btn-ghost-light">
              View Curriculum
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
