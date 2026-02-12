import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Footer from '@/components/Footer';
import HtmlLangManager from '@/components/HtmlLangManager';
import Navbar from '@/components/Navbar';
import StructuredData from '@/components/StructuredData';
import './globals.css';
import ScrollReveal from '@/components/ScrollReveal';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://toulouse-wine-trips.fr';
const isDev = process.env.NODE_ENV !== 'production';
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  'https://tally.so',
  'https://www.google.com',
  'https://www.googletagmanager.com',
  ...(isDev ? ["'unsafe-eval'"] : []),
].join(' ');
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://www.google.com https://www.gstatic.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://tally.so https://images.unsplash.com https://www.google-analytics.com",
  "frame-src 'self' https://tally.so https://www.google.com",
  "form-action 'self' https://tally.so",
  'upgrade-insecure-requests',
].join('; ');

const headingFont = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

const bodyFont = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Toulouse Wine Trips - Tastings and Vineyard Experiences',
    template: '%s | Toulouse Wine Trips',
  },
  description:
    'Private and group wine tastings, vineyard tours, and curated wine trips in Toulouse for French and international guests.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Toulouse Wine Trips - Tastings and Vineyard Experiences',
    description:
      'Private and group wine tastings, vineyard tours, and curated wine trips in Toulouse for French and international guests.',
    images: [{ url: '/images/lessons-hero.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toulouse Wine Trips - Tastings and Vineyard Experiences',
    description:
      'Private and group wine tastings, vineyard tours, and curated wine trips in Toulouse for French and international guests.',
    images: ['/images/lessons-hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <HtmlLangManager />
        <StructuredData siteUrl={siteUrl} />
        <div className="site-shell selection:bg-[color:var(--color-primary)]/20">
          <Navbar />
          <ScrollReveal />
          <main className="lp-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
