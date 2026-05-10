import { motion, AnimatePresence } from "motion/react";
import { Building2, Award, Users2, Target, X, CheckCircle2 } from "lucide-react";
import Logo from "../components/Logo";

interface AboutProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function About({ isOpen, onClose }: AboutProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-[#0f0f0f]/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="w-full max-w-7xl max-h-full overflow-y-auto bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-[40px] relative scrollbar-hide"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-[#d4a017]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="pt-16 pb-24 min-h-full">
              {/* Hero Section */}
              <section className="py-12 border-b border-white/5 relative">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
                        SOMOS UMA <br /> <span className="text-[#d4a017]">EMPRESA</span> LÍDER.
                      </h1>
                      <p className="text-white/60 text-lg leading-relaxed mb-8">
                        A GeoEnergy Explorer é uma empresa robusta e especializada em consultoria estratégica, análise de dados geológicos e supervisão técnica para a indústria de exploração mineral e de energia energética. Atuamos de ponta a ponta na cadeia de valor, oferecendo soluções tecnológicas avançadas, inteligência de mercado e expertise técnica incomparável para resolver os desafios mais complexos do setor produtivo.
                      </p>
                      <div className="flex gap-12 border-t border-white/5 pt-12">
                        <div>
                          <div className="text-3xl font-bold text-white mb-1">+10 Anos</div>
                          <div className="text-xs uppercase tracking-widest font-bold text-[#d4a017]/60">De Experiência</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white mb-1">50+</div>
                          <div className="text-xs uppercase tracking-widest font-bold text-[#d4a017]/60">Projetos Ativos</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="relative hidden lg:block">
                      <div className="absolute -inset-4 bg-[#d4a017]/20 blur-[100px] rounded-full" />
                      <div className="relative z-10 bg-black/40 rounded-[40px] border border-white/10 shadow-2xl transition-all duration-700 p-16 flex items-center justify-center aspect-square backdrop-blur-sm">
                        <Logo className="w-full h-full max-w-sm drop-shadow-[0_0_30px_rgba(212,160,23,0.5)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Detail */}
              <section className="py-24 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">O Que Fazemos de Melhor</h2>
                  <p className="text-white/40">Integramos o rigor científico da geologia com as necessidades práticas do mercado de mineração e energia.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-10 lg:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-[#d4a017]/30 transition-all">
                    <Building2 className="w-12 h-12 text-[#d4a017] mb-8" />
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Consultoria Especializada</h3>
                    <p className="text-white/50 mb-8 leading-relaxed">
                      Prestamos serviços técnicos personalizados para empresas de exploração de pequeno a grande porte. Nosso foco é a redução de risco geológico e a otimização de ativos.
                    </p>
                    <ul className="space-y-4">
                      {["Análise de Reservas", "Mapeamento Estrutural", "Geofísica de Solo", "Relatórios de Sustentabilidade"].map((s) => (
                        <li key={s} className="flex items-center gap-3 text-sm text-white/70">
                          <CheckCircle2 className="w-5 h-5 text-[#d4a017]" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-10 lg:p-12 rounded-[40px] bg-[#d4a017] text-[#0f0f0f]">
                    <Award className="w-12 h-12 text-[#0f0f0f] mb-8" />
                    <h3 className="text-2xl font-bold mb-6 tracking-tight">Treinamentos Corporativos</h3>
                    <p className="text-[#0f0f0f]/70 mb-8 leading-relaxed">
                      Desenvolvemos programas de capacitação in-company sob medida para equipes técnicas e gestores, focando na aplicação de novas tecnologias e metodologias avançadas para garantir a eficiência operacional e segurança no campo.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#0f0f0f]/10 p-4 rounded-2xl border border-[#0f0f0f]/20">
                        <div className="text-xl font-bold">120k+</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Horas Ministradas</div>
                      </div>
                      <div className="bg-[#0f0f0f]/10 p-4 rounded-2xl border border-[#0f0f0f]/20">
                        <div className="text-xl font-bold">Equipes</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Capacitadas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mission & Vision */}
              <section className="py-12 bg-white/[0.01]">
                 <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                      <Target className="w-8 h-8 text-[#d4a017] mb-4" />
                      <h4 className="text-xl font-bold text-white mb-4">Nossa Missão</h4>
                      <p className="text-white/40 text-sm leading-relaxed">Promover o desenvolvimento sustentável da indústria extrativa através de ciência aplicada e educação corporativa de ponta.</p>
                    </div>
                    <div>
                      <Users2 className="w-8 h-8 text-[#d4a017] mb-4" />
                      <h4 className="text-xl font-bold text-white mb-4">Conhecimento Global</h4>
                      <p className="text-white/40 text-sm leading-relaxed">Equipe multidisciplinar composta por doutores e profissionais com vasta experiência internacional em campo.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#d4a017]/10 border border-[#d4a017]/20">
                       <h4 className="text-xl font-bold text-[#d4a017] mb-4 text-center">Fale com um Especialista</h4>
                       <button className="w-full h-12 bg-[#d4a017] text-[#0f0f0f] rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#b58810] transition-colors">
                          Agendar Reunião
                       </button>
                    </div>
                 </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
