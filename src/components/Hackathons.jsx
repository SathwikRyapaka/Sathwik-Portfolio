import React, { useState } from 'react';
import { Trophy, Award, Calendar, Users, Building2, CheckCircle2, Eye, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { hackathonsData } from '../data/portfolioData';

export default function Hackathons() {
  const [activeImageModal, setActiveImageModal] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openLightbox = (hackathon, index) => {
    setActiveImageModal(hackathon);
    setCurrentImgIndex(index);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!activeImageModal) return;
    setCurrentImgIndex((prev) => (prev + 1) % activeImageModal.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!activeImageModal) return;
    setCurrentImgIndex((prev) => (prev - 1 + activeImageModal.images.length) % activeImageModal.images.length);
  };

  return (
    <section
      id="hackathons"
      className="section"
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid var(--border-stone)',
      }}
    >
      <div className="container">

        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-stone)',
            marginBottom: '3.5rem',
          }}
        >
          <div className="section-line-label">
            <span className="amber-line" />
            <span className="label-text">05 // HACKATHONS &amp; COMPETITIONS</span>
          </div>
          <div className="hackathon-hdr" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 className="headline-lg reveal">National Hackathon Wins &amp; Honours</h2>
            <p className="body-md reveal d1" style={{ maxWidth: '520px' }}>
              Competitive engineering hackathons, zero-to-one sprint prototypes, and industry-evaluated innovation challenges.
            </p>
          </div>
        </div>

        {/* Hackathons Showcase Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {hackathonsData.map((hackathon) => (
            <article
              key={hackathon.id}
              className="card-editorial reveal"
              style={{
                padding: '2.5rem',
                background: 'var(--bg-base)',
                border: '1px solid var(--border-stone)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
              }}
            >
              {/* Top Banner: Award Badge, Title & Key Metadata */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  paddingBottom: '2rem',
                  borderBottom: '1px solid var(--border-stone)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '780px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.65rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        background: 'var(--amber-100)',
                        color: 'var(--amber-900)',
                        border: '1px solid var(--amber-300)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        boxShadow: '0 1px 3px rgba(180, 83, 9, 0.1)',
                      }}
                    >
                      <Trophy size={14} color="var(--amber-700)" />
                      {hackathon.award}
                    </span>

                    <span className="chip chip-stone" style={{ fontSize: '0.725rem' }}>
                      {hackathon.track}
                    </span>

                    <span className="chip chip-stone" style={{ fontSize: '0.725rem' }}>
                      {hackathon.team}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: '800',
                      color: 'var(--slate-950)',
                      letterSpacing: '-0.02em',
                      margin: '0.25rem 0 0',
                    }}
                  >
                    {hackathon.title}
                  </h3>

                  <p className="body-md" style={{ margin: 0, color: 'var(--slate-600)' }}>
                    {hackathon.summary}
                  </p>
                </div>

                {/* Organizer & Date Meta Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    alignItems: 'flex-start',
                    background: '#FFFFFF',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-stone)',
                    minWidth: '260px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--slate-700)' }}>
                    <Building2 size={16} color="var(--amber-700)" />
                    <span style={{ fontWeight: '600' }}>{hackathon.partner}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--slate-700)' }}>
                    <Users size={16} color="var(--amber-700)" />
                    <span>{hackathon.organizer}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--slate-500)' }}>
                    <Calendar size={16} color="var(--slate-400)" />
                    <span>{hackathon.date} · {hackathon.duration}</span>
                  </div>
                </div>
              </div>

              {/* 3-Image Photo Showcase Grid */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="label-code" style={{ color: 'var(--amber-800)', textTransform: 'uppercase' }}>
                    EVENT GALLERY // 3 PHOTOGRAPHIC ARTIFACTS
                  </span>
                  <span className="label-code" style={{ color: 'var(--slate-400)', fontSize: '0.72rem' }}>
                    Click any photo to expand
                  </span>
                </div>

                <div
                  className="hackathon-gallery-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.25rem',
                  }}
                >
                  {hackathon.images.map((img, i) => (
                    <div
                      key={i}
                      className="gallery-item-card"
                      style={{
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        background: '#1C1917',
                        border: '1px solid var(--border-stone)',
                        boxShadow: 'var(--shadow-sm)',
                        cursor: 'pointer',
                        aspectRatio: '4 / 3',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                      }}
                      onClick={() => openLightbox(hackathon, i)}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        className="gallery-thumb-img"
                      />
                      {/* Gradient overlay for caption */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)',
                          zIndex: 1,
                        }}
                      />

                      {/* Caption & Expand pill */}
                      <div
                        style={{
                          position: 'relative',
                          zIndex: 2,
                          padding: '1rem 1.15rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.2rem',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: '700', color: '#FFFFFF' }}>
                            {img.title}
                          </span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                              padding: '0.2rem 0.5rem',
                              borderRadius: '4px',
                              background: 'rgba(255,255,255,0.2)',
                              backdropFilter: 'blur(4px)',
                              color: '#FFFFFF',
                              fontSize: '0.65rem',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            <Eye size={10} /> View
                          </span>
                        </div>
                        <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.35 }}>
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Description & Key Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid var(--border-stone)',
                }}
                className="hackathon-bottom-grid"
              >
                <div>
                  <span className="label-code" style={{ color: 'var(--amber-800)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    01 // SPRINT CONTEXT &amp; EXECUTION
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--slate-950)', marginBottom: '0.5rem' }}>
                    24-Hour Prototype Development
                  </h4>
                  <p className="body-md" style={{ margin: 0, lineHeight: 1.7 }}>
                    {hackathon.description}
                  </p>
                </div>

                <div>
                  <span className="label-code" style={{ color: 'var(--amber-800)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    02 // KEY ACHIEVEMENTS
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {hackathon.highlights.map((h, hi) => (
                      <div key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle2 size={16} color="var(--amber-600)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <span style={{ fontSize: '0.875rem', color: 'var(--slate-700)', lineHeight: 1.55 }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', paddingTop: '1rem', borderTop: '1px solid var(--border-stone)' }}>
                {hackathon.techStack.map((t, ti) => (
                  <span key={ti} className="chip chip-stone" style={{ fontSize: '0.75rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Hackathon Photos */}
      {activeImageModal && (
        <div className="modal-overlay" onClick={() => setActiveImageModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '960px',
              background: '#0F172A',
              color: '#FFFFFF',
              padding: '0',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.25rem 1.75rem',
                borderBottom: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div>
                <span className="label-code" style={{ color: '#F59E0B', fontSize: '0.72rem' }}>
                  {activeImageModal.title} · Photo {currentImgIndex + 1} of {activeImageModal.images.length}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', margin: '0.15rem 0 0' }}>
                  {activeImageModal.images[currentImgIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveImageModal(null)}
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem',
                }}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Image Display with Prev/Next Controls */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#020617',
                minHeight: '440px',
                maxHeight: '75vh',
                padding: '1rem',
              }}
            >
              <img
                src={activeImageModal.images[currentImgIndex].url}
                alt={activeImageModal.images[currentImgIndex].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '68vh',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '1.5rem',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '1.5rem',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Caption Footer */}
            <div
              style={{
                padding: '1.25rem 1.75rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                {activeImageModal.images[currentImgIndex].caption}
              </p>
              <a
                href={activeImageModal.images[currentImgIndex].url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#F59E0B',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  whiteSpace: 'nowrap',
                }}
              >
                Open Full Res <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item-card:hover .gallery-thumb-img {
          transform: scale(1.05);
        }
        @media (max-width: 900px) {
          .hackathon-gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .hackathon-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
