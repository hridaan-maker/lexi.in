import React from 'react';
import { motion } from 'motion/react';
import {
  MousePointerClick,
  EyeOff,
  Clock,
  Sparkles,
  ArrowDown,
  AlertCircle,
} from 'lucide-react';

interface StatsSectionProps {
  onScrollToPreview?: () => void;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  onScrollToPreview,
}) => {
  const stats = [
    {
      id: 'stat-click',
      value: '0.4s',
      label: 'Average time to click "I Agree"',
      subtext: 'Subconscious tap without reading a single sentence',
      icon: MousePointerClick,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50 border-rose-200',
      valueColor: 'text-rose-600',
      borderColor: 'hover:border-rose-300',
      cardBg: 'bg-white',
    },
    {
      id: 'stat-unread',
      value: '97%',
      label: 'Never read terms before agreeing',
      subtext: 'Users aged 16–34 who accept blindly across modern apps',
      icon: EyeOff,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50 border-amber-200',
      valueColor: 'text-amber-600',
      borderColor: 'hover:border-amber-300',
      cardBg: 'bg-white',
    },
    {
      id: 'stat-timeread',
      value: '47 mins',
      label: 'To read standard platform policy',
      subtext: 'Over 8,000+ words of dense, adversarial legalese',
      icon: Clock,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50 border-indigo-200',
      valueColor: 'text-indigo-600',
      borderColor: 'hover:border-indigo-300',
      cardBg: 'bg-white',
    },
    {
      id: 'stat-lexi',
      value: '10 secs',
      label: 'To understand with Lexi',
      subtext: 'Plain-English breakdown, key risks & red flags surfaced',
      icon: Sparkles,
      iconColor: 'text-white',
      iconBg: 'bg-gradient-to-br from-[#6366F1] to-[#4F46E5] border-[#6366F1] shadow-md shadow-indigo-200',
      valueColor: 'text-[#4F46E5]',
      borderColor: 'border-[#6366F1]/50 ring-2 ring-[#6366F1]/20',
      cardBg: 'bg-gradient-to-b from-indigo-50/50 to-white',
      featured: true,
    },
  ];

  return (
    <section
      id="reality-check-section"
      className="relative py-20 md:py-28 bg-[#FAFAF9]/80 border-y border-[#E2E8F0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/80 px-4 py-1.5 text-xs font-bold text-[#6366F1] uppercase tracking-wider"
          >
            <span>The Reality of Modern Agreements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A] leading-tight"
          >
            The fine print is designed to be signed, not understood.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto"
          >
            Every day, users trade away privacy, camera rights, and intellectual property in fractions of a second. Here is the reality in numbers:
          </motion.p>
        </div>

        {/* 4 Massive Stat Cards with BIG Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl border-2 p-7 sm:p-8 flex flex-col justify-between transition-all shadow-xs hover:shadow-xl ${stat.cardBg} ${stat.borderColor}`}
              >
                {stat.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#6366F1] text-white px-3.5 py-0.5 text-[11px] font-black uppercase tracking-wider shadow-xs">
                    The Lexi Advantage
                  </div>
                )}

                <div className="space-y-6">
                  {/* BIG ICON CONTAINER */}
                  <div
                    className={`flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl border-2 ${stat.iconBg} mx-auto sm:mx-0 transition-transform group-hover:scale-105`}
                  >
                    <Icon className={`h-10 w-10 sm:h-12 sm:w-12 ${stat.iconColor} stroke-[2.2]`} />
                  </div>

                  {/* STAT NUMBER & LABEL */}
                  <div className="space-y-2 text-center sm:text-left">
                    <div
                      className={`text-4xl sm:text-5xl font-black tracking-tight ${stat.valueColor}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </div>

                {/* Subtext explanation */}
                <div className="pt-5 mt-6 border-t border-slate-100 text-xs sm:text-sm text-[#64748B] leading-relaxed text-center sm:text-left font-medium">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Link to Live Preview */}
        {onScrollToPreview && (
          <div className="text-center pt-4">
            <button
              onClick={onScrollToPreview}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#6366F1] hover:border-[#6366F1] shadow-xs transition-all"
            >
              <span>See how Lexi turns 47 minutes into 10 seconds below</span>
              <ArrowDown className="w-4 h-4 text-[#6366F1]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
