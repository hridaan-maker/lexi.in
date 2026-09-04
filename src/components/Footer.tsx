import React from 'react';
import { Sparkles, MessageSquareHeart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenFeedback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenFeedback }) => {
  const navigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2E8F0] bg-[#FAFAF9] py-12 text-[#64748B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top brand & navigation grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#6366F1] text-white font-black text-xs shadow-xs">
                LX
              </div>
              <span className="text-2xl font-black tracking-tight text-[#0F172A]">
                LEXI<span className="text-[#6366F1]">.</span>
              </span>
            </div>
            <p className="text-xs font-semibold text-[#6366F1]">
              Legal language made human.
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm">
              Don't just click "I Agree." Understand what you're agreeing to. An educational tool translating legal and digital agreements for teenagers and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-2.5">
              <span className="font-bold text-[#0F172A] uppercase tracking-wider block">
                Explore
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('analyze')}
                    className="hover:text-[#0F172A] transition-colors"
                  >
                    Document Analyzer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('digital-rights')}
                    className="hover:text-[#0F172A] transition-colors"
                  >
                    Digital Rights Guide
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('creator-rights')}
                    className="hover:text-[#0F172A] transition-colors"
                  >
                    Creator & IP Hub
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="font-bold text-[#0F172A] uppercase tracking-wider block">
                Learn & Info
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('learn')}
                    className="hover:text-[#0F172A] transition-colors"
                  >
                    Lexi Learn (Crash Courses)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('about')}
                    className="hover:text-[#0F172A] transition-colors"
                  >
                    Why Lexi Exists
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenFeedback}
                    className="text-[#6366F1] font-semibold hover:underline flex items-center gap-1"
                  >
                    <MessageSquareHeart className="w-3.5 h-3.5" />
                    <span>Send Feedback</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Educational notice pill */}
          <div className="md:col-span-3 rounded-2xl bg-white p-4 border border-[#E2E8F0] space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
              <ShieldCheck className="w-4 h-4 text-[#6366F1]" />
              <span>Educational Tool Only</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-relaxed">
              Lexi is not a law firm and does not provide formal legal advice. Always consult a qualified lawyer or trusted adult for important legal decisions.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} LEXI. Designed for Gen Z digital literacy.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('about')}
              className="hover:text-[#0F172A] transition-colors"
            >
              Indian DPDP Act & Global Safeguards
            </button>
            <span>•</span>
            <button
              onClick={onOpenFeedback}
              className="hover:text-[#0F172A] transition-colors"
            >
              Help make Lexi better
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
