import { useState } from "react";
import { Home, Info, BookOpen, Gem, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import About from "../pages/About";

export default function Navigation() {
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tighter uppercase text-white">GeoEnergy <span className="text-[#d4a017]">Explorer</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
            <button onClick={() => setIsAboutOpen(true)} className="hover:text-[#d4a017] transition-colors">Sobre Nós</button>
            <Link to="/ciencias" className="hover:text-white transition-colors">Ciências</Link>
            <Link to="/minerais" className="hover:text-white transition-colors">Minerais</Link>
            <Link to="/energia" className="hover:text-white transition-colors">Energia</Link>
            <Link to="/comecar" className="bg-[#d4a017] text-[#0f0f0f] px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform flex items-center">
              Começar Agora
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around h-16 px-2">
          <Link to="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/') ? 'text-[#d4a017]' : 'text-white/50 hover:text-white'}`}>
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-wider">Home</span>
          </Link>
          <button onClick={() => setIsAboutOpen(true)} className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isAboutOpen ? 'text-[#d4a017]' : 'text-white/50 hover:text-white'}`}>
            <Info className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-wider">Sobre</span>
          </button>
          <Link to="/ciencias" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/ciencias') ? 'text-[#d4a017]' : 'text-white/50 hover:text-white'}`}>
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-wider">Ciências</span>
          </Link>
          <Link to="/minerais" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/minerais') ? 'text-[#d4a017]' : 'text-white/50 hover:text-white'}`}>
            <Gem className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-wider">Minerais</span>
          </Link>
          <Link to="/energia" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/energia') ? 'text-[#d4a017]' : 'text-white/50 hover:text-white'}`}>
            <Zap className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-wider">Energia</span>
          </Link>
        </div>
      </nav>

      {/* About Modal */}
      <About isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
}
