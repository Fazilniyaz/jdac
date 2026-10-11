import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company, siteUrl } from "@/content/academy";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const description = `${company.academyName} — ${company.tagline}. A ${company.programType} with a 6-month paid internship and a direct pathway to employment at ${company.legalName}.`;

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
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
