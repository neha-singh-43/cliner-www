"use client";

import { useState } from "react";

const steps = [
  {
    n: "01",
    title: "Trash any app",
    desc: "Drag an app to Trash like you always do — or drop it directly into Cliner.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 6h18M8 6V4h8v2M10 11v6M14 11v6M4 6l1 14h14l1-14" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Cliner spots leftovers",
    desc: "Instant scan of 10+ macOS locations — caches, containers, preferences, logs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
        <path d="M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "One-click clean",
    desc: "Hit Clean and reclaim gigabytes. Everything goes to Trash — undo anytime.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function HowItWorksClient() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
      <div className="hidden md:block absolute top-[34px] left-[14%] right-[14%] h-px bg-gradient-to-r from-white/10 via-white/10 to-white/10" />
      {steps.map((step, i) => (
        <button
          key={step.n}
          onClick={() => setActiveStep(i + 1)}
          className={`relative text-left rounded-[20px] border p-7 pt-10 transition-all ${
            activeStep === i + 1
              ? "bg-white text-black border-white shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
              : "card border-white/[0.07] hover:border-white/15 hover:bg-white/[0.04] bg-white/[0.02]"
          }`}
          aria-pressed={activeStep === i + 1}
          aria-label={`${step.n}: ${step.title}`}
        >
          <div
            className={`absolute top-5 left-7 text-[11px] font-bold tracking-widest ${
              activeStep === i + 1 ? "text-black/40" : "text-zinc-500"
            }`}
          >
            {step.n}
          </div>
          <div
            className={`w-11 h-11 rounded-xl grid place-items-center mb-5 border ${
              activeStep === i + 1 ? "bg-black text-white border-black" : "bg-white text-black border-white/10"
            }`}
          >
            {step.icon}
          </div>
          <h3
            className={`text-[17px] font-semibold tracking-[-0.02em] leading-tight ${
              activeStep === i + 1 ? "text-black" : "text-white"
            }`}
          >
            {step.title}
          </h3>
          <p className={`mt-2 text-[13.5px] leading-[1.6] ${activeStep === i + 1 ? "text-black/60" : "text-zinc-400"}`}>
            {step.desc}
          </p>
          <div
            className={`mt-5 inline-flex items-center gap-1.5 text-xs font-medium ${
              activeStep === i + 1 ? "text-black/70" : "text-zinc-500"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeStep === i + 1 ? "bg-black" : "bg-white/30"}`} />
            {activeStep === i + 1 ? "Active" : "Click to focus"}
          </div>
        </button>
      ))}
    </div>
  );
}
