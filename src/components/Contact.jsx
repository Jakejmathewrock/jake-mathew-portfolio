import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const [ref, isRevealed] = useIntersectionObserver({ threshold: 0.15 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'sent' | 'error'

  const email = 'jakejmathew11@gmail.com';
  const phone = '+91 9778489112';
  const displayPhone = '+91 97784 89112';
  const location = 'Kanjirappally, Kottayam, Kerala';
  const whatsappUrl = 'https://wa.me/919778489112';

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      await fetch('https://formspree.io/f/mqaeovgq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section-block" aria-label="Contact">
      <div
        ref={ref}
        className={`container reveal-item ${isRevealed ? 'is-visible' : ''}`}
      >
        <div className="section-title-line">
          <span className="mono-label">04 Contact</span>
        </div>

        <div className="contact-editorial-layout">
          {/* Left Column: Big serif line, email link, details */}
          <div className="contact-details-col">
            <h2 className="contact-serif-heading">
              Want to work together? <br />
              <a href={`mailto:${email}`} className="email-giant-link">
                Email me.
              </a>
            </h2>

            <div className="contact-meta-list mono-text">
              <div className="meta-row">
                <span className="meta-key">Email:</span>
                <a href={`mailto:${email}`} className="meta-val-link">
                  {email}
                </a>
              </div>

              <div className="meta-row">
                <span className="meta-key">Phone:</span>
                <a href={`tel:${phone}`} className="meta-val-link">
                  {displayPhone}
                </a>
              </div>

              <div className="meta-row">
                <span className="meta-key">WhatsApp:</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="meta-val-link"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>

              <div className="meta-row">
                <span className="meta-key">Location:</span>
                <span className="meta-val">{location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Underline-style form */}
          <div className="contact-form-col">
            {status === 'sent' ? (
              <div className="form-feedback-sent">
                <p className="sent-serif-title">Message sent.</p>
                <p className="mono-text">Thank you. I will write back soon.</p>
                <button
                  type="button"
                  className="btn-rect btn-outline btn-reset"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="underline-form" noValidate>
                {status === 'error' && (
                  <p className="form-error-line mono-text">
                    Please fill out all fields before sending.
                  </p>
                )}

                <div className="underline-field">
                  <label htmlFor="name" className="field-label-mono mono-text">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="underline-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="underline-field">
                  <label htmlFor="email" className="field-label-mono mono-text">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="underline-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="underline-field">
                  <label htmlFor="message" className="field-label-mono mono-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className="underline-input underline-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write a note..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-rect btn-solid form-btn-submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
