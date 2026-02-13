import type { Metadata } from 'next';
import { getLocalizedPath, type Lang } from '@/lib/i18n';

export type Section = {
  title: string;
  body?: string;
  bullets?: string[];
  price?: string;
  image?: string;
};

export type PageNewsItem = {
  date: string;
  title: string;
  text: string;
};

export type PageData = {
  title: string;
  description: string;
  eyebrow: string;
  ctaLabel: string;
  ctaHref: string;
  heroSubtitle?: string;
  heroImage?: string;
  featureImage?: string;
  introQuote?: string;
  highlightTitle?: string;
  highlightText?: string;
  highlightImage?: string;
  highlightCtaLabel?: string;
  highlightCtaHref?: string;
  news?: PageNewsItem[];
  sections: Section[];
};

export const siteName = 'Toulouse Wine Trips';

export function localeFor(lang: Lang) {
  return lang === 'fr' ? 'fr_FR' : 'en_GB';
}

export function alternates(path: string) {
  return {
    canonical: `/en${path}`,
    languages: {
      en: `/en${path}`,
      fr: `/fr${path}`,
      'x-default': `/en${path}`,
    },
  };
}

export function pageMetadata(lang: Lang, path: string, title: string, description: string): Metadata {
  const url = getLocalizedPath(lang, path);
  const altLocale = lang === 'fr' ? ['en_GB'] : ['fr_FR'];

  return {
    title,
    description,
    alternates: alternates(path),
    openGraph: {
      locale: localeFor(lang),
      alternateLocale: altLocale,
      url,
      title,
      description,
    },
  };
}

export const homeData: Record<Lang, PageData> = {
  en: {
    title: 'Wine Tastings and Vineyard Trips in Toulouse',
    description:
      'Private and group wine experiences in Toulouse. Book guided tastings, vineyard trips, and custom events in English or French.',
    eyebrow: 'Curated experiences in and around Toulouse',
    ctaLabel: 'Request a Quote',
    ctaHref: '/quote',
    sections: [
      {
        title: 'Two core experiences',
        bullets: ['Wine Tastings in Toulouse', 'Wine Trips and Vineyard Tours'],
      },
      {
        title: 'How it works',
        bullets: [
          'Tell us your date, group size, and language.',
          'Receive a tailored proposal with clear pricing.',
          'Confirm and enjoy your curated wine experience.',
        ],
      },
      {
        title: 'Built for groups and private events',
        body: 'From friends and celebrations to corporate groups and international visitors.',
      },
    ],
  },
  fr: {
    title: 'Degustations et escapades dans les vignobles autour de Toulouse',
    description:
      'Experiences oenologiques privees et en groupe a Toulouse. Degustations guidees, excursions et evenements sur mesure en francais ou en anglais.',
    eyebrow: 'Experiences sur mesure a Toulouse et autour',
    ctaLabel: 'Demander un devis',
    ctaHref: '/quote',
    sections: [
      {
        title: 'Deux offres principales',
        bullets: ['Degustations de vin a Toulouse', 'Wine trips et tours de vignobles'],
      },
      {
        title: 'Comment ca marche',
        bullets: [
          'Partagez la date, la taille du groupe et la langue souhaitee.',
          'Recevez une proposition personnalisee avec des tarifs clairs.',
          'Validez et profitez de votre experience oenologique.',
        ],
      },
      {
        title: 'Concu pour groupes et evenements prives',
        body: 'Entre amis, pour celebrations, entreprises et visiteurs internationaux.',
      },
    ],
  },
};

export const tastingsData: Record<Lang, PageData> = {
  en: {
    title: 'Wine Tastings in Toulouse',
    description:
      'Choose between Discovery and Signature tasting formats. Clear pricing, bilingual hosting, and options for private or group bookings.',
    eyebrow: 'Core offer',
    ctaLabel: 'Request a Quote',
    ctaHref: '/quote',
    heroSubtitle: 'Discovery and Signature formats',
    heroImage: '/images/lapistoule-temp/visits-hero.png',
    featureImage: '/images/lapistoule-temp/visits-tasting.png',
    introQuote: 'Structured tasting formats designed for private groups, celebrations, and corporate teams.',
    highlightTitle: 'Tastings with premium structure',
    highlightText: 'From welcome to final recap, each tasting follows a clear educational and hospitality flow.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Get a tasting quote',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'DISCOVERY',
        title: 'EUR 30 per person',
        text: '3 to 4 wines, educational intro, and optional add-ons.',
      },
      {
        date: 'SIGNATURE',
        title: 'EUR 60 per person',
        text: '5 to 6 wines, premium labels, and local pairings.',
      },
      {
        date: 'GROUP READY',
        title: 'Flexible hosting',
        text: 'Available for private bookings, team events, and mixed-language groups.',
      },
    ],
    sections: [
      {
        title: 'Discovery tasting',
        price: 'EUR 30 per person',
        image: '/images/lapistoule-temp/wine-bottle-cuvee-tanays.webp',
        bullets: ['3 to 4 wines', 'Educational introduction', 'Optional add-ons'],
      },
      {
        title: 'Signature tasting',
        price: 'EUR 60 per person',
        image: '/images/lapistoule-temp/wine-bottle-le-pas-sage.webp',
        bullets: ['5 to 6 wines', 'Premium selection', 'Local food pairing and deeper guidance'],
      },
      {
        title: 'Perfect for',
        bullets: ['Friends', 'Bachelor and bachelorette groups', 'Companies', 'International groups'],
      },
    ],
  },
  fr: {
    title: 'Degustations de vin a Toulouse',
    description:
      'Choisissez entre la formule Discovery et la formule Signature. Tarifs clairs, animation bilingue et options privees ou en groupe.',
    eyebrow: 'Offre principale',
    ctaLabel: 'Demander un devis',
    ctaHref: '/quote',
    heroSubtitle: 'Formats Discovery et Signature',
    heroImage: '/images/lapistoule-temp/visits-hero.png',
    featureImage: '/images/lapistoule-temp/visits-tasting.png',
    introQuote: 'Des degustations structurees pour groupes prives, celebrations et equipes entreprise.',
    highlightTitle: 'Des degustations premium et fluides',
    highlightText: 'De l accueil au recap final, chaque format suit un cadre clair et professionnel.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Demander un devis degustation',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'DISCOVERY',
        title: '30 EUR par personne',
        text: '3 a 4 vins, introduction pedagogique, options possibles.',
      },
      {
        date: 'SIGNATURE',
        title: '60 EUR par personne',
        text: '5 a 6 vins, selection premium, accords mets locaux.',
      },
      {
        date: 'GROUPES',
        title: 'Format flexible',
        text: 'Disponible pour prives, entreprises et groupes bilingues.',
      },
    ],
    sections: [
      {
        title: 'Degustation Discovery',
        price: '30 EUR par personne',
        image: '/images/lapistoule-temp/wine-bottle-cuvee-tanays.webp',
        bullets: ['3 a 4 vins', 'Introduction pedagogique', 'Options additionnelles'],
      },
      {
        title: 'Degustation Signature',
        price: '60 EUR par personne',
        image: '/images/lapistoule-temp/wine-bottle-le-pas-sage.webp',
        bullets: ['5 a 6 vins', 'Selection premium', 'Accords mets locaux et accompagnement approfondi'],
      },
      {
        title: 'Ideal pour',
        bullets: ['Amis', 'EVG et EVJF', 'Entreprises', 'Groupes internationaux'],
      },
    ],
  },
};

export const tripsData: Record<Lang, PageData> = {
  en: {
    title: 'Wine Trips and Vineyard Experiences',
    description:
      'Curated vineyard escapes around Toulouse with tailored itineraries, trusted local partners, and full trip coordination.',
    eyebrow: 'Vineyard escapes around Toulouse',
    ctaLabel: 'Request a Custom Quote',
    ctaHref: '/quote',
    heroSubtitle: 'Half-day and full-day formats',
    heroImage: '/images/lapistoule-temp/visits-hero.png',
    featureImage: '/images/journey-toulouse.png',
    introQuote: 'Each trip is designed around your group profile, timing, and preferred wine style.',
    highlightTitle: 'Curated routes, clear logistics',
    highlightText: 'We coordinate vineyards, timing, and transportation guidance for a seamless day.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Build my vineyard trip',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'FORMAT',
        title: 'Half-day discovery',
        text: 'A compact format focused on one curated vineyard route.',
      },
      {
        date: 'FORMAT',
        title: 'Full-day route',
        text: 'A richer day with extended tasting and destination options.',
      },
      {
        date: 'EXPERIENCE',
        title: 'Private curation',
        text: 'Trip flow adapted to your language, rhythm, and guest profile.',
      },
    ],
    sections: [
      {
        title: 'Trip formats',
        bullets: ['Half-day discoveries', 'Full-day vineyard routes', 'Private curated experiences'],
      },
      {
        title: 'Half-day discoveries',
        image: '/images/lapistoule-temp/visits-hero.png',
        body: 'A compact format focused on one curated vineyard route, perfect for a morning or afternoon escape.',
      },
      {
        title: 'Full-day vineyard routes',
        image: '/images/lapistoule-temp/history-roots.webp',
        body: 'A richer day with extended tasting, lunch options, and a deeper dive into the region.',
      },
      {
        title: 'Private curated experiences',
        image: '/images/lapistoule-temp/visits-group.png',
        body: 'Completely tailored to your group profile, timing, and preferred wine style.',
      },
      {
        title: 'Why choose us',
        bullets: ['Strong local partner network', 'Clear organization from start to finish', 'Bilingual hosting'],
      },
    ],
  },
  fr: {
    title: 'Wine trips et experiences dans les vignobles',
    description:
      'Escapades dans les vignobles autour de Toulouse avec itineraires sur mesure, partenaires locaux de confiance et organisation complete.',
    eyebrow: 'Escapades dans les vignobles autour de Toulouse',
    ctaLabel: 'Demander un devis personnalise',
    ctaHref: '/quote',
    heroSubtitle: 'Formats demi-journee et journee complete',
    heroImage: '/images/lapistoule-temp/visits-hero.png',
    featureImage: '/images/journey-toulouse.png',
    introQuote: 'Chaque sortie est construite selon votre profil groupe, votre timing et vos objectifs.',
    highlightTitle: 'Itineraires cibles, logistique claire',
    highlightText: 'Nous coordonnons domaines, rythme de journee et guidage transport.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Construire mon wine trip',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'FORMAT',
        title: 'Decouverte demi-journee',
        text: 'Format concis centre sur un itineraire vignoble cible.',
      },
      {
        date: 'FORMAT',
        title: 'Route journee complete',
        text: 'Journee plus riche avec options de degustation elargies.',
      },
      {
        date: 'EXPERIENCE',
        title: 'Curation privee',
        text: 'Parcours adapte a votre langue, votre rythme et vos invites.',
      },
    ],
    sections: [
      {
        title: 'Formats de sortie',
        bullets: ['Decouverte demi-journee', 'Route vignoble journee complete', 'Experience privee sur mesure'],
      },
      {
        title: 'Decouverte demi-journee',
        image: '/images/lapistoule-temp/visits-hero.png',
        body: 'Un format concis centre sur un itineraire vignoble cible, ideal pour une matinee ou un apres-midi.',
      },
      {
        title: 'Route vignoble journee complete',
        image: '/images/lapistoule-temp/history-roots.webp',
        body: 'Une journee plus riche avec degustation etendue, dejeuner et immersion dans la region.',
      },
      {
        title: 'Experience privee sur mesure',
        image: '/images/lapistoule-temp/visits-group.png',
        body: 'Entierement adapte a votre profil groupe, votre timing et votre style de vin prefere.',
      },
      {
        title: 'Pourquoi nous choisir',
        bullets: ['Reseau local solide', 'Organisation claire de bout en bout', 'Encadrement bilingue'],
      },
    ],
  },
};

export const groupsData: Record<Lang, PageData> = {
  en: {
    title: 'Group and Private Wine Events',
    description:
      'Custom wine events for companies, celebrations, and private groups in Toulouse with flexible logistics and language options.',
    eyebrow: 'High-value group experiences',
    ctaLabel: 'Request a Group Quote',
    ctaHref: '/quote',
    heroSubtitle: 'Corporate and private formats',
    heroImage: '/images/lapistoule-temp/visits-hero.png',
    featureImage: '/images/lapistoule-temp/visits-tasting.png',
    introQuote: 'From corporate teams to private celebrations, every format is built around practical execution.',
    highlightTitle: 'Group events with premium flow',
    highlightText: 'We align group size, service rhythm, and wine level to create smooth events.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Plan a group event',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'CORPORATE',
        title: 'Team experiences',
        text: 'Structured formats designed for internal teams and guests.',
      },
      {
        date: 'PRIVATE',
        title: 'Celebration groups',
        text: 'Birthday, bachelor, and private events built with clear logistics.',
      },
      {
        date: 'SERVICE',
        title: 'Bilingual hosting',
        text: 'English and French support for mixed international groups.',
      },
    ],
    sections: [
      {
        title: 'Designed for group needs',
        bullets: ['Corporate teams', 'Bachelor and bachelorette events', 'International student groups'],
      },
      {
        title: 'Flexible logistics',
        bullets: ['Dietary restrictions supported', 'Language options in EN/FR', 'Venue flexibility in Toulouse area'],
      },
    ],
  },
  fr: {
    title: 'Evenements vin pour groupes et prives',
    description:
      'Evenements sur mesure pour entreprises, celebrations et groupes prives a Toulouse avec logistique flexible et options de langue.',
    eyebrow: 'Experiences premium pour groupes',
    ctaLabel: 'Demander un devis groupe',
    ctaHref: '/quote',
    heroSubtitle: 'Formats entreprise et celebrations',
    heroImage: '/images/lapistoule-temp/visits-hero.png',
    featureImage: '/images/lapistoule-temp/visits-tasting.png',
    introQuote: 'De l entreprise aux celebrations privees, chaque format est pense pour une execution fluide.',
    highlightTitle: 'Evenements groupe a execution premium',
    highlightText: 'Nous calibrons taille de groupe, rythme service et niveau vins.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Organiser un evenement groupe',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'ENTREPRISE',
        title: 'Experiences equipe',
        text: 'Formats structures pour equipes internes et invites.',
      },
      {
        date: 'PRIVE',
        title: 'Groupes celebration',
        text: 'Anniversaires, EVG/EVJF et formats prives a logistique claire.',
      },
      {
        date: 'SERVICE',
        title: 'Animation bilingue',
        text: 'Accompagnement francais/anglais pour groupes internationaux.',
      },
    ],
    sections: [
      {
        title: 'Concu pour les besoins de groupe',
        bullets: ['Equipes entreprise', 'EVG et EVJF', 'Groupes etudiants internationaux'],
      },
      {
        title: 'Logistique flexible',
        bullets: ['Restrictions alimentaires prises en charge', 'Options de langue FR/EN', 'Lieux flexibles autour de Toulouse'],
      },
    ],
  },
};

export const partnersData: Record<Lang, PageData> = {
  en: {
    title: 'Partners',
    description:
      'Our trusted local network of wine shops, vineyards, and venues that support premium wine experiences in Toulouse.',
    eyebrow: 'Trusted local network',
    ctaLabel: 'Become a Partner',
    ctaHref: '/quote',
    heroSubtitle: 'Network and quality standards',
    heroImage: '/images/lapistoule-temp/history-modernization.webp',
    featureImage: '/images/lapistoule-temp/history-roots.webp',
    introQuote: 'Our partner model is based on reliability, guest care, and quality consistency.',
    highlightTitle: 'Long-term local partnerships',
    highlightText: 'We build stable collaborations with venues and vineyards that value guest experience.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Become a partner',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'NETWORK',
        title: 'Wine shops',
        text: 'Specialized local partners supporting tasting and sourcing needs.',
      },
      {
        date: 'NETWORK',
        title: 'Vineyards',
        text: 'Trusted winemakers aligned with our hospitality standards.',
      },
      {
        date: 'NETWORK',
        title: 'Private venues',
        text: 'Curated spaces selected for service quality and atmosphere.',
      },
    ],
    sections: [
      {
        title: 'Wine shops',
        image: '/images/lapistoule-temp/chai-barrels-background.jpg',
        body: 'Specialized local partners supporting tasting and sourcing needs.',
      },
      {
        title: 'Vineyards',
        image: '/images/lapistoule-temp/visits-hero.png',
        body: 'Trusted winemakers aligned with our hospitality standards.',
      },
      {
        title: 'Private venues',
        image: '/images/lapistoule-temp/visits-group.png',
        body: 'Curated spaces selected for service quality and atmosphere.',
      },
    ],
  },
  fr: {
    title: 'Partenaires',
    description:
      'Notre reseau local de confiance: caves, vignobles et lieux partenaires pour des experiences oenologiques premium a Toulouse.',
    eyebrow: 'Reseau local de confiance',
    ctaLabel: 'Devenir partenaire',
    ctaHref: '/quote',
    heroSubtitle: 'Reseau et standards qualite',
    heroImage: '/images/lapistoule-temp/history-modernization.webp',
    featureImage: '/images/lapistoule-temp/history-roots.webp',
    introQuote: 'Notre modele partenaire repose sur fiabilite, accueil invite et qualite constante.',
    highlightTitle: 'Partenariats locaux durables',
    highlightText: 'Nous construisons des collaborations solides avec lieux et vignobles engages.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Devenir partenaire',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'RESEAU',
        title: 'Caves a vin',
        text: 'Partenaires locaux specialises pour degustation et approvisionnement.',
      },
      {
        date: 'RESEAU',
        title: 'Vignobles',
        text: 'Domaines de confiance alignes avec nos standards accueil.',
      },
      {
        date: 'RESEAU',
        title: 'Lieux prives',
        text: 'Espaces cibles selectionnes pour qualite de service et ambiance.',
      },
    ],
    sections: [
      {
        title: 'Caves a vin',
        image: '/images/lapistoule-temp/chai-barrels-background.jpg',
        body: 'Partenaires locaux specialises pour degustation et approvisionnement.',
      },
      {
        title: 'Vignobles',
        image: '/images/lapistoule-temp/visits-hero.png',
        body: 'Domaines de confiance alignes avec nos standards accueil.',
      },
      {
        title: 'Lieux prives',
        image: '/images/lapistoule-temp/visits-group.png',
        body: 'Espaces cibles selectionnes pour qualite de service et ambiance.',
      },
    ],
  },
};

export const aboutData: Record<Lang, PageData> = {
  en: {
    title: 'About',
    description:
      'Meet the team behind Toulouse Wine Trips and our approach to curated, premium-but-accessible wine experiences.',
    eyebrow: 'Who we are',
    ctaLabel: 'Request a Quote',
    ctaHref: '/quote',
    heroSubtitle: 'A service-first wine company',
    heroImage: '/images/lapistoule-temp/history-roots.webp',
    featureImage: '/images/about-manaka.jpg',
    introQuote: 'We combine local wine knowledge with premium hospitality standards for French and international guests.',
    highlightTitle: 'Built for clarity and confidence',
    highlightText: 'We keep communication simple, planning reliable, and execution focused on guest satisfaction.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Request a quote',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'POSITIONING',
        title: 'Premium but accessible',
        text: 'High-quality formats made clear and approachable for every group type.',
      },
      {
        date: 'METHOD',
        title: 'Curated quality',
        text: 'We prioritize relevant selections over overwhelming choice.',
      },
      {
        date: 'DELIVERY',
        title: 'Reliable execution',
        text: 'Clear communication and practical planning from first contact to event day.',
      },
    ],
    sections: [
      {
        title: 'Our positioning',
        image: '/images/lapistoule-temp/history-modernization.webp',
        body: 'Premium but accessible wine experiences designed for both local and international guests.',
      },
      {
        title: 'What matters most',
        image: '/images/lapistoule-temp/history-sustainable.webp',
        bullets: ['Clear communication', 'Reliable logistics', 'Curated quality over overwhelming choice'],
      },
    ],
  },
  fr: {
    title: 'A propos',
    description:
      'Decouvrez l equipe Toulouse Wine Trips et notre approche d experiences premium mais accessibles.',
    eyebrow: 'Qui nous sommes',
    ctaLabel: 'Demander un devis',
    ctaHref: '/quote',
    heroSubtitle: 'Un service vin centre experience client',
    heroImage: '/images/lapistoule-temp/history-roots.webp',
    featureImage: '/images/about-manaka.jpg',
    introQuote: 'Nous combinons connaissance locale du vin et standards hospitality premium pour clients francais et internationaux.',
    highlightTitle: 'Concu pour clarte et confiance',
    highlightText: 'Communication simple, planning fiable, execution orientee satisfaction invite.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Demander un devis',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'POSITIONNEMENT',
        title: 'Premium mais accessible',
        text: 'Formats de haute qualite avec lecture simple pour chaque type de groupe.',
      },
      {
        date: 'METHODE',
        title: 'Qualite ciblee',
        text: 'Nous privilegions des selections pertinentes plutot que trop de choix.',
      },
      {
        date: 'EXECUTION',
        title: 'Organisation fiable',
        text: 'Communication claire et planning pratique du premier contact au jour J.',
      },
    ],
    sections: [
      {
        title: 'Notre positionnement',
        image: '/images/lapistoule-temp/history-modernization.webp',
        body: 'Des experiences oenologiques premium mais accessibles, pour clients locaux et internationaux.',
      },
      {
        title: 'Nos priorites',
        image: '/images/lapistoule-temp/history-sustainable.webp',
        bullets: ['Communication claire', 'Logistique fiable', 'Qualite ciblee sans surcharge de choix'],
      },
    ],
  },
};

export const faqData: Record<Lang, PageData> = {
  en: {
    title: 'FAQ and Policies',
    description:
      'Answers about deposit, cancellation, languages, dietary restrictions, and key booking details for wine experiences.',
    eyebrow: 'Before you book',
    ctaLabel: 'Request a Quote',
    ctaHref: '/quote',
    heroSubtitle: 'Booking information and key policies',
    heroImage: '/images/lapistoule-temp/history-sustainable.webp',
    featureImage: '/images/faq-illustration.png',
    introQuote: 'This page gives practical answers so your booking process stays clear from the start.',
    highlightTitle: 'Policy clarity for every booking',
    highlightText: 'Deposit, cancellation, language, and food restrictions are handled with transparent communication.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Ask a specific question',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'POLICY',
        title: 'Deposit details',
        text: 'Deposit requirements are confirmed in each tailored proposal.',
      },
      {
        date: 'POLICY',
        title: 'Cancellation terms',
        text: 'Cancellation conditions are shared clearly before confirmation.',
      },
      {
        date: 'POLICY',
        title: 'Language and dietary support',
        text: 'English/French hosting and dietary handling available when specified in advance.',
      },
    ],
    sections: [
      {
        title: 'FAQ',
        bullets: [
          'Deposit: depends on event size and format, confirmed in your quote.',
          'Cancellation policy: provided with your custom proposal.',
          'Languages: English and French.',
          'Dietary restrictions: supported when shared in advance.',
        ],
      },
    ],
  },
  fr: {
    title: 'FAQ et politiques',
    description:
      'Reponses sur acompte, annulation, langues, restrictions alimentaires et points cles avant reservation.',
    eyebrow: 'Avant de reserver',
    ctaLabel: 'Demander un devis',
    ctaHref: '/quote',
    heroSubtitle: 'Informations reservation et politiques',
    heroImage: '/images/lapistoule-temp/history-sustainable.webp',
    featureImage: '/images/faq-illustration.png',
    introQuote: 'Cette page donne des reponses pratiques pour garder un processus de reservation clair.',
    highlightTitle: 'Politiques claires pour chaque reservation',
    highlightText: 'Acompte, annulation, langue et alimentation sont traites avec transparence.',
    highlightImage: '/images/lapistoule-temp/chai-barrels-background.jpg',
    highlightCtaLabel: 'Poser une question specifique',
    highlightCtaHref: '/quote',
    news: [
      {
        date: 'POLITIQUE',
        title: 'Details acompte',
        text: 'Le montant acompte est confirme dans chaque proposition personnalisee.',
      },
      {
        date: 'POLITIQUE',
        title: 'Conditions annulation',
        text: 'Les conditions sont communiquees clairement avant confirmation.',
      },
      {
        date: 'POLITIQUE',
        title: 'Langues et alimentation',
        text: 'Animation FR/EN et gestion alimentaire possibles si anticipees.',
      },
    ],
    sections: [
      {
        title: 'FAQ',
        bullets: [
          'Acompte: selon taille du groupe et format, confirme dans le devis.',
          'Politique d annulation: communiquee dans votre proposition.',
          'Langues: francais et anglais.',
          'Restrictions alimentaires: prises en charge si indiquees a l avance.',
        ],
      },
    ],
  },
};

export const quoteData: Record<
  Lang,
  { title: string; description: string; heading: string; subheading: string; faq: string[] }
> = {
  en: {
    title: 'Request a Quote',
    description: 'Share your event details and receive a tailored wine experience proposal for Toulouse and surrounding vineyards.',
    heading: 'Request a Quote',
    subheading: 'Share your date, group size, experience type, language, and budget.',
    faq: [
      'Deposit and cancellation details are shared in your proposal.',
      'We support EN and FR groups.',
      'Dietary restrictions can be handled when shared in advance.',
    ],
  },
  fr: {
    title: 'Demander un devis',
    description: 'Partagez vos besoins et recevez une proposition personnalisee pour votre experience vin a Toulouse.',
    heading: 'Demander un devis',
    subheading: 'Indiquez date, taille du groupe, type d experience, langue et budget.',
    faq: [
      'Details acompte et annulation communiques dans votre proposition.',
      'Groupes en francais et anglais pris en charge.',
      'Restrictions alimentaires possibles si communiquees a l avance.',
    ],
  },
};
