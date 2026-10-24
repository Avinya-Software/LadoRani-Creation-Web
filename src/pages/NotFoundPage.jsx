import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Printer, Phone } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Lado Rani Creation"
        description="The page you requested could not be found. Explore digital textile printing services, industries and contact details for Lado Rani Creation, Surat."
        canonical="/404"
        robots="noindex, nofollow"
      />

      <div className="not-found-page">
        <div className="container">
          <div className="not-found-code">404</div>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Explore our digital textile printing solutions below.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
            <Link to="/services" className="btn btn-navy">
              <Printer size={18} />
              <span>View Printing Services</span>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <Phone size={18} />
              <span>Contact Facility</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
