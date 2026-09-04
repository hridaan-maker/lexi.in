import React from 'react';
import { motion } from 'motion/react';
import { LEARN_MODULES, INDIA_FOCUS_DATA } from '../data/lexiData';
import {
  BookOpen,
  Clock,
  ArrowRight,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface CrashCoursesSectionProps {
  onSelectCourse: (courseId: string) => void;
  onExploreAll: () => void;
}

export const CrashCoursesSection: React.FC<CrashCoursesSectionProps> = ({
  onSelectCourse,
  onExploreAll,
}) => {
  return (
    <section id="crash-courses-section" className="py-16 md:py-24 bg-white border-y border-[#E2E8F0] relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3.5 py-1 text-xs font-bold text-[#6366F1] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#6366F1]" />
              <span>Lexi Academy • Zero Jargon</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A]">
              Crash Courses in Digital Law
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Bite-sized, zero-jargon guides using real-world scenarios rather than confusing legal statutes. Master your rights in under 5 minutes.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="self-start md:self-auto inline-flex items-center gap-2 rounded-full border-2 border-[#6366F1] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-all shadow-xs group"
          >
            <span>Browse All Courses</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARN_MODULES.map((mod, idx) => (
            <motion.div
              key={mod.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectCourse(mod.id)}
              className="group cursor-pointer rounded-2xl border-2 border-[#E2E8F0] bg-[#FAFBFD] p-6 shadow-xs hover:shadow-md hover:border-[#6366F1]/60 hover:bg-white transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#6366F1] bg-[#EEF2FF] px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3 text-[#6366F1]" />
                    <span>{mod.readTime}</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    Module 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#6366F1] transition-colors leading-snug">
                  {mod.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2">
                  {mod.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#6366F1] group-hover:text-[#4F46E5]">
                <span>Read Crash Course</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROMINENT INDIAN LAWS & DIGITAL SAFEGUARDS SECTION (Large font size & high contrast) */}
        <div className="rounded-[28px] border-2 border-orange-200 bg-gradient-to-br from-orange-50/40 via-white to-orange-50/20 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-orange-200/80">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-800 border border-orange-200 shrink-0">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-0.5 text-xs font-extrabold text-orange-900 uppercase tracking-wider mb-1">
                  <span>Indian Legal Safeguards</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                  {INDIA_FOCUS_DATA.title}
                </h3>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-orange-800 bg-orange-100/80 px-3.5 py-1.5 rounded-full border border-orange-300 self-start sm:self-auto">
              Verified Legal Rights in India
            </span>
          </div>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium">
            {INDIA_FOCUS_DATA.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {INDIA_FOCUS_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-slate-200 p-6 space-y-4 flex flex-col justify-between hover:border-orange-400 transition-colors shadow-xs"
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
                <div className="pt-3 border-t border-slate-100 text-sm text-[#312E81] bg-indigo-50/80 p-3 rounded-xl border border-indigo-100 font-medium">
                  💡 <strong>Lexi Safeguard:</strong> {pillar.note}
                </div>
              </div>
            ))}
          </div>

          {/* Helpline Alert Box - Clear, Bold, Visible */}
          <div className="rounded-2xl bg-orange-100/80 border-2 border-orange-300 p-5 sm:p-6 text-sm sm:text-base text-orange-950 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-orange-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-extrabold text-base sm:text-lg text-orange-950">
                Official Cyber Crime Helpline (Government of India)
              </div>
              <p className="leading-relaxed text-orange-900">
                Need to report cyberstalking, account takeover, or non-consensual media? Call the National Cyber Crime Toll-Free Helpline at{' '}
                <strong className="text-orange-950 underline text-lg">1930</strong> or register online at{' '}
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-orange-950 hover:text-black"
                >
                  cybercrime.gov.in
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
