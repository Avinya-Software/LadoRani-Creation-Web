/**
 * Google Analytics 4 (GA4) & Conversion Tracking Utility
 * Supports Google Analytics, Google Tag Manager & Custom Event Tracking
 */

// GA4 measurement ID from .env (VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX). Analytics stays off until a real ID is set.
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
const HAS_VALID_GA_ID = /^G-[A-Z0-9]{10}$/.test(GA_MEASUREMENT_ID);

/**
 * Initializes GA4 script dynamically if not already loaded
 */
export function initAnalytics() {
  if (typeof window === 'undefined' || !HAS_VALID_GA_ID) return;

  // Check if GA is already initialized
  if (window.dataLayer && window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false // We handle page views manually on route changes
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  trackAiReferral();
}

// AI assistants and answer engines that send visitors (referrer host or utm_source)
const AI_SOURCES = [
  ['chatgpt.com', 'ChatGPT'],
  ['chat.openai.com', 'ChatGPT'],
  ['perplexity.ai', 'Perplexity'],
  ['gemini.google.com', 'Gemini'],
  ['copilot.microsoft.com', 'Copilot'],
  ['claude.ai', 'Claude'],
  ['you.com', 'You.com'],
  ['meta.ai', 'Meta AI']
];

/**
 * Records one `ai_referral` event per session when a visitor arrives from an AI assistant,
 * so GA4 can report AI-driven traffic (GEO measurement).
 */
export function trackAiReferral() {
  if (typeof window === 'undefined' || !window.gtag) return;
  try {
    if (sessionStorage.getItem('ai_referral_tracked')) return;
  } catch {
    // sessionStorage unavailable (private mode): still track this page load
  }

  const utmSource = new URLSearchParams(window.location.search).get('utm_source') || '';
  let referrerHost = '';
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname : '';
  } catch {
    referrerHost = '';
  }

  const match = AI_SOURCES.find(([domain]) =>
    referrerHost === domain || referrerHost.endsWith(`.${domain}`) || utmSource.toLowerCase().includes(domain.split('.')[0])
  );
  if (!match) return;

  window.gtag('event', 'ai_referral', {
    ai_source: match[1],
    referrer_host: referrerHost || '(utm only)',
    landing_page: window.location.pathname
  });
  try {
    sessionStorage.setItem('ai_referral_tracked', '1');
  } catch {
    // ignore
  }
}

/**
 * Track SPA Route Pageviews
 */
export function trackPageView(pagePath, pageTitle) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href
  });
}

/**
 * Track WhatsApp Inquiries (High-Intent Conversion)
 */
export function trackWhatsAppClick(sourceLocation = 'general') {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'whatsapp_click', {
    event_category: 'Lead Generation',
    event_label: sourceLocation,
    value: 1
  });
}

/**
 * Track Direct Phone Inquiries (High-Intent Conversion)
 */
export function trackPhoneClick(sourceLocation = 'general') {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'phone_call_click', {
    event_category: 'Lead Generation',
    event_label: sourceLocation,
    value: 1
  });
}

/**
 * Track Quote Modal & Contact Form Submissions (Conversion)
 */
export function trackQuoteSubmission(formData = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'generate_lead', {
    event_category: 'Form Submission',
    event_label: formData.fabricType || 'Custom Textile Job Work',
    meters: formData.meters || 0
  });
}

/**
 * Track Google Maps Location Clicks
 */
export function trackLocationClick() {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'view_location_maps', {
    event_category: 'Local SEO Engagement',
    event_label: 'Surat Facility Map'
  });
}
