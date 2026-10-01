import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { refundPolicy, feeCollection } from "@/content/academy";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Jadvix Academy refund policy: one-time payments are non-refundable; monthly installments are refundable for the remaining months counted from the current month.",
  alternates: { canonical: "/legal/refund" },
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Refund Policy" />
      <Section>
        <div className="prose-legal">
          <p className="text-slate-500">Last updated: on enrolment terms in force at the time of payment.</p>

          <h2>1. One-time payments</h2>
          <p>{refundPolicy.oneTime}</p>

          <h2>2. Monthly installments</h2>
          <p>{refundPolicy.monthly}</p>
          <ul>
            <li>On withdrawal, the auto-debit is cancelled.</li>
            <li>
              The current month&apos;s installment (if already debited) plus all
              remaining months are refunded or not charged.
            </li>
            <li>Installments for completed months are not refunded.</li>
          </ul>

          <h2>3. How refunds are made</h2>
          <p>{refundPolicy.method}</p>
          <ul>
            {feeCollection.map((c) => (
              <li key={c.audience}>
                <strong>{c.audience}:</strong> {c.method}
              </li>
            ))}
          </ul>

          <h2>4. How to withdraw</h2>
          <p>
            To withdraw and stop future debits, contact the Academy in writing.
            We will cancel your subscription and process any refund due under
            this policy to your original payment method.
          </p>

          <p className="rounded-xl border border-white/10 bg-night-800/60 p-4 text-sm text-slate-400">
            This refund policy forms part of the Jadvix Academy Terms &amp;
            Conditions. Where this page and the Terms differ on refunds, this
            page prevails.
          </p>
        </div>
      </Section>
    </>
  );
}
