import React from 'react';
import { Star, Award, Sparkles, Quote } from 'lucide-react';

const REVIEWS = [
  {
    publication: 'VOGUE INTERNATIONAL',
    title: 'The Sovereign of Haute Parfumerie',
    quote: 'Maison ZN stands as an ethereal monument to Grasse alchemy. Their 40% Extraits possess a magnetic presence that commands any room.',
    badge: 'Editor’s Choice 2026'
  },
  {
    publication: "HARPER'S BAZAAR",
    title: 'An Olfactory Imperial Crown',
    quote: 'Unrivaled 18+ hour sillage. The Kashmir Saffron and 25-year aged Agarwood blend is nothing short of liquid gold bottled in 24k flacons.',
    badge: 'Luxury Fragrance Award'
  },
  {
    publication: 'GQ EXECUTIVE',
    title: 'The Ultimate Signature Scent',
    quote: 'For those who demand uncompromising distinction. ZN Royale No. 1 is the undisputed holy grail of modern niche perfumery.',
    badge: 'Best Niche House'
  }
];

export default function PressEditorialSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-sapphire-950 via-sapphire-900 to-sapphire-950 relative overflow-hidden border-t border-b border-champagne-400/20">
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,170,112,0.09) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-sapphire-900/80 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-[0.35em] mb-5 shadow-champagne-glow backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-champagne-400" />
            <span>Global Press & Editorial Acclaim</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-white mb-5 leading-tight">
            Recognized by <span className="champagne-gradient-text">World Critics</span>
          </h2>
          <p className="text-platinum-300 text-base sm:text-lg font-light leading-relaxed">
            Consistently celebrated across Paris, London, and New York as the gold standard of private haute perfumery.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl border border-champagne-400/25 bg-sapphire-950/80 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 hover:border-champagne-400/70 hover:shadow-champagne-glow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-champagne-400 font-bold">
                    {rev.publication}
                  </span>
                  <div className="flex text-champagne-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-champagne-400/40 mb-4 group-hover:text-champagne-400 transition-colors" />

                <h3 className="text-xl font-serif font-bold text-white mb-4">
                  "{rev.title}"
                </h3>

                <p className="text-sm text-platinum-300 font-light leading-relaxed mb-8">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-champagne-400/20 flex items-center justify-between text-xs font-mono text-champagne-300">
                <span>{rev.badge}</span>
                <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
