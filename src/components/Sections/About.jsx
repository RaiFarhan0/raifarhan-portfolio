import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import Terminal from '../UI/Terminal';
import CountUp from 'react-countup';
import { useInView } from '../../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  };

  const leftColStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const labelStyle = {
    fontFamily: 'Orbitron, sans-serif',
    color: 'var(--accent-cyan)',
    fontSize: '0.9rem',
    letterSpacing: '2px',
  };

  const headingStyle = {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: 'var(--text-primary)',
    lineHeight: 1.2,
  };

  const bioStyle = {
    color: 'var(--text-muted)',
    fontSize: '1rem',
    lineHeight: 1.8,
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginTop: '2rem',
  };

  const statCardStyle = {
    backgroundColor: 'var(--bg-card)',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const statNumberStyle = {
    fontFamily: 'Exo 2, sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--accent-cyan)',
  };

  const statLabelStyle = {
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
  };

  return (
    <SectionWrapper id="about">
      <div style={containerStyle} ref={ref}>
        <div style={leftColStyle}>
          <div style={labelStyle}>// ABOUT ME</div>
          <h2 style={headingStyle}>Engineer by logic.<br/>Creator by instinct.</h2>

          <div style={bioStyle}>
            <p style={{ marginBottom: '1rem' }}>
              I am an AI/ML Engineer specializing in Computer Vision and Generative AI.
              My passion lies in bridging the gap between theoretical machine learning models
              and production-ready applications.
            </p>
            <p>
              Whether it's deploying YOLOv8 for real-time anomaly detection in CCTV networks,
              or building custom Stable Diffusion pipelines, I focus on building scalable,
              efficient, and impactful AI solutions.
            </p>
          </div>

          <div style={statsContainerStyle}>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>
                {inView ? <CountUp end={5} duration={2} suffix="+" /> : '0+'}
              </div>
              <div style={statLabelStyle}>Projects</div>
            </div>

            <div style={statCardStyle}>
              <div style={statNumberStyle}>
                {inView ? <CountUp end={3} duration={2} suffix="+" /> : '0+'}
              </div>
              <div style={statLabelStyle}>AI Domains</div>
            </div>

            <div style={statCardStyle}>
              <div style={statNumberStyle}>
                {inView ? <CountUp end={100} duration={2} suffix="%" /> : '0%'}
              </div>
              <div style={statLabelStyle}>Remote Ready</div>
            </div>

            <div style={statCardStyle}>
              <div style={statNumberStyle}>∞</div>
              <div style={statLabelStyle}>Curiosity</div>
            </div>
          </div>
        </div>

        <div>
          <Terminal />
        </div>
      </div>
    </SectionWrapper>
  );
}
