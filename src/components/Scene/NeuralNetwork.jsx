import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function NeuralNetwork() {
  const groupRef = useRef();
  const mousePosition = useMousePosition();

  // Settings
  const nodeCount = 50;
  const bounds = 6;
  const connectionDistance = 3.5;

  // Generate random nodes
  const { nodes, edges } = useMemo(() => {
    const nodesData = [];

    for (let i = 0; i < nodeCount; i++) {
      nodesData.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * bounds * 2,
          (Math.random() - 0.5) * bounds * 2,
          (Math.random() - 0.5) * bounds * 2
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        radius: Math.random() * 0.1 + 0.08,
        color: i % 2 === 0 ? '#00f5ff' : '#7b2fff',
        baseIntensity: 0.5,
        currentIntensity: 0.5,
        targetIntensity: 0.5,
        activatedAt: 0,
      });
    }

    return { nodes: nodesData };
  }, []);

  const linesRef = useRef();
  const nodesRef = useRef([]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Mouse Parallax
    const targetX = mousePosition.y * 0.15;
    const targetY = mousePosition.x * 0.15;

    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;

    // Slow rotation
    groupRef.current.rotation.y += 0.001;

    // Update node positions and bounce off bounds
    nodes.forEach((node, i) => {
      node.position.add(node.velocity);

      if (Math.abs(node.position.x) > bounds) node.velocity.x *= -1;
      if (Math.abs(node.position.y) > bounds) node.velocity.y *= -1;
      if (Math.abs(node.position.z) > bounds) node.velocity.z *= -1;

      if (nodesRef.current[i]) {
        nodesRef.current[i].position.copy(node.position);
      }
    });

    // Random activation
    if (Math.random() < 0.02) { // roughly every 1-2 seconds at 60fps
      const randomNodeIndex = Math.floor(Math.random() * nodes.length);
      nodes[randomNodeIndex].currentIntensity = 2.0;
    }

    // Decay intensity
    nodes.forEach((node, i) => {
      node.currentIntensity += (node.baseIntensity - node.currentIntensity) * 0.05;
      if (nodesRef.current[i] && nodesRef.current[i].material) {
        nodesRef.current[i].material.emissiveIntensity = node.currentIntensity;
      }
    });

    // Update edge geometry based on distances
    if (linesRef.current) {
      const positions = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = nodes[i].position.distanceTo(nodes[j].position);
          if (dist < connectionDistance) {
            positions.push(
              nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
              nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
            );
          }
        }
      }

      linesRef.current.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh
          key={i}
          position={node.position}
          ref={(el) => (nodesRef.current[i] = el)}
        >
          <sphereGeometry args={[node.radius, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={node.currentIntensity}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* Edges */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#00f5ff"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </group>
  );
}
