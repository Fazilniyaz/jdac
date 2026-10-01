import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/academy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Jadvix Academy collects and uses the information you provide through enquiry and contact forms. Draft — to be reviewed by legal.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="prose-legal">
          <p className="rounded-xl border border-orange-500/30 bg-orange/10 p-4 text-sm text-orange-100">
            TODO: This privacy policy is a draft and must be reviewed by legal
            (including UK GDPR / DPDP Act India compliance) before publication.
          </p>

          <h2>1. Who we are</h2>
          <p>
            This website is operated by {company.legalName} for{" "}
            {company.academyName}. {company.footerLine}.
          </p>

          <h2>2. What we collect</h2>
          <p>
            When you submit the enquiry (Apply) or Contact form, we collect the
            information you provide — such as your name, email, phone/WhatsApp
            number, country, background, and message. This website is a static
            site; it does not use tracking cookies or analytics by default.
          </p>

          <h2>3. How we use it</h2>
          <ul>
            <li>To respond to your enquiry and tell you about cohorts.</li>
            <li>To administer your application and enrolment if you proceed.</li>
          </ul>
          <p>
            We do not sell your personal information or share it with unrelated
            third parties.
          </p>

          <h2>4. Form handling</h2>
          <p>
            TODO: Form submissions are not yet connected to a storage or email
            provider. When a provider is connected, this section will name it
            and describe where your data is processed and stored.
          </p>

          <h2>5. Payments</h2>
          <p>
            Payments, where applicable, are processed by third-party providers
            (Razorpay for India; Stripe for international). Their handling of
            your payment data is governed by their own privacy policies.
          </p>

          <h2>6. Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of the
            personal information you have given us. TODO: confirm the applicable
            data-protection framework and response times with legal.
          </p>

          <h2>7. Contact</h2>
          <p>
            For any privacy question, use our{" "}
            <Link href="/contact" className="text-blue-400 underline">
              Contact
            </Link>{" "}
            page.
          </p>
        </div>
      </Section>
    </>
  );
}
