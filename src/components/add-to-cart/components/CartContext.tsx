"use client";
import React from "react";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number; // 👈 new field
}

interface CartContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id: number) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max((item.quantity ?? 1) - 1, 0) }
              : item
          )
          .filter((item) => (item.quantity ?? 1) > 0) // remove if 0
    );
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
