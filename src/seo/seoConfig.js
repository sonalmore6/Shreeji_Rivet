// Central SEO config — update SITE_URL to the real domain once the site goes live,
// then update it here (nowhere else needs to change).
export const SITE_NAME = 'Shreeji Rivet India Pvt. Ltd.';
export const SITE_URL  = 'https://www.shreejirivetindia.com'; // TODO: replace with your live domain
export const SITE_PHONE = '+91-9552287300';
export const SITE_EMAIL = 'valakient@gmail.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['Shreeji Rivet', 'Shreeji Rivet India', 'Shreeji Rivets', 'Shreeji Fasteners'],
  description: 'Manufacturer and supplier of blind rivets, POP rivets, structural rivets, rivet nuts, self-clinching fasteners, and self-drilling screws (SDS) based in Ambad MIDC, Nashik, Maharashtra, serving customers pan-India.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/newlogo.png`,
  image: `${SITE_URL}/images/newlogo.png`,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. A 11/2/10, Opp. Nashik Engineering Cluster, Ambad MIDC',
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422010',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.9593514,
    longitude: 73.7340995,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: [],
};
