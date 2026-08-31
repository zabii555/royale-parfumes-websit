import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const QUESTIONS = [
  {
    id: 1,
    question: "What atmosphere or mood speaks to your soul?",
    options: [
      { label: "Opulent Black-Tie Gala & Golden Chandeliers", family: "amber" },
      { label: "Executive Boardroom & Smoky Power", family: "woody" },
      { label: "Cozy Fireside Velvet Lounge & Spiced Rum", family: "gourmand" },
      { label: "Mediterranean Sea Breeze & Crisp Alpine Air", family: "fresh" }
    ]
  },
  {
    id: 2,
    question: "Which primary scent note makes you feel irresistible?",
    options: [
      { label: "Kashmir Saffron & Molten Ambergris", note: "saffron", family: "amber" },
      { label: "Smoked Pineapple, French Birch & Oakmoss", note: "pineapple", family: "woody" },
      { label: "Vintage Cognac, Roasted Tonka & Vanilla", note: "cognac", family: "gourmand" },
      { label: "Crisp Green Tea, Bergamot & White Musk", note: "tea", family: "fresh" }
    ]
  },
  {
    id: 3,
    question: "What level of sillage projection do you demand?",
    options: [
      { label: "Eternal & Monolithic (Magnetic 4-Meter Trail)", sillage: "heavy" },
      { label: "Authoritative & Elegant (Commands respect in any room)", sillage: "moderate" },
      { label: "Intimate & Sensual (Hypnotic closeness on skin)", sillage: "intimate" }
    ]
  }
];

export default function FragranceQuizModal() {
  const { 
    isQuizOpen, 
    setIsQuizOpen, 
    perfumesList, 
    setActiveDetailProduct, 
  } = useCart();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [matchedPerfume, setMatchedPerfume] = useState(null);

  if (!isQuizOpen) return null;

  const handleSelectOption = (option) => {
    const newAnswers = { ...answers, [step]: option };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      const preferredFamily = newAnswers[0]?.family || "amber";
      const match = perfumesList.find(p => p.family === preferredFamily) || perfumesList[0];
      setMatchedPerfume(match);
      setStep(QUESTIONS.length);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setMatchedPerfume(null);
  };

  const handleViewMatch = () => {
    if (matchedPerfume) {
      setIsQuizOpen(false);
      setActiveDetailProduct(matchedPerfume);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in">
      <div className="relative w-full max-w-2xl p-8 rounded-3xl glass-sapphire border border-champagne-400/40 bg-sapphire-900 shadow-champagne-glow-lg">
        
        {/* Close Button */}
        <button
          onClick={() => setIsQuizOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-sapphire-950/80 border border-champagne-400/30 text-platinum-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {step < QUESTIONS.length ? (
          <div>
            {/* Step Counter */}
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-champagne-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Olfactory Diagnostic
              </span>
              <span>Step {step + 1} of {QUESTIONS.length}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-sapphire-950 h-1.5 rounded-full mb-8 overflow-hidden border border-white/10">
              <div
                className="bg-gradient-to-r from-champagne-400 to-champagne-300 h-full transition-all duration-500"
                style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
              ></div>
            </div>

            {/* Question */}
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
              {QUESTIONS[step].question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {QUESTIONS[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(opt)}
                  className="w-full p-4 rounded-2xl bg-sapphire-950/60 hover:bg-champagne-500/20 border border-champagne-400/20 hover:border-champagne-400 text-left text-platinum-200 transition-all duration-300 flex items-center justify-between group shadow-sm"
                >
                  <span className="text-sm font-medium group-hover:text-champagne-200">
                    {opt.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-champagne-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Match Result Screen */
          matchedPerfume && (
            <div className="text-center py-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-champagne-500/20 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-widest mb-4 shadow-champagne-glow">
                <Crown className="w-4 h-4 text-champagne-400" />
                <span>Your 99.4% Signature Scent Match</span>
              </div>

              <h3 className="text-3xl font-serif text-white mb-2">
                {matchedPerfume.name}
              </h3>
              <p className="text-base font-serif italic text-champagne-200/90 mb-6">
                "{matchedPerfume.subtitle}"
              </p>

              <div className="max-w-xs mx-auto aspect-square rounded-2xl overflow-hidden border border-champagne-400/40 mb-6 shadow-champagne-glow">
                <img
                  src={matchedPerfume.image}
                  alt={matchedPerfume.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs text-platinum-300 font-light max-w-md mx-auto mb-6">
                {matchedPerfume.description}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleViewMatch}
                  className="px-6 py-3.5 bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-champagne-glow hover:shadow-champagne-glow-lg flex items-center justify-center gap-2"
                >
                  <span>Explore Full Olfactory Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleReset}
                  className="px-5 py-3.5 bg-sapphire-950/80 border border-champagne-400/30 text-platinum-300 hover:text-white rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
}
