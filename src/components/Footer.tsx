import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { TriStripe } from "@/components/TriStripe";
import { company, contact, offices, navLinks, legalLinks } from "@/content/academy";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="jx-navy mt-auto">
      <TriStripe />
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-8 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-navy-2">
            {company.academyName} is a {company.legalName} product — {company.tagline}, a{" "}
            {company.programType}.
          </p>
          <a
            href={company.parentUrl}
            target="_blank"
            rel="noopener"
            className="link-arrow mt-5 text-sm"
          >
            Visit jadvix.uk <ArrowUpRight size={15} />
          </a>
        </div>

        <div>
          <h3 className="jx-label text-on-navy">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-on-navy-2">
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail size={15} className="shrink-0 text-brand" /> {contact.email}
              </a>
            </li>
            {contact.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex items-center gap-2 hover:text-white">
                  <Phone size={15} className="shrink-0 text-brand" /> {p.display}
                  <span className="jx-label text-[10px] text-on-navy-2/70">{p.region}</span>
                </a>
              </li>
            ))}
            {offices.map((o) => (
              <li key={`${o.city}-${o.country}`} className="flex items-center gap-2">
                <MapPin size={15} className="shrink-0 text-brand" /> {o.city}, {o.country}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="jx-label text-on-navy">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-on-navy-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/apply" className="font-semibold text-spark hover:text-spark-hover">
                Apply Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="jx-label text-on-navy">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm text-on-navy-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-on-navy-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{company.footerLine}</p>
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
