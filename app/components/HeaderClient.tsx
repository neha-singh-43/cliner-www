"use client";

import { useState } from "react";
import Image from "next/image";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ||
  process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL ||
  "https://dodo.pe/cliner";

export default function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#060608]/70 border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" aria-label="Cliner for Mac - Home">
          <div className="relative w-9 h-9 rounded-[10px] overflow-hidden ring-1 ring-white/15 shadow-[0_2px_12px_rgba(59,130,246,0.22)] group-hover:ring-blue-500/40 transition-all bg-black/40">
            <Image
              src="/app-icon.png"
              alt="Cliner for Mac Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain"
              priority
              unoptimized
            />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-[700] text-[18px] tracking-[-0.03em] text-white">Cliner</span>
            <span className="text-[10px] tracking-[0.14em] font-semibold text-zinc-500 uppercase group-hover:text-zinc-400 transition-colors">
              For Mac
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-[450] tracking-[-0.01em]" aria-label="Primary">
          <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">
            How it works
          </a>
          <a href="#features" className="text-zinc-400 hover:text-white transition-colors">
            Features
          </a>
          <a href="#compare" className="text-zinc-400 hover:text-white transition-colors">
            Compare
          </a>
          <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-zinc-400 hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 h-9 rounded-full bg-white text-black text-[13px] font-semibold tracking-[-0.01em] hover:bg-zinc-100 transition-colors shadow-[0_1px_10px_rgba(255,255,255,0.15)] active:scale-[0.98]"
          >
            Get Cliner — $3
          </a>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center px-4 h-9 rounded-full bg-white text-black text-[13px] font-semibold"
          >
            $3
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className="flex flex-col gap-1.5 w-3.5">
              <span className={`h-px bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`h-px bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-nav" className="lg:hidden border-t border-white/10 bg-[#0a0a0c] px-6 py-5">
          <nav className="flex flex-col gap-4 text-sm" aria-label="Mobile">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 py-1">
              How it works
            </a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 py-1">
              Features
            </a>
            <a href="#compare" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 py-1">
              Compare
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 py-1">
              Pricing
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 py-1">
              FAQ
            </a>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full h-11 rounded-full bg-white text-black font-semibold flex items-center justify-center"
            >
              Get Cliner — $3 Lifetime
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
