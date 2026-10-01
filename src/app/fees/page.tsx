import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, Percent, ShieldAlert, Wallet } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { FeeCalculator } from "@/components/FeeCalculator";
import {
  feeOptions,
  feeNotes,
  feeAdjustments,
  feeCollection,
  refundPolicy,
} from "@/content/academy";
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

      {/* Stage-wise table + calculator */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading title="Stage-wise fees" />
            <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10 shadow-float">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Fees by enrolment option and payment plan
                </caption>
                <thead>
                  <tr className="bg-night-800 text-white">
                    <th scope="col" className="px-5 py-3 font-semibold">Option</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Duration</th>
                    <th scope="col" className="px-5 py-3 font-semibold">One-time</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {feeOptions.map((o, i) => (
                    <tr key={o.id} className={i % 2 === 0 ? "bg-panel" : "bg-night-800/40"}>
                      <th scope="row" className="px-5 py-4 align-top font-semibold text-white">
                        {o.label}
                      </th>
                      <td className="px-5 py-4 align-top text-slate-400">
                        {o.durationMonths} months
                      </td>
                      <td className="px-5 py-4 align-top font-semibold text-blue-300">
                        {formatINR(o.oneTime)}
                      </td>
                      <td className="px-5 py-4 align-top text-slate-400">
                        {formatINR(o.monthlyAmount)} × {o.monthlyCount}
                        <span className="block text-xs text-slate-500">
                          = {formatINR(monthlyTotal(o))}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
              <li>• {feeNotes.oneTimeWhen}</li>
              <li>• {feeNotes.monthlyWhen}</li>
              <li>• {feeNotes.monthlyPremium}</li>
            </ul>
          </div>

          <FeeCalculator />
        </div>
      </Section>

      {/* Internship-linked adjustments */}
      <Section light>
        <SectionHeading
          eyebrow="You may pay less"
          title="Internship-linked fee adjustments"
          lead="As you progress, your fees can go down."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {feeAdjustments.map((adj) => (
            <Card light key={adj.trigger}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Percent size={20} />
              </div>
              <h3 className="mt-4 text-base">{adj.trigger}</h3>
              <p className="mt-2 text-sm text-ink/70">{adj.effect}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Refund policy */}
      <Section>
        <SectionHeading
          eyebrow="Refunds"
          title="Refund policy"
          lead="Please read this carefully before enrolling."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-red/30">
            <Badge tone="muted" className="bg-red/15 text-red-300">
              <ShieldAlert size={14} /> One-time payment
            </Badge>
            <p className="mt-3 text-sm text-slate-300">{refundPolicy.oneTime}</p>
          </Card>
          <Card className="border-blue-500/30">
            <Badge tone="blue">
              <Wallet size={14} /> Monthly installments
            </Badge>
            <p className="mt-3 text-sm text-slate-300">{refundPolicy.monthly}</p>
          </Card>
        </div>
        <p className="mt-4 text-sm text-slate-400">{refundPolicy.method}</p>
        <div className="mt-6">
          <Link href="/legal/refund" className="btn-outline">
            Read the full refund policy <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Collection */}
      <section className="bg-night-800">
        <div className="container-page py-20 sm:py-28">
          <SectionHeading
            eyebrow="How payments are collected"
            title="Secure, automated payments"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {feeCollection.map((c) => (
              <div
                key={c.audience}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <CreditCard size={20} />
                </div>
                <h3 className="mt-4 text-lg text-white">{c.audience}</h3>
                <p className="mt-2 text-sm text-white/70">{c.method}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/apply" className="btn-primary">
              Apply Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
