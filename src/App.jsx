import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Hero from './components/Hero';
import FeaturesBento from './components/FeaturesBento';
import InteractiveSimulator from './components/InteractiveSimulator';
import HowItWorks from './components/HowItWorks';
import DownloadMatrix from './components/DownloadMatrix';
import CompanySection from './components/CompanySection';
import Documentation from './components/Documentation';
import AboutManifesto from './components/AboutManifesto';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import Footer from './components/Footer';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-blue-500 selection:text-white relative overflow-x-hidden">

      {/* Global Command Palette (⌘K) */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Global Privacy Policy & Legal Modal */}
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Toast Notification Container */}
      <div className="toast-container" aria-live="polite">
        {toasts.map(t => {
          let icon = '⚡';
          if (t.type === 'success') icon = '✅';
          if (t.type === 'alert') icon = '🛑';
          if (t.type === 'copy') icon = '📋';

          return (
            <div key={t.id} className="toast">
              <span>{icon}</span>
              <span>{t.message}</span>
            </div>
          );
        })}
      </div>

      {/* Navigation Header */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)} 
        onToast={addToast}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onToast={addToast} />
        <FeaturesBento />
        <InteractiveSimulator onToast={addToast} />
        <HowItWorks />
        <DownloadMatrix onToast={addToast} />
        <CompanySection />
        <Documentation />
        <AboutManifesto onToast={addToast} />
      </main>

      {/* Footer */}
      <Footer onToast={addToast} onOpenPrivacy={() => setIsPrivacyOpen(true)} />

    </div>
  );
}
