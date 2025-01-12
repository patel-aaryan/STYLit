"use client";
import React, { createContext, useState, useContext } from "react";

const ClothingContext = createContext();

export function ClothingProvider({ children }) {
  const [shirts, setShirts] = useState(() => {
    if (typeof window === 'undefined') return [];
      const saved = localStorage.getItem('wardrobe-shirts');
      return saved ? JSON.parse(saved) : [];
  });
  const [pants, setPants] = useState(null);
  const [hats, setHats] = useState(null);

  return (
    <ClothingContext.Provider
      value={{ shirts, setShirts, pants, setPants, hats, setHats }}
    >
      {children}
    </ClothingContext.Provider>
  );
}

export function useClothing() {
  const context = useContext(ClothingContext);
  if (!context) throw new Error("useClothing must be used ClothingProvider");

  return context;
}
