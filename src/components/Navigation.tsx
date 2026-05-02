import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Globe className="text-[#d4a017] w-8 h-8" />
          <span className="text-xl font-bold tracking-tighter uppercase text-white">GeoEnergy <span className="text-[#d4a017]">Explorer</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
          <Link to="/sobre" className="hover:text-[#d4a017] transition-colors">Sobre Nós</Link>
          <Link to="/ciencias" className="hover:text-white transition-colors">Ciências</Link>
          <Link to="/minerais" className="hover:text-white transition-colors">Minerais</Link>
          <Link to="/energia" className="hover:text-white transition-colors">Energia</Link>
          <Link to="/comecar" className="bg-[#d4a017] text-[#0f0f0f] px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform flex items-center">
            Começar Agora
          </Link>
        </div>
      </div>
    </nav>
  );
}
