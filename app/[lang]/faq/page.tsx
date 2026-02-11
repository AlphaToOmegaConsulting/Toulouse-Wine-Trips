import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WinePage from '../WinePage';
import { faqData, pageMetadata } from '../site-copy';
import { isSupportedLang, type Lang } from '@/lib/i18n';

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isSupportedLang(lang)) return {};
  const data = faqData[lang as Lang];
  return pageMetadata(lang as Lang, '/faq', data.title, data.description);
}

export default async function FaqPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isSupportedLang(lang)) notFound();

  return <WinePage lang={lang as Lang} data={faqData[lang as Lang]} />;
}
