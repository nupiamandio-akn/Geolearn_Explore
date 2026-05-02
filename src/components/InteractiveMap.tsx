import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { motion } from "motion/react";

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/master/world.json";

const markers = [
  { markerOffset: -15, name: "Bacia de Campos", coordinates: [-41.0, -22.5], type: "Petróleo" },
  { markerOffset: -15, name: "Mar do Norte", coordinates: [2.0, 56.0], type: "Petróleo & Gás" },
  { markerOffset: -15, name: "Golfo do México", coordinates: [-90.0, 28.0], type: "Petróleo" },
  { markerOffset: -15, name: "Golfo Pérsico", coordinates: [50.0, 26.0], type: "Gás Natural" },
  { markerOffset: -15, name: "Ghawar", coordinates: [49.0, 25.0], type: "Petróleo" },
  { markerOffset: -15, name: "Santos (Pré-sal)", coordinates: [-45.0, -24.0], type: "Petróleo" },
  { markerOffset: -15, name: "Mar Cáspio", coordinates: [51.0, 42.0], type: "Petróleo & Gás" },
  { markerOffset: -15, name: "Delta do Níger", coordinates: [6.0, 4.5], type: "Petróleo" },
];

export default function InteractiveMap() {
  return (
    <div className="w-full bg-[#1a1a1a] rounded-[40px] border border-white/5 overflow-hidden shadow-2xl">
      <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Mapa Global de Exploração</h3>
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
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#2a2a2a"
                    stroke="#333"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#333", outline: "none" },
                      pressed: { fill: "#444", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates as [number, number]}>
                <motion.circle
                  initial={{ r: 0 }}
                  animate={{ r: 4 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  fill="#d4a017"
                  stroke="#fff"
                  strokeWidth={1}
                />
                <circle r={4} fill="#d4a017" />
                 <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontSize: "8px", 
                    fontWeight: "bold", 
                    fill: "#fff",
                    pointerEvents: "none"
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
        
        <div className="absolute bottom-4 right-4 bg-[#0f0f0f]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-[10px] text-white/50 max-w-[200px]">
          <p>Dica: Use o mouse para arrastar e o scroll para dar zoom no mapa interativo.</p>
        </div>
      </div>
    </div>
  );
}
