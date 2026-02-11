import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Manaka Japanese.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: '/en/privacy',
    languages: {
      en: '/en/privacy',
      ja: '/ja/privacy',
      'x-default': '/en/privacy',
    },
  },
};

export default function PrivacyCompatibilityPage() {
  return (
    <main className="site-x section-y bg-white">
      <section className="site-content max-w-3xl text-left space-y-6">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="text-slate-500">Please use the full English page below.</p>
        <Link href="/en/privacy" className="text-primary font-bold hover:underline">
          Go to English Privacy Policy
        </Link>
      </section>
    </main>
  );
}
