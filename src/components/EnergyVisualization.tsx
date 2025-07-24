import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { EnergyOrb } from './EnergyOrb';
import { ParticleField } from './ParticleField';

const ThreeScene: React.FC = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        enableDamping
        dampingFactor={0.05}
      />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      
      {/* Particle field background */}
      <ParticleField />
      
      {/* Energy orbs */}
      <EnergyOrb 
        position={[-2, 1, 0]} 
        color="#3b82f6" 
        intensity={1.2} 
      />
      <EnergyOrb 
        position={[2, -0.5, -1]} 
        color="#06b6d4" 
        intensity={1.0} 
      />
      <EnergyOrb 
        position={[0, -2, 0.5]} 
        color="#f97316" 
        intensity={1.4} 
      />
    </>
  );
};

// Fallback component for when Three.js fails
const Fallback: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-orb opacity-30 animate-glow-pulse"></div>
    </div>
  );
};

export const EnergyVisualization: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={<Fallback />}>
        <Canvas
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          onCreated={({ gl }) => {
            gl.setClearColor('#0f0f23', 1);
          }}
        >
          <ThreeScene />
        </Canvas>
      </Suspense>
    </div>
  );
};