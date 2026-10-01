"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/content/academy";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="container-page">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-night-800/80 px-4 py-2.5 shadow-float backdrop-blur-xl sm:px-5">
          <Link href="/" aria-label="Jadvix Academy — home" className="shrink-0">
            <Logo variant="light" priority className="h-7 w-auto sm:h-8" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white",
                      isActive(link.href) && "bg-white/10 text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/apply" className="btn-secondary hidden h-10 px-5 py-0 text-sm sm:inline-flex">
              Apply Now <ArrowUpRight size={16} />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="mt-2 rounded-3xl border border-white/10 bg-night-800/95 p-3 shadow-float backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/10 hover:text-white",
                      isActive(link.href) && "bg-white/10 text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/apply" className="btn-primary w-full">
                  Apply Now <ArrowUpRight size={16} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
