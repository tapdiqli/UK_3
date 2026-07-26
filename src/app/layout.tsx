import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/data";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { AgeGate } from "@/components/layout/AgeGate";
import { GclidCapture } from "@/components/tracking/GclidCapture";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "UK online casinos",
    "casino reviews",
    "casino bonuses",
    "UK Gambling Commission",
    "responsible gambling",
    "casino comparison",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "reference",
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en-GB",
  audience: {
    "@type": "Audience",
    audienceType: "Adults 18+",
    geographicArea: { "@type": "Country", name: "United Kingdom" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen bg-ink-900 font-sans">
        {/* Runs before the gate is painted so returning visitors never see it flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(window.localStorage.getItem('bbcl-age-verified')==='1'){document.documentElement.setAttribute('data-age-verified','1')}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ruby focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <AgeGate />
        <CookieConsent />
        <GclidCapture />
      </body>
    </html>
  );
}
