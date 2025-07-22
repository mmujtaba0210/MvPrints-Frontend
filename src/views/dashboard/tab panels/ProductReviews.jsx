import React from "react";
import { FiTrash } from "react-icons/fi";
import ProductReviewCard from "@/components/ProductReviewCard";

const ProductReviews = () => {
  const reviews = [
    {
      orderNumber: "ORD123",
      product: {
        id: "2",
        name: "Business Cards",
        image: "/images/businessCard.png",
      },
      comment:
        "Web developer did an outstanding job creating our new website. It's user-friendly, visually appealing, and has all the functionality we need.",
      rating: 4.5,
    },
    {
      orderNumber: "ORD456",
      product: {
        id: "5",
        name: "Flyers",
        image: "/images/flyers.png", // Replace with actual image if available
      },
      comment: "Great quality flyers, delivered quickly!",
      rating: 5,
    },
    {
      orderNumber: "ORD789",
      product: {
        id: "8",
        name: "Retracter Banners",
        image: "/images/retracterBanner.png", // Replace with actual image if available
      },
      comment: "Excellent banners, vibrant colors!",
      rating: 4,
    },
    // Add more static review data as needed
  ];

  return (
    <div>
      {/* Product Reviews Section */}
      <div>
        <h2 className="text-[#0096ff] font-bold text-2xl pb-4 2xl:text-4xl">
          PRODUCT REVIEWS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.length === 0 ? (
            <p className="text-center text-gray-500 2xl:text-2xl">
              No reviews available.
            </p>
          ) : (
            reviews.map((review, idx) => (
              <ProductReviewCard key={idx} review={review} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
