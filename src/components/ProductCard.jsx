import React from "react";
import Link from "next/link";
import { FiStar } from "react-icons/fi";

const ProductCard = ({ product, click }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      key={product.id}
      className="bg-white rounded-lg shadow-md border border-[#cec7c7] overflow-hidden hover:shadow-lg transition-shadow w-full"
      onClick={click}
    >
      <div className="relative p-4 flex justify-center bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[160px] object-contain transition-transform hover:scale-110"
        />
      </div>
      <div className="flex justify-between items-center py-2 px-3 bg-gray-100">
        <div>
          <h2 className="text-sm  2xl:text-3xl sm:text-md font-bold truncate max-w-[120px]">
            {product.name}
          </h2>
          <p className="flex gap-1 2xl:text-[20px] text-sm items-center">
            <FiStar color="gold" fill="gold" /> 4.5
          </p>
        </div>
        <div>
          <p className="text-sm sm:text-md text-gray-500 2xl:text-3xl">
            $ {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
