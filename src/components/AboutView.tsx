import React from 'react';
import { INDIA_FOCUS_DATA } from '../data/lexiData';
import { ShieldCheck, Heart, Sparkles, Globe2, BookOpen, AlertCircle } from 'lucide-react';
import { DisclaimerBanner } from './DisclaimerBanner';

export const AboutView: React.FC = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3 py-1 text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#6366F1]" />
            <span>Our Mission</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
            Why Lexi Exists
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Young people interact with legal and digital agreements every day, but legal language can be difficult to understand. Lexi was created to make that information easier to understand.
          </p>
        </div>

        {/* Disclaimer Card */}
        <DisclaimerBanner />

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] font-bold text-sm">
              01
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">Human Language First</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              No Latin phrases, no 100-word run-on sentences. We believe transparency requires plain words that any 14-year-old can comfortably read and question.
            </p>
          </div>

          <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] font-bold text-sm">
              02
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">Empowerment, Not Fear</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              We never tell teens to abandon digital tools. Instead, we highlight where leverage is being given away so they can ask the right questions.
            </p>
          </div>

          <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] font-bold text-sm">
              03
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">Creator First</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Teenage creators produce tremendous cultural and economic value. They deserve the same clarity and protection as established commercial agencies.
            </p>
          </div>
        </div>

        {/* India Legal Context Section */}
        <div className="rounded-[28px] border-2 border-orange-200/80 bg-white p-6 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-orange-100">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 border border-orange-200 shrink-0">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-0.5 text-xs font-bold text-orange-800 uppercase tracking-wider mb-1">
                  <span>{INDIA_FOCUS_DATA.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                  {INDIA_FOCUS_DATA.title}
                </h3>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200 self-start sm:self-auto">
              Indian Legal Safeguards
            </span>
          </div>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium">
            {INDIA_FOCUS_DATA.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {INDIA_FOCUS_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#FAFAF9] border-2 border-[#E2E8F0] p-6 space-y-4 flex flex-col justify-between hover:border-orange-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-extrabold text-[#4F46E5] bg-[#EEF2FF] px-3 py-1 rounded-full border border-indigo-100">
                      {pillar.category}
                    </span>
                    <span className="text-xs text-[#475569] font-bold">
                      {pillar.status}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-[#0F172A] text-lg sm:text-xl leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                    {pillar.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E2E8F0] text-sm text-[#312E81] bg-indigo-50/70 p-3 rounded-xl border border-indigo-100/80 font-medium">
                  💡 <strong>Lexi Safeguard:</strong> {pillar.note}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-orange-50 border-2 border-orange-200 p-5 sm:p-6 text-sm sm:text-base text-orange-950 flex items-start gap-3.5">
            <AlertCircle className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-extrabold text-base sm:text-lg text-orange-900">
                Official Indian Cyber Safety Helplines
              </div>
              <p className="leading-relaxed">
                National Cyber Crime Reporting Helpline: <strong className="text-orange-900 underline text-lg">1930</strong> (Toll-Free) | Official Web Portal:{' '}
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-orange-900 hover:text-orange-950"
                >
                  cybercrime.gov.in
                </a>
                . Young citizens and guardians can lodge reports immediately for cyber harassment, identity theft, or deceptive contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
