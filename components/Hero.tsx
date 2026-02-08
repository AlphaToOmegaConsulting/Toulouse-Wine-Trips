'use client';

import React, { useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import PageHero from '@/components/PageHero';
import { getLocalizedPath, homeCopy, homeFormats, homeSteps, type Lang } from '@/lib/i18n';

type HeroProps = {
  lang?: Lang;
};

const Hero: React.FC<HeroProps> = ({ lang = 'en' }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const manakaHeroImage = withBasePath('/images/profile-manaka.jpg');

  const formats = homeFormats(lang);
  const howItWorks = homeSteps(lang);

  return (
    <div className="flex-1">
      <PageHero
        eyebrowJa={homeCopy.eyebrowJa()}
        eyebrowEn={homeCopy.eyebrowEn(lang)}
        title={
          <>
            {homeCopy.titlePrefix(lang)}{' '}
            <span className="inline-block text-primary [text-shadow:0_10px_28px_rgba(212,0,58,0.2)]">{homeCopy.titleAccent(lang)}</span>
          </>
        }
        description={homeCopy.description(lang)}
        imageSrc={manakaHeroImage}
        imageAlt="Manaka - Japanese tutor in Toulouse"
        imageSide="right"
        ctas={[
          { href: getLocalizedPath(lang, '/booking'), label: homeCopy.ctaPrimary(lang), variant: 'primary' },
          { href: getLocalizedPath(lang, '/lessons'), label: homeCopy.ctaSecondary(lang), variant: 'secondary' },
        ]}
      />

      <section className="section-y site-x bg-slate-50" data-reveal>
        <div className="site-content">
          <div className="flex flex-col items-center text-center mb-20 space-y-4" data-reveal>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">{homeCopy.lessonFormatsTitle(lang)}</h2>
            <p className="text-slate-500 max-w-2xl text-lg">{homeCopy.lessonFormatsDesc(lang)}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {formats.map((format, i) => (
              <article
                key={i}
                className="group flex flex-col bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 rounded-lg border border-slate-100"
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="h-52 overflow-hidden border-b border-slate-100">
                  <img
                    src={format.image}
                    alt={format.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 text-center">
                  <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">{format.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm">{format.desc}</p>
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-center">
                    <p className="text-sm font-black text-white uppercase tracking-widest bg-primary px-4 py-2 rounded-md">
                      {format.price}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y site-x bg-white border-y border-slate-100" data-reveal>
        <div className="site-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left" data-reveal>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase tracking-tight leading-none">
                {homeCopy.howLessonsWorkTitleLine1(lang)} <br /><span className="text-primary">{homeCopy.howLessonsWorkTitleLine2(lang)}</span>
              </h2>
              <p className="text-slate-500 text-lg mb-12">{homeCopy.howLessonsWorkDesc(lang)}</p>
              <div className="space-y-6" onMouseLeave={() => setActiveStepIndex(0)}>
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveStepIndex(index)}
                    className={`flex items-center gap-6 bg-white p-6 shadow-sm border-l-4 transition-all duration-300 ${
                      activeStepIndex === index ? 'border-primary' : 'border-slate-100'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center min-w-[50px]">
                      <span className="text-2xl font-black text-slate-300">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{step.title}</h4>
                      <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative h-[600px] overflow-hidden rounded-lg shadow-2xl"
              data-reveal
              style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
            >
              <img
                alt={homeCopy.imageAlt(lang)}
                className="w-full h-full object-cover"
                src={withBasePath('/images/lessons-hero.png')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12 text-left">
                <p className="text-white text-3xl font-black leading-tight italic">{homeCopy.imageQuote(lang)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
