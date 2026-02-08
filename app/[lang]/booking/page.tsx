import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Booking from '@/components/Booking';
import { isSupportedLang, type Lang } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isSupportedLang(lang)) return {};

  const title = lang === 'ja' ? 'お問い合わせ・予約' : 'Contact and Booking';
  const description =
    lang === 'ja'
      ? 'トゥールーズまたはオンラインで体験レッスンを予約。レベルと目標に合わせて最適な学習プランを提案します。'
      : 'Book a Japanese trial lesson in Toulouse or online. Share your level and goals to get a personalized plan and schedule.';
  const canonicalPath = lang === 'ja' ? '/ja/booking' : '/en/booking';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: '/en/booking',
        ja: '/ja/booking',
        'x-default': '/en/booking',
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

export default async function LocalizedBookingPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) notFound();

  return <Booking lang={lang as Lang} />;
}
