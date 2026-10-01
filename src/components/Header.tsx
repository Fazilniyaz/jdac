"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { TriStripe } from "@/components/TriStripe";
import { navLinks } from "@/content/academy";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-steel/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Jadvix Academy — home" className="shrink-0">
          <Logo priority className="h-8 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-mist hover:text-navy",
                    isActive(link.href) && "text-blue-600"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/apply" className="btn-primary hidden sm:inline-flex">
            Apply Now
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-steel/60 bg-white lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium text-navy/80 hover:bg-mist",
                    isActive(link.href) && "text-blue-600"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/apply" className="btn-primary w-full">
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <TriStripe />
    </header>
  );
}
