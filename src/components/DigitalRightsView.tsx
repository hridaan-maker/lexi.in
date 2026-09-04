import React, { useState } from 'react';
import { DIGITAL_RIGHTS_TOPICS } from '../data/lexiData';
import { DigitalRightsTopic } from '../types';
import {
  ShieldCheck,
  Lock,
  Eye,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const DigitalRightsView: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<'All' | 'Privacy' | 'Cybersecurity' | 'Online Safety'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(DIGITAL_RIGHTS_TOPICS[0].id);

  const filteredTopics = DIGITAL_RIGHTS_TOPICS.filter((topic) => {
    const matchesSection =
      selectedSection === 'All' || topic.section === selectedSection;
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.simpleExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.whyItMatters.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSection && matchesSearch;
  });

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-violet-600" />
            <span>Digital Literacy Guide</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Digital Rights, Explained
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Learn what happens behind the screen when you browse, stream, post, and click.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          {/* Section Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {(['All', 'Privacy', 'Cybersecurity', 'Online Safety'] as const).map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedSection === sec
                    ? 'bg-violet-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>

        {/* Topics Accordion List */}
        <div className="space-y-4">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => {
              const isExpanded = expandedId === topic.id;
              const sectionColor =
                topic.section === 'Privacy'
                  ? 'text-violet-700 bg-violet-50 border-violet-200'
                  : topic.section === 'Cybersecurity'
                  ? 'text-blue-700 bg-blue-50 border-blue-200'
                  : 'text-purple-700 bg-purple-50 border-purple-200';

              return (
                <div
                  key={topic.id}
                  id={`topic-${topic.id}`}
                  className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : topic.id)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${sectionColor}`}
                      >
                        {topic.badge}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-slate-900">
                        {topic.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-xs hidden sm:inline">
                        {isExpanded ? 'Collapse' : 'Expand'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-600" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 pt-1 space-y-6 border-t border-slate-100 animate-in fade-in duration-200">
                      {/* Simple Explanation */}
                      <div className="rounded-xl bg-violet-50/70 border border-violet-100 p-4 space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-violet-700">
                          In Simple Language:
                        </div>
                        <p className="text-sm font-medium text-slate-900 leading-relaxed">
                          {topic.simpleExplanation}
                        </p>
                      </div>

                      {/* Teen Scenario */}
                      {topic.teenScenario && (
                        <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200/80 text-xs">
                          <span className="font-bold text-slate-800 block mb-1">
                            📱 Real-Life Scenario:
                          </span>
                          <span className="text-slate-600 italic">
                            "{topic.teenScenario}"
                          </span>
                        </div>
                      )}

                      {/* Why It Matters */}
                      <div className="space-y-1 text-xs sm:text-sm">
                        <div className="font-bold text-slate-800 uppercase tracking-wider text-xs flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 text-violet-600" />
                          <span>Why Does This Matter?</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed pl-5">
                          {topic.whyItMatters}
                        </p>
                      </div>

                      {/* Practical Tips */}
                      <div className="space-y-2">
                        <div className="font-bold text-slate-800 uppercase tracking-wider text-xs flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Practical Actionable Tips</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                          {topic.practicalTips.map((tip, idx) => (
                            <li
                              key={idx}
                              className="rounded-xl bg-emerald-50/50 border border-emerald-100 p-3 text-xs text-emerald-900 font-medium"
                            >
                              ✓ {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Questions To Ask */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="font-bold text-slate-800 uppercase tracking-wider text-xs flex items-center gap-1.5">
                          <HelpCircle className="w-4 h-4 text-violet-600" />
                          <span>Questions You Should Ask</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700 pl-5">
                          {topic.questionsToAsk.map((q, idx) => (
                            <li key={idx} className="list-disc italic font-medium">
                              "{q}"
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
              <p className="font-semibold text-slate-700">No topics match your query.</p>
              <button
                onClick={() => {
                  setSelectedSection('All');
                  setSearchQuery('');
                }}
                className="mt-2 text-xs font-bold text-violet-700 underline"
              >
                Reset search and filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
