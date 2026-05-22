import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/site.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#05070a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { enabled, adsenseClient } = siteConfig.ads;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {enabled && adsenseClient ? (
          <Script
            id="adsense-loader"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </body>
    </html>
  );
}
