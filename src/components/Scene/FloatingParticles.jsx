import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingParticles() {
  const pointsRef = useRef();
  const [particleCount, setParticleCount] = useState(200);

  useEffect(() => {
    // Detect mobile to reduce particle count
    if (window.innerWidth < 768 || ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setParticleCount(80);
    }
  }, []);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const radius = 12;

    for (let i = 0; i < particleCount; i++) {
      // Random position in a sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius * Math.cbrt(Math.random());

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [particleCount]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00f5ff"
        transparent
        opacity={0.5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}
