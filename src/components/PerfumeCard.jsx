import React from 'react';
import { Star, Heart, Eye, ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function PerfumeCard({ perfume }) {
  const { 
    addToCart, 
    toggleWishlist, 
    wishlist, 
    setQuickViewProduct, 
    setActiveDetailProduct, 
    formatPrice 
  } = useCart();

  const isWishlisted = wishlist.includes(perfume.id);

  const handleCardClick = () => {
    setActiveDetailProduct(perfume);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="group relative glass-sapphire rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:border-champagne-400/80 hover:shadow-champagne-glow-lg bg-gradient-to-b from-sapphire-900/90 via-sapphire-950/95 to-[#080d1a] border border-champagne-400/25">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40 cursor-pointer" onClick={handleCardClick}>
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent to-black/30 opacity-75 group-hover:opacity-40 transition-opacity"></div>

        {/* Badge */}
        {perfume.badge && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="px-3.5 py-1 text-[10px] uppercase tracking-widest font-mono font-semibold bg-sapphire-950/85 text-champagne-300 border border-champagne-400/40 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-champagne-400" />
              {perfume.badge}
            </span>
          </div>
        )}

        {/* Quick Action Overlay Buttons */}
        <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-2">
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(perfume.id);
            }}
            className="p-2 rounded-full bg-sapphire-950/70 border border-champagne-400/30 text-platinum-300 hover:text-champagne-300 hover:border-champagne-400 backdrop-blur-md transition-all shadow-md"
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-champagne-400 text-champagne-400' : ''}`} />
          </button>

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(perfume);
            }}
            className="p-2 rounded-full bg-sapphire-950/70 border border-champagne-400/30 text-platinum-300 hover:text-champagne-300 hover:border-champagne-400 backdrop-blur-md transition-all shadow-md opacity-0 group-hover:opacity-100 duration-300"
            title="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Concentration Tag at Bottom of Image */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-champagne-200/90 bg-sapphire-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-champagne-400/20">
          <span>{perfume.concentration.split('(')[0]}</span>
          <span>{perfume.volume.split('/')[0]}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Gender */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-platinum-400 mb-1 font-mono">
            <span className="text-champagne-400 font-medium">{perfume.category}</span>
            <span className="text-platinum-400 text-[10px]">{perfume.gender}</span>
          </div>

          {/* Perfume Name */}
          <h3 
            onClick={handleCardClick}
            className="text-xl font-serif text-white hover:text-champagne-300 transition-colors cursor-pointer line-clamp-1 font-medium mb-1"
          >
            {perfume.name}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-platinum-300 italic font-serif line-clamp-1 mb-3">
            "{perfume.subtitle}"
          </p>

          {/* Scent Notes Preview Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {perfume.notes.top.slice(0, 2).concat(perfume.notes.heart.slice(0, 1)).map((note, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2.5 py-0.5 rounded-lg bg-sapphire-800/50 border border-champagne-400/20 text-platinum-200 font-light"
              >
                {note}
              </span>
            ))}
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-champagne-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
              ))}
            </div>
            <span className="text-xs font-mono text-champagne-300 font-semibold">{perfume.rating}</span>
            <span className="text-platinum-400 text-[11px] font-mono">({perfume.reviewsCount})</span>
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-3.5 border-t border-champagne-400/15 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-serif font-bold text-champagne-300">
                {formatPrice(perfume.price)}
              </span>
              {perfume.originalPrice && (
                <span className="text-xs text-platinum-400 line-through font-mono">
                  {formatPrice(perfume.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">In Stock • Flacon</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCardClick}
              className="p-2.5 rounded-xl bg-sapphire-800/40 hover:bg-champagne-500/20 text-platinum-300 hover:text-champagne-200 border border-champagne-400/30 transition-colors"
              title="Full Perfume Details & Story"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => addToCart(perfume)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-champagne-400 to-champagne-500 hover:from-champagne-300 hover:to-champagne-400 text-sapphire-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-champagne-glow flex items-center gap-1.5 shimmer-btn"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
