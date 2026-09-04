import React, { useState } from 'react';
import {
  ShieldCheck,
  Menu,
  X,
  FileSearch,
  BookOpen,
  Sparkles,
  Info,
  Scale,
  MessageSquareHeart,
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenFeedback: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenFeedback,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'analyze', label: 'Analyze', icon: FileSearch },
    { id: 'digital-rights', label: 'Digital Rights', icon: ShieldCheck },
    { id: 'creator-rights', label: 'Creator Rights', icon: Sparkles },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] bg-[#FAFAF9]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="LEXI Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6366F1] text-white font-black text-sm shadow-sm group-hover:bg-[#4F46E5] transition-colors">
              LX
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F172A] leading-none">
                LEXI<span className="text-[#6366F1]">.</span>
              </span>
            </div>
          </button>

          <span className="hidden sm:inline-flex items-center rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[11px] font-semibold text-[#6366F1] border border-[#6366F1]/20">
            Plain Language for Teens & Creators
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`py-1 transition-colors ${
                  isActive
                    ? 'text-[#0F172A] font-semibold border-b-2 border-[#6366F1]'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-feedback-btn"
            onClick={onOpenFeedback}
            className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Help make Lexi better"
          >
            <MessageSquareHeart className="w-4 h-4 text-[#6366F1]" />
            <span className="hidden lg:inline">Feedback</span>
          </button>

          <button
            id="nav-try-lexi-btn"
            onClick={() => handleNavClick('analyze')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6366F1] px-5 py-2 text-sm font-semibold text-white hover:bg-[#4F46E5] active:scale-[0.98] transition-all"
          >
            <span>Try Lexi</span>
            <span className="text-indigo-200">→</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-try-btn"
            onClick={() => handleNavClick('analyze')}
            className="px-3.5 py-1.5 text-xs font-semibold bg-[#6366F1] text-white rounded-full"
          >
            Try Lexi →
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          <div className="py-2 border-b border-slate-100 mb-2">
            <p className="text-xs font-medium text-slate-500">
              Legal language. Human language.
            </p>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-violet-50 text-violet-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-violet-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFeedback();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
            >
              <MessageSquareHeart className="w-3.5 h-3.5 text-violet-600" />
              Help make Lexi better (Feedback)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
