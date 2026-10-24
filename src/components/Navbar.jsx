import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Moon, Sun, ArrowRight, Menu, X } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';

export default function Navbar({ theme, onToggleTheme, onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Industries We Serve', path: '/industries' },
    { label: 'Our Process', path: '/process' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isItemActive = (path) => {
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-pill-container">
          {/* Logo Brand Lockup - Clean high-res logo linking to Home */}
          <div className="nav-brand-wrapper">
            <Link
              to="/"
              className="nav-brand"
              aria-label="Lado Rani Creation - Precision in Every Print"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src="/images/logo/logo_lado_rani_creation.png"
                onError={(e) => { e.currentTarget.src = '/assets/logo_lado_rani_creation.png'; }}
                alt="Lado Rani Creation"
                className="nav-brand-logo"
                width="87"
                height="42"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links - Shown on large screens */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isItemActive(item.path) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Nav Right Actions */}
          <div className="nav-actions">
            {/* WhatsApp Enquiry Pill Button */}
            <a
              href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20am%20inquiring%20about%20digital%20textile%20printing%20job%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="nav-whatsapp-btn"
              title="Chat on WhatsApp (+91 70166 33928)"
              aria-label="WhatsApp Enquiry"
              onClick={() => trackWhatsAppClick('navbar_desktop')}
            >
              <MessageCircle size={18} />
              <span className="btn-text">WhatsApp Enquiry</span>
            </a>

            {/* Direct Phone Link */}
            <a
              href="tel:+917016633928"
              className="nav-phone-link"
              title="Call Us (+91 70166 33928)"
              onClick={() => trackPhoneClick('navbar_desktop')}
            >
              <Phone size={15} />
              <span>+91 70166 33928</span>
            </a>

            {/* Theme Toggle (Dark / Light) */}
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Primary CTA Pill Button */}
            <button
              onClick={onOpenQuoteModal}
              className="nav-cta-btn"
              aria-label="Request a Printing Quote"
            >
              <span className="cta-full">Request a Quote</span>
              <span className="cta-short">Quote</span>
              <ArrowRight size={15} />
            </button>

            {/* Three lines hamburger toggle - for tablet and small screens */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-mobile-toggle"
              aria-label="Toggle navigation menu"
              title="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Navigation Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-drawer-header">
            <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/images/logo/logo_lado_rani_creation.png"
                onError={(e) => { e.currentTarget.src = '/assets/logo_lado_rani_creation.png'; }}
                alt="Lado Rani Creation"
                className="nav-brand-logo"
                width="87"
                height="42"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="theme-toggle-btn"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${isItemActive(item.path) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20am%20inquiring%20about%20digital%20textile%20printing%20job%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
              onClick={() => trackWhatsAppClick('navbar_mobile_drawer')}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Enquiry</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Get a Printing Quote</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
