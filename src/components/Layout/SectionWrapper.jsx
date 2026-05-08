import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export default function SectionWrapper({ children, id, className = '', style = {} }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '6rem 2rem',
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    ...style,
  };

  return (
    <section id={id} className={className} style={{ width: '100%' }}>
      <motion.div
        ref={ref}
        style={sectionStyle}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
