import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: '#fff', borderBottom: '1px solid var(--border-stone)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-stone)', marginBottom: '3rem' }}>
          <div className="section-line-label">
            <span className="amber-line" />
            <span className="label-text">Academic Background</span>
          </div>
          <h2 className="headline-lg reveal">Education &amp; Academic Achievements</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem' }}>
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`card-editorial reveal d${idx + 1}`}
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#fff' }}
            >
              {/* Top */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--amber-50)', border: '1px solid var(--amber-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--amber-700)' }}>
                  <GraduationCap size={20} />
                </div>
                <span className="label-code" style={{ color: 'var(--slate-400)', fontSize: '0.7rem' }}>{String(idx + 1).padStart(2,'0')} //</span>
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                <div>
                  <span style={{ padding: '0.2rem 0.65rem', borderRadius: '5px', background: 'var(--amber-50)', color: 'var(--amber-800)', border: '1px solid var(--amber-200)', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: '600', display: 'inline-block', marginBottom: '0.6rem' }}>{edu.type}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--slate-950)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{edu.degree}</h3>
                  <p style={{ fontWeight: '700', color: 'var(--amber-700)', fontSize: '0.9rem', marginTop: '0.2rem' }}>{edu.institution}</p>
                </div>

                <p className="body-md" style={{ lineHeight: 1.7 }}>{edu.description}</p>

                {/* Highlights */}
                {edu.highlights && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {edu.highlights.slice(0, 3).map((h, hi) => (
                      <div key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                        <span style={{ color: 'var(--amber-600)', fontSize: '0.75rem', marginTop: '0.2rem', flexShrink: 0 }}>▸</span>
                        <span style={{ fontSize: '0.8125rem', color: 'var(--slate-600)', lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-stone)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                  <div>
                    <div className="label-code" style={{ color: 'var(--slate-400)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Period</div>
                    <div style={{ fontWeight: '600', color: 'var(--slate-900)', fontSize: '0.875rem', marginTop: '0.1rem' }}>{edu.period}</div>
                  </div>
                  {edu.cgpa && (
                    <div>
                      <div className="label-code" style={{ color: 'var(--slate-400)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>CGPA</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: '800', color: 'var(--amber-700)', fontSize: '1.1rem', letterSpacing: '-0.02em', marginTop: '0.1rem' }}>{edu.cgpa}</div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="label-code" style={{ color: 'var(--slate-400)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Location</div>
                  <div style={{ fontWeight: '600', color: 'var(--slate-700)', fontSize: '0.8125rem', marginTop: '0.1rem' }}>{edu.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
