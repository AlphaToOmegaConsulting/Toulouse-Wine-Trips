'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';
import { getLangFromPathname } from '@/lib/i18n';

export default function HtmlLangManager() {
  const pathname = usePathname();

  useEffect(() => {
    const base = withBasePath('/');
    let normalizedPath = pathname ?? '/';

    if (base !== '/' && normalizedPath.startsWith(base)) {
      normalizedPath = normalizedPath.slice(base.length - 1) || '/';
    }

    document.documentElement.lang = getLangFromPathname(normalizedPath);
  }, [pathname]);

  return null;
}
