import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: 'var(--bg-card)',
    borderRadius: '12px',
    border: '1px solid var(--border-subtle)',
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: isHovered ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px var(--glow-cyan)' : 'none',
    borderColor: isHovered ? 'var(--border-active)' : 'var(--border-subtle)',
  };

  const imagePlaceholderStyle = {
    width: '100%',
    height: '200px',
    background: project.gradient,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontFamily: 'Orbitron, sans-serif',
    fontWeight: 'bold',
    letterSpacing: '1px',
    backgroundColor: project.status === 'featured' ? 'rgba(0, 245, 255, 0.1)' : 'rgba(74, 122, 138, 0.1)',
    color: project.status === 'featured' ? 'var(--accent-cyan)' : 'var(--text-muted)',
    border: `1px solid ${project.status === 'featured' ? 'var(--border-active)' : 'var(--border-subtle)'}`,
  };

  const contentStyle = {
    padding: '2rem',
  };

  const titleStyle = {
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
  };

  const subtitleStyle = {
    fontFamily: 'Rajdhani, sans-serif',
    color: 'var(--accent-cyan)',
    fontSize: '1.1rem',
    marginBottom: '1rem',
  };

  const descStyle = {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  };

  const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '2rem',
  };

  const tagStyle = {
    padding: '0.3rem 0.6rem',
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '4px',
    fontSize: '0.8rem',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)',
  };

  const linksContainerStyle = {
    display: 'flex',
    gap: '1rem',
  };

  const linkBtnStyle = (disabled) => ({
    padding: '0.6rem 1.2rem',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontFamily: 'Space Mono, monospace',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: '1px solid var(--accent-cyan)',
    backgroundColor: disabled ? 'transparent' : 'rgba(0, 245, 255, 0.1)',
    color: disabled ? 'var(--text-muted)' : 'var(--accent-cyan)',
    transition: 'all 0.2s',
  });

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover-target"
    >
      <div style={imagePlaceholderStyle}>
        <div style={badgeStyle}>
          {project.status === 'featured' ? 'FEATURED' : 'IN DEVELOPMENT'}
        </div>
      </div>

      <div style={contentStyle}>
        <h3 style={titleStyle}>{project.title}</h3>
        <div style={subtitleStyle}>{project.subtitle}</div>
        <p style={descStyle}>{project.description}</p>

        <div style={tagsContainerStyle}>
          {project.tags.map((tag, idx) => (
            <span key={idx} style={tagStyle}>{tag}</span>
          ))}
        </div>

        <div style={linksContainerStyle}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkBtnStyle(false)}
              className="hover-target"
            >
              GitHub
            </a>
          )}

          <a
            href={project.demo || '#'}
            target={project.demo ? "_blank" : "_self"}
            rel="noopener noreferrer"
            style={linkBtnStyle(!project.demo)}
            onClick={(e) => !project.demo && e.preventDefault()}
            className="hover-target"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
