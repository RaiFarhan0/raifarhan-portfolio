import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function Navbar() {
  const scrollProgress = useScrollProgress();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
    backgroundColor: scrollProgress > 0.05 ? 'rgba(2, 4, 8, 0.8)' : 'transparent',
    backdropFilter: scrollProgress > 0.05 ? 'blur(20px)' : 'none',
    borderBottom: scrollProgress > 0.05 ? '1px solid var(--border-subtle)' : '1px solid transparent',
  };

  const logoStyle = {
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--accent-cyan)',
    textShadow: '0 0 10px var(--glow-cyan)',
    cursor: 'pointer',
  };

  const linksContainerStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  };

  const linkStyle = {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    position: 'relative',
    padding: '0.5rem 0',
    color: 'var(--text-primary)',
  };

  const activeIndicatorStyle = {
    position: 'absolute',
    bottom: -2,
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: 'var(--accent-cyan)',
    boxShadow: '0 0 8px var(--accent-cyan)',
  };

  const mobileMenuOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(2, 4, 8, 0.95)',
    backdropFilter: 'blur(10px)',
    zIndex: 101,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  };

  return (
    <>
      <nav style={navStyle}>
        <Link to="hero" spy={true} smooth={true} duration={500} offset={0}>
          <div style={logoStyle}>RAF</div>
        </Link>

        {isMobile ? (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', zIndex: 102 }}
          >
            ☰
          </button>
        ) : (
          <div style={linksContainerStyle}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onSetActive={handleSetActive}
                style={linkStyle}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeSection"
                    style={activeIndicatorStyle}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && isMobile && (
        <div style={mobileMenuOverlayStyle}>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', color: 'var(--accent-cyan)', fontSize: '2rem' }}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ ...linkStyle, fontSize: '2rem' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
