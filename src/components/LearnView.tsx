import React, { useState } from 'react';
import { LEARN_MODULES } from '../data/lexiData';
import { LearnTopic } from '../types';
import { BookOpen, Sparkles, Clock, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';

interface LearnViewProps {
  initialModuleId?: string | null;
}

export const LearnView: React.FC<LearnViewProps> = ({ initialModuleId }) => {
  const [selectedModule, setSelectedModule] = useState<LearnTopic | null>(() => {
    if (initialModuleId) {
      return LEARN_MODULES.find((m) => m.id === initialModuleId) || null;
    }
    return null;
  });

  React.useEffect(() => {
    if (initialModuleId) {
      const match = LEARN_MODULES.find((m) => m.id === initialModuleId);
      if (match) setSelectedModule(match);
    }
  }, [initialModuleId]);

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {selectedModule ? (
          /* Detailed Module Reader */
          <div className="space-y-8 animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedModule(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#6366F1] hover:text-[#4F46E5] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all courses</span>
            </button>

            <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] space-y-8">
              <div className="space-y-3 pb-6 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3 py-1 text-xs font-semibold text-[#6366F1]">
                    <Clock className="w-3 h-3 text-[#6366F1]" />
                    <span>{selectedModule.readTime}</span>
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]">
                  {selectedModule.title}
                </h1>
                <p className="text-base text-[#64748B] font-medium">
                  {selectedModule.subtitle}
                </p>
              </div>

              {/* High-level summary */}
              <div className="rounded-2xl bg-[#EEF2FF] border border-[#6366F1]/20 p-5 space-y-1 text-sm text-[#0F172A]">
                <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#6366F1]">
                  Core Lesson:
                </div>
                <p className="font-medium leading-relaxed">
                  {selectedModule.summary}
                </p>
              </div>

              {/* Lesson Key Points */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Key Concepts Broken Down:
                </h3>

                <div className="space-y-5">
                  {selectedModule.keyPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="rounded-[20px] border border-[#E2E8F0] bg-[#FAFAF9] p-6 space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#6366F1] text-white text-xs font-bold">
                          {idx + 1}
                        </span>
                        <h4 className="text-base font-bold text-[#0F172A]">
                          {pt.label}
                        </h4>
                      </div>

                      <p className="text-sm text-[#64748B] leading-relaxed pl-8">
                        {pt.text}
                      </p>

                      {/* Real Example */}
                      <div className="ml-8 rounded-xl bg-white border border-[#E2E8F0] p-3 text-xs text-[#64748B] space-y-1">
                        <span className="font-bold text-[#0F172A] block">
                          💡 Real-World Example:
                        </span>
                        <span className="italic text-[#0F172A]">
                          "{pt.example}"
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finish action */}
              <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">
                  Finished reading this module
                </span>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="rounded-full bg-[#6366F1] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#4F46E5] transition-colors"
                >
                  Back to Modules
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Modules Grid */
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3 py-1 text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-[#6366F1]" />
                <span>Lexi Learn</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
                Crash Courses in Digital Law
              </h1>
              <p className="text-base sm:text-lg text-[#64748B]">
                Bite-sized, zero-jargon guides using everyday examples rather than complicated legal statutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEARN_MODULES.map((mod) => (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  className="group cursor-pointer rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#6366F1]/50 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                        {mod.readTime}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:text-[#6366F1] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#6366F1] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                      {mod.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] text-xs font-semibold text-[#6366F1] flex items-center gap-1">
                    <span>Read Lesson</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
