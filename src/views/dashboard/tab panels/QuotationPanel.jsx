import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FiPaperclip, FiTrash } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const QuotationPanel = () => {
  const navigate = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
    AOS.refresh(); // Recalculate all AOS elements on state change
  }, []);

  // Example data matching the screenshot
  const [quotations, setQuotations] = useState([
    {
      quoteNumber: "Q-18",
      date: "Jan-27-2025",
      customer: "Andri Jokall",
      number: "32-9023899",
      email: "askljj@gmail.com",
      products: [
        {
          id: "1",
          name: "Event Tickets",
          image: "/images/tickets.jpg",
          quoteAmount: {
            amount: 10,
            shipping: 0,
          },
        },
        {
          id: "1-2",
          name: "Concert Posters",
          image: "/images/poster.png", // Assuming a different image for a second product
          quoteAmount: {
            amount: 50,
            shipping: 5,
          },
        },
      ], // Changed from product to products array
      status: "Pending",
    },
    {
      quoteNumber: "Q-19",
      date: "Feb-15-2025",
      customer: "Emma Clark",
      number: "32-9023899",
      email: "emma@gmail.com",
      products: [
        {
          id: "2",
          name: "Business Cards",
          image: "/images/businessCard.png",
          quoteAmount: {
            amount: 20,
            shipping: 5,
          },
        },
      ], // Changed from product to products array
      status: "Active",
    },
    {
      quoteNumber: "Q-20",
      date: "Mar-05-2025",
      customer: "Liam Smith",
      number: "32-9023899",
      email: "liam@gmail.com",
      products: [
        {
          id: "3",
          name: "Flyers",
          image: "/images/flyers.png",
          quoteAmount: {
            amount: 30,
            shipping: 10,
          },
        },
        {
          id: "3-2",
          name: "Brochures",
          image: "/images/brochure.png", // Assuming a different image
          quoteAmount: {
            amount: 70,
            shipping: 15,
          },
        },
        {
          id: "3-3",
          name: "Banners",
          image: "/images/banner.png", // Assuming a different image
          quoteAmount: {
            amount: 100,
            shipping: 20,
          },
        },
      ], // Changed from product to products array
      status: "Block",
    },
  ]);

  const [currentProductIndex, setCurrentProductIndex] = useState({}); // State to manage current product index for each quotation
  const [slideDirection, setSlideDirection] = useState({}); // State to manage slide direction for each quotation

  const statusStyles = {
    Pending: "bg-orange-100 text-orange-500",
    Active: "bg-green-100 text-green-600",
    Block: "bg-red-100 text-red-500",
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handlePrevProduct = (quotationIndex) => {
    setSlideDirection((prevState) => ({
      ...prevState,
      [quotationIndex]: "slide-right",
    }));
    setCurrentProductIndex((prevState) => ({
      ...prevState,
      [quotationIndex]:
        (prevState[quotationIndex] || 0) > 0
          ? (prevState[quotationIndex] || 0) - 1
          : quotations[quotationIndex].products.length - 1,
    }));
  };

  const handleNextProduct = (quotationIndex) => {
    setSlideDirection((prevState) => ({
      ...prevState,
      [quotationIndex]: "slide-left",
    }));
    setCurrentProductIndex((prevState) => ({
      ...prevState,
      [quotationIndex]:
        (prevState[quotationIndex] || 0) <
        quotations[quotationIndex].products.length - 1
          ? (prevState[quotationIndex] || 0) + 1
          : 0,
    }));
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div>
      <div className="flex flex-wrap gap-6 px-4 pb-8 justify-center md:justify-start">
        {quotations.map((q, quotationIndex) => (
          <div
            key={quotationIndex}
            className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] w-full max-w-xs 2xl:max-w-[32rem] flex flex-col border border-gray-100 relative"
          >
            {/* Quote Number and Status */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-[#cec7c7]">
              <span className="font-bold text-lg 2xl:text-3xl">
                {q.quoteNumber}
              </span>
              <button
                className="px-2 2xl:text-3xl py-0.2 bg-[#0096ff] text-white hover:bg-[#fa09a7] rounded font-semibold transition-all cursor-pointer"
                onClick={() => navigate.push("/dashboard/quotation-detail")}
              >
                View Detail
              </button>
            </div>
            {/* Customer Info */}
            <div className="px-4 pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {/* Customer Info */}
                <div className="grid grid-cols-2 gap-4 justify-between items-center text-xs text-gray-600 mt-1">
                  <div className="grid items-center gap-2">
                    <div className="relative rounded-full w-[40px] h-[40px] flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[#ff00a7] flex items-center justify-center">
                        <span className="text-white text-xl font-bold uppercase 2xl:text-2xl">
                          {getInitials(q.customer)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold 2xl:text-3xl">
                        Customer
                      </div>
                      <div className="text-sm 2xl:text-xl">{q.customer}</div>
                    </div>
                  </div>
                  <div className="flex flex-col pl-8">
                    <span
                      className={`text-xs 2xl:text-2xl px-3 py-1 rounded-sm font-semibold mb-4 ${
                        statusStyles[q.status]
                      }`}
                    >
                      {q.status}
                    </span>
                    <span className="font-semibold 2xl:text-3xl">Number</span>
                    <span className="2xl:text-xl">{q.number}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold 2xl:text-3xl">Email</span>
                    <span className="truncate max-w-[110px] 2xl:text-xl">
                      {q.email}
                    </span>
                  </div>
                  <div className="flex flex-col pl-8">
                    <span className="font-semibold 2xl:text-3xl">Date</span>
                    <span className="2xl:text-xl">{q.date}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Info Carousel */}
            <div className="px-4 pt-3 pb-2 border-t border-[#cec7c7] mt-3 relative overflow-hidden">
              {" "}
              {/* Added overflow-hidden */}
              {/* Carousel Navigation Buttons */}
              {q.products.length > 1 && (
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={() => handlePrevProduct(quotationIndex)}
                    className="bg-[#0095ffa6] bg-opacity-50 rounded-full p-1 text-gray-700 hover:bg-opacity-100 focus:outline-none ml-1 z-10"
                    aria-label="Previous product"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </div>
              )}
              {q.products.length > 1 && (
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={() => handleNextProduct(quotationIndex)}
                    className="bg-[#0095ffa6] bg-opacity-50 rounded-full p-1 text-gray-700 hover:bg-opacity-100 focus:outline-none mr-1 z-10"
                    aria-label="Next product"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
              {/* Product Details - currently displayed product */}
              {q.products[currentProductIndex[quotationIndex] || 0] && (
                <div
                  key={currentProductIndex[quotationIndex] || 0} // Added key to force re-render and trigger AOS
                  className="flex items-center gap-3 justify-center"
                  data-aos={slideDirection[quotationIndex] || "fade"}
                >
                  <img
                    src={
                      q.products[currentProductIndex[quotationIndex] || 0].image
                    }
                    alt={
                      q.products[currentProductIndex[quotationIndex] || 0].name
                    }
                    className="w-16 h-16 2xl:size-24 object-cover rounded cursor-pointer border"
                    onClick={() =>
                      handleProductClick(
                        q.products[currentProductIndex[quotationIndex] || 0].id
                      )
                    }
                  />
                  <div>
                    <div className="font-semibold 2xl:text-2xl text-sm text-[#0096ff]">
                      {
                        q.products[currentProductIndex[quotationIndex] || 0]
                          .name
                      }
                    </div>
                    <div className="text-xs 2xl:text-xl text-gray-500">
                      Shipping Charges: $
                      {
                        q.products[currentProductIndex[quotationIndex] || 0]
                          .quoteAmount.shipping
                      }
                    </div>
                    <div className="text-xs 2xl:text-xl text-gray-500">
                      Price: $
                      {
                        q.products[currentProductIndex[quotationIndex] || 0]
                          .quoteAmount.amount
                      }
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Action Buttons */}
            <div className="flex gap-2 px-4 pb-4 pt-2 mt-auto">
              <button className="flex-1 border border-red-400 text-red-500 hover:bg-red-50 rounded 2xl:text-2xl py-2 font-semibold transition-all cursor-pointer">
                Decline
              </button>
              <button className="flex-1 bg-[#0096ff] text-white hover:bg-[#fa09a7] rounded py-2 2xl:text-2xl font-semibold transition-all cursor-pointer">
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotationPanel;
