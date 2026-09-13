import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const pillars = [
  {
    num: '01 // FULL-STACK',
    title: 'End-to-End Web Engineering',
    desc: 'Architecting production-grade React.js frontends and Node.js/Express backends with secure JWT auth, RESTful APIs, and PostgreSQL/MongoDB persistence layers.',
    tags: ['React.js', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    num: '02 // DEVOPS',
    title: 'Automated CI/CD & Cloud Reliability',
    desc: 'Containerising multi-service applications with Docker Compose, routing via Nginx reverse proxy, and automating Jenkins pipelines with full Jest & Supertest test coverage.',
    tags: ['Jenkins CI/CD', 'Docker', 'Nginx', 'Jest & Supertest'],
  },
  {
    num: '03 // DATA & AI',
    title: 'GIS Analytics & AI Modelling',
    desc: 'Building Python GIS geospatial pipelines for flood risk intelligence, AI-powered PowerBI dashboards, and predictive ML models for stress/mental health analytics.',
    tags: ['Python & GIS', 'AI/ML Models', 'PowerBI', 'Risk Analytics'],
  },
  {
    num: '04 // LEADERSHIP',
    title: 'Collaborative Engineering Practice',
    desc: "Completed Mitt Arv Technologies' 2-month Utpatti Full-Stack Fellowship — agile sprint delivery, cross-functional collaboration, and production deployment of real-world projects.",
    tags: ['Agile Sprints', 'Full-Stack Deploy', 'Testing', 'Utpatti Fellow'],
  },
];

const highlights = [
  'NPTEL Java Elite — 77% Score',
  'Cisco C Programming Certified',
  'AI-Powered PowerBI Certified',
  '100% Jest Test Coverage on Pathshala',
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: '#fff', borderBottom: '1px solid var(--border-stone)' }}>
      <div className="container">

        {/* Section header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '3.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-stone)' }}>
          <div className="section-line-label">
            <span className="amber-line" />
            <span className="label-text">01 // ABOUT &amp; PRACTICE</span>
          </div>
          <div className="about-hdr-row" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 className="headline-lg reveal">Engineering Platforms That Solve Real-World Problems</h2>
            <p className="body-md reveal d1" style={{ maxWidth: '520px' }}>
              Bridging rigorous backend engineering with intuitive interfaces, automated DevOps, and data intelligence solutions across legal access, education, mental health, and disaster resilience domains.
            </p>
          </div>
        </div>

        {/* Narrative */}
        <div className="about-two-col reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: '700', lineHeight: '1.25', letterSpacing: '-0.025em', color: 'var(--slate-950)' }}>
              Passionate about building impactful software that solves genuine societal &amp; operational problems.
            </h3>
            <p className="body-lg">
              I'm pursuing my <strong style={{ color: 'var(--slate-900)' }}>B.Tech in Computer Science (Data Science)</strong> at{' '}
              <strong style={{ color: 'var(--slate-900)' }}>B V Raju Institute of Technology (BVRIT)</strong> with an{' '}
              <strong style={{ color: 'var(--slate-900)' }}>8.77 CGPA</strong>. Alongside academics, I completed an intensive{' '}
              <strong style={{ color: 'var(--slate-900)' }}>2-month Full-Stack &amp; Software Engineering fellowship at Utpatti (Mitt Arv Technologies)</strong>,
              gaining hands-on expertise in React.js, Express.js, database connectivity, testing, and deployment.
            </p>
            <p className="body-lg">
              My project portfolio spans legal accessibility platforms (<strong style={{ color: 'var(--slate-900)' }}>Nyaya Setu</strong>), end-to-end cloud DevOps pipelines
              (<strong style={{ color: 'var(--slate-900)' }}>Pathshala</strong>), GIS flood risk analytics (<strong style={{ color: 'var(--slate-900)' }}>SURAKSHA</strong>), and predictive
              mental health web platforms (<strong style={{ color: 'var(--slate-900)' }}>Equilibria</strong>).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px,1fr))', gap: '0.65rem', paddingTop: '0.5rem' }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--amber-600)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--slate-800)' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem' }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`card-editorial reveal d${i + 1}`}
              style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem', transition: 'border-color 0.2s ease, box-shadow 0.2s ease' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="label-code" style={{ color: 'var(--amber-800)', fontWeight: '600' }}>{p.num}</span>
                </div>
                <h4 className="headline-sm">{p.title}</h4>
                <p className="body-md">{p.desc}</p>
              </div>
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-stone)', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span className="ping-wrap" style={{ marginRight: '0.5rem', alignSelf: 'center' }}><span className="ping-core" /></span>
                {p.tags.map((tag, ti) => (
                  <span key={ti} className="label-code" style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>{tag}{ti < p.tags.length - 1 ? ' ·' : ''}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-two-col { grid-template-columns: 1fr !important; }
          .about-hdr-row { flex-direction: row !important; align-items: flex-end !important; justify-content: space-between; }
        }
        .card-editorial:hover { border-color: rgba(217,119,6,0.4) !important; }
      `}</style>
    </section>
  );
}
