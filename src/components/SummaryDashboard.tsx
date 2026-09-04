import React from 'react';
import {
  DocumentAnalysisResult,
  ConcernLevel,
  ClauseCategory,
} from '../types';
import { getCategoryIcon } from './ClauseCard';
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  FileSearch,
  Filter,
  Layers,
} from 'lucide-react';

interface SummaryDashboardProps {
  result: DocumentAnalysisResult;
  selectedFilter: 'All' | ConcernLevel;
  setSelectedFilter: (filter: 'All' | ConcernLevel) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const SummaryDashboard: React.FC<SummaryDashboardProps> = ({
  result,
  selectedFilter,
  setSelectedFilter,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { summary, documentTitle, documentType, analysisDate } = result;

  const categories = Array.from(
    new Set(result.clauses.map((c) => c.category))
  );

  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)] space-y-7">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3 py-0.5 text-xs font-semibold text-[#6366F1] uppercase tracking-wide">
              {documentType}
            </span>
            <span className="text-xs text-[#64748B] font-medium">
              {analysisDate}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
            {documentTitle || 'Lexi Summary Dashboard'}
          </h2>
        </div>

        {/* Score pill counts */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-[#0F172A]">
            <Layers className="w-3.5 h-3.5 text-[#64748B]" />
            <span>{summary.totalClauses} sections analyzed</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-rose-50 px-3.5 py-1.5 text-xs font-semibold text-rose-700 border border-rose-200">
            <span>🔴 {summary.highConcernCount} High Attention</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-700 border border-amber-200">
            <span>🟡 {summary.reviewConcernCount} Review</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
            <span>🟢 {summary.lowConcernCount} Low</span>
          </div>
        </div>
      </div>

      {/* Overall Takeaway & Key Risks Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 rounded-2xl bg-[#EEF2FF] border border-[#6366F1]/20 p-5 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#6366F1] flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-[#6366F1]" />
            <span>EXECUTIVE TAKEAWAY</span>
          </div>
          <p className="text-sm font-medium text-[#0F172A] leading-relaxed">
            {summary.overallTakeaway}
          </p>
        </div>

        <div className="lg:col-span-5 rounded-2xl bg-[#FAFAF9] border border-[#E2E8F0] p-5 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#64748B]">
            KEY OBSERVATIONS
          </div>
          <ul className="space-y-1.5 text-xs text-[#64748B]">
            {summary.keyRisks && summary.keyRisks.length > 0 ? (
              summary.keyRisks.map((risk, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#6366F1] font-bold shrink-0">•</span>
                  <span>{risk}</span>
                </li>
              ))
            ) : (
              <li className="text-[#64748B] italic">
                Standard terms observed; review individual clauses for specific provisions.
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Category Cards Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#64748B]">
            CATEGORY BREAKDOWN
          </span>
          <span className="text-xs text-[#64748B]">
            Click a category to focus on its clauses
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {summary.categorySummaries && summary.categorySummaries.length > 0 ? (
            summary.categorySummaries.map((cat, idx) => {
              const icon = getCategoryIcon(cat.category);
              const isSelected = selectedCategory === cat.category;
              const statusColor =
                cat.status === 'High Attention'
                  ? 'border-rose-200 bg-rose-50/40 text-rose-800'
                  : cat.status === 'Review'
                  ? 'border-amber-200 bg-amber-50/40 text-amber-800'
                  : 'border-emerald-200 bg-emerald-50/40 text-emerald-800';

              return (
                <button
                  key={idx}
                  onClick={() =>
                    setSelectedCategory(isSelected ? 'All' : cat.category)
                  }
                  className={`flex flex-col justify-between text-left p-4 rounded-2xl border transition-all ${statusColor} ${
                    isSelected ? 'ring-2 ring-[#6366F1] shadow-xs' : 'hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0F172A]">
                      <span>{icon}</span>
                      <span>{cat.category}</span>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/90 border border-black/5 shadow-2xs">
                      {cat.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-snug line-clamp-2">
                    {cat.note}
                  </p>
                </button>
              );
            })
          ) : (
            <p className="text-xs text-[#64748B]">No categories recorded.</p>
          )}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="pt-2 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-[#64748B]" />
          <span className="font-semibold text-[#0F172A]">Filter by Concern:</span>
          {(['All', 'High Attention', 'Review', 'Low'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedFilter(lvl)}
              className={`px-3 py-1 rounded-full font-medium transition-all ${
                selectedFilter === lvl
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-slate-100 text-[#64748B] hover:bg-slate-200'
              }`}
            >
              {lvl === 'All' ? 'All Clauses' : lvl}
            </button>
          ))}
        </div>

        {selectedCategory !== 'All' && (
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-[#6366F1] font-semibold hover:underline"
          >
            Clear category filter ({selectedCategory}) ×
          </button>
        )}
      </div>
    </div>
  );
};
