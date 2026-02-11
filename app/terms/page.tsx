import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Manaka Japanese.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: '/en/terms',
    languages: {
      en: '/en/terms',
      ja: '/ja/terms',
      'x-default': '/en/terms',
    },
  },
};

export default function TermsCompatibilityPage() {
  return (
    <main className="site-x section-y bg-white">
      <section className="site-content max-w-3xl text-left space-y-6">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Terms of Service</h1>
        <p className="text-slate-500">Please use the full English page below.</p>
        <Link href="/en/terms" className="text-primary font-bold hover:underline">
          Go to English Terms of Service
        </Link>
      </section>
    </main>
  );
}
