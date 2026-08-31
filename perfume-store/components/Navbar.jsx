"use client";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#collection", label: "Shop" },
  { href: "#story", label: "About" },
  { href: "#newsletter", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none">
            <span className="font-playfair text-2xl font-bold text-[#C9A961] tracking-widest">ZN</span>
            <span className="text-[9px] font-inter uppercase tracking-[0.35em] text-[#A8A29A]">Parfums</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#A8A29A] hover:text-[#C9A961] text-sm font-inter uppercase tracking-[0.15em] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <button className="relative text-[#C9A961] hover:text-[#F5F0E8] transition-colors duration-300 group">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#C9A961] rounded-full text-[10px] text-[#0D0D0D] font-bold flex items-center justify-center">
                0
              </span>
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#A8A29A] hover:text-[#C9A961] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1A1A1A] border-t border-[#2A2A2A] py-4 px-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-[#A8A29A] hover:text-[#C9A961] text-sm uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
