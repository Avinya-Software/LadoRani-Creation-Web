import { businessProfile as P } from './businessProfile.js';

/** Site-wide entity nodes included in every page's JSON-LD @graph, all built from businessProfile.js. */
export const LOCAL_BUSINESS_ID = `${P.url}/#localbusiness`;
export const WEBSITE_ID = `${P.url}/#website`;

export const localBusinessNode = {
  // Organization (brand entity) + LocalBusiness (physical unit on Google Maps) in one node
  '@type': ['Organization', 'LocalBusiness'],
  '@id': LOCAL_BUSINESS_ID,
  name: P.name,
  alternateName: P.alternateNames,
  description: P.summary,
  slogan: P.slogan,
  url: `${P.url}/`,
  logo: { '@type': 'ImageObject', '@id': `${P.url}/#logo`, url: P.logo },
  image: P.image,
  telephone: P.contact.phone,
  email: P.contact.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: P.address.street,
    addressLocality: P.address.city,
    addressRegion: P.address.region,
    postalCode: P.address.postalCode,
    addressCountry: P.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: P.geo.latitude, longitude: P.geo.longitude },
  // Connects the website to the Google Maps / Knowledge Graph listing
  hasMap: P.google.cidUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: P.hours.days,
      opens: P.hours.opens,
      closes: P.hours.closes,
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Surat', containedInPlace: { '@type': 'State', name: 'Gujarat' } },
    { '@type': 'State', name: 'Gujarat' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: P.knowsAbout,
  sameAs: [P.google.cidUrl, P.social.instagram, P.social.facebook],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: P.contact.phone,
      email: P.contact.email,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: P.languages,
    },
  ],
};

export const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${P.url}/`,
  name: P.name,
  description: 'Digital Textile Printing & Sublimation Job Work in Surat, Gujarat',
  inLanguage: 'en-IN',
  publisher: { '@id': LOCAL_BUSINESS_ID },
};
