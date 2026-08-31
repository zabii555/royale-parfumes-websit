const testimonials = [
  {
    id: 1,
    name: "Isabella Laurent",
    title: "Fashion Editor, Paris",
    rating: 5,
    review: "ZN Royale No. 1 is nothing short of a masterpiece. The sillage is extraordinary — people stop me on the street to ask what I am wearing. This is the pinnacle of perfumery.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&fit=crop",
    perfume: "ZN Royale No. 1",
  },
  {
    id: 2,
    name: "Alexander Kh.",
    title: "Luxury Fragrance Collector",
    rating: 5,
    review: "I have spent twenty years collecting the finest fragrances from Roja, Clive Christian, and Amouage. Velvet Midnight stands alongside the very best of them. The oud is exceptional.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop",
    perfume: "Velvet Midnight",
  },
  {
    id: 3,
    name: "Sophia Al-Rashidi",
    title: "CEO, Riyadh",
    rating: 5,
    review: "Desert Gold transported me to the souks of my childhood. The ambergris accord is hauntingly beautiful. I ordered twelve bottles. This fragrance is my signature.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&fit=crop",
    perfume: "Desert Gold",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1A1A1A] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-inter uppercase tracking-[0.35em] text-[#C9A961] mb-3">
            — What Our Patrons Say —
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            Client <span className="gold-text italic">Testimonials</span>
          </h2>
          <div className="w-16 h-px bg-[#C9A961] mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative p-8 rounded-3xl bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#C9A961]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(201,169,97,0.08)] flex flex-col"
            >
              {/* Gold quotation mark */}
              <div className="font-playfair text-7xl text-[#C9A961]/20 leading-none mb-2 select-none">
                "
              </div>

              {/* Review text */}
              <p className="text-[#A8A29A] text-sm font-inter font-light leading-relaxed italic flex-grow mb-6">
                "{t.review}"
              </p>

              {/* Star rating */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#C9A961] text-sm">?</span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-[#2A2A2A] mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#C9A961]/30">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-playfair text-sm font-semibold text-[#F5F0E8]">{t.name}</p>
                  <p className="text-[10px] font-inter text-[#A8A29A] uppercase tracking-wider">{t.title}</p>
                </div>
                <div className="ml-auto px-2.5 py-1 rounded-full bg-[#C9A961]/10 border border-[#C9A961]/20">
                  <p className="text-[9px] font-inter text-[#C9A961] uppercase tracking-wider">{t.perfume}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 py-8 border-t border-[#2A2A2A]">
          {[
            { val: "4.9/5", label: "Average Rating" },
            { val: "12,000+", label: "Happy Clients" },
            { val: "98%", label: "Repeat Orders" },
            { val: "50+", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair text-2xl font-bold text-[#C9A961]">{stat.val}</p>
              <p className="text-[10px] font-inter uppercase tracking-wider text-[#A8A29A] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
