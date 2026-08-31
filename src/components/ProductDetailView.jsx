import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Wind, 
  Calendar, 
  Flame, 
  Play, 
  Volume2, 
  VolumeX, 
  MessageSquarePlus, 
  UserCheck, 
  Award,
  Crown
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import PerfumeCard from './PerfumeCard';

export default function ProductDetailView({ perfume }) {
  const { 
    setActiveDetailProduct, 
    addToCart, 
    toggleWishlist, 
    wishlist, 
    formatPrice,
    addReviewToPerfume,
    perfumesList 
  } = useCart();

  const [activeImage, setActiveImage] = useState(perfume.gallery[0] || perfume.image);
  const [selectedSize, setSelectedSize] = useState(perfume.sizes[1] || perfume.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [activeTab, setActiveTab] = useState('notes');

  // Review Form State
  const [reviewForm, setReviewForm] = useState({
    author: '',
    rating: 5,
    title: '',
    content: ''
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const isWishlisted = wishlist.includes(perfume.id);

  const relatedPerfumes = perfumesList
    .filter(p => p.id !== perfume.id && (p.family === perfume.family || p.category.includes(perfume.category.split(' ')[0])))
    .slice(0, 3);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.author.trim() || !reviewForm.content.trim()) return;

    const newReview = {
      id: `r-${Date.now()}`,
      author: reviewForm.author,
      rating: Number(reviewForm.rating),
      date: "Just now",
      verified: true,
      title: reviewForm.title || "Outstanding Luxury Masterpiece",
      content: reviewForm.content
    };

    addReviewToPerfume(perfume.id, newReview);
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
      setReviewForm({ author: '', rating: 5, title: '', content: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-sapphire-950 text-platinum-200 pt-32 pb-24">
      {/* Top Navigation / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => {
            setActiveDetailProduct(null);
            window.scrollTo({ top: 600, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne-400 hover:text-champagne-200 transition-colors bg-sapphire-900/80 px-4 py-2 rounded-full border border-champagne-400/30 shadow-md group font-mono"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to 15 Masterpieces</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Stage: 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          
          {/* Left Column: Visual Gallery (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Displayed Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-sapphire border border-champagne-400/40 bg-sapphire-950/80 shadow-champagne-glow">
              <img
                src={activeImage}
                alt={perfume.name}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
              />
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest bg-sapphire-950/90 text-champagne-300 border border-champagne-400/50 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5 text-champagne-400" />
                  {perfume.badge || "Haute Parfumerie"}
                </span>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(perfume.id)}
                className="absolute top-4 right-4 p-3 rounded-full bg-sapphire-950/80 border border-champagne-400/40 text-platinum-200 hover:text-champagne-300 backdrop-blur-md transition-all shadow-lg"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-champagne-400 text-champagne-400' : ''}`} />
              </button>

              <div className="absolute bottom-4 left-4 right-4 bg-sapphire-950/85 backdrop-blur-md p-3 rounded-2xl border border-champagne-400/20 flex justify-between items-center text-xs font-mono">
                <span className="text-champagne-300 font-semibold">{perfume.concentration}</span>
                <span className="text-platinum-300">{perfume.volume}</span>
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="grid grid-cols-3 gap-3">
              {perfume.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-champagne-400 shadow-champagne-glow' : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Purchasing (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Inspiration & Subtitle */}
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-champagne-400 font-mono mb-2">
                <span>{perfume.category}</span>
                <span>•</span>
                <span>{perfume.gender}</span>
                <span>•</span>
                <span className="text-platinum-400">{perfume.inspiration}</span>
              </div>

              {/* Fragrance Title */}
              <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-2">
                {perfume.name}
              </h1>

              {/* Poetic Tagline */}
              <p className="text-lg font-serif italic text-champagne-200/90 mb-4">
                "{perfume.subtitle}"
              </p>

              {/* Star Ratings Bar */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-champagne-400/20">
                <div className="flex items-center text-champagne-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-champagne-400 text-champagne-400" />
                  ))}
                </div>
                <span className="text-sm font-mono text-champagne-300 font-bold">{perfume.rating} / 5.0</span>
                <span className="text-xs text-platinum-400 font-mono">({perfume.reviewsCount} Certified Reviews)</span>
                <span className="text-emerald-400 text-xs font-mono ml-auto flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In Stock & Ready
                </span>
              </div>

              {/* Poetic Description */}
              <p className="text-platinum-300 text-base leading-relaxed mb-6 font-light">
                {perfume.description}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-[0.2em] text-champagne-300 font-mono mb-3">
                  Select Flacon Decanter Edition:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {perfume.sizes.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedSize(s)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        selectedSize.size === s.size
                          ? 'border-champagne-400 bg-champagne-500/20 shadow-champagne-glow'
                          : 'border-white/10 bg-sapphire-900/40 hover:border-champagne-400/40 text-platinum-400'
                      }`}
                    >
                      <div className="text-xs font-semibold text-white truncate">{s.size}</div>
                      <div className="text-xs font-mono text-champagne-300 mt-1 font-bold">{formatPrice(s.price)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Quantity Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-sapphire-900 via-sapphire-850 to-sapphire-900 border border-champagne-400/40 mb-8 shadow-xl">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-platinum-400 block font-mono">Investment</span>
                    <span className="text-3xl font-serif font-bold text-champagne-300">
                      {formatPrice(selectedSize.price * quantity)}
                    </span>
                    {perfume.originalPrice && (
                      <span className="text-sm text-platinum-400 line-through ml-3 font-mono">
                        {formatPrice(perfume.originalPrice * quantity)}
                      </span>
                    )}
                  </div>

                  {/* Quantity Modifier */}
                  <div className="flex items-center border border-champagne-400/40 rounded-xl bg-sapphire-950/80 overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2 text-platinum-300 hover:text-champagne-300 hover:bg-white/5 text-base font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-mono text-sm font-bold text-champagne-200">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2 text-platinum-300 hover:text-champagne-300 hover:bg-white/5 text-base font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Main Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => addToCart(perfume, selectedSize, quantity)}
                    className="w-full py-4 bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-[0.2em] text-xs rounded-2xl shadow-champagne-glow hover:shadow-champagne-glow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shimmer-btn"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Flacon Bag</span>
                  </button>

                  <button
                    onClick={() => {
                      addToCart(perfume, selectedSize, quantity);
                    }}
                    className="w-full py-4 bg-sapphire-800/80 hover:bg-sapphire-800 text-champagne-200 border border-champagne-400/50 font-semibold uppercase tracking-[0.2em] text-xs rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-champagne-400" />
                    <span>Instant VIP Checkout</span>
                  </button>
                </div>
              </div>

              {/* Micro Guarantees */}
              <div className="grid grid-cols-2 gap-3 text-xs text-platinum-400 font-light">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-champagne-400" />
                  <span>Complimentary Express Courier</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-champagne-400" />
                  <span>100% Authentic Grasse Formula</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-champagne-400" />
                  <span>3 Free Discovery Vials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-champagne-400" />
                  <span>Magnetic Heavy Crest Bottle</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs Section */}
        <div className="mb-20">
          <div className="flex border-b border-champagne-400/20 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'notes'
                  ? 'border-champagne-400 text-champagne-300 bg-champagne-500/10'
                  : 'border-transparent text-platinum-400 hover:text-white'
              }`}
            >
              Olfactory Scent Pyramid
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'specifications'
                  ? 'border-champagne-400 text-champagne-300 bg-champagne-500/10'
                  : 'border-transparent text-platinum-400 hover:text-white'
              }`}
            >
              Longevity & Performance
            </button>
            <button
              onClick={() => setActiveTab('story')}
              className={`px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'story'
                  ? 'border-champagne-400 text-champagne-300 bg-champagne-500/10'
                  : 'border-transparent text-platinum-400 hover:text-white'
              }`}
            >
              Master Perfumer Story
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] font-semibold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'video'
                  ? 'border-champagne-400 text-champagne-300 bg-champagne-500/10'
                  : 'border-transparent text-platinum-400 hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5 text-champagne-400" />
              Cinematic Showcase
            </button>
          </div>

          {/* Tab 1: Olfactory Pyramid */}
          {activeTab === 'notes' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl glass-sapphire border border-champagne-400/25 bg-gradient-to-b from-sapphire-900 to-sapphire-950">
                <div className="text-xs font-mono uppercase tracking-widest text-champagne-400 mb-2 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne-400"></span>
                  Top Notes (0 - 30 Mins)
                </div>
                <h4 className="text-lg font-serif text-white mb-3">The Opening Radiance</h4>
                <div className="space-y-2">
                  {perfume.notes.top.map((note, i) => (
                    <div key={i} className="flex items-center gap-2 text-platinum-200 text-sm">
                      <span className="w-1.5 h-1.5 bg-champagne-400/60 rounded-full"></span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-platinum-400 mt-4 italic font-serif">
                  The initial burst of fresh brilliance designed to turn heads instantly.
                </p>
              </div>

              <div className="p-6 rounded-3xl glass-sapphire border border-champagne-400/40 bg-gradient-to-b from-sapphire-850 to-sapphire-950 shadow-champagne-glow">
                <div className="text-xs font-mono uppercase tracking-widest text-champagne-300 mb-2 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne-300"></span>
                  Heart Notes (2 - 8 Hours)
                </div>
                <h4 className="text-lg font-serif text-white mb-3">The Soul & Character</h4>
                <div className="space-y-2">
                  {perfume.notes.heart.map((note, i) => (
                    <div key={i} className="flex items-center gap-2 text-platinum-200 text-sm">
                      <span className="w-1.5 h-1.5 bg-champagne-300 rounded-full"></span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-platinum-400 mt-4 italic font-serif">
                  The deep core essence that unfolds as the warmth of your skin awakens the formula.
                </p>
              </div>

              <div className="p-6 rounded-3xl glass-sapphire border border-champagne-400/25 bg-gradient-to-b from-sapphire-900 to-sapphire-950">
                <div className="text-xs font-mono uppercase tracking-widest text-champagne-400 mb-2 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne-500"></span>
                  Base Notes (8 - 24 Hours)
                </div>
                <h4 className="text-lg font-serif text-white mb-3">The Eternal Sillage</h4>
                <div className="space-y-2">
                  {perfume.notes.base.map((note, i) => (
                    <div key={i} className="flex items-center gap-2 text-platinum-200 text-sm">
                      <span className="w-1.5 h-1.5 bg-champagne-500 rounded-full"></span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-platinum-400 mt-4 italic font-serif">
                  The resinous, precious woods and animalic ambers that cling to clothes for days.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Specifications */}
          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl glass-sapphire border border-champagne-400/25 bg-sapphire-900/60">
                <Clock className="w-6 h-6 text-champagne-400 mb-3" />
                <h4 className="text-xs uppercase tracking-widest text-platinum-400 font-mono">Longevity Rating</h4>
                <div className="text-lg font-serif text-white font-bold mt-1">{perfume.longevity}</div>
                <div className="w-full bg-sapphire-950 h-1.5 rounded-full mt-3 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-champagne-400 to-champagne-300 h-full w-[95%]"></div>
                </div>
              </div>

              <div className="p-6 rounded-3xl glass-sapphire border border-champagne-400/25 bg-sapphire-900/60">
                <Wind className="w-6 h-6 text-champagne-400 mb-3" />
                <h4 className="text-xs uppercase tracking-widest text-platinum-400 font-mono">Sillage Projection</h4>
                <div className="text-lg font-serif text-white font-bold mt-1">{perfume.sillage}</div>
                <div className="w-full bg-sapphire-950 h-1.5 rounded-full mt-3 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-champagne-400 to-champagne-300 h-full w-[90%]"></div>
                </div>
              </div>

              <div className="p-6 rounded-3xl glass-sapphire border border-champagne-400/25 bg-sapphire-900/60">
                <Calendar className="w-6 h-6 text-champagne-400 mb-3" />
                <h4 className="text-xs uppercase tracking-widest text-platinum-400 font-mono">Recommended Season</h4>
                <div className="text-lg font-serif text-white font-bold mt-1">{perfume.season}</div>
                <p className="text-xs text-platinum-400 mt-2">Optimal climatic release</p>
              </div>

              <div className="p-6 rounded-3xl glass-sapphire border border-champagne-400/25 bg-sapphire-900/60">
                <Flame className="w-6 h-6 text-champagne-400 mb-3" />
                <h4 className="text-xs uppercase tracking-widest text-platinum-400 font-mono">Best Occasions</h4>
                <div className="text-lg font-serif text-white font-bold mt-1">{perfume.occasion}</div>
                <p className="text-xs text-platinum-400 mt-2">Engineered for unforgettable impressions</p>
              </div>
            </div>
          )}

          {/* Tab 3: Story */}
          {activeTab === 'story' && (
            <div className="p-8 rounded-3xl glass-sapphire border border-champagne-400/30 bg-gradient-to-r from-sapphire-900 to-sapphire-950 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-champagne-400">
                <Crown className="w-4 h-4 text-champagne-400" />
                <span>Formulated by: {perfume.perfumer}</span>
              </div>
              <h3 className="text-2xl font-serif text-white">The Alchemist’s Journal</h3>
              <p className="text-platinum-200 leading-relaxed font-serif text-lg italic">
                "{perfume.story}"
              </p>
              <div className="pt-4 border-t border-champagne-400/15 flex items-center justify-between text-xs text-platinum-400 font-mono">
                <span>Distillation Origin: Grasse, France</span>
                <span>Cask Aging: 180 Days</span>
                <span>Bottle Edition: Hand-Number Limited Batch</span>
              </div>
            </div>
          )}

          {/* Tab 4: Video */}
          {activeTab === 'video' && (
            <div className="relative rounded-3xl overflow-hidden border border-champagne-400/40 bg-black aspect-video max-h-[500px] shadow-2xl">
              <video
                src={perfume.videoUrl}
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sapphire-950/90 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-champagne-400 block mb-1">Cinematic Flacon Film</span>
                    <h3 className="text-2xl font-serif text-white">{perfume.name} • Master Cut</h3>
                  </div>
                  <button
                    onClick={() => setIsVideoMuted(!isVideoMuted)}
                    className="p-3 rounded-full bg-sapphire-950/80 border border-champagne-400/40 text-champagne-300 hover:text-white"
                  >
                    {isVideoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-champagne-400" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-20 p-8 rounded-3xl glass-sapphire border border-champagne-400/30 bg-gradient-to-b from-sapphire-900/90 to-sapphire-950/95">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-champagne-400/20">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-champagne-400 mb-1">
                <UserCheck className="w-4 h-4 text-champagne-400" />
                <span>Verified Connoisseur Impressions</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Client Reviews ({perfume.reviews.length})
              </h3>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-wider text-xs shadow-champagne-glow hover:shadow-champagne-glow-lg transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perfume.reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-sapphire-950/70 border border-champagne-400/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-champagne-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-platinum-400">{rev.date}</span>
                  </div>

                  <h5 className="text-sm font-serif font-bold text-white mb-2">
                    "{rev.title}"
                  </h5>

                  <p className="text-xs text-platinum-300 font-light leading-relaxed mb-4">
                    {rev.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="font-medium text-champagne-200">{rev.author}</span>
                  {rev.verified && (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Perfumes Grid */}
        {relatedPerfumes.length > 0 && (
          <div>
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-champagne-400 block mb-2">
                Complementary Extraits
              </span>
              <h3 className="text-3xl font-serif text-white">
                You May Also Admire
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPerfumes.map((p) => (
                <PerfumeCard key={p.id} perfume={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg p-8 rounded-3xl glass-sapphire border border-champagne-400/40 bg-sapphire-900 shadow-2xl">
            <h3 className="text-2xl font-serif text-white mb-1">
              Submit Your Olfactory Impression
            </h3>
            <p className="text-xs text-platinum-400 mb-6 font-mono">
              Reviewing: {perfume.name}
            </p>

            {reviewSubmitted ? (
              <div className="py-8 text-center text-champagne-300 font-mono">
                <Check className="w-12 h-12 text-emerald-400 mx-auto mb-3 animate-bounce" />
                <p className="text-base font-bold">Thank you for your refined review!</p>
                <p className="text-xs text-platinum-400 mt-1">Your review has been verified and published.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Sterling / Sarah Al-Zahra"
                    value={reviewForm.author}
                    onChange={(e) => setReviewForm({ ...reviewForm, author: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-100 text-xs focus:outline-none focus:border-champagne-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        className="p-1 hover:scale-125 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= reviewForm.rating
                              ? 'fill-champagne-400 text-champagne-400'
                              : 'text-sapphire-700'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono text-champagne-300 ml-2">{reviewForm.rating} Stars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Headline / Summary</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pure royalty in a crystal bottle"
                    value={reviewForm.title}
                    onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-100 text-xs focus:outline-none focus:border-champagne-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-champagne-300 mb-1">Your Detailed Experience</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how the notes evolved on your skin, longevity, compliments received..."
                    value={reviewForm.content}
                    onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sapphire-950/80 border border-champagne-400/30 text-platinum-100 text-xs focus:outline-none focus:border-champagne-400 resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider text-platinum-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-wider text-xs shadow-champagne-glow hover:shadow-champagne-glow-lg"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
