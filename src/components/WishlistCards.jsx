import React from "react";
import Link from "next/link";
import { FiStar, FiTrash } from "react-icons/fi";

const WishlistCard = ({ product, onRemove }) => {
  const isInStock = product.stockStatus !== "Out of Stock";

  return (
    <div
      className={`relative group w-full bg-white rounded-lg shadow-md border border-[#cec7c7] overflow-hidden hover:shadow-lg transition-shadow p-4 flex space-x-4 items-start ${
        !isInStock ? "opacity-60" : ""
      }`}
    >
      {/* Remove Icon */}
      <button
        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow hover:bg-red-100 text-gray-400 hover:text-red-500 transition-opacity border border-gray-200  2xl:text-2xl"
        style={{ opacity: 1, transition: "opacity 0.2s" }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRemove && onRemove(product.id);
        }}
        aria-label="Remove from wishlist"
      >
        <FiTrash className="w-5 h-5" />
      </button>

      <Link
        href={`/products/${product.id}`}
        key={product.id}
        className="flex items-start space-x-4 w-full"
      >
        <div className="relative w-32 h-32  2xl:size-[12rem] flex items-center justify-center bg-gray-100 rounded-lg p-2">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full  object-contain"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-bold truncate  2xl:text-4xl">
            {product.name}
          </h2>
          <p
            className={`text-sm  2xl:text-2xl font-semibold ${
              isInStock ? "text-green-600" : "text-red-600"
            } mt-1`}
          >
            {product.stockStatus}
          </p>
          <div className="flex items-baseline space-x-2 mt-2">
            <p className="text-xl font-bold  2xl:text-3xl">${product.price}</p>
            {product.originalPrice && (
              <p className="text-sm  2xl:text-2xl text-gray-500 line-through">
                ${product.originalPrice}
              </p>
            )}
            {product.discount && (
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-0.5  2xl:text-2xl rounded-full">
                {product.discount}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-2">
              <button
                className={`flex items-center justify-center text-white font-semibold py-2 px-4 rounded-md  2xl:text-3xl ${
                  isInStock
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isInStock}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1  2xl:size-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add Cart
              </button>
              <button className="flex items-center justify-center border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 space-x-1  2xl:text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5  2xl:size-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span>Save for Later</span>
              </button>
            </div>

            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-4 h-4  2xl:size-6 ${
                        i < Math.round((product.ratings / product.ratings) * 5)
                          ? "fill-current"
                          : ""
                      }`}
                    />
                  ))}
              </div>
              {product.ratings !== undefined && (
                <span className="text-sm  2xl:text-2xl text-gray-600 ml-1">
                  ({product.ratings}) Ratings
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WishlistCard;
