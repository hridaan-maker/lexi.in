import React, { useState } from 'react';
import { X, MessageSquareHeart, CheckCircle2, Loader2, Send } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [thoughts, setThoughts] = useState('');
  const [topicSuggestion, setTopicSuggestion] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!thoughts.trim()) {
      setError('Please tell us what you thought.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          thoughts,
          topicSuggestion,
          email,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit feedback');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setThoughts('');
        setTopicSuggestion('');
        setEmail('');
        onClose();
      }, 2500);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-[24px] border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.12)] space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">
              Thank you!
            </h3>
            <p className="text-xs text-[#64748B] max-w-xs mx-auto">
              Your feedback helps us make Lexi more useful and accessible for teenagers everywhere.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[#6366F1] text-xs font-bold uppercase tracking-wider">
                <MessageSquareHeart className="w-4 h-4" />
                <span>We're listening</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Help make Lexi better.
              </h3>
              <p className="text-xs text-[#64748B]">
                Tell us how Lexi worked for you or what legal jargon you'd like us to translate next.
              </p>
            </div>

            {error && (
              <div className="p-3 text-xs rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-medium">
                {error}
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="block font-semibold text-[#0F172A]">
                  What did you think? *
                </label>
                <textarea
                  rows={3}
                  required
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                  placeholder="Did Lexi make the document easier to understand? Was anything confusing?"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#FAFAF9] p-3 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-semibold text-[#0F172A]">
                  What should Lexi explain next?
                </label>
                <input
                  type="text"
                  value={topicSuggestion}
                  onChange={(e) => setTopicSuggestion(e.target.value)}
                  placeholder="e.g. Discord server terms, Spotify for Artists agreements, Roblox IP..."
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#FAFAF9] p-3 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-semibold text-[#0F172A]">
                  Optional email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="teencreator@gmail.com (only if you'd like a response)"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#FAFAF9] p-3 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#6366F1] px-5 py-3 text-xs font-semibold text-white hover:bg-[#4F46E5] transition-all disabled:opacity-50 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Feedback</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
