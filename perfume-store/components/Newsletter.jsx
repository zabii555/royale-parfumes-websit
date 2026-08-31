"use client";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-[#C9A961]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#C9A961]/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#C9A961]/20 rounded-br-3xl" />

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A961]/30 bg-[#C9A961]/5 mb-6">
            <Sparkles className="w-6 h-6 text-[#C9A961]" />
          </div>

          {/* Heading */}
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-3">
            Join the <span className="gold-text italic">Inner Circle</span>
          </h2>
          <p className="text-[#A8A29A] text-base font-inter font-light mb-8 max-w-lg mx-auto leading-relaxed">
            Be the first to know about new launches, exclusive events, and private client privileges. No spam — only scented elegance.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-[#0D0D0D] border border-[#2A2A2A] text-[#F5F0E8] text-sm font-inter placeholder:text-[#A8A29A] focus:outline-none focus:border-[#C9A961]/50 transition-colors duration-300"
            />
            <button
              type="submit"
              className={`px-6 py-3.5 rounded-full font-inter text-sm font-medium uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all duration-300 ${
                sent
                  ? "bg-green-600/20 border border-green-500/40 text-green-400"
                  : "bg-[#C9A961] hover:bg-[#8B6F3F] text-[#0D0D0D]"
              }`}
            >
              <Send className="w-4 h-4" />
              {sent ? "Subscribed!" : "Subscribe"}
            </button>
          </form>

          {/* Fine print */}
          <p className="text-[#A8A29A] text-[11px] font-inter mt-4 uppercase tracking-widest">
            Unsubscribe anytime · Zero spam · Private & secure
          </p>
        </div>
      </div>
    </section>
  );
}
