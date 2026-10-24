import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import FaqSection from '../components/FaqSection';
import { FAQS } from '../data/aeo';
import { IMAGES } from '../data/imageAssets';

export default function IndustriesPage({ onOpenQuoteModal }) {
  const industries = [
    {
      id: 'saree-dress',
      title: 'Saree & Dress Material',
      img: IMAGES.industries.saree,
      alt: 'Digitally printed saree fabric on mannequin',
      tag: 'Ethnic Apparel',
      desc: 'High-precision floral, ornamental, and all-over digital textile printing for saree manufacturers, semi-stitched suits, and unstitched dress-material producers.'
    },
    {
      id: 'dupatta-fashion',
      title: 'Dupattas & Fashion Fabrics',
      img: IMAGES.industries.dupatta,
      alt: 'Folded digital print dupatta and fashion fabrics',
      tag: 'Fashion Fabrics',
      desc: 'Crisp borders, artistic repeats, and rich color saturation printed on lightweight poly-georgette, poly-chiffon, and synthetic fashion fabrics.'
    },
    {
      id: 'kurti-ethnic',
      title: 'Kurti, Kurta & Ethnic Wear',
      img: IMAGES.industries.kurti,
      alt: 'Digitally printed ethnic kurtis displayed on hangers',
      tag: 'Garment Pieces',
      desc: 'Pattern printing and panel designs for kurti and ethnic-wear manufacturers. Reliable repeat accuracy and batch color consistency across production lots.'
    },
    {
      id: 'sportswear-uniforms',
      title: 'Sportswear & Uniforms',
      img: IMAGES.industries.sportswear,
      alt: 'Sublimation printed colorful sportswear t-shirts',
      tag: 'Activewear',
      desc: 'Vibrant, high-contrast sublimation prints for moisture-wicking dry-fit fabrics, jerseys, corporate polyester t-shirts, and institutional sports uniforms.'
    },
    {
      id: 'home-furnishing',
      title: 'Curtains & Home Furnishing',
      img: IMAGES.industries.curtains,
      alt: 'Printed curtains and matching floral cushions',
      tag: 'Interior Décor',
      desc: 'Large-scale botanical, abstract, and textured motifs printed for curtain draperies, cushion covers, upholstery fabrics, and interior furnishing textiles.'
    },
    {
      id: 'western-wear',
      title: 'Western Wear & Fast-Fashion',
      img: IMAGES.services.fabrics,
      alt: 'Printed fabric rolls for western wear',
      tag: 'Fast Fashion & Export',
      desc: 'On-trend micro-florals, animal prints, geometric abstracts, and retro checks for ladies tops, tiered maxi dresses, co-ord sets, and skirts.'
    },
    {
      id: 'textile-traders',
      title: 'Textile Traders & Wholesalers',
      img: IMAGES.industries.fabrics,
      alt: 'Organized stack of printed textile rolls in Surat warehouse',
      tag: 'B2B Trade & Agents',
      desc: 'Scalable job-work partnerships for Surat textile market traders, fabric agents, and converters looking for consistent turnarounds and clear order tracking.'
    },
    {
      id: 'custom-orders',
      title: 'Small Brands & Custom Orders',
      img: IMAGES.industries.swirl,
      alt: 'Designer fabric print swirl sample',
      tag: 'Designers & Startups',
      desc: 'Job-work support for independent fashion designers, boutique labels, and custom sampling runs, subject to scheduled machine production capacity.'
    }
  ];

  return (
    <>
      <SEO
        title="Saree, Kurti & Sportswear Printing | Lado Rani Creation"
        description="Digital and sublimation printing for saree makers, kurti and ethnic-wear brands, dupattas, sportswear, home furnishing and textile traders in Surat."
        keywords="saree digital printing Surat, saree dress material printing, dupatta printing job work Surat, kurti fabric printing Surat, sportswear sublimation printing, athleisure fabric printing Surat, dry fit jersey sublimation, curtains home furnishing printing Surat, western wear digital printing, textile trader printing job work Surat, boutique designer fabric printing, fashion brand printing job work Surat"
        canonical="/industries"
        breadcrumbs={[{ name: 'Industries We Serve', url: '/industries' }]}
        faqs={FAQS.industries}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'name': 'Industries Served for Digital Textile Printing',
          'description': 'Textile sectors served by Lado Rani Creation in Surat including sarees, kurtis, sportswear, dupattas, and home furnishings.',
          'itemListElement': industries.map((ind, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': ind.title,
            'description': ind.desc
          }))
        }}
      />

      {/* Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Industries We Serve', url: '/industries' }]} />
          <h1 className="page-hero-title">Industries & Market Sectors We Serve</h1>
          <p className="page-hero-subtitle">
            From Surat’s ethnic saree markets to nationwide sportswear and home decor brands, explore our specialized industry printing solutions.
          </p>
        </div>
      </section>

      {/* Main Industries Catalog matching Image 2 perfectly */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tailored Solutions for Every Textile Sector</h2>
            <p className="section-subtitle">
              Each textile application has unique substrate, scale, and color vibrancy requirements. Discover how we tailor printing to your industry.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((ind) => (
              <div key={ind.id} className="industry-card interactive-hover-card">
                <div className="industry-card-img-wrap">
                  <img
                    src={ind.img}
                    alt={ind.alt}
                    loading="lazy"
                    width="360"
                    height="190"
                  />
                </div>

                <div className="industry-card-content">
                  <span className="industry-card-badge">{ind.tag}</span>
                  <h3 className="industry-card-title" style={{ marginTop: '0.6rem' }}>{ind.title}</h3>
                  <p className="industry-card-desc">{ind.desc}</p>

                  <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                    <button
                      onClick={onOpenQuoteModal}
                      className="service-card-cta"
                      style={{ fontSize: '0.85rem' }}
                    >
                      <span>Discuss Fabric & Design</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={FAQS.industries}
        title="Industries We Print For: FAQs"
        subtitle="Sarees, sportswear, home furnishing and trade job work, answered directly."
      />

      {/* Direct CTA Banner */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-950) 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Request Industry Swatches or Discuss Your Fabric Job Work
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '680px', margin: '0 auto 2rem' }}>
            Connect with our Surat technical coordinators to discuss fabric suitability, sample strike-offs, and batch rates.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuoteModal}
              className="btn btn-primary btn-lg"
            >
              <span>Request Job Work Quote</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20would%20like%20to%20discuss%20printing%20for%20my%20industry%20sector."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Production Lead</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
