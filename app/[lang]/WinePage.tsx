import Link from 'next/link';
import { getLocalizedPath, type Lang } from '@/lib/i18n';
import type { PageData } from './site-copy';

type WinePageProps = {
  lang: Lang;
  data: PageData;
};

export default function WinePage({ lang, data }: WinePageProps) {
  return (
    <main className="site-x section-y bg-white">
      <div className="site-content max-w-5xl text-left space-y-12">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] font-black text-primary">{data.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">{data.title}</h1>
          <p className="text-lg text-slate-600 max-w-3xl">{data.description}</p>
          <Link
            href={getLocalizedPath(lang, data.ctaHref)}
            className="inline-flex items-center bg-primary text-white px-6 py-3 font-black uppercase tracking-[0.16em] text-xs"
          >
            {data.ctaLabel}
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.sections.map((section) => (
            <article key={section.title} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
              <h2 className="text-xl font-black text-slate-900 mb-3">{section.title}</h2>
              {section.body ? <p className="text-slate-600 mb-3">{section.body}</p> : null}
              {section.bullets ? (
                <ul className="space-y-2 text-slate-600">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
