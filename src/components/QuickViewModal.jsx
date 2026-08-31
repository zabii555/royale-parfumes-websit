import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function QuickViewModal() {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    setActiveDetailProduct, 
    addToCart, 
    toggleWishlist, 
    wishlist, 
    formatPrice 
  } = useCart();

  const [selectedSize, setSelectedSize] = useState(
    quickViewProduct ? (quickViewProduct.sizes[1] || quickViewProduct.sizes[0]) : null
  );
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);
  const currentSize = selectedSize || quickViewProduct.sizes[1] || quickViewProduct.sizes[0];

  const handleOpenFullDetail = () => {
    const product = quickViewProduct;
    setQuickViewProduct(null);
    setActiveDetailProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-sapphire bg-sapphire-900 rounded-3xl border border-champagne-400/40 p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-sapphire-950/80 border border-champagne-400/30 text-platinum-300 hover:text-white hover:border-champagne-300 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sapphire-950/80 border border-champagne-400/30">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold bg-sapphire-950/90 text-champagne-300 border border-champagne-400/40 rounded-full">
                {quickViewProduct.badge || "Pure Extrait"}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-champagne-400 font-mono">
                {quickViewProduct.category} • {quickViewProduct.gender}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium mt-1">
                {quickViewProduct.name}
              </h2>
              <p className="text-sm font-serif italic text-champagne-200/90 mb-3">
                "{quickViewProduct.subtitle}"
              </p>

              {/* Ratings */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-champagne-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
                  ))}
                </div>
                <span className="text-xs font-mono text-champagne-300">{quickViewProduct.rating}</span>
                <span className="text-platinum-400 text-xs font-mono">({quickViewProduct.reviewsCount} reviews)</span>
              </div>

              <p className="text-xs text-platinum-300 leading-relaxed line-clamp-3 mb-4 font-light">
                {quickViewProduct.description}
              </p>

              {/* Notes Badges */}
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-platinum-400 block mb-1.5">
                  Key Olfactory Notes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.notes.top.concat(quickViewProduct.notes.heart).slice(0, 4).map((note, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-lg bg-sapphire-950/80 border border-champagne-400/20 text-champagne-200">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-4">
                <label className="block text-[11px] uppercase tracking-wider text-platinum-400 font-mono mb-2">
                  Bottle Size:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedSize(s)}
                      className={`p-2 rounded-xl border text-center text-xs transition-all ${
                        currentSize.size === s.size
                          ? 'border-champagne-400 bg-champagne-500/20 text-champagne-200 font-bold'
                          : 'border-white/10 text-platinum-400 hover:border-champagne-400/40'
                      }`}
                    >
                      <div className="truncate">{s.size.split(' ')[0]}</div>
                      <div className="text-[10px] font-mono text-champagne-300">{formatPrice(s.price)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-serif font-bold text-champagne-300">
                  {formatPrice(currentSize.price * quantity)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-xs text-platinum-400 line-through font-mono">
                    {formatPrice(quickViewProduct.originalPrice * quantity)}
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    addToCart(quickViewProduct, currentSize, quantity);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-champagne-glow hover:shadow-champagne-glow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Bag</span>
                </button>
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className="p-3 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-300 hover:text-champagne-400"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-champagne-400 text-champagne-400' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleOpenFullDetail}
                className="w-full py-2.5 text-center text-xs uppercase tracking-widest text-champagne-400 hover:text-champagne-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Read Full Story & Scent Pyramid</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
