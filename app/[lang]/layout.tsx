import { notFound } from 'next/navigation';
import { isSupportedLang } from '@/lib/i18n';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ja' }];
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  return children;
}
