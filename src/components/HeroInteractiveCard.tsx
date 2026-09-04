import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  RotateCw,
  Zap,
  Info,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface PreviewClause {
  id: string;
  category: string;
  label: string;
  icon: string;
  originalText: string;
  sneakyTerms: { term: string; meaning: string }[];
  lexiPlain: string;
  riskLevel: string;
  riskColor: string;
  whyItMatters: string;
  questionToAsk: string;
}

const PREVIEW_CLAUSES: PreviewClause[] = [
  {
    id: 'privacy',
    category: 'Privacy & Data',
    label: 'Location & Ad Tracking',
    icon: '📍',
    originalText:
      'The Company may collect, license, profile and disclose personal telemetry, persistent hardware coordinates, and behavioral identifiers to commercial advertising consortia without further explicit notification.',
    sneakyTerms: [
      { term: 'persistent hardware coordinates', meaning: 'Your exact GPS location at all hours, even when the app is closed' },
      { term: 'advertising consortia', meaning: 'Third-party data broker companies that trade consumer dossiers' },
      { term: 'without further explicit notification', meaning: 'They will never ask for your permission again' },
    ],
    lexiPlain:
      'The app tracks your exact GPS location 24/7 and sells your movements to commercial advertising brokers to build a marketing profile on you.',
    riskLevel: 'High Attention ⚠️',
    riskColor: 'text-amber-700 bg-amber-50 border-amber-200',
    whyItMatters: 'You lose control over who knows where you live, study, and hang out.',
    questionToAsk: 'Can I disable background location sharing in settings?',
  },
  {
    id: 'creator',
    category: 'Content Ownership',
    label: 'Photo & Face Rights',
    icon: '📸',
    originalText:
      'Creator hereby grants Company an irrevocable, perpetual, royalty-free, worldwide license to exploit, simulate, alter, and create derivative works from submitted likeness, vocal timbre, and biometric metadata.',
    sneakyTerms: [
      { term: 'perpetual', meaning: 'Forever — even 20, 30, or 50 years from today' },
      { term: 'royalty-free', meaning: 'They will never pay you another dollar, even if they make millions' },
      { term: 'vocal timbre & biometric metadata', meaning: 'Training AI voice clones and facial avatars using your recordings' },
    ],
    lexiPlain:
      'The company gets permanent ownership of your voice and face to train AI models or create commercial ads forever without paying you.',
    riskLevel: 'Severe Risk 🚩',
    riskColor: 'text-rose-700 bg-rose-50 border-rose-200',
    whyItMatters: 'Even if you leave the platform, your face and voice can be used in their promotional campaigns.',
    questionToAsk: 'Can we limit license duration to 1 year and prohibit AI generation?',
  },
  {
    id: 'exclusivity',
    category: 'Sponsorships',
    label: '12-Month Lockout',
    icon: '💰',
    originalText:
      'Creator shall not endorse, display, review, or collaborate with any entity categorized within the broader lifestyle, tech, or creator ecosystem for a period of three hundred and sixty-five (365) days post-campaign.',
    sneakyTerms: [
      { term: 'broader lifestyle, tech, or creator ecosystem', meaning: 'Virtually any consumer company or brand' },
      { term: '365 days post-campaign', meaning: 'A full year after the sponsored video is delivered' },
    ],
    lexiPlain:
      'For one single sponsorship payment, you are legally barred from taking any other tech or lifestyle brand deals for an entire year.',
    riskLevel: 'Critical Lockout 🚫',
    riskColor: 'text-rose-700 bg-rose-50 border-rose-200',
    whyItMatters: 'It destroys your earning potential with other sponsors during your peak growth months.',
    questionToAsk: 'Can exclusivity be restricted only to direct category competitors for 30 days?',
  },
];

export const HeroInteractiveCard: React.FC = () => {
  const [activeClauseId, setActiveClauseId] = useState<string>('privacy');
  const [isDecoded, setIsDecoded] = useState<boolean>(true);
  const [inspectedTerm, setInspectedTerm] = useState<{ term: string; meaning: string } | null>(null);
  const [isDecodingAnim, setIsDecodingAnim] = useState<boolean>(false);

  const current = PREVIEW_CLAUSES.find((c) => c.id === activeClauseId) || PREVIEW_CLAUSES[0];

  const handleToggleDecode = () => {
    if (!isDecoded) {
      setIsDecodingAnim(true);
      setTimeout(() => {
        setIsDecoded(true);
        setIsDecodingAnim(false);
      }, 350);
    } else {
      setIsDecoded(false);
      setInspectedTerm(null);
    }
  };

  const handleSelectClause = (id: string) => {
    setActiveClauseId(id);
    setInspectedTerm(null);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      <div className="relative rounded-[24px] border-2 border-[#6366F1]/25 bg-white p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all">
        {/* Interactive Clause Tabs: Encourages users to tap */}
        <div className="space-y-3 pb-5 border-b border-[#E2E8F0]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#6366F1] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
                Tap a Clause to Test
              </span>
            </div>
            <span className="text-[11px] text-[#64748B] font-medium hidden sm:inline">
              3 real everyday traps
            </span>
          </div>

          {/* Clause Selector Buttons */}
          <div className="grid grid-cols-3 gap-2">
            {PREVIEW_CLAUSES.map((clause) => {
              const isSelected = clause.id === activeClauseId;
              return (
                <button
                  key={clause.id}
                  onClick={() => handleSelectClause(clause.id)}
                  className={`py-2 px-2 sm:px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-center ${
                    isSelected
                      ? 'bg-[#0F172A] text-white shadow-sm scale-[1.02]'
                      : 'bg-slate-100 text-[#64748B] hover:bg-slate-200 hover:text-[#0F172A]'
                  }`}
                >
                  <span className="text-sm">{clause.icon}</span>
                  <span className="truncate">{clause.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Big Interactive "Tap to See Lexi in Action" Trigger */}
        <div className="pt-5 pb-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left w-full sm:w-auto">
            <span className="text-xs uppercase font-bold tracking-wider text-[#64748B]">
              Current Mode:{' '}
            </span>
            <span className="text-xs font-bold text-[#0F172A]">
              {isDecoded ? 'Lexi Plain English Translation' : 'Dense Legal Contract'}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleToggleDecode}
            id="tap-lexi-action-btn"
            className={`w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
              !isDecoded
                ? 'bg-[#6366F1] text-white hover:bg-[#4F46E5] ring-4 ring-[#6366F1]/20 animate-pulse'
                : 'bg-slate-100 text-[#0F172A] hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isDecoded ? 'Tap to view original contract' : '👉 Tap to See Lexi in Action'}</span>
          </motion.button>
        </div>

        {/* Dynamic Display Area */}
        <div className="relative min-h-[190px] flex flex-col justify-center">
          {/* Scanning Beam animation during decode */}
          {isDecodingAnim && (
            <motion.div
              initial={{ top: '0%' }}
              animate={{ top: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6366F1] to-transparent z-20 pointer-events-none"
            />
          )}

          <AnimatePresence mode="wait">
            {!isDecoded ? (
              /* Original Legalese View */
              <motion.div
                key="original"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-slate-700 space-y-3">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                    <span>Verbatim Legal Clause</span>
                    <span className="text-amber-600 font-sans">Contains hidden traps</span>
                  </div>
                  <p className="text-xs sm:text-[13px] font-mono leading-relaxed text-slate-800">
                    "{current.originalText}"
                  </p>
                </div>

                {/* Sneaky terms touch inspection */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Tap Sneaky Terms to Inspect Meaning:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {current.sneakyTerms.map((st, i) => (
                      <button
                        key={i}
                        onClick={() => setInspectedTerm(inspectedTerm?.term === st.term ? null : st)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all text-left ${
                          inspectedTerm?.term === st.term
                            ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-[#6366F1]'
                        }`}
                      >
                        🔍 "{st.term}"
                      </button>
                    ))}
                  </div>

                  {/* Inspected popup info */}
                  {inspectedTerm && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2"
                    >
                      <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">"{inspectedTerm.term}": </span>
                        <span>{inspectedTerm.meaning}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Lexi Plain English View */
              <motion.div
                key="lexi"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Risk Level Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#6366F1] text-white text-[10px] font-black">
                      LX
                    </div>
                    <span className="text-xs font-black tracking-wide text-[#0F172A] uppercase">
                      Plain English Breakdown
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${current.riskColor}`}
                  >
                    {current.riskLevel}
                  </span>
                </div>

                {/* Highlighted Plain Translation Box */}
                <div className="p-5 bg-[#EEF2FF] rounded-2xl border-2 border-[#6366F1]/30 text-[#0F172A]">
                  <p className="text-base sm:text-lg font-bold leading-snug">
                    "{current.lexiPlain}"
                  </p>
                </div>

                {/* Why It Matters & Questions to ask */}
                <div className="space-y-2 text-xs text-[#64748B]">
                  <div className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-[#0F172A]">Why it matters: </strong>
                      {current.whyItMatters}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-[#6366F1]">
                    <span className="font-bold text-sm">💡</span>
                    <p>
                      <strong className="text-[#0F172A]">What to ask before signing: </strong>
                      <span className="italic">"{current.questionToAsk}"</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer touch guidance */}
        <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#64748B]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant clause breakdown • Zero legal fees</span>
          </span>
          <button
            onClick={handleToggleDecode}
            className="font-semibold text-[#6366F1] hover:text-[#4F46E5] flex items-center gap-1"
          >
            <RotateCw className="w-3 h-3" />
            <span>Tap to flip between versions</span>
          </button>
        </div>
      </div>
    </div>
  );
};
