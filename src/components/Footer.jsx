import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-row">
        <span className="mono-text">&copy; 2026 Jake J. Mathew</span>
        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top-text mono-text"
          aria-label="Back to top"
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}
