export type ConcernLevel = 'Low' | 'Review' | 'High Attention';

export type ClauseCategory =
  | 'Privacy'
  | 'Data Security'
  | 'Content Rights'
  | 'Intellectual Property'
  | 'Money'
  | 'Renewal'
  | 'Cancellation'
  | 'Liability'
  | 'Digital Rights'
  | 'Advertising';

export interface CategorySummary {
  category: ClauseCategory;
  status: ConcernLevel;
  note: string;
}

export interface AnalyzedClause {
  id: string;
  original: string;
  simpleLanguage: string;
  whyItMatters: string;
  concernLevel: ConcernLevel;
  category: ClauseCategory;
  questionsToAsk: string[];
}

export interface DocumentAnalysisResult {
  documentTitle: string;
  documentType: string;
  analysisDate: string;
  summary: {
    totalClauses: number;
    lowConcernCount: number;
    reviewConcernCount: number;
    highConcernCount: number;
    overallTakeaway: string;
    keyRisks: string[];
    categorySummaries: CategorySummary[];
  };
  clauses: AnalyzedClause[];
  isFallback?: boolean;
}

export type DocumentType =
  | 'Terms & Conditions'
  | 'Privacy Policy'
  | 'Creator Contract'
  | 'Sponsorship Agreement'
  | 'General Contract'
  | 'Other';

export interface FeedbackItem {
  id: string;
  thoughts: string;
  topicSuggestion?: string;
  email?: string;
  createdAt: string;
}

export interface DigitalRightsTopic {
  id: string;
  section: 'Privacy' | 'Cybersecurity' | 'Online Safety';
  title: string;
  badge: string;
  simpleExplanation: string;
  whyItMatters: string;
  practicalTips: string[];
  teenScenario: string;
  questionsToAsk: string[];
}

export interface CreatorRightItem {
  id: string;
  title: string;
  status: 'Available' | 'Coming Soon';
  category: string;
  summary: string;
  keyRisks: string[];
  creatorTips: string[];
  redFlags: string[];
}

export interface LearnTopic {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  keyPoints: {
    label: string;
    text: string;
    example: string;
  }[];
}
