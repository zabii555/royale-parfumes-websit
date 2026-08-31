import React, { useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionSection from './components/CollectionSection';
import OlfactoryNotesExplorer from './components/OlfactoryNotesExplorer';
import VideoShowcase from './components/VideoShowcase';
import BrandStory from './components/BrandStory';
import PressEditorialSection from './components/PressEditorialSection';
import VIPConciergeGuarantee from './components/VIPConciergeGuarantee';
import ProductDetailView from './components/ProductDetailView';
import QuickViewModal from './components/QuickViewModal';
import FragranceQuizModal from './components/FragranceQuizModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

function MainApp() {
  const { activeDetailProduct } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeDetailProduct]);

  return (
    <div className="min-h-screen bg-sapphire-950 text-platinum-200 flex flex-col justify-between selection:bg-champagne-400 selection:text-sapphire-950">
      <Navbar />

      <main className="flex-grow">
        {activeDetailProduct ? (
          <ProductDetailView perfume={activeDetailProduct} />
        ) : (
          <>
            <Hero />
            <CollectionSection />
            <OlfactoryNotesExplorer />
            <VideoShowcase />
            <BrandStory />
            <PressEditorialSection />
            <VIPConciergeGuarantee />
          </>
        )}
      </main>

      <Footer />

      {/* Global Interactive Overlays */}
      <QuickViewModal />
      <FragranceQuizModal />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
