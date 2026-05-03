import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Droplets, Zap, Shield, ArrowLeft, BarChart3, Globe, Box, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { ASSETS } from "../constants/images";
import InteractiveMap from "../components/InteractiveMap";
import GeologicalSimulation from "../components/GeologicalSimulation";
import OilExtractionSimulation from "../components/OilExtractionSimulation";

export default function Energia() {
  const [viewMode, setViewMode] = useState<"2d" | "3d" | "extraction">("2d");

  return (
    <div className="pt-20 min-h-screen">
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OilExtractionSimulation />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
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
              <Droplets className="w-12 h-12 text-[#d4a017]" />
              <div className="h-px w-24 bg-[#d4a017]/30" />
              <span className="text-[#d4a017] uppercase tracking-[0.3em] font-bold text-xs">Módulo 03</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              PETRÓLEO <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a017] to-white">& GÁS</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              O ecossistema complexo dos hidrocarbonetos: desde a geologia de reservatório até o refino e transporte em águas ultraprofundas.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           {[
             { icon: Shield, title: "Segurança Offshore", desc: "Protocolos rígidos de segurança em plataformas de perfuração e produção." },
             { icon: Zap, title: "Sistemas de Extração", desc: "Tecnologia de ponta para otimização de fluxo e recuperação secundária." },
             { icon: BarChart3, title: "Economia do Petróleo", desc: "Análise de mercado global, precificação e geopolítica energética." },
             { icon: Droplets, title: "Refino & Petroquímica", desc: "Processamentos químicos para transformação de óleo bruto em produtos de valor." }
           ].map((item, i) => (
             <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#d4a017]/40 transition-all group">
               <item.icon className="w-10 h-10 text-[#d4a017] mb-6 group-hover:scale-110 transition-transform" />
               <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
               <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* Integrated Energy Grid Hub */}
        <section className="mb-24 px-4 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/5 text-[#d4a017] text-[10px] font-bold uppercase tracking-widest mb-4">
                <Zap className="w-3 h-3" /> Monitoramento Energético Global
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                CONTROLE DE <span className="text-[#d4a017]">RECURSOS</span>.
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                Visualize a infraestrutura global de hidrocarbonetos ou mergulhe na simulação técnica de reservatórios. Ferramentas integradas para análise de risco e potencial de produção.
              </p>
            </div>
            
            <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/10">
               <button 
                onClick={() => setViewMode("2d")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === "2d" ? "bg-[#d4a017] text-[#0f0f0f]" : "text-white/40 hover:text-white"}`}
               >
                 <Globe className="w-4 h-4" /> Mapa de Bacias
               </button>
               <button 
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === "3d" ? "bg-[#d4a017] text-[#0f0f0f]" : "text-white/40 hover:text-white"}`}
               >
                 <Box className="w-4 h-4" /> Gêmeo Digital
               </button>
               <button 
                onClick={() => setViewMode("extraction")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === "extraction" ? "bg-[#d4a017] text-[#0f0f0f]" : "text-white/40 hover:text-white"}`}
               >
                 <Waves className="w-4 h-4" /> Extração
               </button>
            </div>
          </div>
          
          <div className="h-[750px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative bg-[#0f0f0f]">
             <AnimatePresence mode="wait">
               {viewMode === "2d" ? (
                 <motion.div 
                   key="2d-map-energy"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className="w-full h-full"
                 >
                   <InteractiveMap />
                 </motion.div>
               ) : viewMode === "3d" ? (
                 <motion.div 
                   key="3d-sim-energy"
                   initial={{ opacity: 0, scale: 1.02 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className="w-full h-full"
                 >
                   <GeologicalSimulation />
                 </motion.div>
               ) : (
                 <motion.div 
                   key="extraction-sim-energy"
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -50 }}
                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className="w-full h-full"
                 >
                   <OilExtractionSimulation />
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </section>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-[40px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 p-12 flex flex-col lg:flex-row gap-16 items-center"
        >
            <div className="lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Geologia de Reservatórios <br className="hidden md:block" /> em Águas Profundas.</h2>
               <p className="text-white/50 text-lg mb-10">O Pré-sal brasileiro e o Mar do Norte representam os maiores desafios tecnológicos da engenharia de petróleo atual. Entenda como operamos a 7km abaixo do nível do mar.</p>
               <button 
                 onClick={() => document.getElementById('mapa-exploracao')?.scrollIntoView({ behavior: 'smooth' })}
                 className="h-14 px-10 bg-[#d4a017] text-[#0f0f0f] font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(212,160,23,0.3)] transition-all"
                >
                 Ver Mapa de Exploração
               </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale opacity-50">
                 <img src="https://images.unsplash.com/photo-1516192535974-1378564f28c6?q=80&w=400" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[4/5] rounded-3xl overflow-hidden mt-8">
                 <img src="https://images.unsplash.com/photo-1544253167-9387e0766a5e?q=80&w=400" className="w-full h-full object-cover" />
               </div>
            </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
