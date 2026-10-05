import { useState } from 'react';
import { Phone, Instagram, MapPin, Clock, ShieldCheck, Heart, X, ExternalLink } from 'lucide-react';
import { COMPANY_DATA } from '../data/content';

export function Footer() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <footer className="bg-[#101d2d] text-slate-300 pt-16 pb-8 border-t border-white/10" aria-label="Rodapé do site">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_DATA.logoUrl}
                alt="Celtec.pro - Assistência Técnica Apple"
                className="h-10 w-auto object-contain brightness-110"
                width="160"
                height="48"
              />
              <span className="text-white font-bold tracking-tight text-xl font-display">
                Celtec<span className="text-[#3EB489]">.pro</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {COMPANY_DATA.slogan} Loja e assistência técnica especializada Apple com procedência garantida e atendimento técnico de precisão em Santa Maria - RS.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-emerald-400 text-xs">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Distribuidora Oficial Apple Brasil</span>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#3EB489] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram da Celtec.pro"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#3EB489] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="WhatsApp da Celtec.pro"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menus: Serviços */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Serviços Apple
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="hover:text-[#3EB489] transition-colors" aria-label="Ver serviços para iPhone">
                  📱 Linha iPhone (Reparo & Venda)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#3EB489] transition-colors" aria-label="Ver serviços para iPad">
                  💻 Linha iPad (Telas & Portas)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#3EB489] transition-colors" aria-label="Ver acessórios Apple">
                  🛡️ Acessórios & Capas MagSafe
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#3EB489] transition-colors" aria-label="Calcular orçamento online">
                  ⚡ Simulador de Orçamento
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#3EB489] transition-colors" aria-label="Troca com avaliação justa">
                  🔄 Troca de Aparelhos Apple
                </a>
              </li>
            </ul>
          </div>

          {/* Menus: Institucional */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#sobre" className="hover:text-[#3EB489] transition-colors" aria-label="Conheça a história da Celtec.pro">
                  Sobre a Celtec.pro
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-[#3EB489] transition-colors" aria-label="Ver fotos da nossa loja e estrutura">
                  Nossa Estrutura em Santa Maria
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#3EB489] transition-colors" aria-label="Simular orçamento online">
                  Simulador de Orçamento
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPrivacyModalOpen(true)}
                  className="hover:text-[#3EB489] transition-colors text-left"
                  aria-label="Abrir Política de Privacidade"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Informações de Contato & Localização */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Loja Santa Maria
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#3EB489] shrink-0 mt-0.5" />
                <span>Rua Dr. Bozano, 1147 - Sala 206G - Centro, Santa Maria - RS, 90015-003</span>
              </p>

              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#3EB489] shrink-0 mt-0.5" />
                <span>Segunda a Sexta: 10:00 às 18:00</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3EB489] shrink-0" />
                <span>(55) 99170-8201</span>
              </p>

              <div className="pt-2">
                <a
                  href={COMPANY_DATA.googleMapsLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#3EB489] hover:underline font-semibold"
                  aria-label="Ver mapa e rotas no Google Maps"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Celtec.pro - Todos os direitos reservados. Santa Maria - RS.</p>
          <p className="flex items-center gap-1">
            <span>Assistência Especializada Apple • Procedência Garantida</span>
          </p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#1A2C42] border border-white/20 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl relative">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Fechar Política de Privacidade"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 id="privacy-title" className="text-xl font-bold font-display mb-3">
              Política de Privacidade e Transparência
            </h3>

            <div className="text-xs text-slate-300 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                A <strong>Celtec.pro - Santa Maria</strong> preza pela segurança, confidencialidade e integridade dos dados de seus clientes.
              </p>
              <p>
                1. <strong>Privacidade de Dados em Aparelhos:</strong> Ao receber um iPhone ou iPad para manutenção física ou de software, nosso laboratório adota protocolo de inviolabilidade de arquivos pessoais, fotos e conversas.
              </p>
              <p>
                2. <strong>Backup & iCloud:</strong> Recomendamos sempre a realização de backup prévio. Caso o cliente solicite auxílio técnico, o processo é conduzido sob supervisão direta e com credenciais exclusivas do cliente.
              </p>
              <p>
                3. <strong>Formas de Pagamento e Fraudes:</strong> Como reforçado em nossa política ("Boleto NÃO!"), não compartilhamos dados bancários nem emitimos boletos de terceiros não autenticados.
              </p>
              <p>
                4. <strong>Contato:</strong> Quaisquer dúvidas sobre privacidade podem ser tratadas diretamente com nossa gerência na Rua Dr. Bozano, 1147 - Sala 206G, Santa Maria - RS.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="bg-[#3EB489] hover:bg-[#349e77] text-white px-4 py-2 rounded-xl text-xs font-semibold"
              >
                Entendi e Concordo
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
