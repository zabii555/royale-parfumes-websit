import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERFUMES } from '../data/perfumes';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('zn_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('zn_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [perfumesList, setPerfumesList] = useState(PERFUMES);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeDetailProduct, setActiveDetailProduct] = useState(null); // When set, shows full dedicated detail page
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currency, setCurrency] = useState({ code: 'USD', symbol: '$', rate: 1 });

  useEffect(() => {
    try {
      localStorage.setItem('zn_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('zn_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const addToCart = (product, selectedSize = null, quantity = 1) => {
    const size = selectedSize || product.sizes[1] || { size: '100ml Signature Bottle', price: product.price };
    const cartItemId = `${product.id}-${size.size}`;

    setCart(prevCart => {
      const existing = prevCart.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prevCart.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, cartItemId, selectedSize: size, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item));
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const addReviewToPerfume = (perfumeId, newReview) => {
    setPerfumesList(prev =>
      prev.map(p => {
        if (p.id === perfumeId) {
          const updatedReviews = [newReview, ...p.reviews];
          const newAvgRating = (
            updatedReviews.reduce((sum, r) => sum + Number(r.rating), 0) / updatedReviews.length
          ).toFixed(2);
          return {
            ...p,
            reviews: updatedReviews,
            reviewsCount: updatedReviews.length,
            rating: Number(newAvgRating)
          };
        }
        return p;
      })
    );

    // Also update activeDetailProduct if open
    if (activeDetailProduct && activeDetailProduct.id === perfumeId) {
      setActiveDetailProduct(prev => {
        const updatedReviews = [newReview, ...prev.reviews];
        const newAvgRating = (
          updatedReviews.reduce((sum, r) => sum + Number(r.rating), 0) / updatedReviews.length
        ).toFixed(2);
        return {
          ...prev,
          reviews: updatedReviews,
          reviewsCount: updatedReviews.length,
          rating: Number(newAvgRating)
        };
      });
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.selectedSize.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (amount) => {
    const converted = amount * currency.rate;
    return `${currency.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      perfumesList,
      isCartOpen,
      setIsCartOpen,
      isQuizOpen,
      setIsQuizOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      quickViewProduct,
      setQuickViewProduct,
      activeDetailProduct,
      setActiveDetailProduct,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      selectedGender,
      setSelectedGender,
      sortBy,
      setSortBy,
      currency,
      setCurrency,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleWishlist,
      addReviewToPerfume,
      cartTotal,
      cartCount,
      formatPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
