import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import QuoteCalculator from '../components/QuoteCalculator';
import SEO from '../components/SEO';
import FaqSection from '../components/FaqSection';
import { FAQS } from '../data/aeo';
import { IMAGES } from '../data/imageAssets';

export default function ServicesPage({ onOpenQuoteModal }) {
  const allServices = [
    {
      id: 'digital-textile',
      title: 'Digital Textile Printing',
      badge: 'Core Service',
      img: IMAGES.services.machine,
      alt: 'Digital textile printing machine in Surat',
      desc: 'High-definition digital textile printing engineered for sharp lines, crisp color gamut, and smooth gradients ready for fabric transfer and conversion.',
      suitability: 'Best suited for polyester fabric conversion & sublimation workflows.',
      linkText: 'Discuss Textile Printing'
    },
    {
      id: 'sublimation',
      title: 'Sublimation Paper Printing',
      badge: 'Roll-to-Roll',
      img: IMAGES.services.fabrics,
      alt: 'Vibrant printed fabric rolls in Surat workshop',
      desc: 'Rich, vivid dye sublimation patterns specifically engineered for polyester-based and synthetic-blend textiles. Ensures high color-fastness and soft fabric hand-feel after thermal bonding.',
      suitability: 'Poly-crepe, poly-georgette, poly-satin, dry-fit and micro-poly.',
      linkText: 'Discuss Sublimation'
    },
    {
      id: 'custom-design',
      title: 'Custom Design Printing',
      badge: 'Client Artwork',
      img: IMAGES.industries.swirl,
      alt: 'Custom textile print swirl sample',
      desc: 'Bring your proprietary textile prints, ethnic motifs, geometric florals, or modern designer files. We inspect file resolution, alignment repeats, and color profiles prior to printing.',
      suitability: 'High-res TIFF, PDF, AI, PSD or JPG design files with repeats.',
      linkText: 'Discuss Design Files'
    },
    {
      id: 'job-work',
      title: 'Textile Printing Job Work',
      badge: 'B2B Job Work',
      img: IMAGES.industries.saree,
      alt: 'Printed saree and dress material job work',
      desc: 'Dedicated production job-work partnerships for Surat textile manufacturers, wholesalers, and fabric traders. Clear order coordination, batch processing, and reliable scheduling.',
      suitability: 'Production lots for saree makers, kurti brands, and traders.',
      linkText: 'Discuss Job Work'
    },
    {
      id: 'sampling',
      title: 'Sample Strike-Off & Prototyping',
      badge: 'Fast Sample',
      img: IMAGES.industries.saree,
      alt: 'Sample strike off proofing',
      desc: 'Rapid strike-off sampling on your specified substrate to verify color vibrancy, pattern scale, and hand feel before starting commercial bulk yardage.',
      suitability: 'New fashion collections, label launches, and sample approvals.',
      linkText: 'Request Sample Strike-Off'
    },
    {
      id: 'heat-transfer',
      title: 'Heat Transfer / Fusing Support',
      badge: 'Order Specific',
      img: IMAGES.industries.curtains,
      alt: 'Printed curtains and home decor fabric',
      desc: 'Subsequent thermal calender/fusing transfer support for suitable polyester fabrics, coordinated strictly when included in the mutually agreed order specifications.',
      suitability: 'Subject to confirmed fabric suitability and order scope.',
      linkText: 'Inquire on Fusing'
    }
  ];

  const fabricMatrix = [
    { fabric: 'Poly-crepe, poly-georgette, poly-chiffon', suitable: 'Yes', use: 'Sarees, dupattas, dress materials' },
    { fabric: 'Poly-satin, poly-silk, organza', suitable: 'Yes', use: 'Ethnic wear, fashion fabrics' },
    { fabric: 'Dry-fit sportswear fabric, micro-polyester', suitable: 'Yes', use: 'Jerseys, uniforms, activewear' },
    { fabric: 'Synthetic curtain fabric, velvet, upholstery blends', suitable: 'Yes', use: 'Curtains, cushions, home furnishing' },
    { fabric: 'Polyester-cotton blends', suitable: 'Depends on polyester content', use: 'Confirm with a sample strike-off' },
    { fabric: '100% cotton, pure natural silk', suitable: 'No', use: 'Needs a different printing chemistry' }
  ];

  const printVsFusing = [
    { aspect: 'What it does', printing: 'Reproduces the design with specialised dye inks', fusing: 'Bonds the printed design permanently into the fabric with heat' },
    { aspect: 'When it happens', printing: 'First production step', fusing: 'After printing' },
    { aspect: 'At Lado Rani Creation', printing: 'Core job-work service', fusing: 'Provided only where agreed for the order' }
  ];

  return (
    <>
      <SEO
        title="Textile Printing Services in Surat | Lado Rani Creation"
        description="Digital textile printing, sublimation paper printing, custom design printing, sample strike-offs and job work for polyester fabrics in Surat, Gujarat."
        keywords="digital textile printing services Surat, sublimation paper printing Surat, roll to roll fabric printing Surat, custom textile design printing, disperse dye sublimation Surat, heat transfer fusing Surat, poly crepe printing, georgette digital printing, satin fabric printing, dry fit sports jersey printing Surat, sample strike off printing Surat, wholesale fabric printing Surat, textile printing job work services"
        canonical="/services"
        breadcrumbs={[{ name: 'Services', url: '/services' }]}
        faqs={FAQS.services}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Digital Textile Printing Job Work',
            'serviceType': 'Digital Textile Printing',
            'provider': { '@id': 'https://www.ladoranicreation.com/#localbusiness' },
            'areaServed': { '@type': 'City', 'name': 'Surat' },
            'description': 'High-definition roll-to-roll digital textile printing and sublimation paper printing for polyester and synthetic-blend fabrics in Surat.'
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Sublimation Paper Printing',
            'serviceType': 'Sublimation Printing',
            'provider': { '@id': 'https://www.ladoranicreation.com/#localbusiness' },
            'areaServed': { '@type': 'City', 'name': 'Surat' },
            'description': 'Continuous roll dye sublimation paper printing with high chroma disperse dye inks.'
          }
        ]}
      />

      {/* Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services', url: '/services' }]} />
          <h1 className="page-hero-title">Specialized Digital Printing Services</h1>
          <p className="page-hero-subtitle">
            Reliable digital textile printing and job-work support based in Surat, Gujarat. Precision in every print with transparent technical guidance.
          </p>
        </div>
      </section>

      {/* Main Services Catalog matching Image 1/2 */}
      <section className="section" style={{ background: 'var(--bg-surface-alt)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive Service Portfolio</h2>
            <p className="section-subtitle">
              From design proofing to continuous roll printing, we provide end-to-end B2B solutions tailored to fabric manufacturers and garment brands.
            </p>
          </div>

          <div className="services-grid">
            {allServices.map((svc) => (
              <article key={svc.id} className="service-card interactive-hover-card">
                <div className="service-card-media">
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    loading="lazy"
                    width="400"
                    height="200"
                  />
                  <span className="service-card-badge">{svc.badge}</span>
                </div>

                <div className="service-card-body">
                  <h3 className="service-card-title">{svc.title}</h3>
                  <p className="service-card-desc">{svc.desc}</p>

                  <div style={{ marginBottom: '1.2rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Suitability:</strong> {svc.suitability}
                  </div>

                  <div className="service-card-meta">
                    <button
                      onClick={onOpenQuoteModal}
                      className="service-card-cta"
                      aria-label={`Discuss requirements for ${svc.title}`}
                    >
                      <span>{svc.linkText}</span>
                      <ArrowRight size={15} />
                    </button>

                    <a
                      href={`https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20am%20interested%20in%20${encodeURIComponent(svc.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.82rem', color: 'var(--whatsapp-green)', fontWeight: '600' }}
                      title="Quick WhatsApp enquiry"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric compatibility + printing vs fusing comparison (table formats answer engines can lift) */}
      <section className="section section-tight" style={{ background: 'var(--bg-surface)' }} aria-labelledby="fabric-compatibility-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="fabric-compatibility-heading" className="section-title">Which Fabrics Can Be Sublimation Printed?</h2>
            <p className="section-subtitle">
              Sublimation printing works on polyester-based and synthetic-blend fabrics. Pure natural fibres such as 100% cotton and pure silk need a different printing chemistry.
            </p>
          </div>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <caption>Fabric suitability for sublimation printing</caption>
              <thead>
                <tr>
                  <th scope="col">Fabric</th>
                  <th scope="col">Suitable?</th>
                  <th scope="col">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {fabricMatrix.map((row) => (
                  <tr key={row.fabric}>
                    <th scope="row" style={{ fontWeight: 600 }}>{row.fabric}</th>
                    <td>{row.suitable}</td>
                    <td>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section-header" style={{ marginTop: '3rem' }}>
            <h2 className="section-title">Digital Printing vs Transfer / Fusing</h2>
            <p className="section-subtitle">
              Printing puts the design onto paper or fabric; transfer or fusing is the heat step that bonds it permanently into the fibres.
            </p>
          </div>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <caption>How the two steps differ</caption>
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">Digital textile printing</th>
                  <th scope="col">Transfer / fusing</th>
                </tr>
              </thead>
              <tbody>
                {printVsFusing.map((row) => (
                  <tr key={row.aspect}>
                    <th scope="row" style={{ fontWeight: 600 }}>{row.aspect}</th>
                    <td>{row.printing}</td>
                    <td>{row.fusing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Quote Calculator Widget */}
      <QuoteCalculator />

      <FaqSection
        faqs={FAQS.services}
        title="Printing Services FAQs"
        subtitle="Fabric suitability, sublimation paper printing, fusing and sampling, answered directly."
      />

      {/* Direct CTA Banner */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-950) 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Have a Specific Fabric or Printing Order in Mind?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '680px', margin: '0 auto 2rem' }}>
            Contact our Surat facility directly for bulk price tiers, strike-off samples, and custom job work scheduling.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuoteModal}
              className="btn btn-primary btn-lg"
            >
              <span>Get Instant Quotation</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20would%20like%20to%20discuss%20a%20printing%20service%20requirement."
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
