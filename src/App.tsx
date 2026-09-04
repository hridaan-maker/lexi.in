import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeroInteractiveCard } from './components/HeroInteractiveCard';
import { StatsSection } from './components/StatsSection';
import { CrashCoursesSection } from './components/CrashCoursesSection';
import { ProblemSection } from './components/ProblemSection';
import { DemoClauseCard } from './components/DemoClauseCard';
import { AmbientBackground } from './components/AmbientBackground';
import { AnalyzerView } from './components/AnalyzerView';
import { DigitalRightsView } from './components/DigitalRightsView';
import { CreatorRightsView } from './components/CreatorRightsView';
import { LearnView } from './components/LearnView';
import { AboutView } from './components/AboutView';
import { FeedbackModal } from './components/FeedbackModal';
import { Footer } from './components/Footer';
import { DEMO_CREATOR_CONTRACT } from './data/lexiData';
import { DocumentAnalysisResult } from './types';
import {
  FileSearch,
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [preloadedResult, setPreloadedResult] = useState<DocumentAnalysisResult | null>(null);
  const [selectedLearnModuleId, setSelectedLearnModuleId] = useState<string | null>(null);

  const handleLoadDemo = () => {
    setPreloadedResult(DEMO_CREATOR_CONTRACT);
    setActiveTab('analyze');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartFreshAnalysis = () => {
    setPreloadedResult(null);
    setActiveTab('analyze');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSeeHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('learn');
    }
  };

  const handleScrollToSuits = () => {
    const el = document.getElementById('reality-check-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPreview = () => {
    const el = document.getElementById('live-preview-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCourse = (courseId: string) => {
    setSelectedLearnModuleId(courseId);
    setActiveTab('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreAllCourses = () => {
    setSelectedLearnModuleId(null);
    setActiveTab('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD]/70 text-slate-900 font-sans relative selection:bg-violet-100 selection:text-violet-900">
      {/* Subtle, non-distracting full page ambient animated background */}
      <AmbientBackground />

      {/* Top sticky navigation bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'analyze') {
            setPreloadedResult(null);
          }
        }}
        onOpenFeedback={() => setFeedbackOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1 relative z-10">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-200">
            {/* Scroll 1: Minimalist Hero with Central Lexi Logo */}
            <HeroSection
              onAnalyzeClick={handleStartFreshAnalysis}
              onSeeHowItWorksClick={handleSeeHowItWorks}
              onTryDemoClick={handleLoadDemo}
              onScrollToPreview={handleScrollToSuits}
            />

            {/* Scroll 2: The Digital Reality Stats with Big Icons */}
            <StatsSection onScrollToPreview={handleScrollToPreview} />

            {/* Scroll 3: Live Legal Preview (Interactive Clause Translation) */}
            <section
              id="live-preview-section"
              className="py-16 md:py-24 bg-[#FAFAF9]/65 backdrop-blur-xs border-y border-[#E2E8F0]"
            >
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-3.5 py-1 text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
                    <span>Live Legal Preview</span>
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
                    See Lexi in Action
                  </h2>
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                    Toggle between the original corporate legalese and Lexi's plain-English breakdown.
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <HeroInteractiveCard />
                </div>
              </div>
            </section>

            {/* Featured: Crash Courses in Digital Law & Indian Legal Safeguards */}
            <CrashCoursesSection
              onSelectCourse={handleOpenCourse}
              onExploreAll={handleExploreAllCourses}
            />

            {/* Problem & Three Pillars Section */}
            <ProblemSection
              onExploreDemo={handleLoadDemo}
              onGoToLearn={() => setActiveTab('learn')}
              onGoToAnalyze={handleStartFreshAnalysis}
            />

            {/* Interactive Demo Showcase */}
            <DemoClauseCard onLoadIntoAnalyzer={handleLoadDemo} />

            {/* Clean, Uncrowded Bottom Section */}
            <section className="py-16 md:py-20 bg-[#FAFAF9]/65 backdrop-blur-xs border-t border-[#E2E8F0] text-center">
              <div className="mx-auto max-w-3xl px-4 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6366F1]/25 bg-white px-4 py-1.5 text-xs font-semibold text-[#6366F1] shadow-xs">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#6366F1] text-[9px] font-black text-white">
                    LX
                  </span>
                  <span>Ready to read between the lines?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
                  Stop guessing. Start understanding with <span className="text-[#6366F1]">LEXI.</span>
                </h2>
                <p className="text-base text-[#64748B] leading-relaxed max-w-xl mx-auto">
                  Whether it's an app's updated terms, a social media privacy policy, or a brand sponsorship contract, Lexi translates it in seconds.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleStartFreshAnalysis}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#6366F1] px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4F46E5] active:scale-[0.98] transition-all"
                  >
                    <FileSearch className="w-4 h-4" />
                    <span>Open Lexi Analyzer →</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('creator-rights')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 transition-all"
                  >
                    <span>Explore Creator Rights</span>
                  </button>
                </div>
                <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#64748B]">
                  <Globe2 className="w-4 h-4 text-orange-600" />
                  <span>Includes India DPDP Act & international youth privacy safeguards</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'analyze' && (
          <AnalyzerView initialResult={preloadedResult} />
        )}

        {activeTab === 'digital-rights' && (
          <DigitalRightsView />
        )}

        {activeTab === 'creator-rights' && (
          <CreatorRightsView onOpenAnalyzer={handleStartFreshAnalysis} />
        )}

        {activeTab === 'learn' && (
          <LearnView initialModuleId={selectedLearnModuleId} />
        )}

        {activeTab === 'about' && (
          <AboutView />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenFeedback={() => setFeedbackOpen(true)}
      />

      {/* User Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </div>
  );
}
