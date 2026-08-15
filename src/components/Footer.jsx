import React from 'react';
import { ArrowUp, ExternalLink, Globe, ShieldCheck, Sparkles, Building2, Heart, Mail, Send } from 'lucide-react';
import { APP_NAME, RELEASE_VERSION, COMPANY_NAME, COMPANY_URL, COMPANY_TAGLINE, DIRECT_EXE_DOWNLOAD_URL, GITHUB_REPO } from '../data/releaseData';
import { WindowsModernIcon } from './Icons';

export default function Footer({ onToast, onOpenPrivacy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (onToast) onToast("Link copied to clipboard!", "copy");
    }
  };

  return (
    <footer className="bg-[#050811] border-t border-white/10 relative text-slate-400 text-xs font-sans">
      
      {/* Top Banner Ribbon: PROUDLY BUILT BY Balanju Solutions */}
      <div className="bg-[#090e1f] border-b border-white/10 py-3.5 px-6">
        <div className="container mx-auto flex items-center justify-center gap-3 font-mono text-xs">
          <span className="text-slate-400 uppercase tracking-widest font-semibold text-[11px]">
            PROUDLY BUILT BY
          </span>
          <a
            href={COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3d2b78] hover:bg-[#4d3696] text-white font-sans text-xs font-semibold border border-purple-400/30 transition-all shadow-md shadow-purple-900/30 group cursor-pointer"
          >
            <span className="text-blue-400 text-sm">◆</span>
            <span>{COMPANY_NAME}</span>
            <span className="text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-12">
        
        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 items-start">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="Desktop Wellbeing Logo" 
                className="w-8 h-8 rounded-lg shadow-md shadow-blue-500/20 object-cover ring-1 ring-white/10" 
              />
              <span className="text-lg font-bold text-white tracking-tight font-sans">
                Desktop<span className="text-gradient ml-1">Wellbeing</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-blue-500/15 text-blue-400 border border-blue-500/20 rounded">
                <WindowsModernIcon className="w-2.5 h-2.5 text-[#0078D4]" />
                Windows
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The ultra-lightweight, local-first screen time tracker and digital wellbeing engine for Windows 10 & 11. Designed to automate discipline with zero telemetry.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2 pt-1">
              <a 
                href={GITHUB_REPO} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="GitHub Repository"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a 
                href={COMPANY_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Balanju Solutions Portal"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href={`${COMPANY_URL}#contact`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Contact Team"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button 
                onClick={handleShare}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Share Website"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{RELEASE_VERSION} Production Ready • 100% Local</span>
              </div>
            </div>
          </div>

          {/* Column 2: FEATURES (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Features</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors flex items-center gap-1.5"><span>⚡</span><span>Live Tracking</span></a></li>
              <li><a href="#demo" className="hover:text-white transition-colors flex items-center gap-1.5"><span>🎯</span><span>Focus Sprints</span></a></li>
              <li><a href="#demo" className="hover:text-white transition-colors flex items-center gap-1.5"><span>📊</span><span>24h Timeline</span></a></li>
              <li><a href="#features" className="hover:text-white transition-colors flex items-center gap-1.5"><span>🔒</span><span>Strict Lock</span></a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors flex items-center gap-1.5"><span>🛡️</span><span>Zero Telemetry</span></a></li>
            </ul>
          </div>

          {/* Column 3: PRODUCT & TRUST (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors flex items-center gap-1.5"><span>✨</span><span>Key Features</span></a></li>
              <li><a href="#demo" className="hover:text-white transition-colors flex items-center gap-1.5"><span>🖥️</span><span>Sandbox Demo</span></a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors flex items-center gap-1.5"><span>📖</span><span>How It Works</span></a></li>
              <li><a href="#download" className="hover:text-white transition-colors flex items-center gap-1.5"><span>📥</span><span>Download (.exe)</span></a></li>
              <li>
                <button 
                  onClick={onOpenPrivacy} 
                  className="hover:text-blue-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer text-slate-300 font-medium"
                >
                  <span>🛡️</span><span>Privacy Policy</span>
                </button>
              </li>
              <li><a href="#faq" className="hover:text-white transition-colors flex items-center gap-1.5"><span>❓</span><span>FAQ & SmartScreen</span></a></li>
            </ul>
          </div>

          {/* Column 4: Signature Balanju Solutions Card (4 cols - Exact match to ourcompiler.com!) */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-[#0c1020] border border-[#2b244d] shadow-2xl relative overflow-hidden space-y-4 hover:border-purple-500/40 transition-colors group">
              
              {/* Card Header */}
              <div className="flex items-center gap-2 text-white font-bold text-sm font-sans">
                <span className="text-blue-400 text-base">◆</span>
                <span>{COMPANY_NAME}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                This flagship product of Balanju Solutions is built by a tech startup creating innovative software for developers & businesses.
              </p>

              {/* Links List */}
              <div className="space-y-2.5 pt-1 text-xs">
                <a 
                  href={COMPANY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                >
                  <span>🌐</span>
                  <span>Company Website</span>
                </a>

                <a 
                  href={`${COMPANY_URL}#products`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                >
                  <span>🚀</span>
                  <span>All Products</span>
                </a>

                <a 
                  href={`${COMPANY_URL}#services`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                >
                  <span>🛠️</span>
                  <span>Our Services</span>
                </a>

                <a 
                  href={`${COMPANY_URL}#contact`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                >
                  <span>🤝</span>
                  <span>Hire Us</span>
                </a>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href={COMPANY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#4c3596] hover:bg-[#5b3fb5] text-white font-semibold text-xs shadow-lg shadow-purple-900/30 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <span>Visit Balanju</span>
                  <span>→</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Horizontal Divider & Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          
          {/* Copyright */}
          <div className="flex flex-wrap items-center gap-1.5 text-slate-400 text-left">
            <span>&copy; 2026</span>
            <a 
              href={COMPANY_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-400 font-semibold transition-colors"
            >
              {COMPANY_NAME}
            </a>
            <span>. All rights reserved.</span>
            <span className="text-slate-600">|</span>
            <span>Free & Open Source under MIT License.</span>
          </div>

          {/* Right Credit & Navigation */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <span className="flex items-center gap-1 text-slate-300">
              <span>Made with</span>
              <span className="text-rose-500">❤️</span>
              <span>in India by</span>
              <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 font-semibold flex items-center gap-1 ml-0.5">
                <span className="text-blue-400 text-xs">◆</span>
                <span>{COMPANY_NAME}</span>
              </a>
            </span>

            <span className="text-slate-600 hidden sm:inline">|</span>

            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
