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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cliner for Mac — Complete Mac App Uninstaller",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliner — Complete Mac App Uninstaller ($3 One-Time)",
    description:
      "Free up gigabytes of wasted Mac storage. No subscriptions. Just $3 once for a cleaner, faster Mac.",
    images: ["/og-image.png"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icons/128x128@2x.png", sizes: "256x256", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "agent-seo:llms-txt": "https://cliner.app/llms.txt",
    "agent-seo:llms-full-txt": "https://cliner.app/llms-full.txt",
    "ai:purpose": "Consumer marketing, technical architecture, and purchasing guide for Cliner Mac app uninstaller ($3 one-time purchase)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://cliner.app/#software",
        name: "Cliner",
        operatingSystem: "macOS 13.0 or later (Apple Silicon & Intel)",
        applicationCategory: "UtilitiesApplication",
        url: "https://cliner.app",
        image: "https://cliner.app/og-image.png",
        screenshot: "https://cliner.app/og-image.png",
        offers: {
          "@type": "Offer",
          price: "3.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://cliner.app",
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
        author: {
          "@type": "Organization",
          "@id": "https://cliner.app/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://cliner.app/#organization",
        name: "Cliner",
        url: "https://cliner.app",
        logo: "https://cliner.app/app-icon.png",
        sameAs: ["https://twitter.com/clinerapp"],
      },
      {
        "@type": "WebSite",
        "@id": "https://cliner.app/#website",
        url: "https://cliner.app",
        name: "Cliner for Mac",
        publisher: {
          "@id": "https://cliner.app/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://cliner.app/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why do I need Cliner if macOS already has Trash?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When you drag an app to Trash, macOS only deletes the .app bundle. Hidden caches, containers, preferences, logs and old updates remain scattered across ~/Library — often gigabytes worth. Cliner finds every trace and removes it with one click.",
            },
          },
          {
            "@type": "Question",
            name: "Is the $3 a subscription?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. It's a one-time payment. Pay $3 once and you own Cliner for life on all your personal Macs, with all future updates included. No monthly fees, no renewals.",
            },
          },
          {
            "@type": "Question",
            name: "How does checkout and delivery work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Payments are handled securely via Dodo Payments. Right after purchase you receive an instant download link and license key by email. Activate and you're done.",
            },
          },
          {
            "@type": "Question",
            name: "What if I delete something by mistake?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cliner is safe and reversible. Nothing is permanently deleted — everything is moved to macOS Trash. Just open Trash and click Put Back if you change your mind.",
            },
          },
          {
            "@type": "Question",
            name: "Will it bother me during app updates?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Cliner is smart enough to distinguish a fresh install or update from a true uninstall, so it stays silent and never interrupts you.",
            },
          },
          {
            "@type": "Question",
            name: "Which Macs are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All modern Macs running macOS 13 Ventura, macOS 14 Sonoma, or macOS 15 Sequoia — including Apple Silicon (M1/M2/M3/M4) and Intel.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <link rel="help" href="/llms.txt" type="text/plain" title="LLM Agent SEO Context" />
        <link rel="alternate" href="/llms-full.txt" type="text/plain" title="Full LLM Context" />
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
