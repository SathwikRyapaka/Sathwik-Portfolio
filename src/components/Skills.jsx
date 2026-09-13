import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{
        background: 'var(--bg-base)',
        borderBottom: '1px solid var(--border-stone)',
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
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
            <span className="label-text">03 // TECHNICAL COMPETENCIES</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="skills-hdr">
            <h2 className="headline-lg reveal">Skills &amp; Technologies</h2>
            <p className="body-md reveal d1" style={{ maxWidth: '520px' }}>
              Core programming languages, computational tools, full-stack frameworks, databases, and AI libraries applied across my projects and certifications.
            </p>
          </div>
        </div>

        {/* Skills Multi-Column Categories (Matching Reference Layout) */}
        <div
          className="skills-cluster-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '3rem 2rem',
            alignItems: 'start',
          }}
        >
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className={`skills-group reveal d${(idx % 4) + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                gridColumn: idx >= 4 ? 'span 2' : 'span 1',
              }}
            >
              {/* Category Heading (Italicized Serif / Display styling matching reference image) */}
              <h3
                style={{
                  fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif',
                  fontStyle: 'italic',
                  fontWeight: '600',
                  fontSize: '1.45rem',
                  letterSpacing: '-0.01em',
                  color: '#284B3D',
                  margin: 0,
                }}
              >
                {group.title}
              </h3>

              {/* Badges / Pill Tiles cluster */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.55rem',
                }}
              >
                {group.skills.map((skillName, sIdx) => (
                  <span
                    key={sIdx}
                    className="skill-pill-tag"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.45rem 0.85rem',
                      background: '#FFFFFF',
                      border: '1px solid #E5E5E3',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      color: 'var(--slate-800)',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
                      transition: 'all 0.18s ease',
                      cursor: 'default',
                      userSelect: 'none',
                    }}
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .skill-pill-tag:hover {
          border-color: var(--amber-400) !important;
          background: #FAF9F6 !important;
          color: var(--slate-950) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06) !important;
        }

        @media (max-width: 1024px) {
          .skills-cluster-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem 1.75rem !important;
          }
          .skills-group {
            grid-column: span 1 !important;
          }
        }

        @media (max-width: 600px) {
          .skills-cluster-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
