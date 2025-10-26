import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompareProducts } from "@/redux/slices/Compare/fetchCompareProductsSlice";
import { postCompareProducts } from "@/redux/slices/Compare/CompareProductsSlice";
import { FaTrash, FaShoppingCart, FaBolt } from "react-icons/fa";
import { addToCart } from "@/redux/slices/Cart/addCartSlice";
import toast from "react-hot-toast";
import { fetchCartItems } from "@/redux/slices/Cart/fetchCartSlice";

const attributes = [
  { label: "Product Name", key: "name" },
  { label: "Type", key: "type" },
  { label: "Category", key: "category" },
  { label: "Model", key: "model" },
  { label: "Brand", key: "brand" },
  { label: "Price", key: "price" },
];

// Utility to format price
const formatPrice = (price) => {
  if (!price) return "-";
  const numeric = parseFloat(price);
  if (isNaN(numeric)) return price;
  return `$${Math.floor(numeric)}`;
};

const ComparePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { products, loading: productsLoading } = useSelector(
    (state) => state.compareProducts
  );
  const { comparedData, loading: compareLoading } = useSelector(
    (state) => state.postCompareProducts
  );

  const [selectedProducts, setSelectedProducts] = useState([
    null,
    null,
    null,
    null,
  ]);
  const [hasAutoCompared, setHasAutoCompared] = useState(false);

  //  Fetch all products once
  useEffect(() => {
    dispatch(fetchCompareProducts());
  }, [dispatch]);

  //  Auto-compare first 4 products only once
  useEffect(() => {
    if (!hasAutoCompared && products?.records?.length > 0) {
      const firstFour = products.records.slice(0, 4).map((p) => p.id);
      setSelectedProducts(firstFour);
      dispatch(postCompareProducts(firstFour));
      setHasAutoCompared(true);
    }
  }, [products, dispatch, hasAutoCompared]);

  //  Product selection handler

  const handleSelect = (index, productId) => {
    const updated = [...selectedProducts];
    updated[index] = productId ? parseInt(productId) : null;
    setSelectedProducts(updated);
  };

  //  Compare trigger

  const handleCompare = () => {
    const validIds = selectedProducts.filter(Boolean);
    if (validIds.length === 0) {
      alert("Please select at least one product.");
      return;
    }
    dispatch(postCompareProducts(validIds));
  };
  //add to cart

  const handleAddToCart = async (productId) => {
    if (!productId) return;
    setLoading(productId);

    const formData = new FormData();
    formData.append("product_id", productId);
    formData.append("quantity", 1);

    try {
      const result = await dispatch(addToCart(formData)).unwrap();
      toast.success(result?.message || "Product added to cart successfully!");
      dispatch(fetchCartItems());
    } catch (error) {
      toast.error(error || "Failed to add product to cart!");
    } finally {
      setLoading(null);
    }
  };

  //  Buy Now
  const handleBuyNow = (productId) => {
    console.log("Buy Now:", productId);
  };

  // Remove product
  const handleRemove = (index) => {
    const updated = [...selectedProducts];
    updated[index] = null;
    setSelectedProducts(updated);
  };

  const isEmpty = selectedProducts.every((id) => id === null);

  return (
    <div className="min-h-screen p-4">
      <h2 className="text-2xl font-bold text-[#fa09a7] 2xl:text-5xl text-center mb-8">
        COMPARE PRODUCTS
      </h2>

      {/* Compare Button */}
      <div className=" justify-center mb-6 hidden">
        <button
          onClick={handleCompare}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded disabled:opacity-50"
          disabled={compareLoading || productsLoading}
        >
          {compareLoading ? "Comparing..." : "Compare Now"}
        </button>
      </div>

      {/* Empty / Loading / Table View */}
      {productsLoading ? (
        <div className="text-center py-20 text-gray-500 font-semibold">
          Loading products...
        </div>
      ) : isEmpty ? (
        <div className="text-center py-20 text-gray-500 font-semibold">
          Please select products to compare.
        </div>
      ) : compareLoading ? (
        <div className="text-center py-20 text-gray-500 font-semibold">
          Comparing selected products...
        </div>
      ) : (
        <div className="overflow-x-auto shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-2xl">
          <div className="min-w-full grid grid-cols-1 sm:grid-cols-5 border border-gray-300 rounded-2xl">
            {/* Header Row */}
            <div className="font-bold text-2xl p-4 border-b border-gray-300  bg-gray-50">
              Select Product
            </div>

            {selectedProducts.map((selected, idx) => (
              <div
                key={idx}
                className="p-4 border-b border-l border-gray-300 flex flex-col gap-3 items-center"
              >
                <div className=" flex items-center gap-2">
                  <select
                    value={selected || ""}
                    onChange={(e) => handleSelect(idx, e.target.value)}
                    className="border rounded-lg p-2 w-full outline-none"
                  >
                    <option value="">Select Product</option>
                    {products?.records?.map((prod) => (
                      <option key={prod.id} value={prod.id}>
                        {prod.name}
                      </option>
                    ))}
                  </select>

                  {selected && (
                    <button
                      onClick={() => handleRemove(idx)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded flex justify-center items-center"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Attributes */}
            {attributes.map((attr) => (
              <React.Fragment key={attr.key}>
                <div className="font-semibold p-4 border-b border-gray-300 flex items-center bg-gray-50">
                  {attr.label}
                </div>
                {selectedProducts.map((productId, idx) => {
                  const product =
                    comparedData?.find((p) => p.id === parseInt(productId)) ||
                    {};
                  let value =
                    attr.key === "price"
                      ? formatPrice(product[attr.key])
                      : product[attr.key] || "-";
                  return (
                    <div
                      key={idx}
                      className="p-4 border-b border-l border-gray-300 flex items-center"
                    >
                      {value}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}

            {/* Bottom Buttons Row */}
            <div className="font-semibold p-4 border-b border-gray-300 flex items-center bg-gray-50">
              Actions
            </div>
            {selectedProducts.map((productId, idx) => {
              const product =
                comparedData?.find((p) => p.id === parseInt(productId)) || {};
              return (
                <div
                  key={idx}
                  className="p-2 border-b border-l border-gray-300 flex justify-center gap-3"
                >
                  {productId
                    ? (() => {
                        const isAdding = loading === productId;
                        return (
                          <>
                            <button
                              onClick={() => handleAddToCart(productId)}
                              disabled={loading === productId}
                              className={`${
                                loading === productId
                                  ? "bg-blue-400 cursor-progress"
                                  : "bg-blue-600 hover:bg-blue-700"
                              } text-white px-2 cursor-pointer py-1 rounded flex items-center gap-2`}
                            >
                              <FaShoppingCart />{" "}
                              {loading === productId
                                ? "Adding..."
                                : "Add to Cart"}
                            </button>

                            <button
                              onClick={() => handleBuyNow(productId)}
                              className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded flex items-center gap-1"
                            >
                              <FaBolt /> Buy Now
                            </button>
                          </>
                        );
                      })()
                    : "-"}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
