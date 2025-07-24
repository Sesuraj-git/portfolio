import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EnergyOrbProps {
  position: [number, number, number];
  color: string;
  intensity?: number;
}

export const EnergyOrb: React.FC<EnergyOrbProps> = ({ 
  position, 
  color, 
  intensity = 1 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.9;
      meshRef.current.scale.setScalar(pulse);
    }
    
    if (lightRef.current) {
      lightRef.current.intensity = intensity * (Math.sin(state.clock.elapsedTime * 3) * 0.2 + 0.8);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
      <pointLight 
        ref={lightRef}
        color={color}
        intensity={intensity}
        distance={10}
        decay={2}
      />
    </group>
  );
};