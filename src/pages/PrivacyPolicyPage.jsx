import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { businessProfile as P } from '../data/businessProfile';
import { LAST_MODIFIED } from '../data/aeo';

const ROUTE = '/privacy-policy';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Lado Rani Creation"
        description="How Lado Rani Creation handles enquiry details, WhatsApp messages, analytics and maps on ladoranicreation.com, and how to contact us about your data."
        canonical={ROUTE}
        breadcrumbs={[{ name: 'Privacy Policy', url: ROUTE }]}
      />

      <section className="page-hero-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Privacy Policy', url: ROUTE }]} />
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p className="page-hero-subtitle">Last updated: {LAST_MODIFIED[ROUTE]}</p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--bg-surface)' }}>
        <div className="container legal-content">
          <p>
            This policy explains how {P.name} (“we”, “us”) handles information when you use {P.url.replace('https://', '')} or contact us.
          </p>

          <h2>Information you share with us</h2>
          <p>
            When you send an enquiry, you may share your name, company, phone or WhatsApp number, email, fabric type, quantity,
            timeline and design files. The enquiry form on this website does not store your details on our server: it opens
            WhatsApp with your message filled in, and you choose whether to send it.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>To reply to your enquiry and prepare a quotation.</li>
            <li>To process, print and deliver your order.</li>
            <li>To keep a record of colour settings for reorders.</li>
          </ul>
          <p>We do not sell or rent your personal information. Client artwork is used only for your order and is never shared or resold.</p>

          <h2>Analytics and cookies</h2>
          <p>
            If website analytics is enabled, we use Google Analytics to understand how visitors use the site (for example, which
            pages are viewed). It uses cookies and does not tell us who you are. The embedded Google Map is provided by Google and
            may set its own cookies. Your light/dark theme choice is saved in your browser only.
          </p>

          <h2>Third-party services</h2>
          <p>
            Messages sent through WhatsApp, phone or email are handled by those providers under their own privacy policies.
            Links to Google Maps, Instagram and Facebook take you to sites with their own policies.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us what information we hold about you, or ask us to correct or delete it, by emailing{' '}
            <a href={`mailto:${P.contact.email}`}>{P.contact.email}</a> or calling {P.contact.phoneDisplay}.
          </p>

          <h2>Contact</h2>
          <p>
            {P.name}, {P.address.formatted}. See also our <Link to="/terms">Terms of Use</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
