"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "@/redux/slices/Wishlist/fetchWishlistSlice";
import { deleteWishlist } from "@/redux/slices/Wishlist/deleteWishlistSlice";
import { clearAllWishlist } from "@/redux/slices/Wishlist/clearAllWishlistSlice";
import WishlistCards from "@/components/WishlistCards";
import toast from "react-hot-toast";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const { wishlist, loading } = useSelector((state) => state.fetchWishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const handleRemove = async (id) => {
    await dispatch(deleteWishlist(id));
    dispatch(fetchWishlist());
  };

  const handleClearAll = async () => {
    await dispatch(clearAllWishlist());
    dispatch(fetchWishlist());
  };

  return (
    <div className="mx-auto p-8 min-h-screen">
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-bold text-[#0096ff] 2xl:text-5xl">
          My Wishlists
        </h1>
        <button
          onClick={handleClearAll}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear All
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 pb-10">
          {wishlist.map((item) => (
            <WishlistCards
              key={item.id}
              product={{
                id: item.id,
                name: item.product?.name,
                price: item.product?.price,
                image: "/images/default.png",
                stockStatus:
                  item.product?.stock > 0 ? "In Stock" : "Out of Stock",
              }}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
