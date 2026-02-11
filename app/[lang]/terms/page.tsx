import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isSupportedLang, type Lang } from '@/lib/i18n';
import { pageMetadata } from '../site-copy';

type PageProps = {
  params: Promise<{ lang: string }>;
};

const content: Record<Lang, { title: string; description: string; updated: string; intro: string; bullets: string[] }> = {
  en: {
    title: 'Terms of Service',
    description: 'Terms of service for Toulouse Wine Trips.',
    updated: 'Last updated: February 11, 2026',
    intro: 'These terms apply when you use this website or request a wine experience quote.',
    bullets: [
      'Services are confirmed only after both sides agree to scope, schedule, and pricing.',
      'Quote details include payment terms and cancellation terms.',
      'You agree to provide accurate booking details.',
      'Questions: contact@manaka-japanese.fr',
    ],
  },
  fr: {
    title: "Conditions d'utilisation",
    description: "Conditions d'utilisation de Toulouse Wine Trips.",
    updated: 'Derniere mise a jour: 11 fevrier 2026',
    intro: 'Ces conditions s appliquent lors de l utilisation du site et de toute demande de devis.',
    bullets: [
      'Les services sont confirmes apres accord sur le perimetre, la date et le tarif.',
      'Le devis inclut conditions de paiement et annulation.',
      'Vous devez fournir des informations de reservation exactes.',
      'Questions: contact@manaka-japanese.fr',
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isSupportedLang(lang)) return {};

  const copy = content[lang as Lang];
  return pageMetadata(lang as Lang, '/terms', copy.title, copy.description);
}

export default async function LocalizedTermsPage({ params }: PageProps) {
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
