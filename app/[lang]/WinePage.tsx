import Link from 'next/link';
import { withBasePath } from '@/lib/base-path';
import { getLocalizedPath, type Lang } from '@/lib/i18n';
import type { PageData, PageNewsItem } from './site-copy';

type WinePageProps = {
  lang: Lang;
  data: PageData;
};

export default function WinePage({ lang, data }: WinePageProps) {
  const isFr = lang === 'fr';
  const defaultHeroSlides = [
    '/images/wine-tastings-top-banner-1.jpg',
    '/images/wine-tastings-top-banner-2.jpg',
    '/images/wine-tastings-top-banner-3.jpg',
    '/images/wine-tastings-top-banner-4.jpg',
    '/images/wine-tastings-top-banner-5.jpeg',
    '/images/wine-tastings-top-banner-6.jpeg',
  ];
  const heroSlides = data.heroSlides?.length ? data.heroSlides : defaultHeroSlides;
  const heroZoomClass =
    data.heroZoomStyle === 'gentle'
      ? 'lp-hero-bg-slideshow-gentle'
      : data.heroZoomStyle === 'medium'
        ? 'lp-hero-bg-slideshow-medium'
        : '';
  const slideDurationSeconds = 5;
  const totalSlideDurationSeconds = heroSlides.length * slideDurationSeconds;
  const featureImage = data.featureImage ?? '/images/lapistoule-temp/visits-tasting.png';
  const highlightImage = data.highlightImage ?? '/images/lapistoule-temp/chai-barrels-background.jpg';
  const highlightTitle = data.highlightTitle ?? (isFr ? 'Pourquoi choisir Toulouse Wine Trips' : 'Why Toulouse Wine Trips');
  const highlightText = data.highlightText ?? (isFr
    ? 'Des formats sur mesure, une execution fiable et une experience invite pensee dans les details.'
    : 'Custom formats, reliable execution, and guest experience designed with detail.');
  const highlightCtaLabel = data.highlightCtaLabel ?? (isFr ? 'Demander un devis' : 'Request a quote');
  const highlightCtaHref = data.highlightCtaHref ?? '/quote';

  const newsItems: PageNewsItem[] = data.news?.length
    ? data.news
    : [
      {
        date: isFr ? 'Format prive' : 'Private format',
        title: isFr ? 'Sessions sur mesure' : 'Tailored sessions',
        text: isFr ? 'Formats adaptes a vos profils, votre budget et votre rythme de groupe.' : 'Formats adapted to your profiles, budget, and group pace.',
      },
      {
        date: isFr ? 'Format groupe' : 'Group format',
        title: isFr ? 'Coordination fluide' : 'Smooth coordination',
        text: isFr ? 'Planning clair et execution professionnelle sur toute la journee.' : 'Clear planning and professional execution throughout the day.',
      },
      {
        date: isFr ? 'Format premium' : 'Premium format',
        title: isFr ? 'Partenaires locaux' : 'Local partner network',
        text: isFr ? 'Acces a des lieux et vignobles de confiance dans la region toulousaine.' : 'Access to trusted venues and vineyards around Toulouse.',
      },
    ];
  const hasMixedOfferCards = data.sections.some((section) => section.image) && data.sections.some((section) => !section.image);

  return (
    <main>
      <section className="lp-hero">
        <div className={`lp-hero-bg lp-hero-bg-slideshow ${heroZoomClass}`}>
          {heroSlides.map((slide, index) => (
            <img
              key={slide}
              src={withBasePath(slide)}
              alt={data.title}
              className="lp-hero-slide"
              style={{
                animationDelay: `${index * slideDurationSeconds}s`,
                animationDuration: `${totalSlideDurationSeconds}s`,
              }}
            />
          ))}
          <div className="lp-hero-overlay" />
          <div className="lp-hero-gradient" />
        </div>
        <div className="lp-hero-content" data-reveal>
          <h1 className="lp-hero-title">
            {data.title}
            {data.heroSubtitle ? <span className="lp-hero-subtitle">{data.heroSubtitle}</span> : null}
          </h1>
          <p className="lp-hero-text">{data.description}</p>
          <div className="lp-actions lp-hero-actions">
            <Link href={getLocalizedPath(lang, data.ctaHref)} className="lp-btn lp-btn-primary">
              {data.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-section lp-home-section lp-section-highlight lp-live-experience-section">
        <div className="lp-container lp-grid lp-grid-2 lp-live-grid">
          <div className="lp-live-copy lp-live-copy-clean" data-reveal>
            <h2 className="lp-section-title">{isFr ? 'Vision et execution' : 'Vision and execution'}</h2>
            <p className="lp-text-lead lp-live-text">
              {data.introQuote ?? (isFr
                ? 'Nous appliquons un cadre premium inspire de l univers des domaines viticoles, adapte a vos objectifs de groupe.'
                : 'We apply a premium framework inspired by vineyard domains, adapted to your group objectives.')}
            </p>
            <Link href={getLocalizedPath(lang, data.ctaHref)} className="lp-btn lp-btn-primary lp-live-cta">
              {data.ctaLabel}
            </Link>
          </div>

          <div className="quote-box lp-live-quote" data-reveal>
            <img src={withBasePath(featureImage)} alt={data.title} className="lp-card-image" />
            <blockquote className="quote-text">{data.description}</blockquote>
            <p className="quote-attribution">{isFr ? 'Temoignage client' : 'Client feedback'}</p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-alt">
        <div className={`lp-container ${hasMixedOfferCards ? 'lp-grid lp-grid-3 lp-offers-grid' : 'lp-page-grid'}`}>
          {data.sections.map((section) => (
            <article
              key={section.title}
              className={`lp-clean-card lp-card-hover lp-page-grid-item lp-offer-card${section.image ? '' : ' lp-offer-card-no-image'}`}
              data-reveal
            >
              {section.image ? (
                <div className="lp-clean-card-image-wrap">
                  <img src={withBasePath(section.image)} alt={section.title} className="card-image" />
                </div>
              ) : (
                <p className="lp-meta-note">{isFr ? 'Format groupe' : 'Group format'}</p>
              )}
              <div className="lp-clean-card-content lp-offer-card-content">
                <div className="lp-offer-card-body">
                  <h2 className="lp-clean-card-title">{section.title}</h2>
                  {section.price ? <p className="lp-clean-card-price" style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{section.price}</p> : null}
                  {section.body ? <p className="lp-clean-card-text">{section.body}</p> : null}
                  {section.bullets ? (
                    <ul className="lp-inline-list">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="lp-offer-card-action">
                  <Link href={getLocalizedPath(lang, data.ctaHref)} className="lp-btn lp-btn-outline-dark lp-offer-cta">
                    {section.title.toLowerCase().includes('discovery')
                      ? isFr ? 'Choisir Discovery' : 'Choose Discovery'
                      : section.title.toLowerCase().includes('signature')
                        ? isFr ? 'Choisir Signature' : 'Choose Signature'
                        : isFr ? 'Demander un devis groupe' : 'Request group quote'}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <div className="lp-container">
          <div className="lp-section-head lp-section-head-center" data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Clarte operationnelle' : 'Operational clarity'}</span>
            <h2 className="lp-section-title">{isFr ? 'Ce que vous obtenez concretement' : 'What you get in practice'}</h2>
          </div>
          <div className="lp-grid lp-grid-3">
            {[
              {
                title: isFr ? 'Pour qui' : 'Best for',
                text: isFr
                  ? 'Groupes prives, entreprises, visiteurs internationaux, et evenements sur mesure.'
                  : 'Private groups, companies, international visitors, and tailored events.',
              },
              {
                title: isFr ? 'Ce qui est inclus' : 'What is included',
                text: isFr
                  ? 'Coordination, timing clair, accompagnement bilingue, et execution fiable.'
                  : 'Coordination, clear timing, bilingual hosting, and reliable execution.',
              },
              {
                title: isFr ? 'Resultat attendu' : 'Expected outcome',
                text: isFr
                  ? 'Une experience fluide, professionnelle, et memorable pour vos invites.'
                  : 'A smooth, professional, and memorable experience for your guests.',
              },
            ].map((item) => (
              <article key={item.title} className="lp-clean-card lp-card-hover" data-reveal>
                <h3 className="lp-clean-card-title">{item.title}</h3>
                <p className="lp-clean-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-highlight">
        <div className="lp-container lp-grid lp-grid-2 lp-dark-feature">
          <div data-reveal>
            <h2 className="lp-section-title">{highlightTitle}</h2>
            <p className="lp-text-lead lp-live-text">{highlightText}</p>
            <Link href={getLocalizedPath(lang, highlightCtaHref)} className="lp-btn lp-btn-primary">
              {highlightCtaLabel}
            </Link>
          </div>

          <div className="quote-box" data-reveal>
            <img src={withBasePath(highlightImage)} alt={highlightTitle} className="lp-card-image" />
            <p className="quote-text">
              {isFr
                ? '"Organisation claire, execution premium, et accueil bilingue pour vos invites."'
                : '"Clear organization, premium execution, and bilingual hosting for your guests."'}
            </p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <div className="lp-container">
          <div className="lp-section-head" data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Actualites' : 'Highlights'}</span>
            <h2 className="lp-section-title">{isFr ? 'Ce qui fait la difference' : 'What makes the difference'}</h2>
          </div>

          <div className="lp-grid lp-grid-3">
            {newsItems.map((item) => (
              <article key={item.title} className="lp-clean-card news-card lp-card-hover" data-reveal>
                <p className="news-date">{item.date}</p>
                <h3 className="lp-clean-card-title">{item.title}</h3>
                <p className="lp-clean-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
