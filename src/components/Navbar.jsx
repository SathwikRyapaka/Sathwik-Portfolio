import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const ids = ['hero', 'about', 'skills', 'projects', 'experience', 'hackathons', 'certifications', 'education', 'contact'];
      const y = window.scrollY + 120;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          background: 'rgba(250,250,249,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid #E7E5E4' : '1px solid transparent',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            height: '76px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Brand */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--slate-900)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FCD34D',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                fontSize: '0.85rem',
                boxShadow: 'var(--shadow-sm)',
                letterSpacing: '-0.01em',
              }}
            >
              SR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  color: 'var(--slate-900)',
                  letterSpacing: '-0.01em',
                }}
              >
                Sathwik Ryapaka
              </span>
              <span className="label-caps" style={{ color: 'var(--slate-500)', fontSize: '0.58rem', marginTop: '0.1rem' }}>
                FULL-STACK · DEVOPS · DATA SCIENCE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href.substring(1);
              return (
                <a
                  key={label}
                  href={href}
                  className="nav-link"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? 'var(--slate-950)' : 'var(--slate-600)',
                    padding: '0.2rem 0',
                    borderBottom: isActive ? '2px solid var(--amber-600)' : '2px solid transparent',
                    transition: 'color 0.15s ease, border-color 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Right side Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexShrink: 0,
            }}
          >
            {/* Open to Roles Badge */}
            <div
              className="avail-pill"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                background: '#FFFFFF',
                border: '1px solid var(--border-stone)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span className="ping-wrap">
                <span className="ping-ring" />
                <span className="ping-core" />
              </span>
              <span className="label-caps" style={{ color: 'var(--amber-800)', fontSize: '0.625rem' }}>
                Open to Roles
              </span>
            </div>

            {/* Profile Avatar + Get In Touch Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                paddingLeft: '0.5rem',
                borderLeft: '1px solid var(--border-stone)',
              }}
            >
              <img
                src={personalInfo.profileImg}
                alt="Sathwik"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid var(--border-stone)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'none',
                }}
                className="nav-avatar"
              />

              <a
                href="#contact"
                className="btn btn-dark btn-sm nav-cta-btn"
                style={{
                  height: '36px',
                  padding: '0 1rem',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.08em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="mobile-toggle"
              style={{
                padding: '0.45rem',
                border: '1px solid var(--border-stone)',
                borderRadius: 'var(--radius-sm)',
                background: '#FFFFFF',
                color: 'var(--slate-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Toggle navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid var(--border-stone)',
              padding: '1rem 1.5rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              animation: 'fadeUp 0.2s ease-out',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  padding: '0.65rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: '500',
                  color: active === href.substring(1) ? 'var(--amber-800)' : 'var(--slate-700)',
                  background: active === href.substring(1) ? 'var(--amber-50)' : 'transparent',
                  fontSize: '0.9rem',
                }}
              >
                {label}
              </a>
            ))}
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-stone)' }}>
              <a
                href={personalInfo.resumeUrl}
                download="Sathwik_Ryapaka_Resume.pdf"
                className="btn btn-dark"
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                onClick={() => setOpen(false)}
              >
                <Download size={13} /> Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (min-width: 1240px) {
          .avail-pill { display: flex !important; }
          .nav-avatar { display: block !important; }
          .desktop-nav { gap: 1.15rem !important; }
        }
        .nav-link:hover { color: var(--amber-700) !important; }
      `}</style>
    </>
  );
}
