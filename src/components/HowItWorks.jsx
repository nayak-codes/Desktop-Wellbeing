import React from 'react';
import { Download, Sliders, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "One-Click Native Setup",
      subtitle: "Instant 15-Second Install",
      desc: "Install via direct .exe or `winget`. The lightweight engine registers seamlessly to your Windows System Tray with zero background lag.",
      badge: "Zero Configuration",
      icon: Download
    },
    {
      num: "02",
      title: "Customize Rules & Limits",
      subtitle: "Smart Categorization",
      desc: "Choose apps to whitelist (VS Code, Figma) and assign daily quotas or work-hour blackouts to distracting apps (YouTube, Games, Discord).",
      badge: "Custom Schedules",
      icon: Sliders
    },
    {
      num: "03",
      title: "Unstoppable Flow State",
      subtitle: "Automatic Protection",
      desc: "Hit `Ctrl+Shift+F` to trigger a focus sprint. Distractions are intercepted instantly, helping you reclaim 3+ hours every single day.",
      badge: "3+ Hours Saved Daily",
      icon: Zap
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-[#070a12] border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge">How It Works</div>
          <h2 className="section-title">
            Simple 3-Step <span className="text-gradient">Discipline Engine</span>
          </h2>
          <p className="section-subtitle">
            Designed to remove friction so you can focus on high-impact work immediately.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className="app-card p-8 relative flex flex-col justify-between group hover:border-blue-500/40"
              >
                {/* Step Number Backdrop */}
                <div className="absolute top-6 right-6 text-6xl font-black font-mono text-white/[0.04] group-hover:text-blue-500/10 transition-colors select-none">
                  {s.num}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    {s.subtitle}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {s.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {s.badge}
                  </span>
                  <span className="text-slate-500 font-bold">Step {idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
