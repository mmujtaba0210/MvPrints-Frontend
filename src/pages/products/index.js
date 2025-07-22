"use client";

import { useState } from "react";
import Link from "next/link";
import { FiStar } from "react-icons/fi";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import Layout from "@/components/layouts/Layout";

const ProductsPage = () => {
  // This would typically come from an API or database
  const products = [
    {
      id: 1,
      name: "Business Cards",
      price: 19.99,
      image: "/images/businessCard.png",
      category: "Business Essentials",
    },
    {
      id: 2,
      name: "Poster",
      price: 29.99,
      image: "/images/poster.png",
      category: "Marketing Materials",
    },
    {
      id: 3,
      name: "Flysers",
      price: 49.99,
      image: "/images/flyers.png",
      category: "Marketing Materials",
    },
    {
      id: 4,
      name: "Books & Magazine",
      price: 24.99,
      image: "/images/booksMagazine.png",
      category: "Booklets",
    },
    {
      id: 5,
      name: "Yard Signs",
      price: 24.99,
      image: "/images/yardSigns.png",
      category: "Signages",
    },
    {
      id: 6,
      name: "Retracting Banner",
      price: 24.99,
      image: "/images/retracterBanner.png",
      category: "Promotional",
    },
    {
      id: 7,
      name: "T-Shirts",
      price: 24.99,
      image: "/images/Tshirts.png",
      category: "Promotional",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(200);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesPrice = product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  const handleFilterChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (price) => {
    setMaxPrice(price);
  };

  return (
    <Layout>
      <div className="mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="flex gap-8">
          <FilterSidebar
            onFilterChange={handleFilterChange}
            onPriceChange={handlePriceChange}
          />
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                No products match your selected filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
