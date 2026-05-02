import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star, Users, Award, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 max-w-7xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#d4a017] text-sm font-bold uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar ao Início
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-8">
              SUA JORNADA NAS <br /> <span className="text-[#d4a017]">GEOCIÊNCIAS</span> COMEÇA AQUI.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl">
              Escolha seu nível de experiência e tenha acesso imediato aos nossos mapas interativos, aulas técnicas e simuladores de campo.
            </p>

            <div className="space-y-6">
              {[
                { title: "Plano Acadêmico", price: "Grátis", features: ["Acesso a 5 módulos", "Comunidade Discord", "Certificados Digitais"] },
                { title: "Plano Profissional", price: "Premium", features: ["Todos os módulos liberados", "Simuladores 3D", "Mentoria com Experts", "Acesso Offline"] }
              ].map((plan, i) => (
                <div key={i} className={`p-8 rounded-3xl border transition-all ${i === 1 ? 'bg-[#d4a017]/5 border-[#d4a017]/30' : 'bg-white/[0.02] border-white/5'}`}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                    <span className="text-[#d4a017] font-bold uppercase tracking-widest text-xs">{plan.price}</span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-[#d4a017]" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full h-12 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${i === 1 ? 'bg-[#d4a017] text-[#0f0f0f]' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                    Selecionar Plano
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-[#1a1a1a] border border-white/5 rounded-[40px] p-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a017]/5 blur-[100px] -mr-32 -mt-32" />
              
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Registro Rápido</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-1">Nome Completo</label>
                  <input type="text" placeholder="Geólogo Silva" className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:border-[#d4a017]/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-1">E-mail Institucional</label>
                  <input type="email" placeholder="nome@universidade.edu" className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:border-[#d4a017]/50" />
                </div>
                <div className="space-y-2 pb-4">
                  <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-1">Área de Interesse</label>
                  <select className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm appearance-none focus:outline-none focus:border-[#d4a017]/50 text-white/60">
                    <option>Mineração</option>
                    <option>Petróleo e Gás</option>
                    <option>Geologia Estrutural</option>
                  </select>
                </div>
                <button className="w-full h-14 bg-[#d4a017] text-[#0f0f0f] font-bold rounded-2xl flex items-center justify-center gap-2 group hover:shadow-[0_0_30px_rgba(212,160,23,0.3)] transition-all">
                  Criar Conta <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Star, val: "4.9/5", sub: "Avaliação" },
                    { icon: Users, val: "12k+", sub: "Alunos" },
                    { icon: Award, val: "Global", sub: "Status" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon className="w-5 h-5 text-[#d4a017] mx-auto mb-2" />
                      <div className="text-sm font-bold text-white">{stat.val}</div>
                      <div className="text-[10px] uppercase text-white/30 font-bold tracking-widest">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
