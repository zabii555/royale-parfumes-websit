import React from 'react';
import { Crown, Sparkles, Gem, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/perfumes';

export default function BrandStory() {
  return (
    <section id="story" className="py-32 bg-gradient-to-b from-sapphire-950 via-sapphire-900 to-sapphire-950 relative overflow-hidden">
      
      {/* Ambient glow */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,170,112,0.10) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-sapphire-900/80 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-[0.35em] shadow-champagne-glow backdrop-blur-md">
              <Crown className="w-3.5 h-3.5 text-champagne-400" />
              <span>Grasse Heritage • Since 1988</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif text-white leading-tight">
              The Sacred Art of <br />
              <span className="champagne-gradient-text">Haute Alchemy</span>
            </h2>

            <p className="text-platinum-300 text-base font-light leading-relaxed">
              At Maison <strong className="text-champagne-300 font-serif">ZN</strong>, perfume is not merely a fragrance—it is an invisible imperial crown. Founded upon the cobblestone streets of Grasse, our master noses extract the rarest natural essences in the world.
            </p>

            <p className="text-platinum-300 text-base font-light leading-relaxed">
              Every formula undergoes 180 days of slow maceration in authentic French oak barrels. We refuse synthetic diluents, formulating exclusively in concentrated Extraits (35% to 40% pure essence) so that each droplet lingers like an eternal signature.
            </p>

            {/* Quote Box */}
            <div className="p-8 rounded-3xl bg-sapphire-950/80 border-l-2 border-champagne-400 border-y border-r border-champagne-400/20 italic font-serif text-champagne-200 text-xl shadow-xl">
              "We do not create perfumes for the crowd; we sculpt olfactory jewels for those who command destinies."
              <span className="block text-xs font-mono uppercase tracking-[0.25em] text-platinum-400 mt-3 not-italic font-sans">
                — Z. N. Laurent, Master Parfumeur
              </span>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-sapphire border border-champagne-400/40 shadow-champagne-glow-lg">
              <img
                src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop"
                alt="ZN Perfumery Grasse"
                className="w-full h-full object-cover filter contrast-110 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sapphire-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-champagne-300 bg-sapphire-950/90 backdrop-blur-md p-4 rounded-2xl border border-champagne-400/30">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-champagne-400" />
                  <span>Place Vendôme, Paris & Grasse</span>
                </div>
                <span>100% Artisan Extract</span>
              </div>
            </div>

            {/* Small Floating Card */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 p-6 rounded-3xl bg-sapphire-900/98 border border-champagne-400/50 backdrop-blur-xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl border border-champagne-400/40 flex items-center justify-center bg-champagne-500/15 text-champagne-300 shrink-0">
                  <Gem className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-white">24K Gold Flacons</h4>
                  <p className="text-xs text-platinum-400">Hand-inlaid luxury weighted caps</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_INFO.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-sapphire border border-champagne-400/20 bg-sapphire-950/70 hover:border-champagne-400/60 transition-all duration-500 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-champagne-500/15 border border-champagne-400/30 flex items-center justify-center text-champagne-400 mb-6 group-hover:scale-110 transition-transform shadow-champagne-glow">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-white mb-3">{feat.title}</h4>
              <p className="text-xs sm:text-sm text-platinum-400 font-light leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
