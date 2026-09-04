import React from 'react';
import {
  Sparkles,
  AlertCircle,
  HelpCircle,
  FileSearch,
  CheckCircle2,
  Copy,
  ExternalLink,
} from 'lucide-react';

interface DemoClauseCardProps {
  onLoadIntoAnalyzer: () => void;
}

export const DemoClauseCard: React.FC<DemoClauseCardProps> = ({ onLoadIntoAnalyzer }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'The company may be able to use, change and share your content around the world without paying you, potentially for a very long time.'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-20 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3 py-1 text-xs font-semibold text-[#6366F1] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
                <span>Interactive Showcase</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                Try a Demo: The Perpetual License Trap
              </h2>
              <p className="text-sm text-[#64748B] mt-1">
                See how Lexi dissects a common aggressive clause in teen influencer contracts.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#64748B]">
                Fictional Example
              </span>
              <button
                id="demo-load-analyzer-btn"
                onClick={onLoadIntoAnalyzer}
                className="inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#4F46E5] active:scale-[0.98] transition-all"
              >
                <FileSearch className="w-4 h-4" />
                <span>Open in Analyzer →</span>
              </button>
            </div>
          </div>

          {/* Demonstration Body */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Original Legalese */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-[#FAFAF9] p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#64748B]">
                    ORIGINAL CONTRACT CLAUSE
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">Section 4.1</span>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#E2E8F0] font-mono text-xs leading-relaxed text-[#0F172A] shadow-xs">
                  "The Company shall have a perpetual, worldwide, royalty-free license to use, reproduce, modify and distribute Content submitted by the Creator."
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Sounds formal and routine, but notice the words: <strong className="text-[#0F172A]">"perpetual"</strong> (forever), <strong className="text-[#0F172A]">"worldwide"</strong> (everywhere), and <strong className="text-[#0F172A]">"royalty-free"</strong> (no extra pay).
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs text-[#64748B] italic">
                *Clearly stated: This is a fictional educational example.
              </div>
            </div>

            {/* Right: Lexi Breakdown */}
            <div className="lg:col-span-7 rounded-2xl border border-[#6366F1]/30 bg-white p-6 sm:p-7 shadow-sm space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3 py-1 text-xs font-semibold text-[#6366F1]">
                    📸 Category: Content Rights
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 border border-rose-200 shadow-xs">
                    🔴 Potential concern: High Attention
                  </span>
                </div>
              </div>

              {/* In Simple Language */}
              <div className="rounded-xl bg-[#EEF2FF] border border-[#6366F1]/20 p-4 space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#6366F1]">
                  IN SIMPLE LANGUAGE
                </div>
                <p className="text-base font-medium text-[#0F172A] leading-snug">
                  The company may be able to use, change and share your content around the world without paying you, potentially for a very long time.
                </p>
              </div>

              {/* Why It Matters */}
              <div className="space-y-1.5 text-xs sm:text-sm text-[#64748B]">
                <div className="font-bold text-[#0F172A] uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500" />
                  <span>WHY IT MATTERS</span>
                </div>
                <p className="leading-relaxed pl-5">
                  Even if your brand deal was only for $100, they could keep broadcasting your face, voice, and videos in commercial ads 5 years from now, long after you’ve outgrown that style or joined college.
                </p>
              </div>

              {/* Questions To Ask */}
              <div className="space-y-2.5 pt-2 border-t border-[#E2E8F0]">
                <div className="font-bold text-[#0F172A] uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#6366F1]" />
                  <span>QUESTIONS TO ASK</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="rounded-xl bg-[#FAFAF9] border border-[#E2E8F0] p-3 text-xs font-medium text-[#0F172A]">
                    <span className="text-[#6366F1] font-bold block mb-1">Q1</span>
                    "How long can you use my content?"
                  </div>
                  <div className="rounded-xl bg-[#FAFAF9] border border-[#E2E8F0] p-3 text-xs font-medium text-[#0F172A]">
                    <span className="text-[#6366F1] font-bold block mb-1">Q2</span>
                    "Can you modify my content or alter my face?"
                  </div>
                  <div className="rounded-xl bg-[#FAFAF9] border border-[#E2E8F0] p-3 text-xs font-medium text-[#0F172A]">
                    <span className="text-[#6366F1] font-bold block mb-1">Q3</span>
                    "Can I withdraw permission later?"
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 text-xs">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied explanation!' : 'Copy translation'}</span>
                </button>

                <button
                  onClick={onLoadIntoAnalyzer}
                  className="inline-flex items-center gap-1 text-[#6366F1] hover:text-[#4F46E5] font-semibold transition-colors"
                >
                  <span>Load complete 5-clause agreement</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
