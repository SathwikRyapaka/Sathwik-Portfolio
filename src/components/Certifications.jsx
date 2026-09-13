import React, { useState } from 'react';
import { X, FileText, ExternalLink, Eye, Award } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Software Development', 'Programming Foundations', 'Data & AI Analytics'];
  const filtered = filter === 'All' ? certificationsData : certificationsData.filter(c => c.category === filter);

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-stone)' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-stone-md)', marginBottom: '2.5rem' }}>
          <div className="section-line-label">
            <span className="amber-line" />
            <span className="label-text">04 // CREDENTIALS &amp; ACCREDITATIONS</span>
          </div>
          <div className="certs-hdr" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 className="headline-lg reveal">Verified Certifications &amp; Credentials</h2>
            <p className="body-md reveal d1" style={{ maxWidth: '480px' }}>
              Government, academic, and industry accreditations verifying mastery in Java, Data Structures, Data Science, Deloitte Simulations, and AI Tools.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem', alignItems: 'center' }} className="reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: '600',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.04em',
                background: filter === cat ? 'var(--slate-950)' : '#FFFFFF',
                color: filter === cat ? '#FFFFFF' : 'var(--slate-600)',
                border: filter === cat ? '1px solid var(--slate-950)' : '1px solid var(--border-stone)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}
            >
              {cat}
            </button>
          ))}
          <span className="label-code" style={{ color: 'var(--slate-400)', fontSize: '0.7rem', marginLeft: '0.5rem' }}>
            {filtered.length} CREDENTIALS
          </span>
        </div>

        {/* 3-Column Card Grid (Matching Reference Layout) */}
        <div
          className="cert-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filtered.map((cert, ci) => (
            <div
              key={cert.id}
              className={`cert-card reveal d${(ci % 3) + 1}`}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--border-stone)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
              }}
              onClick={() => setSelected(cert)}
            >
              {/* Top Certificate Canvas / Document Preview Area */}
              <div
                style={{
                  height: '215px',
                  background: '#FBFBFB',
                  borderBottom: '1px solid var(--border-stone)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.85rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      borderRadius: '6px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
                      background: '#FFFFFF',
                      transition: 'transform 0.3s ease',
                    }}
                    className="cert-thumb-img"
                  />
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--slate-400)' }}>
                    <Award size={32} color="var(--amber-600)" />
                    <span className="label-code">Verified Document</span>
                  </div>
                )}

                {/* Score badge overlay if present */}
                {cert.score && (
                  <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2 }}>
                    <span
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'var(--amber-50)',
                        color: 'var(--amber-900)',
                        border: '1px solid var(--amber-300)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: '700',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                      }}
                    >
                      {cert.score}
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Card Content Info Box */}
              <div
                style={{
                  padding: '1.4rem 1.5rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Category / Type Label (like 'Internship', 'Training', 'Job Simulation' in reference) */}
                  <div
                    style={{
                      color: '#7E8B78',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: '500',
                      letterSpacing: '0.02em',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {cert.type || cert.category}
                  </div>

                  {/* Certification Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.08rem',
                      fontWeight: '700',
                      color: 'var(--slate-950)',
                      lineHeight: 1.3,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer Organization */}
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-500)', lineHeight: 1.45 }}>
                    {cert.issuer}
                  </div>
                </div>

                {/* Issue Date */}
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--slate-400)',
                    paddingTop: '0.65rem',
                    borderTop: '1px solid #F5F5F4',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{cert.date}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-body)',
                      fontWeight: '600',
                      color: 'var(--amber-700)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <Eye size={12} /> Preview
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Preview */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '780px' }}>
            <div className="modal-header">
              <div>
                <span className="chip chip-amber" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>
                  {selected.badge}
                </span>
                <h3 className="headline-md" style={{ marginBottom: '0.25rem' }}>{selected.title}</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--amber-800)', margin: 0 }}>
                  {selected.issuer}{selected.instructor ? ` · ${selected.instructor}` : ''}
                </p>
              </div>
              <button onClick={() => setSelected(null)} className="modal-close-btn" aria-label="Close">
                <X size={19} />
              </button>
            </div>

            <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', padding: '2rem' }}>
              {/* Certificate Image Canvas */}
              {selected.image && (
                <div
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-stone)',
                    boxShadow: 'var(--shadow-md)',
                    background: '#FAFAF9',
                  }}
                >
                  <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center', background: '#FFFFFF' }}>
                    <img
                      src={selected.image}
                      alt={`${selected.title} Certificate`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '440px',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: '0.65rem 1.25rem',
                      borderTop: '1px solid var(--border-stone)',
                      background: 'var(--bg-secondary)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.78rem',
                      color: 'var(--slate-500)',
                    }}
                  >
                    <span className="label-code">Official Verified Credential</span>
                    <a
                      href={selected.image}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: 'var(--amber-800)',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.78rem',
                      }}
                    >
                      Open full resolution <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              )}

              {/* Meta Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px,1fr))',
                  gap: '1rem',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-stone)',
                }}
              >
                {[
                  { label: 'ISSUE DATE', val: selected.date },
                  { label: 'DURATION', val: selected.duration },
                  ...(selected.score ? [{ label: 'SCORE / HONORS', val: selected.score, amber: true }] : []),
                  { label: 'CREDENTIAL ID', val: selected.credentialId, mono: true },
                ].map((item, ii) => (
                  <div key={ii}>
                    <div className="label-code" style={{ color: 'var(--slate-400)', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: item.mono ? '0.78rem' : '0.9rem',
                        fontWeight: '700',
                        color: item.amber ? 'var(--amber-800)' : 'var(--slate-900)',
                        fontFamily: item.mono ? 'var(--font-mono)' : 'var(--font-body)',
                        wordBreak: 'break-all',
                      }}
                    >
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div>
                <span className="label-code" style={{ color: 'var(--amber-800)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  CREDENTIAL CONTEXT
                </span>
                <p className="body-md" style={{ margin: 0 }}>
                  {selected.description}
                </p>
              </div>

              {/* Modal Actions */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-stone)',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {selected.pdfUrl && (
                    <a
                      href={selected.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-stone btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <FileText size={13} /> View / Download PDF
                    </a>
                  )}
                  {selected.verifyUrl && (
                    <a
                      href={selected.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-stone btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <ExternalLink size={13} /> Verify Online
                    </a>
                  )}
                </div>
                <button onClick={() => setSelected(null)} className="btn btn-dark btn-sm">
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.10) !important;
          border-color: var(--amber-300) !important;
        }
        .cert-card:hover .cert-thumb-img {
          transform: scale(1.02);
        }
        @media (min-width: 1024px) {
          .certs-hdr {
            flex-direction: row !important;
            align-items: flex-end !important;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}
