import React from 'react';
import { ArrowRight, Download, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onContactClick }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-stone)',
        background: 'var(--bg-base)',
      }}
    >
      {/* Subtle ambient light gradient in background */}
      <div
        style={{
          position: 'absolute',
          top: '-140px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(251,191,36,0.14) 0%, rgba(245,245,244,0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '4.5rem',
          paddingBottom: '4.5rem',
        }}
      >

        {/* Top Meta Status Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          <div className="badge-amber-pill" style={{ color: 'var(--amber-900)' }}>
            <span className="ping-wrap">
              <span className="ping-ring" />
              <span className="ping-core" />
            </span>
            <span className="label-caps" style={{ color: 'var(--amber-800)', fontSize: '0.65rem' }}>
              Sangareddy / Hyderabad · Open to Software Roles &amp; Opportunities
            </span>
          </div>

          <div
            className="label-code"
            style={{
              color: 'var(--slate-400)',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span>BVRIT CSE (DATA SCIENCE)</span>
            <span style={{ color: 'var(--border-stone-md)' }}>/</span>
            <span>CGPA: 8.77</span>
            <span style={{ color: 'var(--border-stone-md)' }}>/</span>
            <span style={{ color: 'var(--amber-800)', fontWeight: '600' }}>FULL-STACK &amp; DEVOPS</span>
          </div>
        </div>

        {/* Main Dashboard Hero Grid: Left Content + Right Geometric Portrait */}
        <div
          className="hero-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >

          {/* Left Column: Headlines & Actions */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              animation: 'fadeUp 0.7s ease-out both',
            }}
          >
            <div className="section-line-label" style={{ marginBottom: '-0.5rem' }}>
              <span className="amber-line" />
              <span className="label-text">STUDENT DEVELOPER PORTFOLIO // 2024—2028</span>
            </div>

            <h1
              className="display-hero"
              style={{
                fontSize: 'clamp(2.4rem, 4.2vw, 3.65rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: 'var(--slate-950)',
              }}
            >
              Architecting full-stack web platforms, automated DevOps, &amp; intelligent systems.
            </h1>

            <p
              className="body-lg"
              style={{
                maxWidth: '560px',
                lineHeight: 1.75,
                color: 'var(--slate-600)',
                fontSize: '1rem',
              }}
            >
              Computer Science undergraduate at BVRIT and Full-Stack Fellow at Mitt Arv. Passionate about building robust React/Node.js web applications, Jenkins CI/CD pipelines, and high-precision analytical tools.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                paddingTop: '0.25rem',
              }}
            >
              <a href="#projects" className="btn btn-dark" id="hero-explore-btn">
                <span>Explore Projects</span>
                <ArrowRight size={14} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Sathwik_Ryapaka_Resume.pdf"
                className="btn btn-light"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-stone">
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Reference-Style Geometric Profile Artwork */}
          <div
            className="hero-image-col"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              animation: 'fadeUp 0.85s ease-out 0.15s both',
            }}
          >
            {/* Organic/Circular Backdrop Composition */}
            <div
              className="profile-artwork-container"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                height: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >

              {/* Background Shape 1: Offset Sage/Teal Organic Oval */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '10px',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%',
                  background: 'linear-gradient(135deg, #D5E2D8 0%, #C8D8CC 100%)',
                  opacity: 0.85,
                  zIndex: 1,
                  transform: 'rotate(-8deg)',
                }}
              />

              {/* Background Shape 2: Large Center-Left Sand/Stone Circle */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  background: 'linear-gradient(145deg, #EAE6DC 0%, #DFD9CC 100%)',
                  opacity: 0.9,
                  zIndex: 2,
                }}
              />

              {/* Small Floating Accent Dot (Peach / Terracotta tone like reference) */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '75px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#E29578',
                  boxShadow: '0 2px 8px rgba(226, 149, 120, 0.4)',
                  zIndex: 4,
                  animation: 'floatY 4s ease-in-out infinite',
                }}
              />

              {/* Profile Image Cutout Container */}
              <div
                className="profile-portrait-frame"
                style={{
                  position: 'relative',
                  zIndex: 3,
                  width: '310px',
                  height: '310px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#FAFAF9',
                  border: '6px solid #FFFFFF',
                  boxShadow: '0 16px 36px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={personalInfo.profileImg}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Floating Status / Identity Pill Badge (Bottom Right, matching reference layout) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '12px',
                  zIndex: 5,
                  background: 'var(--slate-950)',
                  color: '#FFFFFF',
                  borderRadius: '9999px',
                  padding: '0.55rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.725rem',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                <Sparkles size={14} color="#F59E0B" />
                <span style={{ fontWeight: '600' }}>Full-Stack &amp; AI Fellow</span>
              </div>

            </div>
          </div>

        </div>

        {/* Statistics Ribbon */}
        <div className="stats-ribbon reveal" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="stat-cell">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-sub">{stat.helper}</div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-main-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .profile-artwork-container {
            max-width: 320px !important;
            height: 320px !important;
          }
          .profile-portrait-frame {
            width: 230px !important;
            height: 230px !important;
          }
        }
        @media (max-width: 640px) {
          .stats-ribbon {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
