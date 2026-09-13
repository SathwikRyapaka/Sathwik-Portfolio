import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-stone)', padding: '4rem 0 2.5rem' }}>
      <div className="container">

        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border-stone)',
          }}
        >

          {/* Brand & Monograph Title */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--slate-950)',
                }}
              >
                SATHWIK RYAPAKA
              </span>
              <span style={{ color: 'var(--amber-600)', fontWeight: '800', fontSize: '1.25rem' }}>.</span>
            </div>
            <p className="body-sm" style={{ lineHeight: 1.7 }}>
              Undergraduate Engineer at BVRIT · Full-Stack &amp; Software Fellow at Mitt Arv · Specializing in scalable web architecture, DevOps automation pipelines, and data systems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div>
            <div className="label-code" style={{ color: 'var(--amber-800)', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
              INDEX DIRECTORY
            </div>
            <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.75rem', fontSize: '0.8125rem' }}>
              {['About', 'Skills', 'Projects', 'Experience', 'Hackathons', 'Certifications', 'Education', 'Contact'].map((name) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  style={{ color: 'var(--slate-600)', transition: 'color var(--transition-sm)', fontWeight: '500' }}
                  className="footer-link"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {[
              { href: personalInfo.github, icon: <GithubIcon size={16} />, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: <LinkedinIcon size={16} />, label: 'LinkedIn' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: '#fff',
                  border: '1px solid var(--border-stone)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--slate-700)',
                  transition: 'all var(--transition-sm)',
                }}
                className="social-btn"
              >
                {s.icon}
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--slate-900)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all var(--transition-sm)',
              }}
              title="Return to top"
              className="scroll-top-btn"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'var(--slate-400)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span>© {new Date().getFullYear()} SATHWIK RYAPAKA // ALL RIGHTS RESERVED</span>
          <span>BVRIT CSE (DATA SCIENCE) · TELANGANA, INDIA</span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--amber-700) !important; }
        .social-btn:hover { border-color: var(--amber-400) !important; color: var(--amber-700) !important; transform: translateY(-2px); }
        .scroll-top-btn:hover { background: var(--amber-600) !important; transform: translateY(-2px); }
      `}</style>
    </footer>
  );
}
