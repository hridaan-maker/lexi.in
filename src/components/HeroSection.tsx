import React from 'react';
import { FileSearch, Sparkles, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onAnalyzeClick: () => void;
  onSeeHowItWorksClick: () => void;
  onTryDemoClick: () => void;
  onScrollToPreview?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onAnalyzeClick,
  onSeeHowItWorksClick,
  onTryDemoClick,
  onScrollToPreview,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 text-center">
      {/* Subtle Ambient Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#6366F1]/15 via-[#A5B4FC]/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.95, 1.1],
            opacity: [0.2, 0.35, 0.2],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[360px] h-[360px] rounded-full bg-indigo-200/30 blur-2xl -top-10"
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 relative">
        {/* Central LEXI Logo & Animated Brand Emblem */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {/* Logo container with floating motion & breathing glow */}
          <div className="relative">
            {/* Pulsing halo ring */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-3 rounded-3xl bg-[#6366F1]/20 blur-lg pointer-events-none"
            />

            {/* Orbiting subtle pulse ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-2 rounded-3xl border border-dashed border-[#6366F1]/30 pointer-events-none"
            />

            {/* Main Floating Logo Box */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-[#6366F1] text-white shadow-xl shadow-[#6366F1]/25 border-2 border-white/60 ring-8 ring-[#EEF2FF] overflow-hidden"
            >
              {/* Subtle animated scan beam across logo */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 2.8,
                  duration: 1.4,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
              />
              <span className="text-3xl sm:text-4xl font-black tracking-tight select-none relative z-10">
                LX
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-1"
          >
            <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0F172A]">
              LEXI<span className="text-[#6366F1]">.</span>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#6366F1]/25 bg-[#EEF2FF] px-3.5 py-1 text-xs font-semibold text-[#6366F1] shadow-xs cursor-default"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#6366F1] animate-pulse" />
              <span>Legal Language Made Human</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-3 max-w-2xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.12]">
            Don't just click <span className="text-[#6366F1]">"I Agree."</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-normal text-[#475569] leading-relaxed">
            The fine-print translator for teens, creators, and anyone tired of 80-page legal contracts.
          </p>
        </motion.div>

        {/* Action Buttons: Clean & Centered */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="hero-analyze-cta-btn"
            onClick={onAnalyzeClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#6366F1] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-all shadow-sm"
          >
            <FileSearch className="w-4 h-4" />
            <span>Analyze a Document</span>
            <span className="text-indigo-200">→</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="hero-demo-quick-btn"
            onClick={onTryDemoClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-7 py-3.5 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 transition-all"
          >
            <span>Try Demo Clause</span>
          </motion.button>
        </motion.div>

        {/* Animated Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-2"
        >
          <button
            id="hero-scroll-preview-btn"
            onClick={onScrollToPreview}
            className="group inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-4 py-2 text-xs font-semibold text-[#64748B] hover:text-[#6366F1] hover:border-[#6366F1]/40 transition-all shadow-xs"
          >
            <span>See the reality check & live preview</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-flex"
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#6366F1]" />
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
