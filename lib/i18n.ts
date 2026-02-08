export type Lang = 'en' | 'ja';

const supportedLangs: Lang[] = ['en', 'ja'];

export function isSupportedLang(value: string): value is Lang {
  return supportedLangs.includes(value as Lang);
}

export function getLangFromPathname(pathname: string | null): Lang {
  if (!pathname) return 'en';

  const cleanPath = pathname.split('?')[0].split('#')[0];
  const segments = cleanPath.split('/').filter(Boolean);
  const first = segments[0];

  return first && isSupportedLang(first) ? first : 'en';
}

export function getHomePath(lang: Lang): string {
  return lang === 'ja' ? '/ja' : '/en';
}

function stripLangPrefix(path: string): string {
  const cleanPath = path.split('?')[0].split('#')[0] || '/';
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments[0] && isSupportedLang(segments[0])) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }

  return cleanPath;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  if (!path || path === '/') return getHomePath(lang);
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }

  const hashIndex = path.indexOf('#');
  const queryIndex = path.indexOf('?');
  const splitIndex =
    hashIndex === -1 ? queryIndex : queryIndex === -1 ? hashIndex : Math.min(hashIndex, queryIndex);

  const pathname = splitIndex === -1 ? path : path.slice(0, splitIndex);
  const suffix = splitIndex === -1 ? '' : path.slice(splitIndex);

  const basePath = stripLangPrefix(pathname.startsWith('/') ? pathname : `/${pathname}`);

  if (basePath === '/') {
    return `${getHomePath(lang)}${suffix}`;
  }

  return `/${lang}${basePath}${suffix}`;
}

type Localized<T> = {
  en: T;
  ja?: T;
};

function t<T>(value: Localized<T>, lang: Lang): T {
  return value[lang] ?? value.en;
}

export const navCopy = {
  items: (lang: Lang) => [
    { name: t({ en: 'Home', ja: 'ホーム' }, lang), href: getLocalizedPath(lang, '/') },
    { name: t({ en: 'About Me', ja: 'プロフィール' }, lang), href: getLocalizedPath(lang, '/about') },
    { name: t({ en: 'Lessons & Fees', ja: 'レッスン・料金' }, lang), href: getLocalizedPath(lang, '/lessons') },
  ],
  contactCta: (lang: Lang) => t({ en: 'Contact Me', ja: 'お問い合わせ' }, lang),
  contactHref: (lang: Lang) => getLocalizedPath(lang, '/booking'),
  mobileGetInTouch: (lang: Lang) => t({ en: 'Get in touch', ja: 'お問い合わせ' }, lang),
};

export const footerCopy = {
  description: (lang: Lang) =>
    t(
      {
        en: 'Personalized Japanese language tutoring for all levels. Experience authentic culture and language learning in Toulouse or from anywhere online.',
        ja: '初心者から上級者まで対応する、ひとりひとりに合わせた日本語レッスン。トゥールーズ対面またはオンラインで受講できます。',
      },
      lang,
    ),
  explore: (lang: Lang) => t({ en: 'Explore', ja: 'メニュー' }, lang),
  contactTitle: (lang: Lang) => t({ en: 'Contact Manaka', ja: '連絡先' }, lang),
  locationLabel: (lang: Lang) => t({ en: 'Location', ja: '場所' }, lang),
  locationValue: (lang: Lang) => t({ en: 'Toulouse, France & Online', ja: 'フランス・トゥールーズ / オンライン' }, lang),
  emailLabel: (lang: Lang) => t({ en: 'Email', ja: 'メール' }, lang),
  copyright: (lang: Lang) =>
    t(
      {
        en: '© 2024 Manaka Japanese. Learning Japanese made simple.',
        ja: '© 2024 Manaka Japanese. わかりやすく続けやすい日本語学習。',
      },
      lang,
    ),
  privacy: (lang: Lang) => t({ en: 'Privacy Policy', ja: 'プライバシーポリシー' }, lang),
  terms: (lang: Lang) => t({ en: 'Terms of Service', ja: '利用規約' }, lang),
};

export const homeCopy = {
  eyebrowJa: () => 'トゥールーズの日本語レッスン',
  eyebrowEn: (lang: Lang) => t({ en: 'Japanese Lessons in Toulouse', ja: 'トゥールーズの日本語レッスン' }, lang),
  titlePrefix: (lang: Lang) => t({ en: 'Learn Japanese in Toulouse', ja: 'トゥールーズで日本語を学ぶ' }, lang),
  titleAccent: (lang: Lang) => t({ en: 'or Online.', ja: 'オンラインでも。' }, lang),
  description: (lang: Lang) =>
    t(
      {
        en: 'Lessons for beginners to advanced learners, JLPT N5-N3 preparation, and fun classes for kids and teens. Taught in English with practical, personalized guidance.',
        ja: '初心者から上級者まで対応。JLPT N5-N3対策、子ども向け・ティーン向けレッスンにも対応しています。英語でわかりやすく丁寧に指導します。',
      },
      lang,
    ),
  ctaPrimary: (lang: Lang) => t({ en: 'Book a Trial Lesson', ja: '体験レッスンを予約' }, lang),
  ctaSecondary: (lang: Lang) => t({ en: 'View Lessons & Fees', ja: 'レッスン・料金を見る' }, lang),
  lessonFormatsTitle: (lang: Lang) => t({ en: 'Lesson Formats', ja: 'レッスン形式' }, lang),
  lessonFormatsDesc: (lang: Lang) =>
    t(
      {
        en: 'Choose the format that matches your goals, level, and schedule.',
        ja: '目的・レベル・スケジュールに合う形式をお選びください。',
      },
      lang,
    ),
  howLessonsWorkTitleLine1: (lang: Lang) => t({ en: 'How Lessons', ja: 'レッスンの' }, lang),
  howLessonsWorkTitleLine2: (lang: Lang) => t({ en: 'Work', ja: '流れ' }, lang),
  howLessonsWorkDesc: (lang: Lang) =>
    t(
      {
        en: 'A clear structure designed around your level, your goals, and consistent progress.',
        ja: 'レベルと目標に合わせて、無理なく続けられる学習ステップで進めます。',
      },
      lang,
    ),
  imageQuote: (lang: Lang) =>
    t(
      {
        en: 'Practical lessons, clear goals, and real progress.',
        ja: '実践的なレッスンで、目標を明確に、着実に上達。',
      },
      lang,
    ),
  imageAlt: (lang: Lang) => t({ en: 'Japanese learning materials', ja: '日本語学習の教材' }, lang),
};

export const homeFormats = (lang: Lang) => [
  {
    title: t({ en: 'Private Lessons', ja: 'プライベートレッスン' }, lang),
    desc: t(
      {
        en: '1:1 lessons personalized to your level and goals. Best for focused, fast progress.',
        ja: '1対1で目標とレベルに合わせて進めます。集中して早く伸ばしたい方におすすめです。',
      },
      lang,
    ),
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1400&auto=format&fit=crop',
    price: t({ en: 'From EUR 35 / hour', ja: '35ユーロ / 1時間〜' }, lang),
  },
  {
    title: t({ en: 'Small Group Lessons', ja: '少人数グループレッスン' }, lang),
    desc: t(
      {
        en: 'Conversation-focused lessons in small groups with clear structure and shared goals.',
        ja: '少人数で会話中心に学びます。構成が明確で、同じ目標の仲間と進められます。',
      },
      lang,
    ),
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
    price: t({ en: 'From EUR 20 / hour per student', ja: '1名あたり 20ユーロ / 1時間〜' }, lang),
  },
  {
    title: t({ en: 'Online Lessons', ja: 'オンラインレッスン' }, lang),
    desc: t(
      {
        en: 'Flexible online classes in English with materials adapted to your level and needs.',
        ja: 'オンラインで柔軟に受講できます。レベルと目的に合わせた教材を使用します。',
      },
      lang,
    ),
    image: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=1400&auto=format&fit=crop',
    price: t({ en: 'From EUR 30 / hour', ja: '30ユーロ / 1時間〜' }, lang),
  },
];

export const homeSteps = (lang: Lang) => [
  {
    title: t({ en: 'Level Check', ja: 'レベルチェック' }, lang),
    desc: t(
      {
        en: 'We start with a trial lesson to understand your current level and goals.',
        ja: 'まず体験レッスンで、現在のレベルと目標を確認します。',
      },
      lang,
    ),
  },
  {
    title: t({ en: 'Personal Plan', ja: '学習プラン' }, lang),
    desc: t(
      {
        en: 'Private lessons are tailored to each learner. Group lessons focus on guided conversation.',
        ja: '個別レッスンは一人ひとりに合わせて調整。グループでは会話練習を中心に進めます。',
      },
      lang,
    ),
  },
  {
    title: t({ en: 'Consistent Practice', ja: '継続練習' }, lang),
    desc: t(
      {
        en: 'Lessons use textbooks and original materials with practical speaking and review.',
        ja: '教科書とオリジナル教材を使い、会話練習と復習をバランスよく行います。',
      },
      lang,
    ),
  },
  {
    title: t({ en: 'Progress Review', ja: '進捗確認' }, lang),
    desc: t(
      {
        en: 'Most students feel clear improvement in around 3 months, depending on level and study habits.',
        ja: '学習状況にもよりますが、多くの方が約3か月で上達を実感します。',
      },
      lang,
    ),
  },
];

export const aboutCopy = {
  eyebrowJa: () => '私について',
  eyebrowEn: (lang: Lang) => t({ en: 'About Me', ja: 'プロフィール' }, lang),
  title: (lang: Lang) => t({ en: 'About Me.', ja: 'プロフィール。' }, lang),
  description: (lang: Lang) =>
    t(
      {
        en: "Hi, I'm Manaka. From Tokyo to Exeter and now Toulouse, I teach Japanese in English through practical, personalized lessons for kids, teens, and adults.",
        ja: 'こんにちは、マナカです。東京、エクセター、そして現在のトゥールーズでの経験を活かし、子どもから大人まで英語で実践的な日本語レッスンを行っています。',
      },
      lang,
    ),
  journeyTitle: (lang: Lang) => t({ en: 'My Global Journey', ja: 'これまでの歩み' }, lang),
  teachingEyebrow: (lang: Lang) => t({ en: 'My Teaching Style', ja: '指導スタイル' }, lang),
  teachingTitle: (lang: Lang) => t({ en: 'How I Teach', ja: 'レッスンの進め方' }, lang),
  ctaTitle: (lang: Lang) => t({ en: 'Ready to start learning Japanese?', ja: '日本語学習を始めませんか？' }, lang),
  ctaDescription: (lang: Lang) =>
    t(
      {
        en: 'Book a trial lesson and we will build your study plan together.',
        ja: '体験レッスンで、あなたに合う学習プランを一緒に作りましょう。',
      },
      lang,
    ),
  ctaButton: (lang: Lang) => t({ en: 'Book a Trial Lesson', ja: '体験レッスンを予約' }, lang),
  secondaryCta: (lang: Lang) => t({ en: 'View Lessons & Fees', ja: 'レッスン・料金を見る' }, lang),
};

export const aboutTimeline = (lang: Lang) => [
  {
    period: '2005 - 2023',
    title: t({ en: 'Roots in Japan', ja: '日本で育った基礎' }, lang),
    desc: t(
      {
        en: 'Raised in Tokyo, I developed a deep understanding of Japanese language, communication style, and culture.',
        ja: '東京で育ち、日本語の表現やコミュニケーション、日本文化への理解を深めました。',
      },
      lang,
    ),
    icon: 'home',
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    period: '2023 - 2025',
    title: t({ en: 'University of Exeter, UK', ja: 'イギリス・エクセター大学' }, lang),
    desc: t(
      {
        en: 'I studied International Business and Modern Languages, which strengthened my communication skills across cultures.',
        ja: '国際ビジネスと現代言語を学び、異文化間でのコミュニケーション力を高めました。',
      },
      lang,
    ),
    icon: 'school',
    image: 'journey-exeter',
  },
  {
    period: t({ en: '2025 September - Present', ja: '2025年9月 - 現在' }, lang),
    title: t({ en: 'Toulouse, France', ja: 'フランス・トゥールーズ' }, lang),
    desc: t(
      {
        en: 'I am currently on exchange at TBS Toulouse Business School and offering Japanese lessons in Toulouse and online.',
        ja: '現在はTBSトゥールーズ・ビジネススクールに留学中で、トゥールーズとオンラインで日本語レッスンを提供しています。',
      },
      lang,
    ),
    icon: 'explore',
    image: 'journey-toulouse',
  },
];

export const aboutTeachingApproach = (lang: Lang) => [
  {
    icon: 'person',
    title: t({ en: 'Private Lessons = Personalized', ja: '個別レッスン = 完全カスタム' }, lang),
    desc: t(
      {
        en: 'In private classes, lessons are fully adapted to each learner: pace, materials, and goals.',
        ja: '個別レッスンでは、進度・教材・目標を一人ひとりに合わせて調整します。',
      },
      lang,
    ),
  },
  {
    icon: 'groups_3',
    title: t({ en: 'Groups = Structured Conversation', ja: 'グループ = 会話中心の構成' }, lang),
    desc: t(
      {
        en: 'Small group lessons focus on conversation practice with clear structure and guided activities.',
        ja: '少人数グループでは、明確な流れの中で会話練習を中心に進めます。',
      },
      lang,
    ),
  },
  {
    icon: 'menu_book',
    title: t({ en: 'Textbooks + Original Materials', ja: '教科書 + オリジナル教材' }, lang),
    desc: t(
      {
        en: 'I combine textbooks with my own Japanese learning materials to make lessons practical and engaging.',
        ja: '教科書とオリジナル教材を組み合わせ、実用的で楽しいレッスンにしています。',
      },
      lang,
    ),
  },
  {
    icon: 'trending_up',
    title: t({ en: 'Progress Every 3 Months', ja: '約3か月ごとに進歩を実感' }, lang),
    desc: t(
      {
        en: 'Most students notice meaningful improvement over around 3 months, depending on starting level and consistency.',
        ja: '開始時のレベルや学習頻度にもよりますが、多くの方が約3か月で上達を実感します。',
      },
      lang,
    ),
  },
];

export const lessonsCopy = {
  eyebrowJa: () => 'レッスンと料金',
  eyebrowEn: (lang: Lang) => t({ en: 'Lessons & Fees', ja: 'レッスン・料金' }, lang),
  titlePrefix: (lang: Lang) => t({ en: 'Japanese Lessons in', ja: 'トゥールーズの' }, lang),
  titleAccent: (lang: Lang) => t({ en: 'Toulouse.', ja: '日本語レッスン。' }, lang),
  description: (lang: Lang) =>
    t(
      {
        en: 'Beginner to advanced lessons, JLPT N5-N3 preparation, and engaging classes for kids and teens. All lessons are taught in English.',
        ja: '初心者から上級者まで対応。JLPT N5-N3対策、子ども・ティーン向けレッスンも提供しています。レッスンは英語で行います。',
      },
      lang,
    ),
  ctaPrimary: (lang: Lang) => t({ en: 'Book a Trial Lesson', ja: '体験レッスンを予約' }, lang),
  ctaSecondary: (lang: Lang) => t({ en: 'Ask a Question', ja: '質問する' }, lang),
  whatYouGet: (lang: Lang) => t({ en: 'What You Get', ja: '受けられる内容' }, lang),
  realLessonsTitle1: (lang: Lang) => t({ en: 'Real Lessons,', ja: '実践的なレッスン、' }, lang),
  realLessonsTitle2: (lang: Lang) => t({ en: 'Clear Structure', ja: '明確な構成' }, lang),
  realLessonsDesc: (lang: Lang) =>
    t(
      {
        en: '60-minute classes with a practical approach. Most learners notice clear progress in around 3 months, depending on their starting level and consistency.',
        ja: '1回60分の実践的なレッスンです。開始レベルと学習頻度によって異なりますが、多くの方が約3か月で上達を実感します。',
      },
      lang,
    ),
  includedEyebrow: (lang: Lang) => t({ en: 'What Is Included', ja: '含まれる内容' }, lang),
  includedTitle1: (lang: Lang) => t({ en: 'Included in', ja: 'すべてのプランに' }, lang),
  includedTitle2: (lang: Lang) => t({ en: 'Every Plan', ja: '含まれます' }, lang),
  lessonFormatsEyebrow: (lang: Lang) => t({ en: 'Lesson Formats', ja: 'レッスン形式' }, lang),
  checkAvailability: (lang: Lang) => t({ en: 'Check Availability', ja: '空き状況を確認' }, lang),
  faqEyebrow: (lang: Lang) => t({ en: 'Help & Support', ja: 'よくある質問' }, lang),
  faqTitle: () => 'FAQ',
  faqDesc: (lang: Lang) => t({ en: 'Key details before you start your trial lesson.', ja: '体験レッスン前によくいただく質問です。' }, lang),
  needInfo: (lang: Lang) => t({ en: 'Need specific information?', ja: '詳しい情報が必要ですか？' }, lang),
  contactDirectly: (lang: Lang) => t({ en: 'Contact Me Directly', ja: '直接問い合わせる' }, lang),
  finalCtaTitle1: (lang: Lang) => t({ en: 'Ready to start', ja: '日本語レッスンを' }, lang),
  finalCtaTitle2: (lang: Lang) => t({ en: 'your Japanese lessons?', ja: '始めませんか？' }, lang),
  finalCtaDesc: (lang: Lang) => t({ en: 'Book a trial lesson and get a plan based on your real goals.', ja: '体験レッスンで、あなたの目標に合う学習プランを作りましょう。' }, lang),
  finalCtaButton: (lang: Lang) => t({ en: 'Book Your Trial Lesson', ja: '体験レッスンを予約' }, lang),
};

export const lessonsIncludedItems = (lang: Lang) => [
  t({ en: 'Trial lesson and level check', ja: '体験レッスンとレベルチェック' }, lang),
  t({ en: 'Lesson plan based on your level and goals', ja: 'レベルと目標に合わせた学習プラン' }, lang),
  t({ en: 'Textbooks and original Japanese learning materials', ja: '教科書とオリジナル教材' }, lang),
  t({ en: 'Private lesson customization or group conversation structure', ja: '個別レッスンの最適化 / グループ会話の構成' }, lang),
  t({ en: 'Progress review over each 3-month period', ja: '約3か月ごとの進捗確認' }, lang),
];

export const lessonsFormats = (lang: Lang) => [
  {
    icon: 'person',
    title: t({ en: 'Private 1:1 Lessons', ja: '個別 1対1 レッスン' }, lang),
    subtitle: t({ en: 'Customized for your level', ja: 'レベルに合わせて最適化' }, lang),
    description: t(
      {
        en: 'Personalized 60-minute lessons for beginners, intermediate, or advanced learners. We focus on your goals and pace.',
        ja: '初心者・中級者・上級者向けに、60分の個別レッスンを提供します。目標と学習ペースに合わせて進めます。',
      },
      lang,
    ),
    pricing: [t({ en: 'EUR 35 / hour', ja: '35ユーロ / 1時間' }, lang)],
  },
  {
    icon: 'groups',
    title: t({ en: 'Small Group Lessons', ja: '少人数グループレッスン' }, lang),
    subtitle: t({ en: 'Conversation and shared progress', ja: '会話中心で一緒に成長' }, lang),
    description: t(
      {
        en: 'Structured small-group lessons with practical conversation and guided practice in a friendly setting.',
        ja: '実践的な会話練習を中心に、わかりやすい構成で進める少人数レッスンです。',
      },
      lang,
    ),
    pricing: [t({ en: 'EUR 20 / hour per student', ja: '1名あたり 20ユーロ / 1時間' }, lang)],
  },
  {
    icon: 'laptop_mac',
    title: t({ en: 'Online Lessons', ja: 'オンラインレッスン' }, lang),
    subtitle: t({ en: 'Flexible and practical', ja: '柔軟で実践的' }, lang),
    description: t(
      {
        en: 'Online lessons in English for students who prefer remote learning with clear structure and regular feedback.',
        ja: 'オンライン受講を希望する方向けに、英語で明確な構成と定期フィードバックを提供します。',
      },
      lang,
    ),
    pricing: [t({ en: 'EUR 30 / hour', ja: '30ユーロ / 1時間' }, lang)],
  },
  {
    icon: 'child_care',
    title: t({ en: 'Kids Classes', ja: 'キッズレッスン' }, lang),
    subtitle: t({ en: 'Fun and engaging', ja: '楽しく学べる内容' }, lang),
    description: t(
      {
        en: 'Age-appropriate lessons designed to keep children and teens motivated through interactive activities.',
        ja: '子どもやティーンが意欲を保てるよう、年齢に合わせた参加型アクティビティを取り入れます。',
      },
      lang,
    ),
    pricing: [t({ en: 'EUR 15 / hour', ja: '15ユーロ / 1時間' }, lang)],
  },
];

export const lessonsFaq = (lang: Lang) => [
  {
    q: t({ en: 'Where do in-person lessons take place?', ja: '対面レッスンはどこで行いますか？' }, lang),
    a: t({ en: 'In-person lessons can be held at my home studio, cafes, or public libraries in central Toulouse.', ja: '対面レッスンは、トゥールーズ中心部の自宅スタジオ・カフェ・公共図書館で実施できます。' }, lang),
  },
  {
    q: t({ en: 'Which students do you teach?', ja: 'どのような学習者に対応していますか？' }, lang),
    a: t({ en: 'I teach kids, teens, adults, and senior learners from beginner to advanced levels.', ja: '子ども、ティーン、大人、シニアまで、初心者から上級者まで対応しています。' }, lang),
  },
  {
    q: t({ en: 'Which JLPT levels do you offer?', ja: '対応しているJLPTレベルは？' }, lang),
    a: t({ en: 'I currently offer JLPT preparation for N5, N4, and N3.', ja: '現在、JLPT N5・N4・N3の対策に対応しています。' }, lang),
  },
  {
    q: t({ en: 'What language are lessons taught in?', ja: 'レッスンは何語で行いますか？' }, lang),
    a: t({ en: 'Lessons are taught in English.', ja: 'レッスンは英語で行います。' }, lang),
  },
  {
    q: t({ en: 'How does the trial lesson work?', ja: '体験レッスンの流れは？' }, lang),
    a: t({ en: 'The trial lesson helps assess your level, discuss your goals, and choose the best lesson format for you.', ja: '体験レッスンでは、レベル確認・目標の相談・最適なレッスン形式の提案を行います。' }, lang),
  },
];

export const bookingCopy = {
  eyebrowJa: () => 'お問い合わせ',
  eyebrowEn: (lang: Lang) => t({ en: 'Contact Me', ja: 'お問い合わせ' }, lang),
  titlePrefix: (lang: Lang) => t({ en: 'Book Your Trial', ja: '体験レッスンを' }, lang),
  titleAccent: (lang: Lang) => t({ en: 'Lesson.', ja: '予約する。' }, lang),
  description: (lang: Lang) =>
    t(
      {
        en: 'Tell me your level, goals, and preferred format. I will help you choose a practical lesson plan that fits your needs.',
        ja: '現在のレベル、目標、希望の受講形式をお知らせください。あなたに合う実践的な学習プランをご提案します。',
      },
      lang,
    ),
  sendInquiry: (lang: Lang) => t({ en: 'Send Inquiry', ja: '問い合わせを送る' }, lang),
  viewLessons: (lang: Lang) => t({ en: 'View Lessons & Fees', ja: 'レッスン・料金を見る' }, lang),
  inquiryForm: (lang: Lang) => t({ en: 'Inquiry Form', ja: 'お問い合わせフォーム' }, lang),
  directInfo: (lang: Lang) => t({ en: 'Direct Info', ja: '連絡先情報' }, lang),
  emailAddress: (lang: Lang) => t({ en: 'Email Address', ja: 'メールアドレス' }, lang),
  businessHours: (lang: Lang) => t({ en: 'Business Hours', ja: '対応時間' }, lang),
  mondayFriday: (lang: Lang) => t({ en: 'Mon - Fri', ja: '月 - 金' }, lang),
  saturday: (lang: Lang) => t({ en: 'Saturday', ja: '土曜日' }, lang),
  sunday: (lang: Lang) => t({ en: 'Sunday', ja: '日曜日' }, lang),
  closed: (lang: Lang) => t({ en: 'Closed', ja: '休み' }, lang),
  fastResponse: (lang: Lang) => t({ en: 'Fast Response', ja: '返信について' }, lang),
  fastResponseText1: (lang: Lang) => t({ en: 'I typically respond within', ja: '通常' }, lang),
  fastResponseText2: (lang: Lang) => t({ en: '24 hours', ja: '24時間以内' }, lang),
  fastResponseText3: (lang: Lang) => t({ en: '. Please double-check your email address so I can contact you.', ja: 'に返信します。連絡できるよう、メールアドレスをご確認ください。' }, lang),
  locations: (lang: Lang) => t({ en: 'Lesson Locations', ja: 'レッスン場所' }, lang),
  locationsDesc: (lang: Lang) =>
    t(
      {
        en: 'In-person lessons are available at my home studio, cafes, or public libraries in central Toulouse, plus online lessons.',
        ja: '対面レッスンはトゥールーズ中心部の自宅スタジオ・カフェ・公共図書館で対応しています。オンラインも可能です。',
      },
      lang,
    ),
  mapTitle: (lang: Lang) => t({ en: 'Map of lesson locations in Toulouse', ja: 'トゥールーズのレッスン対応エリア地図' }, lang),
  formTitle: (lang: Lang) => t({ en: 'Book Your Trial Lesson', ja: '体験レッスン予約フォーム' }, lang),
};
