import React, { useState, useEffect } from 'react';
import { Sparkles, Film, Crown, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useCart } from '../context/CartContext';

function getYTId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?.*v=|embed\/|v\/))([^?&\s]+)/
  );
  return match ? match[1] : null;
}

const MASTER_FILM = {
  title: 'The Art of Grasse Distillation & Haute Alchemy',
  duration: '4K Cinema Cut',
  perfumeId: 1,
  videoUrl: 'https://youtu.be/zpDza9rd9_4',
  desc: 'Witness the rare harvest of Kashmiri Saffron, May Rose, and 25-year aged wild Agarwood distilled in authentic French oak barrels.',
};

export default function VideoShowcase() {
  const [ytReady, setYtReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { setActiveDetailProduct, perfumesList } = useCart();

  const ytId = getYTId(MASTER_FILM.videoUrl);
  // controls=0 & mute=1 & loop=1 & modestbranding=1 eliminates YouTube red seekbar, timestamps, more videos overlays
  const ytEmbedUrl = ytId
    ? `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${ytId}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1`
    : null;

  useEffect(() => {
    setYtReady(false);
    const t = setTimeout(() => setYtReady(true), 500);
    return () => clearTimeout(t);
  }, []);

  const handleExplorePerfume = (perfumeId) => {
    const found = perfumesList.find((p) => p.id === perfumeId);
    if (found) {
      setActiveDetailProduct(found);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cinematic"
      className="py-32 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #03050e 0%, #060c1c 45%, #080f22 75%, #03050e 100%)',
      }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(212,170,112,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      
      {/* Top gold accent divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-400/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-sapphire-900/80 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-[0.35em] mb-6 shadow-champagne-glow backdrop-blur-md">
            <Film className="w-3.5 h-3.5 text-champagne-400" />
            <span>Imperial Film Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-white mb-5 leading-tight">
            The Alchemy of{' '}
            <span className="champagne-gradient-text">Liquid Opulence</span>
          </h2>
          <p className="text-platinum-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Step inside our Grasse sanctuary. A 4K visual tribute to the distillation of 40% pure oil extraits.
          </p>
        </div>

        {/* Pure Clean Cinema Player Frame (NO YouTube red lines, NO timecodes, NO extra cards) */}
        <div
          className="rounded-3xl overflow-hidden border border-champagne-400/40 bg-sapphire-950 shadow-champagne-glow-lg flex flex-col transition-all duration-500 hover:border-champagne-400/70"
          style={{
            boxShadow:
              '0 40px 120px rgba(0,0,0,0.85), 0 0 80px rgba(212,170,112,0.12)',
          }}
        >
          {/* 16:9 Video Canvas (Strictly clean controls=0) */}
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            {ytEmbedUrl && (
              <>
                {!ytReady && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-sapphire-950 z-10">
                    <div className="w-16 h-16 rounded-full border-2 border-champagne-400/40 border-t-champagne-400 animate-spin mb-4" />
                    <span className="text-champagne-400/70 text-xs font-mono uppercase tracking-widest">
                      Unveiling Mastercut Film…
                    </span>
                  </div>
                )}
                
                {/* Pointer events disabled on iframe so YouTube UI never surfaces */}
                <div className="absolute inset-0 pointer-events-none z-10 scale-[1.05]">
                  <iframe
                    src={ytEmbedUrl}
                    title={MASTER_FILM.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    onLoad={() => setYtReady(true)}
                    className="w-full h-full border-0 pointer-events-none"
                    style={{
                      opacity: ytReady ? 1 : 0,
                      transition: 'opacity 0.7s ease',
                    }}
                  />
                </div>

                {/* Ambient Top Badges */}
                <div className="absolute top-5 left-5 z-20 pointer-events-none">
                  <span className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-sapphire-950/90 border border-champagne-400/50 text-champagne-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-2xl">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    ZN 4K Master Film
                  </span>
                </div>

                <div className="absolute top-5 right-5 z-20 pointer-events-none">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-sapphire-950/90 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-wider backdrop-blur-md shadow-2xl">
                    <Crown className="w-3.5 h-3.5 text-champagne-400" />
                    Cinema 4K
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Luxury Player Footer Bar */}
          <div className="p-8 sm:p-10 bg-gradient-to-r from-sapphire-950 via-sapphire-900 to-sapphire-950 border-t border-champagne-400/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-champagne-400 font-semibold inline-block bg-champagne-500/15 border border-champagne-400/30 px-3.5 py-1 rounded-full mb-1">
                Chapter: {MASTER_FILM.duration}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-white font-medium leading-snug">
                {MASTER_FILM.title}
              </h3>
              <p className="text-sm sm:text-base text-platinum-300 font-light leading-relaxed pt-1">
                {MASTER_FILM.desc}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-4 rounded-2xl bg-sapphire-900/80 border border-champagne-400/40 text-champagne-300 hover:text-white hover:border-champagne-400 transition-all backdrop-blur-md"
                title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-champagne-400 animate-pulse" />}
              </button>

              <button
                onClick={() => handleExplorePerfume(MASTER_FILM.perfumeId)}
                className="flex-1 lg:flex-none px-8 py-4 rounded-2xl bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold text-xs font-mono uppercase tracking-[0.25em] shadow-champagne-glow hover:shadow-champagne-glow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shimmer-btn"
              >
                <Sparkles className="w-4 h-4 text-sapphire-950" />
                <span>Discover Flacon</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
