/**
 * GEO log check: shows which search and AI bots crawled the site and what status codes they got.
 *
 * Download the IIS logs from Plesk (Websites & Domains > Logs, or the W3SVC log folder), then run:
 *   npm run check:bots -- path/to/u_ex261022.log [more.log ...]
 *   npm run check:bots -- path/to/log-folder
 *
 * A healthy site shows mostly 200 (and 301 for redirects) for every bot.
 * Many 403/5xx for an AI bot means the server or a firewall is blocking it.
 */

import fs from 'fs';
import path from 'path';

const BOTS = [
  'Googlebot', 'Google-Extended', 'Bingbot', 'Applebot', 'DuckDuckBot',
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User', 'Amazonbot', 'DuckAssistBot', 'meta-externalagent',
];

const inputs = process.argv.slice(2);
if (inputs.length === 0) {
  console.error('Usage: npm run check:bots -- <IIS log file or folder> [...]');
  process.exit(1);
}

const files = inputs.flatMap((input) =>
  fs.statSync(input).isDirectory()
    ? fs.readdirSync(input).filter((f) => f.endsWith('.log')).map((f) => path.join(input, f))
    : [input]
);

const stats = Object.fromEntries(BOTS.map((bot) => [bot, { total: 0, status: {}, paths: {} }]));
let fields = [];

for (const file of files) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    if (line.startsWith('#Fields:')) {
      fields = line.slice(8).trim().split(/\s+/);
      continue;
    }
    if (!line || line.startsWith('#') || fields.length === 0) continue;

    const values = line.split(' ');
    const row = Object.fromEntries(fields.map((f, i) => [f, values[i]]));
    const userAgent = (row['cs(User-Agent)'] || '').replace(/\+/g, ' ');
    const bot = BOTS.find((b) => userAgent.toLowerCase().includes(b.toLowerCase()));
    if (!bot) continue;

    const entry = stats[bot];
    const status = row['sc-status'] || '?';
    const urlPath = row['cs-uri-stem'] || '?';
    entry.total++;
    entry.status[status] = (entry.status[status] || 0) + 1;
    entry.paths[urlPath] = (entry.paths[urlPath] || 0) + 1;
  }
}

console.log(`\nBot crawl summary from ${files.length} log file(s):\n`);
let problems = 0;
for (const [bot, entry] of Object.entries(stats)) {
  if (entry.total === 0) {
    console.log(`  ${bot.padEnd(20)} not seen`);
    continue;
  }
  const statuses = Object.entries(entry.status).map(([code, n]) => `${code}×${n}`).join(' ');
  const errors = Object.entries(entry.status)
    .filter(([code]) => code === '403' || code.startsWith('5'))
    .reduce((sum, [, n]) => sum + n, 0);
  if (errors > 0) problems++;
  const topPaths = Object.entries(entry.paths).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([p]) => p).join(', ');
  console.log(`  ${errors > 0 ? '⚠' : '✓'} ${bot.padEnd(18)} ${String(entry.total).padStart(5)} hits  ${statuses}  top: ${topPaths}`);
}
console.log(problems ? `\n⚠ ${problems} bot(s) received 403/5xx responses — check firewall and server rules.` : '\n✅ No bot was blocked (no 403/5xx).');
