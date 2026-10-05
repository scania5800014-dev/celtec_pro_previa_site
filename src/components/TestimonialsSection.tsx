import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, COMPANY_DATA } from '../data/content';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" aria-label="Avaliações de Clientes em Santa Maria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#2f8e6c] text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#2f8e6c]" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2C42] tracking-tight font-display">
            A Opinião de Quem Confia na Celtec.pro
          </h2>
          <div className="w-16 h-1 bg-[#3EB489] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Veja o que dizem nossos clientes de Santa Maria e região sobre a rapidez do atendimento e a procedência dos aparelhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <MessageSquareQuote className="absolute top-6 right-6 w-8 h-8 text-slate-300 opacity-60" />

              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#1A2C42] flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3EB489]" />
                  </h3>
                  <span className="text-xs text-slate-500">{t.role}</span>
                </div>
                <span className="text-[11px] text-slate-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-100 px-5 py-3 rounded-2xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-700">
              Quer ver mais de dezenas de avaliações verificadas?
            </span>
            <a
              href={COMPANY_DATA.googleMapsLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#3EB489] hover:underline"
              aria-label="Abrir avaliações no Google Maps"
            >
              Abrir Avaliações no Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
