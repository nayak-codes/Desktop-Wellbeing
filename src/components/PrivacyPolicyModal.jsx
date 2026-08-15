import React, { useState } from 'react';
import { ShieldCheck, Lock, HardDrive, FileText, X, CheckCircle, ExternalLink } from 'lucide-react';
import { APP_NAME, COMPANY_NAME, COMPANY_URL, RELEASE_VERSION } from '../data/releaseData';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('privacy'); // 'privacy' | 'terms'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="w-full max-w-3xl max-h-[85vh] bg-[#0c101c] border border-white/15 rounded-2xl shadow-2xl shadow-black flex flex-col overflow-hidden text-slate-200 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#080c16]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {activeTab === 'privacy' ? 'Privacy Policy & Data Transparency' : 'Terms of Service & License'}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  100% Local-First
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Official policy for {APP_NAME} by <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{COMPANY_NAME}</a>
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 pb-1 border-b border-white/5 flex gap-4 text-xs font-semibold bg-[#090d18]">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'privacy' 
                ? 'border-blue-500 text-blue-400' 
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Privacy & Security Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'terms' 
                ? 'border-blue-500 text-blue-400' 
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Terms of Service (MIT)
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300 leading-relaxed">
          
          {activeTab === 'privacy' ? (
            <>
              {/* Executive Summary */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>The Balanju Solutions Zero-Telemetry Pledge</span>
                </div>
                <p className="text-slate-300">
                  {APP_NAME} is built by <strong>{COMPANY_NAME}</strong> with an absolute local-first architecture. <strong>No window titles, active process names, keystrokes, or screen time statistics ever leave your physical device.</strong> There are zero cloud databases, zero ad networks, and zero tracking servers.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-blue-400" />
                  <span>1. Local Data Storage & Structure</span>
                </h4>
                <p>
                  All metrics tracked by {APP_NAME} (such as active application name, duration spent, daily goals, and category tags) are stored solely on your local storage drive under:
                </p>
                <code className="block p-2.5 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-blue-300">
                  %APPDATA%\Roaming\desktop-wellbeing\screentime-data.json
                </code>
                <p>
                  This data is never synchronized with any remote server, cloud API, or third-party service.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>2. Zero Third-Party Telemetry or Analytics</span>
                </h4>
                <p>
                  Unlike modern software suites that harvest telemetry via Google Analytics, Mixpanel, or Segment, {APP_NAME} contains <strong>zero third-party tracking scripts</strong>. We do not track your IP address, device fingerprints, or behavioral habits.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>3. Windows Permissions & System Hooks</span>
                </h4>
                <p>
                  {APP_NAME} uses standard user-mode Win32 API functions (<code className="text-slate-200">GetForegroundWindow</code> and <code className="text-slate-200">GetWindowText</code>) to identify which window is actively focused on your screen. It operates completely in user-space with <strong>no kernel drivers, no root access, and no elevated administrator privileges</strong> required.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>4. Full Data Ownership, Export & Erasure</span>
                </h4>
                <p>
                  You own 100% of your data. You can export your entire activity log at any time as an open standard JSON file from the Settings tab. You can also permanently wipe all logged history with a single click of the "Reset Data" button.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="text-sm font-bold text-white">5. Company Contact & Publisher Information</h4>
                <p>
                  This product is proudly developed and published by:
                </p>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-white text-sm">{COMPANY_NAME}</div>
                    <div className="text-slate-400 text-xs">Official Startup & Software Studio</div>
                    <div className="text-slate-500 text-[11px] font-mono mt-0.5">URL: {COMPANY_URL}</div>
                  </div>
                  <a 
                    href={COMPANY_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 font-semibold transition-colors shrink-0"
                  >
                    <span>Visit Company Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* MIT License & Terms */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-2">
                  <div className="font-bold text-white text-sm">MIT Open Source License</div>
                  <p className="text-slate-300">
                    Copyright &copy; 2026 {COMPANY_NAME}. Licensed under the permissive MIT Open Source License.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white">1. Freedom of Use & Redistribution</h4>
                  <p>
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white">2. Disclaimer of Warranty</h4>
                  <p className="text-slate-400">
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <h4 className="text-sm font-bold text-white">3. Commercial Services & Support</h4>
                  <p>
                    For custom enterprise deployments, bespoke feature builds, or development inquiries, please contact <strong>{COMPANY_NAME}</strong> directly via <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{COMPANY_URL}</a>.
                  </p>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#080c16] flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-mono">
            {APP_NAME} {RELEASE_VERSION} • {COMPANY_NAME}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
