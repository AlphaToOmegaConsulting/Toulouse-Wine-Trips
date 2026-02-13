'use client';

import { useState } from 'react';
import Link from 'next/link';
import { withBasePath } from '@/lib/base-path';
import { getLocalizedPath, type Lang } from '@/lib/i18n';
import type { PageData, PageNewsItem } from '../site-copy';

type FaqClientProps = {
    lang: Lang;
    data: PageData;
};

export default function FaqClient({ lang, data }: FaqClientProps) {
    const isFr = lang === 'fr';
    const heroImage = data.heroImage ?? '/images/lapistoule-temp/visits-hero.png';
    const featureImage = data.featureImage ?? '/images/faq-illustration.png';

    const newsItems: PageNewsItem[] = data.news ?? [];

    // Parse bullets into Q&A if possible
    const faqItems = data.sections.flatMap(section =>
        (section.bullets ?? []).map(bullet => {
            const parts = bullet.split(':');
            if (parts.length > 1) {
                return {
                    question: parts[0].trim(),
                    answer: parts.slice(1).join(':').trim()
                };
            }
            return {
                question: bullet,
                answer: ''
            };
        })
    );

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main>
            <section className="lp-hero lp-hero-short">
                <div className="lp-hero-bg">
                    <img src={withBasePath(heroImage)} alt={data.title} />
                    <div className="lp-hero-overlay" />
                    <div className="lp-hero-gradient" />
                </div>
                <div className="lp-hero-content" data-reveal>
                    <h1 className="lp-hero-title">
                        {data.title}
                    </h1>
                    <p className="lp-hero-text">{data.description}</p>
                    <div className="lp-actions lp-hero-actions">
                        <Link href={getLocalizedPath(lang, data.ctaHref)} className="lp-btn lp-btn-hero-primary">
                            {data.ctaLabel}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="lp-section lp-section-light">
                <div className="lp-container lp-grid lp-grid-2 lp-live-grid">
                    <div data-reveal>
                        <span className="lp-section-kicker">{data.eyebrow}</span>
                        <h2 className="lp-section-title">{isFr ? 'Questions frequentes' : 'Frequently Asked Questions'}</h2>
                        <div className="faq-accordion">
                            {faqItems.map((item, index) => (
                                <div key={index} className="faq-item">
                                    <button
                                        className={`faq-question ${openIndex === index ? 'active' : ''}`}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    >
                                        {item.question}
                                        <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                                    </button>
                                    <div
                                        className="faq-answer-wrapper"
                                        style={{
                                            maxHeight: openIndex === index ? '500px' : '0',
                                            opacity: openIndex === index ? 1 : 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <p className="faq-answer">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lp-clean-card lp-card-hover" data-reveal>
                        {/* Using feature image as illustration */}
                        <img src={withBasePath(featureImage)} alt="FAQ" className="lp-card-image" style={{ marginBottom: 0 }} />
                    </div>
                </div>
            </section>

            {/* Reusing News Grid for consistency */}
            <section className="lp-section lp-section-alt">
                <div className="lp-container">
                    <div className="lp-section-head" data-reveal>
                        <span className="lp-section-kicker">{isFr ? 'Details' : 'Details'}</span>
                        <h2 className="lp-section-title">{isFr ? 'Informations cles' : 'Key Information'}</h2>
                    </div>

                    <div className="lp-grid lp-grid-3">
                        {newsItems.map((item) => (
                            <article key={item.title} className="lp-clean-card news-card lp-card-hover" data-reveal>
                                <p className="news-date">{item.date}</p>
                                <h3 className="lp-clean-card-title">{item.title}</h3>
                                <p className="lp-clean-card-text">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
