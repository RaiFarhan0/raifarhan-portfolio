import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../Layout/SectionWrapper';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/projects';
import { useInView } from '../../hooks/useInView';

export default function Projects() {
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

  const projectsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  };

  return (
    <SectionWrapper id="projects">
      <div style={headerStyle}>
        <div style={labelStyle}>// PROJECTS</div>
        <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '2.5rem' }}>Featured Work</h2>
      </div>

      <div style={projectsContainerStyle}>
        {projects.map((project, idx) => (
          <ProjectItem key={project.id} project={project} index={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectItem({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  const itemStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
  };

  const textColStyle = {
    order: isEven ? 2 : 1,
  };

  const cardColStyle = {
    order: isEven ? 1 : 2,
  };

  // On mobile, card is always first
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    textColStyle.order = 2;
    cardColStyle.order = 1;
  }

  return (
    <div ref={ref} style={itemStyle}>
      <motion.div
        style={cardColStyle}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ProjectCard project={project} />
      </motion.div>

      <motion.div
        style={textColStyle}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h3 style={{ fontFamily: 'Exo 2, sans-serif', fontSize: '2rem', marginBottom: '1rem' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          An in-depth look at {project.title.toLowerCase()}, showcasing my expertise in {project.tags.slice(0, 3).join(', ')}.
          This project demonstrates the ability to translate complex AI concepts into functional applications.
        </p>
        <div style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>
          STATUS: {project.status === 'featured' ? 'DEPLOYED & ACTIVE' : 'IN R&D PHASE'}
        </div>
      </motion.div>
    </div>
  );
}
