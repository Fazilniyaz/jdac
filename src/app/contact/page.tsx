import type { Metadata } from "next";
import { Mail, Phone, MapPin, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact, offices, company } from "@/content/academy";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jadvix Academy. Send us a message or reach our offices in Ruislip (UK), Chennai, and Coimbatore (India).",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        lead="Questions about the program, fees, or the next cohort? Send a message and we'll get back to you."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <aside>
            <h2 className="text-2xl">Reach us</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-slate-400">{contact.email}</p>
                  {contact.emailIsPlaceholder && <TodoTag />}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-white">Phone / WhatsApp</p>
                  <p className="text-sm text-slate-400">{contact.phone}</p>
                  {contact.phoneIsPlaceholder && <TodoTag />}
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-lg">Offices</h3>
            <ul className="mt-4 space-y-3">
              {offices.map((o) => (
                <li key={`${o.city}-${o.country}`} className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-blue-400" />
                  <span className="text-sm text-slate-300">
                    {o.city}, {o.country}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-500">{company.footerLine}</p>
          </aside>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}

/** Visible marker that a contact detail is a placeholder (see guardrails). */
function TodoTag() {
  return (
    <div className="mt-2 flex items-center gap-2 rounded-xl border border-orange-500/40 bg-orange/10 px-3 py-2">
      <AlertTriangle size={14} className="shrink-0 text-orange" />
      <span className="text-xs text-orange-100">
        TODO: set a real value via NEXT_PUBLIC_CONTACT_* env.
      </span>
    </div>
  );
}
