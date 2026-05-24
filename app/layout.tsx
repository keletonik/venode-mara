import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.displayName} · ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.displayName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.displayName,
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#08070a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "venode",
            url: siteConfig.labUrl,
            description:
              "Venode is an AI research lab. We build the tools we want to exist.",
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: siteConfig.displayName,
            applicationCategory: "SecurityApplication",
            description: siteConfig.description,
            url: siteConfig.url,
          }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
