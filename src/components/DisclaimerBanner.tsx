import React from 'react';
import { Info } from 'lucide-react';

export const DisclaimerBanner: React.FC<{ compact?: boolean }> = ({ compact }) => {
  return (
    <div
      className={`rounded-2xl border border-[#6366F1]/20 bg-[#EEF2FF] p-4 text-xs shadow-xs ${
        compact ? 'py-3' : 'py-4'
      }`}
    >
      <div className="flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#6366F1] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-[#0F172A]">
            Lexi is an educational tool, not a lawyer.
          </p>
          <p className="leading-relaxed text-[#64748B]">
            Lexi helps explain documents and identify areas that may deserve attention. It does not provide legal advice or determine whether a clause is legally valid. For important legal decisions, consult a qualified legal professional.
          </p>
        </div>
      </div>
    </div>
  );
};
