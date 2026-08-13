import React, { useState, useEffect } from 'react';
import { Download, Play, Pause, Check, Copy, Shield, Sparkles, Clock, Lock, ArrowRight } from 'lucide-react';
import { APP_NAME, RELEASE_VERSION, CLI_INSTALL_COMMAND } from '../data/releaseData';

export default function Hero({ onToast }) {
  const [copied, setCopied] = useState(false);
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

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(CLI_INSTALL_COMMAND);
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
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid-pattern">
      <div className="hero-radial-glow"></div>
      
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Release Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
          <img src="/logo.png" alt="Logo" className="w-4 h-4 rounded object-cover" />
          <span>Desktop Wellbeing for Windows {RELEASE_VERSION}</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-300">Track • Focus • Improve</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-5">
          Master Your Screen Time.<br />
          <span className="text-gradient">Work Smarter, Focus Deeper.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
          An ultra-lightweight, 100% local focus engine for Windows 10 & 11. Track your daily app usage, eliminate digital distractions, and build healthy habits without cloud tracking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <a 
            href="#download"
            className="btn btn-primary btn-lg flex items-center gap-2.5 shadow-lg shadow-blue-500/25"
          >
            <Download className="w-5 h-5" />
            <span>Download for Windows</span>
          </a>

          <a 
            href="#demo"
            className="btn btn-secondary btn-lg flex items-center gap-2"
          >
            <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span>Try Live Demo</span>
          </a>
        </div>

        {/* Minimal CLI Command */}
        <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-xs text-slate-400 font-mono mb-14">
          <span className="text-blue-400">$</span>
          <span>{CLI_INSTALL_COMMAND}</span>
          <button 
            onClick={handleCopyCmd}
            className="text-slate-400 hover:text-white transition-colors pl-1 cursor-pointer"
            title="Copy command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Clean Windows App UI Preview Card */}
        <div className="w-full max-w-4xl rounded-2xl bg-[#0e1626] border border-white/15 shadow-2xl overflow-hidden text-left">
          
          {/* Mockup Titlebar */}
          <div className="bg-[#090e18] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <div className="flex items-center gap-1.5 ml-2">
                <img src="/logo.png" alt="Logo" className="w-3.5 h-3.5 rounded object-cover" />
                <span className="text-xs text-slate-300 font-medium">Desktop Wellbeing — Today</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Tracking Active
              </span>
            </div>
          </div>

          {/* Mockup Dashboard Content */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0c121e]">
            
            {/* Stat 1: Total Time */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Today's Screen Time</span>
                <div className="text-3xl font-bold text-white mt-1">4h 18m</div>
              </div>
              <div className="text-xs text-emerald-400 font-medium mt-3 flex items-center gap-1">
                <span>↓ 42 mins less than yesterday</span>
              </div>
            </div>

            {/* Stat 2: Productivity Score */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Productivity Score</span>
                <div className="text-3xl font-bold text-blue-400 mt-1">86%</div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>

            {/* Stat 3: Focus Sprint Mini Widget */}
            <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Focus Sprint</span>
                <span className="text-xs font-mono font-bold text-white">{formatTimer(focusSeconds)}</span>
              </div>
              <button 
                onClick={() => {
                  setIsFocusing(!isFocusing);
                  if (onToast) onToast(!isFocusing ? "Focus Session Started" : "Focus Session Paused");
                }}
                className={`mt-3 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  isFocusing ? 'bg-amber-500 text-slate-950' : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                {isFocusing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isFocusing ? "Pause Focus" : "Start 25m Focus"}</span>
              </button>
            </div>

            {/* App Breakdown List (Spans 3 cols) */}
            <div className="md:col-span-3 pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Active Applications Today
              </div>

              <div className="space-y-2.5">
                {/* App 1 */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-base">💻</span>
                    <div>
                      <div className="font-semibold text-white">Visual Studio Code</div>
                      <div className="text-slate-400 text-[11px]">Development • Productive</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white font-mono">2h 45m</div>
                    <div className="text-emerald-400 text-[10px]">64% of total</div>
                  </div>
                </div>

                {/* App 2 */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-base">🌐</span>
                    <div>
                      <div className="font-semibold text-white">Google Chrome</div>
                      <div className="text-slate-400 text-[11px]">Documentation & Research</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white font-mono">58m</div>
                    <div className="text-slate-400 text-[10px]">22% of total</div>
                  </div>
                </div>

                {/* App 3 */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-base">🎬</span>
                    <div>
                      <div className="font-semibold text-white">YouTube & Social Feeds</div>
                      <div className="text-rose-400 text-[11px]">Entertainment • Daily Limit: 30m</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-rose-400 font-mono">35m (Blocked)</div>
                    <div className="text-rose-400 text-[10px]">Daily quota reached 🔒</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
