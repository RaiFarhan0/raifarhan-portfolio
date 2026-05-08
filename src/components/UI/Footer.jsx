import React from 'react';
import { Link } from 'react-scroll';

export default function Footer() {
  const footerStyle = {
    padding: '3rem 2rem',
    backgroundColor: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-subtle)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  };

  const topStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap',
    gap: '2rem',
  };

  const logoStyle = {
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '2rem',
    color: 'var(--accent-cyan)',
    textShadow: '0 0 10px var(--glow-cyan)',
    cursor: 'pointer',
  };

  const linksStyle = {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const linkItemStyle = {
    color: 'var(--text-muted)',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'color 0.2s',
  };

  const bottomStyle = {
    width: '100%',
    maxWidth: '1200px',
    borderTop: '1px solid var(--border-subtle)',
    paddingTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={footerStyle}>
      <div style={topStyle}>
        <div style={logoStyle} onClick={scrollToTop} className="hover-target">
          RAF
        </div>

        <div style={linksStyle}>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              style={linkItemStyle}
              className="hover-target"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div style={bottomStyle}>
        <div>&copy; {new Date().getFullYear()} Rai Farhan. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>AI / ML Engineer</span>
          <span>•</span>
          <span>Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
