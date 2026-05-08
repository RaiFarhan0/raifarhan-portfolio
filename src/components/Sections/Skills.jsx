import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import SkillBar from '../UI/SkillBar';
import { skills } from '../../data/skills';

export default function Skills() {
  const headerStyle = {
    marginBottom: '4rem',
  };

  const labelStyle = {
    fontFamily: 'Orbitron, sans-serif',
    color: 'var(--accent-cyan)',
    fontSize: '0.9rem',
    letterSpacing: '2px',
    marginBottom: '1rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '4rem',
  };

  const categoryStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const categoryTitleStyle = {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  };

  const cloudStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem',
  };

  const pillStyle = {
    padding: '0.5rem 1.5rem',
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '20px',
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    transition: 'all 0.3s',
  };

  const tags = [
    'NumPy', 'Pandas', 'Docker', 'Git', 'Linux',
    'MediaPipe', 'Whisper', 'Selenium', 'Playwright', 'BeautifulSoup'
  ];

  return (
    <SectionWrapper id="skills">
      <div style={headerStyle}>
        <div style={labelStyle}>// TECH ARSENAL</div>
        <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '2.5rem' }}>Tools of the Trade</h2>
      </div>

      <div style={gridStyle}>
        {skills.map((category, idx) => (
          <div key={idx} style={categoryStyle}>
            <h3 style={categoryTitleStyle}>
              <span>{category.icon}</span> {category.category}
            </h3>
            <div>
              {category.items.map((skill, sIdx) => (
                <SkillBar key={sIdx} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={cloudStyle}>
        {tags.map((tag, idx) => (
          <div
            key={idx}
            style={pillStyle}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--accent-cyan)';
              e.target.style.color = 'var(--accent-cyan)';
              e.target.style.boxShadow = '0 0 10px var(--glow-cyan)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--border-subtle)';
              e.target.style.color = 'var(--text-muted)';
              e.target.style.boxShadow = 'none';
            }}
            className="hover-target"
          >
            {tag}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
