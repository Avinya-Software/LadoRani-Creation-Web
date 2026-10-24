import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocialBar from './components/FloatingSocialBar';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SuratPrintingUnitPage from './pages/SuratPrintingUnitPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

import { initAnalytics, trackPageView } from './utils/analytics';

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);

  return null;
}

/** Router-agnostic app shell: BrowserRouter wraps it in main.jsx, StaticRouter in entry-server.jsx. */
export default function App() {
  const [theme, setTheme] = useState('light');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Initialize theme and Google Analytics
  useEffect(() => {
    const savedTheme = localStorage.getItem('lado_rani_theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    initAnalytics();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('lado_rani_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <>
      <ScrollToTop />
      <RouteTracker />
      <div className="app-wrapper">
        {/* Floating Pill Navbar with symmetric padding and active routes */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenQuoteModal={() => setQuoteModalOpen(true)} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenQuoteModal={() => setQuoteModalOpen(true)} />}
            />
            <Route
              path="/industries"
              element={<IndustriesPage onOpenQuoteModal={() => setQuoteModalOpen(true)} />}
            />
            <Route
              path="/process"
              element={<ProcessPage onOpenQuoteModal={() => setQuoteModalOpen(true)} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuoteModal={() => setQuoteModalOpen(true)} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="/digital-textile-printing-surat"
              element={<SuratPrintingUnitPage onOpenQuoteModal={() => setQuoteModalOpen(true)} />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>

        {/* Global Site Footer */}
        <Footer />

        {/* Floating Social Media Dock at Bottom Right */}
        <FloatingSocialBar />

        {/* Fast Quote Popup Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
        />
      </div>
    </>
  );
}
