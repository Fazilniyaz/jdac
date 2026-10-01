import Link from "next/link";
import { MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { TriStripe } from "@/components/TriStripe";
import {
  company,
  offices,
  navLinks,
  legalLinks,
} from "@/content/academy";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-navy text-white/80">
      <TriStripe />
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="light" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {company.tagline}. A {company.programType}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Offices
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {offices.map((o) => (
              <li key={`${o.city}-${o.country}`} className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-blue-300" />
                <span>
                  {o.city}, {o.country}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/apply" className="font-semibold text-orange hover:text-orange-500">
                Apply Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
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
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{company.footerLine}</p>
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
