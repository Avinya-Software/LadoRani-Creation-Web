import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/variables.css';
import './css/base.css';
import './css/navbar.css';
import './css/components.css';
import './css/animations.css';
import './css/footer.css';
import './css/pages.css';

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages are prerendered at build time (scripts/prerender.js): hydrate them.
// In `vite dev` the root is empty, so render normally.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
