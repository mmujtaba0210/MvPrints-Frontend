import { useState } from "react";

import Layout from "@/components/layouts/Layout";
import AllProductsPage from "./product-page/page";

const ProductsPage = () => {
  return (
    <Layout>
      {/* <div className="mx-auto px-8 py-8">
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
      </div> */}
      <AllProductsPage />
    </Layout>
  );
};

export default ProductsPage;
