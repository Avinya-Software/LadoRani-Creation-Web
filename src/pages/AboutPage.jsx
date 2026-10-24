import React from 'react';
import { ArrowRight, MapPin, Target, Eye, Award, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import FaqSection from '../components/FaqSection';
import { FAQS } from '../data/aeo';
import { IMAGES } from '../data/imageAssets';

export default function AboutPage({ onOpenQuoteModal }) {
  const stats = [
    { value: 'Roll-to-Roll', label: 'Digital Printing', sub: 'Continuous paper and fabric printing' },
    { value: 'Sample First', label: 'Strike-Off Approval', sub: 'Check colour before bulk runs' },
    { value: 'Stored', label: 'Colour Profiles', sub: 'For consistent reorders' },
    { value: 'Surat', label: 'Textile Hub Location', sub: 'Jay Industrial Estate, Anjana' }
  ];

  const values = [
    {
      icon: <Sparkles size={24} />,
      title: 'Precision in Every Print',
      desc: 'Our founding motto. Every millimetre of fabric is audited for dot alignment, smooth tonal transitions, and sharp pattern edges.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Design Privacy & Security',
      desc: 'We treat client artwork with strict confidentiality. Your proprietary prints, seasonal motifs, and designer files are never shared or resold.'
    },
    {
      icon: <Award size={24} />,
      title: 'Repeat Batch Consistency',
      desc: 'Colour profiles for each job are stored digitally, so reorders placed weeks or months later can be printed with the same settings.'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Rooted in Surat’s Textile Heart',
      desc: 'Situated in Jay Industrial Estate, Anjana, Surat, which makes pickup and transport to the city’s major textile markets straightforward.'
    }
  ];

  return (
    <>
      <SEO
        title="About Our Surat Textile Printing Unit | Lado Rani Creation"
        description="Lado Rani Creation is a digital textile printing and job-work unit at Jay Industrial Estate, Anjana, Surat, serving manufacturers, brands and traders."
        keywords="about Lado Rani Creation, textile printing unit Surat, digital textile printing factory Surat, sublimation printing Surat, textile job work Surat Gujarat, Jay Industrial Estate Surat"
        canonical="/about"
        breadcrumbs={[{ name: 'About Us', url: '/about' }]}
        faqs={FAQS.about}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'name': 'About Lado Rani Creation Surat',
          'description': 'Digital textile printing and job work unit located at Jay Industrial Estate, Anjana, Surat, Gujarat.',
          'mainEntity': {
            '@id': 'https://www.ladoranicreation.com/#localbusiness',
            '@type': 'LocalBusiness',
            'name': 'Lado Rani Creation',
            'foundingLocation': {
              '@type': 'Place',
              'name': 'Surat, Gujarat, India'
            },
            'slogan': 'Precision in Every Print.'
          }
        }}
      />

      {/* Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Us', url: '/about' }]} />
          <h1 className="page-hero-title">About Lado Rani Creation</h1>
          <p className="page-hero-subtitle">
            Surat’s trusted digital textile printing and job-work mill. Combining modern industrial printing engines with deep textile craftsmanship.
          </p>
        </div>
      </section>

      {/* Key Numbers Strip */}
      <section style={{ background: 'var(--bg-surface-elevated)', borderBottom: '1px solid var(--border-light)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '900', fontFamily: 'var(--font-heading)', color: 'var(--gold-600)', lineHeight: '1.1' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.35rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Facility Tour */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)' }}>
                Our Heritage & Mission
              </span>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                Dedicated Job-Work Support in the Textile Capital of India
              </h2>
              
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                Located at <strong>1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana, Surat, Gujarat 395002</strong>, Lado Rani Creation operates at the heart of India's foremost textile production hub.
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We bridge the gap between creative fashion design and industrial scale execution. Whether serving high-volume saree manufacturers in Ring Road markets or boutique designers across India, our production lines are calibrated to deliver clean color gradients, reliable repeats, and honest technical guidance.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div style={{ background: 'var(--bg-surface-alt)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ color: 'var(--gold-600)', fontWeight: '700', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Target size={18} />
                    <span>Our Mission</span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    Provide textile manufacturers with high-precision digital printing that elevates fabric value and accelerates market delivery.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-surface-alt)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ color: 'var(--gold-600)', fontWeight: '700', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Eye size={18} />
                    <span>Our Vision</span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    To be a trusted name in Surat for consistent digital textile printing through continuous technology adoption and customer trust.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)' }}>
                <img
                  src={IMAGES.services.machine}
                  alt="Industrial digital textile printing machine at Lado Rani Creation in Surat"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                  width="600"
                  height="420"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section" style={{ background: 'var(--bg-surface-alt)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Principles Guiding Our Production</h2>
            <p className="section-subtitle">
              Every job work lot that enters our Surat facility is managed with care, technical diligence, and accountability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="interactive-hover-card" style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-lg)', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Printing Section */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>
              Eco-Friendly Manufacturing
            </span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Dry Sublimation Transfer Process
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Unlike traditional wet printing, which needs washing stages after printing, sublimation transfer printing is a <strong>dry process</strong>: disperse dye inks are printed on paper and bonded into polyester fabric with heat, without a wash-off step.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', color: '#047857', padding: '0.6rem 1.5rem', borderRadius: 'var(--radius-pill)', fontWeight: '700', fontSize: '0.92rem' }}>
              <CheckCircle2 size={18} />
              <span>Dry Transfer Process • No Wash-Off Stage</span>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={FAQS.about}
        title="About Lado Rani Creation: FAQs"
        subtitle="Design confidentiality, the sublimation process and how to reach us."
      />

      {/* CTA Strip */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-950) 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Visit Our Surat Printing Facility
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '680px', margin: '0 auto 2rem' }}>
            We welcome textile business owners, merchandisers, and fashion entrepreneurs for facility tours and sample trials.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuoteModal}
              className="btn btn-primary btn-lg"
            >
              <span>Schedule a Meeting</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20would%20like%20to%20visit%20your%20Surat%20printing%20mill."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <span>WhatsApp Facility Manager</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
