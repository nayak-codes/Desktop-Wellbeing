import React, { useState } from 'react';
import { 
  Clock, ShieldAlert, Lock, Database, BarChart3, Zap, 
  CheckCircle2, ArrowRight, Activity, Flame, ShieldCheck, 
  Cpu, Sparkles, Filter 
} from 'lucide-react';

export default function FeaturesBento() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="features" className="section-padding bg-[#070a12] border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge">Engineered for Performance</div>
          <h2 className="section-title">
            Enterprise Power, <span className="text-gradient">Minimalist Elegance</span>
          </h2>
          <p className="section-subtitle">
            Every feature is architected locally for Windows with sub-millisecond precision, zero cloud telemetry, and uncompromised focus enforcement.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Sub-millisecond Window Tracking (Spans 2 cols) */}
          <div className="app-card p-8 lg:col-span-2 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Win32 Native Hook
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Active Window Attribution & Idle Detection
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xl mb-6">
                Tracks only the exact foreground window you are actively interacting with. Automatically pauses timers within 200ms when your PC locks or goes idle.
              </p>

              {/* Visual Timeline Widget */}
              <div className="bg-[#0b101c] p-4 rounded-xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Today's Work Timeline</span>
                  <span className="text-blue-400 font-semibold">4h 18m Deep Work</span>
                </div>

                {/* Segmented Timeline Bar */}
                <div className="w-full h-3 rounded-full bg-slate-800 flex overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: '58%' }} title="VS Code (Coding): 2h 45m"></div>
                  <div className="bg-cyan-400 h-full" style={{ width: '22%' }} title="Figma (Design): 58m"></div>
                  <div className="bg-indigo-400 h-full" style={{ width: '12%' }} title="Docs (Research): 35m"></div>
                  <div className="bg-slate-600 h-full" style={{ width: '8%' }} title="Neutral: 20m"></div>
                </div>

                {/* Timeline Legends */}
                <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 font-mono pt-1">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Coding (58%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400"></span> Design (22%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-400"></span> Research (12%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-600"></span> Other (8%)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>0% Ghost Idle Time</span>
              <span className="text-blue-400 font-semibold">Sub-10ms Latency</span>
            </div>
          </div>

          {/* Card 2: Smart Distraction Interceptor (1 col) */}
          <div className="app-card p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold rounded-full">
                  Anti-Bypass
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Smart App & Web Blocker
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Assign daily limits or strict blackout hours. Intercepts launch requests before attention loops begin.
              </p>

              {/* Interactive App Rule Badges */}
              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-[#0b101c] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">YouTube Shorts</span>
                  <span className="text-rose-400 font-bold px-2 py-0.5 rounded bg-rose-500/10 text-[10px]">BLOCKED 🛑</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0b101c] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">Steam Games</span>
                  <span className="text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 text-[10px]">30m DAILY LIMIT</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0b101c] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">Visual Studio Code</span>
                  <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-[10px]">WHITELISTED ✅</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400 font-mono">
              Custom Rules & Cooldowns
            </div>
          </div>

          {/* Card 3: 100% Local Encrypted SQLite (1 col) */}
          <div className="app-card p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Database className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold rounded-full">
                  100% Local
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Local-First SQLite Vault
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Zero cloud servers, zero analytics pixels, and zero accounts required. All your productivity logs reside directly on your PC.
              </p>

              {/* Data Safety Specs */}
              <div className="p-3.5 rounded-xl bg-[#0b101c] border border-white/5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Cloud Telemetry:</span>
                  <span className="text-emerald-400 font-bold">0 Bytes</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Storage Engine:</span>
                  <span className="text-blue-400 font-bold">Local SQLite</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Data Portability:</span>
                  <span className="text-cyan-400 font-bold">CSV / JSON Export</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400 font-mono">
              Complete Data Privacy
            </div>
          </div>

          {/* Card 4: Daily Productivity Heatmap (Spans 2 cols) */}
          <div className="app-card p-8 lg:col-span-2 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold rounded-full flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" /> 6-Day Streak
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                GitHub-Style Focus Heatmaps & Habit Analytics
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xl mb-6">
                Understand your peak focus hours, monitor context-switching burnout, and track long-term discipline trends with visual reports.
              </p>

              {/* Heatmap Grid Visual */}
              <div className="bg-[#0b101c] p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <span>Weekly Focus Consistency</span>
                  <span className="text-emerald-400 font-semibold">92% Weekly Score</span>
                </div>

                {/* Heatmap Grid Simulation */}
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dIdx) => (
                    <div key={dIdx} className="flex flex-col gap-1.5 items-center">
                      <span className="text-[10px] text-slate-500 font-mono">{day}</span>
                      <div className="flex flex-col gap-1">
                        <div className={`w-6 h-6 rounded ${dIdx === 5 ? 'bg-blue-500/30' : dIdx === 6 ? 'bg-blue-500/20' : 'bg-blue-500'} flex items-center justify-center text-[9px] font-mono text-white font-bold`}>
                          {dIdx === 5 ? '3h' : dIdx === 6 ? '2h' : '5h'}
                        </div>
                        <div className={`w-6 h-6 rounded ${dIdx > 4 ? 'bg-blue-500/40' : 'bg-blue-600'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Automated Daily Digest</span>
              <span className="text-cyan-400 font-semibold">Exportable PDF & CSV</span>
            </div>
          </div>

          {/* Card 5: Ultra-Lean RAM Footprint Benchmark (Spans 3 cols on desktop) */}
          <div className="app-card p-8 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-6 border-blue-500/20 bg-blue-600/[0.02]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Ultra-Lean RAM Footprint: Less Than 15 MB
                </h3>
                <p className="text-xs text-slate-400 max-w-xl mt-1">
                  Built natively in compiled Win32 C++/Rust instead of bulky 400MB Electron or bloated browser extension runtimes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0 font-mono text-xs">
              <div className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/5 min-w-[120px]">
                <div className="text-xl font-bold text-emerald-400">&lt; 15 MB</div>
                <div className="text-[10px] text-slate-400 uppercase mt-0.5">ScreenTime RAM</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/5 min-w-[120px]">
                <div className="text-xl font-bold text-rose-400">~380 MB</div>
                <div className="text-[10px] text-slate-400 uppercase mt-0.5">Browser Ext.</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
