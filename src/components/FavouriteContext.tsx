import React, { createContext, useContext, useState } from "react";

interface FavoriteContextType {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoriteContext); // Get the context
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => { 
    setFavoriteIds((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  }; // toggleFavorite function

  return (
    <FavoriteContext.Provider value={{ favoriteIds, toggleFavorite }}> 
      {/* Provide the value to the context */}
      {children}
    </FavoriteContext.Provider>
  );
};
