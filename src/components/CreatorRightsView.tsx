import React, { useState } from 'react';
import { CREATOR_RIGHTS_ITEMS } from '../data/lexiData';
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Clock,
  Video,
  DollarSign,
  Copyright,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

interface CreatorRightsViewProps {
  onOpenAnalyzer: () => void;
}

export const CreatorRightsView: React.FC<CreatorRightsViewProps> = ({ onOpenAnalyzer }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'available' | 'coming-soon' | 'ip'>('all');

  const ipTopics = [
    {
      title: 'Copyright in Social Media Content',
      category: 'Ownership',
      summary:
        'You automatically own the copyright to your original videos, audio commentary, and animations the moment they are recorded. Platforms get a license to host them, but you own the creation.',
      rules: [
        'Never sign "Work Made for Hire" clauses unless you are a full-time salaried employee.',
        'Platform terms do not grant random users permission to repost your content to other apps.',
      ],
      status: 'Live Guide',
    },
    {
      title: 'Trademarks & Channel Branding',
      category: 'Brand Identity',
      summary:
        'Trademarks protect your creator handle, logo, avatar design, and podcast titles from being hijacked by copycats or commercial merch sellers.',
      rules: [
        'Check existing trademark registries before spending money printing hoodies or stickers.',
        'Keep original layered design files with creation timestamps to prove prior use.',
      ],
      status: 'Live Guide',
    },
    {
      title: 'Licensing vs. Full Assignment',
      category: 'Deal Terms',
      summary:
        'Licensing means "You can rent my video for 60 days on Instagram." Assignment means "You own my video forever and I can never use it again."',
      rules: [
        'Always default to non-exclusive, limited-duration commercial licenses.',
        'Charge separate rates for organic posts vs. whitelisted paid ad usage.',
      ],
      status: 'Live Guide',
    },
    {
      title: 'AI Audio & Sample Clearance Engine',
      category: 'Advanced Tooling',
      summary:
        'Automated detection of background music copyright, fair use risk estimation, and synthetic voice recreation protections for video editors.',
      rules: [],
      status: 'Coming Soon',
    },
    {
      title: 'Fair Use Defense Analyzer',
      category: 'Defense',
      summary:
        'A multi-factor scoring rubric checking commentary, transformative purpose, and market impact to evaluate risk before posting reaction videos.',
      rules: [],
      status: 'Coming Soon',
    },
  ];

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3 py-1 text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
            <span>Teen Creator Hub</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
            Creator Rights & IP Protection
          </h1>
          <p className="text-base sm:text-lg text-[#64748B]">
            Built specifically for teen influencers, streamers, artists, and student creators. Don't sign away your creative future for a $200 hoodie.
          </p>
        </div>

        {/* Quick CTA Card */}
        <div className="rounded-[20px] border border-[#6366F1]/20 bg-[#EEF2FF] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-lg text-[#0F172A]">Got an active sponsor email or PDF?</h3>
            <p className="text-xs text-[#64748B]">
              Paste the agreement text into Lexi to catch perpetual licenses, moral rights waivers, and 90-day pay delays.
            </p>
          </div>
          <button
            onClick={onOpenAnalyzer}
            className="shrink-0 rounded-full bg-[#6366F1] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#4F46E5] transition-all active:scale-[0.98]"
          >
            Scan Contract Now →
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E2E8F0] pb-3 text-xs font-medium">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'all'
                ? 'bg-[#0F172A] text-white'
                : 'text-[#64748B] hover:bg-slate-100'
            }`}
          >
            All Creator Topics
          </button>
          <button
            onClick={() => setActiveTab('available')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'available'
                ? 'bg-[#0F172A] text-white'
                : 'text-[#64748B] hover:bg-slate-100'
            }`}
          >
            Deal Guides & Red Flags
          </button>
          <button
            onClick={() => setActiveTab('ip')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'ip'
                ? 'bg-[#0F172A] text-white'
                : 'text-[#64748B] hover:bg-slate-100'
            }`}
          >
            IP & Copyright Rights
          </button>
          <button
            onClick={() => setActiveTab('coming-soon')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'coming-soon'
                ? 'bg-[#0F172A] text-white'
                : 'text-[#64748B] hover:bg-slate-100'
            }`}
          >
            Coming Soon Tools
          </button>
        </div>

        {/* IP Section when selected or in all */}
        {(activeTab === 'all' || activeTab === 'ip') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Copyright className="w-5 h-5 text-[#6366F1]" />
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Intellectual Property (IP) Rights
                </h3>
              </div>
              <span className="text-xs text-[#64748B]">
                Copyright • Trademarks • Content Reuse
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ipTopics.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[20px] border border-[#E2E8F0] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                        {item.category}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                          item.status === 'Coming Soon'
                            ? 'bg-purple-50 text-purple-700 border-purple-200'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#0F172A]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {item.rules.length > 0 && (
                    <ul className="pt-2 border-t border-[#E2E8F0] space-y-1 text-xs text-[#64748B]">
                      {item.rules.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <span className="text-[#6366F1] font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Creator Rights Items (Deals, Exclusivity, Likeness, Net Pay) */}
        {(activeTab === 'all' || activeTab === 'available' || activeTab === 'coming-soon') && (
          <div className="space-y-5 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#0F172A]">
                Creator Contract Essentials
              </h3>
              <span className="text-xs text-[#64748B]">
                Common traps & protective clauses
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {CREATOR_RIGHTS_ITEMS.filter((item) => {
                if (activeTab === 'available') return item.status === 'Available';
                if (activeTab === 'coming-soon') return item.status === 'Coming Soon';
                return true;
              }).map((item) => (
                <div
                  key={item.id}
                  className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                        {item.title}
                      </h4>
                    </div>

                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        item.status === 'Coming Soon'
                          ? 'bg-purple-50 text-purple-700 border-purple-200'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Red Flags & Tips if available */}
                  {item.status === 'Available' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#E2E8F0] text-xs">
                      {/* Red Flags */}
                      <div className="rounded-xl bg-rose-50/60 border border-rose-100 p-3.5 space-y-1.5">
                        <div className="font-bold text-rose-800 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                          <span>Red Flags to Watch Out For:</span>
                        </div>
                        <ul className="space-y-1 text-rose-900">
                          {item.redFlags.map((rf, rfIdx) => (
                            <li key={rfIdx} className="italic">
                              • {rf}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Creator Tips */}
                      <div className="rounded-xl bg-[#EEF2FF] border border-[#6366F1]/20 p-3.5 space-y-1.5">
                        <div className="font-bold text-[#6366F1] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6366F1]" />
                          <span>Smart Counter-Strategy:</span>
                        </div>
                        <ul className="space-y-1 text-[#0F172A]">
                          {item.creatorTips.map((tip, tIdx) => (
                            <li key={tIdx}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
