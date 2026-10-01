import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, UserCog, Languages } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { curriculum, supportingTracks } from "@/content/academy";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Stage-by-stage coverage across Frontend, Backend, and Agentic AI — with an AI-assisted engineering workflow using Claude Code and supporting Technical and English coordinator tracks.",
  alternates: { canonical: "/curriculum" },
};

const stageTone: Record<string, "blue" | "orange" | "navy"> = {
  frontend: "blue",
  backend: "orange",
  agentic: "navy",
};

const trackIcons = [UserCog, Languages];

export default function CurriculumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum"
        title="What you learn, stage by stage"
        lead="Three stages of applied, review-driven engineering — with AI-assisted workflows using Claude Code woven throughout, not bolted on."
      />

      {/* Claude Code highlight */}
      <Section className="pb-0">
        <Card className="border-blue-200 bg-blue-50">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue text-white">
              <Bot size={22} />
            </div>
            <div>
              <Badge tone="blue">AI-assisted engineering</Badge>
              <h2 className="mt-2 text-xl">A Claude Code–assisted workflow</h2>
              <p className="mt-2 max-w-2xl text-sm text-ink/70">
                From Stage 1 onward you build with Claude Code as part of your
                engineering workflow — using AI to enhance frontend work, raise
                productivity, and eventually to build and ship agentic features
                of your own.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Stage sections */}
      {curriculum.map((stage) => (
        <Section key={stage.stageId} className="pb-0 last:pb-16 sm:last:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <Badge tone={stageTone[stage.stageId]}>{stage.months}</Badge>
              <h2 className="mt-2 text-2xl sm:text-3xl">{stage.name}</h2>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-steel/70 shadow-card">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                {stage.name} coverage by area
              </caption>
              <thead>
                <tr className="bg-navy text-white">
                  <th scope="col" className="w-1/3 px-5 py-3 font-semibold">
                    Area
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Coverage
                  </th>
                </tr>
              </thead>
              <tbody>
                {stage.areas.map((area, i) => (
                  <tr
                    key={area.area}
                    className={i % 2 === 0 ? "bg-white" : "bg-mist"}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 align-top font-semibold text-navy"
                    >
                      {area.area}
                    </th>
                    <td className="px-5 py-4 align-top text-ink/75">
                      {area.coverage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ))}

      {/* Supporting tracks */}
      <section className="mt-16 bg-mist sm:mt-20">
        <div className="container-page py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl">Supporting tracks (all stages)</h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Every cohort runs with two coordinators alongside the technical
            curriculum.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportingTracks.map((track, i) => {
              const Icon = trackIcons[i] ?? UserCog;
              return (
                <Card key={track.role}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg">{track.role}</h3>
                  <p className="mt-2 text-sm text-ink/70">{track.summary}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-10">
            <Link href="/evaluations" className="btn-secondary">
              How evaluations work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
