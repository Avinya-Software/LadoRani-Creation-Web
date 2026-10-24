import React from 'react';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20am%20visiting%20the%20Lado%20Rani%20Creation%20website%20and%20would%20like%20to%20discuss%20a%20printing%20requirement."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Lado Rani Creation on WhatsApp"
      title="Chat on WhatsApp (+91 70166 33928)"
    >
      <WhatsAppIcon size={22} fill="currentColor" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
