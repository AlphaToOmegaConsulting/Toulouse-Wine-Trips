'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';
import { footerCopy, getLangFromPathname, getLocalizedPath, navCopy } from '@/lib/i18n';

const Footer: React.FC = () => {
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

  return (
    <footer className="bg-[#1a1a1a] text-white section-y site-x border-t-8 border-primary text-left">
      <div className="site-content grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight uppercase">Toulouse<span className="text-primary">.</span>Wine Trips</h2>
          </div>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">{footerCopy.description(currentLang)}</p>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2zm7.93 9h-3.09a15.6 15.6 0 0 0-1.36-5A8.03 8.03 0 0 1 19.93 11zM12 4c.93 0 2.32 2.05 2.84 7H9.16C9.68 6.05 11.07 4 12 4zM6.52 6a15.6 15.6 0 0 0-1.36 5H2.07A8.03 8.03 0 0 1 6.52 6zM4.07 13h3.09a15.6 15.6 0 0 0 1.36 5A8.03 8.03 0 0 1 4.07 13zM12 20c-.93 0-2.32-2.05-2.84-7h5.68C14.32 17.95 12.93 20 12 20zm3.48-2a15.6 15.6 0 0 0 1.36-5h3.09a8.03 8.03 0 0 1-4.45 5z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 16a2.98 2.98 0 0 0-2.39 1.2l-6.16-3.08a3 3 0 0 0 0-2.24l6.16-3.08A3 3 0 1 0 15 7a2.9 2.9 0 0 0 .08.68L8.92 10.76a3 3 0 1 0 0 2.48l6.16 3.08A2.9 2.9 0 0 0 15 17a3 3 0 1 0 3-3z" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-8 text-white uppercase tracking-[0.2em] text-xs">{footerCopy.explore(currentLang)}</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary transition-colors flex items-center gap-2 uppercase text-xs tracking-widest">
                  <span className="w-1 h-1 bg-primary rounded-full"></span> {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={navCopy.contactHref(currentLang)} className="hover:text-primary transition-colors flex items-center gap-2 uppercase text-xs tracking-widest">
                <span className="w-1 h-1 bg-primary rounded-full"></span> {navCopy.contactCta(currentLang)}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-8 text-white uppercase tracking-[0.2em] text-xs">{footerCopy.contactTitle(currentLang)}</h4>
          <ul className="space-y-6 text-gray-400">
            <li className="flex items-start gap-4">
              <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" />
              </svg>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wider">{footerCopy.locationLabel(currentLang)}</p>
                <p className="text-sm">{footerCopy.locationValue(currentLang)}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5z" />
              </svg>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wider">{footerCopy.emailLabel(currentLang)}</p>
                <p className="text-sm">contact@manaka-japanese.fr</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-content mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
        <p>{footerCopy.copyright(currentLang)}</p>
        <div className="flex gap-10">
          <Link href={getLocalizedPath(currentLang, '/privacy')} className="hover:text-white transition-colors">
            {footerCopy.privacy(currentLang)}
          </Link>
          <Link href={getLocalizedPath(currentLang, '/terms')} className="hover:text-white transition-colors">
            {footerCopy.terms(currentLang)}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
