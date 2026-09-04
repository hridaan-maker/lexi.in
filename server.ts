import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import * as mammoth from 'mammoth';

interface FeedbackRecord {
  id: string;
  thoughts: string;
  topicSuggestion?: string;
  email?: string;
  createdAt: string;
}

const feedbackStore: FeedbackRecord[] = [];

let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Intelligent fallback analyzer for offline, missing key, or API failure
function analyzeFallback(text: string, documentType: string) {
  const normalized = text.trim();
  const paragraphs = normalized
    .split(/\n\s*\n|\n(?=[0-9]+\.|\bSection\b|\bArticle\b)/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40);

  const candidateChunks = paragraphs.length > 0 ? paragraphs.slice(0, 8) : [normalized];

  const clauses = candidateChunks.map((chunk, idx) => {
    const lower = chunk.toLowerCase();
    let category = 'Digital Rights';
    let concernLevel: 'Low' | 'Review' | 'High Attention' = 'Review';
    let simpleLanguage =
      'This clause establishes rules between you and the company regarding how the service or partnership operates.';
    let whyItMatters =
      'Understanding these rules helps prevent unexpected surprises about your privacy, money, or content.';
    let questionsToAsk = [
      'Can you clarify what this means in simple terms?',
      'Does this apply indefinitely or only during active use?',
    ];

    if (
      lower.includes('perpetual') ||
      lower.includes('royalty-free') ||
      lower.includes('worldwide license') ||
      lower.includes('reproduce') ||
      lower.includes('derivative works')
    ) {
      category = 'Content Rights';
      concernLevel = 'High Attention';
      simpleLanguage =
        'The company may be able to use, modify, share, and monetize your content anywhere in the world without paying you additional royalties, potentially forever.';
      whyItMatters =
        'Even if your video goes viral or you become famous later, the platform or brand could reuse your work in their commercial campaigns without needing your fresh consent.';
      questionsToAsk = [
        'How long will you hold rights to my content (can this be capped at 6 months)?',
        'Can I revoke permission if the brand direction changes?',
        'Will my credit and handle always be attached?',
      ];
    } else if (
      lower.includes('disclose') ||
      lower.includes('third party') ||
      lower.includes('affiliated') ||
      lower.includes('advertising partners') ||
      lower.includes('broker')
    ) {
      category = 'Privacy';
      concernLevel = 'Review';
      simpleLanguage =
        'The company may share or sell parts of your personal data, app activity, or device identifiers with outside companies and advertising networks.';
      whyItMatters =
        'Once outside partners receive your data, it can be combined with other profiles to target you with hyper-specific ads or track your browsing habits across apps.';
      questionsToAsk = [
        'Which specific third parties receive my information?',
        'Can I opt out of third-party sharing without losing account access?',
      ];
    } else if (
      lower.includes('exclusive') ||
      lower.includes('non-compete') ||
      lower.includes('endorse') ||
      lower.includes('competing')
    ) {
      category = 'Advertising';
      concernLevel = 'High Attention';
      simpleLanguage =
        'You are restricted from mentioning, promoting, or working with competing brands or services for a specified period.';
      whyItMatters =
        'A broad exclusivity window can severely restrict your earning potential and block exciting sponsorships with other companies.';
      questionsToAsk = [
        'Can the exclusivity be narrowed only to direct brand rivals?',
        'Does the exclusivity window end immediately once the campaign deliverables are published?',
      ];
    } else if (
      lower.includes('fee') ||
      lower.includes('payment') ||
      lower.includes('net-') ||
      lower.includes('refund') ||
      lower.includes('auto-renew') ||
      lower.includes('subscription')
    ) {
      category = lower.includes('auto-renew') ? 'Renewal' : 'Money';
      concernLevel = lower.includes('non-refundable') ? 'High Attention' : 'Review';
      simpleLanguage =
        'This outlines how and when money is charged or paid, including waiting periods, non-refundable policies, or recurring automatic billing.';
      whyItMatters =
        'Delayed payment terms can leave you waiting months for your earnings, while hidden renewal clauses can charge your card unexpectedly.';
      questionsToAsk = [
        'Can payment terms be shortened to Net-30 or paid with an upfront deposit?',
        'How easily can I cancel automatic renewals in the settings?',
      ];
    } else if (
      lower.includes('moral rights') ||
      lower.includes('copyright') ||
      lower.includes('trademark') ||
      lower.includes('intellectual property')
    ) {
      category = 'Intellectual Property';
      concernLevel = 'Review';
      simpleLanguage =
        'This deals with who owns the creative ideas and whether you give up rights to prevent your work from being distorted or uncredited.';
      whyItMatters =
        'Waiving moral rights means a brand or app could remix your artwork or voice in a way you find distasteful or out-of-context.';
      questionsToAsk = [
        'Can we remove the waiver of moral rights so my attribution is protected?',
        'Do I have approval over significant creative alterations?',
      ];
    } else if (
      lower.includes('arbitration') ||
      lower.includes('waive') ||
      lower.includes('jury trial') ||
      lower.includes('indemnif') ||
      lower.includes('liability')
    ) {
      category = 'Liability';
      concernLevel = 'Review';
      simpleLanguage =
        'This limits the company’s legal responsibility if something goes wrong, and may require you to resolve disagreements in private arbitration instead of court.';
      whyItMatters =
        'Mandatory arbitration and class action waivers make it much harder for users to band together if an app harms people or leaks data.';
      questionsToAsk = [
        'What is the dispute resolution process if an issue arises?',
      ];
    } else if (
      lower.includes('terminate') ||
      lower.includes('cancel') ||
      lower.includes('suspend')
    ) {
      category = 'Cancellation';
      concernLevel = 'Review';
      simpleLanguage =
        'The company outlines under what conditions your account or the agreement can be ended, and whether notice is required.';
      whyItMatters =
        'If an account can be deleted without warning, you could lose your follower base, saved drafts, or accumulated digital items.';
      questionsToAsk = [
        'Does the company provide advance warning and a grace period before account suspension?',
      ];
    }

    return {
      id: `clause-${idx + 1}`,
      original: chunk.length > 300 ? chunk.slice(0, 300) + '...' : chunk,
      simpleLanguage,
      whyItMatters,
      concernLevel: concernLevel as 'Low' | 'Review' | 'High Attention',
      category: category as any,
      questionsToAsk,
    };
  });

  const lowCount = clauses.filter((c) => (c.concernLevel as string) === 'Low').length;
  const reviewCount = clauses.filter((c) => (c.concernLevel as string) === 'Review').length;
  const highCount = clauses.filter((c) => (c.concernLevel as string) === 'High Attention').length;

  const categoryMap: Record<string, { count: number; maxConcern: 'Low' | 'Review' | 'High Attention' }> = {};
  clauses.forEach((c) => {
    if (!categoryMap[c.category]) {
      categoryMap[c.category] = { count: 0, maxConcern: c.concernLevel };
    }
    categoryMap[c.category].count += 1;
    if (c.concernLevel === 'High Attention') {
      categoryMap[c.category].maxConcern = 'High Attention';
    } else if (c.concernLevel === 'Review' && categoryMap[c.category].maxConcern !== 'High Attention') {
      categoryMap[c.category].maxConcern = 'Review';
    }
  });

  const categorySummaries = Object.entries(categoryMap).map(([category, info]) => ({
    category: category as any,
    status: info.maxConcern,
    note:
      info.maxConcern === 'High Attention'
        ? 'Key areas of concern identified requiring closer scrutiny.'
        : info.maxConcern === 'Review'
        ? 'Clauses that may deserve attention and discussion.'
        : 'Standard terms with no major flags detected.',
  }));

  return {
    documentTitle: documentType || 'Analyzed Agreement',
    documentType: documentType || 'General Contract',
    analysisDate: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    summary: {
      totalClauses: clauses.length,
      lowConcernCount: lowCount,
      reviewConcernCount: reviewCount,
      highConcernCount: highCount,
      overallTakeaway:
        highCount > 0
          ? `Lexi identified ${highCount} clause(s) that deserve high attention regarding usage rights, data sharing, or restrictions. Review the highlighted sections carefully before signing or accepting.`
          : 'This document contains standard provisions with a few operational clauses you should be aware of regarding permissions and account policies.',
      keyRisks: [
        'Ensure you clarify how long the company or brand can use your content or data.',
        'Check if any exclusivity or non-compete restricts your freedom with other partners.',
        'Notice if dispute resolution mandates binding arbitration instead of public resolution.',
      ],
      categorySummaries,
    },
    clauses,
    isFallback: true,
  };
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ extended: true, limit: '25mb' }));

  // Health check
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'LEXI AI Engine',
      aiConfigured: Boolean(process.env.GEMINI_API_KEY),
    });
  });

  // AI Document Analysis Endpoint
  app.post('/api/analyze', async (req: Request, res: Response) => {
    try {
      const { text, documentType = 'Terms & Conditions', fileName } = req.body;

      if (!text || typeof text !== 'string' || text.trim().length < 15) {
        return res.status(400).json({
          error: 'Please provide valid text or a document to analyze (at least 15 characters).',
        });
      }

      const ai = getAI();

      if (!ai) {
        // Fallback gracefully if no GEMINI_API_KEY is configured
        const fallbackResult = analyzeFallback(text, documentType);
        return res.json({
          ...fallbackResult,
          documentTitle: fileName || documentType,
          isFallback: true,
          notice: 'Analyzed via Lexi heuristic engine (API key not configured in environment).',
        });
      }

      const systemInstruction = `You are LEXI, an AI-powered digital-rights and legal-language translator designed primarily for teenagers aged 13–18, especially teen influencers, content creators, and students.
Tagline: "Legal language. Human language."
Core message: "Don't just click 'I Agree.' Understand what you're agreeing to."

Lexi helps users understand complicated Terms & Conditions, Privacy Policies, creator agreements, and contracts by translating them into simple, teenager-friendly language and highlighting areas that deserve attention.

IMPORTANT EDUCATIONAL GUIDELINES:
1. This is an educational tool, NOT a lawyer and NOT a legal-advice service.
2. NEVER confidently state that something is illegal or legally void.
3. Do not pretend to provide legal advice.
4. Always use cautious, balanced phrasing such as:
   - "This may mean..."
   - "This could affect you because..."
   - "This clause may deserve further review."
   - "Consider asking..."
5. Target the explanation level to a 14-17 year old reader: clear, relatable, without baby talk, using sharp real-world examples (e.g., social media feeds, brand sponsors, school, photo filters).
6. Categories MUST be one of:
   - "Privacy"
   - "Data Security"
   - "Content Rights"
   - "Intellectual Property"
   - "Money"
   - "Renewal"
   - "Cancellation"
   - "Liability"
   - "Digital Rights"
   - "Advertising"
7. Concern levels MUST be one of:
   - "Low" (routine, expected standard term)
   - "Review" (notable term that impacts rights, data, or money that the user should be conscious of)
   - "High Attention" (aggressive, unilateral, indefinite license, heavy exclusivity, waiver of rights, broad data selling, or harsh penalties)`;

      const userPrompt = `Analyze the following ${documentType} document for a teenager/creator. Extract the most important 3 to 8 clauses that impact rights, data, content, money, or obligations.

DOCUMENT TEXT:
${text.slice(0, 15000)}

Output must be strictly valid JSON matching the specified structure.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              documentTitle: { type: Type.STRING },
              documentType: { type: Type.STRING },
              summary: {
                type: Type.OBJECT,
                properties: {
                  totalClauses: { type: Type.INTEGER },
                  lowConcernCount: { type: Type.INTEGER },
                  reviewConcernCount: { type: Type.INTEGER },
                  highConcernCount: { type: Type.INTEGER },
                  overallTakeaway: { type: Type.STRING },
                  keyRisks: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  categorySummaries: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        category: { type: Type.STRING },
                        status: { type: Type.STRING },
                        note: { type: Type.STRING },
                      },
                      required: ['category', 'status', 'note'],
                    },
                  },
                },
                required: [
                  'totalClauses',
                  'lowConcernCount',
                  'reviewConcernCount',
                  'highConcernCount',
                  'overallTakeaway',
                  'keyRisks',
                  'categorySummaries',
                ],
              },
              clauses: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    original: { type: Type.STRING },
                    simpleLanguage: { type: Type.STRING },
                    whyItMatters: { type: Type.STRING },
                    concernLevel: { type: Type.STRING },
                    category: { type: Type.STRING },
                    questionsToAsk: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                  },
                  required: [
                    'id',
                    'original',
                    'simpleLanguage',
                    'whyItMatters',
                    'concernLevel',
                    'category',
                    'questionsToAsk',
                  ],
                },
              },
            },
            required: ['documentTitle', 'documentType', 'summary', 'clauses'],
          },
        },
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('Empty response from AI model');
      }

      const parsedData = JSON.parse(responseText);

      return res.json({
        ...parsedData,
        documentTitle: fileName || parsedData.documentTitle || documentType,
        documentType: documentType || parsedData.documentType,
        analysisDate: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        isFallback: false,
      });
    } catch (err: any) {
      console.error('Gemini Analysis Error, falling back to heuristic engine:', err);
      // Fallback seamlessly so the user experience is never interrupted
      const { text, documentType = 'Terms & Conditions', fileName } = req.body || {};
      const fallbackResult = analyzeFallback(text || '', documentType);
      return res.json({
        ...fallbackResult,
        documentTitle: fileName || documentType,
        isFallback: true,
        notice: 'Analyzed with Lexi local engine (AI model temporarily unavailable).',
      });
    }
  });

  // Document file extraction helper (DOCX, TXT)
  app.post('/api/extract-doc', async (req: Request, res: Response) => {
    try {
      const { base64, fileType, fileName } = req.body;
      if (!base64) {
        return res.status(400).json({ error: 'No file data provided' });
      }

      const buffer = Buffer.from(base64, 'base64');
      const lowerType = (fileType || '').toLowerCase();
      const lowerName = (fileName || '').toLowerCase();

      if (lowerType.includes('docx') || lowerName.endsWith('.docx')) {
        const result = await mammoth.extractRawText({ buffer });
        return res.json({ text: result.value });
      } else {
        // Plain text / markdown fallback
        const text = buffer.toString('utf-8');
        return res.json({ text });
      }
    } catch (err: any) {
      console.error('File extraction error:', err);
      return res.status(500).json({ error: 'Failed to extract text from file' });
    }
  });

  // User feedback endpoint
  app.post('/api/feedback', (req: Request, res: Response) => {
    const { thoughts, topicSuggestion, email } = req.body;
    if (!thoughts || typeof thoughts !== 'string' || thoughts.trim().length === 0) {
      return res.status(400).json({ error: 'Please share your thoughts.' });
    }

    const item: FeedbackRecord = {
      id: 'fb-' + Date.now(),
      thoughts: thoughts.trim(),
      topicSuggestion: topicSuggestion?.trim() || '',
      email: email?.trim() || '',
      createdAt: new Date().toISOString(),
    };

    feedbackStore.push(item);
    return res.json({
      success: true,
      message: 'Thank you! Your feedback helps make Lexi better.',
      id: item.id,
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`LEXI server running on http://localhost:${PORT}`);
  });
}

startServer();
