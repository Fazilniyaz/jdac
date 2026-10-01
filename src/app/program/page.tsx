import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, RefreshCw, Info } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import {
  overview,
  sequentialRule,
  retryPolicy,
  internship,
} from "@/content/academy";

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
      />

      {/* Pipeline centerpiece */}
      <Section>
        <SectionHeading
          title="The full pipeline"
          lead="Every evaluation must be cleared to unlock the next stage and the matching internship."
        />
        <div className="mt-10">
          <PipelineDiagram />
        </div>
      </Section>

      {/* Sequential rule */}
      <Section light>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How progression works"
              title="Sequential, gated, and the same for lateral entry"
              lead={sequentialRule.short}
            />
          </div>
          <Card light>
            <ul className="space-y-4">
              {sequentialRule.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <ShieldCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />
                  <span className="text-sm text-ink/80">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Retry + capacity */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <RefreshCw className="text-orange" />
              <h3 className="text-lg">If you don&apos;t clear a gate</h3>
            </div>
            <p className="mt-3 text-sm text-slate-400">{retryPolicy.summary}</p>
            <p className="mt-4 flex items-start gap-2 rounded-2xl border border-white/10 bg-night-800/60 p-3 text-xs text-slate-400">
              <Info size={15} className="mt-0.5 shrink-0 text-blue-400" />
              The policy for what happens after both retry attempts are used is
              still being finalised.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Info className="text-blue-400" />
              <h3 className="text-lg">Internships are capacity-bound</h3>
            </div>
            <p className="mt-3 text-sm text-slate-400">{internship.capacityNote}</p>
            <p className="mt-3 text-sm text-slate-400">
              Clearing a gate keeps you eligible and lets you continue
              coursework, but does not guarantee a placement.
            </p>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/curriculum" className="btn-secondary">
            See the curriculum <ArrowRight size={16} />
          </Link>
          <Link href="/evaluations" className="btn-outline">
            Evaluations & internship <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
