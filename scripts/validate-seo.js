/**
 * Automated Build-time SEO & Metadata Validation Script
 * Verifies technical SEO assets, schema markup, sitemap, robots, and SPA fallbacks.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;
let errors = [];

function check(label, condition, errorMessage) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✓ ${label}`);
  } else {
    errors.push(errorMessage || label);
    console.error(`  ✗ ${label}: ${errorMessage}`);
  }
}

console.log('\n========================================');
console.log('🔍 RUNNING LADO RANI CREATION SEO AUDIT');
console.log('========================================\n');

// 1. Technical Files Verification
console.log('1. Checking Technical SEO Files:');
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
const robotsPath = path.join(rootDir, 'public', 'robots.txt');
const llmsPath = path.join(rootDir, 'public', 'llms.txt');
const redirectsPath = path.join(rootDir, 'public', '_redirects');
const vercelPath = path.join(rootDir, 'public', 'vercel.json');
const htaccessPath = path.join(rootDir, 'public', '.htaccess');
const manifestPath = path.join(rootDir, 'public', 'site.webmanifest');

check('sitemap.xml exists', fs.existsSync(sitemapPath));
check('robots.txt exists', fs.existsSync(robotsPath));
check('llms.txt exists (AI Search)', fs.existsSync(llmsPath));
check('_redirects exists (Netlify/Cloudflare)', fs.existsSync(redirectsPath));
check('vercel.json exists (Vercel SPA rewrite)', fs.existsSync(vercelPath));
check('.htaccess exists (Apache/cPanel)', fs.existsSync(htaccessPath));
check('site.webmanifest exists (PWA/Mobile)', fs.existsSync(manifestPath));

// 2. Sitemap Content Verification
console.log('\n2. Validating sitemap.xml Content:');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  check('Sitemap contains XML header', sitemapContent.includes('<?xml version="1.0"'));
  check('Sitemap contains home URL', sitemapContent.includes('https://www.ladoranicreation.com/'));
  check('Sitemap contains /services', sitemapContent.includes('/services'));
  check('Sitemap contains /industries', sitemapContent.includes('/industries'));
  check('Sitemap contains /process', sitemapContent.includes('/process'));
  check('Sitemap contains /about', sitemapContent.includes('/about'));
  check('Sitemap contains /contact', sitemapContent.includes('/contact'));
  check('Sitemap contains image extensions', sitemapContent.includes('<image:image>'));
  check('Sitemap excludes deprecated changefreq/priority', !sitemapContent.includes('<changefreq>') && !sitemapContent.includes('<priority>'));
}

// 3. Robots.txt Content Verification
console.log('\n3. Validating robots.txt:');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  check('Robots specifies User-agent', robotsContent.includes('User-agent: *'));
  check('Robots specifies Sitemap location', robotsContent.includes('Sitemap: https://www.ladoranicreation.com/sitemap.xml'));
  check('Robots allows answer-engine bots', ['OAI-SearchBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended'].every(bot => robotsContent.includes(`User-agent: ${bot}`)));
}

// 4. Prerendered Pages: per-page head, schema & AEO answer formats (run after `npm run build`)
console.log('\n4. Validating prerendered pages in dist/ (AEO):');
const { FAQS, LAST_MODIFIED } = await import(new URL('../src/data/aeo.js', import.meta.url));
const distDir = path.join(rootDir, 'dist');
const routePages = [
  { route: '/', file: 'index.html', key: 'home' },
  { route: '/services', file: 'services.html', key: 'services' },
  { route: '/industries', file: 'industries.html', key: 'industries' },
  { route: '/process', file: 'process.html', key: 'process' },
  { route: '/about', file: 'about.html', key: 'about' },
  { route: '/contact', file: 'contact.html', key: 'contact' },
  { route: '/digital-textile-printing-surat', file: 'digital-textile-printing-surat.html', key: 'surat' }
];
const decode = (str) => str.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const seenTitles = new Set();
const seenQuestions = new Map();

if (!fs.existsSync(distDir)) {
  check('dist/ exists (run npm run build first)', false, 'dist/ missing — run npm run build');
} else {
  for (const { route, file, key } of routePages) {
    const filePath = path.join(distDir, file);
    if (!fs.existsSync(filePath)) {
      check(`${route} prerendered`, false, `dist/${file} missing`);
      continue;
    }
    const html = fs.readFileSync(filePath, 'utf8');
    const body = decode(html.slice(html.indexOf('<body')));
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
    const expectedCanonical = route === '/' ? 'https://www.ladoranicreation.com/' : `https://www.ladoranicreation.com${route}`;

    check(`${route}: content prerendered (not an empty root)`, !html.includes('<div id="root"></div>') && body.length > 5000, 'page body is empty');
    check(`${route}: exactly one <h1>`, (body.match(/<h1[\s>]/g) || []).length === 1, 'needs exactly one h1');
    check(`${route}: unique <title>`, title && !seenTitles.has(title), `duplicate or missing title "${title}"`);
    seenTitles.add(title);
    check(`${route}: self-referencing canonical`, canonical === expectedCanonical, `canonical is ${canonical}`);

    let graph = [];
    try {
      const ld = JSON.parse(html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
      graph = ld['@graph'];
      check(`${route}: JSON-LD parses`, Array.isArray(graph));
    } catch (e) {
      check(`${route}: JSON-LD parses`, false, e.message);
    }
    const types = graph.flatMap(n => [].concat(n['@type']));
    check(`${route}: LocalBusiness + WebPage schema`, types.includes('LocalBusiness') && types.includes('WebPage'), `types: ${types}`);
    check(`${route}: no self-serving aggregateRating`, !html.includes('aggregateRating'), 'remove aggregateRating from schema');

    // FAQPage schema must match the visible FAQ exactly
    const faqNode = graph.find(n => n['@type'] === 'FAQPage');
    const faqs = FAQS[key];
    check(`${route}: FAQPage schema present`, Boolean(faqNode), 'FAQPage missing');
    if (faqNode) {
      check(`${route}: FAQ schema matches visible FAQ count`, faqNode.mainEntity.length === faqs.length, `${faqNode.mainEntity.length} vs ${faqs.length}`);
      check(`${route}: every FAQ question and answer visible`, faqNode.mainEntity.every(q => body.includes(q.name) && body.includes(q.acceptedAnswer.text)), 'schema FAQ text not found on page');
    }
    for (const faq of faqs) {
      check(`"${faq.q}" asked on one page only`, !seenQuestions.has(faq.q), `also on ${seenQuestions.get(faq.q)}`);
      seenQuestions.set(faq.q, route);
    }
  }

  const servicesHtml = fs.existsSync(path.join(distDir, 'services.html')) ? fs.readFileSync(path.join(distDir, 'services.html'), 'utf8') : '';
  check('/services: comparison tables for snippets', (servicesHtml.match(/<table/g) || []).length >= 2, 'expected fabric + comparison tables');
  const processHtml = fs.existsSync(path.join(distDir, 'process.html')) ? fs.readFileSync(path.join(distDir, 'process.html'), 'utf8') : '';
  check('/process: steps as an ordered list', processHtml.includes('<ol class="process-timeline'), 'steps should be an <ol>');
  check('/process: HowTo schema', processHtml.includes('"HowTo"'), 'HowTo schema missing');

  const notFoundPath = path.join(distDir, '404.html');
  const notFound = fs.existsSync(notFoundPath) ? fs.readFileSync(notFoundPath, 'utf8') : '';
  check('404.html exists and is noindex', notFound.includes('noindex') && !notFound.includes('rel="canonical"'), '404 page must be noindex without canonical');

  const distSitemap = fs.existsSync(path.join(distDir, 'sitemap.xml')) ? fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8') : '';
  check('sitemap lastmod uses real content dates', Object.values(LAST_MODIFIED).every(d => distSitemap.includes(`<lastmod>${d}</lastmod>`)), 'sitemap lastmod does not match src/data/aeo.js');
}

// 4b. Snippet lengths, NAP consistency and banned claims (guards against regressions)
console.log('\n4b. Validating snippet lengths, NAP consistency & claims:');
if (fs.existsSync(distDir)) {
  const NAP_ADDRESS = '1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana, Surat, Gujarat 395002';
  const OLD_NAP = ['Industrial Estate-2', 'Anjana Farm', 'Plot No. 244'];
  const UNVERIFIED_CLAIMS = ['15,000', '2400 DPI', '99.4%', 'Grade 5', 'Oeko-Tex', 'zero shade', 'zero-defect', 'within 2 hours'];

  for (const { route, file } of routePages) {
    const filePath = path.join(distDir, file);
    if (!fs.existsSync(filePath)) continue;
    const html = decode(fs.readFileSync(filePath, 'utf8'));
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';

    check(`${route}: title ≤ 60 chars`, title.length <= 60, `${title.length} chars: "${title}"`);
    check(`${route}: description 120–160 chars`, desc.length >= 120 && desc.length <= 160, `${desc.length} chars`);
    check(`${route}: footer shows the Google Business Profile address`, html.includes(NAP_ADDRESS), 'address missing or in another format');
    check(`${route}: no outdated address formats`, OLD_NAP.every(s => !html.includes(s)), `found ${OLD_NAP.filter(s => html.includes(s))}`);
    check(`${route}: no unverified claims`, UNVERIFIED_CLAIMS.every(s => !html.includes(s)), `found ${UNVERIFIED_CLAIMS.filter(s => html.includes(s))}`);
    check(`${route}: schema hours are 09:00–21:00`, html.includes('"opens":"09:00","closes":"21:00"'), 'opening hours mismatch');
    check(`${route}: html lang is en-IN`, html.includes('<html lang="en-IN"'), 'html lang should be en-IN');
    check(`${route}: no placeholder verification code`, !html.includes('ENTER_GOOGLE'), 'remove placeholder google-site-verification');
  }

  const contactHtml = fs.existsSync(path.join(distDir, 'contact.html')) ? fs.readFileSync(path.join(distDir, 'contact.html'), 'utf8') : '';
  check('/contact: visible hours match schema (9:00 AM – 9:00 PM)', contactHtml.includes('9:00 AM – 9:00 PM'), 'visible hours differ from schema');

  const llmsDist = fs.existsSync(path.join(distDir, 'llms.txt')) ? fs.readFileSync(path.join(distDir, 'llms.txt'), 'utf8') : '';
  check('llms.txt uses the same address and hours', llmsDist.includes(NAP_ADDRESS) && llmsDist.includes('9:00 PM'), 'llms.txt NAP/hours out of sync');
  check('llms.txt lists every FAQ', Object.values(FAQS).flat().every(f => llmsDist.includes(f.q)), 'llms.txt missing FAQs');
}

// 4c. GEO: entity schema, Google Maps link, NAP source of truth, freshness, AI files (guards against regressions)
console.log('\n4c. Validating GEO entity signals & AI files:');
if (fs.existsSync(distDir)) {
  const { businessProfile: P } = await import(new URL('../src/data/businessProfile.js', import.meta.url));
  const readDist = (rel) => (fs.existsSync(path.join(distDir, rel)) ? fs.readFileSync(path.join(distDir, rel), 'utf8') : '');
  const geoPages = [
    ...routePages,
    { route: '/privacy-policy', file: 'privacy-policy.html' },
    { route: '/terms', file: 'terms.html' }
  ];

  for (const { route, file } of geoPages) {
    const html = readDist(file);
    if (!html) {
      check(`${route}: prerendered`, false, `dist/${file} missing`);
      continue;
    }
    const ld = JSON.parse(html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
    const biz = ld['@graph'].find((n) => n['@id'] === `${P.url}/#localbusiness`);
    const webPage = ld['@graph'].find((n) => n['@type'] === 'WebPage');

    check(`${route}: entity is Organization + LocalBusiness`, biz && [].concat(biz['@type']).includes('Organization') && [].concat(biz['@type']).includes('LocalBusiness'), 'entity types wrong');
    check(`${route}: hasMap is the Google Maps CID link`, biz && biz.hasMap === P.google.cidUrl, `hasMap: ${biz && biz.hasMap}`);
    check(`${route}: sameAs links Google Maps + social profiles`, biz && [P.google.cidUrl, P.social.instagram, P.social.facebook].every((u) => biz.sameAs.includes(u)), 'sameAs incomplete');
    check(`${route}: schema NAP matches businessProfile`, biz && biz.address.streetAddress === P.address.street && biz.address.postalCode === P.address.postalCode && biz.telephone === P.contact.phone, 'schema NAP differs from businessProfile.js');
    check(`${route}: schema geo matches Google pin`, biz && biz.geo.latitude === P.geo.latitude && biz.geo.longitude === P.geo.longitude, 'geo coordinates differ');
    check(`${route}: consistent "who we are" description`, biz && biz.description === P.summary, 'entity description differs from businessProfile.summary');
    check(`${route}: WebPage dateModified = real content date`, webPage && webPage.dateModified === LAST_MODIFIED[route], `dateModified ${webPage && webPage.dateModified}`);
    check(`${route}: geo meta tags match Google pin`, html.includes(`<meta name="geo.position" content="${P.geo.latitude.toFixed(6)};${P.geo.longitude.toFixed(6)}"`), 'geo.position meta differs');
    check(`${route}: footer links privacy, terms & Surat unit page`, ['href="/privacy-policy"', 'href="/terms"', 'href="/digital-textile-printing-surat"'].every((h) => html.includes(h)), 'footer trust/location links missing');
  }

  const surat = decode(readDist('digital-textile-printing-surat.html'));
  check('/digital-textile-printing-surat: Google profile card with map', surat.includes('gbp-card--with-map') && surat.includes('gbp-card-map'), 'Google profile card/map missing');
  check('/digital-textile-printing-surat: states address, hours and summary', surat.includes(P.address.formatted) && surat.includes(P.hours.display) && surat.includes(P.summary), 'location facts missing');
  check('home: links to Surat unit page via footer', readDist('index.html').includes('href="/digital-textile-printing-surat"'), 'home should link to Surat unit page via footer');
  check('/contact: links to Surat unit page', readDist('contact.html').includes('href="/digital-textile-printing-surat"'), 'contact page should link to the location page');

  const llmsTxt = readDist('llms.txt');
  check('llms.txt: Headquarters section with coordinates + Maps CID', llmsTxt.includes('## Headquarters & Physical Presence') && llmsTxt.includes(`${P.geo.latitude}, ${P.geo.longitude}`) && llmsTxt.includes(P.google.cidUrl), 'llms.txt headquarters data missing');
  check('llms.txt: links llms-full.txt and the location page', llmsTxt.includes('/llms-full.txt') && llmsTxt.includes('/digital-textile-printing-surat'), 'llms.txt links missing');

  const llmsFull = readDist('llms-full.txt');
  check('llms-full.txt: generated with every page', llmsFull.length > 15000 && Object.keys(LAST_MODIFIED).every((r) => llmsFull.includes(`Source: ${r === '/' ? `${P.url}/` : `${P.url}${r}`}`)), `llms-full.txt incomplete (${llmsFull.length} bytes)`);
  check('llms-full.txt: NAP present', llmsFull.includes(P.address.formatted) && llmsFull.includes(P.contact.phoneDisplay), 'llms-full.txt NAP missing');

  const indexNowKeys = fs.readdirSync(distDir).filter((f) => /^[a-f0-9]{32}\.txt$/.test(f));
  check('IndexNow key file deployed with dist/', indexNowKeys.length === 1 && readDist(indexNowKeys[0]).trim() === indexNowKeys[0].replace('.txt', ''), 'IndexNow key file missing');

  const robotsDist = readDist('robots.txt').split(String.fromCharCode(13)).join('');
  check('robots.txt: AI search + training bots allowed deliberately', ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot'].every((bot) => robotsDist.includes(`User-agent: ${bot}\nAllow: /`)), 'an AI bot is missing or blocked');
}

// 5. Pages H1 and Breadcrumbs Hierarchy
console.log('\n5. Checking Route Pages H1 & Breadcrumbs:');
const pages = [
  { file: 'HomePage.jsx', label: 'Home Page' },
  { file: 'ServicesPage.jsx', label: 'Services Page' },
  { file: 'IndustriesPage.jsx', label: 'Industries Page' },
  { file: 'ProcessPage.jsx', label: 'Process Page' },
  { file: 'AboutPage.jsx', label: 'About Page' },
  { file: 'ContactPage.jsx', label: 'Contact Page' }
];

pages.forEach(p => {
  const filePath = path.join(rootDir, 'src', 'pages', p.file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    check(`${p.label} has SEO component`, content.includes('<SEO'));
    if (p.file !== 'HomePage.jsx') {
      check(`${p.label} has Breadcrumbs`, content.includes('<Breadcrumbs'));
    }
  }
});

console.log('\n========================================');
console.log(`📊 AUDIT RESULTS: ${passedChecks}/${totalChecks} Checks Passed (${Math.round((passedChecks / totalChecks) * 100)}%)`);
console.log('========================================\n');

if (errors.length > 0) {
  console.error(`❌ Validation failed with ${errors.length} issue(s).`);
  process.exit(1);
} else {
  console.log('✅ Enterprise SEO Verification 100% Passed!\n');
  process.exit(0);
}
