"use client";

import React, { useState } from "react";
import Image from "next/image";
import InteractiveAppDemo from "./InteractiveAppDemo";

// Polar.sh checkout URL configuration
// You can set NEXT_PUBLIC_POLAR_CHECKOUT_URL in .env.local or update this fallback link
const POLAR_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL || "https://buy.polar.sh/cliner";

export default function Home() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const testimonials = [
    {
      name: "Marcus Sterling",
      role: "Product Designer",
      comment: "I thought deleting an app was as simple as dragging it to the trash. Cliner freed up 34 GB of leftover cache files from apps I deleted months ago. Best $9 I've spent on my Mac.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Photographer & Content Creator",
      comment: "Finally, a Mac cleaner that doesn't charge a $40 yearly subscription or nag me every 5 minutes. Super clean, fast, and does exactly what it promises.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Software Consultant",
      comment: "Super smooth. I drag an app into the trash, Cliner immediately asks if I want to delete the residual junk, and it's gone in one second. Worth every penny.",
      rating: 5,
    },
  ];

  const faqList = [
    {
      q: "Why do I need Cliner if Mac already has a Trash can?",
      a: "When you drag an app to the Mac Trash, macOS only deletes the app icon itself. Hidden leftover files, temporary download caches, and old settings remain trapped on your hard drive, silently taking up gigabytes of space. Cliner finds and removes all of it with a single click."
    },
    {
      q: "Is the $9 price a one-time payment or a subscription?",
      a: "It's a 100% one-time payment. You pay $9 once and get a lifetime license with all future updates included. No monthly fees, no yearly renewals, and no surprise charges."
    },
    {
      q: "How does the Polar.sh checkout and delivery work?",
      a: "Payments are processed securely via Polar.sh. Immediately after your purchase, you receive an instant download link for the macOS app and your lifetime license activation key via email."
    },
    {
      q: "What if I delete something by mistake?",
      a: "Cliner is 100% safe and reversible. Instead of permanently destroying files, Cliner sends everything safely into your Mac's Trash. If you ever change your mind, simply open your Trash and click 'Put Back'."
    },
    {
      q: "How easy is it to use?",
      a: "It's completely effortless. You don't even have to open Cliner manually—whenever you drag any app into your Mac Trash, Cliner pops up automatically, shows you the hidden leftover files, and cleans them with one tap."
    },
    {
      q: "What Mac models and macOS versions are supported?",
      a: "Cliner works seamlessly on all modern Macs (MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio) running macOS 13 (Ventura), macOS 14 (Sonoma), or macOS 15 (Sequoia)—including both Apple Silicon (M1/M2/M3/M4) and Intel chips."
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#09090b] text-[#fafafa] relative selection:bg-blue-600 selection:text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] hero-glow pointer-events-none -z-0" />

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 border-b border-blue-500/20 py-2 px-4 text-center text-xs sm:text-sm text-zinc-200">
        ✨ <strong>Launch Deal:</strong> Get Cliner for just <strong className="text-white underline decoration-blue-400">$9 one-time</strong> (Normally $29). No monthly subscriptions.
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#09090b]/85 border-b border-zinc-800/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Cliner for Mac Logo"
              width={38}
              height={38}
              className="rounded-xl shadow-lg ring-1 ring-white/15"
            />
            <span className="font-bold text-lg tracking-tight flex items-center gap-2 text-white">
              Cliner
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                for Mac
              </span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-white transition-colors">Why Cliner</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={POLAR_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20 active:scale-95"
            >
              Get Cliner — $9
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section (Split: Content Left, Interactive App Demo Right) */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Side: Marketing Content & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm text-zinc-300 mb-6 backdrop-blur shadow-inner">
              <span className="text-amber-400">★★★★★</span>
              <span>Rated 4.9/5 by 1,400+ Mac users</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Uninstall Mac apps completely. <br />
              <span className="text-gradient-accent">Not halfway.</span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl">
              Dragging an app to Trash leaves gigabytes of hidden caches and leftover files. <strong className="text-white font-medium">Cliner cleans everything in 1-click</strong> so your Mac stays fast and spacious.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                id="hero-buy-button"
                href={POLAR_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Buy Cliner   — $9</span>
                <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-white/20 text-white">
                  Lifetime
                </span>
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
              >
                Explore Features ↓
              </a>
            </div>

            {/* Feature Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                One-Time Payment ($9)
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Secure Polar.sh Checkout
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                30-Day Guarantee
              </span>
            </div>

            {/* Pain point callout */}
            <div className="mt-8 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-left max-w-md">
              <div className="text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1.5">
                <span className="text-amber-400">💡</span> Did you know?
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A typical app like Spotify, Slack, or VS Code leaves behind <strong className="text-zinc-200">1 GB to 5 GB</strong> of hidden caches even after being trashed. Test the live demo on the right to see!
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Real-Time App Experience Simulator */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <InteractiveAppDemo />
          </div>

        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <section id="how-it-works" className="py-20 px-6 max-w-6xl mx-auto z-10 border-t border-zinc-800/70">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-3">Simple & Automatic</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Cleaning your Mac takes zero effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            onClick={() => setActiveStep(1)}
            className={`p-8 rounded-3xl border transition-all cursor-pointer ${activeStep === 1
                ? "bg-zinc-900 border-blue-500 shadow-xl shadow-blue-500/10 scale-105"
                : "card-gradient border-zinc-800/80 hover:border-zinc-700"
              }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-extrabold text-xl mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Trash Any App</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Just drag any unwanted app to your Mac Trash like you normally do, or drop it into Cliner.
            </p>
          </div>

          <div
            onClick={() => setActiveStep(2)}
            className={`p-8 rounded-3xl border transition-all cursor-pointer ${activeStep === 2
                ? "bg-zinc-900 border-blue-500 shadow-xl shadow-blue-500/10 scale-105"
                : "card-gradient border-zinc-800/80 hover:border-zinc-700"
              }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-extrabold text-xl mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cliner Spots the Leftovers</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Cliner automatically detects the action and displays all the hidden gigabytes linked to that app.
            </p>
          </div>

          <div
            onClick={() => setActiveStep(3)}
            className={`p-8 rounded-3xl border transition-all cursor-pointer ${activeStep === 3
                ? "bg-zinc-900 border-blue-500 shadow-xl shadow-blue-500/10 scale-105"
                : "card-gradient border-zinc-800/80 hover:border-zinc-700"
              }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-xl mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-2">1-Click Clean</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Hit "Clean Leftovers" and your storage is instantly restored. Safe, fast, and 100% reversible.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Cliner Benefits Grid */}
      <section id="benefits" className="py-20 px-6 max-w-6xl mx-auto z-10 border-t border-zinc-800/70">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-3">Why You'll Love Cliner</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Everything you need. Nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl card-gradient">
            <div className="text-3xl mb-4">💾</div>
            <h3 className="text-lg font-bold text-white mb-2">Reclaim Gigabytes Instantly</h3>
            <p className="text-sm text-zinc-400">
              Free up valuable disk space on your Mac SSD by purging old caches, containers, and temporary app data.
            </p>
          </div>

          <div className="p-7 rounded-2xl card-gradient">
            <div className="text-3xl mb-4">🚫</div>
            <h3 className="text-lg font-bold text-white mb-2">Zero Nagging or Upsells</h3>
            <p className="text-sm text-zinc-400">
              No constant popups, no fake virus alerts, no battery-draining background helpers. Cliner works silently.
            </p>
          </div>

          <div className="p-7 rounded-2xl card-gradient">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-lg font-bold text-white mb-2">100% Safe & Reversible</h3>
            <p className="text-sm text-zinc-400">
              All cleaned files go straight to your Mac Trash. If you ever make a mistake, simply restore them in Finder.
            </p>
          </div>

          <div className="p-7 rounded-2xl card-gradient">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">Blazing Fast & Lightweight</h3>
            <p className="text-sm text-zinc-400">
              Built natively for macOS. Starts in milliseconds, uses almost no battery, and never slows down your Mac.
            </p>
          </div>

          <div className="p-7 rounded-2xl card-gradient">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-bold text-white mb-2">Smart Update Filter</h3>
            <p className="text-sm text-zinc-400">
              When an app updates itself in the background, Cliner is smart enough to stay silent and not bother you.
            </p>
          </div>

          <div className="p-7 rounded-2xl card-gradient">
            <div className="text-3xl mb-4">💳</div>
            <h3 className="text-lg font-bold text-white mb-2">No Recurring Subscriptions</h3>
            <p className="text-sm text-zinc-400">
              Pay $9 once   and own it for life. No $40/year renewals, no expiring licenses, and free future updates.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews / Testimonials */}
      <section id="testimonials" className="py-20 px-6 max-w-6xl mx-auto z-10 border-t border-zinc-800/70">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-3">Customer Love</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Loved by Mac users worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-3xl card-gradient flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {"★".repeat(t.rating)}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>
              <div className="border-t border-zinc-800/80 pt-4">
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-xs text-zinc-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section ($9 Offer with Polar Checkout) */}
      <section id="pricing" className="py-24 px-6 max-w-4xl mx-auto z-10 border-t border-zinc-800/70">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            One price. Lifetime access.
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            No subscriptions. No hidden upgrades. Just a clean Mac forever.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500 via-purple-500/40 to-zinc-800 max-w-xl mx-auto shadow-2xl shadow-blue-900/30">
          <div className="rounded-[22px] bg-[#121216] p-8 sm:p-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Lifetime License
            </div>

            <div className="flex items-baseline justify-center gap-2 mt-4">
              <span className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight">$9</span>
              <span className="text-zinc-400 text-lg line-through">$29</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                SAVE 68%
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-2">One-time payment • All future updates included</p>

            <div className="mt-8 space-y-3.5 text-left text-sm text-zinc-300 border-t border-b border-zinc-800/80 py-6">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Complete uninstallation with 100% leftover removal</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Automatic background Trash monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Reclaims hidden container caches & temporary data</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>100% safe & reversible through macOS Trash</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Use on all your personal Macs (Apple Silicon & Intel)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>30-day no-questions-asked money back guarantee</span>
              </div>
            </div>

            {/* Buy CTA   */}
            <a
              id="buy-now-cta"
              href={POLAR_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Cliner Now — $9</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <p className="mt-4 text-xs text-zinc-500 flex items-center justify-center gap-1.5">
              <span>🔒 Powered by</span>
              <strong className="text-zinc-300">Polar.sh</strong>
              <span>• Instant license delivery</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto z-10 border-t border-zinc-800/70">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-3">FAQ</h2>
          <p className="text-3xl font-extrabold tracking-tight text-white">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl card-gradient border border-zinc-800/80">
              <h3 className="text-base font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center z-10 border-t border-zinc-800/70">
        <Image
          src="/app-icon.png"
          alt="Cliner Mac App"
          width={72}
          height={72}
          className="mx-auto rounded-2xl shadow-xl ring-1 ring-white/15 mb-6"
        />
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Keep your Mac fast, clean, and spacious.
        </h2>
        <p className="mt-4 text-zinc-400 max-w-md mx-auto text-base">
          Join thousands of Mac users who never worry about leftover junk again.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={POLAR_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Get Cliner for $9
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Cliner for Mac. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/llms.txt" className="hover:text-blue-400 font-mono transition-colors">llms.txt (Agent-SEO)</a>
            <a href="/robots.txt" className="hover:text-zinc-300 font-mono transition-colors">robots.txt</a>
            <a href="/sitemap.xml" className="hover:text-zinc-300 font-mono transition-colors">sitemap.xml</a>
          </div>
        </div>
      </section>
    </div>
  );
}
