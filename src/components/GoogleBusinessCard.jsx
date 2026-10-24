import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Star, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { businessProfile as P, getOpenStatus, whatsAppUrl } from '../data/businessProfile';
import { trackLocationClick, trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

/**
 * Google Business Profile style card: same name, address, hours and phone as the
 * Google listing (NAP), live open/closed status, real rating and one-tap actions.
 * `showMap` adds the embedded Google Map (lazy-loaded).
 */
export default function GoogleBusinessCard({ showMap = false, headingLevel = 'h3' }) {
  // Status depends on the visitor's current time, so it is computed after mount only
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(getOpenStatus());
    const timer = setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  const Heading = headingLevel;

  return (
    <div className={`gbp-card ${showMap ? 'gbp-card--with-map' : ''}`}>
      <div className="gbp-card-body">
        <div className="gbp-card-header">
          <Heading className="gbp-card-name">{P.name}</Heading>
          <p className="gbp-card-category">{P.category} in {P.address.city}</p>
          <a
            href={P.google.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gbp-card-rating"
            title={`${P.google.rating.toFixed(1)} out of 5 on Google`}
            onClick={() => trackLocationClick()}
          >
            <strong>{P.google.rating.toFixed(1)}</strong>
            <span className="gbp-card-stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </span>
            <span>{P.google.reviewCount} Google reviews</span>
          </a>
        </div>

        <ul className="gbp-card-details">
          <li>
            <MapPin size={17} aria-hidden="true" />
            <span>{P.address.formatted}</span>
          </li>
          <li>
            <Clock size={17} aria-hidden="true" />
            <span>
              {status && (
                <strong className={status.isOpen ? 'gbp-status-open' : 'gbp-status-closed'}>{status.label} · </strong>
              )}
              {P.hours.display} (Sunday closed)
            </span>
          </li>
          <li>
            <Phone size={17} aria-hidden="true" />
            <a href={`tel:${P.contact.phone}`} onClick={() => trackPhoneClick('google-card')}>{P.contact.phoneDisplay}</a>
          </li>
        </ul>

        <div className="gbp-card-actions">
          <a
            href={P.google.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gbp-action"
            onClick={() => trackLocationClick()}
          >
            <Navigation size={17} aria-hidden="true" />
            <span>Directions</span>
          </a>
          <a href={`tel:${P.contact.phone}`} className="gbp-action" onClick={() => trackPhoneClick('google-card')}>
            <Phone size={17} aria-hidden="true" />
            <span>Call</span>
          </a>
          <a
            href={whatsAppUrl('Hello Lado Rani Creation, I would like to discuss a digital textile printing requirement.')}
            target="_blank"
            rel="noopener noreferrer"
            className="gbp-action"
            onClick={() => trackWhatsAppClick('google-card')}
          >
            <MessageCircle size={17} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <a
            href={P.google.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gbp-action"
            onClick={() => trackLocationClick()}
          >
            <ExternalLink size={17} aria-hidden="true" />
            <span>Google reviews</span>
          </a>
        </div>
      </div>

      {showMap && (
        <div className="gbp-card-map">
          <iframe
            src={P.google.embedUrl}
            title={`${P.name} on Google Maps`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
