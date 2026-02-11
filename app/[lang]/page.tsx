import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WinePage from './WinePage';
import { homeData, pageMetadata } from './site-copy';
import { isSupportedLang, type Lang } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isSupportedLang(lang)) return {};

  const data = homeData[lang as Lang];
  return pageMetadata(lang as Lang, '', data.title, data.description);
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isSupportedLang(lang)) notFound();

  return <WinePage lang={lang as Lang} data={homeData[lang as Lang]} />;
}
