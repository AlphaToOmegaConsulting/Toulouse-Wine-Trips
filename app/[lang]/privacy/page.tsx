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
    <main className="lp-page-top">
      <section className="lp-page-hero">
        <div className="lp-container lp-page-hero-content">
          <span className="lp-section-kicker">Legal</span>
          <h1 className="lp-section-title">{copy.title}</h1>
          <p className="lp-text-lead">{copy.intro}</p>
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <article className="lp-container" style={{ maxWidth: '900px', display: 'grid', gap: '1rem' }}>
          <section className="lp-card">
            <p style={{ marginTop: 0, marginBottom: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>
              {copy.updated}
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'grid', gap: '0.45rem' }}>
              {copy.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
