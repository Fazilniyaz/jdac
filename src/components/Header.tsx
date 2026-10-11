"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/content/academy";
import { cn } from "@/lib/cn";

/** Floating pill header — kept as its own element above the page, as before. */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="jx-settle sticky top-0 z-50 pt-4">
      <div className="container-page">
        <div className="flex items-center justify-between gap-4 rounded-full border border-line bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] px-4 py-2 shadow-md backdrop-blur-xl sm:px-5">
          <Link href="/" aria-label="Jadvix Academy — home" className="flex shrink-0 items-center gap-3">
            <Logo className="h-7 w-auto sm:h-8" />
            <span aria-hidden className="jx-label border-l border-line pl-3 text-[11px] text-ink-2">
              Academy
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "whitespace-nowrap rounded-full px-3.5 py-2 text-[14.5px] font-medium text-ink-2 transition-colors hover:text-ink",
                      isActive(link.href) && "bg-surface-2 text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/apply" className="btn btn-ink btn-sm hidden sm:inline-flex">
              Apply Now <ArrowUpRight size={16} />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface-2 xl:hidden"
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
            className="mt-2 rounded-panel border border-line bg-surface p-3 shadow-md xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-card px-4 py-3 text-base font-medium text-ink-2 hover:bg-surface-2 hover:text-ink",
                      isActive(link.href) && "bg-surface-2 text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/apply" className="btn btn-spark w-full">
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
