import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/Reveal";
import { contact, offices, company } from "@/content/academy";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jadvix Academy — email contact@jadvix.uk, call the UK or India team, or send us a message. Offices in Ruislip (UK), Chennai, and Coimbatore (India).",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        lead="Questions about the program, fees, or the next cohort? Call, email, or send a message — our UK and India teams reply within one working day."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <aside>
            <Reveal>
              <h2 className="jx-headline">Reach us</h2>
              <ul className="mt-6 divide-y divide-[var(--line)] border-y border-line">
                <li>
                  <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 py-5">
                    <span className="icon-tile">
                      <Mail size={19} />
                    </span>
                    <span>
                      <span className="jx-label block text-[11px] text-muted">Email</span>
                      <span className="text-lg font-medium text-ink group-hover:text-accent">{contact.email}</span>
                    </span>
                  </a>
                </li>
                {contact.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="group flex items-center gap-4 py-5">
                      <span className="icon-tile">
                        <Phone size={19} />
                      </span>
                      <span>
                        <span className="jx-label block text-[11px] text-muted">
                          Phone / WhatsApp · {p.region}
                        </span>
                        <span className="text-lg font-medium text-ink group-hover:text-accent">{p.display}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90}>
              <h3 className="mt-10 text-lg">Offices</h3>
              <ul className="mt-4 space-y-3">
                {offices.map((o) => (
                  <li key={`${o.city}-${o.country}`} className="flex items-center gap-3 text-[15px] text-ink-2">
                    <MapPin size={17} className="shrink-0 text-accent" />
                    {o.city}, {o.country}
                  </li>
                ))}
              </ul>
              <div className="photo mt-8 aspect-[16/8]">
                <Image src="/images/contact.webp" alt="The Jadvix brand mark in a digital workspace" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
              </div>
              <p className="mt-4 text-xs text-muted">{company.footerLine}</p>
            </Reveal>
          </aside>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
