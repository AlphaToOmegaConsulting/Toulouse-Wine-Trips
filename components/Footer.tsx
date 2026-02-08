'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';
import { footerCopy, getLangFromPathname, navCopy } from '@/lib/i18n';

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
            <h2 className="text-3xl font-bold tracking-tight uppercase">Manaka<span className="text-primary">.</span>Japanese</h2>
          </div>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">{footerCopy.description(currentLang)}</p>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <span className="material-symbols-outlined text-xl">public</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <span className="material-symbols-outlined text-xl">share</span>
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
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wider">{footerCopy.locationLabel(currentLang)}</p>
                <p className="text-sm">{footerCopy.locationValue(currentLang)}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">mail</span>
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
          <button className="hover:text-white transition-colors">{footerCopy.privacy(currentLang)}</button>
          <button className="hover:text-white transition-colors">{footerCopy.terms(currentLang)}</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
