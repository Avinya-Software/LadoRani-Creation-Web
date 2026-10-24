import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function IndustriesSection({ onOpenQuoteModal }) {
  const industries = [
    {
      id: 'saree-dress',
      title: 'Saree & Dress Material',
      img: '/assets/crop_saree.webp',
      alt: 'Digitally printed saree fabric on mannequin',
      tag: 'Ethnic Apparel',
      desc: 'High-precision floral, ornamental, and all-over digital textile printing for saree manufacturers, semi-stitched suits, and unstitched dress-material producers.'
    },
    {
      id: 'dupatta-fashion',
      title: 'Dupatta & Fashion Fabrics',
      img: '/assets/crop_dupatta.webp',
      alt: 'Folded digital print dupatta and fashion fabrics',
      tag: 'Fashion Fabrics',
      desc: 'Crisp borders, artistic repeats, and rich color saturation printed on lightweight poly-georgette, poly-chiffon, and synthetic fashion fabrics.'
    },
    {
      id: 'kurti-ethnic',
      title: 'Kurti, Kurta & Ethnic Wear',
      img: '/assets/crop_kurti.webp',
      alt: 'Digitally printed ethnic kurtis displayed on hangers',
      tag: 'Garment Cut Pieces & Rolls',
      desc: 'Pattern printing and panel designs for kurti and ethnic-wear manufacturers. Reliable repeat accuracy and batch color consistency across production lots.'
    },
    {
      id: 'sportswear-uniforms',
      title: 'T-Shirts, Sportswear & Uniforms',
      img: '/assets/crop_sportswear.webp',
      alt: 'Sublimation printed colorful sportswear t-shirts',
      tag: 'Athletic & Activewear',
      desc: 'Vibrant, high-contrast sublimation prints for moisture-wicking dry-fit fabrics, jerseys, corporate polyester t-shirts, and institutional sports uniforms.'
    },
    {
      id: 'home-furnishing',
      title: 'Curtains & Home Furnishing',
      img: '/assets/crop_curtains.webp',
      alt: 'Printed curtains and matching floral cushions',
      tag: 'Interior Décor',
      desc: 'Large-scale botanical, abstract, and textured motifs printed for curtain draperies, cushion covers, upholstery fabrics, and interior furnishing textiles.'
    },
    {
      id: 'textile-traders',
      title: 'Textile Traders & Wholesalers',
      img: '/assets/crop_fabrics.webp',
      alt: 'Organized stack of printed textile rolls',
      tag: 'B2B Trade & Agents',
      desc: 'Scalable job-work partnerships for Surat textile market traders, fabric agents, and converters looking for consistent turnarounds and clear order tracking.'
    },
    {
      id: 'custom-orders',
      title: 'Small Brands & Custom Orders',
      img: '/assets/crop_swirl.webp',
      alt: 'Designer fabric print swirl sample',
      tag: 'Designers & Emerging Labels',
      desc: 'Job-work support for independent fashion designers, boutique labels, and custom sampling runs, subject to scheduled machine production capacity.'
    }
  ];

  return (
    <section id="industries" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up is-revealed">
          <h2 className="section-title">Textile Applications & Market Sectors</h2>
          <p className="section-subtitle">
            We provide specialized digital printing job-work for manufacturers, wholesalers, and designers. We print fabrics—we do not sell ready-made garments.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="industries-grid">
          {industries.map((ind) => (
            <div key={ind.id} className="industry-card interactive-hover-card reveal-fade-up is-revealed">
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
  );
}
