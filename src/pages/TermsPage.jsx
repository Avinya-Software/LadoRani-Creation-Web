import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { businessProfile as P } from '../data/businessProfile';
import { LAST_MODIFIED } from '../data/aeo';

const ROUTE = '/terms';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Use | Lado Rani Creation"
        description="Terms for using the Lado Rani Creation website: website information, quotations, client artwork and design rights, and links to other websites."
        canonical={ROUTE}
        breadcrumbs={[{ name: 'Terms of Use', url: ROUTE }]}
      />

      <section className="page-hero-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Terms of Use', url: ROUTE }]} />
          <h1 className="page-hero-title">Terms of Use</h1>
          <p className="page-hero-subtitle">Last updated: {LAST_MODIFIED[ROUTE]}</p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--bg-surface)' }}>
        <div className="container legal-content">
          <p>By using this website you agree to these terms. If you do not agree, please do not use the website.</p>

          <h2>Website information</h2>
          <p>
            The information on this website describes the services of {P.name} in general terms. It is not an offer or a
            quotation, and fabric suitability always depends on the actual fabric and design.
          </p>

          <h2>Quotations and orders</h2>
          <p>
            Rates, quantities and delivery timelines are confirmed separately for each order, after the fabric and design are
            reviewed. Any estimate shown or generated on this website is indicative only.
          </p>

          <h2>Your artwork</h2>
          <p>
            When you send a design for printing, you confirm that you own it or have the right to use it. Client artwork is
            treated as confidential and used only for your order.
          </p>

          <h2>Website content</h2>
          <p>
            The text, logo and images on this website belong to {P.name} unless stated otherwise and may not be copied for
            commercial use without permission.
          </p>

          <h2>Links to other websites</h2>
          <p>Links to Google Maps, WhatsApp, Instagram and Facebook lead to services we do not control.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${P.contact.email}`}>{P.contact.email}</a> or {P.contact.phoneDisplay}.
            See also our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
