"use client";
import ProductCard from "./ProductCard";
import React from "react";

export default function ProductsGrid({ products = [], view }) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };

  return (
    <div
      className={`grid gap-4 grid-cols-1 sm:grid-cols-2 ${
        gridCols[view] || "md:grid-cols-4"
      }`}
    >
      {products?.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found
        </p>
      )}
    </div>
  );
}
