"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface DemoAppItem {
  id: string;
  name: string;
  bundleId: string;
  iconBg: string;
  iconText: string;
  size: string;
  totalReclaimed: string;
  items: {
    name: string;
    path: string;
    size: string;
    selected: boolean;
    confidence: "Exact" | "NeedsReview";
  }[];
}

export const SAMPLE_APPS: DemoAppItem[] = [
  {
    id: "vscode",
    name: "Visual Studio Code.app",
    bundleId: "com.microsoft.VSCode",
    iconBg: "from-blue-500 to-indigo-600",
    iconText: "VS",
    size: "438 MB",
    totalReclaimed: "2.14 GB",
    items: [
      { name: "Application Support", path: "~/Library/Application Support/Code", size: "1.42 GB", selected: true, confidence: "Exact" },
      { name: "Caches & Network Shards", path: "~/Library/Caches/com.microsoft.VSCode", size: "512 MB", selected: true, confidence: "Exact" },
      { name: "Preferences", path: "~/Library/Preferences/com.microsoft.VSCode.plist", size: "24 KB", selected: true, confidence: "Exact" },
      { name: "Saved State", path: "~/Library/Saved Application State/com.microsoft.VSCode.savedState", size: "18.4 MB", selected: true, confidence: "Exact" },
      { name: "Crash Reports & Logs", path: "~/Library/Logs/DiagnosticReports/Code.ips", size: "2.1 MB", selected: true, confidence: "Exact" },
      { name: "Workspace Configs", path: "~/.vscode/extensions", size: "186 MB", selected: false, confidence: "NeedsReview" },
    ]
  },
  {
    id: "slack",
    name: "Slack.app",
    bundleId: "com.tinyspeck.slackmacgap",
    iconBg: "from-amber-500 via-rose-500 to-purple-600",
    iconText: "SL",
    size: "284 MB",
    totalReclaimed: "3.62 GB",
    items: [
      { name: "Application Support", path: "~/Library/Application Support/Slack", size: "2.31 GB", selected: true, confidence: "Exact" },
      { name: "WebKit Video & Audio Caches", path: "~/Library/WebKit/com.tinyspeck.slackmacgap", size: "840 MB", selected: true, confidence: "Exact" },
      { name: "HTTP Storage & Cookies", path: "~/Library/HTTPStorages/com.tinyspeck.slackmacgap", size: "460 MB", selected: true, confidence: "Exact" },
      { name: "Preferences", path: "~/Library/Preferences/com.tinyspeck.slackmacgap.plist", size: "32 KB", selected: true, confidence: "Exact" },
      { name: "Saved State", path: "~/Library/Saved Application State/com.tinyspeck.slackmacgap.savedState", size: "12.6 MB", selected: true, confidence: "Exact" },
    ]
  },
  {
    id: "spotify",
    name: "Spotify.app",
    bundleId: "com.spotify.client",
    iconBg: "from-emerald-500 to-green-600",
    iconText: "SP",
    size: "198 MB",
    totalReclaimed: "5.80 GB",
    items: [
      { name: "Offline Music Cache Shards", path: "~/Library/Caches/com.spotify.client/Storage", size: "4.92 GB", selected: true, confidence: "Exact" },
      { name: "Application Support", path: "~/Library/Application Support/Spotify", size: "720 MB", selected: true, confidence: "Exact" },
      { name: "Preferences", path: "~/Library/Preferences/com.spotify.client.plist", size: "16 KB", selected: true, confidence: "Exact" },
      { name: "Saved State", path: "~/Library/Saved Application State/com.spotify.client.savedState", size: "8.1 MB", selected: true, confidence: "Exact" },
    ]
  },
  {
    id: "figma",
    name: "Figma.app",
    bundleId: "com.figma.Desktop",
    iconBg: "from-purple-500 via-pink-500 to-red-500",
    iconText: "FG",
    size: "210 MB",
    totalReclaimed: "1.95 GB",
    items: [
      { name: "Font & Canvas Render Cache", path: "~/Library/Caches/com.figma.Desktop", size: "1.34 GB", selected: true, confidence: "Exact" },
      { name: "Application Support", path: "~/Library/Application Support/Figma", size: "580 MB", selected: true, confidence: "Exact" },
      { name: "Preferences", path: "~/Library/Preferences/com.figma.Desktop.plist", size: "14 KB", selected: true, confidence: "Exact" },
      { name: "Saved State", path: "~/Library/Saved Application State/com.figma.Desktop.savedState", size: "26.3 MB", selected: true, confidence: "Exact" },
    ]
  }
];

export default function InteractiveAppDemo() {
  const [selectedApp, setSelectedApp] = useState<DemoAppItem | null>(null);
  const [appState, setAppState] = useState<"drop" | "scanning" | "review" | "success">("drop");
  const [items, setItems] = useState<DemoAppItem["items"]>([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [launchAtStartup, setLaunchAtStartup] = useState(true);

  const startScan = (app: DemoAppItem) => {
    setSelectedApp(app);
    setAppState("scanning");
    setItems(app.items.map(i => ({ ...i })));

    setTimeout(() => {
      setAppState("review");
    }, 600);
  };

  const handleDragStart = (e: React.DragEvent, app: DemoAppItem) => {
    e.dataTransfer.setData("application/json", JSON.stringify(app));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    try {
      const data = e.dataTransfer.getData("application/json");
      if (data) {
        const app = JSON.parse(data) as DemoAppItem;
        startScan(app);
      }
    } catch {
      // fallback
    }
  };

  const toggleItem = (idx: number) => {
    setItems(prev => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], selected: !copy[idx].selected };
      return copy;
    });
  };

  const toggleSelectAll = () => {
    const allSelected = items.every(i => i.selected);
    setItems(prev => prev.map(i => ({ ...i, selected: !allSelected })));
  };

  const selectedCount = items.filter(i => i.selected).length;

  const handleClean = () => {
    setAppState("success");
  };

  const resetToDrop = () => {
    setAppState("drop");
    setSelectedApp(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Floating draggable apps helper bar */}
      <div className="w-full mb-3 flex flex-col items-center">
        <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span>Click or Drag an app into Cliner below:</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {SAMPLE_APPS.map((app) => (
            <div
              key={app.id}
              draggable
              onDragStart={(e) => handleDragStart(e, app)}
              onClick={() => startScan(app)}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/60 hover:border-blue-500/80 cursor-grab active:cursor-grabbing transition-all hover:scale-105 shadow-md shadow-black/40"
              title={`Click or drag ${app.name} to test`}
            >
              <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${app.iconBg} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
                {app.iconText}
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">{app.name}</div>
                <div className="text-[10px] text-zinc-400 font-mono">{app.size}</div>
              </div>
              <span className="text-zinc-600 text-xs group-hover:text-zinc-300 ml-1">⋮⋮</span>
            </div>
          ))}
        </div>
      </div>

      {/* The Native macOS Cliner App Window Container */}
      <div className="w-full max-w-[420px] rounded-2xl p-[1px] bg-gradient-to-b from-zinc-700/80 via-zinc-800/40 to-zinc-900/90 shadow-2xl shadow-blue-950/40 border border-zinc-700/50">
        <div className="w-full rounded-[15px] bg-[#111114] overflow-hidden flex flex-col min-h-[460px] border border-zinc-800/80">
          
          {/* macOS Title Bar */}
          <div className="px-4 py-3 bg-[#18181c]/90 border-b border-zinc-800/80 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
            </div>
            <div className="text-xs font-semibold text-zinc-300 tracking-tight flex items-center gap-1.5">
              <Image src="/app-icon.png" alt="Cliner" width={14} height={14} className="rounded" />
              <span>Cliner</span>
            </div>
            <div className="w-12 text-right">
              {appState !== "drop" && (
                <button
                  onClick={resetToDrop}
                  className="text-[11px] font-medium text-zinc-400 hover:text-zinc-200 px-1.5 py-0.5 rounded bg-zinc-800/60"
                  title="Back to Drop Zone"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* App Body Content Viewports */}
          <div className="p-5 flex-1 flex flex-col justify-between">
            
            {/* 1. DROP ZONE STATE */}
            {appState === "drop" && (
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDraggingOver(true); }}
                onDragLeave={() => setIsDraggingOver(false)}
                onDrop={handleDrop}
                className={`flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                  isDraggingOver
                    ? "border-blue-500 bg-blue-500/10 scale-[0.99]"
                    : "border-zinc-700/80 bg-zinc-900/20 hover:border-zinc-600"
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h4 className="font-bold text-white text-base">Drop any .app bundle here</h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-[240px] leading-relaxed">
                  Or click one of the sample apps above to test the 1-click clean experience.
                </p>

                <div className="mt-6 flex flex-col items-center gap-2 w-full">
                  <button
                    onClick={() => startScan(SAMPLE_APPS[0])}
                    className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all active:scale-95"
                  >
                    Quick Test: Inspect VS Code.app
                  </button>
                </div>
              </div>
            )}

            {/* 2. SCANNING ANIMATION STATE */}
            {appState === "scanning" && selectedApp && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                </div>
                <h4 className="font-bold text-white text-base">Scanning {selectedApp.name}…</h4>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  Tracing 10+ standard macOS storage vectors…
                </p>
                <div className="mt-4 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 font-mono">
                  &lt;150ms parallel scan
                </div>
              </div>
            )}

            {/* 3. REVIEW LEFTOVERS STATE */}
            {appState === "review" && selectedApp && (
              <div className="flex-1 flex flex-col justify-between overflow-hidden">
                {/* Header App Summary */}
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-800">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedApp.iconBg} flex items-center justify-center font-bold text-white text-lg shadow-md`}>
                    {selectedApp.iconText}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white text-sm truncate">{selectedApp.name}</h4>
                    <p className="text-[11px] text-zinc-400 font-mono truncate">{selectedApp.bundleId}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 font-mono">{selectedApp.totalReclaimed}</span>
                    <div className="text-[10px] text-zinc-500">to reclaim</div>
                  </div>
                </div>

                {/* Leftovers List */}
                <div className="my-3 flex-1 overflow-y-auto max-h-[220px] pr-1 space-y-1.5 scrollbar-thin">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-1">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Leftover Items ({items.length})</span>
                    <button onClick={toggleSelectAll} className="text-blue-400 hover:underline">
                      {items.every(i => i.selected) ? "Deselect All" : "Select All"}
                    </button>
                  </div>

                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => toggleItem(idx)}
                      className="group p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 cursor-pointer flex items-center justify-between gap-2.5 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] font-bold ${
                          item.selected
                            ? "bg-emerald-500 border-emerald-500 text-black"
                            : "border-zinc-600 bg-transparent"
                        }`}>
                          {item.selected ? "✓" : ""}
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">{item.name}</div>
                          <div className="text-[10px] text-zinc-500 font-mono truncate">{item.path}</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400 whitespace-nowrap">{item.size}</span>
                    </div>
                  ))}
                </div>

                {/* Review Action Footer */}
                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <button
                    onClick={resetToDrop}
                    className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleClean}
                    disabled={selectedCount === 0}
                    className="flex-1 py-2 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
                  >
                    <span>Clean {selectedCount} Leftovers ({selectedApp.totalReclaimed})</span>
                  </button>
                </div>
              </div>
            )}

            {/* 4. SUCCESS STATE */}
            {appState === "success" && selectedApp && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl font-bold mb-4 shadow-lg shadow-emerald-500/10">
                  ✓
                </div>
                <h4 className="font-bold text-white text-lg">Safely Cleaned!</h4>
                <p className="text-xs text-zinc-400 mt-2 max-w-[260px] leading-relaxed">
                  <strong className="text-white">{selectedApp.totalReclaimed}</strong> of hidden residuals for <span className="text-zinc-200">{selectedApp.name}</span> were moved safely to macOS Trash.
                </p>

                <div className="mt-6 flex flex-col gap-2 w-full max-w-[240px]">
                  <button
                    onClick={resetToDrop}
                    className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/25 transition-all"
                  >
                    Try Another App
                  </button>
                  <a
                    href="#pricing"
                    className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium text-center"
                  >
                    Get Cliner for $9
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Status Bar */}
            <div className="mt-3 pt-2 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Trash Watcher: Active
              </span>
              <label
                onClick={() => setLaunchAtStartup(!launchAtStartup)}
                className="flex items-center gap-1 cursor-pointer hover:text-zinc-300"
              >
                <input
                  type="checkbox"
                  checked={launchAtStartup}
                  onChange={() => {}}
                  className="rounded bg-zinc-800 border-zinc-700 text-blue-500 w-3 h-3"
                />
                Launch at startup
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
