import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Typewriter from '../UI/Typewriter';

export default function Hero() {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
    padding: '2rem',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    border: '1px solid var(--accent-cyan)',
    backgroundColor: 'rgba(0, 245, 255, 0.05)',
    color: 'var(--accent-cyan)',
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    marginBottom: '2rem',
  };

  const dotStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--accent-green)',
    borderRadius: '50%',
    boxShadow: '0 0 8px var(--accent-green)',
  };

  const nameStyle = {
    fontFamily: 'Exo 2, sans-serif',
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    fontWeight: 900,
    color: 'var(--text-primary)',
    lineHeight: 1.1,
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '-2px',
  };

  const typewriterContainerStyle = {
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    marginTop: '1rem',
    marginBottom: '2rem',
    height: '3rem', // prevent layout shift
  };

  const subtextStyle = {
    fontFamily: 'Space Mono, monospace',
    color: 'var(--text-muted)',
    maxWidth: '600px',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '3rem',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const btnPrimaryStyle = {
    padding: '1rem 2rem',
    backgroundColor: 'var(--accent-cyan)',
    color: 'var(--bg-primary)',
    fontFamily: 'Space Mono, monospace',
    fontWeight: 'bold',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 0 15px var(--glow-cyan)',
  };

  const btnSecondaryStyle = {
    padding: '1rem 2rem',
    backgroundColor: 'transparent',
    color: 'var(--accent-cyan)',
    fontFamily: 'Space Mono, monospace',
    fontWeight: 'bold',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid var(--accent-cyan)',
    cursor: 'pointer',
    transition: 'all 0.3s',
  };

  const scrollIndicatorStyle = {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'var(--accent-cyan)',
    fontSize: '2rem',
    cursor: 'pointer',
  };

  return (
    <section id="hero" style={containerStyle}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div style={badgeStyle}>
          <div style={dotStyle} className="animate-blink" />
          AVAILABLE FOR HIRE
        </div>
      </motion.div>

      <motion.h1
        style={nameStyle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Rai Farhan
      </motion.h1>

      <motion.div
        style={typewriterContainerStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <Typewriter
          sequence={[
            'AI/ML Engineer_',
            2000,
            'Computer Vision Specialist_',
            2000,
            'Generative AI Developer_',
            2000
          ]}
        />
      </motion.div>

      <motion.p
        style={subtextStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Building intelligent systems that see, think, and act.<br />
        From real-time anomaly detection to generative AI pipelines —<br />
        I engineer AI that works in the real world.
      </motion.p>

      <motion.div
        style={buttonsContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <Link to="projects" spy={true} smooth={true} duration={500} offset={-70}>
          <button
            style={btnPrimaryStyle}
            className="hover-target"
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            View My Work →
          </button>
        </Link>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button
            style={btnSecondaryStyle}
            className="hover-target"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 245, 255, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Download CV ↓
          </button>
        </a>
      </motion.div>

      <motion.div
        style={scrollIndicatorStyle}
        className="animate-bounce-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <Link to="about" spy={true} smooth={true} duration={500} offset={-70} className="hover-target">
          ⌄
        </Link>
      </motion.div>
    </section>
  );
}
