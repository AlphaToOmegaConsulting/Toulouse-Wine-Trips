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
          <span className="lp-brand-main">TWT</span>
          <span className="lp-brand-sub">Curated Experiences</span>
          <span className="lp-brand-accent" aria-hidden="true" />
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
            {languageOptions.map((option) => (
              <Link
                key={option.lang}
                href={getLanguageSwitchHref(option.lang)}
                aria-label={`Switch to ${option.label}`}
                className={`lp-lang-btn ${currentLang === option.lang ? 'lp-current' : ''}`}
              >
                <span aria-hidden="true">{option.code}</span>
              </Link>
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
            <p style={{ margin: 0, opacity: 0.8 }}>Toulouse, France</p>
            <div className="flex gap-4 mt-1">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c3.2 0 3.6 0 4.9.1 3.2.1 4.8 1.7 4.9 4.9.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-4.8-1.7-4.9-4.9C2 15.6 2 15.2 2 12s0-3.6.1-4.9c.1-3.2 1.7-4.8 4.9-4.9C8.4 2 8.8 2 12 2zm0 5.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8zm0 6.9A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7zm5.4-7.9a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3h4V0h-4a5 5 0 0 0-5 5v3H5v4h3v9h4v-9h4l1-4h-5V5a1 1 0 0 1 1-1z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
