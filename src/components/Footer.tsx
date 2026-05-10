import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <Logo className="w-6 h-6" />
            <span className="text-lg font-bold tracking-tighter uppercase text-white">GeoEnergy Explorer</span>
          </div>
          <p className="text-white/40 max-w-sm mb-8">
            Consultoria técnica especializada e capacitação de alto nível para os setores de mineração, energia e geociências. Transformando conhecimento em valor operacional.
          </p>
        </div>
        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/50">Serviços</h5>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-[#d4a017]">Consultoria Técnica</a></li>
            <li><a href="#" className="hover:text-[#d4a017]">Treinamentos In-Company</a></li>
            <li><a href="#" className="hover:text-[#d4a017]">Mapeamento e Prospecção</a></li>
            <li><a href="#" className="hover:text-[#d4a017]">Educação Corporativa</a></li>
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
      <div className="max-w-7xl mx-auto px-6 pt-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.2em] text-white/20">
        <div>© 2026 GeoEnergy Explorer — Educando para o futuro.</div>
        <div className="flex gap-8">
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
