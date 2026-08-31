import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Film, 
  Crown,
  ChevronDown
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const CURRENCIES = [
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'AED', symbol: 'AED ', rate: 3.67 },
  { code: 'PKR', symbol: 'PKR ', rate: 278 }
];

export default function Navbar() {
  const { 
    cartCount, 
    wishlist, 
    setIsCartOpen, 
    setIsQuizOpen,
    searchQuery, 
    setSearchQuery,
    currency,
    setCurrency,
    setActiveDetailProduct
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveDetailProduct(null);
    setMobileMenuOpen(false);
    if (sectionId === 'quiz') {
      setIsQuizOpen(true);
      return;
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-sapphire-950/95 backdrop-blur-lg border-b border-champagne-400/25 py-2.5 shadow-2xl shadow-black/80' 
        : 'bg-gradient-to-b from-sapphire-950 via-sapphire-950/70 to-transparent py-4'
    }`}>
      {/* Top micro announcement bar */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-6 pb-2 text-[11px] uppercase tracking-[0.25em] text-champagne-300/80 border-b border-champagne-400/15 mb-2 font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-champagne-400 animate-pulse"></span>
          <span>Complimentary VIP White-Glove Courier Worldwide</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Place Vendôme • Paris</span>
          <span>Grasse Alchemy</span>
          {/* Currency Switcher */}
          <div className="relative">
            <button 
              onClick={() => setCurrencyDropdown(!currencyDropdown)}
              className="flex items-center gap-1 text-champagne-300 hover:text-white transition-colors"
            >
              <span>{currency.code} ({currency.symbol.trim()})</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {currencyDropdown && (
              <div className="absolute right-0 mt-1 py-2 w-32 bg-sapphire-900 border border-champagne-400/40 rounded-xl shadow-2xl z-50">
                {CURRENCIES.map(curr => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setCurrency(curr);
                      setCurrencyDropdown(false);
                    }}
                    className="w-full px-3 py-1.5 text-left text-xs text-platinum-300 hover:bg-champagne-500/20 hover:text-champagne-200 transition-colors"
                  >
                    {curr.code} {curr.symbol}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          <button 
            onClick={() => handleNavClick('collection')} 
            className="text-xs uppercase tracking-[0.2em] text-platinum-200 hover:text-champagne-300 transition-all duration-300 flex items-center gap-1.5 group"
          >
            <span className="w-0 group-hover:w-2 h-[1px] bg-champagne-400 transition-all duration-300"></span>
            15 Masterpieces
          </button>
          <button 
            onClick={() => handleNavClick('story')} 
            className="text-xs uppercase tracking-[0.2em] text-platinum-200 hover:text-champagne-300 transition-all duration-300 flex items-center gap-1.5 group"
          >
            <span className="w-0 group-hover:w-2 h-[1px] bg-champagne-400 transition-all duration-300"></span>
            Grasse Atelier
          </button>
          <button 
            onClick={() => handleNavClick('cinematic')} 
            className="text-xs uppercase tracking-[0.2em] text-platinum-200 hover:text-champagne-300 transition-all duration-300 flex items-center gap-1.5 group"
          >
            <Film className="w-3.5 h-3.5 text-champagne-400" />
            Fragrance Film
          </button>
          <button 
            onClick={() => handleNavClick('quiz')} 
            className="text-xs uppercase tracking-[0.2em] text-champagne-300 hover:text-white transition-all duration-300 flex items-center gap-1.5 bg-champagne-500/15 px-3.5 py-1.5 rounded-full border border-champagne-400/40 shadow-inner-sapphire"
          >
            <Sparkles className="w-3 h-3 text-champagne-400 animate-spin" style={{ animationDuration: '8s' }} />
            Scent Finder Quiz
          </button>
        </nav>

        {/* Brand Logo "ZN" */}
        <div 
          onClick={() => { setActiveDetailProduct(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="cursor-pointer flex flex-col items-center group text-center"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-champagne-400/60 flex items-center justify-center bg-gradient-to-br from-champagne-400/20 to-sapphire-950 group-hover:border-champagne-300 transition-all duration-500 shadow-champagne-glow">
              <Crown className="w-4 h-4 text-champagne-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-sans text-3xl sm:text-4xl tracking-[0.2em] font-extrabold champagne-gradient-text drop-shadow-[0_2px_12px_rgba(232,170,120,0.4)]">
              ZN
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.45em] text-champagne-300/80 -mt-0.5 font-light">
            HAUTE PARFUMERIE
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Search Toggle */}
          <div className="relative flex items-center">
            {showSearchInput ? (
              <div className="flex items-center bg-sapphire-900/90 border border-champagne-400/50 rounded-full px-3 py-1.5 w-48 sm:w-64 transition-all duration-300 shadow-xl">
                <Search className="w-4 h-4 text-champagne-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search 15 perfumes, notes..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (activeDetailProduct) setActiveDetailProduct(null);
                  }}
                  className="bg-transparent text-xs text-platinum-100 placeholder:text-platinum-400 focus:outline-none w-full"
                  autoFocus
                />
                <button 
                  onClick={() => { setShowSearchInput(false); setSearchQuery(''); }}
                  className="text-platinum-400 hover:text-white ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowSearchInput(true)}
                className="p-2 text-platinum-300 hover:text-champagne-300 hover:bg-champagne-500/10 rounded-full transition-all"
                title="Search perfumes"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Wishlist Button */}
          <button 
            onClick={() => handleNavClick('collection')}
            className="relative p-2 text-platinum-300 hover:text-champagne-300 hover:bg-champagne-500/10 rounded-full transition-all"
            title="Wishlist"
          >
            <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-champagne-400 text-champagne-400' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-champagne-400 text-sapphire-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Trigger */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-gradient-to-r from-champagne-500/20 to-champagne-700/20 border border-champagne-400/50 rounded-full text-champagne-300 hover:text-white hover:border-champagne-300 transition-all duration-300 shadow-champagne-glow flex items-center gap-2 group"
          >
            <ShoppingBag className="w-5 h-5 text-champagne-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-xs uppercase tracking-widest font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="bg-champagne-400 text-sapphire-950 text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center -ml-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-platinum-300 hover:text-champagne-300 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-sapphire-950/98 border-b border-champagne-400/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 text-sm tracking-widest uppercase font-mono">
            <button 
              onClick={() => handleNavClick('collection')}
              className="text-left py-2 text-platinum-200 hover:text-champagne-300 border-b border-white/5"
            >
              15 Branded Perfumes
            </button>
            <button 
              onClick={() => handleNavClick('story')}
              className="text-left py-2 text-platinum-200 hover:text-champagne-300 border-b border-white/5"
            >
              Grasse Heritage & Alchemy
            </button>
            <button 
              onClick={() => handleNavClick('cinematic')}
              className="text-left py-2 text-platinum-200 hover:text-champagne-300 border-b border-white/5 flex items-center gap-2"
            >
              <Film className="w-4 h-4 text-champagne-400" />
              Cinematic Fragrance Film
            </button>
            <button 
              onClick={() => handleNavClick('quiz')}
              className="text-left py-2.5 text-champagne-300 hover:text-white flex items-center gap-2 bg-champagne-500/15 px-3 rounded-xl border border-champagne-400/30"
            >
              <Sparkles className="w-4 h-4 text-champagne-400" />
              Fragrance Finder Quiz
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-platinum-400 font-mono">
            <span>Currency:</span>
            <div className="flex gap-2">
              {CURRENCIES.map(curr => (
                <button
                  key={curr.code}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded-lg text-xs ${currency.code === curr.code ? 'bg-champagne-400 text-sapphire-950 font-bold' : 'bg-white/5'}`}
                >
                  {curr.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
