"use client";
import React from "react";

import { useCart } from "./CartContext";

const suggestions = [
  {
    id: 1,
    title: "Belt wrap dress",
    price: 59.99,
    image: "https://modavenextjs.vercel.app/images/products/womens/women-1.jpg",
  },
  {
    id: 2,
    title: "Casual top",
    price: 39.99,
    image: "https://modavenextjs.vercel.app/images/products/womens/women-2.jpg",
  },
  {
    id: 3,
    title: "Belt wrap dress",
    price: 59.99,
    image: "https://modavenextjs.vercel.app/images/products/womens/women-3.jpg",
  },
  {
    id: 4,
    title: "Casual top",
    price: 39.99,
    image: "https://modavenextjs.vercel.app/images/products/womens/women-4.jpg",
  },
  {
    id: 5,
    title: "Belt wrap dress",
    price: 59.99,
    image: "https://modavenextjs.vercel.app/images/products/womens/women-6.jpg",
  },
  {
    id: 6,
    title: "Casual top",
    price: 39.99,
    image: "https://modavenextjs.vercel.app/images/products/womens/women-5.jpg",
  },
];

export default function CartSuggestions() {
  const { addToCart } = useCart();

  return (
    <div className="h-full overflow-y-auto scrollbar-hide p-4 border-r w-full">
      <h2 className="font-bold mb-4  text-lg">You May Also Like</h2>
      {suggestions.map((product) => (
        <div key={product.id} className="mb-8 mt-10 cursor-pointer group">
          <div className="relative">
            <img src={product.image} className="w-full rounded" />
            <p className="text-base mt-2 ">{product.title}</p>

            <div className="absolute -bottom-7  left-0  text-center">
              <p className="text-base font-semibold transition-all duration-300 group-hover:translate-y-[-100%] group-hover:opacity-0">
                ${product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="absolute  -translate-x- left-0 -top-1 text-base font-semibold   rounded  py-1 opacity-0 translate-y-[100%] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:underline w-max"
              >
                Add to cart
              </button>
            </div>
          </div>

          {/* Title */}
        </div>
      ))}
    </div>
  );
}
