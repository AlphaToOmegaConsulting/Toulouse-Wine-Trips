import { redirect } from 'next/navigation';
import { isSupportedLang } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function LegacyBookingRedirect({ params }: PageProps) {
  const { lang } = await params;
  const targetLang = isSupportedLang(lang) ? lang : 'en';
  redirect(`/${targetLang}/quote`);
}
