import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import FaqSection from '../components/FaqSection';
import GoogleBusinessCard from '../components/GoogleBusinessCard';
import { FAQS } from '../data/aeo';
import { businessProfile as P, whatsAppUrl } from '../data/businessProfile';
import { LOCAL_BUSINESS_ID } from '../data/schema';

const ROUTE = '/digital-textile-printing-surat';

const services = [
  { title: 'Digital Textile Printing', desc: 'High-definition printing with disperse dye inks for polyester and synthetic-blend fabrics.' },
  { title: 'Sublimation Paper Printing', desc: 'Designs printed on transfer paper, then heat-bonded into polyester fabric.' },
  { title: 'Custom Design Printing', desc: 'Your TIFF, PDF, AI, PSD or JPG artwork checked for resolution, repeats and colour.' },
  { title: 'Textile Printing Job Work', desc: 'Production job work for saree makers, kurti brands, wholesalers and traders.' },
  { title: 'Sample Strike-Off', desc: 'A sample on your fabric to approve colour and scale before bulk printing.' },
  { title: 'Heat Transfer / Fusing', desc: 'Provided where agreed for the order, on fabric confirmed as suitable.' }
];

const sectors = [
  'Saree & dress-material makers',
  'Dupatta & fashion-fabric suppliers',
  'Kurti & ethnic-wear brands',
  'Sportswear & uniform producers',
  'Curtain & home-furnishing suppliers',
  'Western-wear labels',
  'Textile traders & wholesalers',
  'Small brands & custom orders'
];

const steps = [
  'Share your design file and fabric details on WhatsApp, by phone or through the enquiry form.',
  'The team confirms fabric suitability, rates and the delivery timeline.',
  'Your design is digitally printed at the Surat unit.',
  'Where agreed, the print is transferred or fused onto your fabric.',
  'Rolls are quality-checked, then packed for collection or delivery.'
];

export default function SuratPrintingUnitPage({ onOpenQuoteModal }) {
  return (
    <>
      <SEO
        title="Digital Textile Printing Unit in Surat | Lado Rani Creation"
        description="Lado Rani Creation’s digital textile printing unit in Anjana, Surat: address, working hours, directions and job-work services for textile businesses."
        keywords="digital textile printing Surat, textile printing unit Surat, sublimation printing near me Surat, textile job work Anjana Surat, Jay Industrial Estate printing, fabric printing Surat Gujarat"
        canonical={ROUTE}
        breadcrumbs={[{ name: 'Surat Printing Unit', url: ROUTE }]}
        faqs={FAQS.surat}
        schema={{
          '@type': 'Service',
          '@id': `${P.url}${ROUTE}#service`,
          name: 'Digital textile printing job work in Surat',
          serviceType: 'Digital Textile Printing',
          provider: { '@id': LOCAL_BUSINESS_ID },
          areaServed: { '@type': 'City', name: 'Surat' },
          description: P.summary
        }}
      />

      {/* Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Surat Printing Unit', url: ROUTE }]} />
          <h1 className="page-hero-title">Digital Textile Printing Unit in Surat</h1>
          <p className="page-hero-subtitle">{P.summary}</p>
        </div>
      </section>

      {/* Google Business Profile: address, hours, directions, call */}
      <section className="section section-tight" style={{ background: 'var(--bg-surface)' }} aria-labelledby="visit-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="visit-heading" className="section-title">Visit or Contact the Surat Unit</h2>
            <p className="section-subtitle">
              {P.name} is at {P.address.formatted}. It works {P.hours.long.replace(' IST', '')}.
            </p>
          </div>
          <GoogleBusinessCard showMap />
        </div>
      </section>

      {/* Services available locally */}
      <section className="section section-tight" style={{ background: 'var(--bg-surface-alt)' }} aria-labelledby="local-services-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="local-services-heading" className="section-title">Printing Services at the Surat Unit</h2>
            <p className="section-subtitle">
              All printing is for polyester and synthetic-blend fabrics. See fabric compatibility and details on the <Link to="/services">services page</Link>.
            </p>
          </div>
          <div className="local-grid">
            {services.map((svc) => (
              <article key={svc.title} className="local-card">
                <h3 className="local-card-title">{svc.title}</h3>
                <p className="local-card-desc">{svc.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who it prints for + how an order works */}
      <section className="section section-tight" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="local-split">
            <div>
              <h2 className="section-title">Who the Surat Unit Prints For</h2>
              <ul className="local-list">
                {sectors.map((sector) => <li key={sector}>{sector}</li>)}
              </ul>
              <Link to="/industries" className="btn-teaser-view-more" style={{ margin: '1rem 0 0' }}>
                <span>Industries we serve</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <h2 className="section-title">How a Job-Work Order Works</h2>
              <ol className="local-steps">
                {steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <Link to="/process" className="btn-teaser-view-more" style={{ margin: '1rem 0 0' }}>
                <span>Full 5-step process</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={FAQS.surat}
        title="Surat Printing Unit FAQs"
        subtitle="Location, working hours, areas served and collection or delivery."
      />

      {/* CTA */}
      <section className="section section-tight" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-950) 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Send Your Design to the Surat Unit
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '680px', margin: '0 auto 2rem' }}>
            Share your fabric type, quantity and design file to get a quote. Rates are confirmed after the fabric and design are reviewed.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenQuoteModal} className="btn btn-primary btn-lg">
              <span>Get a Printing Quote</span>
              <ArrowRight size={18} />
            </button>
            <a
              href={whatsAppUrl('Hello Lado Rani Creation, I would like a quote from your Surat printing unit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
