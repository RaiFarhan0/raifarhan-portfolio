import React from 'react';
import { Canvas } from '@react-three/fiber';
import NeuralNetwork from './NeuralNetwork';
import FloatingParticles from './FloatingParticles';
import GlowSphere from './GlowSphere';

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00f5ff" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#7b2fff" intensity={2} />

      <NeuralNetwork />
      <FloatingParticles />
      <GlowSphere position={[3, 2, -5]} color="#00f5ff" delay={0} />
      <GlowSphere position={[-4, -2, -6]} color="#7b2fff" delay={Math.PI} />
    </Canvas>
  );
}
