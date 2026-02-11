import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isSupportedLang, type Lang } from '@/lib/i18n';
import { pageMetadata } from '../site-copy';

type PageProps = {
  params: Promise<{ lang: string }>;
};

const content: Record<Lang, { title: string; description: string; updated: string; intro: string; bullets: string[] }> = {
  en: {
    title: 'Privacy Policy',
    description: 'Privacy policy for Toulouse Wine Trips.',
    updated: 'Last updated: February 11, 2026',
    intro: 'This policy explains what personal information we collect and how we use it when you send a quote request.',
    bullets: [
      'Data collected: contact details and event request details.',
      'Purpose: respond to quote requests and organize services.',
      'Third-party tools: Tally form and embedded services may process data under their own policies.',
      'Contact: contact@manaka-japanese.fr',
    ],
  },
  fr: {
    title: 'Politique de confidentialite',
    description: 'Politique de confidentialite de Toulouse Wine Trips.',
    updated: 'Derniere mise a jour: 11 fevrier 2026',
    intro: 'Cette politique explique les donnees personnelles collectees et leur utilisation lors des demandes de devis.',
    bullets: [
      'Donnees collectees: coordonnees et details de la demande.',
      'Objectif: repondre aux demandes et organiser le service.',
      'Outils tiers: Tally et autres services integres appliquent leurs propres politiques.',
      'Contact: contact@manaka-japanese.fr',
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isSupportedLang(lang)) return {};

  const copy = content[lang as Lang];
  return pageMetadata(lang as Lang, '/privacy', copy.title, copy.description);
}

export default async function LocalizedPrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isSupportedLang(lang)) notFound();

  const copy = content[lang as Lang];

  return (
    <main className="site-x section-y bg-white">
      <article className="site-content max-w-3xl text-left space-y-6">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">{copy.title}</h1>
        <p className="text-slate-500">{copy.updated}</p>
        <p>{copy.intro}</p>
        <ul className="list-disc pl-6 space-y-1">
          {copy.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </main>
  );
}
