import { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  MessageSquare, 
  ArrowDown, 
  Award, 
  Zap, 
  CheckCircle2, 
  Play, 
  Pause, 
  Volume2, 
  Volume1, 
  VolumeX, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { COMPANY_DATA } from '../data/content';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.05); // Volume inicial em 5%
  const [isMuted, setIsMuted] = useState(false);
  const [needsUserInteractionForAudio, setNeedsUserInteractionForAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Configuração de loop contínuo e volume inicial a 5%
    video.loop = true;
    video.volume = 0.05;

    // Tentativa de autoplay com áudio a 5%
    const attemptAutoplay = async () => {
      try {
        video.muted = false;
        await video.play();
        setIsPlaying(true);
        setIsMuted(false);
        setNeedsUserInteractionForAudio(false);
      } catch {
        // Se o navegador barrar o áudio sem interação prévia, toca automaticamente no mudo
        // e ativa o som a 5% na primeira interação do usuário na página
        video.muted = true;
        setIsMuted(true);
        setNeedsUserInteractionForAudio(true);
        try {
          await video.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    };

    attemptAutoplay();

    // Ativação automática do som a 5% na primeira interação (clique ou toque na página)
    const handleFirstInteraction = () => {
      if (videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.05;
        setIsMuted(false);
        setNeedsUserInteractionForAudio(false);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      if (video.duration) setDuration(video.duration);
    };

    // Garantir loop contínuo caso o atributo loop do navegador falhe
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
      if (needsUserInteractionForAudio) {
        enableAudio();
      }
    }
  };

  const enableAudio = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = volume > 0 ? volume : 0.05;
    setIsMuted(false);
    setNeedsUserInteractionForAudio(false);
  };

  const handleVolumeChange = (newVol: number) => {
    const video = videoRef.current;
    if (!video) return;
    setVolume(newVol);
    video.volume = newVol;
    if (newVol === 0) {
      video.muted = true;
      setIsMuted(true);
    } else {
      video.muted = false;
      setIsMuted(false);
      setNeedsUserInteractionForAudio(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      video.volume = volume > 0 ? volume : 0.05;
      setNeedsUserInteractionForAudio(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 bg-[#1A2C42]"
      aria-label="Apresentação Celtec.pro Santa Maria"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2C42]/95 via-[#1A2C42]/90 to-[#101d2d] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3EB489]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Column 1: Title, Credibility & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Credibility Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-[#3EB489] text-xs sm:text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#3EB489]" />
              <span>{COMPANY_DATA.credibilityStatement}</span>
            </div>

            {/* THE ONLY H1 ON THE ENTIRE PAGE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] font-display">
              Celtec.pro: Sua Assistência Técnica Apple e Loja Premium em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EB489] via-emerald-300 to-teal-200">
                Santa Maria - RS
              </span>
            </h1>

            {/* Secondary Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {COMPANY_DATA.slogan} Produtos Apple direto da distribuidora oficial no Brasil. Especialistas em{' '}
              <strong className="text-white font-medium">iPhone</strong>,{' '}
              <strong className="text-white font-medium">iPad</strong> e{' '}
              <strong className="text-white font-medium">Acessórios Originais</strong>.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale Conosco via WhatsApp"
                className="inline-flex items-center justify-center gap-3 bg-[#3EB489] hover:bg-[#349e77] text-white px-7 py-4 rounded-xl font-bold text-base shadow-xl shadow-[#3EB489]/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#3EB489]/40"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Fale Conosco via WhatsApp</span>
              </a>

              <a
                href="#servicos"
                aria-label="Ver Serviços e Produtos Apple"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-4 rounded-xl font-semibold text-base backdrop-blur-sm transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Wrench className="w-5 h-5 text-[#3EB489]" />
                <span>Ver Serviços & Produtos</span>
              </a>
            </div>

            {/* Highlights Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              <div className="glass-panel p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#3EB489]/20 text-[#3EB489] shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-xs sm:text-sm">Reparos Express</h2>
                  <p className="text-slate-300 text-[11px] mt-0.5">
                    Troca de tela e bateria em até 40min.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#3EB489]/20 text-[#3EB489] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-xs sm:text-sm">Procedência 100%</h2>
                  <p className="text-slate-300 text-[11px] mt-0.5">
                    Distribuidora oficial Apple Brasil.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#3EB489]/20 text-[#3EB489] shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-xs sm:text-sm">Boleto NÃO!</h2>
                  <p className="text-slate-300 text-[11px] mt-0.5">
                    Cartão até 18x e PIX com desconto.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Video Player in Original Format (9:16 Portrait) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Phone Bezel Container in Original 9:16 Aspect Ratio */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-[36px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl shadow-black/60 border-2 border-slate-600/50">
              
              {/* Dynamic Island / Speaker notch simulation */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700" />
              </div>

              {/* Video Screen Frame */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/video-celtec.mp4"
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                  aria-label="Vídeo oficial de aparelhos e estrutura Celtec.pro"
                >
                  <source src="/video-celtec.mp4" type="video/mp4" />
                </video>

                {/* Big Center Play Button when paused */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/70 hover:bg-[#3EB489] text-white flex items-center justify-center shadow-2xl backdrop-blur-sm transition-all transform hover:scale-110 z-20"
                    aria-label="Reproduzir vídeo"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </button>
                )}

                {/* Audio Enable Overlay Banner (If browser blocked audio autoplay) */}
                {needsUserInteractionForAudio && (
                  <button
                    type="button"
                    onClick={enableAudio}
                    className="absolute top-12 left-3 right-3 z-30 bg-[#3EB489]/95 hover:bg-[#349e77] text-white text-xs font-semibold py-2 px-3 rounded-xl shadow-lg flex items-center justify-center gap-2 backdrop-blur-sm transition-transform hover:scale-102"
                    aria-label="Ativar som do vídeo a 5%"
                  >
                    <Volume2 className="w-4 h-4 animate-bounce" />
                    <span>Clique para ouvir som (5%)</span>
                  </button>
                )}

                {/* Store Tag on top */}
                <div className="absolute top-12 right-3 z-20 pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-md text-emerald-400 border border-white/10 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow">
                    <Sparkles className="w-3 h-3 text-[#3EB489]" />
                    Celtec.pro
                  </span>
                </div>

                {/* Bottom Custom Video Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-20 space-y-2">
                  
                  {/* Progress Line */}
                  <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#3EB489] h-full transition-all duration-150"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-white text-xs pt-1">
                    
                    {/* Left: Play/Pause & Restart */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                        title={isPlaying ? 'Pausar' : 'Reproduzir'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                      </button>

                      <button
                        type="button"
                        onClick={restartVideo}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Reiniciar vídeo"
                        title="Reiniciar"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-[11px] text-slate-300 font-mono">
                        {formatTime(currentTime)}
                      </span>
                    </div>

                    {/* Right: Volume Controls starting at 5% */}
                    <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-xl border border-white/10">
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="text-slate-300 hover:text-white transition-colors"
                        aria-label={isMuted ? 'Desmutar' : 'Mutar som'}
                        title={isMuted ? 'Desmutar' : 'Mutar'}
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="w-4 h-4 text-red-400" />
                        ) : volume < 0.3 ? (
                          <Volume1 className="w-4 h-4 text-[#3EB489]" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-[#3EB489]" />
                        )}
                      </button>

                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                        className="w-16 h-1.5 accent-[#3EB489] bg-white/20 rounded-lg cursor-pointer"
                        aria-label="Ajustar volume do vídeo"
                        title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                      />

                      <span className="text-[10px] text-emerald-400 font-semibold w-7 text-right">
                        {Math.round((isMuted ? 0 : volume) * 100)}%
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Subtitle Caption under the Video */}
            <div className="mt-3 text-center">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3EB489] animate-pulse" />
                Vídeo gravado em formato original na Celtec.pro • Vol: {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#sobre"
            aria-label="Rolar para a seção Sobre Nós"
            className="text-slate-400 hover:text-white transition-colors p-2 inline-flex items-center gap-2 text-xs"
          >
            <span>Conheça a Celtec.pro</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#3EB489]" />
          </a>
        </div>
      </div>
    </section>
  );
}
