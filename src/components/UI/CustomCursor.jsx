import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function CustomCursor() {
  const mousePosition = useMousePosition(); // normalized -1 to 1
  const [isMobile, setIsMobile] = useState(true);
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);

    if (isTouchDevice) return;

    // Convert normalized back to pixel coordinates
    const pxX = (mousePosition.x + 1) / 2 * window.innerWidth;
    const pxY = -(mousePosition.y - 1) / 2 * window.innerHeight;

    // Setup lerp animation for the ring
    let animationFrameId;

    const updateRing = () => {
      setRingPosition((prev) => {
        const dx = pxX - prev.x;
        const dy = pxY - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateRing);
    };

    updateRing();

    // Add event listeners for hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mousePosition]);

  if (isMobile) return null;

  // Convert normalized mouse back to absolute px for the dot
  const dotX = (mousePosition.x + 1) / 2 * window.innerWidth;
  const dotY = -(mousePosition.y - 1) / 2 * window.innerHeight;

  const dotStyle = {
    position: 'fixed',
    top: dotY,
    left: dotX,
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--accent-cyan)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'difference',
  };

  const ringStyle = {
    position: 'fixed',
    top: ringPosition.y,
    left: ringPosition.x,
    width: isHovering ? '60px' : '40px',
    height: isHovering ? '60px' : '40px',
    border: '1px solid var(--accent-cyan)',
    backgroundColor: isHovering ? 'var(--glow-cyan)' : 'transparent',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 9998,
    transition: 'width 0.2s, height 0.2s, background-color 0.2s',
  };

  return (
    <>
      <div style={dotStyle} />
      <div style={ringStyle} />
    </>
  );
}
