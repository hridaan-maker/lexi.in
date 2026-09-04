import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, FileText, Lock } from 'lucide-react';

export const AmbientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 1. Fine Editorial Micro-Dot Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] text-[#6366F1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="ambient-grid-dots"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.25" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ambient-grid-dots)" />
      </svg>

      {/* 2. Soft Ambient Breathing Gradient Orbs (Non-distracting, low contrast) */}
      {/* Orb 1: Upper Center/Left - Soft Indigo Aura */}
      <motion.div
        animate={{
          x: [-40, 50, -40],
          y: [-30, 40, -30],
          scale: [1, 1.18, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/12 left-1/6 w-[560px] h-[560px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#A5B4FC]/15 to-transparent blur-[90px] transform-gpu"
      />

      {/* Orb 2: Middle Right - Warm Subtle Amber/Rose Glow */}
      <motion.div
        animate={{
          x: [50, -40, 50],
          y: [20, -50, 20],
          scale: [1.12, 0.94, 1.12],
          opacity: [0.12, 0.24, 0.12],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-1/12 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#F59E0B]/10 via-[#6366F1]/12 to-transparent blur-[110px] transform-gpu"
      />

      {/* Orb 3: Lower Left/Center - Sky Tint */}
      <motion.div
        animate={{
          x: [-30, 40, -30],
          y: [40, -30, 40],
          scale: [0.95, 1.15, 0.95],
          opacity: [0.14, 0.28, 0.14],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/5 left-1/12 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#38BDF8]/12 via-[#818CF8]/15 to-transparent blur-[100px] transform-gpu"
      />

      {/* Orb 4: Deep Bottom Ambient Soft Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.22, 1],
          opacity: [0.10, 0.22, 0.10],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-1/4 w-[480px] h-[480px] rounded-full bg-[#6366F1]/10 blur-[100px] transform-gpu"
      />

      {/* 3. Tiny, Faint Floating Glyphs & Rings (Slow, serene motion) */}
      {/* Faint Ring 1 */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          rotate: [0, 90, 0],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-[8%] w-10 h-10 rounded-full border border-[#6366F1]/30 transform-gpu"
      />

      {/* Faint Ring 2 */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -120, 0],
          opacity: [0.10, 0.24, 0.10],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2/3 right-[10%] w-14 h-14 rounded-full border border-dashed border-[#6366F1]/25 transform-gpu"
      />

      {/* Subtle Micro Shield Outline */}
      <motion.div
        animate={{
          y: [0, -45, 0],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[18%] right-[14%] text-[#6366F1] transform-gpu"
      >
        <Shield className="w-5 h-5 stroke-[1.5]" />
      </motion.div>

      {/* Subtle Document Outline */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          opacity: [0.08, 0.20, 0.08],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[52%] left-[12%] text-indigo-400 transform-gpu"
      >
        <FileText className="w-5 h-5 stroke-[1.5]" />
      </motion.div>

      {/* Subtle Micro Sparkle */}
      <motion.div
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.12, 0.35, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[38%] right-[22%] text-[#6366F1] transform-gpu"
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      {/* Subtle Lock Outline */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.07, 0.18, 0.07],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[28%] right-[8%] text-[#6366F1] transform-gpu"
      >
        <Lock className="w-4 h-4 stroke-[1.5]" />
      </motion.div>

      {/* Floating Micro Particle Dots */}
      <motion.div
        animate={{
          y: [-20, 30, -20],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[12%] left-[30%] w-1.5 h-1.5 rounded-full bg-[#6366F1] transform-gpu"
      />
      <motion.div
        animate={{
          y: [30, -25, 30],
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[75%] left-[24%] w-2 h-2 rounded-full bg-indigo-400 transform-gpu"
      />
      <motion.div
        animate={{
          y: [-25, 25, -25],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[60%] right-[32%] w-1.5 h-1.5 rounded-full bg-amber-400/80 transform-gpu"
      />
    </div>
  );
};
