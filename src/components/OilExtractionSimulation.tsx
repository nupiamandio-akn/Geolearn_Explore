import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, Sparkles, Points, PointMaterial } from '@react-three/drei';
import { motion } from "motion/react";
import * as THREE from 'three';

const PipeLines = () => {
  const lineRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={lineRef}>
      {/* Main Riser Column - From Seabed to Surface */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 20, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.1} />
      </mesh>
      
      {/* Secondary Support Lines */}
      {[-0.6, 0.6].map((x) => (
        <mesh key={x} position={[x, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 20, 16]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      ))}

      {/* Structural Control Rings */}
      {[-8, -4, 0, 4].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.04, 16, 32]} />
          <meshStandardMaterial color="#d4a017" emissive="#d4a017" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

const ExplorationShip = () => {
  const shipRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (shipRef.current) {
      shipRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.015;
      shipRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.01;
      shipRef.current.position.y = 8.5 + Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
    }
  });

  return (
    <group ref={shipRef} position={[0, 8.5, 0]}>
      {/* Hull - Specialized Drillship Design */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4.5, 1.8, 12]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.5, 6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.25, 2.25, 1, 3]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} />
      </mesh>
      
      {/* Superstructure */}
      <mesh position={[0, 1, -3]}>
        <boxGeometry args={[3.8, 1.5, 4]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[0, 2.2, -3.5]}>
        <boxGeometry args={[3, 1, 2]} />
        <meshStandardMaterial color="#d4a017" />
      </mesh>
      
      {/* Drilling Derrick */}
      <mesh position={[0, 4, 1]}>
        <boxGeometry args={[2, 8, 2]} />
        <meshStandardMaterial color="#d4a017" wireframe />
      </mesh>

      {/* Helideck */}
      <mesh position={[0, 1, -5.5]}>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      <pointLight position={[2, 0.5, 5]} color="#d4a017" intensity={3} distance={8} />
      <pointLight position={[-2, 0.5, 5]} color="#d4a017" intensity={3} distance={8} />
    </group>
  );
};

const SubmarinePipelines = () => {
  return (
    <group position={[0, -10, 0]}>
      {/* Main Gathering Network */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <group key={i} rotation={[0, (i * Math.PI) / 3, 0]}>
          <mesh position={[6, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.15, 0.15, 12, 16]} />
            <meshStandardMaterial color="#080808" />
          </mesh>
          {/* Manifolds */}
          <mesh position={[10, 0.4, 0]}>
            <boxGeometry args={[1.2, 0.8, 1.2]} />
            <meshStandardMaterial color="#d4a017" metalness={1} emissive="#d4a017" emissiveIntensity={0.1} />
          </mesh>
          {/* Connection Flexibles */}
          <mesh position={[5, 0.2, 0.5]} rotation={[0, 0.2, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 4, 16]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        </group>
      ))}
      
      {/* Wellhead Christmas Tree (Central) */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
};

const CrudeFlow = () => {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.2;
      pos[i * 3 + 1] = Math.random() * 15 - 7.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += 0.1; // Flow upwards
        if (positions[i * 3 + 1] > 7.5) {
          positions[i * 3 + 1] = -7.5;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#d4a017"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Seabed = () => {
  return (
    <group position={[0, -10, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40, 32, 32]} />
        <MeshDistortMaterial
          color="#0a0a0a"
          speed={0}
          distort={0.2}
          wireframe
        />
      </mesh>
      <gridHelper args={[40, 20, "#d4a017", "#111"]} />
      
      {/* Light glow at wellhead */}
      <pointLight color="#d4a017" intensity={2} distance={10} position={[0, 1, 0]} />
      <Sparkles count={50} scale={5} size={2} speed={0.4} color="#d4a017" />
    </group>
  );
};

export default function OilExtractionSimulation() {
  return (
    <div className="w-full h-full bg-[#050505] relative group">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[12, 5, 12]} fov={45} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minDistance={8}
          maxDistance={25}
        />
        
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 40]} />
        
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 20, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#444" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <PipeLines />
          <CrudeFlow />
        </Float>
        
        <ExplorationShip />
        <Seabed />
        <SubmarinePipelines />

        {/* Technical Data Markers */}
        <group position={[0, 2, 0]}>
          <mesh>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#d4a017" />
          </mesh>
          <pointLight color="#d4a017" intensity={1} distance={5} />
        </group>
      </Canvas>

      {/* Interface HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4a017]/10 border border-[#d4a017]/20 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4a017] animate-pulse" />
              <span className="text-[9px] font-bold text-[#d4a017] uppercase tracking-widest font-mono">EXTRACTION_ACTIVE // FPSO_UNIT_04</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tighter">SIMULAÇÃO DE FLUXO SUBMARINO</h2>
          </div>
          
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl grid grid-cols-2 gap-8 min-w-[240px]">
            <div>
              <div className="text-[8px] text-white/30 uppercase font-bold mb-1 font-mono">Pressão do Poço</div>
              <div className="text-lg font-bold text-white font-mono">14.2 PSI<span className="text-[10px] ml-1 text-[#d4a017]">▲</span></div>
            </div>
            <div>
              <div className="text-[8px] text-white/30 uppercase font-bold mb-1 font-mono">Vazão Cruta</div>
              <div className="text-lg font-bold text-white font-mono">820 m³/h</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="max-w-[280px]">
             <div className="text-[9px] text-white/40 leading-relaxed uppercase tracking-widest font-bold mb-2">Protocolo de Segurança</div>
             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 2 }}
                  className="h-full bg-green-500" 
                />
             </div>
             <p className="text-[10px] text-white/40 italic">Integridade estrutural verificada. Sensores de fundo reportando parâmetros nominais.</p>
          </div>
          
          <div className="flex gap-2">
            {['CAM_1', 'THERMAL', 'FLOW_MOD'].map((btn) => (
              <button key={btn} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-[8px] font-bold text-white/60 hover:bg-[#d4a017] hover:text-black transition-all pointer-events-auto uppercase">
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Technical Borders */}
      <div className="absolute inset-0 border border-white/5 rounded-[40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#d4a017]/30 to-transparent" />
    </div>
  );
}
