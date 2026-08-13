import React from 'react';
import { Shield, Sparkles, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { APP_NAME, RELEASE_VERSION } from '../data/releaseData';

export default function AboutManifesto({ onToast }) {
  return (
    <section className="section-padding bg-[#090d16] border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-blue-950/30 to-[#0c1322] border border-blue-500/20 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle top glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold mb-4 mx-auto">
            <img src="/logo.png" alt="Logo" className="w-3.5 h-3.5 rounded object-cover" />
            <span>Open Source & Free • MIT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto mb-5 leading-tight">
            Ready to Reclaim <span className="text-gradient">3+ Hours Every Day?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Download Desktop Wellbeing today. Track your screen time, build healthy digital habits, and reclaim deep focus on Windows.
          </p>

          {/* 3 Metric Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left font-mono">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-2xl font-bold text-blue-400">3+ Hours</div>
              <div className="text-xs text-slate-400 mt-1">Average Daily Time Saved</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-2xl font-bold text-emerald-400">&lt; 15 MB</div>
              <div className="text-xs text-slate-400 mt-1">Ultra-Lean RAM Footprint</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-2xl font-bold text-cyan-400">100% Local</div>
              <div className="text-xs text-slate-400 mt-1">Zero Cloud Telemetry</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#download" 
              className="btn btn-primary btn-lg flex items-center gap-2.5 shadow-xl shadow-blue-500/25"
            >
              <Download className="w-5 h-5" />
              <span>Download Desktop Wellbeing ({RELEASE_VERSION})</span>
            </a>

            <a 
              href="https://github.com/nayak-codes/Desktop-Wellbeing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>Star on GitHub</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
