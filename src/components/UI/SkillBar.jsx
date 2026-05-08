import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from '../../hooks/useInView';

export default function SkillBar({ name, level }) {
  const { ref, inView } = useInView();
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    marginBottom: '1.5rem',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.9rem',
  };

  const trackStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: 'var(--bg-card-hover)',
    borderRadius: '4px',
    overflow: 'hidden',
  };

  const fillStyle = {
    height: '100%',
    backgroundColor: 'var(--accent-cyan)',
    boxShadow: '0 0 10px var(--glow-cyan)',
    borderRadius: '4px',
    filter: isHovered ? 'brightness(1.5)' : 'brightness(1)',
    transition: 'filter 0.3s ease',
  };

  return (
    <div
      ref={ref}
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={headerStyle}>
        <span>{name}</span>
        <span>
          {inView ? <CountUp end={level} duration={2} suffix="%" /> : '0%'}
        </span>
      </div>
      <div style={trackStyle}>
        <motion.div
          style={fillStyle}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
