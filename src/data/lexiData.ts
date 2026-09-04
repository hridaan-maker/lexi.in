import {
  DigitalRightsTopic,
  CreatorRightItem,
  LearnTopic,
  DocumentAnalysisResult,
} from '../types';

export const DEMO_CREATOR_CONTRACT: DocumentAnalysisResult = {
  documentTitle: 'Sample Creator Partnership Agreement',
  documentType: 'Creator Contract',
  analysisDate: 'Fictional Demonstration',
  summary: {
    totalClauses: 5,
    lowConcernCount: 1,
    reviewConcernCount: 2,
    highConcernCount: 2,
    overallTakeaway:
      'This agreement grants the company broad, indefinite rights over whatever you film, gives them authority to modify your likeness, and requires strict exclusivity without guaranteed monthly pay.',
    keyRisks: [
      'Perpetual, royalty-free licensing means you might not get paid for future reruns or commercial reuse.',
      'Morality and unilateral termination clauses let them cancel with zero payout if public opinions shift.',
      'Broad non-compete prohibits you from reviewing competing products for 12 months after the deal ends.',
    ],
    categorySummaries: [
      {
        category: 'Content Rights',
        status: 'High Attention',
        note: 'The company claims worldwide perpetual ownership of all submitted video and audio.',
      },
      {
        category: 'Money',
        status: 'Review',
        note: 'Payment schedule is net-90 days and contingent on arbitrary brand approval.',
      },
      {
        category: 'Intellectual Property',
        status: 'High Attention',
        note: 'Waiver of moral rights prevents you from stopping edits or AI alterations.',
      },
      {
        category: 'Cancellation',
        status: 'Review',
        note: 'The brand can terminate at will, but you are locked in for 180 days.',
      },
      {
        category: 'Liability',
        status: 'Low',
        note: 'Standard indemnification for original copyright infringement.',
      },
    ],
  },
  clauses: [
    {
      id: 'demo-1',
      original:
        'The Company shall have a perpetual, worldwide, royalty-free license to use, reproduce, modify and distribute Content submitted by the Creator across all media now known or hereafter devised.',
      simpleLanguage:
        'The company may be able to use, change and share your content around the world without paying you anything extra, potentially forever.',
      whyItMatters:
        'Even if you leave social media or become much more famous later, they can keep running ads with your face and voice without giving you another cent.',
      concernLevel: 'High Attention',
      category: 'Content Rights',
      questionsToAsk: [
        'How long can you use my content? (Can we cap it at 6 months or 1 year?)',
        'Can you modify my content, voice, or face using AI?',
        'Can I withdraw permission if the brand changes direction?',
      ],
    },
    {
      id: 'demo-2',
      original:
        'Payment of the agreed fee ($450) shall be remitted within ninety (90) business days following final written approval of all deliverables by Brand Quality Review.',
      simpleLanguage:
        'You might have to wait over 4 months to get paid, and only if the brand decides your video meets their subjective "quality" standard.',
      whyItMatters:
        'If you spent your own money on lighting, props, or editing, you will be out-of-pocket for a long time, and if they delay approval, payment stays frozen.',
      concernLevel: 'Review',
      category: 'Money',
      questionsToAsk: [
        'Can we change payment terms to Net-30 days upon delivery?',
        'What happens if the brand does not review within 5 business days?',
        'Is there a 50% deposit upfront before filming begins?',
      ],
    },
    {
      id: 'demo-3',
      original:
        'Creator agrees not to endorse, mention, display, or review any competing consumer beverage or lifestyle brand for a period of twelve (12) months following termination of this Agreement.',
      simpleLanguage:
        'You cannot work with or even talk about any other drink or lifestyle brand for an entire year after this one campaign ends.',
      whyItMatters:
        'For a $450 one-off video, this locks you out of dozens of lucrative opportunities with other sponsors during your prime creator growth window.',
      concernLevel: 'High Attention',
      category: 'Advertising',
      questionsToAsk: [
        'Can the exclusivity be limited only during the 30-day active campaign window?',
        'Can you provide a specific list of direct competitors instead of all lifestyle brands?',
        'Is there an exclusivity fee to compensate for turning down other deals?',
      ],
    },
    {
      id: 'demo-4',
      original:
        'The Creator hereby irrevocably waives all moral rights, including rights of attribution and integrity, in respect of the deliverables.',
      simpleLanguage:
        'You give up the right to be credited as the creator, and you cannot stop them if they chop up your video in a way you find embarrassing.',
      whyItMatters:
        'They could remix your voice or use your footage out of context in ways that hurt your personal reputation or make you endorse views you disagree with.',
      concernLevel: 'Review',
      category: 'Intellectual Property',
      questionsToAsk: [
        'Can we remove the moral rights waiver and require creator tagging on social posts?',
        'Do I have approval rights over any remixes or shortened cuts?',
      ],
    },
    {
      id: 'demo-5',
      original:
        'Creator warrants that all submitted content is original and does not infringe upon any third-party copyrights, trademarks, or proprietary rights.',
      simpleLanguage:
        'You promise that you actually made everything in the video and did not use copyrighted songs, movie clips, or images without permission.',
      whyItMatters:
        'If you use a popular trending sound without a commercial license and the record label sues, you would be held responsible for the legal costs.',
      concernLevel: 'Low',
      category: 'Liability',
      questionsToAsk: [
        'Will the brand provide licensed music tracks or audio from their own pre-cleared library?',
      ],
    },
  ],
};

export const SAMPLE_TEXTS = {
  creator: `MEMORANDUM OF INFLUENCER AGREEMENT
This Agreement is entered into between Aurora Beverages Inc. ("Company") and the Content Creator.

1. CONTENT LICENSE & USAGE
The Company shall have a perpetual, worldwide, royalty-free license to use, reproduce, modify, translate, and distribute Content submitted by the Creator across all media now known or hereafter devised, including paid digital advertisements, print collateral, and television broadcasts. The Creator hereby irrevocably waives all moral rights in respect of the deliverables.

2. COMPENSATION & PAYMENT TERMS
Total compensation for one (1) video post and three (3) story updates shall be USD $450.00. Payment of the agreed fee shall be remitted within ninety (90) business days following final written approval of all deliverables by Brand Quality Review.

3. EXCLUSIVITY & NON-COMPETE
Creator agrees not to endorse, mention, display, review, or appear in content featuring any competing consumer beverage or lifestyle brand for a period of twelve (12) months following termination of this Agreement.

4. INDEMNIFICATION & ORIGINALITY
Creator warrants that all submitted content is original and does not infringe upon any third-party copyrights, trademarks, or rights of publicity.`,

  privacy: `ACME INTERACTIVE PHOTO APP PRIVACY POLICY (LAST REVISED 2026)

1. DATA COLLECTION & INVASIVE TELEMETRY
When you use our photo styling filters, we collect facial geometry vectors, device telemetry, precise GPS coordinates, contact book metadata, and microphone audio buffers during active camera sessions. 

2. THIRD PARTY DATA SHARING & TARGETING
We may disclose personal data, device identifiers, and behavioral profiles to affiliated third-party advertising partners, data brokers, and research conglomerates without additional prior notice to you.

3. DATA RETENTION & ACCOUNT TERMINATION
We retain biometric identifiers and usage records indefinitely, even after account deletion, for machine learning model training and fraud prevention. You waive the right to request automated erasure of derivative datasets.

4. USER CONSENT & MINOR PARTICIPATION
By downloading the application, users under 18 confirm that their parent or legal guardian has reviewed and explicitly consented to all data harvesting terms herein.`,

  terms: `GLIDE SOCIAL STREAMING NETWORK - TERMS OF SERVICE

1. USER-GENERATED CONTENT OWNERSHIP
You retain copyright in original broadcasts, but grant Glide an irrevocable, sublicensable, royalty-free, perpetual license to monetize, broadcast, excerpt, and create derivative works from your livestreams worldwide.

2. AUTOMATIC RENEWALS & CHARGES
Subscriptions renew automatically at $14.99/month unless cancelled at least 72 hours prior to billing. All sales and in-app coin purchases are non-refundable under any circumstances.

3. MANDATORY ARBITRATION & CLASS ACTION WAIVER
You agree that all disputes must be resolved individually through binding private arbitration. You expressly waive any right to participate in a class action lawsuit or jury trial.

4. ACCOUNT SUSPENSION AT WILL
Glide reserves the unilateral right to suspend, demonetize, or permanently terminate your channel at any time without reason, notice, or payout of accrued virtual tokens.`,
};

export const DIGITAL_RIGHTS_TOPICS: DigitalRightsTopic[] = [
  // Privacy
  {
    id: 'privacy-personal-data',
    section: 'Privacy',
    title: 'Personal Data',
    badge: 'Privacy',
    simpleExplanation:
      'Any piece of information that can identify you directly (like your full name, email, phone number) or indirectly (like your gaming username, IP address, or school uniform in a photo).',
    whyItMatters:
      'Companies build massive profiles based on fragments of your digital footprint to target your vulnerabilities, predict your mood, and sell your habits to advertisers.',
    practicalTips: [
      'Use privacy-focused email aliases (like Hide My Email or SimpleLogin) for random sign-ups.',
      'Never include your real birth year or school name in public usernames.',
      'Regularly audit what apps have permission to see your contacts list.',
    ],
    teenScenario:
      'Signing up for a free photo editing app that asks for your phone number and full name before letting you export a meme.',
    questionsToAsk: [
      'Why does a calculator or photo filter app need my real name and phone number?',
      'Can I use this app anonymously as a guest?',
    ],
  },
  {
    id: 'privacy-data-collection',
    section: 'Privacy',
    title: 'Data Collection',
    badge: 'Privacy',
    simpleExplanation:
      'The process apps and websites use to gather details about how you tap, what you search, how long you linger on a video, and what other apps are running.',
    whyItMatters:
      'You are paying with your attention and behavioral data even when an app is advertised as completely "free".',
    practicalTips: [
      'Turn off "Cross-App Tracking" in your phone settings.',
      'Clear app caches and periodic history every month.',
      'Check privacy nutrition labels on iOS and Android before downloading.',
    ],
    teenScenario:
      'Watching three skateboard trick clips, and suddenly your whole feed is flooded with $120 shoes and board brands.',
    questionsToAsk: [
      'What specific data is tracked while the app is running in the background?',
      'Does the app collect data when I am not actively using it?',
    ],
  },
  {
    id: 'privacy-data-sharing',
    section: 'Privacy',
    title: 'Data Sharing & Third Parties',
    badge: 'Privacy',
    simpleExplanation:
      'When an app gives, sells, or rents your information to outside companies like data brokers, advertising networks, or analytics trackers.',
    whyItMatters:
      'Once an app hands your data over to a third party, you lose control over who gets to see it, where it is stored, or how securely it is protected.',
    practicalTips: [
      'Opt out of "Sale of Personal Information" toggles in app settings.',
      'Beware of clauses that say "with our trusted corporate partners".',
      'Look for the phrase "We do not sell personal data to data brokers".',
    ],
    teenScenario:
      'A quiz app asking "What Harry Potter house are you?" quietly packaging your responses to sell to college marketing agencies.',
    questionsToAsk: [
      'Who are the "third-party partners" listed in the privacy policy?',
      'Can I opt out of data sharing without losing core app features?',
    ],
  },
  {
    id: 'privacy-location-data',
    section: 'Privacy',
    title: 'Location Data & Tracking',
    badge: 'Privacy',
    simpleExplanation:
      'GPS coordinates, Wi-Fi networks, and Bluetooth beacons that reveal exactly where you sleep, where you go to school, and where you hang out with friends.',
    whyItMatters:
      'Precise location data can compromise your physical safety and can be pieced together to map your daily routine down to the minute.',
    practicalTips: [
      'Always select "While Using App" rather than "Always Allow" for location permissions.',
      'Use "Approximate Location" rather than "Precise Location" for weather and local search.',
      'Turn off geo-tagging in your camera app settings.',
    ],
    teenScenario:
      'Posting a photo outside your local library while your phone attaches exact latitude and longitude coordinates into the photo metadata.',
    questionsToAsk: [
      'Does this app need my exact street address, or is city-level sufficient?',
      'Is my location history saved on company servers or kept on my device?',
    ],
  },
  {
    id: 'privacy-cookies-retention',
    section: 'Privacy',
    title: 'Cookies & Data Retention',
    badge: 'Privacy',
    simpleExplanation:
      'Small tracking files placed on your browser, plus rules about how many months or years a company keeps your old chats, photos, and searches.',
    whyItMatters:
      'Some apps never delete your old photos or chat logs even if you delete your profile, keeping them stored indefinitely for training AI models.',
    practicalTips: [
      'Reject "Non-Essential Cookies" on cookie banners.',
      'Use browser privacy containers (like Firefox Multi-Account Containers or Brave shields).',
      'Request permanent account deletion via data settings when abandoning an old game.',
    ],
    teenScenario:
      'A video app storing every comment you typed when you were 13 years old on their backup servers forever.',
    questionsToAsk: [
      'How long are my search queries and chat histories kept on record?',
      'Does "deleting an account" actually wipe the data from their servers?',
    ],
  },

  // Cybersecurity
  {
    id: 'cyber-account-security',
    section: 'Cybersecurity',
    title: 'Account Security & 2FA',
    badge: 'Cybersecurity',
    simpleExplanation:
      'Protective barriers that keep unauthorized people out of your creator channels, Discord servers, gaming accounts, and school portals.',
    whyItMatters:
      'If someone hacks your Instagram or YouTube creator account, they can delete years of hard work, scam your followers, or lock you out permanently.',
    practicalTips: [
      'Use an authenticator app (Google Authenticator, Aegis) instead of SMS codes.',
      'Generate unique 16+ character passphrases for every single service.',
      'Save your one-time backup recovery codes in a physical notebook.',
    ],
    teenScenario:
      'Receiving a fake DM from "Instagram Copyright Team" asking you to click a link to verify your badge.',
    questionsToAsk: [
      'Does this platform support hardware security keys or authenticator apps?',
      'What is the recovery protocol if my phone is lost or stolen?',
    ],
  },
  {
    id: 'cyber-data-breaches',
    section: 'Cybersecurity',
    title: 'Data Breaches & Leaks',
    badge: 'Cybersecurity',
    simpleExplanation:
      'When hackers break into a company’s central database and steal thousands or millions of users’ passwords, credit cards, or private messages.',
    whyItMatters:
      'If you reuse the same password across multiple sites, a breach at one small gaming forum can give hackers access to your main email and banking apps.',
    practicalTips: [
      'Check HaveIBeenPwned.com to see if your email was caught in recent breaches.',
      'Never reuse passwords between entertainment apps and primary email.',
      'Use a reputable password manager like Bitwarden or 1Password.',
    ],
    teenScenario:
      'A minor shoe raffle site gets hacked, and within hours bots try your email/password on Netflix, Roblox, and PayPal.',
    questionsToAsk: [
      'How does this company notify users when their database is breached?',
      'Is my password hashed and salted with modern encryption standards?',
    ],
  },
  {
    id: 'cyber-unauthorized-access',
    section: 'Cybersecurity',
    title: 'Unauthorized Access & Session Hijacking',
    badge: 'Cybersecurity',
    simpleExplanation:
      'When someone steals your active login "token" or cookie—often through malicious browser extensions or cracked game mods—and controls your account without needing your password.',
    whyItMatters:
      'Session hijacking bypasses 2FA completely because the attacker tricks the server into thinking they are already logged in on your browser.',
    practicalTips: [
      'Never download suspicious .scr, .bat, or cracked .exe files from Discord or Telegram.',
      'Audit your logged-in active sessions in app settings and force "Log out all devices".',
      'Keep your browser and operating system updated with security patches.',
    ],
    teenScenario:
      'Downloading a free "Roblox Robux generator" or "Minecraft shader" extension that secretly steals your browser cookies.',
    questionsToAsk: [
      'Does the service offer a one-click button to terminate all active sessions?',
      'Are session cookies invalidated when a password change occurs?',
    ],
  },

  // Online Safety
  {
    id: 'safety-cyberbullying',
    section: 'Online Safety',
    title: 'Cyberbullying & Harassment',
    badge: 'Safety',
    simpleExplanation:
      'Repeated, aggressive, or hostile digital behavior intended to intimidate, shame, or degrade someone across comments, group chats, or streams.',
    whyItMatters:
      'Online platforms have a duty of care to protect young users, but their automated filters frequently miss coded harassment or mass-reporting brigading.',
    practicalTips: [
      'Take screenshots with timestamps before blocking or reporting accounts.',
      'Restrict comment sections to mutual followers when drama flares up.',
      'Know your rights under regional cyberbullying and anti-stalking laws.',
    ],
    teenScenario:
      'An anonymous burner account leaving coordinated hateful comments on your TikTok videos every day at 4 PM.',
    questionsToAsk: [
      'What are the platform’s specific escalation paths for severe harassment?',
      'Does the platform notify the harasser when you submit a report?',
    ],
  },
  {
    id: 'safety-impersonation',
    section: 'Online Safety',
    title: 'Impersonation & Fake Accounts',
    badge: 'Safety',
    simpleExplanation:
      'When someone creates an account using your photos, name, and bio to trick your friends, solicit money, or ruin your reputation.',
    whyItMatters:
      'Identity theft on social platforms happens in minutes, but getting customer support to take down an impersonator can take weeks if you don’t know the exact verification process.',
    practicalTips: [
      'Watermark high-resolution creative photos with your handle.',
      'Never send personal ID photos over unencrypted chat apps to prove who you are.',
      'File an official impersonation claim through the platform’s designated legal portal.',
    ],
    teenScenario:
      'A scammer creates "@yourname_official1" using your headshot and starts DMing your followers asking for gift cards.',
    questionsToAsk: [
      'What documentation does the platform require to prove I am the real person?',
      'Can I report copyright infringement on the photo they stole for their profile pic?',
    ],
  },
  {
    id: 'safety-reporting-content',
    section: 'Online Safety',
    title: 'Reporting Harmful Content & Minor Safety',
    badge: 'Safety',
    simpleExplanation:
      'Using platform safety tools and regional law enforcement portals to report non-consensual imagery, doxxing, predatory behavior, or violent threats.',
    whyItMatters:
      'Minors have special protected legal status in many countries, meaning platforms are under stricter legal timelines to remove harm against children.',
    practicalTips: [
      'Use resources like TakeItDown.ncmec.org to prevent non-consensual images of minors from circulating.',
      'In India, report serious cyber crimes through 1930 or cybercrime.gov.in.',
      'Confide in a trusted adult or school counselor when threats escalate.',
    ],
    teenScenario:
      'Someone in a Discord server threatens to leak your personal home address and phone number (doxxing).',
    questionsToAsk: [
      'Does the platform cooperate with cyber cells to trace IP addresses of doxxers?',
      'How quickly does the emergency moderation queue respond to threats of violence?',
    ],
  },
];

export const CREATOR_RIGHTS_ITEMS: CreatorRightItem[] = [
  {
    id: 'cr-brand-contracts',
    title: 'Brand Deals & Sponsorship Agreements',
    status: 'Available',
    category: 'Contracts',
    summary:
      'The foundational agreement between a creator and a brand defining what you film, when you post, how much you get paid, and how revisions work.',
    keyRisks: [
      'Uncapped revision rounds forcing you to reshoot the same video 5 times.',
      'Vague delivery deadlines with harsh late penalties.',
      'Unpaid "spec work" where you pitch complete ideas that the brand steals.',
    ],
    creatorTips: [
      'Always limit revisions to two rounds of minor edits.',
      'Never shoot footage until the brand approves the creative brief in writing.',
      'Require a 50% deposit before turning on the camera.',
    ],
    redFlags: [
      '"Creator shall revise content until Brand is 100% satisfied with no added cost"',
      '"Payment contingent on video achieving 50,000 views in 48 hours"',
    ],
  },
  {
    id: 'cr-content-ownership',
    title: 'Content Ownership vs. Licensing',
    status: 'Available',
    category: 'IP & Rights',
    summary:
      'The critical legal difference between letting a brand BORROW your video for an ad vs. GIVING THEM THE COPYRIGHT so they own it forever.',
    keyRisks: [
      'Losing ownership of your original sketches, recurring characters, or catchphrases.',
      'Brand licensing your face to television commercials without extra compensation.',
      'Inability to include your own video in your future portfolio.',
    ],
    creatorTips: [
      'Grant a "limited, non-exclusive license" instead of assigning ownership.',
      'Specify the exact platform (e.g. Instagram Reels only, no billboard or TV).',
      'Set an expiration date (e.g. 30, 60, or 90 days of ad usage).',
    ],
    redFlags: [
      '"Work made for hire" (means the brand owns your video from the moment you hit record)',
      '"Creator assigns all right, title and interest including copyright"',
    ],
  },
  {
    id: 'cr-exclusivity',
    title: 'Exclusivity & Non-Compete Clauses',
    status: 'Available',
    category: 'Career Freedom',
    summary:
      'Clauses where a brand forbids you from collaborating with, wearing, or reviewing competing products for a set period of time.',
    keyRisks: [
      'Broad definitions like "any snack, beverage, or tech product" blocking your income.',
      'Exclusivity running for 6–12 months after a tiny $200 sponsorship.',
      'Accidentally violating the clause by wearing a competitor t-shirt in a background vlog.',
    ],
    creatorTips: [
      'Exclusivity must carry an extra fee—never give it away for free.',
      'Limit exclusivity to the exact product category (e.g., energy drinks, not all food).',
      'Cap the duration strictly to the active campaign window.',
    ],
    redFlags: [
      '"Creator shall not mention any competing or similar product for 180 days"',
      'No extra payment provided for the exclusivity restriction',
    ],
  },
  {
    id: 'cr-likeness-ai',
    title: 'Name, Image, Likeness & AI Voice Rights',
    status: 'Available',
    category: 'Identity Protection',
    summary:
      'Clauses giving companies permission to duplicate, clone, or manipulate your face, voice, and likeness in marketing campaigns.',
    keyRisks: [
      'Brands using AI voice clones to generate future commercials without your knowledge.',
      'Deepfake or synthetic media alterations that make you say things you oppose.',
      'Perpetual digital avatar rights.',
    ],
    creatorTips: [
      'Explicitly forbid AI voice cloning and generative synthetic likeness usage.',
      'Require prior written approval on any digital composite or thumbnail edit.',
      'Include a right to terminate likeness licenses immediately upon breach.',
    ],
    redFlags: [
      '"Company may simulate Creator voice and likeness via computational methods"',
      '"Waiver of right of publicity across metaverse and synthetic media"',
    ],
  },
  {
    id: 'cr-payment-terms',
    title: 'Payment Schedules & Net Terms',
    status: 'Available',
    category: 'Money',
    summary:
      'The exact financial rules of when money transfers into your account, who pays bank fees, and what happens if a brand ghosts you.',
    keyRisks: [
      'Net-90 or Net-120 terms meaning you wait up to 4 months after posting.',
      'Foreign transaction and currency conversion fees deducted from your payout.',
      'Subjective "brand satisfaction" holdbacks.',
    ],
    creatorTips: [
      'Standard professional creator terms are Net-15 or Net-30.',
      'Add a 5% monthly late payment fee for invoices unpaid after 30 days.',
      'If you are under 18, set up a custodial bank account with your parents.',
    ],
    redFlags: [
      '"Payment upon client receipt of revenue from distributor" (contingent pay)',
      '"Brand reserves right to withhold payment if engagement targets are unmet"',
    ],
  },
  {
    id: 'cr-termination',
    title: 'Termination & Morality Clauses',
    status: 'Available',
    category: 'Legal Risk',
    summary:
      'Rules describing how either party can cancel the deal, and "morality clauses" that allow brands to pull sponsorships over creator controversies.',
    keyRisks: [
      'One-sided termination where the brand can cancel at any time, but you cannot.',
      'Vague morality rules that penalize you for personal political or social opinions.',
      'Clawback clauses requiring you to refund money already paid and spent.',
    ],
    creatorTips: [
      'Ensure "kill fees" exist: if the brand cancels after you film, you keep 100% of the fee.',
      'Morality clauses must require criminal conviction or intentional fraud, not rumors.',
      'Both parties must have equal rights to terminate for breach.',
    ],
    redFlags: [
      '"Company may terminate for convenience with no payment owed"',
      '"Creator shall immediately refund all compensation upon brand notice"',
    ],
  },
  // Coming Soon Items
  {
    id: 'cr-automated-redlining',
    title: 'AI Contract Redlining & Markup',
    status: 'Coming Soon',
    category: 'AI Tooling',
    summary:
      'Upload a PDF contract and have Lexi automatically draft teen-friendly counter-clauses and email templates to send back to the brand manager.',
    keyRisks: [],
    creatorTips: [],
    redFlags: [],
  },
  {
    id: 'cr-rate-benchmark',
    title: 'Gen Z Creator Rate-Card Benchmarker',
    status: 'Coming Soon',
    category: 'Earnings',
    summary:
      'Anonymous community-backed data on what brands actually pay teen creators per 10k views across YouTube, Instagram, and TikTok.',
    keyRisks: [],
    creatorTips: [],
    redFlags: [],
  },
  {
    id: 'cr-parent-cosign',
    title: 'Parent / Guardian Co-Sign Protocol',
    status: 'Coming Soon',
    category: 'Compliance',
    summary:
      'Step-by-step guidance for teen creators under 18 navigating minor contract enforceability, custodial bank accounts, and Coogan trust accounts.',
    keyRisks: [],
    creatorTips: [],
    redFlags: [],
  },
];

export const LEARN_MODULES: LearnTopic[] = [
  {
    id: 'privacy-101',
    title: 'Privacy 101: The Currency of Free Apps',
    subtitle: 'Why free apps aren’t free and how your clicks turn into corporate revenue',
    readTime: '3 min read',
    summary:
      'When you do not pay for a product with cash, you are paying with your attention, habits, location, and social graph.',
    keyPoints: [
      {
        label: 'The Data Broker Economy',
        text: 'Data brokers are companies you have never heard of that quietly assemble files on millions of teenagers, cataloging everything from shoe sizes to anxiety symptoms.',
        example:
          'A study app sharing your quiz scores with test-prep marketing agencies without a pop-up warning.',
      },
      {
        label: 'Passive vs. Active Tracking',
        text: 'Active tracking is what you enter (your birthday, profile pic). Passive tracking happens silently (how fast you scroll past an ex’s photo, battery percentage, Wi-Fi network).',
        example:
          'Apps reading your battery level to determine if you are stressed or more likely to buy impulse food delivery.',
      },
      {
        label: 'The "Consent" Illusion',
        text: 'Clicking "I Agree" on a 42-page privacy policy written in college-level legal prose is not genuine informed consent.',
        example:
          'Hiding a permission to share contacts on page 19 under section 14(b)(iv).',
      },
    ],
  },
  {
    id: 'cybersecurity-101',
    title: 'Cybersecurity 101: Keeping Your Digital Vault Locked',
    subtitle: 'Real defense against social engineering, token theft, and account takeovers',
    readTime: '4 min read',
    summary:
      'Cybersecurity is not about complex coding; 95% of breaches happen because someone was tricked into clicking a link or reused a leaked password.',
    keyPoints: [
      {
        label: 'Passphrases Beat Passwords',
        text: 'Short passwords with random symbols are easy for computers to crack and hard for humans to remember. Four random dictionary words strung together are virtually unbreakable.',
        example:
          '"BlueFalconTacos99!" is millions of times stronger than "P@ssw0rd123".',
      },
      {
        label: 'The Trap of Modded APKs and Free Cheats',
        text: 'Cracked game clients and pirated software almost always bundle credential stealers that grab your Discord tokens and saved browser passwords.',
        example:
          'Downloading a Fortnite skin swapper that secretly logs your email and wipes your game inventory.',
      },
      {
        label: 'Phishing Gets Personal (Spear Phishing)',
        text: 'Modern scammers study your public social media posts to mention your friends, your favorite games, or your recent trip so you trust their malicious links.',
        example:
          'A DM saying "Hey, someone is using your photos on this forum: click here to report them".',
      },
    ],
  },
  {
    id: 'contracts-101',
    title: 'Contracts 101: The Basics of an Agreement',
    subtitle: 'What actually makes an agreement legally binding and what to look out for',
    readTime: '4 min read',
    summary:
      'A contract is essentially a promise backed by an exchange of value. If you agree to terms, both sides have enforceable obligations.',
    keyPoints: [
      {
        label: 'Offer + Acceptance + Consideration',
        text: 'For a contract to exist, there must be a clear proposal, an agreement, and "consideration" (something of value exchanged, like money or free software access).',
        example:
          'You get to play the game (value) in exchange for agreeing to let them monitor game crashes and show ads (value).',
      },
      {
        label: 'Can Minors Even Sign Contracts?',
        text: 'In many legal systems (including common law and Indian contract law), agreements entered into by minors under 18 have unique restrictions or may be voidable to protect young people from exploitation.',
        example:
          'Why major brand deals require your parent or legal guardian to sign as a co-signatory.',
      },
      {
        label: 'The Danger of Boilerplate',
        text: '"Boilerplate" refers to standard legal sections at the end of agreements (arbitration, governing law, severability). Companies hide aggressive terms here because they know people skim them.',
        example:
          'A clause forcing you to pay for the company’s lawyers even if you win a dispute.',
      },
    ],
  },
  {
    id: 'creator-rights-101',
    title: 'Creator Rights: Navigating the Sponsor World',
    subtitle: 'How teen influencers can protect their art, money, and time',
    readTime: '5 min read',
    summary:
      'Content creation is real creative labor. As an influencer or artist, your audience and your creative voice are your most valuable assets.',
    keyPoints: [
      {
        label: 'Deliverables Must Be Crystal Clear',
        text: 'Never agree to "make some videos for us". Specify exact count, length in seconds, tags required, and whether you will post it on your main feed or temporary story.',
        example:
          '"One 60-second YouTube Short posted on Creator channel between 10am-2pm EST with #ad tag".',
      },
      {
        label: 'FTC and Advertising Disclosures',
        text: 'If you receive free products, money, or discounts in exchange for reviewing an item, you are legally required to clearly disclose the sponsorship (#ad, #sponsored).',
        example:
          'Failing to disclose a paid energy drink sponsorship can lead to account bans or regulatory warnings.',
      },
      {
        label: 'Usage Rights Cost Money',
        text: 'If a brand wants to "whitelist" your post (run ads using your profile as the sponsor handle), that requires a separate ad budget paid to you.',
        example:
          'Charging an extra 30% of your base fee for 30 days of paid advertising usage.',
      },
    ],
  },
  {
    id: 'ip-basics-101',
    title: 'IP Basics: Copyright, Trademarks, and Fair Use',
    subtitle: 'Who owns the music, art, and memes you make and remix',
    readTime: '3 min read',
    summary:
      'Intellectual Property (IP) gives creators legal protection over intangible inventions, artwork, writing, and brand identities.',
    keyPoints: [
      {
        label: 'Automatic Copyright Protection',
        text: 'You don’t need a legal stamp; the moment you write a song, record a video, or draw an illustration, you automatically hold the copyright to that original work.',
        example:
          'Another creator taking your original animation without credit and posting it to their channel.',
      },
      {
        label: 'Fair Use is Not an Absolute Shield',
        text: 'Just writing "No copyright infringement intended" in your YouTube description does NOT protect you from copyright strikes or legal takedowns.',
        example:
          'Using 30 seconds of a commercial pop song in your video without a license.',
      },
      {
        label: 'Copyright vs. Trademark',
        text: 'Copyright protects creative expression (your videos, scripts, drawings). Trademark protects brand identifiers (your logo, channel name, catchphrase).',
        example:
          'Nike’s swoosh is a trademark; the song playing in their commercial is protected by copyright.',
      },
    ],
  },
];

export const INDIA_FOCUS_DATA = {
  title: 'India Digital Rights & Youth Safety Roadmap',
  badge: 'India Focus',
  description:
    'Lexi is initially architected for young people in India navigating the country’s evolving digital privacy and creator ecosystem. Here are key legal literacy pillars guiding our framework:',
  pillars: [
    {
      title: 'Digital Personal Data Protection (DPDP) Act Principles',
      category: 'Data Privacy',
      summary:
        'The DPDP framework sets strict standards for processing data of children (defined as under 18), prohibiting behavioral tracking, targeted advertisements aimed at minors, and processing that could harm a child’s well-being.',
      status: 'Verified Foundation',
      note: 'Lexi flags clauses that attempt to harvest minor telemetry or demand blanket waivers without verifiable parental consent.',
    },
    {
      title: 'Cyber Crime Reporting & Digital Safety',
      category: 'Cyber Safety',
      summary:
        'Young citizens facing cyberbullying, impersonation, or online financial fraud have direct legal remedies under the Information Technology Act and the National Cyber Crime Portal.',
      status: 'Helpline & Resources',
      note: 'National Cyber Crime Helpline: 1930 | Official portal: cybercrime.gov.in. Lexi educates users on evidence collection.',
    },
    {
      title: 'Indian Creator Contracts & Minors',
      category: 'Contracts & IP',
      summary:
        'Under Section 11 of the Indian Contract Act 1872, agreements entered into by minors have distinct legal enforceability parameters. Brand agreements for teen creators require parent/guardian execution.',
      status: 'Creator Literacy',
      note: 'Lexi educates young influencers on why brand deals must involve a parent or guardian as the contracting party.',
    },
  ],
};
