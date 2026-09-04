import React, { useState } from 'react';
import {
  AnalyzedClause,
  ConcernLevel,
  ClauseCategory,
} from '../types';
import {
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Copy,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Share2,
} from 'lucide-react';

interface ClauseCardProps {
  clause: AnalyzedClause;
  index: number;
}

export const getCategoryIcon = (category: ClauseCategory | string) => {
  switch (category) {
    case 'Privacy':
      return '🔐';
    case 'Data Security':
      return '🛡️';
    case 'Content Rights':
      return '📸';
    case 'Intellectual Property':
      return '©️';
    case 'Money':
      return '💰';
    case 'Renewal':
      return '🔄';
    case 'Cancellation':
      return '🚪';
    case 'Liability':
      return '⚖️';
    case 'Digital Rights':
      return '🧑💻';
    case 'Advertising':
      return '📢';
    default:
      return '📄';
  }
};

export const getConcernBadge = (level: ConcernLevel | string) => {
  switch (level) {
    case 'High Attention':
      return {
        label: '🔴 High Attention',
        classes: 'bg-rose-50 text-rose-700 border-rose-200 ring-rose-500/10',
        bgPill: 'bg-rose-500',
      };
    case 'Review':
      return {
        label: '🟡 Review',
        classes: 'bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/10',
        bgPill: 'bg-amber-500',
      };
    case 'Low':
    default:
      return {
        label: '🟢 Low Concern',
        classes: 'bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/10',
        bgPill: 'bg-emerald-500',
      };
  }
};

export const ClauseCard: React.FC<ClauseCardProps> = ({ clause, index }) => {
  const [isOriginalExpanded, setIsOriginalExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const badge = getConcernBadge(clause.concernLevel);
  const icon = getCategoryIcon(clause.category);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Clause ${index + 1}: ${clause.simpleLanguage}\nWhy it matters: ${clause.whyItMatters}\nQuestions to ask: ${clause.questionsToAsk.join('; ')}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      id={`clause-card-${clause.id || index}`}
      className="group relative rounded-[20px] border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:border-[#6366F1]/40 transition-all space-y-5"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-[#0F172A]">
            #{index + 1}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#0F172A]">
            <span>{icon}</span>
            <span>{clause.category}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border ${badge.classes}`}
          >
            {badge.label}
          </span>
        </div>
      </div>

      {/* In Simple Language (Highlighted Teen Translation) */}
      <div className="rounded-2xl bg-[#EEF2FF] border border-[#6366F1]/20 p-4 sm:p-5 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[1px] text-[#6366F1]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
            <span>IN SIMPLE LANGUAGE</span>
          </div>
          <span className="text-[11px] text-[#6366F1]/70 font-normal lowercase">human language</span>
        </div>
        <p className="text-base font-medium text-[#0F172A] leading-relaxed">
          {clause.simpleLanguage}
        </p>
      </div>

      {/* Why It Matters */}
      <div className="space-y-1.5 text-xs sm:text-sm">
        <div className="font-bold text-[#0F172A] uppercase tracking-wider text-xs flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-[#6366F1]" />
          <span>WHY IT MATTERS</span>
        </div>
        <p className="text-[#64748B] leading-relaxed pl-5">
          {clause.whyItMatters}
        </p>
      </div>

      {/* Questions To Ask */}
      {clause.questionsToAsk && clause.questionsToAsk.length > 0 && (
        <div className="space-y-2 rounded-xl bg-[#FAFAF9] border border-[#E2E8F0] p-4 text-xs">
          <div className="font-bold text-[#0F172A] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#6366F1]" />
            <span>QUESTIONS TO ASK BEFORE ACCEPTING</span>
          </div>
          <ul className="space-y-1.5 pl-1">
            {clause.questionsToAsk.map((q, qIdx) => (
              <li key={qIdx} className="flex items-start gap-2 text-[#0F172A]">
                <span className="text-[#6366F1] font-bold">•</span>
                <span className="font-medium italic">"{q}"</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Original Fine Print Accordion */}
      <div className="pt-2 border-t border-[#E2E8F0]">
        <button
          onClick={() => setIsOriginalExpanded(!isOriginalExpanded)}
          className="w-full flex items-center justify-between py-1 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors"
        >
          <span className="uppercase tracking-wider">
            {isOriginalExpanded ? 'Hide Original Clause Text' : 'View Original Clause Text'}
          </span>
          {isOriginalExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {isOriginalExpanded && (
          <div className="mt-2.5 rounded-xl bg-[#FAFAF9] p-3.5 font-mono text-xs text-[#64748B] leading-relaxed border border-slate-200/80 animate-in fade-in duration-200 select-all">
            "{clause.original}"
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="flex items-center justify-between text-xs text-[#64748B] pt-1">
        <span className="italic">
          Educational breakdown • Not legal advice
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-medium transition-colors"
        >
          <Copy className="w-3 h-3" />
          <span>{copied ? 'Copied translation' : 'Copy'}</span>
        </button>
      </div>
    </article>
  );
};
