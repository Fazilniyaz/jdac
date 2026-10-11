import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, Percent, ShieldAlert, Wallet } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { FeeCalculator } from "@/components/FeeCalculator";
import { Reveal } from "@/components/Reveal";
import { feeOptions, feeNotes, feeAdjustments, feeCollection, refundPolicy } from "@/content/academy";
import { monthlyTotal, formatINR } from "@/lib/fees";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "Transparent fees in INR: full-pipeline and stage-wise pricing, one-time vs monthly plans, internship-linked adjustments, refund policy, and how payments are collected.",
  alternates: { canonical: "/fees" },
};

export default function FeesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fees"
        title="Clear, upfront pricing"
        lead="Choose a one-time payment or a monthly plan, for the full pipeline or a single stage. All fees are in Indian Rupees (INR)."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading title="Stage-wise fees" />
            <Reveal className="table-wrap mt-8">
              <table className="jx-table min-w-[520px]">
                <caption className="sr-only">Fees by enrolment option and payment plan</caption>
                <thead>
                  <tr>
                    <th scope="col">Option</th>
                    <th scope="col">Duration</th>
                    <th scope="col">One-time</th>
                    <th scope="col">Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {feeOptions.map((o) => (
                    <tr key={o.id}>
                      <th scope="row">{o.label}</th>
                      <td>{o.durationMonths} months</td>
                      <td className="font-semibold !text-ink">{formatINR(o.oneTime)}</td>
                      <td>
                        {formatINR(o.monthlyAmount)} × {o.monthlyCount}
                        <span className="block text-xs text-muted">= {formatINR(monthlyTotal(o))}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal as="ul" className="mt-5 space-y-1.5 text-sm text-ink-2">
              <li>• {feeNotes.oneTimeWhen}</li>
              <li>• {feeNotes.monthlyWhen}</li>
              <li>• {feeNotes.monthlyPremium}</li>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <FeeCalculator />
          </Reveal>
        </div>
      </Section>

      <Section tone="band">
        <SectionHeading
          eyebrow="You may pay less"
          title="Internship-linked fee adjustments"
          lead="As you progress, your fees can go down."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {feeAdjustments.map((adj, i) => (
            <Reveal key={adj.trigger} delay={i * 80} className="card">
              <span className="icon-tile">
                <Percent size={20} />
              </span>
              <h3 className="mt-4 text-base">{adj.trigger}</h3>
              <p className="mt-2 text-[15px] text-ink-2">{adj.effect}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Refunds" title="Refund policy" lead="Please read this carefully before enrolling." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal className="card border-l-[3px] border-l-[#e01e26]">
            <Badge tone="danger">
              <ShieldAlert size={13} /> One-time payment
            </Badge>
            <p className="mt-3 text-[15px] text-ink-2">{refundPolicy.oneTime}</p>
          </Reveal>
          <Reveal delay={90} className="card border-l-[3px] border-l-brand">
            <Badge tone="brand">
              <Wallet size={13} /> Monthly installments
            </Badge>
            <p className="mt-3 text-[15px] text-ink-2">{refundPolicy.monthly}</p>
          </Reveal>
        </div>
        <p className="mt-5 text-sm text-ink-2">{refundPolicy.method}</p>
        <div className="mt-7">
          <Link href="/legal/refund" className="btn btn-ghost">
            Read the full refund policy <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading eyebrow="How payments are collected" title="Secure, automated payments" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {feeCollection.map((c, i) => (
            <Reveal key={c.audience} delay={i * 90} className="rounded-card border border-white/10 bg-white/[0.04] p-6">
              <span className="icon-tile">
                <CreditCard size={20} />
              </span>
              <h3 className="mt-4 text-lg">{c.audience}</h3>
              <p className="mt-2 text-[15px] text-on-navy-2">{c.method}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/apply" className="btn btn-spark">
            Apply Now <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
