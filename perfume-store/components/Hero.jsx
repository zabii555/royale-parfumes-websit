"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A961]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A961]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* Left: Text */}
          <div className="space-y-8 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A961]/30 bg-[#C9A961]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
              <span className="text-xs font-inter uppercase tracking-[0.3em] text-[#C9A961]">
                Haute Parfumerie Privée
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#F5F0E8]">
              Discover Your{" "}
              <span className="gold-text italic font-normal">
                Signature Scent
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[#A8A29A] text-lg leading-relaxed max-w-md font-inter font-light">
              Masterwork extraits crafted with up to 40% rare natural oils.
              Aged agarwood, Kashmiri saffron, and French May rose — bottled
              in handblown crystal flacons.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10 py-4 border-t border-[#2A2A2A]">
              {[
                { val: "40%", label: "Pure Oil Extrait" },
                { val: "18+ Hrs", label: "Lasting Sillage" },
                { val: "100%", label: "Natural Ingredients" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-playfair text-xl font-bold text-[#C9A961] block">{s.val}</span>
                  <span className="text-[10px] font-inter uppercase tracking-wider text-[#A8A29A]">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#collection"
                className="gold-border-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-inter uppercase tracking-[0.2em] font-medium"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-inter uppercase tracking-[0.2em] text-[#A8A29A] border border-[#2A2A2A] hover:border-[#C9A961]/40 hover:text-[#F5F0E8] transition-all duration-300"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Right: Perfume Bottle */}
          <div className="relative flex justify-center items-center">
            {/* Decorative ring */}
            <div className="absolute w-[380px] h-[380px] rounded-full border border-[#C9A961]/15 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-[#C9A961]/10" />

            {/* Bottle container */}
            <div className="relative w-72 h-[420px] rounded-3xl overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A] shadow-[0_0_80px_rgba(201,169,97,0.12)]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent z-10" />

              {/* Placeholder perfume image */}
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80&fit=crop"
                alt="Luxury Perfume Bottle"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Badge overlay */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#0D0D0D]/80 border border-[#C9A961]/40 backdrop-blur-sm">
                <span className="text-[10px] font-inter uppercase tracking-widest text-[#C9A961]">
                  ? Bestseller
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-[#0D0D0D]/90 border border-[#2A2A2A] backdrop-blur-md">
                <p className="text-[10px] font-inter uppercase tracking-widest text-[#C9A961] mb-0.5">Featured</p>
                <p className="font-playfair text-sm font-semibold text-[#F5F0E8]">ZN Royale No. 1</p>
                <p className="text-xs text-[#C9A961] font-inter mt-0.5">$299 · 50ml Extrait</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-3 shadow-lg flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C9A961]/10 border border-[#C9A961]/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#C9A961]" />
              </div>
              <div>
                <p className="text-[10px] font-inter uppercase tracking-wider text-[#A8A29A]">Aged in Oak</p>
                <p className="text-xs font-playfair font-semibold text-[#C9A961]">180 Days</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
