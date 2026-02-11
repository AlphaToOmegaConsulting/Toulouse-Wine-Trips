type StructuredDataProps = {
  siteUrl: string;
};

export default function StructuredData({ siteUrl }: StructuredDataProps) {
  const educationalOrganization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${siteUrl}/#organization`,
    name: 'Manaka Japanese',
    url: siteUrl,
    email: 'contact@manaka-japanese.fr',
    areaServed: ['Toulouse, France', 'Online'],
    availableLanguage: ['en', 'ja'],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Manaka Japanese',
    inLanguage: ['en', 'ja'],
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
