import CustomButton from "@/components/CustomButton";
import React from "react";
import { FaTrash } from "react-icons/fa";

const products = [
  {
    name: "UNISEX COMFORT T-SHIRT",
    price: "$19",
    rating: "⭐⭐⭐⭐",
    description:
      "The Unisex T-Shirt offers a blend of comfort and style. Made from 100% cotton, it is perfect for everyday wear. Available in multiple colors and sizes.",
    image: "/images/Tshirts.png",
    actions: ["Add to Cart", "Buy Now", "delete"],
  },
  {
    name: "BUSINESS CARDS",
    price: "$22",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Impress your clients with these premium business cards. Printed on high-quality cardstock with a glossy finish. Customizable design.",
    image: "/images/businessCard.png",
    actions: ["Add to Cart", "Buy Now", "delete"],
  },
  {
    name: "PREMIUM LONG SLEEVE CHEF COAT",
    price: "$29",
    rating: "⭐⭐⭐⭐",
    description:
      "This chef coat is designed for comfort and durability. Features a double-breasted front, long sleeves, and breathable fabric.",
    image: "/images/poster.png",
    actions: ["Add to Cart", "Buy Now", "delete"],
  },
  {
    name: "BROCHURES",
    price: "$27",
    rating: "⭐⭐⭐",
    description:
      "High-quality brochures to showcase your business. Full-color printing, various folding options, and fast turnaround.",
    image: "/images/flyers.png",
    actions: ["Add to Cart", "Buy Now", "delete"],
  },
];

const attributes = [
  { label: "Product Name", key: "name" },
  { label: "Price", key: "price" },
  { label: "Rating", key: "rating" },
  { label: "Description", key: "description" },
];

const ComparePage = () => {
  return (
    <div className=" min-h-screen p-4">
      <h2 className="text-2xl font-bold text-[#fa09a7] 2xl:text-5xl text-center mb-8">
        COMPARE PRODUCTS
      </h2>
      <div className="overflow-x-auto shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-2xl">
        <div className="min-w-full grid grid-cols-1 sm:grid-cols-5  border border-gray-300 rounded-2xl">
          {/* Header Row: Images */}
          <div className="font-semibold p-4 border-b border-gray-300"></div>
          {products.map((product, idx) => (
            <div
              className="flex flex-col items-center p-4 border-b border-l border-gray-300"
              key={idx}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 object-contain mb-2 rounded"
              />
            </div>
          ))}
          {/* Attribute Rows */}
          {attributes.map((attr) => (
            <React.Fragment key={attr.key}>
              <div className="font-semibold 2xl:text-3xl p-4 border-b border-gray-300 flex items-center">
                {attr.label}
              </div>
              {products.map((product, idx) => (
                <div
                  className="p-4 border-b border-l 2xl:text-3xl border-gray-300 flex items-center"
                  key={idx}
                >
                  {product[attr.key]}
                </div>
              ))}
            </React.Fragment>
          ))}
          {/* Actions Row */}
          <div className="p-4"></div>
          {products.map((product, idx) => (
            <div
              className="flex gap-2 2xl:text-2xl items-center p-4 border-l border-gray-300"
              key={idx}
            >
              {product.actions.map((action, aIdx) =>
                action === "delete" ? (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition cursor-pointer"
                    key={aIdx}
                  >
                    <FaTrash />
                  </button>
                ) : (
                  <CustomButton
                    text={action}
                    width="44%"
                    key={aIdx}
                    onClick={() => {}}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
