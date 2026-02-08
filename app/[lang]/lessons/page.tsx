import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Lessons from '@/components/Lessons';
import { isSupportedLang, type Lang } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isSupportedLang(lang)) return {};

  const title = lang === 'ja' ? 'レッスン・料金' : 'Lessons and Fees';
  const description =
    lang === 'ja'
      ? 'トゥールーズとオンラインの日本語レッスン。初心者から上級者、JLPT N5-N3対策に対応。'
      : 'Japanese lessons in Toulouse and online: beginner to advanced, JLPT N5-N3 prep, and engaging classes for kids and teens taught in English.';
  const canonicalPath = lang === 'ja' ? '/ja/lessons' : '/en/lessons';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: '/en/lessons',
        ja: '/ja/lessons',
        'x-default': '/en/lessons',
      },
    },
    openGraph: {
      locale: lang === 'ja' ? 'ja_JP' : 'en_GB',
      alternateLocale: lang === 'ja' ? ['en_GB'] : ['ja_JP'],
      url: canonicalPath,
      title,
      description,
    },
  };
}

export default async function LocalizedLessonsPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) notFound();

  return <Lessons lang={lang as Lang} />;
}
