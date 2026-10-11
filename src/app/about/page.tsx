import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Building2, Target, GraduationCap, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { company, offices, overview } from "@/content/academy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jadvix Academy is a Jadvix LTD product — a milestone-gated, train-to-hire program built to create a reliable internal hiring pipeline, with a UK-linked qualification.",
  alternates: { canonical: "/about" },
};

const purpose = [
  {
    icon: Building2,
    title: "A Jadvix product",
    body: `${company.academyName} is built and run by ${company.legalName}, the IT company behind jadvix.uk. It exists to train and hire engineers through one structured program.`,
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
        lead={`${company.academyName} is a ${company.legalName} product — a ${company.programType} designed to turn committed learners into Jadvix engineers.`}
        image={{ src: "/images/about.webp", alt: "A Jadvix desk: laptop, notebook reading Strategy, Design, Develop, Grow" }}
      />

      <Section>
        <SectionHeading
          title="Our purpose"
          lead="We built the Academy to solve a hiring problem honestly: train people well, then hire the ones who meet the bar."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {purpose.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="card">
              <span className="icon-tile">
                <p.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg">{p.title}</h3>
              <p className="mt-2 text-[15px] text-ink-2">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="jx-label text-[11px] text-on-navy-2">The outcome, stated plainly</p>
            <p className="jx-headline mt-4 text-white">{overview.outcome}</p>
            <a href={company.parentUrl} target="_blank" rel="noopener" className="link-arrow mt-8">
              Discover Jadvix LTD at jadvix.uk <ArrowUpRight size={16} />
            </a>
          </Reveal>
          <Reveal delay={120} className="photo aspect-[16/11] rounded-panel">
            <Image src="/images/stage-agentic.webp" alt="The Jadvix mark surrounded by connected capabilities" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Where we are" title="Our offices" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {offices.map((o, i) => (
            <Reveal key={`${o.city}-${o.country}`} delay={i * 80} className="card">
              <p className="jx-label flex items-center gap-2 text-[11px] text-accent">
                <MapPin size={15} /> {o.country}
              </p>
              <h3 className="mt-3 text-xl">{o.city}</h3>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-2">{company.footerLine}</p>
        <div className="mt-8">
          <Link href="/apply" className="btn btn-spark">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
