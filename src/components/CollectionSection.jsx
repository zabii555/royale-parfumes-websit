import React from 'react';
import { Search, RotateCcw, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PerfumeCard from './PerfumeCard';

const CATEGORIES = [
  { id: 'all', label: 'All 15 Masterpieces' },
  { id: 'amber', label: 'Amber & Oriental' },
  { id: 'woody', label: 'Woody & Rare Oud' },
  { id: 'gourmand', label: 'Gourmand & Boozy' },
  { id: 'fresh', label: 'Fresh & Citrus' },
];

const GENDERS = [
  { id: 'all', label: 'All Genders' },
  { id: 'Unisex', label: 'Unisex' },
  { id: 'For Him', label: 'For Him' },
  { id: 'For Her', label: 'For Her' },
];

export default function CollectionSection() {
  const {
    perfumesList,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedGender,
    setSelectedGender,
    sortBy,
    setSortBy,
  } = useCart();

  const query = searchQuery.trim().toLowerCase();

  let filtered = perfumesList.filter((perfume) => {
    const matchesSearch =
      !query ||
      perfume.name.toLowerCase().includes(query) ||
      perfume.subtitle.toLowerCase().includes(query) ||
      perfume.category.toLowerCase().includes(query) ||
      perfume.notes.top.some((note) =>
        note.toLowerCase().includes(query)
      ) ||
      perfume.notes.heart.some((note) =>
        note.toLowerCase().includes(query)
      ) ||
      perfume.notes.base.some((note) =>
        note.toLowerCase().includes(query)
      );

    const matchesCategory =
      selectedCategory === 'all' ||
      perfume.family === selectedCategory;

    const matchesGender =
      selectedGender === 'all' ||
      perfume.gender === selectedGender;

    return matchesSearch && matchesCategory && matchesGender;
  });

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'reviews') {
    filtered = [...filtered].sort(
      (a, b) => b.reviewsCount - a.reviewsCount
    );
  }

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedGender('all');
    setSortBy('featured');
  };

  const hasActiveFilters =
    Boolean(searchQuery) ||
    selectedCategory !== 'all' ||
    selectedGender !== 'all';

  return (
    <section
      id="collection"
      className="mx-auto max-w-7xl px-6 py-32 sm:px-8 lg:px-12 relative"
    >
      {/* Header */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-champagne-400/40 bg-sapphire-900/80 px-5 py-2 text-xs font-mono uppercase tracking-[0.35em] text-champagne-300 shadow-champagne-glow backdrop-blur-md">
          <Crown className="h-3.5 w-3.5 text-champagne-400" />
          <span>The Imperial Collection</span>
        </div>

        <h2 className="mb-5 font-serif text-4xl text-white sm:text-6xl">
          15 Masterpiece{' '}
          <span className="champagne-gradient-text">Extraits</span>
        </h2>

        <p className="text-base font-light text-platinum-300 leading-relaxed">
          Formulated with up to 40% pure oil concentration and aged for 180 days in authentic Limousin oak barrels.
        </p>
      </div>

      {/* Spacious Luxury Filter Console */}
      <div className="mb-16 space-y-6 rounded-3xl border border-champagne-400/30 bg-gradient-to-b from-sapphire-900/90 to-sapphire-950/95 p-8 shadow-2xl glass-sapphire">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap rounded-full px-6 py-3 text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 font-bold text-sapphire-950 shadow-champagne-glow scale-105'
                  : 'border border-white/5 bg-sapphire-800/40 text-platinum-300 hover:bg-sapphire-800 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-stretch justify-between gap-6 border-t border-champagne-400/15 pt-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-champagne-400/20 bg-sapphire-950/80 p-2">
            {GENDERS.map((gender) => (
              <button
                key={gender.id}
                type="button"
                onClick={() => setSelectedGender(gender.id)}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-mono transition-all ${
                  selectedGender === gender.id
                    ? 'border border-champagne-400/50 bg-champagne-500/20 font-semibold text-champagne-300'
                    : 'text-platinum-400 hover:text-platinum-200'
                }`}
              >
                {gender.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-platinum-400 uppercase tracking-widest">
              Sort By:
            </span>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="cursor-pointer rounded-xl border border-champagne-400/30 bg-sapphire-900 px-5 py-2.5 text-xs font-mono text-platinum-200 focus:border-champagne-400 focus:outline-none"
            >
              <option value="featured">Featured Prestige</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs font-mono text-champagne-300">
            <span>
              Showing {filtered.length} of {perfumesList.length} Extraits
              {searchQuery && ` matching "${searchQuery}"`}
            </span>

            <button
              type="button"
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 text-platinum-400 underline underline-offset-4 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="mx-auto max-w-md space-y-4 rounded-3xl p-10 py-20 text-center glass-sapphire border border-champagne-400/30">
          <Search className="mx-auto h-12 w-12 text-champagne-400/40" />

          <h3 className="font-serif text-2xl text-white">
            No fragrances found
          </h3>

          <p className="text-sm text-platinum-400">
            We could not find an extrait matching your criteria. Try resetting your search.
          </p>

          <button
            type="button"
            onClick={handleResetFilters}
            className="rounded-xl border border-champagne-400/40 bg-champagne-500/20 px-8 py-3 text-xs font-mono uppercase tracking-wider text-champagne-300"
          >
            Show All 15 Masterpieces
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      )}
    </section>
  );
}