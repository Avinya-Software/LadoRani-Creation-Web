import React from 'react';
import { AlertCircle, FileCheck, CheckCircle2, Printer, Flame, Truck } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '1',
      icon: <FileCheck size={22} />,
      title: 'Design & Fabric Handover',
      desc: 'Share your digital artwork files (TIFF/PDF/AI/JPG) along with exact fabric specifications, base color, and required meterage.'
    },
    {
      num: '2',
      icon: <CheckCircle2 size={22} />,
      title: 'Suitability & Quote Confirmation',
      desc: 'Our technical team checks fabric suitability, color profile requirements, quantity parameters, and mutually confirms rates and timelines.'
    },
    {
      num: '3',
      icon: <Printer size={22} />,
      title: 'High-Precision Digital Printing',
      desc: 'Designs are digitally printed using high-density sublimation technology, calibrated dye inks, and precise tension controls.'
    },
    {
      num: '4',
      icon: <Flame size={22} />,
      title: 'Transfer / Fusing (Where Agreed)',
      desc: 'For orders with agreed fusing support, prints are thermally bonded onto suitable polyester fabric under controlled temperature.'
    },
    {
      num: '5',
      icon: <Truck size={22} />,
      title: 'Quality Check & Dispatch',
      desc: 'Rolls undergo thorough visual inspection for color depth and consistency before being packaged for collection or delivery from Surat.'
    }
  ];

  return (
    <section id="process" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up is-revealed">
          <h2 className="section-title">Transparent 5-Step Printing Workflow</h2>
          <p className="section-subtitle">
            From initial file review to final roll delivery, our Surat production workflow is structured for consistency, precision, and reliable communication.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="process-timeline reveal-fade-up is-revealed">
          {steps.map((step) => (
            <div key={step.num} className="process-step">
              <div className="step-number" title={`Step ${step.num}`}>
                {step.num}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Material Suitability Notice Box */}
        <div className="process-notice-box reveal-fade-up is-revealed">
          <AlertCircle />
          <div className="process-notice-text">
            <strong>Important Technical Note on Fabric Compatibility:</strong> Not every fabric is suitable for digital textile sublimation. The process and final print results strictly depend on fabric composition (polyester content) and agreed job specifications. Pure cotton and natural silk require different printing chemistry. Please share fabric samples for suitability testing prior to large batch runs.
          </div>
        </div>
      </div>
    </section>
  );
}
