import React, { useState } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { trackQuoteSubmission } from '../utils/analytics';

export default function QuoteModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [fabric, setFabric] = useState('Poly-Crepe');
  const [quantity, setQuantity] = useState('500');
  const [designReady, setDesignReady] = useState('Yes');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    trackQuoteSubmission({ name, phone, fabricType: fabric, meters: quantity });
    const text = `Hello Lado Rani Creation,
Quick Quote Request from ${name}:
• Phone: ${phone}
• Fabric: ${fabric}
• Approx Quantity: ${quantity} metres
• Artwork Ready: ${designReady}

Please share the rates and turnaround schedule.`;
    const url = `https://wa.me/917016633928?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 11, 20, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-2xl)',
          width: '100%',
          maxWidth: '520px',
          padding: '2.25rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-gold)',
          position: 'relative',
          animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-surface-alt)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-secondary)'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <h3 style={{ fontSize: '1.45rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
          Get a Printing Quote
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Connect directly with our team at Lado Rani Creation, Surat.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Anand Sharma"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              className="form-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Fabric Type</label>
              <select
                className="form-select"
                value={fabric}
                onChange={(e) => setFabric(e.target.value)}
              >
                <option value="Poly-Crepe">Poly-Crepe</option>
                <option value="Poly-Georgette">Poly-Georgette</option>
                <option value="Poly-Satin">Poly-Satin</option>
                <option value="Dry-Fit Polyester">Dry-Fit Sportswear</option>
                <option value="Micro-Polyester">Micro-Polyester</option>
                <option value="Curtain Fabric">Curtain / Furnishing</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Quantity (m)</label>
              <input
                type="text"
                placeholder="500m"
                className="form-input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Design Artwork Ready?</label>
            <select
              className="form-select"
              value={designReady}
              onChange={(e) => setDesignReady(e.target.value)}
            >
              <option value="Yes">Yes, High-Res File Ready</option>
              <option value="Needs Checking">File Needs Checking</option>
              <option value="Need Design Setup">Need Design Setup</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-whatsapp"
            style={{ width: '100%', marginTop: '0.75rem', padding: '0.9rem' }}
          >
            <MessageCircle size={18} />
            <span>Send Details to WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
