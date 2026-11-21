import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-grid">
        {/* Left-aligned hero text */}
        <div className="hero-text-block">
          <p className="hero-eyebrow mono-text">Portfolio / 2026</p>

          <h1 className="hero-headline serif-title">
            Jake J. Mathew
          </h1>

          <p className="hero-subhead">
            Web developer. Integrated MCA student, Amal Jyoti College of Engineering.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-rect btn-solid">
              See my work
            </a>
            <a href="#contact" className="btn-rect btn-outline">
              Email me
            </a>
          </div>

          <div className="hero-links-row">
            <span className="mono-text">Elsewhere:</span>
            <a
              href="https://github.com/Jakejmathewrock"
              target="_blank"
              rel="noreferrer"
              className="text-draw-link"
            >
              GitHub
            </a>
            <span className="sep">/</span>
            <a
              href="https://www.linkedin.com/in/jake-j-mathew-00280732a/"
              target="_blank"
              rel="noreferrer"
              className="text-draw-link"
            >
              LinkedIn
            </a>
            <span className="sep">/</span>
            <a
              href="https://www.instagram.com/jake_panthiruvelil_?igsh=MXB5MHJrcHhydHNyeg=="
              target="_blank"
              rel="noreferrer"
              className="text-draw-link"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Right side: Real photo as a pinned print rotated -2deg */}
        <div className="hero-photo-wrap">
          <div className="pinned-print">
            <img
              src="/jake.jpg"
              alt="Jake J. Mathew"
              className="pinned-photo-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
