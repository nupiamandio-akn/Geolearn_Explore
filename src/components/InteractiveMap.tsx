import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { motion, AnimatePresence } from "motion/react";
import { X, Zap, BarChart3 } from "lucide-react";

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/master/world.json";

const markers = [
  { markerOffset: -15, name: "Bacia de Campos", coordinates: [-41.0, -22.5], type: "Petróleo", country: "Brazil" },
  { markerOffset: -15, name: "Mar do Norte", coordinates: [2.0, 56.0], type: "Petróleo & Gás", country: "United Kingdom" },
  { markerOffset: -15, name: "Golfo do México", coordinates: [-90.0, 28.0], type: "Petróleo", country: "United States of America" },
  { markerOffset: -15, name: "Ghawar", coordinates: [49.0, 25.0], type: "Petróleo", country: "Saudi Arabia" },
  { markerOffset: -15, name: "Santos (Pré-sal)", coordinates: [-45.0, -24.0], type: "Petróleo", country: "Brazil" },
  { markerOffset: -15, name: "Delta do Níger", coordinates: [6.0, 4.5], type: "Petróleo", country: "Nigeria" },
];

const energyReports: Record<string, any> = {
  "Brazil": {
    production: "3.2M bbl/dia",
    reserves: "14.8 Bilhões bbl",
    type: "Extração Offshore Profunda",
    status: "Expansão de FPSO",
    description: "O pré-sal brasileiro é uma das fronteiras exploratórias mais produtivas do mundo, utilizando tecnologia de ponta em águas ultraprofundas."
  },
  "Saudi Arabia": {
    production: "10.5M bbl/dia",
    reserves: "267 Bilhões bbl",
    type: "Onshore Convencional",
    status: "Eficiência Máxima",
    description: "Reservas massivas com o menor custo de extração global. Ghawar permanece como o pilar da produção mundial."
  },
  "United States of America": {
    production: "12.8M bbl/dia",
    reserves: "68 Bilhões bbl",
    type: "Tight Oil / Shale",
    status: "Tecnologia Fracking",
    description: "Líder em produção total devido à revolução do xisto, com foco em bacias como Permian e Bakken."
  }
};

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const countryMarkers = markers.filter(m => m.country === selectedCountry);
  const report = selectedCountry ? energyReports[selectedCountry] : null;

  return (
    <div className="w-full bg-[#1a1a1a] rounded-[40px] border border-white/5 overflow-hidden shadow-2xl relative">
      <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center bg-white/[0.02] gap-4 shrink-0">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Mapa Global de Exploração Energética</h3>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Principais Sítios de Atividade 2026</p>
        </div>
        <div className="flex gap-4">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-[#d4a017]" />
             <span className="text-[10px] uppercase font-bold text-white/60">Ativo</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-orange-500" />
             <span className="text-[10px] uppercase font-bold text-white/60">Expansão</span>
           </div>
        </div>
      </div>
      
      <div className="h-[500px] w-full relative">
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147
          }}
          className="w-full h-full"
        >
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const hasActivity = markers.some(m => m.country === geo.properties.name);
                  const isSelected = selectedCountry === geo.properties.name;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        if (hasActivity) {
                          setSelectedCountry(geo.properties.name);
                          setIsReportOpen(false);
                        } else {
                          setSelectedCountry(null);
                        }
                      }}
                      fill={isSelected ? "#d4a017" : hasActivity ? "#333" : "#222"}
                      stroke="#444"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none", transition: "all 0.3s", cursor: hasActivity ? "pointer" : "default" },
                        hover: { fill: hasActivity ? "#d4a017" : "#333", outline: "none", cursor: hasActivity ? "pointer" : "default" },
                        pressed: { fill: "#444", outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset, country }) => {
              const isFromSelected = selectedCountry === country;
              return (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                  <motion.circle
                    initial={{ r: 0 }}
                    animate={{ r: isFromSelected ? [4, 8, 4] : 4 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    fill={isFromSelected ? "#fff" : "#d4a017"}
                    stroke={isFromSelected ? "#fff" : "#fff"}
                    strokeWidth={1}
                  />
                  <circle r={isFromSelected ? 4 : 2} fill={isFromSelected ? "#fff" : "#d4a017"} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ 
                      fontFamily: "Inter, sans-serif", 
                      fontSize: isFromSelected ? "10px" : "8px", 
                      fontWeight: "bold", 
                      fill: isFromSelected ? "#fff" : "#888",
                      pointerEvents: "none"
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
              className="absolute top-4 right-4 bottom-4 w-72 bg-black/90 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              <div className="p-5 bg-white/5 border-b border-white/10 flex justify-between items-center shrink-0">
                <div>
                  <div className="text-[9px] uppercase font-bold tracking-widest text-[#d4a017]">Área Reservada</div>
                  <h4 className="font-bold text-lg tracking-tight text-white">{selectedCountry}</h4>
                </div>
                <button 
                  onClick={() => {
                    setSelectedCountry(null);
                    setIsReportOpen(false);
                  }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="p-5 overflow-y-auto flex-grow flex flex-col">
                <AnimatePresence mode="wait">
                  {!isReportOpen ? (
                    <motion.div
                      key="sites-list"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="flex flex-col flex-grow"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-4 h-4 text-[#d4a017]" />
                        <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Unidades de Extração</span>
                      </div>
                      <motion.div 
                        initial="hidden"
                        animate="show"
                        variants={{
                          hidden: { opacity: 0 },
                          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="space-y-2 flex-grow"
                      >
                        {countryMarkers.map(marker => (
                          <motion.div 
                            key={marker.name}
                            variants={{ hidden: { opacity: 0, x: 10 }, show: { opacity: 1, x: 0 } }}
                            className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
                          >
                            <div className="text-sm font-bold text-white mb-1">{marker.name}</div>
                            <div className="text-[9px] text-white/30 uppercase tracking-widest">{marker.type}</div>
                          </motion.div>
                        ))}
                      </motion.div>
                      <button 
                        onClick={() => setIsReportOpen(true)}
                        className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-bold text-white uppercase tracking-widest transition-all"
                      >
                        Ver Balanço Energético
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="energy-report"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex flex-col flex-grow"
                    >
                      <button 
                        onClick={() => setIsReportOpen(false)}
                        className="mb-4 text-[9px] text-[#d4a017] uppercase font-bold tracking-widest flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
                      >
                        ← Voltar para Sítios
                      </button>
                      
                      <div className="space-y-4">
                        <div className="p-3 rounded-xl bg-[#d4a017]/5 border border-[#d4a017]/20">
                           <div className="text-[9px] text-[#d4a017] uppercase font-bold mb-1">Capacidade de Produção</div>
                           <div className="text-lg font-bold text-white tracking-tight">{report?.production || "N/A"}</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                             <span className="text-[10px] text-white/40 uppercase">Reservas</span>
                             <span className="text-[10px] font-bold text-white">{report?.reserves || "N/A"}</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                             <span className="text-[10px] text-white/40 uppercase">Status</span>
                             <span className="text-[10px] font-bold text-green-400">{report?.status || "Operando"}</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-white/60 leading-relaxed italic">
                          "{report?.description || "Análise técnica em processamento..."}"
                        </p>
                      </div>
                      
                      <button className="w-full mt-auto pt-6 flex items-center justify-center gap-2 text-[9px] text-white/40 hover:text-white transition-colors uppercase font-bold tracking-widest">
                        <BarChart3 className="w-3 h-3" /> Exportar Dados de Vazão
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="absolute bottom-4 right-4 bg-[#0f0f0f]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-[10px] text-white/50 max-w-[200px]">
          <p>Scrolle para zoom • Arraste para mover • Clique num país com atividade</p>
        </div>
      </div>
    </div>
  );
}
