import React, { useState, useEffect } from 'react';
import { Download, Play, Pause, Check, Copy, Shield, Sparkles, Clock, Lock, ArrowRight, Terminal } from 'lucide-react';
import { APP_NAME, RELEASE_VERSION, CLI_INSTALL_COMMAND, DIRECT_EXE_DOWNLOAD_URL, GITHUB_RELEASE_URL, EXE_FILENAME } from '../data/releaseData';
import { WindowsModernIcon } from './Icons';

export default function Hero({ onToast }) {
  const [copied, setCopied] = useState(false);
  const [cliTab, setCliTab] = useState('winget');
  const [isFocusing, setIsFocusing] = useState(false);
  const [focusSeconds, setFocusSeconds] = useState(25 * 60);

  useEffect(() => {
    let timer = null;
    if (isFocusing && focusSeconds > 0) {
      timer = setInterval(() => {
        setFocusSeconds(s => s - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isFocusing, focusSeconds]);

  const cliCommands = {
    winget: "winget install nayak-codes.DesktopWellbeing",
    powershell: `irm "${DIRECT_EXE_DOWNLOAD_URL}" -OutFile "${EXE_FILENAME}"`,
    curl: `curl -L -O "${DIRECT_EXE_DOWNLOAD_URL}"`
  };

  const handleCopyCmd = () => {
    const cmd = cliCommands[cliTab];
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    if (onToast) onToast("CLI install command copied!", "copy");
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTimer = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-grid-pattern">
      <div className="hero-radial-glow"></div>
      <div className="hero-ambient-orb bg-blue-600 top-1/4 left-1/4 -translate-x-1/2"></div>
      <div className="hero-ambient-orb bg-cyan-500 top-1/3 right-1/4 translate-x-1/2"></div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center">

        {/* Official Release Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold mb-6 shadow-sm shadow-blue-500/15 backdrop-blur-md">
          <img src="/logo.png" alt="Logo" className="w-4 h-4 rounded object-cover ring-1 ring-blue-400/40" />
          <span className="flex items-center gap-1.5 font-medium text-slate-200">
            Desktop Wellbeing for
            <span className="text-blue-400 font-semibold flex items-center gap-1">
              <WindowsModernIcon className="w-3 h-3 text-[#0078D4]" />
              Windows {RELEASE_VERSION}
            </span>
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Official Release v2
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12] mb-6 font-sans">
          Master Your Screen Time.<br />
          <span className="text-gradient">Work Smarter, Focus Deeper.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-9">
          An ultra-lightweight, 100% local focus engine for Windows 10 & 11. Track your daily app usage, eliminate digital distractions, and build healthy habits without cloud tracking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
          <a
            href={DIRECT_EXE_DOWNLOAD_URL}
            download={EXE_FILENAME}
            onClick={() => {
              if (onToast) onToast(`Starting download for ${EXE_FILENAME}...`, "success");
            }}
            className="btn btn-primary btn-lg flex items-center gap-3 shadow-xl shadow-blue-600/30 cursor-pointer group"
          >
            <WindowsModernIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span className="font-bold">Download for Windows</span>
            <span className="px-2 py-0.5 rounded bg-white/20 text-[11px] font-mono tracking-wide">.exe</span>
          </a>

          <a
            href="#demo"
            className="btn btn-secondary btn-lg flex items-center gap-2.5"
          >
            <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span>Try Live Demo</span>
          </a>
        </div>

        {/* Release subtext */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mb-8 font-mono">
          <span className="inline-flex items-center gap-1.5">
            <WindowsModernIcon className="w-3 h-3 text-[#0078D4]" />
            Windows 11 & 10 (64-bit)
          </span>
          <span className="text-slate-600">•</span>
          <span>{RELEASE_VERSION} (159 MB)</span>
          <span className="text-slate-600">•</span>
          <a href="#download" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
            Release Hub & Checksums
          </a>
        </div>

        {/* Compact Clean CLI Bar */}
        <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-[#0b101e]/90 border border-white/10 text-xs font-mono mb-16 shadow-xl max-w-xl w-full justify-between backdrop-blur-md">
          <div className="flex items-center gap-2 pl-2">
            <div className="flex items-center gap-1">
              {['winget', 'powershell', 'curl'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCliTab(tab)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${cliTab === tab
                      ? 'bg-blue-600/30 text-blue-400 border border-blue-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 truncate max-w-[240px] sm:max-w-[340px] text-left">
              <span className="text-blue-400 select-none mr-1">$</span>
              {cliCommands[cliTab]}
            </span>
          </div>

          <button
            onClick={handleCopyCmd}
            className="flex items-center gap-1 px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            title="Copy command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span className="text-[11px] font-sans">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        {/* Clean Windows App UI Preview Card */}
        <div className="w-full max-w-4xl windows-mockup text-left shadow-2xl shadow-black/80">

          {/* Windows Titlebar */}
          <div className="bg-[#0c1222] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Logo" className="w-4 h-4 rounded object-cover shadow" />
              <span className="text-xs text-white font-bold font-sans">
                {APP_NAME} <span className="text-[10px] text-slate-400 font-mono font-normal ml-1">{RELEASE_VERSION}</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                TRACKING LIVE
              </span>

              <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/15 text-blue-300 border border-blue-500/25">
                📌 Pinned
              </span>

              <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                Sat
              </span>

              {/* Windows Controls */}
              <div className="flex items-center gap-3 text-slate-400 font-mono text-xs pl-2 border-l border-white/10">
                <span className="hover:text-white cursor-pointer">─</span>
                <span className="hover:text-white cursor-pointer">□</span>
                <span className="hover:text-rose-400 cursor-pointer">✕</span>
              </div>
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="px-4 pt-2 border-b border-white/10 bg-[#0a0f1e] flex gap-4 text-xs font-semibold select-none">
            <span className="pb-2 px-2 border-b-2 border-blue-500 text-blue-400 font-bold flex items-center gap-1.5">
              <span>Overview</span>
            </span>
            <span className="pb-2 px-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200">
              <span>Focus</span>
            </span>
            <span className="pb-2 px-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200">
              <span>Analytics</span>
            </span>
            <span className="pb-2 px-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200">
              <span>Settings</span>
            </span>
          </div>

          {/* Mockup Dashboard Content */}
          <div className="p-6 space-y-6 bg-[#090d18]">

            {/* Top Row: Total Time + Donut Score */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#0e1529] to-[#0b1020] border border-white/10">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  TODAY'S SCREEN TIME
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono my-2 tracking-tight">
                  41m 59s
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Active process: <strong className="text-white font-mono">localhost</strong></span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-[#0e1529] to-[#0b1020] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    PRODUCTIVITY SCORE
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 font-mono mt-1">
                    40% SCORE
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    1 app exceeded daily limit
                  </p>
                </div>

                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-800"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-cyan-400"
                      strokeDasharray="40, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute font-mono font-bold text-xs text-white">40%</span>
                </div>
              </div>

            </div>

            {/* Weekly Waveform + Limits Action */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-end gap-2.5 font-mono text-[10px]">
                {[
                  { day: 'Sun', height: 'h-4', active: false },
                  { day: 'Mon', height: 'h-7', active: false },
                  { day: 'Tue', height: 'h-6', active: false },
                  { day: 'Wed', height: 'h-9', active: false },
                  { day: 'Thu', height: 'h-5', active: false },
                  { day: 'Fri', height: 'h-8', active: false },
                  { day: 'Sat', height: 'h-10', active: true }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div className={`w-3.5 rounded-t ${item.height} ${item.active ? 'bg-gradient-to-t from-blue-600 to-cyan-400 shadow-sm shadow-blue-500/50' : 'bg-slate-700/60'}`}></div>
                    <span className={item.active ? 'text-cyan-400 font-bold' : 'text-slate-500'}>{item.day}</span>
                  </div>
                ))}
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2">
                <span>Manage App Limits</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  1 Exceeded!
                </span>
              </div>
            </div>

            {/* App Breakdown List */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
                <span>TOP APPLICATIONS TODAY</span>
                <span>TIME SPENT</span>
              </div>

              <div className="space-y-2">
                {[
                  { icon: '🌐', name: 'localhost', cat: 'Web App Dev', time: '9m 17s', pct: '22%', active: true },
                  { icon: '💻', name: 'Antigravity IDE', cat: 'Code Editor', time: '8m 44s', pct: '21%' },
                  { icon: '⚡', name: 'powershell', cat: 'CLI Terminal', time: '6m 28s', pct: '15%' },
                  { icon: '🦊', name: 'firefox', cat: 'Browser (Limit: 10m)', time: '13m 18s', pct: '32%', exceeded: true },
                  { icon: '📁', name: 'explorer', cat: 'File System', time: '4m 12s', pct: '10%' }
                ].map((app, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border flex items-center justify-between ${app.active ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/[0.02] border-white/5'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-base">{app.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs text-white font-mono">{app.name}</span>
                          {app.exceeded && (
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              Exceeded
                            </span>
                          )}
                          {app.active && (
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-500 font-sans">{app.cat}</span>
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <span className={app.exceeded ? 'text-rose-400 font-bold' : 'text-slate-200'}>{app.time}</span>
                      <div className="text-[10px] text-slate-500">{app.pct}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
