import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Text, ContactShadows } from '@react-three/drei';
import { motion } from "motion/react";
import * as THREE from 'three';

const STRATA_LAYERS = [
  { name: "Cobertura (Solo)", color: "#a67c52", thickness: 1, info: "Depósitos quaternários recentes." },
  { name: "Arenito Poroso", color: "#d2b48c", thickness: 2, info: "Rochas reservatório com alta porosidade." },
  { name: "Folhelho Orgânico", color: "#4a4a4a", thickness: 1.5, info: "Rocha geradora rica em matéria orgânica." },
  { name: "Calcário Cristalino", color: "#c0c0c0", thickness: 2.5, info: "Formações carbonáticas densas." },
  { name: "Embasamento Cristalino", color: "#2c3e50", thickness: 3, info: "Rochas ígneas e metamórficas antigas." },
];

const StrataBlock = () => {
  let currentY = 0;

  return (
    <group position={[0, 2, 0]}>
      {STRATA_LAYERS.map((layer, i) => {
        const height = layer.thickness;
        const positionY = currentY - height / 2;
        currentY -= height;

        return (
          <group key={i} position={[0, positionY, 0]}>
            <mesh receiveShadow castShadow>
              <boxGeometry args={[10, height, 10]} />
              <meshStandardMaterial 
                color={layer.color} 
                roughness={0.8}
                metalness={0.1}
              />
            </mesh>
            
            {/* Label in 3D */}
            <Text
              position={[5.5, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
              fontSize={0.3}
              color="white"
              anchorX="left"
            >
              {layer.name}
            </Text>
          </group>
        );
      })}

      {/* Internal Grid for technical look */}
      <gridHelper args={[10, 10, "#444", "#222"]} position={[0, 0.05, 0]} />
    </group>
  );
};

export default function StratigraphySimulation() {
  return (
    <div className="w-full h-full bg-[#050505] relative group">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[15, 5, 15]} fov={40} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={10}
          maxDistance={30}
        />
        
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.2} />
        <spotLight position={[20, 20, 20]} angle={0.2} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, 0, -10]} intensity={1} color="#d4a017" />

        <StrataBlock />
        <ContactShadows opacity={0.4} scale={20} blur={24} far={10} resolution={256} color="#000000" />
      </Canvas>

      {/* Interface HUD */}
      <div className="absolute inset-0 pointer-events-none p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4a017]/10 border border-[#d4a017]/20 rounded-full">
              <span className="text-[9px] font-bold text-[#d4a017] uppercase tracking-widest font-mono">ANÁLISE ESTRATIGRÁFICA // V-CORE 01</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tighter">PERFIL DE SUBSUPERFÍCIE</h2>
          </div>
          
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl max-w-[300px]">
            <div className="text-[10px] text-white/40 uppercase font-bold mb-4 tracking-tighter">Composição de Camadas</div>
            <div className="space-y-3">
              {STRATA_LAYERS.map((l, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                   <div className="text-[10px] text-white/80 font-medium">{l.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="text-white/40 text-[10px] leading-relaxed max-w-[300px] uppercase tracking-widest font-mono">
            Escala Vertical: 1:500m <br />
            Dados obtidos via Perfilagem Sônica e Testemunhagem.
          </div>
        </div>
      </div>

      {/* Decorative Borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
