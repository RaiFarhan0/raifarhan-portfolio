import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

export default function GlowSphere({ position, color, delay = 0 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const scale = 1.0 + Math.sin(time * 1.5 + delay) * 0.3;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]} position={position}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        depthWrite={false}
        blending={2} // Additive blending for glow effect
      />
    </Sphere>
  );
}
