import { Shield, Check, ExternalLink, Star, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '../data/content';

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white" aria-label="Sobre a Celtec.pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#3EB489] text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Nossa Trajetória & Procedência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2C42] tracking-tight font-display">
            Quem Somos na Celtec.pro
          </h2>
          <div className="w-16 h-1 bg-[#3EB489] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Nascida no coração de Santa Maria - RS, a <strong>Celtec.pro</strong> foi fundada com um propósito claro: eliminar as incertezas e o medo que os usuários de Apple enfrentam ao buscar assistência e novos aparelhos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text and Credibility Points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#1A2C42] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3EB489]" />
                Procedência de Verdade: O que nos diferencia
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                No mercado de tecnologia, termos como "primeira linha" ou "original china" costumam esconder produtos de baixa durabilidade. Na Celtec.pro, nós trabalhamos <strong>exclusivamente com produtos que vêm direto da distribuidora oficial Apple no Brasil</strong>.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Nosso laboratório técnico conta com maquinário específico para Apple: prensas laminadoras a vácuo, estações de retrabalho SMD para microssoldagem, e programadores de EEPROM para manter o FaceID, TrueTone e os avisos de bateria 100% calibrados.
            </p>

            <ul className="space-y-3.5">
              {[
                "Peças certificadas com garantia comprovada em nota e laudo técnico",
                "Técnicos especializados em reparos de placa e recuperação de aparelhos",
                "Atendimento olho no olho no Centro de Santa Maria (Rua Dr. Bozano)",
                "Transparência total no diagnóstico antes de qualquer procedimento"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-[#3EB489] mt-0.5 shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm sm:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Google Rating Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_DATA.googleMapsLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1A2C42] hover:bg-[#122030] text-white px-5 py-3 rounded-xl transition-all shadow-md group"
                aria-label="Ver avaliações da Celtec.pro no Google Maps"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-left text-xs">
                  <span className="font-bold block text-sm">5.0 Estrelas no Google</span>
                  <span className="text-slate-300 flex items-center gap-1 group-hover:text-emerald-300">
                    Ver no Google Maps <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>

              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Visite nossa loja:</span>
                <br />
                Rua Dr. Bozano, 1147 - Sala 206G
              </div>
            </div>
          </div>

          {/* Media Visual with Store Photos & Google Maps reference */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              {/* Outer decorative card */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#1A2C42] to-[#3EB489] rounded-3xl opacity-20 blur-lg transform -rotate-1" />

              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q2GNa-lCZs-y0wJD0ScK3ho2HeOgFTbUCnT4UYH_c4YJuLJ6EYNuKF-AT1R1Bgm9pIfUs5lE-3DRKTN2MJLZUKCaPGlnaigxpjYhLdnQWjE9bLdPVhQXzUDSGqiElS1rFpapCcqeZKxnKO=w800-h600-k-no"
                  alt="Interior acolhedor e moderno da loja Celtec.pro em Santa Maria"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  width="800"
                  height="600"
                />

                <div className="p-5 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-base text-[#1A2C42]">Nosso Espaço Físico em Santa Maria</h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#3EB489]" />
                        Rua Dr. Bozano, 1147 - Sala 206G - Galeria Centro
                      </p>
                    </div>
                    <a
                      href="https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6868927,-53.809557,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhB8FE6OpyJHsTkrEGVhHXEE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9Q2GNa-lCZs-y0wJD0ScK3ho2HeOgFTbUCnT4UYH_c4YJuLJ6EYNuKF-AT1R1Bgm9pIfUs5lE-3DRKTN2MJLZUKCaPGlnaigxpjYhLdnQWjE9bLdPVhQXzUDSGqiElS1rFpapCcqeZKxnKO%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sloja+de+iphone!3m7!1s0x9503cb01061ae033:0x16d0badd965cc025!8m2!3d-29.6871327!4d-53.8094901!10e5!15sCg5sb2phIGRlIGlwaG9uZVoQIg5sb2phIGRlIGlwaG9uZZIBEGNlbGxfcGhvbmVfc3RvcmWaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVaTTJKWGJIZE9SM0IxVGpKb05XTXllRU5SVkZKTVZqSk9kMDR4UlJBQuABAPoBBAgAECA!16s%2Fg%2F11y0763zfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A2C42] hover:text-[#3EB489] bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
                      aria-label="Abrir foto do interior no Google Maps"
                    >
                      <span>Ver no Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Procedência Oficial 100% */}
            <div className="bg-gradient-to-br from-[#1A2C42] to-[#253e5e] p-6 rounded-2xl text-white shadow-lg border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[#3EB489] font-bold text-2xl font-display">100% Procedência Oficial</span>
                <p className="text-sm font-semibold text-slate-100 mt-1">
                  Compramos direto da distribuidora homologada Apple no Brasil.
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Todos os aparelhos e peças possuem laudo e garantia com suporte presencial em Santa Maria.
                </p>
              </div>
              <div className="shrink-0 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl text-xs font-semibold">
                ✓ Garantia e Suporte Local
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
