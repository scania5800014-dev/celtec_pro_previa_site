import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_DATA } from '../data/content';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-[#3EB489] animate-ping" />
          <span className="text-[11px] font-medium leading-tight">
            Online agora! Dúvidas sobre seu iPhone? Fale conosco!
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar mensagem de WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={COMPANY_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale Conosco via WhatsApp - Celtec.pro Santa Maria"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#3EB489] hover:bg-[#349e77] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#3EB489]/50"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
}
