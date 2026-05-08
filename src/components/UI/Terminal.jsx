import React, { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';

export default function Terminal() {
  const { ref, inView } = useInView();
  const [text, setText] = useState('');

  const fullText = `rai@ai-lab:~$ python --version
Python 3.11.0

rai@ai-lab:~$ import torch; print(torch.__version__)
2.1.0+cu118

rai@ai-lab:~$ python sentinel_ai.py --input cctv.mp4
Loading YOLOv8 model... ✓
Processing frames... ████████ 100%
Anomalies detected: 5
Report saved: alerts/log.json ✓

rai@ai-lab:~$ `;

  useEffect(() => {
    if (inView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 15); // Adjust typing speed here

      return () => clearInterval(interval);
    }
  }, [inView]);

  const containerStyle = {
    backgroundColor: 'var(--bg-card)',
    borderRadius: '8px',
    border: '1px solid var(--border-active)',
    boxShadow: '0 0 20px rgba(0, 245, 255, 0.1)',
    overflow: 'hidden',
    fontFamily: 'Space Mono, monospace',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const headerStyle = {
    backgroundColor: 'var(--bg-secondary)',
    padding: '0.5rem 1rem',
    display: 'flex',
    gap: '0.5rem',
    borderBottom: '1px solid var(--border-subtle)',
  };

  const dotStyle = (color) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: color,
  });

  const bodyStyle = {
    padding: '1.5rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    lineHeight: 1.6,
    whiteSpace: 'pre-wrap',
    minHeight: '250px',
  };

  return (
    <div ref={ref} style={containerStyle}>
      <div style={headerStyle}>
        <div style={dotStyle('#ff3b3b')} />
        <div style={dotStyle('#ffb86c')} />
        <div style={dotStyle('#50fa7b')} />
      </div>
      <div style={bodyStyle}>
        {text}
        {inView && <span className="animate-blink">█</span>}
      </div>
    </div>
  );
}
