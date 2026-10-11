import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroCurtain } from "@/components/IntroCurtain";
import { company, siteUrl } from "@/content/academy";

// Same typefaces as jadvix.uk: Clash Display (headings), Satoshi (body/UI),
// Space Grotesk (micro-labels only). Clash + Satoshi are self-hosted.
const display = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-display",
});
const body = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
});
const label = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-label",
});

const description = `${company.academyName}, a ${company.legalName} product — ${company.tagline}. A ${company.programType} with a 6-month paid internship and a direct pathway to employment at ${company.legalName}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.academyName} · ${company.tagline}`,
    template: `%s · ${company.academyName}`,
  },
  description,
  applicationName: company.academyName,
  keywords: [
    "Jadvix Academy",
    "Jadvix",
    "Full Stack Development",
    "Agentic AI",
    "train to hire",
    "paid internship",
    "React",
    "Node.js",
    "Claude Code",
    "Chennai",
    "Coimbatore",
    "UK",
  ],
  openGraph: {
    type: "website",
    siteName: company.academyName,
    title: `${company.academyName} · ${company.tagline}`,
    description,
    url: siteUrl,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.academyName} · ${company.tagline}`,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#041826",
  width: "device-width",
  initialScale: 1,
};

/*
 * Runs before first paint, so neither the theme nor the intro flashes.
 * - Theme: saved choice (`jx-theme`, same key as jadvix.uk), else light.
 * - Intro: once per browser session, never for reduced motion. The attribute is
 *   removed after the curtain has lifted so later navigations are not delayed.
 */
const prePaint = `(function(){var d=document.documentElement;try{d.dataset.theme=localStorage.getItem('jx-theme')||'light'}catch(e){d.dataset.theme='light'}try{var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;if(!rm&&!sessionStorage.getItem('jx-intro')){sessionStorage.setItem('jx-intro','1');d.setAttribute('data-intro','');setTimeout(function(){d.removeAttribute('data-intro')},2100)}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${label.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <script dangerouslySetInnerHTML={{ __html: prePaint }} />
        <IntroCurtain />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />

        {/* Ropix voice widget ("Sophia"). The data-widget value is a public
            publishable key tied to this site, not a secret. */}
        <Script
          src="https://app.ropix.ai/widget.js"
          data-widget="pk_8d72243dd8e850b8120c6ba9fa1865887fb9ee1c5f887a35"
          data-position="bottom-right"
          data-offset-x="1.25"
          data-offset-y="1.25"
          data-launcher="1"
          data-collapsed-w="9.52"
          data-collapsed-h="2.8"
          strategy="afterInteractive"
        />
        <noscript>
          <iframe
            src="https://app.ropix.ai/w/pk_8d72243dd8e850b8120c6ba9fa1865887fb9ee1c5f887a35"
            title="Talk to Sophia"
            allow="microphone; autoplay"
            style={{
              position: "fixed",
              bottom: "1.25rem",
              right: "1.25rem",
              width: "360px",
              height: "640px",
              maxWidth: "100%",
              border: 0,
              zIndex: 2147483647,
              background: "transparent",
            }}
          />
        </noscript>
      </body>
    </html>
  );
}
