import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { company, overview, retryPolicy, internship } from "@/content/academy";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing enrolment in the Jadvix Academy program, including progression, evaluations, internships, fees, and intellectual property.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <Section>
        <div className="prose-legal">
          <p className="rounded-lg bg-orange-50 p-4 text-sm text-orange-600">
            TODO: These terms are a working draft and must be reviewed by legal
            before publication.
          </p>

          <h2>1. The program</h2>
          <p>
            {company.academyName} (operated by {company.legalName}) provides a{" "}
            {company.programType}: &ldquo;{company.tagline}&rdquo;. The program
            runs for {overview.trainingMonths} months across three stages —
            Frontend, Backend, and Agentic AI — followed, where offered, by a{" "}
            {internship.lengthMonths}-month paid internship. Delivery is{" "}
            {overview.delivery.toLowerCase()}.
          </p>

          <h2>2. Progression and evaluations</h2>
          <ul>
            <li>
              Progress is milestone-gated. Each stage ends in an evaluation that
              must be cleared to unlock the next stage and the matching
              internship.
            </li>
            <li>
              The sequential rule applies to all students, including lateral
              (single-stage) entrants.
            </li>
            <li>{retryPolicy.summary}</li>
          </ul>

          <h2>3. Internships and employment</h2>
          <ul>
            <li>{internship.capacityNote}</li>
            <li>{internship.terms}</li>
            <li>
              Participation in the program and clearing evaluations create a
              pathway to employment at {company.legalName} but do not constitute
              a guarantee of an internship or a job.
            </li>
            <li>{internship.conversion}</li>
          </ul>

          <h2>4. Fees and payments</h2>
          <p>
            Fees, payment plans, and collection methods are described on the{" "}
            <Link href="/fees" className="text-blue-600 underline">
              Fees
            </Link>{" "}
            page and are payable in Indian Rupees (INR). Monthly plans are
            collected by automated recurring payment.
          </p>

          <h2>5. Refunds</h2>
          <p>
            Refunds are governed by our{" "}
            <Link href="/legal/refund" className="text-blue-600 underline">
              Refund Policy
            </Link>
            , which forms part of these terms.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            Course materials are the property of {company.legalName} and are
            provided for your personal learning. Interns sign standard
            confidentiality and IP assignment terms before starting an
            internship.
          </p>

          <h2>7. Conduct</h2>
          <p>
            Students are expected to engage professionally and in line with
            Jadvix engineering standards. Serious or repeated breaches may lead
            to removal from the program.
          </p>

          <h2>8. Changes</h2>
          <p>
            {company.legalName} may update the curriculum, schedule, fees, and
            these terms. Material changes will be communicated to enrolled
            students.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions about these terms can be sent via our{" "}
            <Link href="/contact" className="text-blue-600 underline">
              Contact
            </Link>{" "}
            page.
          </p>
        </div>
      </Section>
    </>
  );
}
