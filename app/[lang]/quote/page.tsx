import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';
import { getLocalizedPath, isSupportedLang, type Lang } from '@/lib/i18n';
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
  const isFr = lang === 'fr';

  return (
    <main className="lp-quote-shell">
      <section className="lp-page-hero">
        <div className="lp-container lp-page-hero-content">
          <div data-reveal>
            <span className="lp-section-kicker">{copy.heading}</span>
            <h1 className="lp-section-title" style={{ marginBottom: '0.8rem' }}>{copy.heading}</h1>
            <p className="lp-text-lead">{copy.subheading}</p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <div className="lp-container" style={{ maxWidth: '900px', display: 'grid', gap: '1rem' }}>
          <section className="lp-card" data-reveal>
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

          <section className="lp-card" data-reveal>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>FAQ</h2>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'grid', gap: '0.5rem' }}>
              {copy.faq.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="lp-section lp-section-green">
        <div className="lp-container lp-grid lp-grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="lp-section-title" style={{ color: 'var(--color-text-on-dark)' }}>
              {isFr ? 'Organisation claire avant confirmation' : 'Clear planning before confirmation'}
            </h2>
            <p className="lp-text-lead" style={{ color: 'color-mix(in srgb, var(--color-text-on-dark) 92%, transparent)', marginBottom: '1.2rem' }}>
              {isFr
                ? 'Nous clarifions format, timing, prix et conditions avant validation finale.'
                : 'We clarify format, timing, pricing, and conditions before final confirmation.'}
            </p>
            <Link href={getLocalizedPath(lang as Lang, '/faq')} className="lp-btn lp-btn-primary">
              {isFr ? 'Voir la FAQ' : 'View FAQ'}
            </Link>
          </div>
          <div className="lp-card">
            <img src={withBasePath('/images/lapistoule-temp/chai-barrels-background.jpg')} alt="Wine cellar" className="lp-card-image" />
            <p style={{ margin: 0 }}>
              {isFr
                ? '"Un devis clair et rapide, sans surprises avant la date evenement."'
                : '"A clear, fast proposal with no surprises before the event date."'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
