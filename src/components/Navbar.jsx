import React, { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: '01 About', href: '#about' },
    { label: '02 Skills', href: '#skills' },
    { label: '03 Projects', href: '#projects' },
    { label: '04 Contact', href: '#contact' },
  ];

  return (
    <header className="site-header" role="banner">
      <div className="container header-container">
        {/* Name on left */}
        <a href="#hero" className="header-brand">
          Jake J. Mathew
        </a>

        {/* Desktop plain text links */}
        <nav className="header-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-text-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile text toggle button */}
        <button
          type="button"
          className="mobile-menu-text-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      {/* Full-screen minimal mobile overlay */}
      {mobileOpen && (
        <div className="mobile-fullscreen-nav" role="dialog" aria-modal="true">
          <div className="mobile-fullscreen-header">
            <span className="header-brand">Jake J. Mathew</span>
            <button
              type="button"
              className="mobile-menu-text-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          <div className="mobile-fullscreen-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-large-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-fullscreen-footer">
            <p className="mono-text">Kanjirappally, Kottayam, Kerala</p>
            <p className="mono-text">jakejmathew11@gmail.com</p>
          </div>
        </div>
      )}
    </header>
  );
}
