import { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '../data/content';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio', aria: 'Ir para o início' },
    { name: 'Sobre Nós', href: '#sobre', aria: 'Ir para a seção Sobre Nós' },
    { name: 'Serviços', href: '#servicos', aria: 'Ir para a seção de Serviços e Produtos Apple' },
    { name: 'Simulador', href: '#simulador', aria: 'Calcular orçamento de conserto Apple' },
    { name: 'Nossa Estrutura', href: '#estrutura', aria: 'Ver fotos da nossa loja e estrutura' },
    { name: 'Localização', href: '#contato', aria: 'Ver endereço e contato em Santa Maria' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A2C42]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-[#1A2C42]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      {/* Top micro bar for Santa Maria info */}
      <div className="hidden lg:block border-b border-white/10 pb-2 mb-2 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Procedência Apple Oficial Brasil</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#3EB489]" />
              <span>Rua Dr. Bozano, 1147 - 206G - Centro, Santa Maria - RS</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#3EB489]" />
              <span>Seg a Sex: 10:00 - 18:00</span>
            </span>
            <a
              href={COMPANY_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="Acessar Instagram da Celtec.pro"
            >
              @celtec.sm
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#3EB489] rounded-lg p-1"
          aria-label="Celtec.pro - Início"
        >
          <img
            src={COMPANY_DATA.logoUrl}
            alt="Celtec.pro - Assistência Técnica Apple"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            width="160"
            height="48"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight text-lg leading-tight font-display">
              Celtec<span className="text-[#3EB489]">.pro</span>
            </span>
            <span className="text-slate-300 text-[10px] tracking-wider uppercase font-semibold">
              Santa Maria - RS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.aria}
              className="text-slate-200 hover:text-[#3EB489] px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale Conosco via WhatsApp"
            className="hidden sm:inline-flex items-center gap-2 bg-[#3EB489] hover:bg-[#349e77] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md shadow-[#3EB489]/20 transition-all hover:scale-102 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3EB489]"
          >
            <Phone className="w-4 h-4" />
            <span>Fale Conosco</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A2C42] border-b border-white/10 px-4 pt-2 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.aria}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:bg-white/10 hover:text-[#3EB489] px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale Conosco via WhatsApp"
              className="flex items-center justify-center gap-2 w-full bg-[#3EB489] text-white px-4 py-3 rounded-lg font-semibold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Chamar no WhatsApp (55) 99170-8201</span>
            </a>
            <p className="text-center text-xs text-slate-400 mt-1">
              📍 Bozano, 1147 - Sala 206G • Seg a Sex 10h às 18h
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
