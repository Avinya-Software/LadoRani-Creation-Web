/**
 * Build-time prerendering for answer engines and crawlers.
 *
 * Runs after `vite build` and `vite build --ssr src/entry-server.jsx`.
 * For every route it renders the React page to static HTML and writes the page's
 * own <title>, meta, canonical, Open Graph and JSON-LD into <head>, so bots that do
 * not run JavaScript (GPTBot, ClaudeBot, PerplexityBot, featured-snippet extraction)
 * read the real content of each page instead of an empty <div id="root">.
 *
 * Output (IIS rewrites /services -> /services.html, see public/web.config):
 *   dist/index.html, dist/services.html, ..., dist/404.html, dist/sitemap.xml
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { LAST_MODIFIED, BUSINESS, FAQS } from '../src/data/aeo.js';
import { businessProfile as P } from '../src/data/businessProfile.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const serverDir = path.join(rootDir, 'dist-server');

const ROUTES = Object.keys(LAST_MODIFIED);
const NOT_FOUND_PROBE = '/__prerender-404__';

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// JSON-LD must not contain a literal "</script>"
const safeJson = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

function headToHtml(head) {
  const lines = [`<title>${escapeAttr(head.title)}</title>`];
  for (const [attr, name, content] of head.meta) {
    lines.push(`<meta ${attr}="${name}" content="${escapeAttr(content)}" />`);
  }
  if (head.canonical) lines.push(`<link rel="canonical" href="${escapeAttr(head.canonical)}" />`);
  lines.push(`<script type="application/ld+json" id="page-schema">${safeJson(head.jsonLd)}</script>`);
  return lines.map((line) => `    ${line}`).join('\n').trimStart();
}

const pageContent = {};

function renderPage(url) {
  const { html, head } = render(url);
  if (!head) throw new Error(`No <SEO> head collected for ${url}`);
  if (!html.includes('<h1')) throw new Error(`Prerendered ${url} has no <h1>`);
  pageContent[url] = { title: head.title, html };

  return template
    .replace(/<!--seo-head-->\s*<title>[\s\S]*?<\/title>/, headToHtml(head))
    .replace('<!--app-html-->', html);
}

const outputFile = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

for (const route of ROUTES) {
  fs.writeFileSync(path.join(distDir, outputFile(route)), renderPage(route), 'utf8');
  console.log(`  ✓ prerendered ${route} -> dist/${outputFile(route)}`);
}

fs.writeFileSync(path.join(distDir, '404.html'), renderPage(NOT_FOUND_PROBE), 'utf8');
console.log('  ✓ prerendered 404 page -> dist/404.html (noindex)');

// Sitemap: canonical URLs only, with real content-edit dates from src/data/aeo.js
const urls = ROUTES.map((route) => {
  const loc = route === '/' ? `${BUSINESS.url}/` : `${BUSINESS.url}${route}`;
  const image = route === '/'
    ? `\n    <image:image>\n      <image:loc>${BUSINESS.url}/images/ogImage/og-image.jpg</image:loc>\n    </image:image>`
    : '';
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LAST_MODIFIED[route]}</lastmod>${image}\n  </url>`;
});
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), sitemap, 'utf8');
console.log(`  ✓ sitemap.xml with ${ROUTES.length} URLs`);

// llms.txt: AI-readable business summary, generated from the same data as the pages so it never drifts
const PAGE_LABELS = {
  '/': 'Home',
  '/services': 'Printing Services & Fabric Compatibility',
  '/industries': 'Industries We Serve',
  '/process': '5-Step Printing Process',
  '/about': 'About Lado Rani Creation',
  '/contact': 'Contact & Quotation',
  '/digital-textile-printing-surat': 'Surat Printing Unit: Location, Hours & Directions',
  '/privacy-policy': 'Privacy Policy',
  '/terms': 'Terms of Use',
};
const FAQ_GROUPS = [
  ['General', FAQS.home, '/'],
  ['Services & Fabrics', FAQS.services, '/services'],
  ['Industries', FAQS.industries, '/industries'],
  ['Process', FAQS.process, '/process'],
  ['About', FAQS.about, '/about'],
  ['Quotes & Contact', FAQS.contact, '/contact'],
  ['Surat Printing Unit', FAQS.surat, '/digital-textile-printing-surat'],
];
const pageUrl = (route) => (route === '/' ? `${BUSINESS.url}/` : `${BUSINESS.url}${route}`);
const llms = `# ${BUSINESS.name} - Digital Textile Printing & Job Work, Surat

> ${P.summary}

Full page content for AI assistants: ${BUSINESS.url}/llms-full.txt

## Headquarters & Physical Presence
- Address: ${P.address.formatted}, India
- Coordinates: ${P.geo.latitude}, ${P.geo.longitude}
- Google Maps: ${P.google.cidUrl}
- Google rating: ${P.google.rating.toFixed(1)} from ${P.google.reviewCount} Google reviews
- Hours: ${P.hours.long}
- Location page: ${BUSINESS.url}/digital-textile-printing-surat

## Business Details
- Name: ${BUSINESS.name}
- Category: Digital textile printing and textile job work
- Address: ${BUSINESS.addressDisplay}, India
- Phone / WhatsApp: ${BUSINESS.phoneDisplay}
- Email: ${BUSINESS.email}
- Hours: ${BUSINESS.hoursDisplay}
- Languages: English, Hindi, Gujarati
- Website: ${BUSINESS.url}/
- Instagram: ${P.social.instagram}
- Facebook: ${P.social.facebook}

## Services
1. Digital Textile Printing: high-definition printing with specialised disperse dye inks for polyester and synthetic-blend fabrics.
2. Sublimation Paper Printing: designs printed on transfer paper, then heat-bonded into polyester fabric.
3. Custom Design Printing: client artwork (TIFF, PDF, AI, PSD or JPG) checked for resolution, repeats and colour before printing.
4. Textile Printing Job Work: production job work for saree makers, kurti brands, wholesalers and fabric traders.
5. Sample Strike-Off: sample printed on the client's fabric before bulk production.
6. Heat Transfer / Fusing: provided only where agreed for the order, on suitable fabric.

## Fabric Compatibility
- Suitable: poly-crepe, poly-georgette, poly-chiffon, poly-satin, poly-silk, organza, dry-fit sportswear fabric, micro-polyester, synthetic curtain and upholstery fabric.
- Depends on polyester content: polyester-cotton blends (confirm with a sample strike-off).
- Not suitable: 100% cotton and pure natural silk.

## Pages
${ROUTES.map((route) => `- [${PAGE_LABELS[route]}](${pageUrl(route)})`).join('\n')}

## Frequently Asked Questions
${FAQ_GROUPS.map(([label, faqs, route]) => `\n### ${label} (${pageUrl(route)})\n${faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join('\n')}`).join('\n')}
`;
fs.writeFileSync(path.join(distDir, 'llms.txt'), llms, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'llms.txt'), llms, 'utf8');
console.log('  ✓ llms.txt generated from site data');

// llms-full.txt: the full text of every page, converted from the prerendered <main> HTML
const decodeEntities = (str) => str
  .replace(/&nbsp;/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

function htmlToText(html) {
  const main = (html.match(/<main[^>]*>([\s\S]*)<\/main>/) || [, html])[1];
  return decodeEntities(main
    .replace(/<(script|style|svg|iframe|button|form|select|textarea)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<h1[^>]*>/g, '\n\n# ').replace(/<h2[^>]*>/g, '\n\n## ').replace(/<h3[^>]*>/g, '\n\n### ')
    .replace(/<\/h[1-6]>/g, '\n')
    .replace(/<li[^>]*>/g, '\n- ')
    .replace(/<(p|tr|div|section|article|caption)[^>]*>/g, '\n')
    .replace(/<t[hd][^>]*>/g, ' | ')
    .replace(/<[^>]+>/g, ' '))
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter((line, i, all) => line && !(line === all[i - 1]))
    .join('\n')
    .replace(/\n(#+ )/g, '\n\n$1');
}

const llmsFull = `# ${P.name} - Full Website Content

> ${P.summary}

Address: ${P.address.formatted}, India | Phone/WhatsApp: ${P.contact.phoneDisplay} | Email: ${P.contact.email} | Hours: ${P.hours.long} | Google Maps: ${P.google.cidUrl}

${ROUTES.map((route) => `---\n\nSource: ${pageUrl(route)} (last updated ${LAST_MODIFIED[route]})\n${htmlToText(pageContent[route].html)}`).join('\n\n')}
`;
fs.writeFileSync(path.join(distDir, 'llms-full.txt'), llmsFull, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'llms-full.txt'), llmsFull, 'utf8');
console.log(`  ✓ llms-full.txt generated from ${ROUTES.length} prerendered pages`);

// dist-server is a temporary build artifact; it is never deployed, so a failed cleanup is not fatal
try {
  fs.rmSync(serverDir, { recursive: true, force: true });
} catch (err) {
  console.warn(`  ! could not remove dist-server/ (${err.code}); safe to delete manually`);
}
console.log('✅ Prerendering complete');
