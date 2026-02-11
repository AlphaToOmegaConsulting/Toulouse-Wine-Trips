import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isSupportedLang, type Lang } from '@/lib/i18n';
import { pageMetadata, quoteData } from '../site-copy';

type QuotePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: QuotePageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isSupportedLang(lang)) return {};

  const copy = quoteData[lang as Lang];
  return pageMetadata(lang as Lang, '/quote', copy.title, copy.description);
}

export default async function QuotePage({ params }: QuotePageProps) {
  const { lang } = await params;
  if (!isSupportedLang(lang)) notFound();

  const copy = quoteData[lang as Lang];

  return (
    <main className="site-x section-y bg-white">
      <div className="site-content max-w-4xl text-left space-y-10">
        <section className="space-y-5">
          <p className="text-xs uppercase tracking-[0.25em] font-black text-primary">{copy.heading}</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">{copy.heading}</h1>
          <p className="text-lg text-slate-600">{copy.subheading}</p>
        </section>

        <section className="border border-slate-200 rounded-xl p-4 md:p-6 bg-slate-50">
          <iframe
            src="https://tally.so/embed/jaQa76?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="849"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title={copy.title}
          />
        </section>

        <section className="border border-slate-200 rounded-xl p-6 bg-white">
          <h2 className="text-xl font-black text-slate-900 mb-3">FAQ</h2>
          <ul className="space-y-2 text-slate-600">
            {copy.faq.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
