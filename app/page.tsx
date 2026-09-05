import Image from "next/image";
import InteractiveAppDemo from "./InteractiveAppDemo";
import HeaderClient from "./components/HeaderClient";
import HowItWorksClient from "./components/HowItWorksClient";
import FaqClient from "./components/FaqClient";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ||
  process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL ||
  "https://dodo.pe/cliner";

const testimonials = [
  {
    name: "Marcus Sterling",
    role: "Product Designer",
    initials: "MS",
    comment:
      "I thought deleting an app was as simple as dragging it to Trash. Cliner freed 34 GB of leftover caches from apps I'd deleted months ago. Best $3 I've ever spent.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Photographer",
    initials: "ER",
    comment:
      "Finally, a Mac cleaner that doesn't charge $40/year or nag me every 5 minutes. Super clean, fast, and does exactly what it promises. No bloat.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Software Consultant",
    initials: "DC",
    comment:
      "Super smooth. I drag an app to Trash, Cliner asks if I want to clean the leftovers, and it's gone in one second. Worth every penny.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#060608] text-[#fafafa] relative selection:bg-white selection:text-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-full focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 opacity-[0.035] grid-pattern" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-white/[0.04] via-transparent to-transparent blur-[1px]" />
      </div>

      {/* Announcement */}
      <div className="relative z-20 w-full border-b border-white/[0.06] bg-white/[0.02] backdrop-blur">
        <div className="max-w-[1200px] mx-auto px-6 h-9 flex items-center justify-center gap-2 text-[12.5px] leading-none">
          <span className="hidden sm:inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-widest uppercase">
            Early Access
          </span>
          <span className="text-zinc-300">
            Launch price: <strong className="text-white font-semibold">$3 lifetime</strong>
            <span className="text-zinc-500 hidden sm:inline"> — normally $5 • No subscription, ever.</span>
          </span>
          <a
            href="#pricing"
            className="ml-1 hidden sm:inline-flex text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 transition-colors text-xs font-medium"
          >
            Get Cliner →
          </a>
        </div>
      </div>

      <HeaderClient />

      <main id="main-content" className="flex-1 flex flex-col">
        {/* HERO */}
        <section className="relative pt-10 sm:pt-16 pb-8 px-6" aria-labelledby="hero-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left */}
              <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur mb-6">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    macOS 13+ • Apple Silicon & Intel
                  </span>
                  <span className="hidden sm:inline h-3 w-px bg-white/10" aria-hidden="true" />
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400">
                    <span className="text-amber-400" aria-label="5 out of 5 stars">
                      ★★★★★
                    </span>{" "}
                    4.9/5 (1,420)
                  </span>
                </div>

                <h1 id="hero-heading" className="display text-[40px] sm:text-[56px] lg:text-[62px] text-white">
                  <span className="block">Apps leave traces.</span>
                  <span className="block font-[400] tracking-[-0.05em] italic" style={{ fontFamily: "var(--font-display)" }}>
                    Cliner leaves nothing.
                  </span>
                </h1>

                <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.6] text-zinc-400 max-w-[560px] tracking-[-0.01em]">
                  Dragging to Trash leaves <span className="text-zinc-200 font-[500]">gigabytes of hidden caches</span> scattered
                  across your Mac.
                  <span className="text-white"> Cliner finds every trace</span> and cleans it in one click — safely, reversibly,
                  instantly.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 h-[48px] px-7 rounded-full bg-white text-black font-semibold text-[15px] tracking-[-0.01em] shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:bg-zinc-100 transition-all active:scale-[0.98] w-full sm:w-auto"
                  >
                    <span>Get Cliner — $3</span>
                    <span className="px-2 py-1 rounded-full bg-black text-white text-[10px] font-bold tracking-widest uppercase leading-none">
                      Lifetime
                    </span>
                    <span className="w-6 h-6 rounded-full bg-black text-white grid place-items-center group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur text-white/90 font-medium text-[14px] hover:bg-white/[0.07] hover:border-white/15 transition-colors w-full sm:w-auto"
                  >
                    See how it works
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="opacity-60" aria-hidden="true">
                      <path d="M7 10l5 5 5-5" />
                    </svg>
                  </a>
                </div>

                {/* Trust row */}
                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11.5px] leading-none">
                  <span className="inline-flex items-center gap-1.5 text-zinc-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-500" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    One-time $3
                  </span>
                  <span className="w-px h-3 bg-white/10" aria-hidden="true" />
                  <span className="inline-flex items-center gap-1.5 text-zinc-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-500" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    30-day guarantee
                  </span>
                  <span className="w-px h-3 bg-white/10" aria-hidden="true" />
                  <span className="inline-flex items-center gap-1.5 text-zinc-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-500" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    Safe & reversible
                  </span>
                </div>

                {/* Mini stat */}
                <div className="mt-8 w-full max-w-[560px] grid grid-cols-3 gap-3">
                  {[
                    { k: "14.2 TB", v: "reclaimed this week" },
                    { k: "<150 ms", v: "average scan time" },
                    { k: "100%", v: "via Trash (undoable)" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur px-3.5 py-3.5 text-left"
                    >
                      <div className="text-[15px] font-semibold tracking-tight text-white leading-none">{s.k}</div>
                      <div className="text-[11px] text-zinc-500 mt-1 leading-none">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Demo */}
              <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end gap-4">
                <div className="relative w-full max-w-[520px]">
                  {/* Glow behind */}
                  <div className="absolute -inset-6 -z-10 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent blur-2xl rounded-[32px]" aria-hidden="true" />
                  <div className="absolute -inset-[1px] -z-10 rounded-[24px] bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-60" aria-hidden="true" />
                  <InteractiveAppDemo />
                  {/* Floating stat */}
                  <div className="hidden sm:flex absolute -right-3 -bottom-4 items-center gap-3 px-4 py-3 rounded-2xl bg-white text-black shadow-xl shadow-black/20 border border-black/5">
                    <div className="w-9 h-9 rounded-xl bg-black text-white grid place-items-center" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12l2-2 4 4 8-8 2 2-10 10z" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold tracking-widest uppercase opacity-60 leading-none">Reclaimed</div>
                      <div className="text-[15px] font-bold tracking-tight leading-none mt-1">4.92 GB • Spotify</div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-[11px] text-zinc-500" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live demo — click or drag any app above. No install needed.
                </div>
              </div>
            </div>

            {/* Proof strip */}
            <div className="mt-14 sm:mt-16 rounded-[20px] border border-white/[0.06] bg-white/[0.02] backdrop-blur overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
                <div className="px-6 py-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 grid place-items-center text-amber-400" aria-hidden="true">
                    ⚠
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white leading-none">Without Cliner</div>
                    <div className="text-xs text-zinc-500 mt-1">Spotify leaves 5.8 GB after Trash</div>
                  </div>
                  <span className="ml-auto text-xs font-mono text-zinc-500">5.80 GB</span>
                </div>
                <div className="px-6 py-5 flex items-center gap-3 bg-white/[0.02]">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 grid place-items-center text-emerald-400" aria-hidden="true">
                    ✓
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white leading-none">With Cliner</div>
                    <div className="text-xs text-zinc-500 mt-1">Everything gone — one click, reversible</div>
                  </div>
                  <span className="ml-auto text-xs font-mono text-emerald-400 font-semibold">0 B</span>
                </div>
                <div className="px-6 py-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs" aria-hidden="true">
                    VS
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white leading-none">Real Finder data</div>
                    <div className="text-xs text-zinc-500 mt-1">~/Library/Caches • Application Support • Logs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-16 sm:py-24 px-6 border-t border-white/[0.06]" aria-labelledby="how-it-works-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-500 mb-3">
                  <span className="w-6 h-px bg-white/20" aria-hidden="true" />
                  How it works
                </div>
                <h2 id="how-it-works-heading" className="text-[32px] sm:text-[42px] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">
                  Cleaning your Mac
                  <br />
                  <span className="font-[400] italic" style={{ fontFamily: "var(--font-display)" }}>
                    takes zero effort.
                  </span>
                </h2>
              </div>
              <p className="max-w-[420px] text-[15px] leading-[1.6] text-zinc-400">
                No manual hunting through Library folders. Cliner watches Trash automatically and shows you exactly what can be
                safely removed.
              </p>
            </div>

            <HowItWorksClient />
          </div>
        </section>

        {/* FEATURES BENTO */}
        <section id="features" className="py-16 sm:py-20 px-6 border-t border-white/[0.06] bg-white/[0.01]" aria-labelledby="features-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-500 mb-3">
                <span className="w-6 h-px bg-white/20" aria-hidden="true" />
                Why Cliner
              </div>
              <h2 id="features-heading" className="text-[30px] sm:text-[40px] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">
                Everything you need.
                <br />
                <span className="text-zinc-500">Nothing you don’t.</span>
              </h2>
            </div>

            <div className="grid grid-cols-12 gap-4 sm:gap-5 auto-rows-[minmax(180px,auto)]">
              {/* Large: Reclaim */}
              <div className="col-span-12 lg:col-span-7 rounded-[20px] border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 sm:p-7 flex flex-col overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-gradient-to-br from-white/[0.06] to-transparent blur-2xl pointer-events-none -translate-y-10 translate-x-10" aria-hidden="true" />
                <div className="flex items-start justify-between gap-4 relative">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-black grid place-items-center" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path d="M3 10h18M7 10V8h10v2M6 10l1 10h10l1-10" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.02em] text-white leading-tight">
                      Reclaim gigabytes, instantly
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.6] text-zinc-400 max-w-[360px]">
                      Purge hidden caches, containers, and app support files that Trash always misses.
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    +5.8 GB avg
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 relative">
                  {[
                    { app: "Spotify", size: "5.80 GB", bar: "w-[92%]" },
                    { app: "Slack", size: "3.62 GB", bar: "w-[64%]" },
                    { app: "VS Code", size: "2.14 GB", bar: "w-[42%]" },
                    { app: "Figma", size: "1.95 GB", bar: "w-[36%]" },
                  ].map((r) => (
                    <div
                      key={r.app}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-black/20"
                    >
                      <span className="text-[12.5px] font-medium text-white min-w-[56px]">{r.app}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden" aria-hidden="true">
                        <div className={`h-full bg-white ${r.bar}`} />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">{r.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zero nagging */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-5 rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7 flex flex-col">
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] grid place-items-center text-white" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M18 8a3 3 0 000-6 3 3 0 000 6zM6 8a3 3 0 000-6 3 3 0 000 6zM6 22v-5a4 4 0 014-4h4a4 4 0 014 4v5" />
                    <path d="M10 8h4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.02em] text-white">Zero nagging or upsells</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-zinc-400">
                  No popups, fake alerts, or battery-draining helpers. Cliner stays silent until you need it.
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" aria-hidden="true" />
                  0 background processes
                </div>
              </div>

              {/* Safe */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-5 rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-black grid place-items-center" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.02em] text-white">Safe & reversible</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-zinc-400">
                  Everything moves to Trash. Changed your mind? Put Back in Finder. Nothing is destroyed.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-zinc-300 self-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  Trash → Put Back
                </div>
              </div>

              {/* Performance */}
              <div className="col-span-12 lg:col-span-7 rounded-[20px] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-7 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white text-black grid place-items-center" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white leading-none">
                      Blazing fast & lightweight
                    </h3>
                    <p className="text-[11px] font-mono tracking-wide text-zinc-500 mt-1 uppercase">Native macOS • No Electron</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { v: "<150ms", l: "scan" },
                    { v: "~8 MB", l: "memory" },
                    { v: "400×600", l: "tiny window" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-white/[0.06] bg-black/20 px-3 py-3 text-center">
                      <div className="text-[14px] font-semibold text-white font-mono">{s.v}</div>
                      <div className="text-[10px] tracking-widest uppercase text-zinc-500 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[12.5px] leading-[1.6] text-zinc-500">
                  Starts in milliseconds, uses almost no battery, and never slows your Mac.
                </p>
              </div>

              {/* Smart filter */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7 flex flex-col">
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] grid place-items-center text-white" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M9.5 2h5L19 7.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
                    <path d="M14 2v5h5" />
                    <path d="M10 13l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-white">Smart update filter</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-zinc-400">
                  Knows the difference between an update and an uninstall — so it never pings you by mistake.
                </p>
              </div>

              {/* No subscription */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-8 rounded-[20px] border border-white bg-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white grid place-items-center shrink-0" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-black leading-tight">Pay once. Own it forever.</h3>
                    <p className="mt-1 text-[13px] leading-[1.5] text-zinc-600">
                      No $40/year renewals. No expiring licenses. All future updates included.
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 shrink-0">
                  <span className="text-[28px] font-extrabold tracking-[-0.03em] text-black">$3</span>
                  <span className="text-sm text-zinc-500 line-through">$5</span>
                  <span className="px-2 py-1 rounded-full bg-black text-white text-[11px] font-bold tracking-wide">ONE-TIME</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section id="compare" className="py-16 sm:py-20 px-6 border-t border-white/[0.06]" aria-labelledby="compare-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
              <h2 id="compare-heading" className="text-[28px] sm:text-[36px] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">
                Trash isn’t enough.
                <br />
                <span className="text-zinc-500">Cleaners are too much.</span>
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.6] text-zinc-400">
                Cliner sits in the sweet spot: complete like a pro cleaner, simple like Trash — without the bloat or subscription.
              </p>
            </div>

            <div className="overflow-x-auto -mx-6 px-6">
              <div className="min-w-[720px] rounded-[20px] border border-white/[0.07] bg-white/[0.02] overflow-hidden">
                <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] text-[11px] font-bold tracking-widest uppercase">
                  <div className="px-6 py-4 text-zinc-500">Capability</div>
                  <div className="px-4 py-4 text-center text-zinc-500">macOS Trash</div>
                  <div className="px-4 py-4 text-center bg-white text-black rounded-t-xl">Cliner</div>
                  <div className="px-4 py-4 text-center text-zinc-500">CleanMyMac</div>
                </div>
                {[
                  { label: "Removes app + all leftovers", trash: false, cliner: true, cleaner: true },
                  { label: "Automatic Trash detection", trash: false, cliner: true, cleaner: false },
                  { label: "100% reversible via Trash", trash: true, cliner: true, cleaner: false },
                  { label: "One-time payment", trash: true, cliner: true, cleaner: false },
                  { label: "No popups / no bloat", trash: true, cliner: true, cleaner: false },
                  { label: "Lightweight (<10MB) native app", trash: true, cliner: true, cleaner: false },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-t border-white/[0.06] text-[13px]">
                    <div className="px-6 py-3.5 text-zinc-300 font-[450]">{row.label}</div>
                    <div className="px-4 py-3.5 grid place-items-center text-zinc-500" aria-label={row.trash ? "Yes" : "No"}>
                      {row.trash ? "✓" : "—"}
                    </div>
                    <div className="px-4 py-3.5 grid place-items-center bg-white text-black font-semibold" aria-label={row.cliner ? "Yes" : "No"}>
                      {row.cliner ? "✓" : "—"}
                    </div>
                    <div className="px-4 py-3.5 grid place-items-center text-zinc-500" aria-label={row.cleaner ? "Yes" : "No"}>
                      {row.cleaner ? "✓" : "—"}
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-t border-white/[0.06] bg-black/20">
                  <div className="px-6 py-4 text-xs text-zinc-500">Price</div>
                  <div className="px-4 py-4 text-center text-xs font-mono text-zinc-400">Free</div>
                  <div className="px-4 py-4 text-center bg-white text-black font-bold">$3 once</div>
                  <div className="px-4 py-4 text-center text-xs font-mono text-zinc-400">$40/yr</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-16 sm:py-20 px-6 border-t border-white/[0.06] bg-white/[0.01]" aria-labelledby="testimonials-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-500 mb-3">
                  <span className="w-6 h-px bg-white/20" aria-hidden="true" />
                  Customer love
                </div>
                <h2 id="testimonials-heading" className="text-[28px] sm:text-[36px] font-extrabold tracking-[-0.03em] text-white leading-none">
                  Loved by Mac users worldwide
                </h2>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="inline-flex items-center gap-1 text-amber-400" aria-label="5 stars">
                  ★★★★★
                </span>
                <span>4.9/5 from 1,420 reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white text-black grid place-items-center text-xs font-bold tracking-wide" aria-hidden="true">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white leading-none">{t.name}</div>
                      <div className="text-[11px] text-zinc-500 mt-1">{t.role}</div>
                    </div>
                    <span className="ml-auto text-amber-400 text-xs" aria-label={`${t.rating} out of 5 stars`}>
                      ★★★★★
                    </span>
                  </div>
                  <blockquote className="text-[13.5px] leading-[1.6] text-zinc-300">“{t.comment}”</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-16 sm:py-24 px-6 border-t border-white/[0.06]" aria-labelledby="pricing-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-bold tracking-[0.14em] uppercase text-zinc-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Simple, transparent pricing
              </div>
              <h2 id="pricing-heading" className="text-[36px] sm:text-[48px] font-extrabold tracking-[-0.04em] text-white leading-[0.9]">
                One price. Lifetime access.
              </h2>
              <p className="mt-3 text-[15px] text-zinc-400">No subscriptions. No hidden upgrades. Just a clean Mac, forever.</p>
            </div>

            <div className="max-w-[560px] mx-auto">
              <div className="rounded-[28px] border border-white/10 bg-white p-7 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" aria-hidden="true" />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-500">Lifetime License</span>
                  <span className="px-2.5 py-1 rounded-full bg-black text-white text-[11px] font-bold tracking-wide">BEST VALUE</span>
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-[52px] sm:text-[56px] font-extrabold tracking-[-0.04em] text-black leading-none">$3</span>
                  <span className="text-[16px] text-zinc-500 line-through">$5</span>
                  <span className="px-2 py-1 rounded-full bg-emerald-500 text-black text-xs font-bold">SAVE 40%</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">One-time payment • All future updates included</p>

                <div className="mt-6 grid grid-cols-1 gap-2.5 py-6 border-y border-black/10">
                  {[
                    "Complete uninstallation — 100% leftover removal",
                    "Automatic background Trash monitoring",
                    "Reclaims hidden containers & caches",
                    "100% safe & reversible via macOS Trash",
                    "Use on all your personal Macs",
                    "30-day money-back guarantee",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-[13px] text-zinc-700">
                      <span className="w-5 h-5 rounded-full bg-black text-white grid place-items-center shrink-0" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full h-[52px] rounded-full bg-black hover:bg-zinc-900 text-white font-semibold text-[15px] flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
                >
                  Get Cliner Now — $3
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <p className="mt-3 text-center text-[11px] text-zinc-500 flex items-center justify-center gap-1.5">
                  <span aria-hidden="true">🔒</span> Powered by <strong className="text-zinc-700 font-semibold">Dodo Payments</strong> • Instant license delivery • Email support
                </p>

                <div className="mt-6 flex items-center justify-center gap-6 text-[11px] font-mono text-zinc-500">
                  <span>macOS 13+ • Apple Silicon & Intel</span>
                  <span className="w-px h-3 bg-black/10" aria-hidden="true" />
                  <span>Offline • No tracking</span>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-zinc-500">
                Questions? Email{" "}
                <a href="mailto:hello@cliner.app" className="text-white underline decoration-white/20 underline-offset-4">
                  hello@cliner.app
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-20 px-6 border-t border-white/[0.06] max-w-[1200px] mx-auto w-full" aria-labelledby="faq-heading">
          <div className="grid grid-cols-12 gap-8 sm:gap-12">
            <div className="col-span-12 lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-500 mb-3">
                  <span className="w-6 h-px bg-white/20" aria-hidden="true" />
                  FAQ
                </div>
                <h2 id="faq-heading" className="text-[28px] sm:text-[32px] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">
                  Got questions?
                  <br />
                  <span className="text-zinc-500">We’ve got answers.</span>
                </h2>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                  Everything you need to know about Cliner, privacy, and support. Still unsure? Reach out and we’ll reply within hours.
                </p>
                <a
                  href="mailto:hello@cliner.app"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/40"
                >
                  Contact support →
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <FaqClient />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-24 px-6 border-t border-white/[0.06]" aria-labelledby="cta-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-white/[0.06] to-white/[0.02] overflow-hidden relative">
              <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" aria-hidden="true" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.06] to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

              <div className="relative px-6 sm:px-12 py-12 sm:py-16 flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-[22px] p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_12px_36px_rgba(59,130,246,0.32)] flex items-center justify-center">
                  <Image
                    src="/app-icon.png"
                    alt="Cliner for Mac"
                    width={76}
                    height={76}
                    className="w-full h-full object-contain rounded-[18px]"
                    unoptimized
                  />
                </div>
                <h2 id="cta-heading" className="mt-6 text-[28px] sm:text-[42px] font-extrabold tracking-[-0.04em] text-white leading-[0.9] max-w-[640px]">
                  Keep your Mac
                  <br />
                  <span className="font-[400] italic" style={{ fontFamily: "var(--font-display)" }}>
                    fast, clean, and spacious.
                  </span>
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-zinc-400 max-w-[520px]">
                  Join 1,400+ Mac users who never worry about leftover junk again. One click, done.
                </p>
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 h-[48px] px-8 rounded-full bg-white text-black font-semibold text-[15px] shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:bg-zinc-100 transition-colors active:scale-[0.98]"
                >
                  Get Cliner for $3
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="mt-4 text-xs text-zinc-500">30-day guarantee • Instant delivery • Works offline</div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[8px] overflow-hidden ring-1 ring-white/15 shadow-sm bg-black/40 flex items-center justify-center">
                    <Image src="/app-icon.png" alt="Cliner Logo" width={32} height={32} className="w-full h-full object-contain" unoptimized />
                  </div>
                  <div>
                    <div className="text-sm font-semibold tracking-[-0.02em] text-white leading-none">Cliner for Mac</div>
                    <div className="text-[11px] text-zinc-500 mt-1">© {new Date().getFullYear()} Cliner. All rights reserved.</div>
                  </div>
                </div>
                <nav className="flex flex-wrap items-center gap-5 text-xs" aria-label="Footer">
                  <a href="mailto:hello@cliner.app" className="text-zinc-500 hover:text-white transition-colors">
                    Support
                  </a>
                  <a href="/llms.txt" className="text-zinc-500 hover:text-white transition-colors font-mono">
                    llms.txt
                  </a>
                  <a href="/robots.txt" className="text-zinc-500 hover:text-white transition-colors font-mono">
                    robots.txt
                  </a>
                  <a href="/sitemap.xml" className="text-zinc-500 hover:text-white transition-colors font-mono">
                    sitemap.xml
                  </a>
                </nav>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 text-[11px] leading-relaxed text-zinc-600 max-w-[900px]">
                <p>
                  Cliner is an independent macOS utility. Not affiliated with Apple Inc. macOS is a trademark of Apple Inc. Payments
                  and license delivery via Dodo Payments.
                </p>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
