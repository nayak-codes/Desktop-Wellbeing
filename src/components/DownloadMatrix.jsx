import React, { useState } from 'react';
import { Download, Check, Copy, Terminal, Shield, HelpCircle, CheckCircle2, Lock, ExternalLink } from 'lucide-react';
import { DOWNLOAD_OPTIONS, CLI_COMMANDS, RELEASE_VERSION, GITHUB_RELEASE_URL } from '../data/releaseData';

export default function DownloadMatrix({ onToast }) {
  const [activeCliTab, setActiveCliTab] = useState('powershell');
  const [copiedCli, setCopiedCli] = useState(false);
  const [copiedSha, setCopiedSha] = useState(null);

  const handleDownload = (opt) => {
    if (onToast) onToast(`Starting download for ${opt.filename}...`, "success");
  };

  const handleCopyCli = () => {
    const cmd = CLI_COMMANDS[activeCliTab]?.cmd || "";
    navigator.clipboard.writeText(cmd);
    setCopiedCli(true);
    if (onToast) onToast("Command copied to clipboard!", "copy");
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const handleCopySha = (sha, id) => {
    navigator.clipboard.writeText(sha);
    setCopiedSha(id);
    if (onToast) onToast("SHA-256 checksum copied!", "copy");
    setTimeout(() => setCopiedSha(null), 2500);
  };

  return (
    <section id="download" className="section-padding bg-[#090d16] border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge">Official GitHub Release Hub</div>
          <h2 className="section-title">
            Download <span className="text-gradient">Desktop Wellbeing</span>
          </h2>
          <p className="section-subtitle">
            Get the native binary for Windows. Free, open-source under MIT, and zero cloud telemetry.
          </p>
        </div>

        {/* Binary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {DOWNLOAD_OPTIONS.map((opt) => {
            const isExternal = !opt.url.endsWith('.exe') && !opt.url.endsWith('.zip');
            return (
              <div 
                key={opt.id}
                className={`app-card p-7 flex flex-col justify-between ${
                  opt.isPrimary ? 'border-blue-500/50 bg-blue-600/[0.04] shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                      opt.isPrimary ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-white/5 text-slate-400 border border-white/10'
                    }`}>
                      {opt.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-semibold">{opt.size}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {opt.title}
                  </h3>
                  <div className="text-xs text-slate-400 mb-3">
                    {opt.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {opt.desc}
                  </p>
                </div>

                <div>
                  <a 
                    href={opt.url}
                    download={!isExternal ? opt.filename : undefined}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => handleDownload(opt)}
                    className={`btn w-full btn-sm flex items-center justify-center gap-2 mb-3 cursor-pointer ${
                      opt.isPrimary ? 'btn-primary shadow-lg shadow-blue-500/25' : 'btn-secondary'
                    }`}
                  >
                    {isExternal ? (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        <span>{opt.type}</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download {opt.type}</span>
                      </>
                    )}
                  </a>

                  {/* Checksum Row */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                    <span className="truncate max-w-[170px]" title={opt.sha256}>
                      SHA: {opt.sha256.substring(0, 16)}...
                    </span>
                    <button 
                      onClick={() => handleCopySha(opt.sha256, opt.id)}
                      className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer pl-2 transition-colors"
                    >
                      {copiedSha === opt.id ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CLI Package Manager Terminal */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#0b101c] border border-white/10 overflow-hidden shadow-2xl mb-8">
          <div className="bg-[#080c16] px-5 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {Object.keys(CLI_COMMANDS).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveCliTab(tabKey)}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    activeCliTab === tabKey 
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                      : 'text-slate-400 hover:text-white bg-transparent'
                  }`}
                >
                  {tabKey}
                </button>
              ))}
            </div>

            {/* Copy button */}
            <button 
              onClick={handleCopyCli}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCli ? "Copied Command" : "Copy Command"}</span>
            </button>
          </div>

          <div className="p-5 font-mono text-xs text-slate-300 bg-black/40 overflow-x-auto flex items-center gap-3">
            <span className="text-blue-400 font-bold select-none">$</span>
            <span className="text-emerald-400 font-semibold">{CLI_COMMANDS[activeCliTab]?.cmd}</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs text-slate-400 font-mono">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>VirusTotal 100% Clean</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-blue-400" />
            <span>MIT Open Source</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Windows 10 & 11 (64-bit / ARM)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
