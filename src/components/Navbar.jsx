import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('about');
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const ids = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'];
      const y = window.scrollY + 120;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        background: 'rgba(250,250,249,0.90)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid #E7E5E4' : '1px solid transparent',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.04)' : 'none',
      }}>
        <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>

          {/* Brand */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--slate-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FCD34D', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '0.875rem', boxShadow: 'var(--shadow-sm)', letterSpacing: '-0.01em' }}>
              SR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '1rem', color: 'var(--slate-900)', letterSpacing: '-0.01em' }}>Sathwik Ryapaka</span>
              <span className="label-caps" style={{ color: 'var(--slate-500)', fontSize: '0.6rem', marginTop: '0.15rem' }}>Full-Stack · DevOps · Data Science</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '2rem' }}>
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href.substring(1);
              return (
                <a
                  key={label}
                  href={href}
                  className="nav-link"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? 'var(--slate-900)' : 'var(--slate-600)',
                    paddingBottom: '2px',
                    borderBottom: isActive ? '2px solid var(--amber-600)' : '2px solid transparent',
                    transition: 'color 0.15s ease, border-color 0.15s ease',
                  }}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            {/* Availability */}
            <div className="avail-pill" style={{ display: 'none', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: '#fff', border: '1px solid var(--border-stone)', boxShadow: 'var(--shadow-sm)' }}>
              <span className="ping-wrap">
                <span className="ping-ring" />
                <span className="ping-core" />
              </span>
              <span className="label-caps" style={{ color: 'var(--amber-800)', fontSize: '0.625rem' }}>Open to Roles</span>
            </div>

            {/* Profile + CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '0.75rem', borderLeft: '1px solid var(--border-stone)' }}>
              <img
                src={personalInfo.profileImg}
                alt="Sathwik"
                style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-stone)', boxShadow: 'var(--shadow-sm)', display: 'none' }}
                className="nav-avatar"
              />
              <a href={personalInfo.resumeUrl} download="Sathwik_Ryapaka_Resume.pdf" className="btn btn-dark btn-sm" style={{ display: 'none' }} id="nav-resume-btn">
                <Download size={12} /> Resume
              </a>
              <a href="#contact" className="btn btn-dark btn-sm" style={{ display: 'none' }} id="nav-contact-btn">
                Get in Touch
              </a>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setOpen(!open)} className="mobile-toggle" style={{ padding: '0.5rem', border: '1px solid var(--border-stone)', borderRadius: 'var(--radius-sm)', background: '#fff', color: 'var(--slate-600)', display: 'flex', alignItems: 'center' }}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div style={{ background: '#fff', borderTop: '1px solid var(--border-stone)', padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', animation: 'fadeUp 0.2s ease-out' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setOpen(false)} style={{ padding: '0.65rem 0.75rem', borderRadius: 'var(--radius-sm)', fontWeight: '500', color: active === href.substring(1) ? 'var(--amber-800)' : 'var(--slate-700)', background: active === href.substring(1) ? 'var(--amber-50)' : 'transparent', fontSize: '0.9375rem' }}>
                {label}
              </a>
            ))}
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-stone)' }}>
              <a href={personalInfo.resumeUrl} download="Sathwik_Ryapaka_Resume.pdf" className="btn btn-dark" style={{ width: '100%', display: 'flex' }} onClick={() => setOpen(false)}>
                <Download size={13} /> Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 1100px) {
          .desktop-nav { display: flex !important; }
          .avail-pill { display: flex !important; }
          .nav-avatar { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (min-width: 640px) {
          #nav-resume-btn { display: inline-flex !important; }
        }
        @media (min-width: 1100px) {
          #nav-contact-btn { display: inline-flex !important; }
          #nav-resume-btn { display: none !important; }
        }
        .nav-link:hover { color: var(--slate-900) !important; }
      `}</style>
    </>
  );
}
