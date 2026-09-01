"use client";

import React, { useState } from "react";

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
  iconBg: "from-violet-500 via-fuchsia-500 to-pink-500",
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
  }, 650);
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
  } catch {}
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
   {/* Helper bar */}
   <div className="w-full mb-3.5 flex flex-col items-center">
    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur text-[11px] font-medium tracking-wide text-zinc-400 mb-2.5">
     <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
     <span>Try it live — click or drag an app into Cliner</span>
     <span className="hidden sm:inline text-white/30">•</span>
     <span className="hidden sm:inline text-white">No install</span>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-2">
     {SAMPLE_APPS.map((app) => (
      <div
       key={app.id}
       draggable
       onDragStart={(e) => handleDragStart(e, app)}
       onClick={() => startScan(app)}
       className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white text-black border border-black/5 hover:bg-zinc-50 cursor-grab active:cursor-grabbing transition-all hover:scale-[1.02] shadow-md shadow-black/10"
       title={`Test ${app.name}`}
      >
       <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${app.iconBg} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
        {app.iconText}
       </div>
       <div className="text-left leading-none pr-1">
        <div className="text-[11.5px] font-semibold tracking-[-0.01em] text-black">{app.name.replace(".app","")}</div>
        <div className="text-[10px] text-zinc-500 font-mono">{app.size}</div>
       </div>
      </div>
     ))}
    </div>
   </div>

   {/* Window */}
   <div className="w-full max-w-[440px] rounded-[20px] p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-white/[0.02] shadow-[0_24px_64px_rgba(0,0,0,0.55),0_1px_0_rgba(255,255,255,0.06)_inset] overflow-hidden">
    <div className="w-full rounded-[19px] bg-[#0f0f10] overflow-hidden flex flex-col min-h-[480px] border border-white/[0.04]">
     
     {/* Titlebar */}
     <div className="px-4 py-3.5 bg-[#151518] border-b border-white/[0.06] flex items-center justify-between select-none">
      <div className="flex items-center gap-1.5">
       <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 shadow-sm" />
       <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/10 shadow-sm" />
       <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 shadow-sm" />
      </div>
      <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[-0.01em] text-zinc-200">
       <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center">
        <div className="w-3 h-3 rounded-[3px] border-[1.2px] border-black flex items-center justify-center">
         <div className="w-[5px] h-[1px] bg-black rounded-full" />
        </div>
       </div>
       <span>Cliner</span>
       <span className="hidden sm:inline text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-white text-black leading-none">macOS</span>
      </div>
      <div className="w-[72px] flex justify-end">
       {appState !== "drop" ? (
        <button
         onClick={resetToDrop}
         className="text-[11px] font-medium text-zinc-400 hover:text-white px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
        >
         Reset
        </button>
       ) : (
        <span className="text-[10px] font-mono text-zinc-600 hidden sm:inline">400×600</span>
       )}
      </div>
     </div>

     {/* Body */}
     <div className="p-4 flex-1 flex flex-col bg-[#0f0f10]">
      
      {/* DROP */}
      {appState === "drop" && (
       <div
        onDragOver={(e) => { e.preventDefault(); setIsDraggingOver(true); }}
        onDragLeave={() => setIsDraggingOver(false)}
        onDrop={handleDrop}
        className={`flex-1 flex flex-col items-center justify-center rounded-[16px] border-2 border-dashed p-6 text-center transition-all ${
         isDraggingOver
          ? "border-white bg-white/[0.06] scale-[0.99]"
          : "border-white/[0.08] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
        }`}
       >
        <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-4 shadow-md">
         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 16V4M12 4l-4 4M12 4l4 4M3 12a9 9 0 1018 0 9 9 0 00-18 0z" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
        </div>
        <h4 className="font-semibold text-white text-[15px] tracking-[-0.01em]">Drop any .app here</h4>
        <p className="text-[12px] text-zinc-500 mt-1.5 max-w-[240px] leading-relaxed">
         Or click a pill above to preview the 1-click clean.
        </p>

        <button
         onClick={() => startScan(SAMPLE_APPS[0])}
         className="mt-5 w-full h-9 rounded-full bg-white text-black text-[12.5px] font-semibold hover:bg-zinc-100 transition-colors"
        >
         Quick test: Inspect VS Code
        </button>
        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-zinc-500">
         <span className="w-1 h-1 rounded-full bg-zinc-600" />
         Demo uses real Library paths
        </div>
       </div>
      )}

      {/* SCANNING */}
      {appState === "scanning" && selectedApp && (
       <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4">
         <div className="w-7 h-7 border-2 border-black border-t-transparent rounded-full animate-spin" />
        </div>
        <h4 className="font-semibold text-white text-[15px]">Scanning {selectedApp.name}…</h4>
        <p className="text-[11px] text-zinc-500 font-mono mt-1">
         10+ macOS vectors • ~150ms
        </p>
        <div className="mt-4 w-full max-w-[220px] h-1 rounded-full bg-white/10 overflow-hidden">
         <div className="h-full w-[68%] bg-white animate-pulse rounded-full" />
        </div>
       </div>
      )}

      {/* REVIEW */}
      {appState === "review" && selectedApp && (
       <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center gap-3 pb-3.5 border-b border-white/[0.06]">
         <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${selectedApp.iconBg} flex items-center justify-center font-bold text-white text-[15px] shadow-md shrink-0`}>
          {selectedApp.iconText}
         </div>
         <div className="flex-1 min-w-0 text-left">
          <h4 className="font-semibold text-white text-[13px] leading-none truncate">{selectedApp.name}</h4>
          <p className="text-[11px] text-zinc-500 font-mono truncate mt-1">{selectedApp.bundleId}</p>
         </div>
         <div className="text-right shrink-0">
          <div className="text-[13px] font-bold text-white font-mono leading-none">{selectedApp.totalReclaimed}</div>
          <div className="text-[10px] text-zinc-500 mt-1">to reclaim</div>
         </div>
        </div>

        <div className="flex items-center justify-between py-2.5">
         <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-zinc-500">Leftovers • {items.length}</span>
         <button onClick={toggleSelectAll} className="text-[11px] font-medium text-white hover:underline underline-offset-4 decoration-white/30">
          {items.every(i => i.selected) ? "Deselect all" : "Select all"}
         </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 -mr-1 max-h-[220px] scrollbar-thin">
         {items.map((item, idx) => (
          <div
           key={idx}
           onClick={() => toggleItem(idx)}
           className={`group flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${item.selected ? "bg-white border-white text-black" : "bg-white/[0.04] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 text-white"}`}
          >
           <div className={`w-4 h-4 rounded-[5px] border flex items-center justify-center shrink-0 text-[10px] font-bold ${item.selected ? "bg-black border-black text-white" : "border-white/20 bg-transparent text-transparent"}`}>
            {item.selected ? "✓" : ""}
           </div>
           <div className="min-w-0 flex-1 text-left">
            <div className={`text-[12px] font-medium leading-none truncate ${item.selected ? "text-black" : "text-white"}`}>{item.name}</div>
            <div className={`text-[10px] font-mono truncate mt-1 ${item.selected ? "text-black/60" : "text-zinc-500"}`}>{item.path}</div>
           </div>
           <span className={`text-[11px] font-mono shrink-0 ${item.selected ? "text-black/70" : "text-zinc-400"}`}>{item.size}</span>
          </div>
         ))}
        </div>

        <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center gap-2">
         <button
          onClick={resetToDrop}
          className="px-3.5 h-9 rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 text-xs font-medium hover:bg-white/[0.08] hover:text-white transition-colors"
         >
          Cancel
         </button>
         <button
          onClick={handleClean}
          disabled={selectedCount === 0}
          className="flex-1 h-9 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
         >
          Clean {selectedCount} • {selectedApp.totalReclaimed}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
         </button>
        </div>
       </div>
      )}

      {/* SUCCESS */}
      {appState === "success" && selectedApp && (
       <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
        <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-lg font-bold mb-4 shadow-lg shadow-emerald-500/20">✓</div>
        <h4 className="font-semibold text-white text-[16px] tracking-[-0.01em]">Safely cleaned!</h4>
        <p className="text-[12px] text-zinc-400 mt-2 max-w-[260px] leading-relaxed">
         <strong className="text-white font-semibold">{selectedApp.totalReclaimed}</strong> of leftovers for <span className="text-zinc-200">{selectedApp.name}</span> moved to Trash. Undo anytime.
        </p>
        <div className="mt-6 flex flex-col gap-2 w-full max-w-[240px]">
         <button
          onClick={resetToDrop}
          className="w-full h-9 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-100 transition-colors"
         >
          Try another app
         </button>
         <a
          href="#pricing"
          className="w-full h-9 rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 text-xs font-medium grid place-items-center hover:bg-white/[0.08] hover:text-white transition-colors"
         >
          Get Cliner — $9
         </a>
        </div>
       </div>
      )}

      {/* Status bar */}
      <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
       <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Trash Watcher active
       </span>
       <label
        onClick={() => setLaunchAtStartup(!launchAtStartup)}
        className="flex items-center gap-1.5 cursor-pointer hover:text-zinc-300 select-none"
       >
        <span className={`w-3.5 h-3.5 rounded-[4px] border flex items-center justify-center text-[8px] ${launchAtStartup ? "bg-white border-white text-black" : "border-white/20"}`}>
         {launchAtStartup ? "✓" : ""}
        </span>
        Launch at startup
       </label>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
