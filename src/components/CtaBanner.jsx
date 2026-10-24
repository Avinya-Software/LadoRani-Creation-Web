import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CtaBanner({ onOpenQuoteModal }) {
  return (
    <section className="section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="cta-banner reveal-fade-up is-revealed">
          <h2 className="cta-banner-title">Have a Design Ready for Printing?</h2>
          <p className="cta-banner-text">
            Share your design file, fabric type, quantity and required timeline. We'll review technical suitability and discuss the next steps immediately.
          </p>
          <div className="cta-btn-group">
            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20have%20a%20design%20ready%20for%20printing%20and%20would%20like%20to%20discuss%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Click here to WhatsApp Lado Rani Creation"
            >
              <MessageCircle size={20} />
              <span>Click Here to WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="btn btn-primary btn-lg"
              aria-label="Request a Printing Quote"
            >
              <span>Request a Quote</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
