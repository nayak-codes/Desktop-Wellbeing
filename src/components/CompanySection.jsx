import React from 'react';
import { Globe, ArrowRight, Sparkles, Building2, Code2, Rocket, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME, COMPANY_URL, COMPANY_TAGLINE, APP_NAME } from '../data/releaseData';

export default function CompanySection() {
  return (
    <section id="about" className="section-padding bg-[#070b14] relative border-t border-white/10 overflow-hidden">
      {/* Anchor for #company */}
      <div id="company" className="absolute -top-20"></div>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-teal-500/15 border border-white/15 text-xs font-semibold text-white mb-4 shadow-lg backdrop-blur-md">
            <Rocket className="w-3.5 h-3.5 text-blue-400" />
            <span>Parent Company & Software Studio</span>
          </div>

          <h2 className="section-title font-sans">
            Proudly Engineered by <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-400 bg-clip-text text-transparent">
              {COMPANY_NAME}
            </span>
          </h2>

          <p className="section-subtitle">
            <span className="text-white font-medium italic">"{COMPANY_TAGLINE}"</span>
            <br />
            {COMPANY_NAME} is a modern technology studio dedicated to building high-performance software products and delivering top-tier engineering solutions.
          </p>
        </div>

        {/* Company Feature Card Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0f1424] to-[#0a0e1a] border border-white/10 hover:border-blue-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-sans">
                Our Software Products
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                From native Windows wellbeing engines like {APP_NAME} to intuitive productivity tools, we engineer fast, local-first tools designed to empower focused builders.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-blue-400 font-semibold">
              ● Flagship Product: {APP_NAME}
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0f1424] to-[#0a0e1a] border border-white/10 hover:border-purple-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-sans">
                Bespoke Client Services
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We build full-stack web applications, native desktop tools, and custom digital systems for startups and forward-thinking businesses worldwide.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-purple-400 font-semibold">
              ● Web, Desktop & API Engineering
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0f1424] to-[#0a0e1a] border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-sans">
                Built with Passion
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Founded with a relentless drive to solve real problems through elegant code. Every line of our software is crafted with user privacy, speed, and reliability at its core.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400 font-semibold">
              ● 100% Transparent & Independent
            </div>
          </div>

        </div>

        {/* Big Company Showcase Banner */}
        <div className="max-w-5xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0d1326] via-[#101730] to-[#0b1020] border border-white/15 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-mono">
              <span>🎓 Founded by a B.Tech Student • Just Getting Started</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
              Looking for Custom Software or Collaboration?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our full portfolio of products, services, and creative solutions at our official company portal. Let's build something extraordinary together.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full md:w-auto shrink-0">
            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center gap-2.5 shadow-xl shadow-blue-600/30 cursor-pointer text-xs font-bold py-3.5 px-6"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Balanju Solutions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`${COMPANY_URL}#contact`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex items-center justify-center gap-2 text-xs font-semibold py-3 px-6 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Hire Us for a Project</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
