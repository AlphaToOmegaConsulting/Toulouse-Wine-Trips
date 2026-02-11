'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import { getHomePath, getLangFromPathname, getLocalizedPath, type Lang, navCopy } from '@/lib/i18n';

const languageOptions: Array<{ lang: Lang; flag: string; label: string }> = [
  { lang: 'en', flag: '🇬🇧', label: 'English' },
  { lang: 'fr', flag: '🇫🇷', label: 'French' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const normalizePath = (path: string | null) => {
    if (!path) return '/';

    const base = withBasePath('/');
    let normalized = path;

    if (base !== '/' && normalized.startsWith(base)) {
      normalized = normalized.slice(base.length - 1) || '/';
    }

    if (normalized.length > 1 && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }

    return normalized || '/';
  };

  const currentPath = normalizePath(pathname);
  const currentLang = getLangFromPathname(currentPath);
  const navItems = navCopy.items(currentLang);
  const contactHref = navCopy.contactHref(currentLang);
  const getLanguageSwitchHref = (targetLang: Lang) => getLocalizedPath(targetLang, currentPath);

  const isActive = (href: string) => {
    const homePath = getHomePath(currentLang);
    if (href === homePath) {
      return currentPath === homePath || currentPath === '/';
    }

    return currentPath === href;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md border-gray-100 py-3 shadow-sm' : 'bg-white/85 backdrop-blur-sm border-gray-50 py-3'}`}>
      <div className="site-content site-x flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1">
            {languageOptions.map((option) => (
              <Link
                key={option.lang}
                href={getLanguageSwitchHref(option.lang)}
                aria-label={`Switch to ${option.label}`}
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-lg transition-all ${
                  currentLang === option.lang
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'hover:bg-slate-100'
                }`}
              >
                <span aria-hidden="true">{option.flag}</span>
              </Link>
            ))}
          </div>

          <Link href={getHomePath(currentLang)} className="text-left">
            <h2 className="text-xl font-extrabold leading-tight tracking-tighter font-display uppercase text-slate-900 ml-1">
              Toulouse<span className="text-primary">.</span>Wine
            </h2>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`text-sm font-bold uppercase tracking-wider transition-all border-b-2 py-1 ${isActive(item.href) ? 'text-primary border-primary' : 'text-slate-500 border-transparent hover:text-primary'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={contactHref}
            className={`btn-lift hidden sm:block text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-none transition-all duration-300 ${isActive(contactHref) ? 'bg-slate-900 text-white' : 'bg-primary text-white hover:bg-slate-900'}`}
          >
            {navCopy.contactCta(currentLang)}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 space-y-8">
          <div className="flex items-center gap-3">
            {languageOptions.map((option) => (
              <Link
                key={option.lang}
                href={getLanguageSwitchHref(option.lang)}
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Switch to ${option.label}`}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-xl transition-all ${
                  currentLang === option.lang
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100'
                }`}
              >
                <span aria-hidden="true">{option.flag}</span>
              </Link>
            ))}
          </div>

          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black uppercase tracking-tighter text-left ${isActive(item.href) ? 'text-primary' : 'text-slate-900'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={contactHref}
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl font-black uppercase tracking-tighter text-left ${isActive(contactHref) ? 'text-primary' : 'text-slate-900'}`}
          >
            {navCopy.contactCta(currentLang)}
          </Link>

          <div className="pt-12 border-t border-slate-100">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">{navCopy.mobileGetInTouch(currentLang)}</p>
            <p className="text-slate-900 font-bold">contact@manaka-japanese.fr</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
