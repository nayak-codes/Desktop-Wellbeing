import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { APP_NAME, RELEASE_VERSION } from '../data/releaseData';

export default function Footer({ onToast }) {
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
    <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-12 relative text-slate-400 text-xs">
      <div className="container mx-auto px-6">
        
        {/* Top Footer 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="Desktop Wellbeing Logo" 
                className="w-8 h-8 rounded-lg shadow-md shadow-blue-500/20 object-cover" 
              />
              <span className="text-base font-bold text-white tracking-tight">
                Desktop<span className="text-gradient ml-1">Wellbeing</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono bg-blue-500/15 text-blue-400 border border-blue-500/20 rounded">
                Windows
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The lightweight, local-first screen time tracker and digital wellbeing engine for Windows 10 & 11. Designed to automate digital discipline with zero telemetry.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{RELEASE_VERSION} Production Ready</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Key Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Live Demo Sandbox</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Download Wizard</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">CLI Package Managers</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Privacy & Security Specs</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">SmartScreen Guide</a></li>
              <li><a href="#" onClick={handleShare} className="hover:text-white transition-colors">Share Website</a></li>
            </ul>
          </div>

          {/* Column 3: Open Source */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Community</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://github.com/nayak-codes/Desktop-Wellbeing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="https://github.com/nayak-codes/Desktop-Wellbeing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MIT License</a></li>
              <li><a href="https://github.com/nayak-codes/Desktop-Wellbeing/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Report an Issue</a></li>
              <li><a href="https://github.com/nayak-codes/Desktop-Wellbeing/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Release Changelog</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <div>
            &copy; 2026 Desktop Wellbeing Project. 100% Free & Open Source under MIT License.
          </div>

          <div className="flex items-center gap-4">
            <span>Built natively for Windows 10 & 11</span>
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
