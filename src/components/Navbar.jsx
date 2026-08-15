import React, { useState } from 'react';
import { Download, Search, Menu, X } from 'lucide-react';
import { APP_NAME, RELEASE_VERSION, DIRECT_EXE_DOWNLOAD_URL } from '../data/releaseData';
import { WindowsModernIcon } from './Icons';

export default function Navbar({ onOpenSearch, onToast }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDownloadClick = () => {
    if (onToast) onToast("Starting download for Desktop.Wellbeing.Setup.1.0.0.exe...", "success");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060911]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-center gap-3 text-decoration-none group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Desktop Wellbeing Logo"
              className="w-8 h-8 rounded-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform object-cover ring-1 ring-white/10"
            />
            <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm -z-10 group-hover:bg-blue-500/35 transition-colors"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold tracking-tight text-white flex items-center font-sans">
              Desktop<span className="text-gradient ml-1">Wellbeing</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/25 rounded-md shadow-sm">
              <WindowsModernIcon className="w-2.5 h-2.5 text-[#0078D4]" />
              <span>Windows</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 px-3 py-1 rounded-full backdrop-blur-md">
          <a href="#features" className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all">
            Features
          </a>
          <a href="#demo" className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all flex items-center gap-1.5">
            <span>Live Demo</span>
          </a>
          <a href="#how-it-works" className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all">
            How It Works
          </a>
          <a href="#download" className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all">
            Download
          </a>
          <a href="#faq" className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all">
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 bg-slate-900/90 border border-white/10 hover:border-slate-600 rounded-lg text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            title="Search (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.2 bg-white/10 border border-white/10 rounded text-[10px] font-mono text-slate-300">⌘K</kbd>
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/nayak-codes/Desktop-Wellbeing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            title="GitHub Source Repository"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Primary CTA */}
          <a
            href={DIRECT_EXE_DOWNLOAD_URL}
            download="Desktop.Wellbeing.Setup.1.0.0.exe"
            onClick={handleDownloadClick}
            className="btn btn-primary btn-sm flex items-center gap-2 text-xs font-semibold cursor-pointer shadow-md shadow-blue-500/20"
          >
            <WindowsModernIcon className="w-3.5 h-3.5" />
            <span>Download Free</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/10 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#060911] border-b border-white/10 px-6 py-4 flex flex-col gap-3">
          <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-slate-200 py-1.5">Features</a>
          <a href="#demo" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-slate-200 py-1.5">Live Demo</a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-slate-200 py-1.5">How It Works</a>
          <a href="#download" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-slate-200 py-1.5">Download Matrix</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-slate-200 py-1.5">FAQ</a>
          <a
            href={DIRECT_EXE_DOWNLOAD_URL}
            download="Desktop.Wellbeing.Setup.1.0.0.exe"
            onClick={() => { setMobileOpen(false); handleDownloadClick(); }}
            className="btn btn-primary btn-sm flex items-center justify-center gap-2 mt-2"
          >
            <WindowsModernIcon className="w-4 h-4" />
            <span>Download .exe (v1.0.0)</span>
          </a>
        </div>
      )}
    </header>
  );
}
