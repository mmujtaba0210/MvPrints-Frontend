import React, { useState } from "react";
import WishlistCards from "@/components/WishlistCards";

const WishlistPage = () => {
  const [wishlistProducts, setWishlistProducts] = useState([
    {
      id: 1,
      name: "Flyers",
      price: 251,
      originalPrice: 399,
      discount: "30% Off",
      image: "/images/flyers.png", // Assuming path based on name
      stockStatus: "In Stock",
      ratings: 23,
    },
    {
      id: 2,
      name: "Business Cards",
      price: 874,
      originalPrice: 458,
      discount: "50% Off",
      image: "/images/businessCard.png", // Assuming path
      stockStatus: "Only 4 Left",
      ratings: 114,
    },
    {
      id: 3,
      name: "Event Tickets",
      price: 48,
      originalPrice: 57,
      discount: "10% Off",
      image: "/images/tickets.jpg", // Assuming path
      stockStatus: "In Stock",
      ratings: 15,
    },
    {
      id: 4,
      name: "Book Print",
      price: 1578,
      originalPrice: 1877,
      discount: "25% Off",
      image: "/images/booksMagazine.png", // Assuming path
      stockStatus: "In Stock",
      ratings: 15,
    },
    {
      id: 5,
      name: "Signs",
      price: 1578,
      originalPrice: 1877,
      discount: "25% Off",
      image: "/images/yardSigns.png", // Assuming path
      stockStatus: "Out of Stock",
      ratings: 15,
    },
    {
      id: 6,
      name: "T-Shits",
      price: 687,
      originalPrice: 874,
      discount: "14% Off",
      image: "/images/tShirts.png", // Assuming path
      stockStatus: "In Stock",
      ratings: 27,
    },
  ]);

  const handleRemove = (id) => {
    setWishlistProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="mx-auto p-8 min-h-screen">
      <div className="flex justify-between items-center my-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0096ff]  2xl:text-5xl">
            My Wishlists
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Bar Placeholder */}
          {/* <input type="text" placeholder="Search Here" className="border rounded px-3 py-1" /> */}
          {/* Filter Button Placeholder */}
          {/* <button className="flex items-center border rounded px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button> */}
          {/* Sort By Dropdown Placeholder */}
          {/* <button className="flex items-center border rounded px-3 py-1">
            Sort By
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button> */}
          {/* Share Button Placeholder */}
          {/* <button className="flex items-center bg-blue-500 text-white rounded px-3 py-1">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.632l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
          </button> */}
          {/* Checkout All Button Placeholder */}
          {/* <button className="flex items-center bg-purple-500 text-white rounded px-3 py-1">
            Checkout All →
          </button> */}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-4  pb-10">
        {wishlistProducts.map((product) => (
          <WishlistCards
            product={product}
            key={product.id}
            onRemove={handleRemove}
          />
        ))}
      </div>

      {/* Pagination Placeholder */}
      {/* <div className="flex justify-center items-center space-x-2 my-6">
        <button className="border rounded px-3 py-1">Previous</button>
        <button className="border rounded px-3 py-1 bg-blue-500 text-white">1</button>
        <button className="border rounded px-3 py-1">2</button>
        <button className="border rounded px-3 py-1">3</button>
        <button className="border rounded px-3 py-1">4</button>
        <button className="border rounded px-3 py-1">5</button>
        <button className="border rounded px-3 py-1">Next</button>
      </div> */}
    </div>
  );
};

export default WishlistPage;
