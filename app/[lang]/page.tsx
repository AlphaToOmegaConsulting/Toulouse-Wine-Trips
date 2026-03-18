import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
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
  const heroSlides = [
    '/images/home-hero-slide-1.jpg',
    '/images/home-hero-slide-2.jpg',
    '/images/home-hero-slide-3.jpg',
    '/images/home-hero-slide-4.jpg',
    '/images/home-hero-slide-5.jpg',
    '/images/home-hero-slide-6.jpg',
  ];
  const slideDurationSeconds = 5;
  const totalSlideDurationSeconds = heroSlides.length * slideDurationSeconds;

  return (
    <main>
      <section className="lp-hero">
        <div className="lp-hero-bg lp-hero-bg-slideshow">
          {heroSlides.map((slide, index) => (
            <img
              key={slide}
              src={withBasePath(slide)}
              alt="Toulouse wine trip landscape"
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
          <h1 className="lp-hero-title">Toulouse Wine Trips</h1>
          <p className="lp-hero-subtitle">{data.eyebrow}</p>
          <p className="lp-hero-text">{data.description}</p>
          <div className="lp-actions lp-hero-actions">
            <Link href={getLocalizedPath(locale, '/quote')} className="lp-btn lp-btn-hero-primary">
              {isFr ? 'Demander un devis' : 'Request a quote'}
            </Link>
            <Link href={getLocalizedPath(locale, '/trips')} className="lp-btn lp-btn-outline-light">
              {isFr ? 'Explorer les trips' : 'Explore trips'}
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-section lp-home-section lp-section-light lp-pricing-section">
        <div className="lp-container">
          <div className="lp-section-head lp-section-head-center" data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Philosophie' : 'Philosophy'}</span>
            <h2 className="lp-section-title">{isFr ? "L'esprit de Toulouse Wine Trips" : 'The Toulouse Wine Trips Spirit'}</h2>
            <p className="lp-text-lead lp-text-center">
              {isFr
                ? 'Une approche locale et sur mesure pour connecter vos groupes aux meilleurs vins autour de Toulouse.'
                : 'A local, curated approach designed to connect your groups with the best wine experiences around Toulouse.'}
            </p>
          </div>

          <div className="lp-grid lp-grid-3 lp-home-card-grid lp-steps-grid">
            {[0, 1, 2].map((index) => {
              const imageByIndex = [
                '/images/home-card-1.jpg',
                '/images/home-card-2.jpg',
                '/images/home-card-3.jpg',
              ][index];

              return (
                <article key={data.sections[index]?.title ?? index} className="lp-clean-card lp-card-hover" data-reveal>
                  <div className="lp-clean-card-image-wrap">
                    <img src={withBasePath(imageByIndex)} alt="Wine experience" className="card-image" />
                  </div>
                  <h3 className="lp-clean-card-title">{data.sections[index]?.title}</h3>
                  <p className="lp-clean-card-text">{data.sections[index]?.body ?? data.sections[index]?.bullets?.join(', ')}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lp-section lp-home-section lp-section-alt lp-how-works-section">
        <div className="lp-container">
          <div className="lp-section-head lp-section-head-center" data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Comment ca marche' : 'How it works'}</span>
            <h2 className="lp-section-title">{isFr ? 'Planifiez votre experience vin' : 'Plan your wine experience'}</h2>
            <p className="lp-text-lead lp-text-center">
              {isFr
                ? 'Trois etapes claires pour planifier votre degustation ou votre escapade dans les vignes.'
                : 'Plan your tasting or vineyard trip in three clear steps.'}
            </p>
          </div>
          <div className="lp-grid lp-grid-3 lp-home-card-grid lp-how-works-grid">
            {[
              {
                icon: 'assignment',
                title: isFr ? '1. Partagez votre besoin' : '1. Share your brief',
                text: isFr
                  ? 'Date, taille du groupe, langue, et type dexperience souhaitee.'
                  : 'Date, group size, language, and preferred experience format.',
              },
              {
                icon: 'mail',
                title: isFr ? '2. Recevez un devis clair' : '2. Receive a clear quote',
                text: isFr
                  ? 'Nous envoyons une proposition detaillee avec tarifs et options.'
                  : 'We send a detailed proposal with pricing and options.',
              },
              {
                icon: 'check_circle',
                title: isFr ? '3. Validez et profitez' : '3. Confirm and enjoy',
                text: isFr
                  ? 'Nous coordonnons les details pour une execution fluide le jour J.'
                  : 'We coordinate the details for smooth execution on event day.',
              },
            ].map((step) => (
              <article key={step.title} className="lp-clean-card lp-card-hover lp-step-card" data-reveal>
                <div className="lp-step-icon-wrap" aria-hidden="true">
                  <Icon name={step.icon} className="lp-step-icon" />
                </div>
                <h3 className="lp-clean-card-title">{step.title}</h3>
                <p className="lp-clean-card-text lp-step-text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-home-section lp-section-highlight lp-live-experience-section">
        <div className="lp-container lp-grid lp-grid-2 lp-live-grid">
          <div className="lp-live-copy lp-live-copy-clean" data-reveal>
            <h2 className="lp-section-title">{isFr ? "Vivez l'experience" : 'Live the Experience'}</h2>
            <p className="lp-text-lead lp-live-text">
              {isFr
                ? 'Nous creons des degustations privees, des escapades vignobles et des formats groupe avec un service premium.'
                : 'We craft private tastings, vineyard escapes, and group formats with premium service and local expertise.'}
            </p>
            <Link href={getLocalizedPath(locale, '/groups')} className="lp-btn lp-btn-primary lp-live-cta">
              {isFr ? 'Planifier une experience groupe' : 'Plan a group experience'}
            </Link>
          </div>

          <div className="quote-box lp-live-quote" data-reveal>
            <img src={withBasePath('/images/home-live-experience.webp')} alt="Wine cellar tasting ambiance in Toulouse" className="lp-card-image" />
            <blockquote className="quote-text">
              {isFr
                ? '"Une experience fluide, chaleureuse et tres bien organisee pour notre equipe internationale."'
                : '"A smooth, warm, and beautifully organized wine experience for our international team."'}
            </blockquote>
            <p className="quote-attribution">{isFr ? 'Temoignage client' : 'Client feedback'}</p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-home-section lp-section-light">
        <div className="lp-container">
          <div className="lp-section-head lp-section-head-center" data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Tarifs indicatifs' : 'Pricing guidance'}</span>
            <h2 className="lp-section-title">{isFr ? 'Reperes de budget' : 'Budget guide'}</h2>
          </div>

          <div className="lp-grid lp-grid-3 lp-home-card-grid lp-pricing-grid">
            {[
              {
                date: isFr ? 'DISCOVERY' : 'DISCOVERY',
                title: isFr ? 'A partir de 30 € / pers.' : 'From €30 / person',
                text: isFr ? 'Format accessible pour une premiere approche des vins.' : 'Accessible format for a first wine discovery.',
              },
              {
                date: isFr ? 'SIGNATURE' : 'SIGNATURE',
                title: isFr ? 'A partir de 60 € / pers.' : 'From €60 / person',
                text: isFr ? 'Selection premium avec accompagnement approfondi.' : 'Premium selection with deeper hosting and guidance.',
              },
              {
                date: isFr ? 'GROUPES & ENTREPRISES' : 'GROUPS & CORPORATE',
                title: isFr ? 'Tarif personnalise' : 'Custom pricing',
                text: isFr ? 'Devis adapte selon la taille du groupe et la logistique.' : 'Quote tailored to group size and logistics.',
                image: '/images/home-budget-custom-pricing.jpg',
              },
            ].map((item) => (
              <article key={item.title} className="lp-clean-card news-card lp-card-hover" data-reveal>
                {item.image ? (
                  <div className="lp-clean-card-image-wrap">
                    <img src={withBasePath(item.image)} alt={isFr ? 'Photo de groupe pour devis personnalise' : 'Group experience for custom pricing'} className="card-image" />
                  </div>
                ) : null}
                <p className="news-date">{item.date}</p>
                <h3 className="lp-clean-card-title">{item.title}</h3>
                <p className="lp-clean-card-text">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="lp-pricing-cta" data-reveal>
            <Link href={getLocalizedPath(locale, '/quote')} className="lp-btn lp-btn-primary">
              {isFr ? 'Demander un devis' : 'Request a quote'}
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-section lp-home-section lp-section-alt">
        <div className="lp-container">
          <div className="lp-section-head lp-section-head-center" data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Formats' : 'Formats'}</span>
            <h2 className="lp-section-title">{isFr ? 'Nos experiences principales' : 'Our core experiences'}</h2>
          </div>

          <div className="lp-wine-grid">
            {[
              {
                title: isFr ? 'Degustation Discovery' : 'Discovery tasting',
                desc: isFr ? 'Format accessible et pedagogique.' : 'Accessible and educational format.',
                image: '/images/home-format-discovery.webp',
                badge: isFr ? 'Accessible' : 'Accessible',
              },
              {
                title: isFr ? 'Degustation Signature' : 'Signature tasting',
                desc: isFr ? 'Selection premium et storytelling.' : 'Premium wine selection and storytelling.',
                image: '/images/home-format-signature.webp',
                badge: isFr ? 'Premium' : 'Premium',
              },
              {
                title: isFr ? 'Wine trips vignobles' : 'Vineyard wine trips',
                desc: isFr ? 'Escapades demi-journee ou journee complete.' : 'Half-day and full-day vineyard escapes.',
                image: '/images/home-format-vineyard-trip.webp',
                badge: isFr ? 'Sur mesure' : 'Custom',
              },
              {
                title: isFr ? 'Evenements groupes' : 'Group events',
                desc: isFr ? 'Formats entreprise et prives adaptes.' : 'Corporate and private group formats.',
                image: '/images/home-format-group-event.webp',
                badge: isFr ? 'Groupe' : 'Group',
              },
            ].map((item) => (
              <article key={item.title} className="lp-wine-card lp-card-hover" data-reveal>
                <div className="lp-wine-image-wrap">
                  <img src={withBasePath(item.image)} alt={item.title} className="lp-wine-image" />
                </div>
                <div className="lp-wine-content">
                  <span className="wine-badge">{item.badge}</span>
                  <h3 className="lp-clean-card-title">{item.title}</h3>
                  <p className="lp-clean-card-text">{item.desc}</p>
                  <Link href={getLocalizedPath(locale, '/quote')} className="lp-btn lp-btn-outline-dark lp-wine-cta">
                    {isFr ? 'Decouvrir' : 'Explore'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-home-section location-section">
        <div className="lp-container lp-grid lp-grid-2 lp-contact-grid">
          <div data-reveal>
            <span className="lp-section-kicker">{isFr ? 'Nous trouver' : 'Find us'}</span>
            <h2 className="lp-section-title">{isFr ? 'Toulouse et alentours' : 'Toulouse and nearby vineyards'}</h2>
            <p className="lp-text-lead lp-contact-text">
              {isFr
                ? 'Nous organisons vos experiences dans Toulouse et vers les domaines partenaires autour de la ville.'
                : 'We organize experiences in Toulouse and with partner vineyards around the city.'}
            </p>
            <div className="contact-card">
              <p className="contact-item">
                <span className="contact-label">{isFr ? 'Lieu:' : 'Location:'}</span>
                <span className="contact-value">Toulouse, France</span>
              </p>
              <p className="contact-item">
                <span className="contact-label">Email:</span>
                <a className="contact-value contact-link" href="mailto:contact@toulousewinetrips.com">
                  contact@toulousewinetrips.com
                </a>
              </p>
              <p className="contact-item">
                <span className="contact-label">{isFr ? 'Telephone:' : 'Phone:'}</span>
                <a className="contact-value contact-link" href="tel:+33600000000">
                  +33 6 00 00 00 00
                </a>
              </p>
            </div>
          </div>

          <div className="location-map-shell" data-reveal>
            <div className="location-map-container">
              <iframe
                title="Toulouse map"
                loading="lazy"
                src="https://www.google.com/maps?q=Toulouse,+France&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section lp-home-section lp-section-highlight">
        <div className="lp-container lp-grid lp-grid-2 lp-dark-feature">
          <div data-reveal>
            <h2 className="lp-section-title">
              {isFr ? 'Pret a organiser votre experience vin ?' : 'Ready to plan your wine experience?'}
            </h2>
            <p className="lp-text-lead lp-live-text">
              {isFr
                ? 'Parlez-nous de votre date, votre groupe et vos attentes. Nous revenons avec un devis clair et rapide.'
                : 'Tell us your date, group profile, and goals. We will reply with a clear and fast proposal.'}
            </p>
            <div className="lp-actions">
              <Link href={getLocalizedPath(locale, '/quote')} className="lp-btn lp-btn-primary">
                {isFr ? 'Demander un devis maintenant' : 'Request a quote now'}
              </Link>
              <Link href={getLocalizedPath(locale, '/faq')} className="lp-btn lp-btn-outline-dark">
                {isFr ? 'Voir les questions frequentes' : 'View common questions'}
              </Link>
            </div>
          </div>
          <div className="quote-box" data-reveal>
            <img src={withBasePath('/images/home-live-experience.webp')} alt="Wine tasting guests in Toulouse" className="lp-card-image" />
            <p className="quote-text">
              {isFr
                ? '"Equipe reactive, format adapte, et experience memorable pour nos invites."'
                : '"Responsive team, tailored format, and a memorable experience for our guests."'}
            </p>
            <p className="quote-attribution">{isFr ? 'Avis client' : 'Client review'}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
