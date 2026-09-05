"use client";

import { useState } from "react";

const faqList = [
  {
    q: "Why do I need Cliner if macOS already has Trash?",
    a: "When you drag an app to Trash, macOS only deletes the .app bundle. Hidden caches, containers, preferences, logs and old updates remain scattered across ~/Library — often gigabytes worth. Cliner finds every trace and removes it with one click.",
  },
  {
    q: "Is the $3 a subscription?",
    a: "No. It's a one-time payment. Pay $3 once and you own Cliner for life on all your personal Macs, with all future updates included. No monthly fees, no renewals.",
  },
  {
    q: "How does checkout and delivery work?",
    a: "Payments are handled securely via Dodo Payments. Right after purchase you receive an instant download link and license key by email. Activate and you're done.",
  },
  {
    q: "What if I delete something by mistake?",
    a: "Cliner is safe and reversible. Nothing is permanently deleted — everything is moved to macOS Trash. Just open Trash and click Put Back if you change your mind.",
  },
  {
    q: "Will it bother me during app updates?",
    a: "No. Cliner is smart enough to distinguish a fresh install or update from a true uninstall, so it stays silent and never interrupts you.",
  },
  {
    q: "Which Macs are supported?",
    a: "All modern Macs running macOS 13 Ventura, macOS 14 Sonoma, or macOS 15 Sequoia — including Apple Silicon (M1/M2/M3/M4) and Intel.",
  },
];

export default function FaqClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.02] overflow-hidden divide-y divide-white/[0.06]">
      {faqList.map((item, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div key={idx} className="group">
            <h3>
              <button
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="flex-1 text-[14px] font-medium tracking-[-0.01em] text-white leading-snug">{item.q}</span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border grid place-items-center transition-colors ${
                    isOpen
                      ? "bg-white text-black border-white"
                      : "border-white/10 text-zinc-400 group-hover:border-white/20 group-hover:text-white"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`grid transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[13px] leading-[1.6] text-zinc-400 max-w-[640px]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { faqList };
