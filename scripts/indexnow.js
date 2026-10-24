/**
 * IndexNow: tells Bing (which powers ChatGPT Search and Microsoft Copilot), Yandex and other
 * participating engines that pages changed, so they recrawl within hours instead of weeks.
 *
 * Run AFTER uploading the new dist/ to the live server:
 *   npm run indexnow            -> submits every URL in dist/sitemap.xml
 *   npm run indexnow -- /services /contact   -> submits only these paths
 *
 * The key file public/<key>.txt must be live at https://www.ladoranicreation.com/<key>.txt.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const INDEXNOW_KEY = 'a765ee2f31c6a699f1a93ff824b75dc1';
const HOST = 'www.ladoranicreation.com';
const SITE = `https://${HOST}`;

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = path.join(rootDir, 'dist', 'sitemap.xml');

const paths = process.argv.slice(2);
let urlList;
if (paths.length > 0) {
  urlList = paths.map((p) => (p.startsWith('http') ? p : `${SITE}${p === '/' ? '/' : p}`));
} else {
  if (!fs.existsSync(sitemapPath)) {
    console.error('dist/sitemap.xml not found. Run npm run build first.');
    process.exit(1);
  }
  urlList = [...fs.readFileSync(sitemapPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

// IndexNow only accepts the key if the key file is reachable on the live site
const keyUrl = `${SITE}/${INDEXNOW_KEY}.txt`;
const keyCheck = await fetch(keyUrl).catch(() => null);
const keyBody = keyCheck && keyCheck.ok ? (await keyCheck.text()).trim() : '';
if (keyBody !== INDEXNOW_KEY) {
  console.error(`Key file not live at ${keyUrl}. Deploy dist/ (it includes ${INDEXNOW_KEY}.txt) and try again.`);
  process.exit(1);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation: keyUrl, urlList }),
});

if (response.status === 200 || response.status === 202) {
  console.log(`✅ IndexNow accepted ${urlList.length} URL(s) (HTTP ${response.status}):`);
  urlList.forEach((u) => console.log(`   ${u}`));
} else {
  console.error(`❌ IndexNow returned HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}
