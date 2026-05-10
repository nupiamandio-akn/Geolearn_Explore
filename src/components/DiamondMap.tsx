import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { motion, AnimatePresence } from "motion/react";
import { X, Search } from "lucide-react";

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/master/world.json";

const diamondMines = [
  // Angola
  { name: "Catoca", coordinates: [20.3, -9.4], country: "Angola" },
  { name: "Lulo", coordinates: [20.3, -9.7], country: "Angola" },
  { name: "Chitotolo", coordinates: [20.5, -9.1], country: "Angola" },
  
  // Botswana
  { name: "Jwaneng", coordinates: [24.7, -24.5], country: "Botswana" },
  { name: "Orapa", coordinates: [25.4, -21.5], country: "Botswana" },
  
  // Rússia
  { name: "Mir", coordinates: [114.0, 62.5], country: "Russia" },
  { name: "Udachnaya", coordinates: [112.3, 66.4], country: "Russia" },
  
  // Canadá
  { name: "Ekati", coordinates: [-110.5, 64.7], country: "Canada" },
  { name: "Diavik", coordinates: [-110.3, 64.5], country: "Canada" },
  
  // África do Sul
  { name: "Venetia", coordinates: [29.3, -22.4], country: "South Africa" },
  { name: "Cullinan", coordinates: [28.5, -25.6], country: "South Africa" },
  
  // RDC
  { name: "Bakwanga", coordinates: [23.6, -6.1], country: "Democratic Republic of the Congo" },
  
  // Austrália
  { name: "Argyle", coordinates: [128.4, -16.7], country: "Australia" },
];

const countryReports: Record<string, any> = {
  "Angola": {
    production: "9.5M Cts/Ano",
    quality: "Gemas Superiores",
    geology: "Craton do Congo / Chaminés Kimberlíticas",
    status: "Expansão de Cava",
    description: "Angola possui um dos maiores potenciais de crescimento do mundo, com foco no kimberlito de Catoca, a 4ª maior chaminé do planeta."
  },
  "Botswana": {
    production: "24M Cts/Ano",
    quality: "Gema Industrial/Luxo",
    geology: "Craton de Kaapvaal",
    status: "Operação Estável",
    description: "Líder global em valor de produção. Jwaneng é considerada a mina mais rica do mundo por valor de gemas extraídas."
  },
  "Russia": {
    production: "39M Cts/Ano",
    quality: "Média/Alta",
    geology: "Plataforma Siberiana",
    status: "Mineração Subterrânea",
    description: "A ALROSA domina a produção siberiana com reservas massivas em ambientes de permafrost extremo."
  },
  "Canada": {
    production: "13M Cts/Ano",
    quality: "Pureza Excepcional",
    geology: "Craton Slave",
    status: "Operações Remotas",
    description: "Conhecidos pela sustentabilidade e ética, os diamantes canadenses são extraídos sob condições árticas rigorosas."
  }
};

export default function DiamondMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMines = searchQuery.trim() === "" 
    ? diamondMines 
    : diamondMines.filter(mine => 
        mine.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        mine.country.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const countryMines = filteredMines.filter(mine => mine.country === selectedCountry);
  const report = selectedCountry ? countryReports[selectedCountry] : null;

  return (
    <div className="w-full h-full bg-[#0f0f0f] flex flex-col relative">
      <div className="p-8 border-b border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white/[0.02] gap-6 shrink-0">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Mapa Global de Exploração de Diamantes</h3>
          <p className="text-[#d4a017]/60 text-xs uppercase tracking-widest font-bold">Distribuição Mundial de Jazidas Kimberlíticas</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative group w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#d4a017] transition-colors" />
            <input
              type="text"
              placeholder="Buscar por mina ou país..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-2xl pl-11 pr-10 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4a017]/50 focus:bg-white/[0.08] transition-all w-full"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-6 bg-black/40 p-3 rounded-2xl border border-white/5 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#d4a017]" />
              <span className="text-[10px] uppercase font-bold text-white/80 tracking-wider">Mina de Diamante</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-grow w-full relative group min-h-[500px]">
        <ComposableMap
          projectionConfig={{
            rotate: [-20, 0, 0],
            scale: 200
          }}
          className="w-full h-full"
        >
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const hasMines = filteredMines.some(mine => mine.country === geo.properties.name);
                  const isSelected = selectedCountry === geo.properties.name;
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        if (hasMines) {
                          setSelectedCountry(geo.properties.name);
                          setIsReportOpen(false);
                        } else {
                          setSelectedCountry(null);
                        }
                      }}
                      fill={isSelected ? "#d4a017" : hasMines ? "#2a2a2a" : "#1a1a1a"}
                      stroke={isSelected ? "#fff" : "#333"}
                      strokeWidth={isSelected ? 1 : 0.5}
                      style={{
                        default: { outline: "none", transition: "all 0.3s", cursor: hasMines ? "pointer" : "default" },
                        hover: { fill: hasMines ? "#d4a017" : "#222", stroke: "#d4a017", strokeWidth: 0.8, outline: "none", cursor: hasMines ? "pointer" : "default" },
                        pressed: { fill: "#d46017", outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {filteredMines.map(({ name, coordinates, country }) => {
              const isFromSelected = selectedCountry === country;
              return (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                   <motion.circle
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ 
                      r: isFromSelected ? [4, 12, 4] : [2, 6, 2],
                      opacity: isFromSelected ? [0.4, 0.8, 0.4] : [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    fill={isFromSelected ? "#fff" : "#d4a017"}
                  />
                  <circle 
                    r={isFromSelected ? 4 : 2} 
                    fill={isFromSelected ? "#fff" : "#d4a017"} 
                    className={isFromSelected ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : ""}
                  />
                  <text
                    textAnchor="middle"
                    y={isFromSelected ? -15 : -10}
                    style={{ 
                      fontFamily: "Inter, sans-serif", 
                      fontSize: isFromSelected ? "10px" : "8px", 
                      fontWeight: isFromSelected ? "bold" : "normal", 
                      fill: isFromSelected ? "#fff" : "#888",
                      pointerEvents: "none",
                      filter: isFromSelected ? "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" : "none"
                    }}
                  >
                    {name}
                  </text>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        <AnimatePresence>
          {selectedCountry && (
            <motion.div 
              initial={{ x: 400, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 400, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-6 right-6 bottom-6 w-80 bg-black/90 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              <div className="p-6 bg-[#d4a017] text-black flex justify-between items-center shrink-0">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">País Selecionado</div>
                  <h4 className="font-bold text-xl tracking-tight">{selectedCountry}</h4>
                </div>
                <button 
                  onClick={() => {
                    setSelectedCountry(null);
                    setIsReportOpen(false);
                  }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-grow flex flex-col">
                <AnimatePresence mode="wait">
                  {!isReportOpen ? (
                    <motion.div
                      key="mines-list"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex flex-col flex-grow"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <Search className="w-4 h-4 text-[#d4a017]" />
                        <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Pólos Extractivos</span>
                      </div>
                      <motion.div 
                        initial="hidden"
                        animate="show"
                        variants={{
                          hidden: { opacity: 0 },
                          show: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.1
                            }
                          }
                        }}
                        className="space-y-3 flex-grow"
                      >
                        {countryMines.map(mine => (
                          <motion.div 
                            key={mine.name}
                            variants={{
                              hidden: { x: 20, opacity: 0 },
                              show: { x: 0, opacity: 1 }
                            }}
                            className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#d4a017]/30 transition-all group"
                          >
                            <div className="text-white font-bold mb-1 group-hover:text-[#d4a017] transition-colors">{mine.name}</div>
                            <div className="text-[10px] text-white/30 uppercase tracking-widest">Coordenadas: {mine.coordinates[0]}°, {mine.coordinates[1]}°</div>
                          </motion.div>
                        ))}
                      </motion.div>
                      <motion.button 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        onClick={() => setIsReportOpen(true)}
                        className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold text-white uppercase tracking-widest transition-all"
                      >
                        Ver Relatório Geológico
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="geological-report"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex flex-col flex-grow"
                    >
                      <button 
                        onClick={() => setIsReportOpen(false)}
                        className="mb-6 text-[10px] text-[#d4a017] uppercase font-bold tracking-widest flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
                      >
                        ← Voltar para Minas
                      </button>
                      
                      <motion.div 
                        initial="hidden"
                        animate="show"
                        variants={{
                          hidden: { opacity: 0 },
                          show: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.08
                            }
                          }
                        }}
                        className="space-y-6"
                      >
                        <motion.div
                          variants={{
                            hidden: { y: 10, opacity: 0 },
                            show: { y: 0, opacity: 1 }
                          }}
                        >
                          <div className="text-[10px] text-white/30 uppercase font-bold mb-2">Resumo Técnico</div>
                          <p className="text-sm text-white/70 leading-relaxed italic">
                            "{report?.description || "Dados técnicos restritos para esta região. Consulte o departamento de prospecção para mais detalhes."}"
                          </p>
                        </motion.div>
                        
                        <motion.div 
                          variants={{
                            hidden: { y: 10, opacity: 0 },
                            show: { y: 0, opacity: 1 }
                          }}
                          className="grid grid-cols-1 gap-4"
                        >
                          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-white/30 uppercase font-bold mb-1">Produção Estimada</div>
                            <div className="text-md font-bold text-white uppercase tracking-tight">{report?.production || "N/A"}</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-white/30 uppercase font-bold mb-1">Formação Geológica</div>
                            <div className="text-md font-bold text-white uppercase tracking-tight">{report?.geology || "N/A"}</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-white/30 uppercase font-bold mb-1">Qualidade das Gemas</div>
                            <div className="text-md font-bold text-[#d4a017] uppercase tracking-tight">{report?.quality || "N/A"}</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 border-l-2 border-l-blue-400">
                            <div className="text-[10px] text-white/30 uppercase font-bold mb-1">Status de Exploração</div>
                            <div className="text-md font-bold text-blue-400 uppercase tracking-tight">{report?.status || "Em Análise"}</div>
                          </div>
                        </motion.div>
                      </motion.div>
                      
                      <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="w-full mt-auto pt-8 flex items-center justify-center gap-2 text-[10px] text-white/40 hover:text-white transition-colors uppercase font-bold tracking-widest"
                      >
                        <Search className="w-3 h-3" /> Solicitar Documentação Full-Scan
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-6 right-6 bg-[#0f0f0f]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-[10px] text-white/50 flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full border border-white/20 animate-ping" />
            <span>Real-time Mining Data</span>
          </div>
          <div className="w-px h-3 bg-white/10" />
          <p>Scrolle para zoom • Arraste para mover • Clique num país com minas</p>
        </div>
      </div>
    </div>
  );
}
