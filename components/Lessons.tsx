import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/base-path';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import {
  getLocalizedPath,
  lessonsCopy,
  lessonsFaq,
  lessonsFormats,
  lessonsIncludedItems,
  type Lang,
} from '@/lib/i18n';

type LessonsProps = {
  lang?: Lang;
};

const Lessons: React.FC<LessonsProps> = ({ lang = 'en' }) => {
  const lessonFormats = lessonsFormats(lang);
  const includedItems = lessonsIncludedItems(lang);
  const faqItems = lessonsFaq(lang);

  const faqIllustration = withBasePath('/images/faq-illustration.png');
  const heroImage = withBasePath('/images/lessons-hero.png');

  return (
    <div className="bg-white">
      <PageHero
        eyebrowJa={lessonsCopy.eyebrowJa()}
        eyebrowEn={lessonsCopy.eyebrowEn(lang)}
        title={
          <>
            {lessonsCopy.titlePrefix(lang)} <span className="text-primary">{lessonsCopy.titleAccent(lang)}</span>
          </>
        }
        description={lessonsCopy.description(lang)}
        imageSrc={heroImage}
        imageAlt="Japanese lesson materials"
        imageSide="right"
        ctas={[
          { href: getLocalizedPath(lang, '/quote'), label: lessonsCopy.ctaPrimary(lang), variant: 'primary' },
          { href: getLocalizedPath(lang, '/quote'), label: lessonsCopy.ctaSecondary(lang), variant: 'secondary' },
        ]}
      />

      <div className="site-x section-y bg-white" data-reveal>
        <div className="site-content space-y-14 lg:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch" data-reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 text-left h-full flex flex-col justify-between" data-reveal>
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-primary"></div>
                  <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">{lessonsCopy.whatYouGet(lang)}</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[0.95] tracking-tight uppercase font-display">
                  {lessonsCopy.realLessonsTitle1(lang)} <br />{lessonsCopy.realLessonsTitle2(lang)}
                </h2>
                <p className="text-slate-500 text-lg font-medium max-w-xl leading-relaxed">{lessonsCopy.realLessonsDesc(lang)}</p>
              </div>
            </div>

            <div
              className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:p-10 text-left h-full space-y-6"
              data-reveal
              style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-primary"></div>
                  <p className="text-primary font-black tracking-[0.3em] text-xs uppercase">{lessonsCopy.includedEyebrow(lang)}</p>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1] tracking-tight uppercase font-display">
                  {lessonsCopy.includedTitle1(lang)} <br />{lessonsCopy.includedTitle2(lang)}
                </h3>
              </div>

              <ul className="space-y-4 pt-1">
                {includedItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 leading-relaxed ${
                      idx < 2 ? 'text-slate-900 text-base sm:text-lg font-bold' : 'text-slate-600 text-base font-medium'
                    }`}
                  >
                    <Icon name="check_circle" className={`text-primary mt-[2px] ${idx < 2 ? 'text-xl' : 'text-lg'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6" data-reveal>
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">{lessonsCopy.lessonFormatsEyebrow(lang)}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
            {lessonFormats.map((format, idx) => (
              <div
                key={idx}
                className="group border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 h-full"
                data-reveal
                style={{ '--reveal-delay': `${idx * 70}ms` } as React.CSSProperties}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 h-full">
                  <div className="w-20 h-20 rounded-full border-2 border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:scale-110 bg-slate-50">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary/5">
                      <Icon name={format.icon} className="text-3xl" />
                    </div>
                  </div>

                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <p className="text-xs font-black tracking-[0.22em] uppercase text-primary mb-2">{format.subtitle}</p>
                      <h3 className="text-[1.7rem] font-black text-slate-900 tracking-tight transition-colors group-hover:text-primary leading-tight">
                        {format.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-base font-medium leading-relaxed max-w-xl">
                      {format.description}
                    </p>
                    <ul className="space-y-2 pt-1">
                      {format.pricing.map((line, lineIdx) => (
                        <li key={lineIdx} className="text-base text-slate-700 font-semibold flex items-start gap-2">
                          <span className="text-primary leading-5">-</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={getLocalizedPath(lang, '/quote')}
                      className="inline-flex items-center gap-2 text-base font-black text-primary uppercase tracking-widest pt-2 hover:gap-4 transition-all mt-auto"
                    >
                      {lessonsCopy.checkAvailability(lang)} <Icon name="arrow_forward" className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      <div className="site-x section-y bg-[#fffcf9] border-t border-orange-50 relative overflow-hidden" data-reveal>
        <div className="absolute bottom-0 right-0 p-10 opacity-[0.02] select-none pointer-events-none">
          <span className="japanese-title text-[35rem] leading-none text-slate-900">答</span>
        </div>
        <div className="site-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12" data-reveal>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                  <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs">{lessonsCopy.faqEyebrow(lang)}</h2>
                </div>
                <h3 className="text-slate-900 text-6xl font-black uppercase tracking-tighter font-display leading-[0.9]">{lessonsCopy.faqTitle()}</h3>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">{lessonsCopy.faqDesc(lang)}</p>
              </div>
              <div className="relative group max-w-md">
                <div className="absolute -inset-6 bg-primary/5 rounded-[4rem] blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                <div className="relative z-10 aspect-[4/5] overflow-hidden flex items-center justify-center">
                  <Image
                    src={faqIllustration}
                    alt="Watercolor illustration of a thinking student"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            <div
              className="space-y-6 pt-12 lg:pt-0"
              data-reveal
              style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
            >
              {faqItems.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-[2.5rem] border border-orange-100/40 shadow-sm hover:shadow-md transition-all duration-500 open:shadow-xl open:border-primary/10 overflow-hidden"
                  open={idx === 0}
                  data-reveal
                  style={{ '--reveal-delay': `${idx * 55}ms` } as React.CSSProperties}
                >
                  <summary className="flex items-center justify-between p-10 cursor-pointer list-none">
                    <span className="text-xl font-black text-slate-900 pr-12 leading-tight">
                      <span className="text-primary mr-4 italic text-2xl">Q.</span>{faq.q}
                    </span>
                    <Icon name="expand_more" className="text-primary group-open:rotate-180 transition-transform duration-500" />
                  </summary>
                  <div className="px-10 pb-10 pt-2">
                    <div className="w-12 h-1 bg-slate-50 mb-8 rounded-full"></div>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
              <div className="mt-16 p-10 bg-white rounded-[3rem] border border-dashed border-slate-200 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">{lessonsCopy.needInfo(lang)}</p>
                <Link
                  href={getLocalizedPath(lang, '/quote')}
                  className="text-primary font-black uppercase tracking-[0.2em] text-sm hover:text-slate-900 transition-colors"
                >
                  {lessonsCopy.contactDirectly(lang)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-x section-y bg-white" data-reveal>
        <div className="site-content">
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 lg:p-14 flex flex-col items-center justify-center gap-7 text-white relative overflow-hidden shadow-2xl text-center">
            <div className="absolute -top-10 left-4 md:left-8 opacity-10 select-none pointer-events-none">
              <span className="japanese-title text-[7rem] md:text-[10rem] leading-none text-white">学</span>
            </div>
            <div className="absolute -bottom-12 right-4 md:right-8 opacity-10 select-none pointer-events-none">
              <span className="japanese-title text-[7rem] md:text-[10rem] leading-none text-white">ぶ</span>
            </div>
            <div className="flex flex-col gap-4 text-center relative z-10 max-w-2xl">
              <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter font-display leading-none">
                {lessonsCopy.finalCtaTitle1(lang)} <br />{lessonsCopy.finalCtaTitle2(lang)}
              </h2>
              <p className="text-xl font-medium text-white/90 max-w-xl mx-auto">{lessonsCopy.finalCtaDesc(lang)}</p>
            </div>
            <Link
              href={getLocalizedPath(lang, '/quote')}
              className="btn-lift bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-2xl active:scale-95 relative z-10 whitespace-nowrap"
            >
              {lessonsCopy.finalCtaButton(lang)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
