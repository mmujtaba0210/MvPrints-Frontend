// YouMightAlsoLike.jsx
import React from "react";

const products = [
  {
    id: 1,
    label: "Best Seller",
    name: "Business Cards",
    price: "From £9.99",
    rating: 4,
  },
  {
    id: 2,
    label: "New",
    name: "Posters",
    price: "From £14.99",
    rating: 4,
  },
  {
    id: 3,
    label: "",
    name: "Brochures",
    price: "From £19.99",
    rating: 5,
  },
  {
    id: 4,
    label: "Popular",
    name: "Stickers",
    price: "From £7.99",
    rating: 3,
  },
];

// ⭐ Render stars based on rating
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const YouMightAlsoLike = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
          You Might Also Like
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Explore our range of premium printing solutions to complement your
          marketing materials
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden relative hover:scale-105 transition-transform"
            >
              {/* Label */}
              {product.label && (
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {product.label}
                </span>
              )}

              {/* Image Placeholder */}
              <div className="h-36 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image</span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-purple-600 font-medium mb-2">
                  {product.price}
                </p>
                <div className="flex items-center justify-end">
                  <StarRating rating={product.rating} />
                </div>
              </div>

              {/* Footer */}
              <div className="border-t p-3 text-center">
                <a
                  href="#"
                  className="text-purple-600 text-sm font-medium hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMightAlsoLike;
