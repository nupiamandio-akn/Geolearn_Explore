import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Float, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Terrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a stylized wireframe terrain
  const points = useMemo(() => {
    const pts = [];
    for (let x = -10; x <= 10; x += 0.5) {
      for (let z = -10; z <= 10; z += 0.5) {
        const y = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 1.5;
        pts.push(new THREE.Vector3(x, y, z));
      }
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Base Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#050505" />
      </mesh>

      {/* Stylized Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, 1, 0]}>
          <octahedronGeometry args={[2, 0]} />
          <MeshDistortMaterial
            color="#d4a017"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#d4a017"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </Float>

      {/* Grid Helper for technical feel */}
      <gridHelper args={[40, 40, "#333", "#111"]} position={[0, -1.9, 0]} />
      
      {/* Light points representing mineral deposits */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() * 2),
          (Math.random() - 0.5) * 20
        ]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#d4a017" emissive="#d4a017" emissiveIntensity={2} />
          <pointLight color="#d4a017" intensity={0.5} distance={5} />
        </mesh>
      ))}
    </group>
  );
};

export default function GeologicalSimulation() {
  return (
    <div className="w-full h-full bg-[#050505] rounded-[40px] overflow-hidden border border-white/5 relative group">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={50} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2.1} 
          minDistance={5}
          maxDistance={30}
        />
        
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 50]} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />

        <Terrain />

        {/* HUD Elements in 3D Space */}
        <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
          <Text
            position={[0, 4, 0]}
            fontSize={0.5}
            color="#d4a017"
            anchorX="center"
            anchorY="middle"
          >
            NÚCLEO GEOLÓGICO: SCAN_V26
          </Text>
        </Float>
      </Canvas>

      {/* Overlay UI Controls */}
      <div className="absolute bottom-10 left-10 z-10 pointer-events-none">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
            <div className="w-2 h-2 rounded-full bg-[#d4a017] animate-pulse" />
            <div className="text-[10px] uppercase font-bold text-white tracking-widest">Simulação Ativa: Deep Scan Mode</div>
          </div>
          <div className="text-white/40 text-[10px] leading-relaxed max-w-[200px]">
             Use o mouse para orbitar • Scroll para zoom • Explore anomalias térmicas marcadas em ouro.
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 z-10 flex flex-col gap-2">
        <button className="p-3 bg-white/5 hover:bg-[#d4a017] hover:text-black rounded-lg border border-white/10 transition-all pointer-events-auto">
          <div className="text-[10px] font-bold uppercase tracking-widest">Reset View</div>
        </button>
        <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all pointer-events-auto">
          <div className="text-[10px] font-bold uppercase tracking-widest">Toggle Grid</div>
        </button>
      </div>
    </div>
  );
}
