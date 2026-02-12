import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';
import { getLocalizedPath, isSupportedLang, type Lang } from '@/lib/i18n';
import { homeData, pageMetadata } from './site-copy';

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

  const locale = lang as Lang;
  const data = homeData[locale];
  const isFr = locale === 'fr';

  return (
    <main>
      <section className="lp-hero">
        <div className="lp-hero-bg">
          <img src={withBasePath('/images/lapistoule-temp/home-hero.jpg')} alt="Vineyard landscape near Toulouse" />
          <div className="lp-hero-overlay" />
          <div className="lp-hero-gradient" />
        </div>
        <div className="lp-hero-content" data-reveal>
          <h1 className="lp-hero-title">
            Toulouse Wine Trips
            <span className="lp-hero-subtitle">{data.eyebrow}</span>
          </h1>
          <p className="lp-hero-text">{data.description}</p>
          <div className="lp-actions" style={{ justifyContent: 'center' }}>
            <Link href={getLocalizedPath(locale, '/quote')} className="lp-btn lp-btn-primary">{data.ctaLabel}</Link>
            <Link href={getLocalizedPath(locale, '/trips')} className="lp-btn lp-btn-outline-light">
              {isFr ? 'Explorer les trips' : 'Explore trips'}
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <div className="lp-container">
          <div style={{ maxWidth: '740px', margin: '0 auto 2rem', textAlign: 'center' }} data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Philosophie' : 'Philosophy'}</span>
            <h2 className="lp-section-title">{isFr ? "L'esprit de Toulouse Wine Trips" : 'The Toulouse Wine Trips Spirit'}</h2>
            <p className="lp-text-lead">
              {isFr
                ? 'Une approche locale et sur mesure pour connecter vos groupes aux meilleurs vins autour de Toulouse.'
                : 'A local, curated approach designed to connect your groups with the best wine experiences around Toulouse.'}
            </p>
          </div>

          <div className="lp-grid lp-grid-3">
            {[0, 1, 2].map((index) => {
              const imageByIndex = [
                '/images/lapistoule-temp/history-roots.webp',
                '/images/lapistoule-temp/history-modernization.webp',
                '/images/lapistoule-temp/history-sustainable.webp',
              ][index];

              return (
                <article key={data.sections[index]?.title ?? index} className="feature-card" data-reveal>
                  <div className="card-image-container">
                    <img src={withBasePath(imageByIndex)} alt="Wine experience" className="card-image" />
                  </div>
                  <h3 className="news-title">{data.sections[index]?.title}</h3>
                  <p>{data.sections[index]?.body ?? data.sections[index]?.bullets?.join(' · ')}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-green">
        <div className="lp-container lp-grid lp-grid-2" style={{ alignItems: 'center' }}>
          <div data-reveal>
            <h2 className="lp-section-title" style={{ color: '#fff' }}>{isFr ? "Vivez l'experience" : 'Live the Experience'}</h2>
            <div className="divider-gold" />
            <p className="lp-text-lead" style={{ color: 'rgba(255,255,255,0.92)', marginBottom: '1.4rem' }}>
              {isFr
                ? 'Nous creons des degustations privees, des escapades vignobles et des formats groupe avec un service premium.'
                : 'We craft private tastings, vineyard escapes, and group formats with premium service and local expertise.'}
            </p>
            <Link href={getLocalizedPath(locale, '/groups')} className="lp-btn lp-btn-primary">
              {isFr ? 'Planifier une experience groupe' : 'Plan a group experience'}
            </Link>
          </div>

          <div className="quote-box" data-reveal>
            <img src={withBasePath('/images/lapistoule-temp/chai-barrels-background.jpg')} alt="Wine cellar" className="lp-card-image" />
            <p className="quote-text">
              {isFr
                ? '"Une experience fluide, chaleureuse et tres bien organisee pour notre equipe internationale."'
                : '"A smooth, warm, and beautifully organized wine experience for our international team."'}
            </p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <div className="lp-container">
          <div style={{ maxWidth: '760px', marginBottom: '2rem' }} data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Actualites' : 'Highlights'}</span>
            <h2 className="lp-section-title">{isFr ? 'Actualites et formats' : 'News and formats'}</h2>
          </div>

          <div className="lp-grid lp-grid-3">
            {[
              {
                date: isFr ? 'FORMAT DISCOVERY' : 'DISCOVERY FORMAT',
                title: isFr ? 'Sessions accessibles' : 'Accessible sessions',
                text: isFr ? 'Des formats clairs pour decouvrir les vins de la region.' : 'Clear formats to discover regional wines.',
              },
              {
                date: isFr ? 'FORMAT SIGNATURE' : 'SIGNATURE FORMAT',
                title: isFr ? 'Selection premium' : 'Premium selection',
                text: isFr ? 'Des vins cibles avec un accompagnement approfondi.' : 'Targeted wines with deeper guidance and hosting.',
              },
              {
                date: isFr ? 'GROUPES' : 'GROUPS',
                title: isFr ? 'Organisation privee' : 'Private organization',
                text: isFr ? 'Execution fiable pour entreprises et groupes internationaux.' : 'Reliable execution for companies and international groups.',
              },
            ].map((item) => (
              <article key={item.title} className="news-card" data-reveal>
                <p className="news-date">{item.date}</p>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-alt">
        <div className="lp-container">
          <div style={{ maxWidth: '760px', marginBottom: '2rem' }} data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Formats' : 'Formats'}</span>
            <h2 className="lp-section-title">{isFr ? 'Nos experiences principales' : 'Our core experiences'}</h2>
          </div>

          <div className="lp-wine-grid">
            {[
              {
                title: isFr ? 'Degustation Discovery' : 'Discovery tasting',
                desc: isFr ? 'Format accessible et pedagogique.' : 'Accessible and educational format.',
                image: '/images/lapistoule-temp/wine-bottle-cuvee-tanays.webp',
                badge: isFr ? 'Accessible' : 'Accessible',
              },
              {
                title: isFr ? 'Degustation Signature' : 'Signature tasting',
                desc: isFr ? 'Selection premium et storytelling.' : 'Premium wine selection and storytelling.',
                image: '/images/lapistoule-temp/wine-bottle-le-pas-sage.webp',
                badge: isFr ? 'Premium' : 'Premium',
              },
              {
                title: isFr ? 'Wine trips vignobles' : 'Vineyard wine trips',
                desc: isFr ? 'Escapades demi-journee ou journee complete.' : 'Half-day and full-day vineyard escapes.',
                image: '/images/lapistoule-temp/wine-bottle-fleur-de-pecher.webp',
                badge: isFr ? 'Sur mesure' : 'Custom',
              },
              {
                title: isFr ? 'Evenements groupes' : 'Group events',
                desc: isFr ? 'Formats entreprise et prives adaptes.' : 'Corporate and private group formats.',
                image: '/images/lapistoule-temp/wine-bottle-grain-de-blanc.webp',
                badge: isFr ? 'Groupe' : 'Group',
              },
            ].map((item) => (
              <article key={item.title} className="lp-wine-card" data-reveal>
                <div className="lp-wine-image-wrap">
                  <span className="wine-badge">{item.badge}</span>
                  <img src={withBasePath(item.image)} alt={item.title} className="lp-wine-image" />
                </div>
                <div className="lp-wine-content">
                  <h3 style={{ fontSize: '1.65rem' }}>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link href={getLocalizedPath(locale, '/quote')} className="lp-btn lp-btn-link">
                    {isFr ? 'Decouvrir' : 'Explore'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section location-section">
        <div className="lp-container lp-grid lp-grid-2" style={{ alignItems: 'start' }}>
          <div data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Nous trouver' : 'Find us'}</span>
            <h2 className="lp-section-title">{isFr ? 'Toulouse et alentours' : 'Toulouse and nearby vineyards'}</h2>
            <p className="lp-text-lead" style={{ marginBottom: '1.2rem' }}>
              {isFr
                ? 'Nous organisons vos experiences dans Toulouse et vers les domaines partenaires autour de la ville.'
                : 'We organize experiences in Toulouse and with partner vineyards around the city.'}
            </p>
            <div className="contact-card">
              <p><strong>Email:</strong> contact@toulouse-wine-trips.fr</p>
              <p><strong>Phone:</strong> +33 6 00 00 00 00</p>
              <p style={{ marginBottom: 0 }}><strong>Address:</strong> Toulouse, France</p>
            </div>
          </div>

          <div className="location-map-container" data-reveal>
            <iframe
              title="Toulouse map"
              loading="lazy"
              src="https://www.google.com/maps?q=Toulouse,+France&output=embed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
