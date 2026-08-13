import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQS } from '../data/releaseData';

export default function Documentation() {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Privacy', 'Performance', 'Features', 'Installation'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="section-padding bg-[#070a12] border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge">Knowledge Base</div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about privacy, system performance, and focus rules.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0b101c] rounded-xl border border-white/10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            <input 
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#0b101c] border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 app-card">
              No questions found matching your filter.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="app-card overflow-hidden border border-white/10"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-blue-400 uppercase">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-blue-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
