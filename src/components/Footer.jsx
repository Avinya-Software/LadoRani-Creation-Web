import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, GoogleMapsIcon } from './SocialIcons';
import { trackWhatsAppClick, trackPhoneClick, trackLocationClick } from '../utils/analytics';
import { businessProfile as P } from '../data/businessProfile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Google Maps listing (CID link) from the single business profile
  const googleDirectLocationUrl = P.google.cidUrl;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info & Social Icons */}
          <div className="footer-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <img
                src="/images/logo/logo_lado_rani_creation.png"
                onError={(e) => { e.currentTarget.src = '/assets/logo_lado_rani_creation.png'; }}
                alt="Lado Rani Creation Logo"
                className="footer-logo"
                width="99"
                height="48"
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>
                  LADO RANI CREATION
                </div>
                <div className="footer-tagline">
                  PRECISION IN EVERY PRINT.
                </div>
              </div>
            </Link>

            <p className="footer-desc">
              Specialized digital textile printing and job work in Surat, Gujarat. Serving saree manufacturers, garment brands, ethnic wear producers, and fabric traders across India.
            </p>

            {/* Social Media & Direct Map Search Row */}
            <div className="footer-social-row" aria-label="Social Media Platforms & Google Map">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/lado.ranicreation/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn instagram"
                aria-label="Visit Lado Rani Creation on Instagram"
                title="Instagram (@lado.ranicreation)"
              >
                <InstagramIcon size={22} color="#ffffff" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19jQXM9sfp/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn facebook"
                aria-label="Visit Lado Rani Creation on Facebook"
                title="Facebook (Lado Rani Creation)"
              >
                <FacebookIcon size={20} fill="#ffffff" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20am%20inquiring%20about%20digital%20textile%20printing%20job%20work."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn whatsapp"
                aria-label="Chat with Lado Rani Creation on WhatsApp"
                title="WhatsApp (+91 70166 33928)"
                onClick={() => trackWhatsAppClick('footer_social_bar')}
              >
                <WhatsAppIcon size={22} fill="#ffffff" />
              </a>

              {/* Google Maps Pin */}
              <a
                href={googleDirectLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn map"
                aria-label="Direct Search Lado Rani Creation on Google Maps"
                title="Direct Search Lado Rani Creation on Google Maps"
                onClick={() => trackLocationClick()}
              >
                <GoogleMapsIcon size={22} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/industries" className="footer-link">Industries We Serve</Link></li>
              <li><Link to="/process" className="footer-link">Our Process</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact & Quote</Link></li>
              <li><Link to="/digital-textile-printing-surat" className="footer-link">Surat Printing Unit</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="footer-title">Core Services</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Digital Textile Printing</Link></li>
              <li><Link to="/services" className="footer-link">Sublimation Paper Printing</Link></li>
              <li><Link to="/services" className="footer-link">Custom Color Profiling</Link></li>
              <li><Link to="/services" className="footer-link">Textile Printing Job Work</Link></li>
              <li><Link to="/services" className="footer-link">Rotary Heat Fusing & Transfer</Link></li>
            </ul>
          </div>

          {/* Facility & Contact */}
          <div>
            <h4 className="footer-title">Facility & Contact</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin />
                <a
                  href={googleDirectLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#cbd5e1', lineHeight: '1.5' }}
                  title="Direct Search Lado Rani Creation on Google Maps"
                  onClick={() => trackLocationClick()}
                >
                  {P.address.formatted}
                </a>
              </div>

              <div className="footer-contact-item">
                <Phone />
                <div>
                  <a
                    href={`tel:${P.contact.phone}`}
                    style={{ fontWeight: '600', color: '#ffffff' }}
                    onClick={() => trackPhoneClick('footer')}
                  >
                    {P.contact.phoneDisplay}
                  </a>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                    Customer Support & Sales
                  </div>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail />
                <a href={`mailto:${P.contact.email}`}>{P.contact.email}</a>
              </div>

              <div className="footer-contact-item">
                <span aria-hidden="true" style={{ width: '18px' }} />
                <span style={{ color: '#cbd5e1' }}>{P.hours.display} (Sunday closed)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} <strong>{P.name}</strong>. All rights reserved. Surat, Gujarat, India.
            {' · '}<Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            {' · '}<Link to="/terms" className="footer-link">Terms of Use</Link>
          </div>

          <div className="footer-developed-by">
            Developed by{' '}
            <a
              href="https://avinyasoftware.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              Avinya Digital Innovations
            </a>
          </div>

          <div className="footer-bottom-links">
            <button
              onClick={scrollToTop}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--gold-400)', background: 'none', border: 'none', cursor: 'pointer' }}
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
