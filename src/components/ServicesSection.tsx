import { useState } from 'react';
import { Smartphone, Tablet, Shield, Check, ExternalLink, CreditCard, Sparkles, MessageCircle, AlertTriangle } from 'lucide-react';
import { SERVICES_DATA, COMPANY_DATA, ServiceItem } from '../data/content';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'iphone' | 'ipad' | 'accessories'>('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'iphone':
        return <Smartphone className="w-5 h-5 text-[#3EB489]" />;
      case 'ipad':
        return <Tablet className="w-5 h-5 text-[#3EB489]" />;
      default:
        return <Shield className="w-5 h-5 text-[#3EB489]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#F5F5F5]" aria-label="Serviços e Produtos Apple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#2f8e6c] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Assistência de Precisão & Loja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2C42] tracking-tight font-display">
            Nossos Serviços e Produtos Apple
          </h2>
          <div className="w-16 h-1 bg-[#3EB489] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reparo express de excelência técnica e produtos com procedência assegurada diretamente da distribuidora Apple oficial no Brasil.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8" role="tablist" aria-label="Filtrar categorias de serviços">
            {[
              { id: 'all', label: 'Todos os Serviços' },
              { id: 'iphone', label: '📱 Linha iPhone' },
              { id: 'ipad', label: '💻 Linha iPad' },
              { id: 'accessories', label: '🛡️ Acessórios' },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#3EB489] ${
                  activeTab === tab.id
                    ? 'bg-[#1A2C42] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service: ServiceItem) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 group"
            >
              <div>
                {/* Product / Service Image with overlay tag */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.altText}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C42]/80 via-transparent to-transparent opacity-60" />
                  
                  {service.tag && (
                    <span className="absolute top-4 left-4 bg-[#1A2C42] text-emerald-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-emerald-400/20">
                      {service.tag}
                    </span>
                  )}

                  <a
                    href={service.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#1A2C42] text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 shadow-sm transition-transform hover:scale-105"
                    aria-label={`Ver foto de ${service.title} no Google Maps`}
                  >
                    <span>Foto Real</span>
                    <ExternalLink className="w-3 h-3 text-[#3EB489]" />
                  </a>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-emerald-50 text-[#3EB489]">
                      {getCategoryIcon(service.category)}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2C42] font-display">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Destaques & Diferenciais:
                  </h4>

                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#3EB489] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto">
                <a
                  href={`https://wa.me/5555991708201?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20disponibilidade%20e%20valores%20para%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1A2C42] hover:bg-[#3EB489] text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm text-sm"
                  aria-label={`Solicitar orçamento para ${service.title} no WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* PROMINENT PAYMENT HIGHLIGHT: "BOLETO NÃO!" AS REQUIRED */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1A2C42] via-[#203652] to-[#1A2C42] p-8 sm:p-10 text-white shadow-2xl border border-white/10">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3EB489]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Política de Segurança ao Cliente</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Formas de Pagamento Transparentes:{' '}
                <span className="text-red-400 underline decoration-red-500 decoration-wavy underline-offset-4">
                  Boleto NÃO!
                </span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Aqui você tem total segurança e transparência. <strong>Não emitimos nem cobramos boletos de terceiros</strong> que podem expor você a atrasos de compensação ou fraudes bancárias. Você realiza seu pagamento de forma segura na loja física ou pelos canais oficiais verificados:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-[#3EB489] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-300 block">Cartão de Crédito</span>
                    <strong className="text-sm font-semibold text-white">Até 18x no Cartão</strong>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#3EB489] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-300 block">PIX Instantâneo</span>
                    <strong className="text-sm font-semibold text-white">Desconto Real à Vista</strong>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-[#3EB489] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-300 block">Seu Usado Como Entrada</span>
                    <strong className="text-sm font-semibold text-white">Avaliação Justa</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
              <span className="text-xs uppercase tracking-widest text-[#3EB489] font-bold">Garantia Comprovada</span>
              <p className="text-xl font-bold text-white mt-1">Recibo & Laudo Técnico</p>
              <p className="text-xs text-slate-400 mt-2 mb-4">
                Toda compra e manutenção acompanha termo de garantia legal e detalhamento de serviço.
              </p>
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale Conosco via WhatsApp"
                className="inline-flex items-center gap-2 bg-[#3EB489] hover:bg-[#349e77] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg transition-transform hover:scale-105"
              >
                <span>Tirar Dúvidas de Pagamento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
