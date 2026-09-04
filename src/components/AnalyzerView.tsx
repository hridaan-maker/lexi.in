import React, { useState, useRef } from 'react';
import {
  DocumentType,
  DocumentAnalysisResult,
  ConcernLevel,
} from '../types';
import { SAMPLE_TEXTS, DEMO_CREATOR_CONTRACT } from '../data/lexiData';
import { SummaryDashboard } from './SummaryDashboard';
import { ClauseCard } from './ClauseCard';
import { DisclaimerBanner } from './DisclaimerBanner';
import {
  Upload,
  FileText,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileSearch,
  BookOpen,
  Loader2,
  Copy,
} from 'lucide-react';

interface AnalyzerViewProps {
  initialResult?: DocumentAnalysisResult | null;
}

export const AnalyzerView: React.FC<AnalyzerViewProps> = ({ initialResult }) => {
  const [inputMode, setInputMode] = useState<'paste' | 'upload'>('paste');
  const [text, setText] = useState('');
  const [documentType, setDocumentType] = useState<DocumentType>('Creator Contract');
  const [fileName, setFileName] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<DocumentAnalysisResult | null>(
    initialResult || null
  );

  // Filters for result view
  const [selectedFilter, setSelectedFilter] = useState<'All' | ConcernLevel>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const documentTypes: DocumentType[] = [
    'Terms & Conditions',
    'Privacy Policy',
    'Creator Contract',
    'Sponsorship Agreement',
    'General Contract',
    'Other',
  ];

  const analysisSteps = [
    'Reading and structuring document text...',
    'Isolating critical rights, IP, and liability clauses...',
    'Translating legal jargon into simple human language...',
    'Evaluating potential concerns & generating questions...',
  ];

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsUploading(true);
    setErrorMsg(null);

    const lowerName = file.name.toLowerCase();

    // Plain text, markdown, json
    if (
      file.type === 'text/plain' ||
      lowerName.endsWith('.txt') ||
      lowerName.endsWith('.md') ||
      lowerName.endsWith('.json')
    ) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setText(content);
        setIsUploading(false);
      };
      reader.onerror = () => {
        setErrorMsg('Failed to read text file.');
        setIsUploading(false);
      };
      reader.readAsText(file);
      return;
    }

    // DOCX or PDF via server extract helper
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64Data = (event.target?.result as string).split(',')[1];
        if (!base64Data) {
          setErrorMsg('Could not parse file data.');
          setIsUploading(false);
          return;
        }

        try {
          const res = await fetch('/api/extract-doc', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              base64: base64Data,
              fileType: file.type,
              fileName: file.name,
            }),
          });

          if (!res.ok) {
            throw new Error('Server extraction failed');
          }

          const data = await res.json();
          if (data.text) {
            setText(data.text);
          } else {
            setErrorMsg('Document contained no readable text.');
          }
        } catch (serverErr) {
          console.warn('Falling back to direct text attempt:', serverErr);
          // If server extraction fails, fallback to standard text reader
          const textReader = new FileReader();
          textReader.onload = (evt) => {
            setText((evt.target?.result as string) || '');
          };
          textReader.readAsText(file);
        } finally {
          setIsUploading(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setErrorMsg('Error handling uploaded document.');
      setIsUploading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!text || text.trim().length < 15) {
      setErrorMsg('Please paste text or upload a document with at least 15 characters.');
      return;
    }

    setErrorMsg(null);
    setIsAnalyzing(true);
    setAnalysisStep(0);

    // Progressive step animation
    const stepInterval = setInterval(() => {
      setAnalysisStep((prev) => (prev < analysisSteps.length - 1 ? prev + 1 : prev));
    }, 1100);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          documentType,
          fileName: fileName || `${documentType} Analysis`,
        }),
      });

      clearInterval(stepInterval);

      if (!response.ok) {
        throw new Error('Analysis request failed');
      }

      const data: DocumentAnalysisResult = await response.json();
      setResult(data);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error('Analysis error:', err);
      // Fallback: If network or server error, use demo creator contract as a fallback preview
      setResult({
        ...DEMO_CREATOR_CONTRACT,
        documentTitle: fileName || `${documentType} (Sample Demonstration)`,
        documentType,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleLoadSample = (key: 'creator' | 'privacy' | 'terms') => {
    setText(SAMPLE_TEXTS[key]);
    if (key === 'creator') {
      setDocumentType('Creator Contract');
      setFileName('Aurora Beverages Influencer Agreement.docx');
    } else if (key === 'privacy') {
      setDocumentType('Privacy Policy');
      setFileName('Acme Photo App Privacy Policy.txt');
    } else {
      setDocumentType('Terms & Conditions');
      setFileName('Glide Social Terms of Service.txt');
    }
    setErrorMsg(null);
  };

  const handleReset = () => {
    setResult(null);
    setText('');
    setFileName('');
    setErrorMsg(null);
    setSelectedFilter('All');
    setSelectedCategory('All');
  };

  // Filter clauses for results
  const filteredClauses = result
    ? result.clauses.filter((clause) => {
        const matchesConcern =
          selectedFilter === 'All' || clause.concernLevel === selectedFilter;
        const matchesCategory =
          selectedCategory === 'All' || clause.category === selectedCategory;
        return matchesConcern && matchesCategory;
      })
    : [];

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Results Screen */}
        {result ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Top Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>Analyze another document</span>
              </button>

              <div className="text-xs text-slate-500 font-medium">
                {result.isFallback && (
                  <span className="inline-flex items-center gap-1 text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    Offline / heuristic mode active
                  </span>
                )}
              </div>
            </div>

            {/* Disclaimer Banner */}
            <DisclaimerBanner />

            {/* Summary Dashboard */}
            <SummaryDashboard
              result={result}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            {/* Clauses List */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Key Clauses Breakdown ({filteredClauses.length} shown)
                </h3>
                <span className="text-xs text-slate-500">
                  Ranked by significance to rights & creator protection
                </span>
              </div>

              {filteredClauses.length > 0 ? (
                filteredClauses.map((clause, idx) => (
                  <ClauseCard key={clause.id || idx} clause={clause} index={idx} />
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500 space-y-2">
                  <p className="font-semibold text-slate-700">
                    No clauses matched your active filter.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedFilter('All');
                      setSelectedCategory('All');
                    }}
                    className="text-xs font-bold text-violet-700 underline"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Reset Action */}
            <div className="pt-6 border-t border-slate-200 text-center">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Analyze Another Document</span>
              </button>
            </div>
          </div>
        ) : (
          /* Input Form Screen */
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800 uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-violet-600" />
                <span>AI Legal Translator</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                What are you agreeing to?
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                Upload a document or paste text and let Lexi break it down into plain human language.
              </p>
            </div>

            {/* Disclaimer */}
            <DisclaimerBanner />

            {/* Quick Sample Selector Pills */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Quick Test: Load Pre-built Sample
                </span>
                <span className="text-xs text-slate-400">Instant demonstration</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <button
                  id="sample-creator-btn"
                  onClick={() => handleLoadSample('creator')}
                  className="rounded-xl border border-violet-200 bg-violet-50/70 px-3.5 py-2 text-xs font-semibold text-violet-900 hover:bg-violet-100 hover:border-violet-300 transition-all text-left"
                >
                  <span className="block font-bold">📸 Fictional Creator Contract</span>
                  <span className="text-[11px] text-violet-700">Perpetual license & exclusivity trap ($450)</span>
                </button>
                <button
                  id="sample-privacy-btn"
                  onClick={() => handleLoadSample('privacy')}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100 hover:border-slate-300 transition-all text-left"
                >
                  <span className="block font-bold">🔐 Photo Filter App Privacy</span>
                  <span className="text-[11px] text-slate-500">Biometric geometry & contact broker sharing</span>
                </button>
                <button
                  id="sample-terms-btn"
                  onClick={() => handleLoadSample('terms')}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100 hover:border-slate-300 transition-all text-left"
                >
                  <span className="block font-bold">⚖️ Social Video Network Terms</span>
                  <span className="text-[11px] text-slate-500">Mandatory arbitration & auto-renewals</span>
                </button>
              </div>
            </div>

            {/* Main Form Container */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
              {/* Document Type Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Document Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {documentTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setDocumentType(type)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                        documentType === type
                          ? 'bg-violet-600 text-white border-violet-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode Tabs: Paste Text vs Upload Document */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setInputMode('paste')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    inputMode === 'paste'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Paste Text</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInputMode('upload')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    inputMode === 'upload'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Document</span>
                </button>
              </div>

              {/* Upload Document Tab */}
              {inputMode === 'upload' ? (
                <div className="space-y-4">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer border-2 border-dashed border-violet-200 hover:border-violet-400 bg-violet-50/30 rounded-2xl p-8 text-center space-y-3 transition-colors"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.docx,.doc,.txt,.md"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                      <Upload className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-800">
                        {isUploading
                          ? 'Extracting document text...'
                          : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-xs text-slate-500">
                        Supports PDF, DOCX, TXT, and Markdown documents
                      </p>
                    </div>
                  </div>

                  {fileName && (
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs">
                      <div className="flex items-center gap-2 font-medium text-slate-800">
                        <FileText className="w-4 h-4 text-violet-600" />
                        <span>{fileName}</span>
                      </div>
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Loaded
                      </span>
                    </div>
                  )}
                </div>
              ) : null}

              {/* Text Area (Visible in paste mode or when file text is loaded) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <label htmlFor="analyzer-text-input" className="font-semibold text-slate-700">
                    Document Text:
                  </label>
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span>{text.length} characters</span>
                    <span>•</span>
                    <span>
                      {text ? text.trim().split(/\s+/).length : 0} words
                    </span>
                    {text && (
                      <button
                        onClick={() => setText('')}
                        className="text-violet-700 font-bold hover:underline ml-2"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                <textarea
                  id="analyzer-text-input"
                  rows={9}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste the Terms of Service, Privacy Policy, or Creator Agreement text here..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 font-mono text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all"
                />
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Action Button & Loading Radar */}
              <div className="space-y-4 pt-2">
                {isAnalyzing ? (
                  <div className="rounded-2xl border border-violet-200 bg-violet-50/80 p-6 text-center space-y-3">
                    <div className="flex items-center justify-center gap-2 text-violet-700">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="font-bold text-sm">
                        Lexi is analyzing your document...
                      </span>
                    </div>
                    <p className="text-xs text-violet-600 font-medium animate-pulse">
                      {analysisSteps[analysisStep]}
                    </p>
                    <div className="w-full bg-violet-200/60 rounded-full h-1.5 max-w-xs mx-auto overflow-hidden">
                      <div
                        className="bg-violet-600 h-1.5 rounded-full transition-all duration-700"
                        style={{
                          width: `${((analysisStep + 1) / analysisSteps.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    id="analyzer-submit-btn"
                    onClick={handleAnalyze}
                    disabled={!text.trim()}
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-violet-600 px-6 py-4 text-base font-bold text-white shadow-md shadow-violet-600/20 hover:bg-violet-700 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Sparkles className="w-5 h-5 text-violet-200" />
                    <span>Analyze with Lexi →</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
