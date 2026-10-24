import React from 'react';
import { ArrowRight, Layers, Palette, RefreshCw, Flame, Printer } from 'lucide-react';

export default function ServicesSection({ onOpenQuoteModal }) {
  const services = [
    {
      id: 'digital-textile',
      title: 'Digital Textile Printing',
      icon: <Printer size={20} />,
      badge: 'Core Service',
      img: '/assets/crop_machine.webp',
      alt: 'Digital textile printing machine in Surat',
      desc: 'High-definition digital textile printing engineered for sharp lines, crisp color gamut, and smooth gradients ready for fabric transfer and conversion.',
      suitability: 'Best suited for polyester fabric conversion & sublimation workflows.',
      linkText: 'Discuss Textile Printing'
    },
    {
      id: 'sublimation',
      title: 'Sublimation Printing for Suitable Fabrics',
      icon: <Layers size={20} />,
      badge: 'Polyester Applications',
      img: '/assets/crop_fabrics.webp',
      alt: 'Vibrant printed fabric rolls in Surat workshop',
      desc: 'Rich, vivid dye sublimation patterns specifically engineered for polyester-based and synthetic-blend textiles. Ensures high color-fastness and soft fabric hand-feel after thermal bonding.',
      suitability: 'Poly-crepe, poly-georgette, poly-satin, dry-fit and micro-poly.',
      linkText: 'Discuss Sublimation'
    },
    {
      id: 'custom-design',
      title: 'Custom Design Printing',
      icon: <Palette size={20} />,
      badge: 'Client Artwork',
      img: '/assets/crop_swirl.webp',
      alt: 'Custom textile print swirl sample',
      desc: 'Bring your proprietary textile prints, ethnic motifs, geometric florals, or modern designer files. We inspect file resolution, alignment repeats, and color profiles prior to printing.',
      suitability: 'High-res TIFF, PDF, AI, PSD or JPG design files with repeats.',
      linkText: 'Discuss Design Files'
    },
    {
      id: 'job-work',
      title: 'Textile Printing Job Work',
      icon: <RefreshCw size={20} />,
      badge: 'B2B Job Work',
      img: '/assets/crop_saree.webp',
      alt: 'Printed saree and dress material job work',
      desc: 'Dedicated production job-work partnerships for Surat textile manufacturers, wholesalers, and fabric traders. Clear order coordination, batch processing, and reliable scheduling.',
      suitability: 'Production lots for saree makers, kurti brands, and traders.',
      linkText: 'Discuss Job Work'
    },
    {
      id: 'heat-transfer',
      title: 'Heat Transfer / Fusing Support',
      icon: <Flame size={20} />,
      badge: 'Order Specific',
      img: '/assets/crop_curtains.webp',
      alt: 'Printed curtains and home decor fabric',
      desc: 'Subsequent thermal calender/fusing transfer support for suitable polyester fabrics, coordinated strictly when included in the mutually agreed order specifications.',
      suitability: 'Subject to confirmed fabric suitability and order scope.',
      linkText: 'Inquire on Fusing'
    }
  ];

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-surface-alt)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up is-revealed">
          <h2 className="section-title">Specialized Digital Printing Services</h2>
          <p className="section-subtitle">
            Reliable digital textile printing and job-work support based in Surat, Gujarat. Precision in every print with transparent technical guidance.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {services.map((svc) => (
            <article key={svc.id} className="service-card interactive-hover-card reveal-fade-up is-revealed">
              <div className="service-card-media">
                <img
                  src={svc.img}
                  alt={svc.alt}
                  loading="lazy"
                  width="400"
                  height="220"
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
                    <ArrowRight />
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
  );
}
