import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://toulouse-wine-trips.fr';
  const now = new Date();

  const corePages = ['', '/about', '/tastings', '/trips', '/groups', '/partners', '/quote', '/faq', '/privacy', '/terms'];

  return corePages.flatMap((path, index) => [
    {
      url: `${baseUrl}/en${path}`,
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : index < 6 ? 0.9 : 0.6,
    },
    {
      url: `${baseUrl}/fr${path}`,
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 0.95 : index < 6 ? 0.85 : 0.6,
    },
  ]);
}
