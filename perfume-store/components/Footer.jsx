import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const quickLinks = ["Shop All", "New Arrivals", "Bestsellers", "Gift Sets", "Our Story", "Sustainability"];
const supportLinks = ["FAQ", "Shipping & Returns", "Track Order", "Contact Us", "Privacy Policy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="font-playfair text-3xl font-bold text-[#C9A961] tracking-widest block">ZN</span>
              <span className="text-[10px] font-inter uppercase tracking-[0.4em] text-[#A8A29A]">Parfums</span>
            </div>
            <p className="text-[#A8A29A] text-sm font-inter font-light leading-relaxed mb-6 max-w-xs">
              Masters of olfactory art since 1988. Crafted in Grasse, France. Delivered worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#A8A29A] hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-sm font-semibold text-[#F5F0E8] uppercase tracking-[0.2em] mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#A8A29A] text-sm font-inter hover:text-[#C9A961] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-playfair text-sm font-semibold text-[#F5F0E8] uppercase tracking-[0.2em] mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#A8A29A] text-sm font-inter hover:text-[#C9A961] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-sm font-semibold text-[#F5F0E8] uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "contact@znparfums.com" },
                { icon: Phone, text: "+33 4 93 36 00 00" },
                { icon: MapPin, text: "12 Rue des Fleurs, Grasse 06130, France" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" />
                  <span className="text-[#A8A29A] text-sm font-inter leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            {/* Gold divider + award */}
            <div className="mt-6 pt-6 border-t border-[#2A2A2A]">
              <p className="text-[10px] font-inter uppercase tracking-wider text-[#C9A961] mb-1">? Award Winning</p>
              <p className="text-[#A8A29A] text-xs font-inter">Best Luxury Perfume House 2024<br />Fragrance Foundation Paris</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#A8A29A] text-xs font-inter">
            © 2024 Maison ZN Parfums. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {["?? Visa", "?? Mastercard", "?? SSL Secured"].map((item) => (
              <span key={item} className="text-[10px] font-inter text-[#A8A29A] px-2 py-1 rounded border border-[#2A2A2A]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
