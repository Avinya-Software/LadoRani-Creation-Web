import React from 'react';
import { MapPin, Target, Eye, Cpu } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-surface-alt)' }}>
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

            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              We partner directly with saree makers, dress-material manufacturers, garment brands, ethnic-wear houses, and textile traders who require dependable color reproduction, sharp detail rendering, and disciplined order tracking. We deliver precision digital textile printing and coordinate agreed fusing workflows for suitable polyester substrates.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                <div style={{ color: 'var(--gold-600)', fontWeight: '700', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Target size={18} />
                  <span>Our Mission</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  Deliver high-precision digital textile printing with clean color gradients, reliable repeats, and honest technical guidance.
                </p>
              </div>

              <div style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                <div style={{ color: 'var(--gold-600)', fontWeight: '700', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Eye size={18} />
                  <span>Quality Focus</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  Strict calibration of ink saturation, paper tension, and file fidelity before running commercial yardage.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-fade-right is-revealed">
            <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)' }}>
              <img
                src="/assets/crop_machine.webp"
                alt="Lado Rani Creation digital textile printing machine in Surat"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
                width="600"
                height="380"
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(6,15,28,0.9), transparent)', color: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--gold-300)', fontWeight: '600' }}>
                  <MapPin size={16} />
                  <span>1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana, Surat, Gujarat 395002</span>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '0.25rem' }}>
                  Digital Textile Printing Job-Work Facility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
