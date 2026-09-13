import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: '#fff', borderBottom: '1px solid var(--border-stone)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-stone)', marginBottom: '3rem' }}>
          <div className="section-line-label">
            <span className="amber-line" />
            <span className="label-text">Experience &amp; Impact</span>
          </div>
          <div className="exp-hdr" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 className="headline-lg reveal">Industry Fellowships &amp; Engineering Practice</h2>
            <p className="body-md reveal d1" style={{ maxWidth: '460px' }}>
              Delivered production software, continuous integration pipelines, and cross-functional collaborative solutions in real-world team environments.
            </p>
          </div>
        </div>

        {/* Experience cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((item, idx) => (
            <article
              key={idx}
              className={`card-editorial reveal d${idx + 1}`}
              style={{ padding: '2rem 2.5rem', background: '#fff' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.75rem' }} className="exp-card-grid">
                {/* Left: meta */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                    <span style={{ padding: '0.2rem 0.65rem', borderRadius: '5px', background: 'var(--amber-50)', color: 'var(--amber-800)', border: '1px solid var(--amber-200)', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.type}</span>
                    <span className="label-code" style={{ color: 'var(--slate-400)', fontSize: '0.68rem' }}>{String(idx + 1).padStart(2,'0')} //</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--slate-950)', letterSpacing: '-0.015em', lineHeight: 1.25 }}>{item.role}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.25rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--amber-700)', fontSize: '0.9rem' }}>{item.company}</span>
                    <span className="label-code" style={{ color: 'var(--slate-500)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>📅 {item.period}</span>
                    <span className="label-code" style={{ color: 'var(--slate-500)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>📍 {item.location}</span>
                  </div>
                  <p className="body-md" style={{ marginTop: '0.25rem', lineHeight: 1.7 }}>{item.summary}</p>
                </div>

                {/* Right: bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.bullets.map((bullet, bi) => (
                    <div key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', paddingTop: bi === 0 ? '0.5rem' : 0, borderTop: bi === 0 ? '1px solid var(--border-stone)' : 'none' }}>
                      <CheckCircle2 size={14} color="var(--amber-600)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .exp-card-grid { grid-template-columns: 1fr 1.1fr !important; gap: 3rem !important; }
          .exp-hdr { flex-direction: row !important; align-items: flex-end !important; justify-content: space-between; }
        }
      `}</style>
    </section>
  );
}
