import React, { useEffect, useState } from "react";

import { Product, useCart } from "./CartContext";
import { X, Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../../../redux/slices/Cart/fetchCartSlice";
export default function CartItem({ product }) {
  const { removeFromCart, addToCart, decreaseQuantity } = useCart();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("first", product);
  }, []);

  return (
    <div className="flex items-center justify-between border-b p-2">
      {/* Product details */}
      <div className="flex items-center gap-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-14 h-14 rounded"
        />
        <div>
          <p className="text-sm font-medium">{product.product.name}</p>
          <p className="text-xs font-semibold">
            ${product.product?.price} × {product.quantity}
          </p>
          <p className="text-xs text-gray-500">Subtotal: ${product.total}</p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(product.id)}
          className="w-8 h-8 flex items-center justify-center border rounded text-gray-700 hover:bg-gray-100"
        >
          <Minus size={16} />
        </button>
        <span className="px-2 font-medium">{product.quantity}</span>
        <button
          onClick={() => addToCart(product)}
          className="w-8 h-8 flex items-center justify-center border rounded text-gray-700 hover:bg-gray-100"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-2 text-gray-500 hover:text-red-500 transition"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
