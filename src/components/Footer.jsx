import React, { useState } from 'react';
import { Crown, Sparkles, MapPin, Mail, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const { setActiveDetailProduct, setIsQuizOpen } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#04060c] text-platinum-300 border-t border-champagne-400/20 pt-20 pb-12 relative overflow-hidden">
      
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full border border-champagne-400/60 flex items-center justify-center bg-champagne-500/15 shadow-champagne-glow">
                <Crown className="w-5 h-5 text-champagne-400" />
              </div>
              <span className="font-sans text-3xl font-extrabold champagne-gradient-text tracking-[0.2em]">
                ZN
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.45em] text-champagne-400/90 font-mono block">
              HAUTE PARFUMERIE PRIVÉE
            </span>
            <p className="text-xs text-platinum-400 font-light leading-relaxed max-w-sm">
              Artisan extraits crafted with up to 40% pure fragrance oils, aged in French oak barrels in Grasse and distributed to private clientele worldwide.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-champagne-300">
              <span>Paris</span> • <span>London</span> • <span>Dubai</span> • <span>New York</span> • <span>Milan</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-champagne-300 font-semibold">
              The Collection
            </h4>
            <ul className="space-y-2 text-xs text-platinum-400">
              <li>
                <button 
                  onClick={() => {
                    setActiveDetailProduct(null);
                    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-champagne-300 transition-colors"
                >
                  15 Masterpiece Extraits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsQuizOpen(true)}
                  className="hover:text-champagne-300 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-champagne-400" /> Scent Finder Quiz
                </button>
              </li>
              <li>
                <a href="#cinematic" className="hover:text-champagne-300 transition-colors">
                  Cinematic Fragrance Film
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-champagne-300 transition-colors">
                  Grasse Distillation Alchemy
                </a>
              </li>
            </ul>
          </div>

          {/* Boutiques & Heritage (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-champagne-300 font-semibold">
              Boutique Salons
            </h4>
            <div className="space-y-2.5 text-xs text-platinum-400 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne-400 shrink-0 mt-0.5" />
                <span>Place Vendôme, 75001 Paris, France</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne-400 shrink-0 mt-0.5" />
                <span>Bond Street, Mayfair, London W1S 2TF</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne-400 shrink-0 mt-0.5" />
                <span>Fashion Avenue, The Dubai Mall, UAE</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-champagne-300 font-semibold">
              The Private Salon Gazette
            </h4>
            <p className="text-xs text-platinum-400 font-light">
              Receive private invitations to limited batch harvests and preview new extraits before public unveiling.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-champagne-500/15 border border-champagne-400/40 text-champagne-300 text-xs font-mono text-center">
                ✨ You are now enrolled in the Private Circle.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-champagne-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-sapphire-950 border border-champagne-400/30 rounded-xl text-xs text-platinum-200 focus:outline-none focus:border-champagne-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-widest text-xs rounded-xl shadow-champagne-glow hover:shadow-champagne-glow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Invitation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-platinum-500 font-mono gap-4">
          <div>
            © 2026 <strong className="text-champagne-400 font-serif">ZN HAUTE PARFUMERIE</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Charter</span>
            <span>Terms of Acquisition</span>
            <span>Authenticity Certificate</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
