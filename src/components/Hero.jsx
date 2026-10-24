import React, { useEffect, useRef } from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function Hero({ onOpenQuoteModal, onExploreServices }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback for browser autoplay policies
      });
    }
  }, []);

  return (
    <>
      <section id="hero" className="hero-section">
        {/* Real Industrial Printing Video Background */}
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero/hero_machine_poster.webp"
            aria-label="Lado Rani Creation industrial digital textile printing machine in operation"
          >
            <source src="/images/hero/Hero_video.mp4" type="video/mp4" />
          </video>
          {/* Clean Neutral Contrast Overlay - Zero Blue Tint, Crystal Clear Video */}
          <div className="hero-overlay"></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="hero-content reveal-fade-up is-revealed">
            {/* Trust Location Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <MapPin size={15} style={{ color: 'var(--gold-400)' }} />
              <span>Surat, Gujarat • Industrial Job Work Facility</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="hero-title">
              Digital Textile Printing & <span className="text-gold">Textile Job Work</span> in Surat
            </h1>

            {/* Supporting Copy */}
            <p className="hero-subtitle">
              Precision printing job-work support for textile manufacturers, fabric traders, garment businesses, and independent designers.
            </p>

            {/* CTAs Group */}
            <div className="hero-cta-group">
              <button
                onClick={onOpenQuoteModal}
                className="btn btn-primary btn-lg"
                aria-label="Get a Printing Quote"
              >
                <span>Get a Printing Quote</span>
                <ArrowRight size={19} />
              </button>

              {/* Direct WhatsApp Contact */}
              <a
                href="https://wa.me/917016633928?text=Hello%20Lado%20Rani%20Creation,%20I%20would%20like%20to%20discuss%20a%20digital%20textile%20printing%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                aria-label="Chat with Lado Rani Creation on WhatsApp"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quick Value Strip (Supportable Facts Only) */}
      <section className="trust-strip" aria-label="Core Capabilities">
        <div className="container">
          <div className="trust-strip-inner">
            <div className="trust-item">
              <div className="trust-icon-box">
                <Sparkles />
              </div>
              <div>
                <div className="trust-text-title">Digital Textile Printing</div>
                <div className="trust-text-desc">High-density precision printing</div>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <CheckCircle2 />
              </div>
              <div>
                <div className="trust-text-title">Custom Design Printing</div>
                <div className="trust-text-desc">Customer artwork & repeats</div>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <ShieldCheck />
              </div>
              <div>
                <div className="trust-text-title">Textile Job Work</div>
                <div className="trust-text-desc">For manufacturers & traders</div>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <MapPin />
              </div>
              <div>
                <div className="trust-text-title">Surat, Gujarat</div>
                <div className="trust-text-desc">Jay Industrial Estate, Anjana</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
