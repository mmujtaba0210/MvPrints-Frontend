"use client";
import React, { useEffect, useState } from "react";

import { X } from "lucide-react";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import CartSuggestions from "./CartSuggestions";
import CartTabs from "./CartTabs";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "@/redux/slices/Cart/fetchCartSlice";

export default function CartSlider() {
  const [cartItem, setCartItem] = useState([]);
  const { isOpen, setIsOpen, cart } = useCart();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.fetchCart.items);
  useEffect(() => {
    try {
      dispatch(fetchCartItems());
      console.log("Cart items:", items);
      setCartItem(items);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[50%] bg-white flex transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Left suggestions */}
        <div className="w-[35%]">
          <CartSuggestions />
        </div>
        {/* Right cart */}
        <div className="w-10/12 flex flex-col">
          <div className="flex justify-between items-center p-4 ">
            <h2 className="font-bold text-lg">Shopping Cart</h2>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="mb-4 bg-[#f5f6ec] rounded-2xl p-8">
              <div className="w-full bg-gray-200 h-2">
                <div className="bg-gradient-to-r from-[#1a470f] to-[#3ba424] h-2 w-3/4 rounded relative">
                  <div className="absolute size-8 right-0 -top-3 border border-[#3ba424] bg-gray-200 rounded-full" />
                </div>
              </div>
              <p className="text-sm mt-3">
                Congratulations! You’ve got free shipping!
              </p>
            </div>

            {cartItem.length === 0 ? (
              <p className="text-sm p-2">
                Your Cart is empty. Start adding favorite products to the cart!{" "}
                <a href="/shop" className="underline">
                  Explore Products
                </a>
              </p>
            ) : (
              cartItem.map((p) => <CartItem key={p.id} product={p} />)
            )}
          </div>
          <div className="shadow-2xl">
            <CartTabs />
            <div className="p-4 border-t">
              <p className="flex text-2xl font-semibold justify-between">
                <span>Subtotal</span>
                <span>
                  $
                  {cart
                    .reduce(
                      (sum, item) => sum + item.price * (item.quantity ?? 1),
                      0
                    )
                    .toFixed(2)}
                </span>
              </p>

              <div className="mt-4">
                <label className="text-base flex items-center gap-2">
                  <input type="checkbox" /> I agree with{" "}
                  <a href="/terms" className="underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <div className="flex gap-2 mt-7">
                <button className="w-1/2 border border-black rounded p-4">
                  View Cart
                </button>
                <button className="w-1/2 bg-black text-white rounded p-4">
                  Checkout
                </button>
              </div>
              <p className="text-center text-base mt-5 uppercase font-semibold">
                Or continue shopping
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
