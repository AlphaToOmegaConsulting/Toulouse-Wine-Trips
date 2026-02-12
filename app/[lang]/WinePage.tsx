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
  const highlightTitle = data.highlightTitle ?? (isFr ? "Pourquoi choisir Toulouse Wine Trips" : 'Why Toulouse Wine Trips');
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
          <div className="lp-actions" style={{ justifyContent: 'center' }}>
            <Link href={getLocalizedPath(lang, data.ctaHref)} className="lp-btn lp-btn-primary">
              {data.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <div className="lp-container lp-grid lp-grid-2" style={{ alignItems: 'center' }}>
          <div data-reveal>
            <span className="lp-section-kicker">{data.eyebrow}</span>
            <h2 className="lp-section-title">{isFr ? 'Vision et execution' : 'Vision and execution'}</h2>
            <p className="lp-text-lead" style={{ marginBottom: '1.2rem' }}>
              {data.introQuote ?? (isFr
                ? 'Nous appliquons un cadre premium inspire de l univers des domaines viticoles, adapte a vos objectifs de groupe.'
                : 'We apply a premium framework inspired by vineyard domains, adapted to your group objectives.')}
            </p>
            <Link href={getLocalizedPath(lang, data.ctaHref)} className="lp-btn lp-btn-outline-dark">
              {data.ctaLabel}
            </Link>
          </div>

          <div className="lp-card lp-card-hover" data-reveal>
            <img src={withBasePath(featureImage)} alt={data.title} className="lp-card-image" />
            <p style={{ margin: 0 }}>{data.description}</p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-alt">
        <div className="lp-container lp-page-grid">
          {data.sections.map((section, index) => (
            <article key={section.title} className="lp-card lp-card-hover" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.7rem' }}>{section.title}</h2>
              {section.body ? <p style={{ marginBottom: '0.8rem' }}>{section.body}</p> : null}
              {section.bullets ? (
                <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'grid', gap: '0.4rem' }}>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section lp-section-green">
        <div className="lp-container lp-grid lp-grid-2" style={{ alignItems: 'center' }}>
          <div data-reveal>
            <h2 className="lp-section-title" style={{ color: 'var(--color-text-on-dark)' }}>{highlightTitle}</h2>
            <p className="lp-text-lead" style={{ color: 'color-mix(in srgb, var(--color-text-on-dark) 92%, transparent)', marginBottom: '1.2rem' }}>{highlightText}</p>
            <Link href={getLocalizedPath(lang, highlightCtaHref)} className="lp-btn lp-btn-primary">
              {highlightCtaLabel}
            </Link>
          </div>
          <div className="lp-card" data-reveal>
            <img src={withBasePath(highlightImage)} alt={highlightTitle} className="lp-card-image" />
            <p style={{ margin: 0 }}>
              {isFr
                ? '"Organisation claire, execution premium, et accueil bilingue pour vos invites."'
                : '"Clear organization, premium execution, and bilingual hosting for your guests."'}
            </p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-light">
        <div className="lp-container">
          <div style={{ maxWidth: '760px', marginBottom: '2rem' }} data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Actualites' : 'Highlights'}</span>
            <h2 className="lp-section-title">{isFr ? 'Ce qui fait la difference' : 'What makes the difference'}</h2>
          </div>
          <div className="lp-grid lp-grid-3">
            {newsItems.map((item) => (
              <article key={item.title} className="lp-card lp-card-hover" data-reveal>
                <p style={{ marginTop: 0, marginBottom: '0.55rem', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-primary)' }}>
                  {item.date}
                </p>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.55rem' }}>{item.title}</h3>
                <p style={{ margin: 0 }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
