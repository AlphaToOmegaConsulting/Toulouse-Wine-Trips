'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';
import { footerCopy, getLangFromPathname, getLocalizedPath, navCopy } from '@/lib/i18n';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  const normalizePath = (path: string | null) => {
    if (!path) return '/';
    const base = withBasePath('/');
    let normalized = path;
    if (base !== '/' && normalized.startsWith(base)) normalized = normalized.slice(base.length - 1) || '/';
    if (normalized.length > 1 && normalized.endsWith('/')) normalized = normalized.slice(0, -1);
    return normalized || '/';
  };

  const currentPath = normalizePath(pathname);
  const currentLang = getLangFromPathname(currentPath);
  const navItems = navCopy.items(currentLang);
  const phoneLabel = currentLang === 'fr' ? 'Telephone' : 'Phone';
  const hoursTitle = currentLang === 'fr' ? 'Horaires' : 'Hours';
  const monSatText = currentLang === 'fr' ? 'Lun-Sam: 9:00 - 19:00' : 'Mon-Sat: 9:00 - 19:00';
  const sundayText = currentLang === 'fr' ? 'Dimanche: Groupes prives uniquement' : 'Sunday: Private groups only';
  const bookingsText = currentLang === 'fr' ? 'Reservations sur demande' : 'Bookings by request';

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="lp-footer">
      <div className="lp-container">
        <div className="lp-footer-grid">
          <div className="lp-footer-col lp-footer-brand-col">
            <img className="lp-footer-logo" src={withBasePath('/images/lapistoule-temp/logo-light.webp')} alt="Toulouse Wine Trips" />
            <p className="lp-footer-description">{footerCopy.description(currentLang)}</p>
            <div className="lp-footer-social">
              <a className="lp-footer-social-link" href="#" aria-label="Instagram">Instagram</a>
              <a className="lp-footer-social-link" href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>

          <div className="lp-footer-col">
            <h4 className="lp-footer-heading">{footerCopy.explore(currentLang)}</h4>
            <div className="lp-footer-links">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={normalizePath(item.href) === currentPath ? 'lp-footer-nav-link lp-footer-nav-link-active' : 'lp-footer-nav-link'}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lp-footer-col">
            <h4 className="lp-footer-heading">{footerCopy.contactTitle(currentLang)}</h4>
            <div className="lp-footer-contact-list">
              <p><span className="lp-footer-label">{footerCopy.locationLabel(currentLang)}:</span> {footerCopy.locationValue(currentLang)}</p>
              <p>
                <span className="lp-footer-label">{footerCopy.emailLabel(currentLang)}:</span>{' '}
                <a href="mailto:contact@toulouse-wine-trips.fr">contact@toulouse-wine-trips.fr</a>
              </p>
              <p>
                <span className="lp-footer-label">{phoneLabel}:</span>{' '}
                <a href="tel:+33600000000">+33 6 00 00 00 00</a>
              </p>
            </div>
          </div>

          <div className="lp-footer-col">
            <h4 className="lp-footer-heading">{hoursTitle}</h4>
            <div className="lp-footer-hours">
              <p>{monSatText}</p>
              <p>{sundayText}</p>
              <p>{bookingsText}</p>
            </div>
          </div>
        </div>

        <div className="lp-footer-bottom">
          <p className="lp-footer-copyright">{footerCopy.copyright(currentLang)}</p>
          <div className="lp-footer-policy-links">
            <Link href={getLocalizedPath(currentLang, '/privacy')}>{footerCopy.privacy(currentLang)}</Link>
            <Link href={getLocalizedPath(currentLang, '/terms')}>{footerCopy.terms(currentLang)}</Link>
          </div>
        </div>

        <div className="lp-footer-legal">
          Alcohol abuse is dangerous for health. Please drink responsibly. Sale of alcohol is prohibited to minors under 18.
        </div>
      </div>

      {showTop ? (
        <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span aria-hidden="true">↑</span>
          <span className="back-to-top-text">Top</span>
        </button>
      ) : null}
    </footer>
  );
};

export default Footer;
