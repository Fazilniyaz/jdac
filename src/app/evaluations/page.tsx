import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ClipboardCheck,
  FolderGit2,
  Briefcase,
  Award,
  Info,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import {
  stages,
  backendEvaluation,
  retryPolicy,
  internship,
  completionReward,
} from "@/content/academy";

export const metadata: Metadata = {
  title: "Evaluations & Internship",
  description:
    "Gate evaluations, the two-part Backend evaluation (practical test + full stack project), retry policy, the 6-month paid internship, and conversion to full-time at Jadvix LTD.",
  alternates: { canonical: "/evaluations" },
};

export default function EvaluationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Evaluations & Internship"
        title="Clear the gate, earn the internship"
        lead="Each stage ends in an evaluation. Pass it to unlock an internship offer and the next stage; the internship is where the pathway to a full-time role is decided."
      />

      {/* Gate table */}
      <Section>
        <SectionHeading title="Gate evaluations" />
        <div className="mt-6 overflow-x-auto rounded-2xl border border-steel/70 shadow-card">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Gate evaluations: timing, outcome on pass, and outcome on fail
            </caption>
            <thead>
              <tr className="bg-navy text-white">
                <th scope="col" className="px-5 py-3 font-semibold">Gate</th>
                <th scope="col" className="px-5 py-3 font-semibold">When</th>
                <th scope="col" className="px-5 py-3 font-semibold">On pass</th>
                <th scope="col" className="px-5 py-3 font-semibold">On fail</th>
              </tr>
            </thead>
            <tbody>
              {stages.map((stage, i) => (
                <tr key={stage.id} className={i % 2 === 0 ? "bg-white" : "bg-mist"}>
                  <th scope="row" className="px-5 py-4 align-top font-semibold text-navy">
                    {stage.gate.name}
                  </th>
                  <td className="px-5 py-4 align-top text-ink/75">{stage.gate.when}</td>
                  <td className="px-5 py-4 align-top">
                    <span className="flex items-start gap-2 text-ink/75">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-700" />
                      {stage.gate.onPass}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top">
                    <span className="flex items-start gap-2 text-ink/75">
                      <XCircle size={16} className="mt-0.5 shrink-0 text-red" />
                      {stage.gate.onFail}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 flex items-start gap-2 text-xs text-ink/60">
          <Info size={15} className="mt-0.5 shrink-0 text-navy-600" />
          {retryPolicy.summary} The policy after both attempts are used is still
          being finalised.
        </p>
      </Section>

      {/* Backend two-part evaluation */}
      <section className="bg-mist">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Spotlight"
            title="The Backend evaluation has two parts"
            lead="Both must be cleared to pass. The full stack project is assigned to every student individually."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ClipboardCheck size={20} />
              </div>
              <h3 className="mt-4 text-lg">{backendEvaluation.parts[0].name}</h3>
              <p className="mt-2 text-sm text-ink/70">
                {backendEvaluation.parts[0].detail}
              </p>
            </Card>
            <Card>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <FolderGit2 size={20} />
              </div>
              <h3 className="mt-4 text-lg">{backendEvaluation.parts[1].name}</h3>
              <p className="mt-2 text-sm text-ink/70">
                {backendEvaluation.parts[1].detail}
              </p>
            </Card>
          </div>
          <p className="mt-6 rounded-xl border border-navy/10 bg-white p-4 text-sm font-medium text-navy">
            {backendEvaluation.note}
          </p>
        </div>
      </section>

      {/* Internship */}
      <Section>
        <SectionHeading
          eyebrow="The internship"
          title={`A ${internship.lengthMonths}-month paid internship`}
          lead={internship.work}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <Briefcase className="text-blue-600" />
            <h3 className="mt-3 text-base">Stipend</h3>
            <p className="mt-2 text-sm text-ink/70">{internship.stipend}</p>
          </Card>
          <Card>
            <Briefcase className="text-blue-600" />
            <h3 className="mt-3 text-base">Study in parallel</h3>
            <p className="mt-2 text-sm text-ink/70">{internship.parallelCoursework}</p>
          </Card>
          <Card>
            <Briefcase className="text-blue-600" />
            <h3 className="mt-3 text-base">Terms</h3>
            <p className="mt-2 text-sm text-ink/70">{internship.terms}</p>
          </Card>
        </div>

        <Card className="mt-6 border-navy/15 bg-navy text-white">
          <Badge tone="orange" className="bg-orange/20 text-orange-100">
            Conversion to full-time
          </Badge>
          <p className="mt-3 max-w-3xl text-white/80">{internship.conversion}</p>
          <p className="mt-3 max-w-3xl text-sm text-white/60">
            {internship.capacityNote} This is a direct pathway to employment —
            not a guaranteed job.
          </p>
        </Card>
      </Section>

      {/* Reward + CTA */}
      <section className="bg-mist">
        <div className="container-page py-16 sm:py-20">
          <Card className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <Award size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg">Agentic AI completion reward</h3>
              <p className="mt-1 text-sm text-ink/70">{completionReward.summary}</p>
            </div>
            <Link href="/apply" className="btn-primary shrink-0">
              Apply Now <ArrowRight size={16} />
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}
