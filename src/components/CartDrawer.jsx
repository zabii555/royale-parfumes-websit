import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, ShieldCheck, Gift, Tag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    formatPrice,
    setIsCheckoutOpen,
    setActiveDetailProduct
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  if (!isCartOpen) return null;

  const discountAmount = discountApplied ? cartTotal * 0.15 : 0;
  const finalTotal = cartTotal - discountAmount;
  const freeShippingThreshold = 300;
  const progressToFreeShip = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ZNROYAL15' || promoCode.trim().toUpperCase() === 'VIP') {
      setDiscountApplied(true);
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#090e1c] border-l border-champagne-400/30 text-platinum-200 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-champagne-400/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-champagne-400" />
              <h2 className="text-xl font-serif text-white tracking-wide">
                Haute Parfumerie Flacon Bag
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-platinum-400 hover:text-white rounded-full hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3 bg-champagne-500/10 border-b border-champagne-400/20 text-xs font-mono">
            {cartTotal >= freeShippingThreshold ? (
              <div className="text-emerald-400 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>You’ve unlocked Complimentary VIP Courier & Discovery Vials!</span>
              </div>
            ) : (
              <div>
                <span className="text-champagne-300">
                  Add {formatPrice(freeShippingThreshold - cartTotal)} more for Complimentary Express Courier
                </span>
                <div className="w-full bg-sapphire-950 h-1 rounded-full mt-2 overflow-hidden border border-white/10">
                  <div className="bg-champagne-400 h-full transition-all duration-300" style={{ width: `${progressToFreeShip}%` }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="p-6 overflow-y-auto flex-grow space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center text-platinum-400 space-y-4">
                <ShoppingBag className="w-12 h-12 mx-auto text-champagne-400/40" />
                <p className="font-serif text-lg text-platinum-200">Your flacon bag is empty</p>
                <p className="text-xs font-light">Explore our 15 masterwork extraits and select your signature bottle.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-champagne-500/20 text-champagne-300 border border-champagne-400/40 rounded-xl text-xs uppercase tracking-wider font-mono"
                >
                  Browse 15 Perfumes
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="p-4 rounded-2xl bg-sapphire-950/80 border border-champagne-400/20 flex gap-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-xl border border-champagne-400/20 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 
                      onClick={() => {
                        setIsCartOpen(false);
                        setActiveDetailProduct(item);
                      }}
                      className="text-sm font-serif font-bold text-white truncate hover:text-champagne-300 cursor-pointer"
                    >
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-champagne-400/80 font-mono">{item.selectedSize.size}</p>
                    <p className="text-xs font-serif font-bold text-champagne-300 mt-1">
                      {formatPrice(item.selectedSize.price * item.quantity)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-champagne-400/20 rounded-lg bg-sapphire-900">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-0.5 text-platinum-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 font-mono text-xs text-platinum-200">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-0.5 text-platinum-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-platinum-500 hover:text-rose-400 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-champagne-400/20 bg-sapphire-950/90 space-y-4">
              {/* Promo Code Box */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-champagne-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Promo: ZNROYAL15"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-sapphire-900 border border-champagne-400/30 rounded-xl text-xs text-platinum-200 focus:outline-none uppercase font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-sapphire-800 hover:bg-champagne-500/20 text-champagne-300 border border-champagne-400/40 rounded-xl text-xs uppercase tracking-wider font-mono"
                >
                  Apply
                </button>
              </form>

              {discountApplied && (
                <div className="text-xs font-mono text-emerald-400 flex items-center justify-between">
                  <span>15% Royal Privilege:</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}

              {/* Subtotal & Total */}
              <div className="space-y-1 pt-2 border-t border-white/10 text-xs font-mono">
                <div className="flex justify-between text-platinum-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-platinum-400">
                  <span>VIP Courier Shipping</span>
                  <span className="text-emerald-400">FREE</span>
                </div>
                <div className="flex justify-between text-platinum-400">
                  <span>Sapphire & Rose Presentation Box</span>
                  <span className="text-emerald-400">INCLUDED</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-white pt-2 border-t border-white/10">
                  <span>Total Due</span>
                  <span className="text-champagne-300">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedCheckout}
                className="w-full py-4 bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-[0.2em] text-xs rounded-xl shadow-champagne-glow hover:shadow-champagne-glow-lg transition-all duration-300 flex items-center justify-center gap-2 shimmer-btn"
              >
                <span>Proceed to VIP Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
