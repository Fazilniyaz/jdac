import type { Config } from "tailwindcss";

/**
 * Brand tokens derive from the Jadvix logo. Navy dominates, blue is the primary
 * accent, orange drives CTAs, red is used sparingly. See CLAUDE.md "Brand rules".
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#4599D3",
          50: "#EAF4FB",
          100: "#D5E9F6",
          200: "#AED4EC",
          300: "#86BEE2",
          400: "#4599D3",
          500: "#2E82BF",
          600: "#246699",
          700: "#1B4D73",
        },
        red: { DEFAULT: "#E01E26", 600: "#C01118" },
        orange: {
          DEFAULT: "#F05623",
          50: "#FEF0EB",
          100: "#FBDACE",
          500: "#F05623",
          600: "#D4430F",
        },
        navy: {
          DEFAULT: "#0B1F33",
          900: "#07131F",
          800: "#0E2A45",
          700: "#13395C",
          600: "#1C4D78",
        },
        // Dark theme base + panels (from the reference agency site).
        night: {
          DEFAULT: "#081421",
          800: "#0B1C2C",
          700: "#0F2335",
        },
        panel: {
          DEFAULT: "#0E1F30",
          soft: "#12283C",
        },
        ink: "#040707",
        mist: "#F2F6FA",
        steel: "#D5DEE7",
      },
      fontFamily: {
        // Wired up via next/font CSS variables in layout.tsx.
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "78rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,31,51,0.06), 0 8px 24px rgba(11,31,51,0.08)",
        float: "0 10px 40px rgba(0,0,0,0.35)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
