import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "ZN Royale No. 1",
    category: "Extrait de Parfum",
    price: "299",
    volume: "50ml",
    badge: "Bestseller",
    notes: "Taif Rose, Kashmiri Saffron, 25-Year Aged Agarwood. A regal symphony of rare florals.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80&fit=crop",
  },
  {
    id: 2,
    name: "Velvet Midnight",
    category: "Eau de Parfum",
    price: "189",
    volume: "100ml",
    badge: "New",
    notes: "Black Oud, Tonka Bean, Vanilla Absolute, Smoked Sandalwood. Dark. Magnetic. Eternal.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80&fit=crop",
  },
  {
    id: 3,
    name: "Desert Gold",
    category: "Extrait de Parfum",
    price: "349",
    volume: "30ml",
    badge: null,
    notes: "Ambergris, Arabian Oud, Musk, Incense. The ancient soul of the Arabian desert.",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80&fit=crop",
  },
  {
    id: 4,
    name: "Empress Rose",
    category: "Eau de Parfum",
    price: "229",
    volume: "75ml",
    badge: "Limited",
    notes: "Bulgarian Rose, Lily of the Valley, White Musk, Cedarwood. Feminine. Timeless. Imperial.",
    image: "https://images.unsplash.com/photo-1547887538-047f08e16597?w=600&q=80&fit=crop",
  },
];

export default function CollectionSection() {
  return (
    <section id="collection" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-inter uppercase tracking-[0.35em] text-[#C9A961] mb-3">
            — Curated for the Discerning —
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            Featured <span className="gold-text italic">Collection</span>
          </h2>
          <div className="w-16 h-px bg-[#C9A961] mx-auto mb-4" />
          <p className="text-[#A8A29A] text-base font-inter font-light max-w-xl mx-auto leading-relaxed">
            Each fragrance is a masterwork — handcrafted in Grasse, France, using centuries-old distillation techniques.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#2A2A2A] text-[#A8A29A] hover:border-[#C9A961]/50 hover:text-[#C9A961] text-sm font-inter uppercase tracking-[0.2em] transition-all duration-300"
          >
            View Entire Collection
          </a>
        </div>
      </div>
    </section>
  );
}
