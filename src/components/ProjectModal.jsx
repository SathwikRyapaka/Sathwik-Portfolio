import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>

        {/* Header */}
        <div className="modal-header" style={{ background: 'var(--bg-base)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="chip chip-amber" style={{ fontSize: '0.6875rem' }}>{project.category}</span>
              {project.badge && (
                <span className="chip chip-stone" style={{ fontSize: '0.6875rem' }}>{project.badge}</span>
              )}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800', color: 'var(--slate-950)', letterSpacing: '-0.03em', margin: '0 0 0.25rem' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', margin: 0 }}>{project.tagline}</p>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', padding: '2rem' }}>

          {/* Screenshot / Dashboard preview */}
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-stone)',
              boxShadow: 'var(--shadow-md)',
              background: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '460px',
                objectFit: 'contain',
                borderRadius: '6px',
              }}
            />
          </div>

          {/* Metrics Ribbon */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
              gap: '1px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-stone)',
              overflow: 'hidden',
              background: 'var(--border-stone)',
            }}
          >
            {project.metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: '1rem 1.25rem',
                  background: '#fff',
                }}
              >
                <div className="label-code" style={{ color: 'var(--amber-800)', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  {m.label}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '700', color: 'var(--slate-950)' }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Overview */}
          <div>
            <span className="label-code" style={{ color: 'var(--amber-800)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              01 // ARCHITECTURAL CONTEXT
            </span>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--slate-950)', marginBottom: '0.5rem' }}>
              System Overview &amp; Implementation
            </h4>
            <p className="body-md" style={{ margin: 0 }}>
              {project.description}
            </p>
          </div>

          {/* Engineering Highlights */}
          <div>
            <span className="label-code" style={{ color: 'var(--amber-800)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              02 // KEY DELIVERABLES
            </span>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--slate-950)', marginBottom: '0.75rem' }}>
              Technical Milestones &amp; Capabilities
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {project.highlights.map((h, hi) => (
                <div key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} color="var(--amber-600)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                  <span className="body-md" style={{ fontSize: '0.9rem' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <span className="label-code" style={{ color: 'var(--amber-800)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              03 // TECHNOLOGY ARTIFACTS
            </span>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--slate-950)', marginBottom: '0.6rem' }}>
              Frameworks &amp; Tooling
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.techStack.map((t, ti) => (
                <span
                  key={ti}
                  className="chip chip-stone"
                  style={{ fontSize: '0.8125rem', padding: '0.35rem 0.75rem' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-stone)',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
                style={{ fontSize: '0.6875rem' }}
              >
                <GithubIcon size={14} /> Repository Code <ArrowUpRight size={13} />
              </a>
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                  style={{ fontSize: '0.6875rem' }}
                >
                  Live Deployment <ArrowUpRight size={13} />
                </a>
              )}
            </div>
            <button onClick={onClose} className="btn btn-stone btn-sm">
              Close Project Preview
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
