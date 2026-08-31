export default function BrandStory() {
  return (
    <section id="story" className="py-24 bg-[#1A1A1A] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 border border-[#2A2A2A]">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&fit=crop"
                alt="Our Perfume Atelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl p-5 shadow-xl">
              <p className="font-playfair text-3xl font-bold text-[#C9A961]">35+</p>
              <p className="text-[10px] font-inter uppercase tracking-widest text-[#A8A29A] mt-0.5">Years of Craft</p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C9A961]/30 rounded-tl-2xl" />
          </div>

          {/* Right: Text */}
          <div className="space-y-6 lg:pl-8">
            <p className="text-xs font-inter uppercase tracking-[0.35em] text-[#C9A961]">
              -- Our Heritage --
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] leading-tight">
              Born in the Fields of{" "}
              <span className="gold-text italic">Grasse, France</span>
            </h2>
            <div className="w-12 h-px bg-[#C9A961]" />
            <p className="text-[#A8A29A] text-base font-inter font-light leading-relaxed">
              Since 1988, Maison ZN has been crafting olfactory masterpieces from the sun-drenched fields of Grasse. Our master perfumers spend decades studying the art of scent before a single drop is distilled.
            </p>
            <p className="text-[#A8A29A] text-base font-inter font-light leading-relaxed">
              Every flacon is filled with up to 40% pure natural oil extraits. We source saffron from Kashmir, rose from Taif, and agarwood aged for a quarter century in Indonesian forests.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { title: "Artisan Crafted", desc: "Every bottle made by hand in our Grasse atelier" },
                { title: "Rare Ingredients", desc: "Sourced from 14 countries across 5 continents" },
                { title: "Zero Compromise", desc: "No synthetics, no shortcuts, ever" },
                { title: "Legacy Recipes", desc: "Formulas preserved across three generations" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#C9A961]/30 transition-colors duration-300">
                  <p className="font-playfair text-sm font-semibold text-[#C9A961] mb-1">{item.title}</p>
                  <p className="text-[#A8A29A] text-xs font-inter leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}