import type { Metadata } from 'next';
import { getLocalizedPath, type Lang } from '@/lib/i18n';

export type Section = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type PageData = {
  title: string;
  description: string;
  eyebrow: string;
  ctaLabel: string;
  ctaHref: string;
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
    sections: [
      {
        title: 'Discovery tasting - EUR 30 per person',
        bullets: ['3 to 4 wines', 'Educational introduction', 'Optional add-ons'],
      },
      {
        title: 'Signature tasting - EUR 60 per person',
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
    sections: [
      {
        title: 'Degustation Discovery - 30 EUR par personne',
        bullets: ['3 a 4 vins', 'Introduction pedagogique', 'Options additionnelles'],
      },
      {
        title: 'Degustation Signature - 60 EUR par personne',
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
    sections: [
      {
        title: 'Trip formats',
        bullets: ['Half-day discoveries', 'Full-day vineyard routes', 'Private curated experiences'],
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
    sections: [
      {
        title: 'Formats de sortie',
        bullets: ['Decouverte demi-journee', 'Route vignoble journee complete', 'Experience privee sur mesure'],
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
    sections: [
      {
        title: 'Current partner types',
        bullets: ['Wine shops', 'Vineyards', 'Private venues'],
      },
      {
        title: 'Partnership goal',
        body: 'Create reliable, high-quality guest experiences through long-term local collaboration.',
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
    sections: [
      {
        title: 'Types de partenaires actuels',
        bullets: ['Caves a vin', 'Vignobles', 'Lieux prives'],
      },
      {
        title: 'Objectif du partenariat',
        body: 'Construire des experiences fiables et qualitatives grace a des collaborations locales durables.',
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
    sections: [
      {
        title: 'Our positioning',
        body: 'Premium but accessible wine experiences designed for both local and international guests.',
      },
      {
        title: 'What matters most',
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
    sections: [
      {
        title: 'Notre positionnement',
        body: 'Des experiences oenologiques premium mais accessibles, pour clients locaux et internationaux.',
      },
      {
        title: 'Nos priorites',
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

export const quoteData: Record<Lang, { title: string; description: string; heading: string; subheading: string; faq: string[] }> = {
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
