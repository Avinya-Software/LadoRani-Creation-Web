import React from 'react';
import { Sparkles, Sliders, MessageSquare, Tag } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Sparkles size={24} />,
      title: 'Print Quality & Detail',
      desc: 'Dedicated focus on crisp design rendering, sharp line definition, smooth gradients, and uniform ink density in digital textile printing.'
    },
    {
      icon: <Sliders size={24} />,
      title: 'Custom Job-Work Support',
      desc: 'Flexible handling of diverse patterns, client design repeats, panel layouts, and batch sizes tailored to textile manufacturers.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Clear Order Coordination',
      desc: 'Transparent communication regarding job schedules, fabric suitability checks, print status, and agreed dispatch timelines.'
    },
    {
      icon: <Tag size={24} />,
      title: 'Competitive, Volume-Based Rates',
      desc: 'Commercial job-work pricing determined directly by print meterage, ink coverage requirements, and specific order parameters.'
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-surface-alt)' }}>
      <div className="container">
        <div className="section-header reveal-fade-up is-revealed">
          <h2 className="section-title">Why Work With Lado Rani Creation</h2>
          <p className="section-subtitle">
            A practical, textile-industry focused printing job-work partner located in Surat's active textile corridor.
          </p>
        </div>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {points.map((pt, idx) => (
            <div key={idx} className="service-card interactive-hover-card reveal-fade-up is-revealed" style={{ padding: '2rem' }}>
              <div className="trust-icon-box" style={{ marginBottom: '1.25rem', width: '50px', height: '50px' }}>
                {pt.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>{pt.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
