import { motion } from "motion/react";
import { Globe, BookOpen, Layers, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ASSETS } from "../constants/images";

export default function Ciencias() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.EARTH_SCIENCE} 
            className="w-full h-full object-cover opacity-40 hover:opacity-80 transition-all duration-1000"
            alt="Ciências da Terra"
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
              <Globe className="w-12 h-12 text-[#d4a017]" />
              <div className="h-px w-24 bg-[#d4a017]/30" />
              <span className="text-[#d4a017] uppercase tracking-[0.3em] font-bold text-xs">Módulo 01</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              CIÊNCIAS DA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a017] to-white">TERRA</span>
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Uma imersão profunda na geologia física, processos endógenos e exógenos que moldam o nosso planeta ao longo das eras geológicas.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
            <Layers className="w-10 h-10 text-[#d4a017] mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Estrutura Interna</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Estudo do Núcleo, Manto e Crosta. Descubra como a diferenciação química formou as camadas que sustentam a vida e a dinâmica tectônica.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
            <Zap className="w-10 h-10 text-[#d4a017] mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Dinâmica Tectônica</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              O movimento incessante das placas litosféricas, zonas de subducção e a criação de cadeias montanhosas globais.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
             <BookOpen className="w-24 h-24 text-[#d4a017]/5" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Conteúdo Programático</h2>
          <div className="space-y-6">
            {[
              { t: "Cristalografia e Mineralogia", d: "Identificação de minerais através de propriedades físicas e químicas." },
              { t: "Petrologia Ígnea e Metamórfica", d: "Gênese das rochas sob condições extremas de pressão e temperatura." },
              { t: "Sedimentologia e Estratigrafia", d: "Reconstrução de paleoambientes através de sequências sedimentares." },
              { t: "Geofísica Planetária", d: "Métodos indiretos de exploração do subsolo e campo magnético." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 pb-6 border-b border-white/5 last:border-0">
                <span className="text-[#d4a017] font-mono text-lg">0{i+1}</span>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{item.t}</h4>
                  <p className="text-white/40 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
