import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/aeo';

/**
 * Visible FAQ accordion. Pass the same `faqs` array to <SEO faqs={...} /> so the
 * FAQPage schema always matches the questions shown on the page.
 * Answers stay in the HTML when collapsed, so crawlers can read them.
 */
export default function FaqSection({
  faqs = FAQS.home,
  title = 'Frequently Asked Questions',
  subtitle = 'Direct, plain-language answers about digital textile printing and job work in Surat.',
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section section-tight" style={{ background: 'var(--bg-surface)' }} aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header reveal-fade-up is-revealed">
          <h2 id="faq-heading" className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`faq-item ${isOpen ? 'active' : ''} reveal-fade-up is-revealed`}
              >
                <h3 className="faq-question-heading">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="faq-question-btn"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className="faq-icon" />
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
