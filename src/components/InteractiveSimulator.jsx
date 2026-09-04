import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, Lock, Unlock, Activity, ShieldAlert, Monitor, 
  Sparkles, Terminal, CheckCircle2, AlertTriangle, ArrowRight, Settings, 
  BarChart3, Target, Pin, Maximize2, Minus, X, Download, ShieldCheck, HardDrive
} from 'lucide-react';
import { APP_NAME, RELEASE_VERSION } from '../data/releaseData';
import { WindowsModernIcon } from './Icons';

export default function InteractiveSimulator({ onToast }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'focus' | 'analytics' | 'settings'
  const [isLive, setIsLive] = useState(true);
  const [isPinned, setIsPinned] = useState(true);
  const [totalSeconds, setTotalSeconds] = useState(41 * 60 + 59); // 41m 59s
  const [focusSeconds, setFocusSeconds] = useState(25 * 60);
  const [isFocusActive, setIsFocusActive] = useState(false);
  const [showLimitsModal, setShowLimitsModal] = useState(false);
  const [blockedAttempts, setBlockedAttempts] = useState(3);
  const [selectedApp, setSelectedApp] = useState('localhost');

  // Real apps list matching the user's actual Electron app
  const [apps, setApps] = useState([
    { id: 'localhost', name: 'localhost', category: 'Web App Dev', seconds: 9 * 60 + 17, isProductive: true, icon: '🌐', limit: null },
    { id: 'antigravity', name: 'Antigravity IDE', category: 'Code Editor', seconds: 8 * 60 + 44, isProductive: true, icon: '💻', limit: null },
    { id: 'powershell', name: 'powershell', category: 'CLI Terminal', seconds: 6 * 60 + 28, isProductive: true, icon: '⚡', limit: null },
    { id: 'firefox', name: 'firefox', category: 'Browser', seconds: 13 * 60 + 18, isProductive: false, icon: '🦊', limit: 10 * 60, exceeded: true },
    { id: 'explorer', name: 'explorer', category: 'File System', seconds: 4 * 60 + 12, isProductive: true, icon: '📁', limit: null }
  ]);

  // Live timer tick
  useEffect(() => {
    let timer = null;
    if (isLive) {
      timer = setInterval(() => {
        setTotalSeconds(s => s + 1);
        setApps(prev => prev.map(app => {
          if (app.id === selectedApp) {
            return { ...app, seconds: app.seconds + 1 };
          }
          return app;
        }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLive, selectedApp]);

  // Focus mode countdown
  useEffect(() => {
    let focusTimer = null;
    if (isFocusActive && focusSeconds > 0) {
      focusTimer = setInterval(() => {
        setFocusSeconds(s => s - 1);
      }, 1000);
    } else if (focusSeconds === 0 && isFocusActive) {
      setIsFocusActive(false);
      if (onToast) onToast("🎉 Focus sprint completed! Great job!", "success");
    }
    return () => clearInterval(focusTimer);
  }, [isFocusActive, focusSeconds, onToast]);

  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (h > 0) {
      return `${h}h ${m}m ${s}s`;
    }
    return `${m}m ${s}s`;
  };

  const formatTimerClock = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleLaunchDistraction = () => {
    setBlockedAttempts(b => b + 1);
    if (onToast) onToast("🛑 Strict Guard: 'Firefox / Social Media' is blocked during focus mode!", "alert");
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      version: RELEASE_VERSION,
      totalScreenTimeSeconds: totalSeconds,
      score: 40,
      apps: apps,
      exportedAt: new Date().toISOString()
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "desktop-wellbeing-data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    if (onToast) onToast("Exported screentime-data.json successfully!", "success");
  };

  return (
    <section id="demo" className="section-padding bg-[#070a13] border-t border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Demo</span>
          </div>

          <h2 className="section-title font-sans">
            Experience the Real <span className="text-gradient">Desktop App UI</span>
          </h2>

          <p className="section-subtitle">
            Click tabs, simulate focus sprints, inspect real active processes, and test the exact local wellbeing interface running on Windows 10 & 11.
          </p>
        </div>

        {/* Live Interactive Electron Dashboard Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#090d18] border border-white/15 shadow-2xl shadow-black/80 overflow-hidden text-slate-100 font-sans">
          
          {/* Authentic App Window Title Bar */}
          <div className="px-4 py-3 bg-[#0c1222] border-b border-white/10 flex items-center justify-between select-none">
            
            {/* Left: App Logo & Name */}
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Logo" className="w-4 h-4 rounded object-cover shadow" />
              <span className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
                <span>{APP_NAME}</span>
                <span className="text-[10px] text-slate-400 font-mono font-normal">{RELEASE_VERSION}</span>
              </span>
            </div>

            {/* Center Status Badges */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsLive(!isLive)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border transition-all cursor-pointer ${
                  isLive ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                }`}
                title="Click to toggle live tracking simulation"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                <span>{isLive ? 'TRACKING LIVE' : 'PAUSED'}</span>
              </button>

              <button 
                onClick={() => setIsPinned(!isPinned)}
                className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border cursor-pointer transition-colors ${
                  isPinned ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-white/5 text-slate-400 border-white/10'
                }`}
                title="Toggle Always-on-top"
              >
                <Pin className={`w-2.5 h-2.5 ${isPinned ? 'text-blue-400 fill-blue-400' : ''}`} />
                <span>{isPinned ? 'Pinned' : 'Unpinned'}</span>
              </button>

              <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                Sat
              </span>
            </div>

            {/* Right: Windows Window Controls */}
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <Minus className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
              <Maximize2 className="w-3 h-3 hover:text-white transition-colors cursor-pointer" />
              <X className="w-3.5 h-3.5 hover:text-rose-400 transition-colors cursor-pointer" />
            </div>

          </div>

          {/* 4 App Tabs Navigation Header */}
          <div className="px-4 pt-2 border-b border-white/10 bg-[#0a0f1e] flex gap-2 sm:gap-4 overflow-x-auto text-xs font-semibold select-none">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('focus')}
              className={`pb-2.5 px-3 border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'focus'
                  ? 'border-blue-500 text-blue-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Focus Mode</span>
              {isFocusActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>}
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`pb-2.5 px-3 border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`pb-2.5 px-3 border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'border-blue-500 text-blue-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </button>
          </div>

          {/* TAB 1: OVERVIEW (Exact replica of user's app dashboard!) */}
          {activeTab === 'overview' && (
            <div className="p-6 space-y-6">
              
              {/* Top Row: Big Timer + Donut Gauge Score */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Left Card: Total Screen Time */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#0e1529] to-[#0b1020] border border-white/10 flex flex-col justify-between">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    TODAY'S SCREEN TIME
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono my-2 tracking-tight">
                    {formatTime(totalSeconds)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Currently tracking: <strong className="text-white font-mono">{selectedApp}</strong></span>
                  </div>
                </div>

                {/* Right Card: 40% Score Circular Donut */}
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

                  {/* Circular Donut Gauge Graphic */}
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
                        className="text-cyan-400 transition-all duration-500"
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

              {/* Middle Row: Weekly Waveform + Limits Action */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* 7-Day Waveform */}
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

                {/* Manage Limits Button */}
                <button
                  onClick={() => setShowLimitsModal(!showLimitsModal)}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors cursor-pointer w-full sm:w-auto justify-center"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Manage App Limits</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    1 Exceeded!
                  </span>
                </button>

              </div>

              {/* Limits Warning Banner (Conditional) */}
              {showLimitsModal && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs flex items-center justify-between animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>firefox</strong> has exceeded its daily allowance (13m 18s / 10m 00s limit).</span>
                  </div>
                  <button 
                    onClick={() => {
                      if (onToast) onToast("Updated limit for firefox to 20 mins", "success");
                      setShowLimitsModal(false);
                    }}
                    className="px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    Increase Limit
                  </button>
                </div>
              )}

              {/* Apps List Header & Real Active Process Items */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
                  <span>ACTIVE PROCESSES ({apps.length})</span>
                  <span>TIME SPENT</span>
                </div>

                <div className="space-y-2">
                  {apps.map((app) => (
                    <div 
                      key={app.id}
                      onClick={() => {
                        setSelectedApp(app.id);
                        if (onToast) onToast(`Foreground switched to ${app.name}`, "info");
                      }}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        selectedApp === app.id 
                          ? 'bg-blue-500/10 border-blue-500/40 shadow-md shadow-blue-500/10' 
                          : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{app.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs text-white font-mono">{app.name}</span>
                            {app.exceeded && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
                                Exceeded
                              </span>
                            )}
                            {selectedApp === app.id && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-500 font-sans">{app.category}</span>
                        </div>
                      </div>

                      <div className="text-right font-mono text-xs">
                        <span className={app.exceeded ? 'text-rose-400 font-bold' : 'text-slate-200'}>
                          {formatTime(app.seconds)}
                        </span>
                        <div className="text-[10px] text-slate-500">
                          {Math.round((app.seconds / totalSeconds) * 100)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: FOCUS MODE SPRINT */}
          {activeTab === 'focus' && (
            <div className="p-8 text-center space-y-6">
              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-lg font-bold text-white">Pomodoro Deep Focus Sprint</h3>
                <p className="text-xs text-slate-400">
                  Strict Mode automatically blocks blacklisted distraction windows until your timer completes.
                </p>
              </div>

              {/* Giant Focus Clock */}
              <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-b from-[#0e172e] to-[#070b16] border-2 border-blue-500/30 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20 relative">
                <span className="text-4xl font-extrabold font-mono text-white tracking-wider">
                  {formatTimerClock(focusSeconds)}
                </span>
                <span className="text-[11px] font-mono text-blue-400 mt-1">
                  {isFocusActive ? '⚡ SPRINT RUNNING' : '⏸ READY'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setIsFocusActive(!isFocusActive);
                    if (onToast) onToast(isFocusActive ? "Focus sprint paused" : "🚀 Focus sprint started! Strict guard active.", "success");
                  }}
                  className="btn btn-primary btn-md flex items-center gap-2 cursor-pointer"
                >
                  {isFocusActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isFocusActive ? 'Pause Sprint' : 'Start Focus Sprint'}</span>
                </button>

                <button
                  onClick={() => {
                    setIsFocusActive(false);
                    setFocusSeconds(25 * 60);
                  }}
                  className="btn btn-secondary btn-md flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Interception Simulation Pill */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 max-w-md mx-auto text-left space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Strict Interception Guard</span>
                  </span>
                  <span className="font-mono text-amber-400 text-[11px]">{blockedAttempts} blocked</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Simulate launching a distracting app while Focus Sprint is active:
                </p>
                <button
                  onClick={handleLaunchDistraction}
                  className="w-full py-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Simulate Opening Blocked App (e.g. YouTube / Firefox)</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-left">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs text-slate-400">Software Dev</div>
                  <div className="text-2xl font-bold text-blue-400 mt-1">24m 29s</div>
                  <div className="text-[10px] text-slate-500 mt-1">58% of active time</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs text-slate-400">Web Browsing</div>
                  <div className="text-2xl font-bold text-purple-400 mt-1">13m 18s</div>
                  <div className="text-[10px] text-slate-500 mt-1">32% of active time</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs text-slate-400">System Utilities</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">4m 12s</div>
                  <div className="text-[10px] text-slate-500 mt-1">10% of active time</div>
                </div>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>CATEGORY DISTRIBUTION</span>
                  <span>100% AUDITED</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 flex overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '58%' }} title="Development: 58%"></div>
                  <div className="h-full bg-purple-500" style={{ width: '32%' }} title="Browsing: 32%"></div>
                  <div className="h-full bg-emerald-500" style={{ width: '10%' }} title="System: 10%"></div>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Dev (58%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Browser (32%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> System (10%)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SETTINGS & LOCAL STORAGE */}
          {activeTab === 'settings' && (
            <div className="p-6 space-y-5 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="font-bold text-white text-sm flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-blue-400" />
                  <span>Physical Local Storage Path</span>
                </div>
                <p className="text-slate-400">
                  All activity data is stored in plain JSON on your Windows machine with zero cloud connectivity:
                </p>
                <code className="block p-2.5 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-blue-300">
                  %APPDATA%\Roaming\desktop-wellbeing\screentime-data.json
                </code>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div>
                    <div className="font-semibold text-white">Launch on Windows Startup</div>
                    <div className="text-[11px] text-slate-400">Starts minimized in system tray when PC boots</div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    ENABLED
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div>
                    <div className="font-semibold text-white">Data Export & Backup</div>
                    <div className="text-[11px] text-slate-400">Download all your logs as standard JSON</div>
                  </div>
                  <button
                    onClick={handleExportJSON}
                    className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export JSON</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* App Footer Bar */}
          <div className="px-5 py-3 border-t border-white/10 bg-[#080d1a] flex items-center justify-between text-[11px] font-mono text-slate-400 select-none">
            <span className="flex items-center gap-1.5">
              <WindowsModernIcon className="w-3 h-3 text-[#0078D4]" />
              <span>Native Windows Win32 Hook • RAM: 14.2 MB</span>
            </span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>100% Local (Zero Telemetry)</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
