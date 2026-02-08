'use client';

import React, { useCallback, useEffect } from 'react';
import Script from 'next/script';
import { withBasePath } from '@/lib/base-path';

const Booking: React.FC = () => {
  const contactImage = withBasePath('/images/booking-top-right.png');
  const contactImageAlt = 'Illustration of an online Japanese lesson on a desk';

  const initTallyEmbeds = useCallback(() => {
    // Mirrors Tally's recommended snippet:
    // - set iframe.src = iframe.dataset.tallySrc for iframes missing src
    // - call Tally.loadEmbeds() when available
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
      // Non-fatal: if the embed init fails, the rest of the page should still render.
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
      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 text-left">
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex flex-col gap-6 lg:w-2/3">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12" aria-hidden="true"></div>
                  <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">お問い合わせ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-primary"></div>
                  <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">Contact Me</span>
                </div>
              </div>
              <h2 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900 uppercase">
                Book Your <br />Trial <span className="text-primary">Lesson.</span>
              </h2>
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-2xl">
                Tell me your level, goals, and preferred format. I will help you choose a practical lesson plan that fits your needs.
              </p>
            </div>

            <div className="w-full lg:w-1/3 relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>

              <div className="relative z-10 aspect-square overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
                <img
                  src={contactImage}
                  alt={contactImageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl rounded-2xl border border-gray-100 hidden md:block z-20">
                <p className="text-primary font-black uppercase text-[10px] tracking-widest">Trial Lesson</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-16">
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Inquiry Form
              </h3>
              <iframe
                data-tally-src="https://tally.so/embed/jaQa76?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="849"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Book Your Trial Lesson"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8 h-full">
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">contact_support</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Direct Info</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-slate-400 text-sm">mail</span>
                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Email Address</p>
                  </div>
                  <a href="mailto:contact@manaka-japanese.fr" className="text-primary font-bold hover:underline">
                    contact@manaka-japanese.fr
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-slate-400 text-sm">schedule</span>
                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Business Hours</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-500 font-medium">
                    <li className="flex justify-between border-b border-slate-200 pb-1">
                      <span>Mon - Fri</span>
                      <span className="text-slate-900 font-bold">10:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-1">
                      <span>Saturday</span>
                      <span className="text-slate-900 font-bold">10:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-slate-900 font-bold">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-10 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">bolt</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Fast Response</h3>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">
                I typically respond within <span className="text-primary font-bold">24 hours</span>. Please double-check your email address so I can contact you.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mt-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-slate-400">place</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Lesson Locations</h3>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                In-person lessons are available at my home studio, cafes, or public libraries in central Toulouse, plus online lessons.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Toulouse,+France&z=13&output=embed"
                  width="100%"
                  height="170"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of lesson locations in Toulouse"
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
