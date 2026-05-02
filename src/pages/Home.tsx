import { motion } from "motion/react";
import { 
  Globe, 
  Pickaxe, 
  Droplets, 
  Search, 
  BookOpen, 
  ArrowRight, 
  Map as MapIcon, 
  Layers, 
  Zap,
  ChevronDown,
  CheckCircle2
} from "lucide-react";
import { ASSETS } from "../constants/images";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.HERO_BG} 
            alt="Terra Formations"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/5 text-[#d4a017] text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" /> Processo Físico de Mineração e Produção de Petróleo e Gás
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
              DOMINADO AS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a017] to-orange-400">GEOCIÊNCIAS</span> DO FUTURO.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
              Somos uma consultoria técnica especializada. Explore o ciclo da terra, técnicas avançadas de mineração e a complexidade do setor de energia com nossos experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/comecar" className="h-14 px-8 bg-[#d4a017] text-[#0f0f0f] font-bold rounded-xl flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(212,160,23,0.3)] transition-all">
                Solicitar Consultoria <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="h-14 px-8 border border-white/10 hover:bg-white/5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                Catálogo de Cursos
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Main Pillars */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#d4a017]/30 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a017]/5 blur-3xl group-hover:bg-[#d4a017]/20 transition-all rounded-full -mr-16 -mt-16" />
              <pillar.icon className="w-12 h-12 text-[#d4a017] mb-6" />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{pillar.title}</h3>
              <p className="text-white/50 leading-relaxed mb-8">
                {pillar.description}
              </p>
              <Link to={pillar.link}>
                <img 
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-56 object-cover rounded-2xl mb-8 group-hover:scale-105 transition-transform duration-500 shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <ul className="space-y-3 mb-8">
                {pillar.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1 h-1 rounded-full bg-[#d4a017]" /> {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to={pillar.link}
                className="inline-flex items-center gap-2 text-[#d4a017] font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all"
              >
                Acessar Módulo <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 border-y border-white/5 bg-white/[0.01]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Estudantes Ativos", value: "15k+" },
              { label: "Módulos de Curso", value: "450+" },
              { label: "Laboratórios Virtuais", value: "12" },
              { label: "Países Alcançados", value: "34" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-white mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-[#d4a017]/60 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Explorartion Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#d4a017]/20 to-transparent blur-3xl opacity-50" />
            <img 
              src={ASSETS.EXPERTO_ENGINEER} 
              alt="Engenheiro Técnico Geológico" 
              className="rounded-3xl relative z-10 hover:grayscale-0 transition-all duration-700 aspect-square object-cover border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 -right-10 bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 z-20 hidden md:block shadow-2xl">
              <div className="flex items-center gap-4">
                <Search className="w-10 h-10 text-[#d4a017]" />
                <div>
                  <div className="text-sm uppercase tracking-widest font-bold opacity-50 mb-1">Especialista Ativo</div>
                  <div className="text-xl font-bold">Engenheiro Geotécnico</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-white">
              APRENDA COM OS <br /> <span className="text-[#d4a017]">MELHORES EXPERTS</span> DO CAMPO.
            </h2>
            <div className="space-y-8">
              {[
                { icon: MapIcon, title: "Mapeamento Cartográfico", desc: "Aprenda a ler a superfície terrestre através de tecnologias de satélite e GIS." },
                { icon: Layers, title: "Análise Estratigráfica", desc: "Entenda a história do nosso planeta através do estudo detalhado das camadas rochosas." },
                { icon: BookOpen, title: "Gestão Sustentável", desc: "Explore como extrair recursos de forma ética e com o menor impacto ambiental possível." },
              ].map(item => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#d4a017]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight text-white">{item.title}</h4>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

const pillars = [
  {
    link: "/ciencias",
    title: "Ciências da Terra",
    description: "Estudo detalhado da dinâmica planetária, sismicidade e a evolução geológica global.",
    icon: Globe,
    image: ASSETS.EARTH_SCIENCE,
    features: ["Tectónica de Placas", "Ciclo das Rochas", "Geologia Estrutural"]
  },
  {
    link: "/minerais",
    title: "Exploração Mineral",
    description: "Técnicas de mineração em larga escala e prospecção de minerais industriais.",
    icon: Pickaxe,
    image: ASSETS.MINERAL_EXPLORATION,
    features: ["Amostragem de Solo", "Métodos Geofísicos", "Operação de Minas"]
  },
  {
    link: "/energia",
    title: "Petróleo & Gás",
    description: "Sistemas complexos de extração offshore e geologia de reservatórios de hidrocarbonetos.",
    icon: Droplets,
    image: ASSETS.OIL_AND_GAS,
    features: ["Geologia de Reservatório", "Perfuração Offshore", "Refino Comercial"]
  }
];
