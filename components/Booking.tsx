'use client';

import React, { useCallback, useEffect } from 'react';
import Script from 'next/script';
import { withBasePath } from '@/lib/base-path';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { bookingCopy, getLocalizedPath, type Lang } from '@/lib/i18n';

type BookingProps = {
  lang?: Lang;
};

const Booking: React.FC<BookingProps> = ({ lang = 'en' }) => {
  const contactImage = withBasePath('/images/booking-top-right.png');
  const contactImageAlt = 'Illustration of an online Japanese lesson on a desk';

  const initTallyEmbeds = useCallback(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w?.Tally?.loadEmbeds) {
        w.Tally.loadEmbeds();
        return;
      }

      document
        .querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])')
        .forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc ?? '';
        });
    } catch {
      // Non-fatal: keep page rendering even if embed init fails.
    }
  }, []);

  useEffect(() => {
    initTallyEmbeds();
  }, [initTallyEmbeds]);

  return (
    <div className="bg-white">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={initTallyEmbeds}
        onError={initTallyEmbeds}
      />
      <PageHero
        eyebrowJa={bookingCopy.eyebrowJa()}
        eyebrowEn={bookingCopy.eyebrowEn(lang)}
        title={
          <>
            {bookingCopy.titlePrefix(lang)} <span className="text-primary">{bookingCopy.titleAccent(lang)}</span>
          </>
        }
        description={bookingCopy.description(lang)}
        imageSrc={contactImage}
        imageAlt={contactImageAlt}
        imageSide="left"
        ctas={[
          { href: getLocalizedPath(lang, '/quote#inquiry-form'), label: bookingCopy.sendInquiry(lang), variant: 'primary' },
          { href: getLocalizedPath(lang, '/tastings'), label: bookingCopy.viewLessons(lang), variant: 'secondary' },
        ]}
      />

      <main className="site-content site-x section-y text-left" data-reveal>
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-16">
          <div className="w-full lg:w-2/3" data-reveal>
            <div id="inquiry-form" className="bg-white p-10 rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/50" data-reveal>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {bookingCopy.inquiryForm(lang)}
              </h3>
              <iframe
                data-tally-src="https://tally.so/embed/jaQa76?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="849"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={bookingCopy.formTitle(lang)}
              />
            </div>
          </div>

          <div
            className="w-full lg:w-1/3 flex flex-col gap-8 h-full"
            data-reveal
            style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          >
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200" data-reveal>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="contact_support" className="text-primary" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{bookingCopy.directInfo(lang)}</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="mail" className="text-slate-400 text-sm" />
                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">{bookingCopy.emailAddress(lang)}</p>
                  </div>
                  <a href="mailto:contact@manaka-japanese.fr" className="text-primary font-bold hover:underline">
                    contact@manaka-japanese.fr
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="schedule" className="text-slate-400 text-sm" />
                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">{bookingCopy.businessHours(lang)}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-500 font-medium">
                    <li className="flex justify-between border-b border-slate-200 pb-1">
                      <span>{bookingCopy.mondayFriday(lang)}</span>
                      <span className="text-slate-900 font-bold">10:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-1">
                      <span>{bookingCopy.saturday(lang)}</span>
                      <span className="text-slate-900 font-bold">10:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>{bookingCopy.sunday(lang)}</span>
                      <span className="text-slate-900 font-bold">{bookingCopy.closed(lang)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="bg-primary/5 p-10 rounded-2xl border border-primary/10"
              data-reveal
              style={{ '--reveal-delay': '70ms' } as React.CSSProperties}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon name="bolt" className="text-primary" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{bookingCopy.fastResponse(lang)}</h3>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">
                {bookingCopy.fastResponseText1(lang)} <span className="text-primary font-bold">{bookingCopy.fastResponseText2(lang)}</span>{bookingCopy.fastResponseText3(lang)}
              </p>
            </div>

            <div
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mt-auto"
              data-reveal
              style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon name="place" className="text-slate-400" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{bookingCopy.locations(lang)}</h3>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{bookingCopy.locationsDesc(lang)}</p>
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Toulouse,+France&z=13&output=embed"
                  width="100%"
                  height="170"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={bookingCopy.mapTitle(lang)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
