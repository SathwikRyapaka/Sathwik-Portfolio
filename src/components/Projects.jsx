import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-base)', borderBottom: '1px solid var(--border-stone)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-stone)', marginBottom: '4rem' }}>
          <div className="section-line-label">
            <span className="amber-line" />
            <span className="label-text">02 // FEATURED PROJECTS</span>
          </div>
          <div className="proj-hdr" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 className="headline-lg reveal">Featured Projects &amp; Platforms</h2>
            <p className="body-md reveal d1" style={{ maxWidth: '520px' }}>
              A selection of full-stack web applications, automated DevOps pipelines, and AI-driven platforms built during my coursework, fellowships, and independent builds.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {projectsData.map((project, idx) => {
            const even = idx % 2 === 0;
            return (
              <article
                key={project.id}
                className="card-editorial proj-card"
                style={{ overflow: 'hidden' }}
              >
                <div className="proj-inner" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>

                  {/* Image showcase container with framed containment (no excessive zoom) */}
                  <div
                    className={`proj-image ${even ? 'order-first' : 'order-second'} reveal ${even ? 'reveal-left' : 'reveal-right'}`}
                    style={{
                      position: 'relative',
                      background: 'linear-gradient(145deg, #1C1917 0%, #0F172A 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2rem 1.5rem',
                      order: even ? 1 : 2,
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelected(project)}
                  >
                    {/* Subtle inner grid pattern */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                        pointerEvents: 'none',
                        opacity: 0.7,
                      }}
                    />

                    {/* Deck badge top-left */}
                    <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', zIndex: 2 }}>
                      <span
                        style={{
                          padding: '0.4rem 0.85rem',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.94)',
                          backdropFilter: 'blur(8px)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: '600',
                          color: 'var(--slate-950)',
                          border: '1px solid rgba(255,255,255,0.6)',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                        }}
                      >
                        DECK {String(idx + 1).padStart(2, '0')} // {project.badge.toUpperCase()}
                      </span>
                    </div>

                    {/* Zoom preview hint bottom-right */}
                    <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', zIndex: 2 }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '9999px',
                          background: 'rgba(0,0,0,0.65)',
                          backdropFilter: 'blur(6px)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: '500',
                          color: '#FFFFFF',
                          border: '1px solid rgba(255,255,255,0.15)',
                        }}
                      >
                        <Eye size={12} color="#F59E0B" /> Click to Expand
                      </span>
                    </div>

                    {/* Project Screenshot framed cleanly without excessive zoom / clipping */}
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '100%',
                        maxWidth: '560px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.12)',
                        background: '#0F172A',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxHeight: '420px',
                          objectFit: 'contain',
                          display: 'block',
                          transition: 'transform 0.5s ease',
                        }}
                        className="proj-img"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`proj-content reveal ${even ? 'reveal-right' : 'reveal-left'} d2`}
                    style={{
                      padding: '2.5rem 2.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1.75rem',
                      order: even ? 2 : 1,
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {/* Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        <span className="chip-stone" style={{ fontSize: '0.72rem', textTransform: 'uppercase' }}>{project.category}</span>
                        <span className="chip-amber" style={{ fontSize: '0.72rem', textTransform: 'uppercase' }}>2024–25</span>
                      </div>

                      {/* Title + tagline */}
                      <div>
                        <h3 className="headline-md" style={{ marginBottom: '0.35rem' }}>{project.title}</h3>
                        <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--amber-800)', fontFamily: 'var(--font-body)' }}>{project.tagline}</p>
                      </div>

                      <p className="body-md">{project.summary}</p>

                      {/* Metrics */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px,1fr))', gap: '0.75rem' }}>
                        {project.metrics.slice(0, 2).map((m, mi) => (
                          <div key={mi} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-stone)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem' }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--amber-800)', letterSpacing: '-0.02em' }}>{m.value}</div>
                            <div className="label-code" style={{ color: 'var(--slate-500)', fontSize: '0.68rem', marginTop: '0.2rem' }}>{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {project.highlights.slice(0, 3).map((h, hi) => (
                          <div key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <CheckCircle2 size={15} color="var(--amber-600)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                            <span style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.5 }}>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech chips */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {project.techStack.map((t, ti) => (
                          <span key={ti} className="chip" style={{ fontSize: '0.72rem' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-stone)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        onClick={() => setSelected(project)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--slate-900)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.72rem',
                          fontWeight: '600',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'color 0.15s ease',
                          paddingBottom: '2px',
                          borderBottom: '2px solid var(--slate-900)',
                        }}
                        className="case-study-link"
                      >
                        View Project Details <ArrowUpRight size={13} />
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: 'var(--slate-500)',
                          fontSize: '0.8125rem',
                          transition: 'color 0.15s ease',
                        }}
                        className="github-link"
                      >
                        <GithubIcon size={14} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      <style>{`
        @media (min-width: 1024px) {
          .proj-inner { grid-template-columns: 1.15fr 1fr !important; min-height: 520px !important; }
          .proj-image { min-height: 100% !important; }
          .proj-content { padding: 3rem !important; }
          .proj-hdr { flex-direction: row !important; align-items: flex-end !important; justify-content: space-between; }
        }
        @media (max-width: 768px) {
          .proj-content { padding: 1.75rem 1.25rem !important; }
          .proj-image { padding: 1.25rem 1rem !important; min-height: 240px !important; }
        }
        .proj-card:hover .proj-img { transform: scale(1.02) !important; }
        .case-study-link:hover { color: var(--amber-700) !important; border-bottom-color: var(--amber-700) !important; }
        .github-link:hover { color: var(--amber-700) !important; }
      `}</style>
    </section>
  );
}
