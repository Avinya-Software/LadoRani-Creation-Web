import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, ExternalLink, Send, CheckCircle2, AlertCircle, Clock, Star, Navigation } from 'lucide-react';

export default function ContactSection() {
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

  // Exact Google Maps Place URL for Lado Rani Creation (single verified place highlighted)
  const googleDirectLocationUrl = "https://www.google.com/maps/place/Lado+Rani+Creation/@21.1854821,72.8501114,17z/data=!4m16!1m9!3m8!1s0x3be04f68063a13f1:0xa7b8a2f38a9862de!2sLado+Rani+Creation!8m2!3d21.1854771!4d72.8526863!9m1!1b1!16s%2Fg%2F11zzqtmcgp!3m5!1s0x3be04f68063a13f1:0xa7b8a2f38a9862de!8m2!3d21.1854771!4d72.8526863!16s%2Fg%2F11zzqtmcgp?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D";

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

    // WhatsApp redirection with no personal names
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
    <section id="contact" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up is-revealed">
          <h2 className="section-title">Contact & Printing Quotation</h2>
          <p className="section-subtitle">
            Let's discuss your printing requirements, fabric suitability, and volume rates. Connect directly with our Surat facility.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Contacts & Location */}
          <div className="contact-info-cards reveal-fade-left is-revealed">
            {/* Single Professional Contact Us Card (Image 3: name removed, second person removed) */}
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
                
                {/* 5.0 Star Badge from Google Screenshot */}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.82rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                  <span style={{ color: '#059669', fontWeight: '600' }}>● Open • Closes 9pm</span>
                  <span>• Plus Code: <strong>5VP3+53 Surat, Gujarat</strong></span>
                </div>
              </div>

              {/* Direct Embedded Google Map with Red Location Marker Indicator & Business Label */}
              <div className="map-embed-frame">
                <iframe
                  title="Lado Rani Creation Google Maps Live Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.088863644464!2d72.8526863!3d21.1862000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f68063a13f1%3A0xa7b8a2f38a9862de!2sLado%20Rani%20Creation!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen=""
                ></iframe>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  <Mail size={15} style={{ color: 'var(--gold-500)' }} />
                  <a href="mailto:Ladoranicreation99@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                    Ladoranicreation99@gmail.com
                  </a>
                </div>

                <a
                  href={googleDirectLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-navy"
                  style={{ padding: '0.55rem 1.15rem', fontSize: '0.88rem' }}
                  aria-label="Open Lado Rani Creation in Google Maps"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="form-card reveal-fade-right is-revealed">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Request a Printing Quotation</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Fill in your order requirements. Submitting will validate your details and connect you directly with our team on WhatsApp.
            </p>

            {formSubmitted && (
              <div className="form-status-msg success">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                  <CheckCircle2 size={18} />
                  <span>Requirement Logged Successfully!</span>
                </div>
                <p style={{ marginTop: '0.35rem', fontSize: '0.86rem' }}>
                  A WhatsApp chat window has been opened with your pre-filled details. If not opened, click the WhatsApp button on the left.
                </p>
              </div>
            )}

            {formError && (
              <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <AlertCircle size={18} />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Rajesh Patel"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="company">Company / Brand Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="e.g. Patel Textiles"
                    className="form-input"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Email (Optional) */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Fabric Type */}
                <div className="form-group">
                  <label className="form-label" htmlFor="fabricType">Fabric / Product Type</label>
                  <select
                    id="fabricType"
                    name="fabricType"
                    className="form-select"
                    value={formData.fabricType}
                    onChange={handleChange}
                  >
                    <option value="Poly-Crepe">Poly-Crepe</option>
                    <option value="Poly-Georgette">Poly-Georgette</option>
                    <option value="Poly-Satin">Poly-Satin</option>
                    <option value="Dry-Fit Polyester">Dry-Fit Sportswear Fabric</option>
                    <option value="Micro-Polyester">Micro-Polyester</option>
                    <option value="Curtain/Furnishing Fabric">Curtain / Furnishing Blend</option>
                    <option value="Other Fabric">Other Synthetic (To Confirm)</option>
                  </select>
                </div>

                {/* Quantity in Metres */}
                <div className="form-group">
                  <label className="form-label" htmlFor="quantity">Approx. Quantity (Metres)</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="e.g. 500, 1000, 5000"
                    className="form-input"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>

                {/* Design Ready */}
                <div className="form-group">
                  <label className="form-label" htmlFor="designAvailable">Design / Artwork Available?</label>
                  <select
                    id="designAvailable"
                    name="designAvailable"
                    className="form-select"
                    value={formData.designAvailable}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes, High-Res Print File Ready</option>
                    <option value="Checking">File Needs Technical Check</option>
                    <option value="No">No, Need Design Assistance</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="form-group">
                  <label className="form-label" htmlFor="timeline">Required Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="form-select"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="Standard (3-5 Days)">Standard (3-5 Days)</option>
                    <option value="Urgent">Urgent Batch</option>
                    <option value="Flexible">Flexible Schedule</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="message">Message / Job Specifications</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Mention specific print repeats, fabric width, or any questions..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <p className="form-notice">
                We respect your privacy. Information shared is exclusively used to respond to your commercial printing enquiry.
              </p>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '1.25rem' }}
              >
                <Send size={19} />
                <span>Submit & Discuss via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
