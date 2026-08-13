import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Lock, Unlock, Activity, ShieldAlert, Monitor, Sparkles, Terminal } from 'lucide-react';
import { APP_NAME } from '../data/releaseData';

export default function InteractiveSimulator({ onToast }) {
  const [activeApp, setActiveApp] = useState('vscode');
  const [isStrict, setIsStrict] = useState(true);
  const [elapsedSeconds, setElapsedSeconds] = useState(185);
  const [score, setScore] = useState(96);
  const [logs, setLogs] = useState([
    { time: "00:00:01", type: "system", text: "Desktop Wellbeing Win32 Engine active (HWND Hook listening)" },
    { time: "00:00:02", type: "productive", text: "Active Window: 'Visual Studio Code' (Development)" }
  ]);

  const apps = {
    vscode: { name: 'Visual Studio Code', type: 'productive', category: 'Software Development', icon: '💻', tag: 'Productive' },
    figma: { name: 'Figma Design Suite', type: 'productive', category: 'UI/UX Design', icon: '🎨', tag: 'Productive' },
    youtube: { name: 'YouTube Shorts', type: 'distraction', category: 'Video Streaming', icon: '🎬', tag: 'Distraction' },
    steam: { name: 'Steam Game Client', type: 'distraction', category: 'Gaming', icon: '🎮', tag: 'Distraction' },
    discord: { name: 'Discord Chat', type: 'distraction', category: 'Social Media', icon: '💬', tag: 'Distraction' }
  };

  const addLog = (text, type = "info") => {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setLogs(prev => [...prev.slice(-6), { time, type, text }]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (apps[activeApp]?.type === 'productive') {
        setElapsedSeconds(s => s + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [activeApp]);

  const handleSelectApp = (key) => {
    setActiveApp(key);
    const selected = apps[key];

    if (selected.type === 'productive') {
      setScore(s => Math.min(100, s + 1));
      addLog(`Foreground switched to '${selected.name}'. Session active.`, "productive");
      if (onToast) onToast(`Switched window to ${selected.name}`, "info");
    } else {
      if (isStrict) {
        addLog(`BLOCKED: Launch of '${selected.name}' intercepted by Strict Guard.`, "alert");
        if (onToast) onToast(`🛑 Blocked: '${selected.name}' is restricted by Strict Mode!`, "alert");
      } else {
        setScore(s => Math.max(50, s - 5));
        addLog(`Distraction '${selected.name}' allowed (Strict Mode OFF). Score decreased.`, "warning");
        if (onToast) onToast(`Distraction launched (Strict Mode OFF)`, "info");
      }
    }
  };

  const formatTimer = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const isBlocked = apps[activeApp]?.type === 'distraction' && isStrict;

  return (
    <section id="demo" className="section-padding bg-[#090d16] relative border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge">Live Interactive Demo</div>
          <h2 className="section-title">
            Test the Focus Engine <span className="text-gradient">in Real-Time</span>
          </h2>
          <p className="section-subtitle">
            Simulate window switching, strict mode interceptions, and deep focus sprints directly in your browser.
          </p>
        </div>

        {/* Demo Console Window */}
        <div className="app-card max-w-5xl mx-auto overflow-hidden border border-white/15 shadow-2xl">
          
          {/* Console Header Bar */}
          <div className="bg-[#0b101c] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <img src="/logo.png" alt="Logo" className="w-4 h-4 rounded object-cover" />
                <span className="text-xs font-mono text-slate-300">
                  Desktop Wellbeing Console — v1.0.0
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Strict Mode Toggle */}
              <button 
                onClick={() => {
                  setIsStrict(!isStrict);
                  addLog(`Strict Lock Mode toggled ${!isStrict ? "ON" : "OFF"}.`, "system");
                  if (onToast) onToast(`Strict Mode: ${!isStrict ? "ENABLED 🔒" : "DISABLED 🔓"}`);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isStrict 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-white/5 text-slate-400 border border-white/10'
                }`}
              >
                {isStrict ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                <span>Strict Mode: {isStrict ? "ON" : "OFF"}</span>
              </button>

              {/* Reset */}
              <button 
                onClick={() => {
                  setElapsedSeconds(0);
                  setActiveApp('vscode');
                  setScore(96);
                  addLog("Simulator reset to initial state.", "system");
                  if (onToast) onToast("Simulator reset");
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-slate-300 transition-colors cursor-pointer"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Console Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            
            {/* Left: App Switcher Dock (5 cols) */}
            <div className="lg:col-span-5 p-6 bg-[#080c16] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3 font-mono">
                  1. Switch Foreground Window
                </span>

                <div className="space-y-2">
                  {Object.keys(apps).map(key => {
                    const app = apps[key];
                    const isSelected = activeApp === key;

                    return (
                      <button
                        key={key}
                        onClick={() => handleSelectApp(key)}
                        className={`w-full p-3 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10' 
                            : 'bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{app.icon}</span>
                          <div>
                            <div className="text-sm font-semibold">{app.name}</div>
                            <div className={`text-[11px] font-mono ${app.type === 'productive' ? 'text-blue-400' : 'text-rose-400'}`}>
                              {app.category}
                            </div>
                          </div>
                        </div>

                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                          isSelected 
                            ? (app.type === 'productive' ? 'bg-blue-500 text-white' : 'bg-rose-500 text-white')
                            : 'bg-white/5 text-slate-500'
                        }`}>
                          {isSelected ? (app.type === 'productive' ? 'ACTIVE' : 'BLOCKED') : 'IDLE'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status footer note */}
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Kernel Hook: <strong>Connected</strong></span>
                <span className="text-emerald-400 font-mono">● Active</span>
              </div>
            </div>

            {/* Right: Live Monitor & Security Guard (7 cols) */}
            <div className="lg:col-span-7 p-6 flex flex-col justify-between gap-6 bg-[#0a0f1d]/80">
              
              {/* Screen Monitor Display */}
              <div className="p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center text-center min-h-[240px]">
                
                {isBlocked ? (
                  /* Blocked Intercept Screen */
                  <div className="space-y-4 max-w-md animate-in fade-in">
                    <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-2xl flex items-center justify-center mx-auto text-rose-400 shadow-lg shadow-rose-500/20">
                      🛑
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-rose-400">
                        Launch Attempt Intercepted
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        <strong>{apps[activeApp]?.name}</strong> is restricted during your Deep Work session. Process bypass prevention is engaged.
                      </p>
                    </div>

                    <button 
                      onClick={() => handleSelectApp('vscode')}
                      className="btn btn-primary btn-sm mt-2"
                    >
                      ← Return to VS Code (Productive)
                    </button>
                  </div>
                ) : (
                  /* Normal Active Screen */
                  <div className="space-y-5 animate-in fade-in w-full">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-semibold mb-2 font-mono">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Foreground Window Attribution</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {apps[activeApp]?.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Category: {apps[activeApp]?.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-10 sm:gap-14 pt-2">
                      <div>
                        <div className="text-xs text-slate-400 font-mono uppercase">Session Time</div>
                        <div className="text-3xl font-mono font-bold text-blue-400 mt-1">
                          {formatTimer(elapsedSeconds)}
                        </div>
                      </div>
                      <div className="w-px h-10 bg-white/10"></div>
                      <div>
                        <div className="text-xs text-slate-400 font-mono uppercase">Focus Ratio</div>
                        <div className="text-3xl font-mono font-bold text-emerald-400 mt-1">
                          {score}%
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Real-time Daemon Event Stream Log */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 font-mono text-xs">
                <div className="text-slate-500 font-bold mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>Win32 Daemon Event Stream</span>
                  </span>
                  <span className="text-[10px] text-slate-600">LIVE</span>
                </div>
                <div className="space-y-1 max-h-20 overflow-y-auto">
                  {logs.map((l, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px]">
                      <span className="text-slate-600">[{l.time}]</span>
                      <span className={l.type === 'alert' ? 'text-rose-400 font-bold' : l.type === 'productive' ? 'text-emerald-400' : 'text-slate-300'}>
                        {l.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
