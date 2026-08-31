const notes = [
  {
    type: "Top Notes",
    icon: "🌸",
    desc: "The first impression — bright, fresh, and fleeting. Lasts 15–30 minutes.",
    ingredients: ["Bergamot", "Taif Rose", "Pink Pepper", "Lemon Zest"],
  },
  {
    type: "Heart Notes",
    icon: "🌹",
    desc: "The soul of the fragrance — rich, complex, and lingering. Lasts 2–4 hours.",
    ingredients: ["Bulgarian Rose", "Jasmine Absolute", "Iris", "Geranium"],
  },
  {
    type: "Base Notes",
    icon: "🪵",
    desc: "The lasting memory — deep, warm, sensual. Stays on skin for 12–24 hours.",
    ingredients: ["Aged Agarwood", "Ambergris", "Vetiver", "Vanilla Absolute"],
  },
];

export default function FragranceNotes() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-xs font-inter uppercase tracking-[0.35em] text-[#C9A961] mb-3">
            — The Anatomy of Scent —
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            Fragrance <span className="gold-text italic">Notes</span>
          </h2>
          <div className="w-16 h-px bg-[#C9A961] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {notes.map((note, i) => (
            <div
              key={note.type}
              className="relative group p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C9A961]/40 transition-all duration-300 hover:-translate-y-1 text-center overflow-hidden"
            >
              <div className="relative mx-auto mb-6 w-24 h-24 rounded-full border-2 border-[#C9A961]/50 bg-[#0D0D0D] flex items-center justify-center group-hover:border-[#C9A961] transition-colors duration-300 shadow-[0_0_30px_rgba(201,169,97,0.08)] group-hover:shadow-[0_0_40px_rgba(201,169,97,0.2)]">
                <span className="text-4xl">{note.icon}</span>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#C9A961] text-[#0D0D0D] text-[10px] font-bold font-inter flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <div className="relative">
                <h3 className="font-playfair text-xl font-bold text-[#C9A961] mb-3">{note.type}</h3>
                <p className="text-[#A8A29A] text-sm font-inter font-light leading-relaxed mb-6">
                  {note.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {note.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-3 py-1 rounded-full text-[10px] font-inter uppercase tracking-wider bg-[#0D0D0D] border border-[#2A2A2A] text-[#A8A29A] group-hover:border-[#C9A961]/30 group-hover:text-[#C9A961] transition-colors duration-300"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}