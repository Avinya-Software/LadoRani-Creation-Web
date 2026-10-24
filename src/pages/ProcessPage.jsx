import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import FaqSection from '../components/FaqSection';
import { FAQS } from '../data/aeo';

export default function ProcessPage({ onOpenQuoteModal }) {
  // All 5 steps displayed cleanly in timeline format matching Image 3
  const steps = [
    {
      num: '1',
      title: 'Design & Fabric Handover',
      desc: 'Share your digital artwork files (TIFF/PDF/AI/JPG) along with exact fabric specifications, base color, and required meterage.'
    },
    {
      num: '2',
      title: 'Suitability & Quote Confirmation',
      desc: 'Our technical team checks fabric suitability, color profile requirements, quantity parameters, and mutually confirms rates and timelines.'
    },
    {
      num: '3',
      title: 'High-Precision Digital Printing',
      desc: 'Designs are digitally printed using high-density sublimation technology, calibrated dye inks, and precise tension controls.'
    },
    {
      num: '4',
      title: 'Transfer / Fusing (Where Agreed)',
      desc: 'For orders with agreed fusing support, prints are thermally bonded onto suitable polyester fabric under controlled temperature.'
    },
    {
      num: '5',
      title: 'Quality Check & Dispatch',
      desc: 'Rolls undergo thorough visual inspection for color depth and consistency before being packaged for collection or delivery from Surat.'
    }
  ];

  return (
    <>
      <SEO
        title="5-Step Textile Printing Process, Surat | Lado Rani Creation"
        description="How textile printing job work runs at Lado Rani Creation, Surat: design handover, quote confirmation, digital printing, fusing where agreed and QC."
        keywords="textile printing process Surat, sublimation process Surat, digital printing workflow Surat, fabric printing process, ICC color profiling textile, disperse dye sublimation process, rotary calender heat transfer Surat, textile quality check Surat, roll to roll printing workflow Surat"
        canonical="/process"
        breadcrumbs={[{ name: 'Our Process', url: '/process' }]}
        faqs={FAQS.process}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          'name': 'How Digital Textile Printing Job Work Works at Lado Rani Creation',
          'description': 'A 5-step transparent digital textile printing and transfer workflow for polyester fabrics in Surat.',
          'step': steps.map((step, index) => ({
            '@type': 'HowToStep',
            'position': index + 1,
            'name': step.title,
            'text': step.desc
          }))
        }}
      />

      {/* Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Our Process', url: '/process' }]} />
          <h1 className="page-hero-title">Transparent 5-Step Printing Workflow</h1>
          <p className="page-hero-subtitle">
            From initial file review to final roll delivery, our Surat production workflow is structured for consistency, precision, and reliable communication.
          </p>
        </div>
      </section>

      {/* 5-Step Process Timeline matching Image 3 */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Transparent 5-Step Printing Workflow</h2>
            <p className="section-subtitle">
              From initial file review to final roll delivery, our Surat production facility is organised for consistent shades and dependable turnaround.
            </p>
          </div>

          <ol className="process-timeline">
            {steps.map((step) => (
              <li key={step.num} className="process-step">
                <div className="step-number" title={`Step ${step.num}`}>
                  {step.num}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection
        faqs={FAQS.process}
        title="Printing Process FAQs"
        subtitle="Design files, fusing, colour consistency and quality checks, answered directly."
      />

      {/* Direct CTA Banner */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-950) 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Ready to Start Your Printing Job Work?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '680px', margin: '0 auto 2rem' }}>
            Send us your digital design files today. Our prepress team will review your repeat and confirm fabric readiness promptly.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuoteModal}
              className="btn btn-primary btn-lg"
            >
              <span>Submit File for Review</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20have%20an%20artwork%20file%20ready%20for%20a%20digital%20printing%20trial."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Send File via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
