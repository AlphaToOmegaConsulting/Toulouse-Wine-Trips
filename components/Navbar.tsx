'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import { withBasePath } from '@/lib/base-path';
import { getHomePath, getLangFromPathname, getLocalizedPath, type Lang, navCopy } from '@/lib/i18n';

const languageOptions: Array<{ lang: Lang; code: string; label: string }> = [
  { lang: 'en', code: 'EN', label: 'English' },
  { lang: 'fr', code: 'FR', label: 'Francais' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
  const contactHref = navCopy.contactHref(currentLang);
  const homePath = getHomePath(currentLang);

  const getLanguageSwitchHref = (targetLang: Lang) => getLocalizedPath(targetLang, currentPath);

  const isActive = (href: string) => {
    if (href === homePath) return currentPath === homePath || currentPath === '/';
    return currentPath === href;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`lp-header ${isScrolled ? 'lp-scrolled' : ''}`}>
      <div className="lp-container lp-header-row">
        <Link href={homePath} className="lp-brand" aria-label="TWT home">
          <img className="lp-brand-logo" src={withBasePath('/images/site-logo.png')} alt="Toulouse Wine Trips logo" />
        </Link>

        <nav className="lp-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`lp-nav-link ${isActive(item.href) ? 'lp-active' : ''}`}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="lp-header-actions">
          <div className="lp-lang-group">
            {languageOptions.map((option, index) => (
              <React.Fragment key={option.lang}>
                {index > 0 ? <span className="lp-lang-separator" aria-hidden="true">|</span> : null}
                <Link
                  href={getLanguageSwitchHref(option.lang)}
                  aria-label={`Switch to ${option.label}`}
                  className={`lp-lang-btn ${currentLang === option.lang ? 'lp-current' : ''}`}
                >
                  <span aria-hidden="true">{option.code}</span>
                </Link>
              </React.Fragment>
            ))}
          </div>

          <Link href={contactHref} className="lp-btn lp-btn-primary hidden md:inline-flex">
            {navCopy.contactCta(currentLang)}
          </Link>

          <button className="lp-menu-btn md:hidden" type="button" aria-label="Open menu" onClick={() => setIsMenuOpen((prev) => !prev)}>
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div className={`lp-mobile-menu ${isMenuOpen ? 'lp-open' : ''}`}>
        <div className="lp-mobile-inner">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`lp-mobile-link ${isActive(item.href) ? 'lp-active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              {item.name.toUpperCase()}
            </Link>
          ))}
          <Link href={contactHref} className={`lp-mobile-link ${isActive(contactHref) ? 'lp-active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            {navCopy.contactCta(currentLang)}
          </Link>

          <div className="mobile-menu-footer">
            <a href="tel:+33600000000">+33 6 00 00 00 00</a>
            <a href="mailto:contact@toulouse-wine-trips.fr">contact@toulouse-wine-trips.fr</a>
            <p className="lp-mobile-muted">Toulouse, France</p>
            <p className="lp-mobile-muted">{currentLang === 'fr' ? 'Reseaux sociaux en mise a jour' : 'Social links are being updated'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
