import React, { useState, useEffect } from 'react';
import { Search, Download, Shield, Terminal, BookOpen, Layers, X, ArrowRight } from 'lucide-react';
import { APP_NAME } from '../data/releaseData';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose ? (!isOpen ? null : null) : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    { title: "Download Desktop Wellbeing (.exe)", category: "Download", href: "#download", icon: Download },
    { title: "Install via winget CLI", category: "CLI", href: "#download", icon: Terminal },
    { title: "Explore Features & Limits", category: "Features", href: "#features", icon: Shield },
    { title: "Try Live Focus Simulator", category: "Live Demo", href: "#demo", icon: Layers },
    { title: "Frequently Asked Questions", category: "Help & FAQ", href: "#faq", icon: BookOpen }
  ];

  const filteredActions = quickActions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette-modal" onClick={e => e.stopPropagation()}>
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <img src="/logo.png" alt="Logo" className="w-4 h-4 rounded object-cover" />
          <input 
            type="text" 
            placeholder="Search features, downloads, guides..."
            className="w-full bg-transparent text-white text-sm outline-none placeholder:text-slate-500"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="text-slate-400 hover:text-white cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[300px] overflow-y-auto p-2">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              No results found for "{query}"
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <a 
                  key={idx}
                  href={action.href}
                  onClick={onClose}
                  className="p-3 rounded-lg flex items-center justify-between text-slate-300 hover:text-white hover:bg-blue-600/10 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-white/5 group-hover:bg-blue-500/20 text-blue-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{action.title}</div>
                      <div className="text-[10px] text-slate-400">{action.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#0a0f1c] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-slate-300">Esc</kbd> to close</span>
          <span>Desktop Wellbeing Quick Navigation</span>
        </div>

      </div>
    </div>
  );
}
