import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, ExternalLink, Send, CheckCircle2, Clock, Star, Navigation } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { businessProfile } from '../data/businessProfile';
import FaqSection from '../components/FaqSection';
import { FAQS } from '../data/aeo';
import { trackWhatsAppClick, trackPhoneClick, trackLocationClick, trackQuoteSubmission } from '../utils/analytics';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    fabricType: 'Poly-Crepe',
    quantity: '500',
    designAvailable: 'Yes',
    timeline: 'Standard (3-5 Days)',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Google Maps listing (CID link) from the single business profile
  const googleDirectLocationUrl = businessProfile.google.cidUrl;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please enter your full name and phone/WhatsApp number.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
    trackQuoteSubmission(formData);

    const text = `Hello Lado Rani Creation,
New Website Quote Inquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ''}:
• Phone: ${formData.phone}
• Email: ${formData.email || 'N/A'}
• Fabric: ${formData.fabricType}
• Quantity: ${formData.quantity} metres
• Artwork Ready: ${formData.designAvailable}
• Required Timeline: ${formData.timeline}
• Note: ${formData.message || 'None'}`;

    const waUrl = `https://wa.me/917016633928?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO
        title="Contact & Printing Quote in Surat | Lado Rani Creation"
        description="Contact Lado Rani Creation, Surat for printing quotes and samples. Call or WhatsApp +91 70166 33928, Mon–Sat 9 AM–9 PM, or visit Jay Industrial Estate."
        keywords="contact Lado Rani Creation, digital textile printing Surat contact number, textile job work phone number Surat, Lado Rani Creation address Jay Industrial Estate, textile printing quotation Surat, digital printing rates Surat, textile printing inquiry WhatsApp Surat, Surat digital printing location map"
        canonical="/contact"
        breadcrumbs={[{ name: 'Contact Us', url: '/contact' }]}
        faqs={FAQS.contact}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'name': 'Contact Lado Rani Creation Surat',
          'description': 'Direct phone, WhatsApp, quotation inquiry form, and physical factory address for Lado Rani Creation in Surat.',
          'mainEntity': {
            '@type': 'LocalBusiness',
            'name': 'Lado Rani Creation',
            'telephone': '+917016633928',
            'email': 'Ladoranicreation99@gmail.com',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana',
              'addressLocality': 'Surat',
              'addressRegion': 'Gujarat',
              'postalCode': '395002',
              'addressCountry': 'IN'
            }
          }
        }}
      />

      {/* Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact Us', url: '/contact' }]} />
          <h1 className="page-hero-title">Contact & Printing Quotation</h1>
          <p className="page-hero-subtitle">
            Connect directly with our Surat printing facility for rate cards, fabric suitability checks, strike-offs, and batch production schedules.
          </p>
        </div>
      </section>

      {/* Main Contact Layout */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Direct Contacts & Location */}
            <div className="contact-info-cards">
              {/* Professional Contact Card */}
              <div className="contact-person-card" style={{ borderLeft: '4px solid var(--gold-500)' }}>
                <span className="person-badge">Primary Sales & Coordination</span>
                <h3 className="person-name" style={{ fontSize: '1.4rem', fontWeight: '800' }}>Contact Us</h3>
                
                <div className="person-phone">
                  <Phone size={18} style={{ color: 'var(--gold-500)' }} />
                  <a href="tel:+917016633928" style={{ color: 'var(--text-primary)', fontWeight: '700' }}>
                    +91 70166 33928
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  <Clock size={15} style={{ color: 'var(--gold-500)' }} />
                  <span>Mon – Sat: 9:00 AM – 9:00 PM</span>
                </div>

                <a
                  href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20would%20like%20to%20inquire%20about%20printing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                  aria-label="Click here to WhatsApp Lado Rani Creation"
                >
                  <MessageCircle size={18} />
                  <span>Click Here to WhatsApp</span>
                </a>
              </div>

              {/* Address & Direct Interactive Google Map */}
              <div className="address-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-600)', fontWeight: '700' }}>
                    <MapPin size={20} />
                    <span>Business Location</span>
                  </div>
                  
                  {/* 5.0 Star Badge */}
                  <a
                    href={googleDirectLocationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-rating-pill"
                    title="5.0 Rating on Google Reviews"
                  >
                    <Star size={13} fill="currentColor" />
                    <span>5.0 ★ (4 Reviews)</span>
                  </a>
                </div>

                <div>
                  <p className="address-text" style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana, Surat, Gujarat 395002
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    Conveniently located near Surat textile markets. <Link to="/digital-textile-printing-surat" style={{ color: 'var(--gold-600)', fontWeight: 600 }}>Surat unit location &amp; hours</Link>
                  </p>
                </div>

                {/* Direct Interactive Google Map Frame with cropped infowindow */}
                <div className="map-embed-wrapper">
                  <div className="map-embed-frame">
                    <iframe
                      src="https://www.google.com/maps?q=Lado+Rani+Creation,+Surat,+Gujarat&output=embed&z=17"
                      width="100%"
                      height="380"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lado Rani Creation - Google Map Location"
                    ></iframe>
                  </div>
                </div>

                {/* Map Action Buttons */}
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <a
                    href={googleDirectLocationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1, minWidth: '130px', justifyContent: 'center' }}
                  >
                    <ExternalLink size={14} />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Lado+Rani+Creation,+Plot+No.+244,+1st+Floor,+Jay+Industrial+Estate-2,+Anjana+Farm,+Surat,+Gujarat+395002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-navy btn-sm"
                    style={{ flex: 1, minWidth: '130px', justifyContent: 'center' }}
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Email Support Card */}
              <div style={{ background: 'var(--bg-surface-alt)', padding: '1.25rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Inquiries</div>
                  <a href="mailto:Ladoranicreation99@gmail.com" style={{ fontWeight: '700', color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                    Ladoranicreation99@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quotation Form */}
            <div className="form-card">
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Request a Printing Quotation
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                Fill out your job specifications below. You'll receive a transparent price estimate and quick WhatsApp response.
              </p>

              {formSubmitted && (
                <div className="form-success-banner">
                  <CheckCircle2 size={20} style={{ color: '#10b981', flexShrink: 0 }} />
                  <div>
                    <strong>Inquiry Sent Successfully!</strong>
                    <div style={{ fontSize: '0.86rem', marginTop: '0.2rem' }}>
                      Redirecting to WhatsApp for direct chat with our production coordinator.
                    </div>
                  </div>
                </div>
              )}

              {formError && (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.88rem' }}>
                  {formError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-name">Your Full Name *</label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Rajeshbhai Patel"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-company">Company / Brand Name</label>
                    <input
                      type="text"
                      id="form-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g., Surat Textile Mills"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-phone">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="form-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-email">Email Address</label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-fabric">Fabric Quality / Type</label>
                    <select
                      id="form-fabric"
                      name="fabricType"
                      value={formData.fabricType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Poly-Crepe">Poly-Crepe</option>
                      <option value="Poly-Georgette">Poly-Georgette</option>
                      <option value="Poly-Satin">Poly-Satin</option>
                      <option value="Dry-Fit Mesh">Dry-Fit Sportswear Mesh</option>
                      <option value="Poly-Spandex Lycra">Poly-Spandex Lycra</option>
                      <option value="Poly-Organza">Poly-Organza</option>
                      <option value="Poly-Velvet">Poly-Velvet</option>
                      <option value="Other Synthetic">Other Synthetic Blend</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-quantity">Approximate Meterage</label>
                    <input
                      type="text"
                      id="form-quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 500 metres"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-design">Artwork Ready?</label>
                    <select
                      id="form-design"
                      name="designAvailable"
                      value={formData.designAvailable}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Yes - High-res TIFF/PDF/AI ready">Yes - High-res File Ready</option>
                      <option value="Needs Scaling / Minor Repeats">Needs Minor Scaling/Repeats</option>
                      <option value="Design Creation Required">Design Assistance Required</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-timeline">Desired Timeline</label>
                    <select
                      id="form-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Urgent (24-48 Hours)">Urgent (24–48 Hours)</option>
                      <option value="Standard (3-5 Days)">Standard (3–5 Working Days)</option>
                      <option value="Flexible / Trial Run">Flexible / Sample Trial</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-message">Specific Requirements or Comments</label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Mention any custom repeat requirements, target Pantone colors, or questions..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>Send Inquiry & Open WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={FAQS.contact}
        title="Quotes and Contact FAQs"
        subtitle="What to send for a quote, how rates are set and how to reach the unit."
      />
    </>
  );
}
