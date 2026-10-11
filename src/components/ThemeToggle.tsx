"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/** Light/dark switch. Persists to localStorage `jx-theme`, as jadvix.uk does. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("jx-theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={16} />}
    </button>
  );
}
