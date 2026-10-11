import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ClipboardCheck,
  FolderGit2,
  Wallet,
  BookOpen,
  FileSignature,
  Award,
  Info,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { Reveal } from "@/components/Reveal";
import { stages, backendEvaluation, retryPolicy, internship, completionReward } from "@/content/academy";

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
        image={{ src: "/images/why-hire.webp", alt: "A Jadvix workspace with a laptop showing the Jadvix website" }}
      />

      <Section>
        <SectionHeading title="Gate evaluations" />
        <Reveal className="table-wrap mt-8">
          <table className="jx-table min-w-[720px]">
            <caption className="sr-only">Gate evaluations: timing, outcome on pass, and outcome on fail</caption>
            <thead>
              <tr>
                <th scope="col">Gate</th>
                <th scope="col">When</th>
                <th scope="col">On pass</th>
                <th scope="col">On fail</th>
              </tr>
            </thead>
            <tbody>
              {stages.map((stage) => (
                <tr key={stage.id}>
                  <th scope="row">{stage.gate.name}</th>
                  <td>{stage.gate.when}</td>
                  <td>
                    <span className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-success" />
                      {stage.gate.onPass}
                    </span>
                  </td>
                  <td>
                    <span className="flex items-start gap-2">
                      <XCircle size={16} className="mt-0.5 shrink-0 text-[#e01e26]" />
                      {stage.gate.onFail}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal className="note mt-5 flex items-start gap-2">
          <Info size={15} className="mt-0.5 shrink-0 text-accent" />
          <span>
            {retryPolicy.summary} The policy after both attempts are used is still being finalised.
          </span>
        </Reveal>
      </Section>

      <Section tone="band">
        <SectionHeading
          eyebrow="Spotlight"
          title="The Backend evaluation has two parts"
          lead="Both must be cleared to pass. The full stack project is assigned to every student individually."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[ClipboardCheck, FolderGit2].map((Icon, i) => (
            <Reveal key={backendEvaluation.parts[i].name} delay={i * 90} className="card">
              <span className="icon-tile">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-lg">{backendEvaluation.parts[i].name}</h3>
              <p className="mt-2 text-[15px] text-ink-2">{backendEvaluation.parts[i].detail}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="note mt-6 font-medium text-ink">{backendEvaluation.note}</Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The internship"
          title={`A ${internship.lengthMonths}-month paid internship`}
          lead={internship.work}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: Wallet, title: "Stipend", body: internship.stipend },
            { icon: BookOpen, title: "Study in parallel", body: internship.parallelCoursework },
            { icon: FileSignature, title: "Terms", body: internship.terms },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="card">
              <span className="icon-tile">
                <c.icon size={20} />
              </span>
              <h3 className="mt-4 text-base">{c.title}</h3>
              <p className="mt-2 text-[15px] text-ink-2">{c.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="card mt-5 border-l-[3px] border-l-spark p-7">
          <Badge tone="spark">Conversion to full-time</Badge>
          <p className="mt-3 max-w-3xl text-ink">{internship.conversion}</p>
          <p className="mt-3 max-w-3xl text-[15px] text-ink-2">
            {internship.capacityNote} This is a direct pathway to employment — not a guaranteed job.
          </p>
        </Reveal>
      </Section>

      <Section tone="navy">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="icon-tile">
            <Award size={22} />
          </span>
          <div className="flex-1">
            <h3 className="jx-headline">Agentic AI completion reward</h3>
            <p className="mt-2 max-w-2xl text-on-navy-2">{completionReward.summary}</p>
          </div>
          <Link href="/apply" className="btn btn-spark shrink-0">
            Apply Now <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
