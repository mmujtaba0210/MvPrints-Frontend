"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { FiEye, FiTag, FiTruck } from "react-icons/fi";
import { FaRegStickyNote } from "react-icons/fa";

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems,
  subtotal,
  recommendations,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  // Sample related products
  const relatedProducts = [
    {
      id: 1,
      name: "Flyers",
      price: 29.99,
      image: "/images/flyers.png",
    },
    {
      id: 2,
      name: "T-Shits",
      price: 15,
      image: "/images/Tshirts.png",
    },
    {
      id: 3,
      name: "Business Cards",
      price: 20,
      image: "/images/businessCard.png",
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[#00000021] bg-opacity-40 z-40 transition-opacity duration-300 cursor-not-allowed"
        onClick={onClose}
      />
      {/* Sidebar */}
      <div className="flex">
        <aside className="fixed top-0 right-128 w-56 px-3 pt-4 max-w-md h-full bg-white shadow-lg z-50 transform transition-transform duration-300">
          <h3 className="font-bold text-lg mb-3">You May Also Like</h3>
          <div className="grid grid-cols-1 gap-3">
            {relatedProducts.map((product) => (
              <ProductCard product={product} key={product.id} click={onClose} />
            ))}
          </div>
        </aside>

        <aside className="fixed top-0 right-0 w-full max-w-lg h-full bg-white border-l border-[#ccc4c4] z-50 transform transition-transform duration-300">
          <div className="flex items-center justify-between px-4 pt-4">
            <p className="text-xl font-semibold">Shopping Cart</p>
            <button className="text-2xl font-bold" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="flex flex-col w-full h-full justify-between p-6">
            <div>
              <div className="text-[#2e8a1a] bg-[#f5f6ec] p-4 font-semibold rounded-lg text-lg mb-4">
                Success! Item added to cart
              </div>
              <div className="flex items-center mb-6">
                <img
                  src="/images/businessCard.png"
                  alt="Product"
                  className="w-25 h-25 object-contain mr-4"
                />
                <div className="flex w-full justify-between items-center gap-4">
                  <div>
                    <h3 className="text-[#0096ff] font-semibold">
                      Event Tickets
                    </h3>
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <p className="text-red-600 font-semibold underline cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>
                        1 X {cartItems.length > 0 ? cartItems[0].name : "85"}
                      </p>
                      <p className="font-semibold text-lg">
                        ${subtotal.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-around border-b border-[#ccc4c4] pb-4 ">
                <p className="flex items-center gap-2"> <FaRegStickyNote /> Note</p>
                <p className="flex items-center gap-2"> <FiEye /> View Artwork</p>
                <p className="flex items-center gap-2"> <FiTag /> Coupon</p>
              </div>
              {/* Subtotal Section */}
              <div className="flex justify-between items-center py-4">
                <p className="text-2xl font-semibold">Subtotal</p>
                <p className="text-2xl font-semibold">${subtotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-between mb-15">
                <a href="/">
                  <button className="bg-transparent hover:border-[#fa09a7] text-[#333333] font-semibold px-5 py-2 border border-[#0096ff] rounded w-full cursor-pointer">
                    Continue Shopping
                  </button>
                </a>
                <a href="/checkout">
                  <button className="bg-[#0096ff] hover:bg-[#fa09a7] text-white font-semibold px-5 py-2 rounded w-full transition-all duration-280 cursor-pointer">
                    Proceed to Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default CartSidebar;
