import React from 'react';
import { InstagramIcon } from './SocialIcons';

export default function FloatingSocialBar() {
  return (
    <aside className="floating-social-dock" aria-label="Social Media Link">
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/lado.ranicreation/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-social-btn instagram"
        aria-label="Follow Lado Rani Creation on Instagram"
        title="Instagram (@lado.ranicreation)"
      >
        <span className="floating-social-icon">
          <InstagramIcon size={24} color="currentColor" />
        </span>
        <span className="floating-social-tooltip">Instagram</span>
      </a>
    </aside>
  );
}
