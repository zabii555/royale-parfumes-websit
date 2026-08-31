"use client";
import { ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A961]/40 hover:shadow-[0_20px_60px_rgba(201,169,97,0.12)]">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#111111]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#C9A961] text-[10px] font-inter font-bold uppercase tracking-wider text-[#0D0D0D]">
            {product.badge}
          </div>
        )}

        {/* Quick view */}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#0D0D0D]/80 border border-[#2A2A2A] flex items-center justify-center text-[#A8A29A] hover:text-[#C9A961] hover:border-[#C9A961]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-[10px] font-inter uppercase tracking-[0.25em] text-[#C9A961] mb-1.5">{product.category}</p>

        {/* Name */}
        <h3 className="font-playfair text-lg font-semibold text-[#F5F0E8] mb-1 leading-tight">
          {product.name}
        </h3>

        {/* Notes */}
        <p className="text-[#A8A29A] text-xs font-inter mb-4 line-clamp-2 leading-relaxed">
          {product.notes}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-playfair text-xl font-bold text-[#C9A961]">${product.price}</span>
            <span className="text-xs text-[#A8A29A] font-inter ml-1.5">{product.volume}</span>
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-inter font-medium uppercase tracking-wider transition-all duration-300 ${
              added
                ? "bg-[#C9A961] text-[#0D0D0D]"
                : "border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0D0D0D]"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
