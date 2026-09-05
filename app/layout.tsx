import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  themeColor: "#060608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Cliner — Uninstall Mac apps completely. Not halfway.",
  description:
    "Dragging apps to Trash leaves gigabytes of hidden junk. Cliner finds and removes every leftover in one click. Fast, safe, and $3 for life.",
  applicationName: "Cliner",
  authors: [{ name: "Cliner Team", url: "https://cliner.app" }],
  keywords: [
    "cliner",
    "cliner mac",
    "mac uninstaller",
    "mac app cleaner",
    "clean mac storage",
    "delete mac apps completely",
    "mac disk space cleaner",
    "cleanmymac alternative",
    "appcleaner alternative",
    "reclaim mac storage",
    "best mac uninstaller",
  ],
  creator: "Cliner",
  publisher: "Cliner",
  metadataBase: new URL("https://cliner.app"),
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cliner.app",
    siteName: "Cliner for Mac",
    title: "Cliner — Uninstall Mac Apps Completely. Not Halfway.",
    description:
      "Reclaim gigabytes of hidden storage. Drag an app to Trash and Cliner removes all residual files in seconds. Only $3 for lifetime access.",
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Cliner for Mac App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliner — Complete Mac App Uninstaller ($3 One-Time)",
    description:
      "Free up gigabytes of wasted Mac storage. No subscriptions. Just $3 once for a cleaner, faster Mac.",
    images: ["/app-icon.png"],
    creator: "@clinerapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/app-icon.png",
    shortcut: "/app-icon.png",
    apple: "/app-icon.png",
  },
  other: {
    "agent-seo:llms-txt": "https://cliner.app/llms.txt",
    "ai:purpose": "Consumer marketing and purchasing guide for Cliner Mac app uninstaller ($3 one-time purchase)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cliner",
    operatingSystem: "macOS 13.0 or later (Apple Silicon & Intel)",
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "9.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description:
      "Cliner removes macOS apps and their hidden leftovers completely. Reclaim gigabytes of wasted storage in one click without subscriptions.",
    softwareVersion: "1.0.0",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1420",
    },
    featureList: [
      "1-Click complete app removal",
      "Automatic Trash detection",
      "Reclaims gigabytes of hidden caches and leftover files",
      "100% safe & reversible through Mac Trash",
      "Lifetime license with no monthly or yearly subscriptions",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <link rel="help" href="/llms.txt" type="text/plain" title="LLM Agent SEO Context" />
      </head>
      <body className="min-h-screen bg-[#060608] text-[#fafafa] antialiased selection:bg-white selection:text-black flex flex-col font-sans">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {children}
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
