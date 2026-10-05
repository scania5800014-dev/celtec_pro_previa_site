import { useState } from 'react';
import { Camera, ExternalLink, MapPin, X } from 'lucide-react';
import { STORE_GALLERY, COMPANY_DATA } from '../data/content';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  return (
    <section id="estrutura" className="py-20 bg-slate-100" aria-label="Nossa Estrutura e Galeria da Loja Física">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#2f8e6c] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Transparência em Fotos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2C42] tracking-tight font-display">
            Conheça Nossa Estrutura em Santa Maria
          </h2>
          <div className="w-16 h-1 bg-[#3EB489] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Fotos autênticas da loja física na Rua Dr. Bozano, equipamentos, vitrine e bancada de trabalho verificadas no Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORE_GALLERY.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 group flex flex-col justify-between"
            >
              <div
                className="relative h-56 overflow-hidden cursor-pointer bg-slate-200"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  width="400"
                  height="300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white bg-black/60 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm">
                    Ampliar Imagem
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-sm text-[#1A2C42] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#3EB489]" />
                    Dr. Bozano, 1147
                  </span>
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#3EB489] hover:underline"
                    aria-label={`Ver foto ${item.title} no Google Maps`}
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all on Maps link */}
        <div className="mt-10 text-center">
          <a
            href={COMPANY_DATA.googleMapsLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A2C42] hover:text-[#3EB489] bg-white border border-slate-300 px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            aria-label="Ver perfil completo e fotos no Google Maps"
          >
            <span>Ver perfil completo, fotos e rotas no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-[#3EB489]" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-[#1A2C42] rounded-2xl max-w-2xl w-full overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.altText}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-5 text-white flex justify-between items-center">
              <div>
                <h4 className="font-bold text-base">{selectedImage.title}</h4>
                <p className="text-xs text-slate-300 mt-0.5">{selectedImage.description}</p>
              </div>

              <a
                href={selectedImage.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#3EB489] hover:bg-[#349e77] text-white px-3.5 py-2 rounded-lg text-xs font-semibold shrink-0"
              >
                <span>Abrir no Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
