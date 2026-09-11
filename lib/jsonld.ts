import { faq } from '@/content/faq';
import { tier } from '@/content/pricing';
import { COMPANY, FOUNDED_YEAR, SITE_URL } from './company';
import { formatTenge } from './format';

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: COMPANY.name,
    description: 'Мебель на заказ в Астане: кухни, шкафы, спальни и мебель для бизнеса на собственном производстве.',
    url: SITE_URL,
    telephone: COMPANY.phone.raw,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/images/logo.webp`,
    foundingDate: String(FOUNDED_YEAR),
    priceRange: `от ${formatTenge(tier('ldsp').priceFrom)} за погонный метр`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.address.street} (${COMPANY.address.hint})`,
      addressLocality: COMPANY.address.city,
      addressCountry: 'KZ',
    },
    // TODO: уточнить точку по литеру Б — координаты берутся из lib/company.ts.
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY.address.geo.lat,
      longitude: COMPANY.address.geo.lng,
    },
    areaServed: { '@type': 'City', name: 'Астана' },
    sameAs: [COMPANY.instagram.href],
  };
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
