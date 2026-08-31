import React, { useState } from 'react';
import { X, CheckCircle2, Crown, Sparkles, ShieldCheck, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

export default function CheckoutModal() {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    cartTotal, 
    formatPrice, 
    clearCart 
  } = useCart();

  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Lord Arthur Sterling',
    email: 'sterling@haute-luxury.com',
    address: 'Place Vendôme, Suite 402, 75001 Paris',
    card: '•••• •••• •••• 9842',
    notes: 'Please pack in luxury sapphire & rose-gold ribbon presentation box'
  });

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setOrderComplete(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#e8aa78', '#f3cba6', '#38bdf8', '#818cf8']
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    if (orderComplete) {
      clearCart();
      setOrderComplete(false);
    }
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl p-8 rounded-3xl glass-sapphire border border-champagne-400/40 bg-sapphire-900 shadow-2xl">
        
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sapphire-950/80 border border-champagne-400/30 text-platinum-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {orderComplete ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-champagne-500/20 border border-champagne-400 flex items-center justify-center mx-auto text-champagne-400 shadow-champagne-glow animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <span className="text-xs font-mono uppercase tracking-[0.3em] text-champagne-400 block">
              Order #ZN-{(Math.random() * 900000 + 100000).toFixed(0)} Confirmed
            </span>

            <h3 className="text-3xl font-serif text-white">
              Compliments of the Maison ZN
            </h3>

            <p className="text-xs sm:text-sm text-platinum-300 font-light max-w-md mx-auto leading-relaxed">
              Your bespoke flacon order is being freshly bottled and aged under nitrogen sealed conditions. 
              Our white-glove VIP express courier has been assigned to deliver to: <br/>
              <span className="text-champagne-300 font-mono font-semibold">{formData.address}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-sapphire-950/80 border border-champagne-400/20 text-xs font-mono text-platinum-400 max-w-sm mx-auto space-y-1 text-left">
              <div className="flex justify-between text-platinum-300">
                <span>Items:</span>
                <span>{cart.length} Masterpiece Flacons</span>
              </div>
              <div className="flex justify-between text-platinum-300">
                <span>Total Paid:</span>
                <span className="text-champagne-400 font-bold">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-platinum-300">
                <span>Estimated Delivery:</span>
                <span>24-48 Hours Worldwide</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3.5 bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-champagne-glow hover:shadow-champagne-glow-lg"
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-champagne-400 mb-2">
              <Crown className="w-4 h-4 text-champagne-400" />
              <span>Secure VIP Checkout</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
              Complete Your Acquisition
            </h3>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Recipient Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-200 text-xs focus:outline-none focus:border-champagne-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Email for Tracking</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-200 text-xs focus:outline-none focus:border-champagne-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Encrypted Payment</label>
                  <div className="flex items-center px-4 py-2.5 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-200 text-xs">
                    <Lock className="w-3.5 h-3.5 text-emerald-400 mr-2" />
                    <span>Black Card •••• 9842</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Delivery Residence / Estate Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-200 text-xs focus:outline-none focus:border-champagne-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Special Engraving & Packaging Notes</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-200 text-xs focus:outline-none focus:border-champagne-400 resize-none"
                ></textarea>
              </div>

              {/* Order total */}
              <div className="p-4 rounded-xl bg-sapphire-950/90 border border-champagne-400/20 flex justify-between items-center text-xs font-mono">
                <span className="text-platinum-300">Total Investment ({cart.length} Items):</span>
                <span className="text-lg font-serif font-bold text-champagne-300">{formatPrice(cartTotal)}</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-[0.2em] text-xs rounded-xl shadow-champagne-glow hover:shadow-champagne-glow-lg transition-all duration-300 shimmer-btn flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Place Confirmed Acquisition</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
