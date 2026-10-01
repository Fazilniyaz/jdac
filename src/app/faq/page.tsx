import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/content/academy";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on how the program works, failing a gate, internship offers, refunds, payment methods, online vs offline delivery, the certificate, and the coordinators.",
  alternates: { canonical: "/faq" },
};

// JSON-LD for FAQ rich results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, trusted content from our own config.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        lead="Can't find what you need? Reach out and we'll help."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/apply" className="btn-primary">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
