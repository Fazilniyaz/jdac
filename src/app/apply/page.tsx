import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ApplyForm } from "@/components/forms/ApplyForm";
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
          <aside className="lg:pr-6">
            <h2 className="text-2xl">What you&apos;re applying to</h2>
            <p className="mt-3 text-ink/70">{overview.outcome}</p>
            <ul className="mt-6 space-y-3">
              {keyStats.map((s) => (
                <li key={s.label} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-blue-600" />
                  <span className="text-sm text-ink/80">
                    <strong className="text-navy">{s.value}</strong> — {s.label}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-mist p-4 text-xs text-ink/60">
              Internship offers are capped by Jadvix LTD&apos;s confirmed intern
              capacity per cohort. This is a direct pathway to employment, not a
              guaranteed job.
            </p>
          </aside>

          <ApplyForm />
        </div>
      </Section>
    </>
  );
}
