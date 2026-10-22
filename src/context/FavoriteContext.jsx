// src/context/FavoritesContext.jsx (For Funzymart only)

import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite
  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Check if item is favorite
  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  // Clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;