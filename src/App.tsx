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
  ChevronDown
} from "lucide-react";
import { ASSETS } from "./constants/images";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans selection:bg-[#d4a017] selection:text-[#0f0f0f]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="text-[#d4a017] w-8 h-8" />
            <span className="text-xl font-bold tracking-tighter uppercase">GeoLearn <span className="text-[#d4a017]">Explorer</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
            <a href="#ciencias" className="hover:text-white transition-colors">Ciências</a>
            <a href="#minerais" className="hover:text-white transition-colors">Minerais</a>
            <a href="#energia" className="hover:text-white transition-colors">Energia</a>
            <button className="bg-[#d4a017] text-[#0f0f0f] px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform">
              Começar Agora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
              <Zap className="w-3 h-3" /> Educação Geológica de Elite
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
              DOMINE AS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a017] to-orange-400">GEOCIÊNCIAS</span> DO FUTURO.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
              Explore o ciclo da terra, técnicas avançadas de mineração e a complexidade do setor de energia em uma plataforma técnica e profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-14 px-8 bg-[#d4a017] text-[#0f0f0f] font-bold rounded-xl flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(212,160,23,0.3)] transition-all">
                Iniciar Aprendizado <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-14 px-8 border border-white/10 hover:bg-white/5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                Módulos Técnicos
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              id={pillar.id}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#d4a017]/30 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a017]/5 blur-3xl group-hover:bg-[#d4a017]/20 transition-all rounded-full -mr-16 -mt-16" />
              <pillar.icon className="w-12 h-12 text-[#d4a017] mb-6" />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{pillar.title}</h3>
              <p className="text-white/50 leading-relaxed mb-8">
                {pillar.description}
              </p>
              <img 
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-56 object-cover rounded-2xl mb-8 group-hover:scale-105 transition-transform duration-500 shadow-xl"
                referrerPolicy="no-referrer"
              />
              <ul className="space-y-3">
                {pillar.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1 h-1 rounded-full bg-[#d4a017]" /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
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
      </section>

      {/* Explorartion Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
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
                    <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Globe className="text-[#d4a017] w-6 h-6" />
              <span className="text-lg font-bold tracking-tighter uppercase">GeoLearn Explorer</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              Capacitando a próxima geração de geocientistas, engenheiros de minas e especialistas em energia através da tecnologia e conhecimento técnico.
            </p>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/50">Recursos</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-[#d4a017]">Cursos Gratuitos</a></li>
              <li><a href="#" className="hover:text-[#d4a017]">Certificações</a></li>
              <li><a href="#" className="hover:text-[#d4a017]">E-books</a></li>
              <li><a href="#" className="hover:text-[#d4a017]">Comunidade</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/50">Newsletter</h5>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu email acadêmico" 
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:border-[#d4a017]/50"
              />
              <button className="absolute right-2 top-2 h-8 px-4 bg-[#d4a017] text-[#0f0f0f] rounded-lg text-xs font-bold">
                Assinar
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 flex flex-col md:row items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.2em] text-white/20">
          <div>© 2026 GeoLearn Explorer — Educando para o futuro.</div>
          <div className="flex gap-8">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const pillars = [
  {
    id: "ciencias",
    title: "Ciências da Terra",
    description: "Estudo detalhado da dinâmica planetária, sismicidade e a evolução geológica global.",
    icon: Globe,
    image: ASSETS.EARTH_SCIENCE,
    features: ["Tectónica de Placas", "Ciclo das Rochas", "Geologia Estrutural"]
  },
  {
    id: "minerais",
    title: "Exploração Mineral",
    description: "Técnicas de mineração em larga escala e prospecção de minerais industriais.",
    icon: Pickaxe,
    image: ASSETS.MINERAL_EXPLORATION,
    features: ["Amostragem de Solo", "Métodos Geofísicos", "Operação de Minas"]
  },
  {
    id: "energia",
    title: "Petróleo & Gás",
    description: "Sistemas complexos de extração offshore e geologia de reservatórios de hidrocarbonetos.",
    icon: Droplets,
    image: ASSETS.OIL_AND_GAS,
    features: ["Geologia de Reservatório", "Perfuração Offshore", "Refino Comercial"]
  }
];
