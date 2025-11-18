import { Metadata } from 'next';

// Company information
export const COMPANY_INFO = {
  name: 'Спорт Контур',
  fullName: 'Спорт Контур - Производство детских площадок',
  description: 'Производство и установка детских игровых площадок, спортивного оборудования, уличной мебели в Иркутске. Безопасные площадки с гарантией 5 лет.',
  url: 'https://sportkontur.ru',
  phone: '+7 (900) 123-45-67',
  email: 'info@sportkontur.ru',
  address: {
    city: 'Иркутск',
    country: 'Россия',
  },
  logo: '/logo.png',
  tagline: 'Веселье для каждого',
  keywords: [
    'детские площадки',
    'производство детских площадок',
    'спортивное оборудование',
    'уличная мебель',
    'резиновое покрытие',
    'детские игровые комплексы',
    'безопасные площадки',
    'Иркутск',
    'детские площадки Иркутск',
    'спорт контур',
  ],
};

// Default OpenGraph image
export const DEFAULT_OG_IMAGE = '/og-image.jpg';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  path?: string;
  noIndex?: boolean;
  type?: 'website' | 'article' | 'product';
}

/**
 * Generate comprehensive metadata for a page
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  path = '',
  noIndex = false,
  type = 'website',
}: SEOConfig): Metadata {
  const url = `${COMPANY_INFO.url}${path}`;
  const fullTitle = title.includes('Спорт Контур') ? title : `${title} | ${COMPANY_INFO.name}`;
  const allKeywords = [...COMPANY_INFO.keywords, ...keywords].join(', ');

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    publisher: COMPANY_INFO.name,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: COMPANY_INFO.name,
      locale: 'ru_RU',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Generate Organization JSON-LD structured data
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_INFO.address.city,
      addressCountry: COMPANY_INFO.address.country,
    },
    sameAs: [
      // Add social media links here when available
    ],
  };
}

/**
 * Generate LocalBusiness JSON-LD structured data
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': COMPANY_INFO.url,
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.url,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_INFO.address.city,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add actual coordinates for Irkutsk office when available
      latitude: 52.2978,
      longitude: 104.2964,
    },
    priceRange: '₽₽',
    image: `${COMPANY_INFO.url}${DEFAULT_OG_IMAGE}`,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };
}

/**
 * Generate Product JSON-LD structured data
 */
export function getProductSchema(product: {
  name: string;
  description: string;
  price: number;
  image: string;
  articleNumber: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${COMPANY_INFO.url}${product.image}`,
    sku: product.articleNumber,
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
      },
    },
    category: product.category,
  };
}

/**
 * Generate BreadcrumbList JSON-LD structured data
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${COMPANY_INFO.url}${item.url}`,
    })),
  };
}

/**
 * Generate FAQPage JSON-LD structured data
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
