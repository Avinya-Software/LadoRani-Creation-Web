import { useEffect } from 'react';
import { BUSINESS, LAST_MODIFIED } from '../data/aeo';
import { localBusinessNode, websiteNode, WEBSITE_ID, LOCAL_BUSINESS_ID } from '../data/schema';

const SITE_NAME = BUSINESS.name;
const BASE_URL = BUSINESS.url;
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/ogImage/og-image.jpg`;

const absoluteUrl = (url) => (url.startsWith('http') ? url : `${BASE_URL}${url === '/' ? '/' : url}`);

/**
 * Builds everything that belongs in <head> for one page. Pure function, so the
 * browser (via useEffect) and the build-time prerenderer (scripts/prerender.js)
 * emit identical tags.
 */
export function buildHead({
  title,
  description,
  keywords,
  canonical,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  schema,
  breadcrumbs = [],
  faqs = [],
}) {
  const fullTitle = title
    ? (title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`)
    : `Digital Textile Printing & Job Work Surat | ${SITE_NAME}`;
  const isNoindex = robots.includes('noindex');
  const fullCanonical = canonical && !isNoindex ? absoluteUrl(canonical) : null;
  const pageUrl = fullCanonical || BASE_URL;

  const graph = [localBusinessNode, websiteNode];

  graph.push({
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: fullTitle,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': LOCAL_BUSINESS_ID },
    // Real content-edit date (same source as sitemap lastmod), never the build date
    ...(LAST_MODIFIED[canonical] ? { dateModified: LAST_MODIFIED[canonical] } : {}),
    ...(breadcrumbs.length > 0 ? { breadcrumb: { '@id': `${pageUrl}#breadcrumb` } } : {}),
  });

  if (breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        ...breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: crumb.name,
          item: absoluteUrl(crumb.url),
        })),
      ],
    });
  }

  // FAQPage is built from the same array the page renders, so it always matches visible content
  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      url: pageUrl,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    });
  }

  if (schema) {
    const extra = Array.isArray(schema) ? schema : [schema];
    graph.push(...extra.map(({ '@context': _ctx, ...node }) => node));
  }

  return {
    title: fullTitle,
    meta: [
      ['name', 'description', description],
      ['name', 'keywords', keywords],
      ['name', 'robots', robots],
      ['name', 'author', SITE_NAME],
      ['property', 'og:title', fullTitle],
      ['property', 'og:description', description],
      ['property', 'og:url', pageUrl],
      ['property', 'og:type', ogType],
      ['property', 'og:image', ogImage],
      ['property', 'og:image:width', '1200'],
      ['property', 'og:image:height', '630'],
      ['property', 'og:image:alt', fullTitle],
      ['property', 'og:site_name', SITE_NAME],
      ['property', 'og:locale', 'en_IN'],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', fullTitle],
      ['name', 'twitter:description', description],
      ['name', 'twitter:image', ogImage],
    ].filter(([, , content]) => Boolean(content)),
    canonical: fullCanonical,
    jsonLd: { '@context': 'https://schema.org', '@graph': graph },
  };
}

function applyHead(head) {
  document.title = head.title;

  for (const [attr, name, content] of head.meta) {
    let tag = document.querySelector(`meta[${attr}="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attr, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  }

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (head.canonical) {
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', head.canonical);
  } else if (canonicalTag) {
    canonicalTag.remove();
  }

  // One JSON-LD block per page, replaced on route change
  let scriptTag = document.getElementById('page-schema');
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = 'page-schema';
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }
  scriptTag.text = JSON.stringify(head.jsonLd);
}

/**
 * Per-page SEO: title, meta, canonical, Open Graph, Twitter and one JSON-LD @graph
 * (LocalBusiness, WebSite, WebPage, BreadcrumbList, FAQPage + page schema).
 */
export default function SEO(props) {
  const head = buildHead(props);
  const headKey = JSON.stringify(head);

  // During build-time prerendering there is no DOM: hand the head to scripts/prerender.js
  if (typeof window === 'undefined') {
    globalThis.__PRERENDER_HEAD__ = head;
  }

  useEffect(() => {
    applyHead(head);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headKey]);

  return null;
}
