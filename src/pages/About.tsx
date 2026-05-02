import { motion } from "motion/react";
import { Building2, Award, Users2, Target, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-white/[0.01] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#d4a017] text-sm font-bold uppercase tracking-widest mb-12 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Voltar ao Início
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                SOMOS UMA <br /> <span className="text-[#d4a017]">CONSULTORIA</span> TÉCNICA.
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                A GeoEnergy Explorer não é apenas uma plataforma de ensino. Somos uma empresa robusta que presta consultoria estratégica e treinamentos especializados para os setores mais exigentes da indústria terrestre.
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
            
            <div className="relative">
              <div className="absolute -inset-4 bg-[#d4a017]/20 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                className="relative z-10 rounded-[40px] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                alt="Escritório de Consultoria"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 max-w-7xl mx-auto px-6"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">O Que Fazemos de Melhor</h2>
          <p className="text-white/40">Integramos o rigor científico da geologia com as necessidades práticas do mercado de mineração e energia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-[#d4a017]/30 transition-all">
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

          <div className="p-12 rounded-[40px] bg-[#d4a017] text-[#0f0f0f]">
            <Award className="w-12 h-12 text-[#0f0f0f] mb-8" />
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Treinamentos e Cursos</h3>
            <p className="text-[#0f0f0f]/70 mb-8 leading-relaxed">
              Nossa frente educacional oferece cursos e treinamentos in-company desenhados para elevar a competência técnica de geólogos e engenheiros diretamente no local de trabalho.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0f0f0f]/10 p-4 rounded-2xl border border-[#0f0f0f]/20">
                <div className="text-xl font-bold">120k+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Horas Ministradas</div>
              </div>
              <div className="bg-[#0f0f0f]/10 p-4 rounded-2xl border border-[#0f0f0f]/20">
                <div className="text-xl font-bold">Cursos</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Certificados</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 bg-white/[0.01]"
      >
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
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
               <button className="w-full h-12 bg-[#d4a017] text-[#0f0f0f] rounded-xl font-bold text-sm uppercase tracking-widest">
                  Agendar Reunião
               </button>
            </div>
         </div>
      </motion.section>
    </div>
  );
}
