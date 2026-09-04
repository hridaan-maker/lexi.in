import React from 'react';
import {
  FileText,
  AlertTriangle,
  Lightbulb,
  Smartphone,
  Share2,
  Video,
  Instagram,
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ProblemSectionProps {
  onExploreDemo: () => void;
  onGoToLearn: () => void;
  onGoToAnalyze: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  onExploreDemo,
  onGoToLearn,
  onGoToAnalyze,
}) => {
  const touchpoints = [
    { label: 'Social media', icon: Share2 },
    { label: 'Apps & games', icon: Smartphone },
    { label: 'Privacy policies', icon: FileText },
    { label: 'Terms & Conditions', icon: FileText },
    { label: 'Brand collaborations', icon: ShoppingBag },
    { label: 'Sponsorships', icon: Sparkles },
    { label: 'Creator contracts', icon: Video },
    { label: 'Online services', icon: Smartphone },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white/75 backdrop-blur-xs border-y border-[#E2E8F0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3.5 py-1 text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
            How Lexi Helps
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Fine print made simple in three steps
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Most people scroll past dense legalese and tap "Agree" in two seconds. Lexi gives you leverage with clarity.
          </p>
        </div>

        {/* Three Core Cards: Understand, Spot, Know */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Understand */}
          <div className="group relative flex flex-col justify-between rounded-[20px] border border-[#E2E8F0] bg-[#FAFAF9] p-7 hover:border-[#6366F1] hover:bg-white transition-all">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">
                <FileText className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  1. Understand
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Plain-language translations for convoluted legal phrases like indemnities, waivers, and arbitration clauses.
                </p>
              </div>
              <div className="text-xs text-[#64748B] pt-2 border-t border-[#E2E8F0]">
                <span className="font-semibold text-[#0F172A] block mb-1">Example:</span>
                <p className="italic text-slate-500 mb-1.5">"Indemnify and hold harmless..."</p>
                <p className="text-[#6366F1] font-medium">→ "You promise to pay the company's legal costs if someone sues over your post."</p>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={onGoToAnalyze}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6366F1] hover:text-[#4F46E5] transition-colors"
              >
                <span>Translate a document</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Spot */}
          <div className="group relative flex flex-col justify-between rounded-[20px] border border-[#E2E8F0] bg-[#FAFAF9] p-7 hover:border-[#6366F1] hover:bg-white transition-all">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-200/50">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  2. Spot
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Automatically surface clauses that deserve immediate attention, ranked by severity level so you spot red flags first.
                </p>
              </div>
              <div className="text-xs text-[#64748B] pt-2 border-t border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#0F172A]">🟢 Standard Terms</span>
                  <span className="text-[11px] text-slate-400">Normal operations</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-amber-700">🟡 Review Needed</span>
                  <span className="text-[11px] text-slate-400">Data sharing & fees</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-rose-700">🔴 High Concern</span>
                  <span className="text-[11px] text-slate-400">Perpetual IP rights</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={onExploreDemo}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors"
              >
                <span>See sample red flags</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Know */}
          <div className="group relative flex flex-col justify-between rounded-[20px] border border-[#E2E8F0] bg-[#FAFAF9] p-7 hover:border-[#6366F1] hover:bg-white transition-all">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/50">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  3. Know
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Gain practical digital literacy about intellectual property, online privacy, cybersecurity, and Indian legal safeguards.
                </p>
              </div>
              <div className="text-xs text-[#64748B] pt-2 border-t border-[#E2E8F0] space-y-1">
                <p>• IP ownership & brand deal safeguards</p>
                <p>• DPDP Act youth protections in India</p>
                <p>• Questions to negotiate before signing</p>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={onGoToLearn}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                <span>Browse Lexi Learn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
