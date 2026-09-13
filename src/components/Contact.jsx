import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ showToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const copy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      showToast('Email address copied to clipboard');
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      showToast('Phone number copied to clipboard');
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast('Please fill all required fields');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      showToast('Message transmitted! I will respond promptly.');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const directChannels = [
    {
      icon: <Mail size={18} />,
      label: 'EMAIL INQUIRY',
      value: personalInfo.email,
      action: (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => copy(personalInfo.email, 'email')}
            className="btn btn-stone btn-sm"
            style={{ fontSize: '0.6875rem' }}
          >
            {copiedEmail ? <Check size={12} color="var(--amber-700)" /> : <Copy size={12} />}
            {copiedEmail ? 'Copied' : 'Copy'}
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn-dark btn-sm"
            style={{ fontSize: '0.6875rem', padding: '0 0.75rem' }}
          >
            <Send size={12} />
          </a>
        </div>
      ),
    },
    {
      icon: <Phone size={18} />,
      label: 'DIRECT PHONE',
      value: personalInfo.phone,
      action: (
        <button
          onClick={() => copy(personalInfo.phone, 'phone')}
          className="btn btn-stone btn-sm"
          style={{ fontSize: '0.6875rem' }}
        >
          {copiedPhone ? <Check size={12} color="var(--amber-700)" /> : <Copy size={12} />}
          {copiedPhone ? 'Copied' : 'Copy'}
        </button>
      ),
    },
    {
      icon: <MapPin size={18} />,
      label: 'LOCATION BASE',
      value: personalInfo.location,
      action: null,
    },
  ];

  return (
    <section id="contact" className="section" style={{ background: '#fff' }}>
      <div className="container">

        {/* Section Header */}
        <div className="reveal" style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div className="section-line-label">
            <span className="amber-line"></span>
            <span className="label-text">06 // INQUIRIES &amp; COLLABORATION</span>
          </div>
          <h2 className="headline-lg" style={{ marginBottom: '1rem' }}>
            Initiate a Dialogue.
          </h2>
          <p className="body-lg">
            Whether you are evaluating candidates for software engineering roles, full-stack development, or exploring technical collaboration, my inbox is open.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct channels & Social Links */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span className="label-code" style={{ color: 'var(--amber-800)', textTransform: 'uppercase', marginBottom: '0.35rem', display: 'block' }}>
                DIRECT CHANNELS
              </span>
              <h3 className="headline-sm" style={{ marginBottom: '0.5rem' }}>
                Reach Out Directly
              </h3>
              <p className="body-sm" style={{ marginBottom: '1.25rem' }}>
                Expect a response within 24 hours for engineering recruitment and technical discussions.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {directChannels.map((c, i) => (
                <div
                  key={i}
                  className="card-editorial"
                  style={{
                    padding: '1.15rem 1.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--amber-50)',
                        border: '1px solid var(--amber-200)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--amber-800)',
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div className="label-caps" style={{ color: 'var(--slate-400)', fontSize: '0.625rem', marginBottom: '0.15rem' }}>
                        {c.label}
                      </div>
                      <div style={{ fontWeight: '600', color: 'var(--slate-900)', fontSize: '0.9rem' }}>
                        {c.value}
                      </div>
                    </div>
                  </div>
                  {c.action && <div style={{ flexShrink: 0 }}>{c.action}</div>}
                </div>
              ))}
            </div>

            {/* Social profiles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light"
                style={{ justifyContent: 'center' }}
              >
                <GithubIcon size={14} /> GitHub Profile
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light"
                style={{ justifyContent: 'center' }}
              >
                <LinkedinIcon size={14} /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div
            className="card-editorial reveal-right"
            style={{
              padding: '2.25rem',
              background: 'var(--bg-base)',
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="label-code" style={{ color: 'var(--amber-800)', textTransform: 'uppercase', marginBottom: '0.35rem', display: 'block' }}>
                DIRECT MESSAGE TRANSMISSION
              </span>
              <h3 className="headline-sm" style={{ marginBottom: '0.3rem' }}>
                Send a Message
              </h3>
              <p className="body-sm">
                Fill out the transmission form below to dispatch an inquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label className="label-caps" style={{ color: 'var(--slate-600)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label className="label-caps" style={{ color: 'var(--slate-600)' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@organization.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label className="label-caps" style={{ color: 'var(--slate-600)' }}>
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Software Engineering Opportunity / Collaboration"
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label className="label-caps" style={{ color: 'var(--slate-600)' }}>
                  Message Content *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-dark"
                style={{
                  width: '100%',
                  marginTop: '0.25rem',
                  opacity: submitting ? 0.7 : 1,
                  background: 'var(--slate-950)',
                }}
              >
                <Send size={13} />
                {submitting ? 'Transmitting...' : 'Dispatch Message'}
              </button>
            </form>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 920px) {
          .contact-grid { grid-template-columns: 1fr 1.15fr !important; }
        }
        @media (max-width: 580px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
