import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionSection from "@/components/CollectionSection";
import BrandStory from "@/components/BrandStory";
import FragranceNotes from "@/components/FragranceNotes";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <CollectionSection />
      <BrandStory />
      <FragranceNotes />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
