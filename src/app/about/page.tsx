import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Target, GraduationCap, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { company, offices, overview } from "@/content/academy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jadvix Academy is the training arm of Jadvix LTD — a milestone-gated, train-to-hire program built to create a reliable internal hiring pipeline, with a UK-linked qualification.",
  alternates: { canonical: "/about" },
};

const purpose = [
  {
    icon: Building2,
    title: "Part of Jadvix LTD",
    body: `${company.academyName} is the training arm of ${company.legalName}. It exists to train and hire engineers through one structured program.`,
  },
  {
    icon: Target,
    title: "A reliable hiring pipeline",
    body: "The Academy is built to create a dependable internal hiring pipeline — training people to the standard Jadvix engineering teams work to, then hiring from within.",
  },
  {
    icon: GraduationCap,
    title: "A UK-linked qualification",
    body: "Graduates who complete the program receive a UK-issued Jadvix Academy certificate, reflecting the company's UK base in Ruislip.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Why Jadvix Academy exists"
        lead={`${company.academyName} is the training arm of ${company.legalName} — a ${company.programType} designed to turn committed learners into Jadvix engineers.`}
      />

      <Section>
        <SectionHeading
          title="Our purpose"
          lead="We built the Academy to solve a hiring problem honestly: train people well, then hire the ones who meet the bar."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {purpose.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.body}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Outcome honesty */}
      <section className="bg-mist">
        <div className="container-page py-16 sm:py-20">
          <Card className="border-navy/15 bg-navy text-white">
            <h2 className="text-2xl text-white">The outcome, stated plainly</h2>
            <p className="mt-3 max-w-3xl text-white/80">{overview.outcome}</p>
          </Card>
        </div>
      </section>

      {/* Offices */}
      <Section>
        <SectionHeading eyebrow="Where we are" title="Our offices" />
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {offices.map((o) => (
            <Card key={`${o.city}-${o.country}`}>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin size={18} />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {o.country}
                </span>
              </div>
              <h3 className="mt-3 text-xl">{o.city}</h3>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/60">{company.footerLine}</p>
        <div className="mt-8">
          <Link href="/apply" className="btn-primary">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
