"use client";
import { useState } from "react";
import React from "react";

export default function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setSelectedSize(null);
    }, 2000);
  };

  return (
    <div className="group relative border rounded-xl shadow hover:shadow-lg transition bg-white overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={product?.media?.[0]?.file_path || "/placeholder.png"}
          alt={product?.name || "Product"}
          className="w-full h-56 object-cover rounded-t-xl"
        />

        {/* Hover Add to Cart / Sizes */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition">
          {Array.isArray(product?.sizes) && product.sizes.length > 0 ? (
            <div className="flex gap-2 flex-wrap justify-center">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`px-3 py-1 rounded-md border transition ${
                    selectedSize === size
                      ? "bg-purple-600 text-white"
                      : "bg-white hover:bg-purple-100"
                  }`}
                >
                  {size}
                </button>
              ))}
              {added && selectedSize && (
                <span className="text-green-600 font-semibold ml-2">
                  Added!
                </span>
              )}
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              {added ? "Added!" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-3 text-center">
        <h3 className="font-semibold">{product?.name ?? "Unnamed"}</h3>
        <p className="text-purple-600 font-bold">${product?.price ?? 0}</p>
      </div>
    </div>
  );
}
