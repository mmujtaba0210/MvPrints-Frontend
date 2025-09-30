"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartButton() {
  const { setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative  hover:cursor-pointer rounded-full  hover:scale-105 transition"
    >
      <ShoppingBag size={20} />
    </button>
  );
}
