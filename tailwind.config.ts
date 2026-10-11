import type { Config } from "tailwindcss";

/**
 * Jadvix design system — the same tokens as the jadvix.uk company site, so the
 * Academy reads as a Jadvix product. Theme-aware colours resolve to CSS
 * variables in src/app/globals.css (light by default, `html[data-theme=dark]`).
 * Brand colours from the logo stay fixed. See CLAUDE.md "Brand rules".
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // theme-aware surfaces + text
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        accent: "var(--accent-text)",
        // fixed brand
        brand: { DEFAULT: "#1fa6e0", ink: "#0a7cb0" },
        spark: { DEFAULT: "#ff6a2c", hover: "#ff7f47" },
        navy: { DEFAULT: "#041826", 900: "#041826", 800: "#071f30", 700: "#0b3b5c" },
        "on-navy": { DEFAULT: "#eaeff6", 2: "#a7b4c4" },
        // logo tri-colour (stripe motif)
        logo: { blue: "#4599D3", red: "#E01E26", orange: "#F05623" },
        success: "#16a34a",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        label: ["var(--font-label)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1240px" },
      borderRadius: {
        input: "var(--r-input)",
        card: "var(--r-card)",
        panel: "var(--r-panel)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        glow: "0 30px 80px -30px rgba(31, 166, 224, 0.35)",
      },
      transitionTimingFunction: { jx: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: { marquee: "marquee 40s linear infinite" },
    },
  },
  plugins: [],
};

export default config;
