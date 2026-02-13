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
  const heroImage = data.heroImage ?? '/images/lapistoule-temp/visits-hero.png';
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

  return (
    <main>
      <section className="lp-hero lp-hero-short">
        <div className="lp-hero-bg">
          <img src={withBasePath(heroImage)} alt={data.title} />
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

      <section className="lp-section lp-section-light">
        <div className="lp-container lp-grid lp-grid-2 lp-live-grid">
          <div data-reveal>
            <span className="lp-section-kicker">{data.eyebrow}</span>
            <h2 className="lp-section-title">{isFr ? 'Vision et execution' : 'Vision and execution'}</h2>
            <p className="lp-text-lead lp-live-text">
              {data.introQuote ?? (isFr
                ? 'Nous appliquons un cadre premium inspire de l univers des domaines viticoles, adapte a vos objectifs de groupe.'
                : 'We apply a premium framework inspired by vineyard domains, adapted to your group objectives.')}
            </p>
            <Link href={getLocalizedPath(lang, data.ctaHref)} className="lp-btn lp-btn-outline-dark">
              {data.ctaLabel}
            </Link>
          </div>

          <article className="lp-clean-card lp-card-hover" data-reveal>
            <img src={withBasePath(featureImage)} alt={data.title} className="lp-card-image" />
            <p className="lp-clean-card-text">{data.description}</p>
          </article>
        </div>
      </section>

      <section className="lp-section lp-section-alt">
        <div className="lp-container lp-page-grid">
          {data.sections.map((section) => (
            <article key={section.title} className="lp-clean-card lp-card-hover lp-page-grid-item" data-reveal>
              {section.image ? (
                <div className="lp-clean-card-image-wrap">
                  <img src={withBasePath(section.image)} alt={section.title} className="card-image" />
                </div>
              ) : null}
              <div className="lp-clean-card-content">
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
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <div className="lp-container">
          <div className="lp-section-head" data-reveal>
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

      <section className="lp-section lp-section-dark">
        <div className="lp-container lp-grid lp-grid-2 lp-dark-feature">
          <div data-reveal>
            <h2 className="lp-section-title lp-section-title-light">{highlightTitle}</h2>
            <p className="lp-text-lead lp-text-light lp-live-text">{highlightText}</p>
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
