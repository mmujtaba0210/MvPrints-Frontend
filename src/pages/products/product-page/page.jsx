"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { clearPrints, fetchPrints } from "@/redux/slices/fetchproductSlice";

const Sidebar = dynamic(() => import("../product-page/components/Sidebar"), {
  ssr: false,
});
import ProductsGrid from "./components/ProductsGrid";

export default function AllProductsPage() {
  const [view, setView] = useState(4);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    price: [0, 160],
    color: "",
    rating: 0,
    tags: [],
  });

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.fetchProduct);

  // Fetch products on mount
  useEffect(() => {
    try {
      dispatch(fetchPrints());
      console.log("Redux Products:", data);
    } catch (error) {
      console.log(error);
    }
    return () => {
      dispatch(clearPrints());
    };
  }, [dispatch]);

  // Apply filters directly on redux data (no need for local products state)
  const filteredProducts = data.filter((p) => {
    const matchSearch = p?.name
      ? p.name.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    const matchCategory = filters.category
      ? p?.category === filters.category
      : true;

    const matchPrice =
      Number(p?.price) >= filters.price[0] &&
      Number(p?.price) <= filters.price[1];

    const matchColor = filters.color ? p?.color === filters.color : true;

    const matchRating =
      filters.rating && p?.rating ? p.rating >= filters.rating : true;

    const matchTags =
      filters.tags.length > 0
        ? filters.tags.some((tag) =>
            Array.isArray(p?.tags) ? p.tags.includes(tag) : false
          )
        : true;

    return (
      matchSearch &&
      matchCategory &&
      matchPrice &&
      matchColor &&
      matchRating &&
      matchTags
    );
  });

  return (
    <>
      <h1 className="text-3xl font-bold my-2 mx-6">Our Products</h1>
      <div className="flex w-full min-h-screen">
        {/* Sidebar */}
        <aside className="w-[300px] hidden lg:block bg-white p-4">
          <Sidebar filters={filters} setFilters={setFilters} />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4">
          {/* View switcher */}
          <div className="flex justify-center mb-6 gap-2">
            {[2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setView(num)}
                className={`px-4 py-2 border rounded flex items-center gap-2 ${
                  view === num ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
              >
                <span className="flex gap-1">
                  {Array.from({ length: num }).map((_, i) => (
                    <span
                      key={i}
                      className={`inline-block w-2 h-2 rounded-full ${
                        view === num ? "bg-white" : "border"
                      }`}
                    />
                  ))}
                </span>
              </button>
            ))}
          </div>

          {/* Products */}
          <ProductsGrid products={filteredProducts} view={view} />
        </main>
      </div>
    </>
  );
}
