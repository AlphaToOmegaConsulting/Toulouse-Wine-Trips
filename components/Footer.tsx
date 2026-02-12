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

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="lp-footer">
      <div className="lp-container">
        <div className="lp-footer-grid">
          <div>
            <img src={withBasePath('/images/lapistoule-temp/logo-light.webp')} alt="Toulouse Wine Trips" style={{ height: '54px', marginBottom: '1rem' }} />
            <p style={{ maxWidth: '26rem', opacity: 0.82 }}>{footerCopy.description(currentLang)}</p>
            <div className="flex gap-4 mt-3">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>

          <div>
            <h4 className="lp-footer-heading">{footerCopy.explore(currentLang)}</h4>
            <div className="lp-footer-links">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>{item.name}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="lp-footer-heading">{footerCopy.contactTitle(currentLang)}</h4>
            <div className="lp-footer-links">
              <p><strong>{footerCopy.locationLabel(currentLang)}:</strong> {footerCopy.locationValue(currentLang)}</p>
              <p><strong>{footerCopy.emailLabel(currentLang)}:</strong> contact@toulouse-wine-trips.fr</p>
              <p><strong>Phone:</strong> +33 6 00 00 00 00</p>
            </div>
          </div>

          <div>
            <h4 className="lp-footer-heading">Hours</h4>
            <div className="lp-footer-links">
              <p>Mon-Sat: 9:00 - 19:00</p>
              <p>Sunday: Private groups only</p>
              <p>Bookings by request</p>
            </div>
          </div>
        </div>

        <div className="lp-footer-bottom">
          <p>{footerCopy.copyright(currentLang)}</p>
          <div className="flex gap-5">
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
          ↑
        </button>
      ) : null}
    </footer>
  );
};

export default Footer;
