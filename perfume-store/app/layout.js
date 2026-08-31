import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "ZN Parfums — Luxury Perfume House",
  description: "Discover our exclusive collection of handcrafted luxury perfumes. Premium fragrances crafted with the finest ingredients from around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0D0D0D] text-[#F5F0E8] font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
