import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
