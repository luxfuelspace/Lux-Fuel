'use client';

import { useState, useEffect, useRef } from 'react';

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setStatus('idle'), 300);
  };

  return (
    <>
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="24s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="50" r="32" fill="none" stroke="#e63946" strokeWidth="1.5" strokeDasharray="4 4">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="16s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#ffffff" strokeWidth="2"/>
                  <g>
                    <circle cx="50" cy="6" r="3.5" fill="#e63946"/>
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite" />
                  </g>
                  <g>
                    <circle cx="82" cy="50" r="2.5" fill="#3a8fd9"/>
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="12s" repeatCount="indefinite" />
                  </g>
                </svg>
              </div>
              <span>LuxFuel</span>
            </div>
            <p className="footer-tag">We authenticate the transactions that make in-orbit refueling possible.</p>
          </div>
          <div className="footer-contact">
            <span className="contact-label mono">Get in touch</span>
            <button className="contact-link" onClick={() => setOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="m3 7 9 6 9-6"/>
              </svg>
              <span>Contact Us</span>
            </button>
            <div className="footer-meta mono">
              <span>LuxFuel</span>
              <span>Albuquerque · NM</span>
              <span>Founded 2026</span>
            </div>
          </div>
        </div>
      </footer>

      {open && (
        <div className="contact-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
          <div className="contact-modal" ref={dialogRef} role="dialog" aria-modal="true" aria-label="Contact Us">
            <div className="contact-modal-header">
              <div>
                <p className="contact-modal-eyebrow mono">Get in touch</p>
                <h2 className="contact-modal-title">Contact Us</h2>
              </div>
              <button className="contact-modal-close" onClick={handleClose} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {status === 'sent' ? (
              <div className="contact-modal-success">
                <div className="contact-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <p className="contact-success-title">Message received</p>
                <p className="contact-success-sub">We'll be in touch shortly.</p>
                <button className="contact-modal-close-btn" onClick={handleClose}>Close</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-field-label mono" htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name"
                      className="contact-field-input"
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-field-label mono" htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      className="contact-field-input"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-field-label mono" htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    className="contact-field-input contact-field-textarea"
                    placeholder="Tell us about your mission..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <button className="contact-submit" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <span className="contact-submit-inner">
                      <span className="contact-spinner" />
                      Sending…
                    </span>
                  ) : (
                    <span className="contact-submit-inner">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="m22 2-7 20-4-9-9-4 20-7z"/>
                        <path d="M22 2 11 13"/>
                      </svg>
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
