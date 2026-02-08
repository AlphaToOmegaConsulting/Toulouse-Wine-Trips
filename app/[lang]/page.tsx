import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import { isSupportedLang, type Lang } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ja' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    return {};
  }

  const title =
    lang === 'ja'
      ? 'トゥールーズの日本語レッスン'
      : 'Japanese Lessons in Toulouse';

  const description =
    lang === 'ja'
      ? 'トゥールーズで受けられる日本語レッスン。ネイティブ講師による個別・少人数・オンライン授業。'
      : 'Personalized Japanese lessons in Toulouse with a native teacher. Private, group, and online formats for all levels.';

  const canonicalPath = lang === 'ja' ? '/ja' : '/en';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: '/en',
        ja: '/ja',
        'x-default': '/en',
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

export default async function LocalizedHomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  return <Hero lang={lang as Lang} />;
}
