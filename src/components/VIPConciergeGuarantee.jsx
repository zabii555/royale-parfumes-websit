import React from 'react';
import { Crown, Truck, Gift, ShieldCheck, Gem, Sparkles } from 'lucide-react';

export default function VIPConciergeGuarantee() {
  return (
    <section className="py-28 bg-sapphire-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="rounded-3xl border border-champagne-400/40 bg-gradient-to-r from-sapphire-900 via-sapphire-950 to-sapphire-900 p-8 sm:p-14 shadow-champagne-glow-lg relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-champagne-500/15 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-[0.3em]">
                <Crown className="w-3.5 h-3.5 text-champagne-400" />
                <span>The Maison ZN VIP Experience</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
                Bespoke Presentation & <span className="champagne-gradient-text">White-Glove Delivery</span>
              </h2>

              <p className="text-platinum-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                Every acquisition arrives encased in a hand-crafted Limousin oak presentation vault, sealed with a gold wax emblem, accompanied by an engraved certificate of authenticity.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-champagne-500/15 border border-champagne-400/30 flex items-center justify-center text-champagne-400 shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white">VIP Courier Worldwide</h4>
                    <p className="text-xs text-platinum-400">Temperature-controlled express shipping</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-champagne-500/15 border border-champagne-400/30 flex items-center justify-center text-champagne-400 shrink-0">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white">Bespoke Engraving</h4>
                    <p className="text-xs text-platinum-400">Personalized monogram on 24k cap</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-champagne-500/15 border border-champagne-400/30 flex items-center justify-center text-champagne-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white">Grasse Certificate</h4>
                    <p className="text-xs text-platinum-400">Hand-signed authenticity card</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Badge Graphic */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-8 rounded-3xl border border-champagne-400/40 bg-sapphire-950/90 text-center space-y-4 shadow-2xl max-w-xs">
                <div className="w-16 h-16 rounded-full border-2 border-champagne-400 mx-auto flex items-center justify-center bg-champagne-500/20 text-champagne-300 shadow-champagne-glow">
                  <Gem className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">24K Gold Inlaid</h3>
                <p className="text-xs text-platinum-400">Weighted solid metallic flacon cap with imperial crown hallmark.</p>
                <div className="pt-2 text-[11px] font-mono uppercase tracking-widest text-champagne-300">
                  ★ Hand-Assembled in Paris
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
