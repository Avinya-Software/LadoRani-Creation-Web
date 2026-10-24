import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';

/**
 * Build-time renderer used by scripts/prerender.js.
 * Returns the page HTML plus the <head> data collected from the page's <SEO> component.
 */
export function render(url) {
  globalThis.__PRERENDER_HEAD__ = null;
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html, head: globalThis.__PRERENDER_HEAD__ };
}
