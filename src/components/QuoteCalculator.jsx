import React, { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function QuoteCalculator() {
  const [service, setService] = useState('Digital Textile Printing');
  const [fabric, setFabric] = useState('Poly-Crepe');
  const [meterage, setMeterage] = useState(500);
  const [designReady, setDesignReady] = useState('Yes (High-Res Ready)');
  const [timeline, setTimeline] = useState('Standard (3-5 Days)');

  const handleWhatsAppSend = () => {
    const text = `Hello Lado Rani Creation,
I have calculated a requirement on your website:
• Service: ${service}
• Fabric Type: ${fabric}
• Quantity: ${meterage} metres
• Artwork Available: ${designReady}
• Required Timeline: ${timeline}

Please share the rate and next steps. Thank you!`;
    const url = `https://wa.me/917016633928?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header reveal-fade-up is-revealed">
          <h2 className="section-title">Instant Job-Work Requirement Estimator</h2>
          <p className="section-subtitle">
            Configure your printing specifications below to generate an instant enquiry summary for our production team in Surat.
          </p>
        </div>

        <div className="quote-widget-card reveal-fade-up is-revealed">
          <div className="widget-grid">
            {/* Left Controls */}
            <div>
              {/* Service Selection */}
              <div className="widget-control-group">
                <label className="widget-label">Select Printing Service</label>
                <select
                  className="widget-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="Digital Textile Printing">Digital Textile Printing</option>
                  <option value="Sublimation Printing for Suitable Fabrics">Sublimation Printing for Suitable Fabrics</option>
                  <option value="Custom Design Printing">Custom Design Printing</option>
                  <option value="Textile Printing Job Work">Textile Printing Job Work</option>
                  <option value="Heat Transfer / Fusing Support">Heat Transfer / Fusing Support (Where agreed)</option>
                </select>
              </div>

              {/* Fabric Type */}
              <div className="widget-control-group">
                <label className="widget-label">Fabric / Substrate Type</label>
                <select
                  className="widget-select"
                  value={fabric}
                  onChange={(e) => setFabric(e.target.value)}
                >
                  <option value="Poly-Crepe">Poly-Crepe (Saree & Dress Material)</option>
                  <option value="Poly-Georgette">Poly-Georgette (Dupatta & Fashion Fabric)</option>
                  <option value="Poly-Satin">Poly-Satin (Ethnic & Evening Wear)</option>
                  <option value="Dry-Fit Polyester">Dry-Fit Polyester (Sportswear & T-Shirts)</option>
                  <option value="Micro-Polyester">Micro-Polyester / Poly-Twill</option>
                  <option value="Furnishing Polyester Blend">Furnishing Polyester Blend (Curtains & Cushions)</option>
                  <option value="Other Suitable Synthetic">Other Suitable Synthetic (Subject to Confirmation)</option>
                </select>
              </div>

              {/* Meterage Range Slider */}
              <div className="widget-control-group">
                <div className="slider-val-display" style={{ marginBottom: '0.6rem' }}>
                  <label className="widget-label" style={{ margin: 0 }}>Approximate Quantity (Metres)</label>
                  <span className="slider-val-highlight">{meterage.toLocaleString()} m</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={meterage}
                  onChange={(e) => setMeterage(Number(e.target.value))}
                  className="range-slider"
                  aria-label="Select meterage quantity"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  <span>100m (Sampling / Batch)</span>
                  <span>5,000m</span>
                  <span>10,000m+ (Production Lot)</span>
                </div>
              </div>

              {/* Design & Timeline Options */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="widget-control-group">
                  <label className="widget-label">Design Files Ready?</label>
                  <select
                    className="widget-select"
                    value={designReady}
                    onChange={(e) => setDesignReady(e.target.value)}
                  >
                    <option value="Yes (High-Res Ready)">Yes, High-Res Ready</option>
                    <option value="Artwork Needs Checking">Artwork Needs Checking</option>
                    <option value="Need Design Assistance">Need Design Assistance</option>
                  </select>
                </div>

                <div className="widget-control-group">
                  <label className="widget-label">Required Turnaround</label>
                  <select
                    className="widget-select"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    <option value="Standard (3-5 Days)">Standard (3-5 Days)</option>
                    <option value="Urgent (Priority Scheduling)">Urgent (Priority Scheduling)</option>
                    <option value="Flexible Schedule">Flexible Schedule</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Summary Box */}
            <div className="quote-summary-box">
              <div>
                <h3 className="summary-heading">Requirement Summary</h3>

                <div className="summary-row">
                  <span>Selected Service:</span>
                  <strong>{service}</strong>
                </div>

                <div className="summary-row">
                  <span>Target Material:</span>
                  <strong>{fabric}</strong>
                </div>

                <div className="summary-row">
                  <span>Estimated Volume:</span>
                  <strong style={{ color: 'var(--gold-600)' }}>{meterage.toLocaleString()} metres</strong>
                </div>

                <div className="summary-row">
                  <span>Design Artwork:</span>
                  <strong>{designReady}</strong>
                </div>

                <div className="summary-row">
                  <span>Turnaround Target:</span>
                  <strong>{timeline}</strong>
                </div>

                <div className="summary-row" style={{ marginTop: '0.8rem', borderTop: '1px dashed var(--border-light)', paddingTop: '0.8rem' }}>
                  <span>Production Hub:</span>
                  <strong>Surat, Gujarat (Anjana)</strong>
                </div>
              </div>

              <div>
                <p className="summary-note">
                  * Note: Exact per-meter rates and delivery schedules are confirmed after reviewing fabric sample suitability, ink coverage, and order volume.
                </p>

                <button
                  onClick={handleWhatsAppSend}
                  className="btn btn-whatsapp"
                  style={{ width: '100%', marginTop: '1.25rem' }}
                  aria-label="Send requirement summary on WhatsApp"
                >
                  <MessageCircle size={20} />
                  <span>Send Requirement via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
