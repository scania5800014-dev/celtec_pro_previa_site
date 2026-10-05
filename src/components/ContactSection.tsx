import { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Send, Navigation, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/content';

export function ContactSection() {
  const [name, setName] = useState('');
  const [device, setDevice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá Celtec.pro! Meu nome é ${name || 'Cliente'}.%0A`;
    if (device) text += `Aparelho: ${device}%0A`;
    if (message) text += `Mensagem: ${message}%0A`;
    text += `%0AGostaria de tirar uma dúvida pelo site.`;
    window.open(`https://wa.me/5555991708201?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-slate-50" aria-label="Contato e Localização">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#2f8e6c] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Estamos no Centro de Santa Maria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2C42] tracking-tight font-display">
            Visite-nos ou Fale Conosco
          </h2>
          <div className="w-16 h-1 bg-[#3EB489] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Venha tomar um café em nosso espaço climatizado na Rua Dr. Bozano ou envie uma mensagem direta no WhatsApp para resposta imediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Quick Message Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-[#1A2C42] mb-6 font-display">
                Canais de Atendimento
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-[#3EB489] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Endereço da Loja
                    </h4>
                    <p className="text-slate-800 font-semibold text-sm sm:text-base mt-0.5">
                      {COMPANY_DATA.address}
                    </p>
                    <a
                      href={COMPANY_DATA.googleMapsLocationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#3EB489] hover:underline font-medium mt-1"
                      aria-label="Abrir rotas para a Celtec.pro no Google Maps"
                    >
                      <Navigation className="w-3 h-3" />
                      Como chegar via Google Maps / Waze
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-[#3EB489] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-slate-800 font-semibold text-sm sm:text-base mt-0.5">
                      {COMPANY_DATA.businessHours}
                    </p>
                    <span className="text-xs text-slate-500">
                      Sábados e Domingos: Atendimento sob agendamento prévio.
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-[#3EB489] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp Oficial
                    </h4>
                    <p className="text-slate-800 font-semibold text-sm sm:text-base mt-0.5">
                      {COMPANY_DATA.phoneDisplay}
                    </p>
                    <a
                      href={COMPANY_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#3EB489] hover:underline font-bold mt-1"
                      aria-label="Iniciar conversa com a Celtec.pro no WhatsApp"
                    >
                      Iniciar conversa direta →
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-[#3EB489] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Instagram
                    </h4>
                    <a
                      href={COMPANY_DATA.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-semibold text-sm sm:text-base hover:text-[#3EB489] transition-colors mt-0.5 block"
                      aria-label="Acessar perfil do Instagram da Celtec.pro"
                    >
                      {COMPANY_DATA.instagramHandle}
                    </a>
                    <span className="text-xs text-slate-500">
                      Dicas diárias, novidades de estoque e reparos ao vivo.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quick WhatsApp Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200">
              <h3 className="text-lg font-bold text-[#1A2C42] mb-1 font-display">
                Envie uma Mensagem Rápida
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Preencha abaixo para abrir seu WhatsApp com a mensagem formatada.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Seu Nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-device" className="block text-xs font-semibold text-slate-700 mb-1">
                    Modelo do Aparelho (iPhone / iPad)
                  </label>
                  <input
                    id="contact-device"
                    type="text"
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    placeholder="Ex: iPhone 13 Pro 128GB"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-semibold text-slate-700 mb-1">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex: Gostaria de saber o valor para troca de bateria e se tem pronta entrega."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3EB489] hover:bg-[#349e77] text-white font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                  aria-label="Enviar mensagem no WhatsApp da Celtec.pro"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar para o WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Map Embed and Visual Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
              <div className="p-4 bg-[#1A2C42] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#3EB489]" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Localização Oficial no Mapa
                  </span>
                </div>
                <a
                  href={COMPANY_DATA.googleMapsLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#3EB489] hover:bg-[#349e77] text-white px-3 py-1 rounded-lg font-semibold transition-colors"
                  aria-label="Traçar rota no Google Maps"
                >
                  Traçar Rota
                </a>
              </div>

              {/* Embedded Google Maps iframe */}
              <div className="relative w-full h-[450px] sm:h-[500px] bg-slate-200">
                <iframe
                  title="Localização da Celtec.pro no Google Maps - Santa Maria RS"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.756317540266!2d-53.81167882377317!3d-29.687132675103683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb01061ae033%3A0x16d0badd965cc025!2sCeltec.pro%20Santa%20Maria!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <span>📍 Referência: Galeria Centro, próximo ao Calçadão de Santa Maria.</span>
                <span className="font-semibold text-[#1A2C42]">Fácil acesso a estacionamentos próximos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
