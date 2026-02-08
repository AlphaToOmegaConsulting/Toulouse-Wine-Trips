import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Journey from '@/components/Journey';
import { isSupportedLang, type Lang } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isSupportedLang(lang)) return {};

  const title = lang === 'ja' ? 'プロフィール' : 'About Manaka';
  const description =
    lang === 'ja'
      ? '東京、エクセター、トゥールーズでの経験をもつ日本語講師マナカのプロフィール。'
      : 'Meet Manaka, a native Japanese tutor in Toulouse with international study experience from Tokyo to Exeter to France.';
  const canonicalPath = lang === 'ja' ? '/ja/about' : '/en/about';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: '/en/about',
        ja: '/ja/about',
        'x-default': '/en/about',
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

export default async function LocalizedAboutPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) notFound();

  return <Journey lang={lang as Lang} />;
}
