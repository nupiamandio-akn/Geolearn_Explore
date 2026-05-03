import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Pickaxe, Search, Map as MapIcon, ArrowLeft, Triangle, Gem, Box, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { ASSETS } from "../constants/images";
import DiamondMap from "../components/DiamondMap";
import GeologicalSimulation from "../components/GeologicalSimulation";

export default function Minerais() {
  const [viewMode, setViewMode] = useState<"2d" | "3d">("2d");

  return (
    <div className="pt-20 min-h-screen">
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.MINERAL_EXPLORATION} 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Exploração Mineral"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#d4a017] text-sm font-bold uppercase tracking-widest mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Voltar ao Início
          </Link>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Pickaxe className="w-12 h-12 text-[#d4a017]" />
              <div className="h-px w-24 bg-[#d4a017]/30" />
              <span className="text-[#d4a017] uppercase tracking-[0.3em] font-bold text-xs">Módulo 02</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              EXPLORAÇÃO <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a017] to-white">MINERAL</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Técnicas de prospecção, avaliação de depósitos minerais e métodos modernos de extração sustentável de recursos sólidos.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Engenharia de Minas & Prospecção</h2>
            <div className="space-y-6">
               {[
                 { icon: Search, title: "Geofísica de Exploração", desc: "Uso de gravimetria, magnetometria e sísmica para detecção de corpos de minério ocultos." },
                 { icon: MapIcon, title: "Modelagem de Blocos", desc: "Cálculo computacional de volume e teor de depósitos para viabilidade econômica." },
                 { icon: Triangle, title: "Operações de Lavra", desc: "Planejamento de minas a céu aberto e subterrâneas com foco em segurança e eficiência." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                   <item.icon className="w-8 h-8 text-[#d4a017] shrink-0" />
                   <div>
                     <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                     <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                <img src={ASSETS.MINING_SITE_1} className="w-full h-full object-cover" alt="Mining 1" />
              </div>
              <div className="h-48 bg-[#d4a017] rounded-3xl p-8 flex flex-col justify-end">
                <div className="text-4xl font-bold text-[#0f0f0f] mb-1">92%</div>
                <div className="text-[10px] uppercase font-bold text-[#0f0f0f]/60 tracking-widest leading-none">Eficiência em Prospecção</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 bg-white/10 rounded-3xl p-8">
                <div className="text-2xl font-bold text-white mb-2">Sustentabilidade</div>
                <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest">Compromisso com a recuperação ambiental de áreas mineradas.</p>
              </div>
              <div className="h-64 bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                <img src={ASSETS.MINING_SITE_2} className="w-full h-full object-cover" alt="Mining 2" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>



      {/* Unified Exploration Hub */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/5 text-[#d4a017] text-[10px] font-bold uppercase tracking-widest mb-4">
                <Gem className="w-3 h-3" /> Inteligência Geoespacial & 3D
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                HUB DE <span className="text-[#d4a017]">EXPLORAÇÃO</span>.
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                Selecione a visualização desejada para análise de dados. Alterne entre o mapeamento global de jazidas ou a simulação técnica de formações geológicas.
              </p>
            </div>
            
            <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/10">
               <button 
                onClick={() => setViewMode("2d")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === "2d" ? "bg-[#d4a017] text-[#0f0f0f]" : "text-white/40 hover:text-white"}`}
               >
                 <Globe className="w-4 h-4" /> Vista 2D
               </button>
               <button 
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === "3d" ? "bg-[#d4a017] text-[#0f0f0f]" : "text-white/40 hover:text-white"}`}
               >
                 <Box className="w-4 h-4" /> Simulação 3D
               </button>
            </div>
          </div>
          
          <div className="h-[750px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative bg-[#0f0f0f]">
             <AnimatePresence mode="wait">
               {viewMode === "2d" ? (
                 <motion.div 
                   key="2d-map"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className="w-full h-full"
                 >
                   <DiamondMap />
                 </motion.div>
               ) : (
                 <motion.div 
                   key="3d-sim"
                   initial={{ opacity: 0, scale: 1.02 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className="w-full h-full"
                 >
                   <GeologicalSimulation />
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

