import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import QuoteCalculator from '../components/QuoteCalculator';
import CtaBanner from '../components/CtaBanner';
import SEO from '../components/SEO';
import FaqSection from '../components/FaqSection';
import { FAQS } from '../data/aeo';
import { IMAGES } from '../data/imageAssets';

export default function HomePage({ onOpenQuoteModal }) {
  // Top featured services for home teaser (uniform, clean, matching Image 1)
  const featuredServices = [
    {
      title: 'Digital Textile Printing',
      badge: 'Core Service',
      img: IMAGES.services.machine,
      desc: 'High-definition digital textile printing engineered for sharp lines, crisp color gamut, and smooth gradients ready for fabric transfer and conversion.',
      tag: 'Polyester & Synthetics'
    },
    {
      title: 'Sublimation Paper Printing',
      badge: 'Roll-to-Roll',
      img: IMAGES.services.fabrics,
      desc: 'Rich, vivid dye sublimation patterns engineered for polyester-based and synthetic-blend textiles with supreme color-fastness.',
      tag: 'High Chroma Fastness'
    },
    {
      title: 'Custom Design Job Work',
      badge: 'Client Artwork',
      img: IMAGES.industries.swirl,
      desc: 'Bring your proprietary textile prints, ethnic motifs, or designer files. File inspection, repeat alignment, and color profiling included.',
      tag: 'Confidential & Precise'
    }
  ];

  // Top industries for home teaser (uniform, clean, matching Image 2)
  const topIndustries = [
    {
      title: 'Saree & Dress Material',
      img: IMAGES.industries.saree,
      tag: 'Ethnic Apparel',
      desc: 'Floral, ornamental, and all-over digital prints for saree makers and dress materials.'
    },
    {
      title: 'Dupattas & Stoles',
      img: IMAGES.industries.dupatta,
      tag: 'Fashion Fabrics',
      desc: 'Crisp borders and rich color saturation on poly-georgette, chiffon, and organza.'
    },
    {
      title: 'Kurti & Ethnic Wear',
      img: IMAGES.industries.kurti,
      tag: 'Garment Pieces',
      desc: 'Pattern printing and panel designs with reliable batch color consistency.'
    },
    {
      title: 'Sportswear & Uniforms',
      img: IMAGES.industries.sportswear,
      tag: 'Activewear',
      desc: 'High-contrast sublimation prints for dry-fit fabrics, jerseys, and athletic wear.'
    }
  ];

  // All 5 Steps Displayed (Matching Image 3)
  const processSteps = [
    { num: '1', title: 'File & Fabric Intake', desc: 'Share your design files (TIFF/PDF/AI) and target fabric specs.' },
    { num: '2', title: 'Color Match & Sample', desc: 'Technical file check, ICC profiling, and sample strike-off approval.' },
    { num: '3', title: 'Precision Machine Printing', desc: 'High-density digital printing with calibrated disperse dye inks.' },
    { num: '4', title: 'Thermal Transfer / Fusing', desc: 'Thermal rotary bonding onto suitable polyester fabric under controlled heat.' },
    { num: '5', title: 'Quality Audit & Dispatch', desc: 'Thorough inspection for color depth, rolling, and prompt dispatch.' }
  ];

  return (
    <>
      <SEO
        title="Digital Textile Printing Job Work Surat | Lado Rani Creation"
        description="Lado Rani Creation offers digital textile printing and sublimation job work in Surat for sarees, kurtis, sportswear, home furnishing and fabric traders."
        keywords="digital textile printing Surat, digital textile printing job work Surat, textile printing job work Surat, sublimation printing Surat, polyester fabric printing Surat, saree printing Surat, kurti digital printing Surat, fabric printing job work Gujarat, Lado Rani Creation Surat"
        canonical="/"
        faqs={FAQS.home}
      />

      {/* Video Hero Section */}
      <Hero
        onOpenQuoteModal={onOpenQuoteModal}
        onExploreServices={() => {}}
      />


      {/* Services Teaser Section (Image 1 style) */}
      <section className="section" style={{ background: 'var(--bg-surface-alt)' }}>
        <div className="container">
          <div className="section-header reveal-fade-up is-revealed">
            <h2 className="section-title">Specialized Digital Printing Services</h2>
            <p className="section-subtitle">
              Reliable digital textile printing and job-work support based in Surat, Gujarat. Precision in every print with transparent technical guidance.
            </p>
          </div>

          <div className="services-grid reveal-fade-up is-revealed">
            {featuredServices.map((service, index) => (
              <div key={index} className="service-card interactive-hover-card">
                <div className="service-card-media">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    width="400"
                    height="200"
                  />
                  <span className="service-card-badge">{service.badge}</span>
                </div>
                <div className="service-card-body">
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.25rem' }}>
                    {service.badge}
                  </span>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                  <div style={{ marginTop: 'auto', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Highlight:</strong> {service.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Redirection to /services */}
          <div className="section-teaser-bar reveal-fade-up is-revealed">
            <Link to="/services" className="btn-teaser-view-more">
              <span>View All Services & Fabric Matrix</span>
              <ArrowRight size={18} />
            </Link>
            <span className="teaser-hint-text">Explore technical specifications, fabric compatibility, and roll-to-roll options</span>
          </div>
        </div>
      </section>

      {/* Industries We Serve Teaser Section (Image 2 style) */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header reveal-fade-up is-revealed">
            <h2 className="section-title">Industries We Serve in Surat & Across India</h2>
            <p className="section-subtitle">
              Supplying custom-printed rolls and panel prints across ethnic wear, activewear, home furnishings, and textile trading networks.
            </p>
          </div>

          <div className="industries-grid reveal-fade-up is-revealed">
            {topIndustries.map((ind, index) => (
              <div key={index} className="industry-card interactive-hover-card">
                <div className="industry-card-img-wrap">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    loading="lazy"
                    width="360"
                    height="190"
                  />
                </div>
                <div className="industry-card-content">
                  <span className="industry-card-badge">{ind.tag}</span>
                  <h3 className="industry-card-title" style={{ marginTop: '0.6rem' }}>{ind.title}</h3>
                  <p className="industry-card-desc">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Redirection to /industries */}
          <div className="section-teaser-bar reveal-fade-up is-revealed">
            <Link to="/industries" className="btn-teaser-view-more">
              <span>Explore All Industries We Serve</span>
              <ArrowRight size={18} />
            </Link>
            <span className="teaser-hint-text">Includes sarees, dupattas, activewear, fast-fashion, home furnishings & boutique designers</span>
          </div>
        </div>
      </section>

      {/* Interactive Quote Calculator Widget */}
      <QuoteCalculator />

      {/* Process Workflow Teaser (All 5 steps displayed - Image 3 style) */}
      <section className="section" style={{ background: 'var(--bg-surface-alt)' }}>
        <div className="container">
          <div className="section-header reveal-fade-up is-revealed">
            <h2 className="section-title">Transparent Printing Workflow</h2>
            <p className="section-subtitle">
              From file inspection to roll delivery, our Surat production facility is organised for consistent shades and dependable turnaround.
            </p>
          </div>

          <ol className="process-timeline reveal-fade-up is-revealed">
            {processSteps.map((step) => (
              <li key={step.num} className="process-step">
                <div className="step-number" title={`Step ${step.num}`}>
                  {step.num}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </li>
            ))}
          </ol>

          {/* View More Redirection to /process */}
          <div className="section-teaser-bar reveal-fade-up is-revealed">
            <Link to="/process" className="btn-teaser-view-more">
              <span>Discover Full 5-Step Workflow Details</span>
              <ArrowRight size={18} />
            </Link>
            <span className="teaser-hint-text">Learn about RIP rasterization, ICC color profiles, calibration, and transfer testing</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* About Us Teaser Section */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header reveal-fade-up is-revealed">
            <h2 className="section-title">About Lado Rani Creation</h2>
            <p className="section-subtitle">
              Surat-based digital textile printing and job-work facility. Precision in Every Print.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="reveal-fade-left is-revealed">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Dedicated Job-Work Support in the Textile Capital of India
              </h3>
              
              <p style={{ marginBottom: '1.2rem', lineHeight: '1.8' }}>
                Located in <strong>Jay Industrial Estate, Anjana, Surat</strong>, Lado Rani Creation operates at the heart of Gujarat's textile manufacturing ecosystem. Our core specialty is industrial digital textile printing and job work for businesses across the fabric value chain.
              </p>

              <p style={{ marginBottom: '1.75rem', lineHeight: '1.8' }}>
                We partner directly with saree makers, dress-material manufacturers, garment brands, ethnic-wear houses, and textile traders who require dependable color reproduction, sharp detail rendering, and disciplined order tracking.
              </p>

              {/* View More Redirection to /about */}
              <Link to="/about" className="btn-teaser-view-more" style={{ margin: '0' }}>
                <span>Read Full Company Profile & Infrastructure</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="reveal-fade-right is-revealed">
              <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)', height: '340px' }}>
                <img
                  src={IMAGES.services.machine}
                  alt="Lado Rani Creation digital textile printing machine in Surat"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                  width="600"
                  height="340"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Conversion CTA Banner */}
      <CtaBanner onOpenQuoteModal={onOpenQuoteModal} />

      {/* GEO-Optimized FAQ Accordion */}
      <FaqSection
        faqs={FAQS.home}
        title="Digital Textile Printing FAQs"
      />
    </>
  );
}
