import React from "react";
import PropTypes from "prop-types";

const ProductReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-orange-500 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-orange-500 fill-current"
          viewBox="0 0 24 24"
        >
          <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="50%"
              style={{ stopColor: "rgb(255,165,0)", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "rgb(200,200,200)", stopOpacity: 1 }}
            />{" "}
            {/* Adjust empty color if needed */}
          </linearGradient>
          <path
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"
            fill="url(#half-gradient)"
          />
        </svg>
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300 fill-current"
          viewBox="0 0 24 24"
        >
          {" "}
          {/* Adjust empty color if needed */}
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.25)] relative overflow-hidden ">
      {/* Add rating or other info here if available */}
      <div className="flex bg-[#0095ff15] pt-2 px-4 justify-end items-end w-full">
        <div className="flex flex-col items-end gap-1 justify-end">
          <span className="text-orange-500 2xl:text-2xl font-bold">
            {review.rating.toFixed(1)}
          </span>
          <span className="flex gap-1 2xl:text-2xl">
            {renderStars(review.rating)}
          </span>
        </div>
      </div>

      {/* Top Section with background and image */}
      <div className="bg-[#0095ff15] p-6 flex flex-col items-center">
        <img
          src={review.product.image}
          alt={review.product.name}
          className="w-24 h-24 2xl:size-[8rem] object-cover absolute top-10 transform -translate-y-1/4 "
        />
        <div className="mt-12 text-center">
          <h3 className="font-bold text-lg 2xl:text-2xl text-[#333333] mt-4">
            {review.product.name}
          </h3>
          <p className="text-sm text-gray-600 2xl:text-2xl">
            Order No: {review.orderNumber}
          </p>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="absolute top-[16%] right-2 text-[#0095ff69] text-[10em] font-extrabold font-serif rotate-180">
        &#8220;
      </div>

      {/* Review Text Section */}
      <div className="p-6 pt-10 text-gray-700 italic 2xl:text-2xl">
        "{review.comment}"
      </div>
    </div>
  );
};

ProductReviewCard.propTypes = {
  review: PropTypes.shape({
    orderNumber: PropTypes.string.isRequired,
    product: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired, // Added rating to PropTypes
  }).isRequired,
};

export default ProductReviewCard;
