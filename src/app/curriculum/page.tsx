import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, UserCog, Languages } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { Reveal } from "@/components/Reveal";
import { curriculum, supportingTracks } from "@/content/academy";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Stage-by-stage coverage across Frontend, Backend, and Agentic AI — with an AI-assisted engineering workflow using Claude Code and supporting Technical and English coordinator tracks.",
  alternates: { canonical: "/curriculum" },
};

const stageImages: Record<string, { src: string; alt: string }> = {
  frontend: { src: "/images/stage-frontend.webp", alt: "A developer desk with a web interface on screen" },
  backend: { src: "/images/stage-backend.webp", alt: "Cloud and server infrastructure visual" },
  agentic: { src: "/images/stage-agentic.webp", alt: "The Jadvix mark surrounded by connected AI capabilities" },
};

const trackIcons = [UserCog, Languages];

export default function CurriculumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum"
        title="What you learn, stage by stage"
        lead="Three stages of applied, review-driven engineering — with AI-assisted workflows using Claude Code woven throughout, not bolted on."
        image={{ src: "/images/why-build.webp", alt: "Two developers reviewing code together on a laptop" }}
      />

      <Section className="pb-0">
        <Reveal className="card flex items-start gap-5 border-l-[3px] border-l-brand p-7">
          <span className="icon-tile">
            <Bot size={22} />
          </span>
          <div>
            <Badge tone="brand">AI-assisted engineering</Badge>
            <h2 className="jx-headline mt-3">A Claude Code–assisted workflow</h2>
            <p className="mt-2 max-w-2xl text-[15px] text-ink-2">
              From Stage 1 onward you build with Claude Code as part of your engineering workflow —
              using AI to enhance frontend work, raise productivity, and eventually to build and
              ship agentic features of your own.
            </p>
          </div>
        </Reveal>
      </Section>

      {curriculum.map((stage) => (
        <Section key={stage.stageId} className="pb-0">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Badge tone="neutral">{stage.months}</Badge>
              <h2 className="jx-headline mt-3">{stage.name}</h2>
              <div className="photo photo-zoom mt-6 aspect-[16/10]">
                <Image
                  src={stageImages[stage.stageId].src}
                  alt={stageImages[stage.stageId].alt}
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={90} className="table-wrap self-start">
              <table className="jx-table">
                <caption className="sr-only">{stage.name} coverage by area</caption>
                <thead>
                  <tr>
                    <th scope="col" className="w-1/3">Area</th>
                    <th scope="col">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {stage.areas.map((area) => (
                    <tr key={area.area}>
                      <th scope="row">{area.area}</th>
                      <td>{area.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section tone="band" className="mt-[var(--section-gap)]">
        <Reveal>
          <h2 className="jx-display-lg">Supporting tracks (all stages)</h2>
          <p className="jx-lead mt-4 max-w-2xl">
            Every cohort runs with two coordinators alongside the technical curriculum.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {supportingTracks.map((track, i) => {
            const Icon = trackIcons[i] ?? UserCog;
            return (
              <Reveal key={track.role} delay={i * 90} className="card">
                <span className="icon-tile">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg">{track.role}</h3>
                <p className="mt-2 text-[15px] text-ink-2">{track.summary}</p>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10">
          <Link href="/evaluations" className="btn btn-primary">
            How evaluations work <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
