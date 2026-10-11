import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, RefreshCw, Info } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { Reveal } from "@/components/Reveal";
import { overview, sequentialRule, retryPolicy, internship } from "@/content/academy";

export const metadata: Metadata = {
  title: "Program & Pipeline",
  description:
    "The full Jadvix Academy train-to-hire pipeline: Frontend → Backend → Agentic AI, each gated by an evaluation that unlocks the next stage and a paid internship.",
  alternates: { canonical: "/program" },
};

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Program & Pipeline"
        title="One milestone-gated path from learner to engineer"
        lead={`${overview.trainingMonths} months of training across three stages, each unlocking a ${overview.internshipMonths}-month paid internship. ${overview.delivery}.`}
        image={{ src: "/images/hero-studio.webp", alt: "Trainee developers working through a project with a mentor" }}
      />

      <Section>
        <SectionHeading
          title="The full pipeline"
          lead="Every evaluation must be cleared to unlock the next stage and the matching internship."
        />
        <div className="mt-10">
          <PipelineDiagram />
        </div>
      </Section>

      <Section tone="band">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="How progression works"
            title="Sequential, gated, and the same for lateral entry"
            lead={sequentialRule.short}
          />
          <Reveal className="card">
            <ul className="divide-y divide-[var(--line)]">
              {sequentialRule.points.map((point) => (
                <li key={point} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-[15px] text-ink-2">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="card">
            <div className="flex items-center gap-3">
              <span className="icon-tile">
                <RefreshCw size={20} />
              </span>
              <h3 className="text-lg">If you don&apos;t clear a gate</h3>
            </div>
            <p className="mt-4 text-[15px] text-ink-2">{retryPolicy.summary}</p>
            <p className="note mt-5 flex items-start gap-2">
              <Info size={15} className="mt-0.5 shrink-0 text-accent" />
              The policy for what happens after both retry attempts are used is still being
              finalised.
            </p>
          </Reveal>
          <Reveal delay={90} className="card">
            <div className="flex items-center gap-3">
              <span className="icon-tile">
                <Info size={20} />
              </span>
              <h3 className="text-lg">Internships are capacity-bound</h3>
            </div>
            <p className="mt-4 text-[15px] text-ink-2">{internship.capacityNote}</p>
            <p className="mt-3 text-[15px] text-ink-2">
              Clearing a gate keeps you eligible and lets you continue coursework, but does not
              guarantee a placement.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-wrap gap-3">
          <Link href="/curriculum" className="btn btn-ink">
            See the curriculum <ArrowRight size={16} />
          </Link>
          <Link href="/evaluations" className="btn btn-ghost">
            Evaluations & internship <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
