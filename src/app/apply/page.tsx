import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { Reveal } from "@/components/Reveal";
import { overview, keyStats } from "@/content/academy";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to Jadvix Academy. Tell us your background and preferred entry point and payment plan, and our team will be in touch about the next cohort.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Apply"
        title="Apply to the next cohort"
        lead="Fill in your details below. Applying is an enquiry — there's no payment at this step."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal as="aside" className="lg:pr-6">
            <h2 className="jx-headline">What you&apos;re applying to</h2>
            <p className="mt-3 text-ink-2">{overview.outcome}</p>
            <ul className="mt-6 divide-y divide-[var(--line)] border-y border-line">
              {keyStats.map((s) => (
                <li key={s.label} className="flex items-center gap-3 py-4">
                  <CheckCircle2 size={19} className="shrink-0 text-accent" />
                  <span className="text-[15px] text-ink-2">
                    <strong className="font-semibold text-ink">{s.value}</strong> — {s.label}
                  </span>
                </li>
              ))}
            </ul>
            <p className="note mt-6">
              Internship offers are capped by Jadvix LTD&apos;s confirmed intern capacity per cohort.
              This is a direct pathway to employment, not a guaranteed job.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ApplyForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
