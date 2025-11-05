"use client";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/Cart/addCartSlice";
import toast from "react-hot-toast";
import { fetchCartItems } from "@/redux/slices/Cart/fetchCartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = (product) => {
    const formData = new FormData();
    formData.append("product_id", product.id);
    formData.append("quantity", 1);
    formData.append("options[color]", "Red");
    formData.append("options[size]", "XL");

    setAdded(true);
    dispatch(addToCart(formData))
      .unwrap()
      .then(() => {
        toast.success("Product added to cart successfully!");
        return dispatch(fetchCartItems());
      })
      .catch(() => {
        toast.error("Failed to add product to cart!");
      })
      .finally(() => {
        setAdded(false);
      });
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

        {/* Hover Add to Cart */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={() => handleAddToCart(product)}
            className={`px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition ${
              added ? "cursor-progress" : "cursor-pointer"
            }`}
          >
            {added ? "Adding..." : "Add to Cart"}
          </button>
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
