type StructuredDataProps = {
  siteUrl: string;
};

export default function StructuredData({ siteUrl }: StructuredDataProps) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${siteUrl}/#organization`,
    name: 'Toulouse Wine Trips',
    url: siteUrl,
    email: 'contact@manaka-japanese.fr',
    areaServed: ['Toulouse, France'],
    availableLanguage: ['en', 'fr'],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Toulouse Wine Trips',
    inLanguage: ['en', 'fr'],
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
