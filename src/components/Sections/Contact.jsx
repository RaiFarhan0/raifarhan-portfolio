import React, { useState } from 'react';
import SectionWrapper from '../Layout/SectionWrapper';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
  };

  const labelStyle = {
    fontFamily: 'Orbitron, sans-serif',
    color: 'var(--accent-cyan)',
    fontSize: '0.9rem',
    letterSpacing: '2px',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontFamily: 'Exo 2, sans-serif',
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    marginBottom: '1rem',
  };

  const subtextStyle = {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  };

  const cardStyle = {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const cardIconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  };

  const cardTitleStyle = {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.2rem',
    color: 'var(--text-primary)',
  };

  const cardValueStyle = {
    color: 'var(--accent-cyan)',
    fontSize: '0.9rem',
    fontFamily: 'Space Mono, monospace',
    wordBreak: 'break-all',
  };

  const hireBtnContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const hireBtnStyle = {
    padding: '1.5rem 4rem',
    backgroundColor: 'transparent',
    color: 'var(--accent-cyan)',
    fontFamily: 'Orbitron, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: '2px',
    borderRadius: '4px',
    border: '2px solid var(--accent-cyan)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('raifarhan@example.com'); // Placeholder email
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <div style={headerStyle}>
        <div style={labelStyle}>// LET'S BUILD SOMETHING</div>
        <h2 style={headingStyle}>Have an AI project in mind?</h2>
        <p style={subtextStyle}>
          Available for freelance, remote positions, and AI collaborations.
          Let's discuss how we can leverage artificial intelligence to solve your complex problems.
        </p>
      </div>

      <div style={gridStyle}>
        <div
          style={cardStyle}
          onClick={copyEmail}
          className="hover-target"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 245, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={cardIconStyle}>✉️</div>
          <div style={cardTitleStyle}>Email</div>
          <div style={cardValueStyle}>{copied ? 'Copied!' : 'raifarhan@example.com'}</div>
        </div>

        <a
          href="https://github.com/RaiFarhan0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div
            style={cardStyle}
            className="hover-target"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 245, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={cardIconStyle}>🐙</div>
            <div style={cardTitleStyle}>GitHub</div>
            <div style={cardValueStyle}>github.com/RaiFarhan0</div>
          </div>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div
            style={cardStyle}
            className="hover-target"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-green)';
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 255, 136, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={cardIconStyle}>⚡</div>
            <div style={cardTitleStyle}>Fiverr</div>
            <div style={{...cardValueStyle, color: 'var(--accent-green)'}}>View Profile</div>
          </div>
        </a>

        <div
          style={cardStyle}
          className="hover-target"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 245, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={cardIconStyle}>📍</div>
          <div style={cardTitleStyle}>Location</div>
          <div style={cardValueStyle}>Pakistan 🇵🇰 | Remote Worldwide</div>
        </div>
      </div>

      <div style={hireBtnContainerStyle}>
        <a
          href="mailto:raifarhan@example.com"
          style={hireBtnStyle}
          className="hover-target animate-pulse-glow"
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--accent-cyan)';
            e.target.style.color = 'var(--bg-primary)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--accent-cyan)';
          }}
        >
          HIRE ME →
        </a>
      </div>
    </SectionWrapper>
  );
}
