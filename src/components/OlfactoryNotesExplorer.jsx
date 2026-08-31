import React, { useState } from 'react';
import { Sparkles, Crown, Droplets, Flame, Flower2, Shield } from 'lucide-react';

const INGREDIENTS = [
  {
    id: 'oud',
    name: 'Wild Kashmiri Agarwood (Oud)',
    origin: 'Assam & Kashmir',
    age: '25 Years Aged',
    profile: 'Deep, resinous, smoky balsam with animalic warmth',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop',
    quote: 'Harvested from century-old trees, yielding less than 0.1% pure dark resin.'
  },
  {
    id: 'rose',
    name: 'Centifolia May Rose',
    origin: 'Grasse, France',
    age: 'Dawn Harvested',
    profile: 'Velvety, honeyed floral note with spicy green undertones',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    quote: 'Plucked exclusively at dawn in May when essential oil yield reaches supreme concentration.'
  },
  {
    id: 'saffron',
    name: 'Kashmiri Saffron Grand Cru',
    origin: 'Pampore, Kashmir',
    age: 'Hand Threaded',
    profile: 'Bittersweet leather, warm golden spice, rich metallic luminescence',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1509358271058-acd02cc93898?q=80&w=800&auto=format&fit=crop',
    quote: 'Requires 150,000 hand-picked blossoms to yield a single kilogram of pure essence.'
  },
  {
    id: 'ambergris',
    name: 'Ocean Mineral Ambergris',
    origin: 'Indian Ocean',
    age: '5-Season Oak Macerated',
    profile: 'Marine, ambered, velvety, eternal sillage anchor',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    quote: 'Aged in authentic Limousin French oak casks to achieve an unmatched 18+ hour sillage.'
  }
];

export default function OlfactoryNotesExplorer() {
  const [activeIngredient, setActiveIngredient] = useState(INGREDIENTS[0]);

  return (
    <section className="py-32 relative overflow-hidden bg-sapphire-950">
      {/* Decorative ambient lighting */}
      <div 
        className="absolute top-1/3 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,170,112,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-sapphire-900/80 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-[0.35em] mb-6 shadow-champagne-glow backdrop-blur-md">
            <Crown className="w-3.5 h-3.5 text-champagne-400" />
            <span>Master Alchemy & Raw Botanicals</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-white mb-5 leading-tight">
            The World’s Rarest <span className="champagne-gradient-text">Essences</span>
          </h2>
          <p className="text-platinum-300 text-base sm:text-lg font-light leading-relaxed">
            Explore the 4 sacred pillars of Grasse alchemy that form the heart of our 40% concentrated extraits.
          </p>
        </div>

        {/* Interactive Tabs + Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Ingredient Selection Buttons */}
          <div className="lg:col-span-5 space-y-4">
            {INGREDIENTS.map((item) => {
              const Icon = item.icon;
              const isSelected = activeIngredient.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIngredient(item)}
                  className={`w-full p-6 rounded-3xl border text-left transition-all duration-500 flex items-center justify-between gap-4 group ${
                    isSelected
                      ? 'border-champagne-400 bg-gradient-to-r from-sapphire-900/90 to-sapphire-850/90 shadow-champagne-glow translate-x-2'
                      : 'border-champagne-400/15 bg-sapphire-950/60 hover:border-champagne-400/40 hover:bg-sapphire-900/40 text-platinum-400'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-champagne-400 bg-champagne-500/20 text-champagne-300'
                        : 'border-champagne-400/20 bg-sapphire-900 text-champagne-400/60'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`text-lg font-serif font-bold transition-colors ${isSelected ? 'text-white' : 'text-platinum-200'}`}>
                        {item.name}
                      </h4>
                      <span className="text-xs font-mono text-champagne-400/80 uppercase tracking-wider block mt-0.5">
                        {item.origin} • {item.age}
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-mono uppercase tracking-widest transition-opacity ${isSelected ? 'text-champagne-300 opacity-100' : 'opacity-0'}`}>
                    Active
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card Preview */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-champagne-400/40 bg-sapphire-900/80 shadow-champagne-glow-lg p-8 sm:p-12 glass-sapphire flex flex-col justify-between min-h-[460px]">
              
              <div className="relative z-10 max-w-xl space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-500/15 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Certified Origin • {activeIngredient.origin}</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
                  {activeIngredient.name}
                </h3>

                <p className="text-platinum-200 text-base font-light leading-relaxed">
                  <strong className="text-champagne-300 font-normal">Olfactory Signature: </strong>
                  {activeIngredient.profile}
                </p>

                <div className="p-6 rounded-2xl bg-sapphire-950/90 border-l-2 border-champagne-400 border-y border-r border-champagne-400/20 italic font-serif text-champagne-200 text-lg shadow-xl">
                  "{activeIngredient.quote}"
                </div>
              </div>

              <div className="pt-8 border-t border-champagne-400/20 flex items-center justify-between text-xs font-mono text-platinum-400 uppercase tracking-widest relative z-10">
                <span>Concentration Grade: 100% Pure Essential</span>
                <span className="text-champagne-400 font-bold">Grade Triple A</span>
              </div>

              {/* Faded Background Image Accent */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
                <img 
                  src={activeIngredient.image} 
                  alt={activeIngredient.name}
                  className="w-full h-full object-cover filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sapphire-950 via-sapphire-950/80 to-transparent" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
