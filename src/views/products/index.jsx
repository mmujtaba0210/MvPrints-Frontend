"use client";
import React, { useRef, useState } from "react";
import ProductImageGallery from "../../components/ProductImageGallery";
import { FiHeart, FiSave, FiStar, FiUpload, FiCheck } from "react-icons/fi";
import Select from "@/components/Select";
import RadioOptions from "@/components/RadioOptions";
import CartPopup from "@/components/CartPopup";
import ReviewDesignDialog from "@/components/ReviewDesignDialog";
import { FaExchangeAlt } from "react-icons/fa";
import CustomButton from "@/components/CustomButton";
import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import OptionsDialog from "@/components/OptionsDialog";
import WhyChooseUs from "./WhyChooseUs";
import YouMightAlsoLike from "./YouMightAlsoLike";

const Products = ({ product: propProduct }) => {
  const [frontUploaded, setFrontUploaded] = useState(false);
  const [backUploaded, setBackUploaded] = useState(false);
  const [frontFileName, setFrontFileName] = useState("");
  const [backFileName, setBackFileName] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOptionsDialogOpen, setIsOptionsDialogOpen] = useState(false);

  const frontInputRef = useRef(null);
  const backInputRef = useRef(null);

  const handleFrontUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFrontUploaded(true);
      setFrontFileName(file.name);
    }
  };

  const handleBackUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackUploaded(true);
      setBackFileName(file.name);
    }
  };

  const handleAddToCart = () => {
    // setIsFlipped(true);
    setTimeout(() => {
      setIsReviewDialogOpen(true);
    }, 500); // Wait for flip animation to complete
  };

  const closeCartPopup = () => {
    setIsCartPopupOpen(false);
  };

  const handleReviewClose = () => {
    setIsReviewDialogOpen(false);
    setIsFlipped(false); // Flip back when closing review
  };

  const handleReviewConfirm = () => {
    setIsReviewDialogOpen(false);
    setIsCartPopupOpen(true);
  };

  // Use the passed product prop or fallback to default product data
  const product = propProduct || {
    name: "Business Card Printing Service",
    price: 79.99,
    discountPrice: 59.99,
    description:
      "Professional business card printing with high-quality materials. Choose from various finishes and styles to make a lasting impression.",
    features: [
      "High-quality card stock",
      "Full color, double-sided printing",
      "Multiple finish options",
      "Fast turnaround time",
      "Bulk discounts available",
    ],
    images: [
      "/images/flyers.png",
      "/images/businessCard.png",
      "/images/poster.png",
      "/images/Tshirts.png",
    ],
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Business Cards",
      price: 19.99,
      image: "/images/businessCard.png",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Poster",
      price: 29.99,
      image: "/images/poster.png",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Flysers",
      price: 49.99,
      image: "/images/flyers.png",
      rating: 4.5,
    },
  ];

  const cardOptions = [
    {
      title: "Business Card Orientation",
      options: [
        {
          option: "Horizontal (Standard)",
        },
        {
          option: "Vertical",
        },
      ],
    },
    {
      title: "Business Card Shape",
      options: [
        {
          option: "Rectangle (Standard)",
        },
        {
          option: "Rounded Corners",
        },
        {
          option: "Square",
        },
        {
          option: "Oval",
        },
      ],
    },
    {
      title: "Business Card Paper Type",
      options: [
        {
          option: "14pt Gloss Coated",
        },
        {
          option: "16pt Matte Coated",
        },
        {
          option: "18pt Premium",
        },
        {
          option: "32pt Ultra Thick",
        },
      ],
    },
    {
      title: "Business Card Coating",
      options: [
        {
          option: "No Coating",
        },
        {
          option: "Gloss UV Coating",
        },
        {
          option: "Matte UV Coating",
        },
        {
          option: "Spot UV Coating",
        },
      ],
    },
    {
      title: "Business Card Rounded Corners",
      options: [
        {
          option: "None",
        },
        {
          option: "1/8 inch radius",
        },
        {
          option: "1/4 inch radius",
        },
      ],
    },
    {
      title: "Business Card Foil Stamping",
      options: [
        {
          option: "None",
        },
        {
          option: "Gold Foil",
        },
        {
          option: "Silver Foil",
        },
        {
          option: "Rose Gold Foil",
        },
      ],
    },
    {
      title: "Business Card QTY",
      options: [
        {
          option: "100 Cards",
        },
        {
          option: "250 Cards",
        },
        {
          option: "500 Cards",
        },
        {
          option: "1000 Cards",
        },
        {
          option: "2500 Cards",
        },
      ],
    },
    {
      title: "Shrink Wrapping",
      options: [
        {
          option: "No Shrink Wrapping",
        },
        {
          option: "Shrink Wrapped",
        },
      ],
    },
    {
      title: "Upload Artwork",
      options: [
        {
          option: "Upload my design",
        },
        {
          option: "Design services needed",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Gallery */}
        <div>
          <ProductImageGallery images={product.images} />
        </div>

        {/* Product Information - Flip Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 relative perspective-1000 gap-4">
          {/* Flip Card */}
          <div
            className={`flip-card md:col-span-2 ${
              isFlipped ? "flipped" : ""
            } w-full lg:w-[70%]`}
          >
            {/* Front of card */}
            <div className="flex flex-col gap-4 flip-card-front bg-white rounded-lg shadow-md p-4 sm:p-6 w-full">
              <p className="text-2xl sm:text-4xl font-extrabold text-[#0096ff]">
                {product.name}
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex gap-2">
                  <p className="font-bold text-sm sm:text-base">
                    Delivered By:
                  </p>
                  <p className="text-sm sm:text-base">Apr 25 2025</p>
                </div>
                <p className="text-xl sm:text-2xl font-bold">$20</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 justify-start items-start sm:items-center">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <FiStar color="gold" fill="gold" />
                    <FiStar color="gray" fill="gray" />
                    <FiStar color="gray" fill="gray" />
                    <FiStar color="gray" fill="gray" />
                    <FiStar color="gray" fill="gray" />
                  </div>
                  <div>1 Review(s)</div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2 mt-4 text-sm">
                <p>
                  Introducing our premium Business Cards, the essential tool for
                  making a memorable first impression and networking with
                  confidence...
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-lg font-bold">Why Choose Us</p>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li className="flex gap-2 items-center">
                    <FiCheck color="green" /> Fast Delivery
                  </li>
                  <li className="flex gap-2 items-center">
                    <FiCheck color="green" /> Satisfaction Guarantee
                  </li>
                  <li className="flex gap-2 items-center">
                    <FiCheck color="green" /> Premium Quality
                  </li>
                </ul>
              </div>

              {/* Buttons Section */}
              <section className="flex flex-col gap-3 mt-4">
                <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-center">
                  <CustomButton text="View Artwork" width="100%" />
                  <CustomButton
                    text="See Options"
                    width="100%"
                    onClick={handleAddToCart}
                  />
                  <CustomButton text="Request Quote" width="100%" />
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <CustomButton
                    text={<FiHeart className="w-6 h-6" />}
                    width="auto"
                  />
                  <CustomButton
                    text={<FiSave className="w-6 h-6" />}
                    width="auto"
                  />
                  <CustomButton
                    text={<FaExchangeAlt className="w-6 h-6" />}
                    width="auto"
                  />
                  <CustomButton
                    text="New Options"
                    onClick={() => setIsOptionsDialogOpen(true)}
                    width="100%"
                  />
                </div>
              </section>
            </div>

            {/* Back of card */}
            <div className="flip-card-back bg-white rounded-lg shadow-md p-4 sm:p-6 w-full">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Additional Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {cardOptions.map((data, index) => (
                  <RadioOptions
                    key={index}
                    title={data.title}
                    options={data.options}
                  />
                ))}
              </div>

              {/* Upload Section */}
              <section className="flex flex-col gap-4 mt-6">
                <p className="text-base font-bold">Upload Logo/Artwork</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Front Upload */}
                  <div
                    onClick={() => frontInputRef.current.click()}
                    className={`flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer transition-colors ${
                      frontUploaded ? "border-green-600" : "border-gray-300"
                    } hover:bg-gray-100`}
                  >
                    <input
                      type="file"
                      ref={frontInputRef}
                      onChange={handleFrontUpload}
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                    {frontUploaded ? (
                      <FiCheck className="text-green-600 w-6 h-6" />
                    ) : (
                      <FiUpload className="w-6 h-6" />
                    )}
                    <span className="text-lg font-bold text-[#d13939]">
                      Front
                    </span>
                    {frontUploaded && (
                      <span className="text-sm text-gray-500 truncate">
                        {frontFileName}
                      </span>
                    )}
                  </div>

                  {/* Back Upload */}
                  <div
                    onClick={() => backInputRef.current.click()}
                    className={`flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer transition-colors ${
                      backUploaded ? "border-green-600" : "border-gray-300"
                    } hover:bg-gray-100`}
                  >
                    <input
                      type="file"
                      ref={backInputRef}
                      onChange={handleBackUpload}
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                    {backUploaded ? (
                      <FiCheck className="text-green-600 w-6 h-6" />
                    ) : (
                      <FiUpload className="w-6 h-6" />
                    )}
                    <span className="text-lg font-bold text-[#d13939]">
                      Back
                    </span>
                    {backUploaded && (
                      <span className="text-sm text-gray-500 truncate">
                        {backFileName}
                      </span>
                    )}
                  </div>
                </div>
              </section>

              <div className="mt-6">
                <CustomButton
                  text="Back to Product"
                  onClick={() => setIsFlipped(false)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Product Also See */}
          <div className="flex flex-col w-full gap-4">
            {featuredProducts.map((data, index) => (
              <ProductCard product={data} key={index} />
            ))}
          </div>
        </div>

        {/* Description Tabs Section */}
        <div className="mt-6 border border-[#0000001a] rounded-md overflow-hidden w-full ">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-[#0000001a]">
            {["description", "reviews", "qa"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[150px] text-sm sm:text-base px-4 sm:px-6 py-3 font-semibold transition-colors text-center ${
                  activeTab === tab
                    ? "bg-[#0096ff] text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {tab === "description" && "Product Description"}
                {tab === "reviews" && "Reviews (0)"}
                {tab === "qa" && "Question & Answer"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 bg-white text-sm sm:text-base leading-relaxed">
            {activeTab === "description" && (
              <div className="space-y-4">
                <p>
                  Introducing our premium Business Cards, the essential tool...
                </p>
                <p>
                  Printed on high-quality cardstock with a variety of
                  finishes...
                </p>
                <p>
                  Customization is key when it comes to our business cards...
                </p>
                <p>Versatility is another hallmark of our business cards...</p>
                <p>
                  Convenience is key when it comes to ordering your business
                  cards...
                </p>
                <p>
                  Make a lasting impression and elevate your professional
                  image...
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="text-4xl sm:text-5xl text-gray-300 mb-4">
                  ★★★★★
                </div>
                <p className="text-base text-gray-600 mb-6">No reviews yet</p>
                <CustomButton
                  text="Write a Review"
                  width="w-full sm:w-[50%] md:w-[12%]"
                />
              </div>
            )}

            {activeTab === "qa" && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Frequently Asked Questions
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">
                        Q: What is the standard size of your business cards?
                      </p>
                      <p className="text-gray-700 pl-2 sm:pl-4">
                        A: Our standard business cards are 3.5" x 2" (88.9mm x
                        50.8mm)...
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">
                        Q: How long does it take to receive my business cards?
                      </p>
                      <p className="text-gray-700 pl-2 sm:pl-4">
                        A: Production typically takes 2–3 business days...
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">
                        Q: Do you offer design services?
                      </p>
                      <p className="text-gray-700 pl-2 sm:pl-4">
                        A: Yes, we offer professional design services...
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Ask a Question
                  </h3>
                  <div className="space-y-3">
                    <textarea
                      placeholder="What would you like to know about this product?"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0096ff]"
                      rows="4"
                    ></textarea>
                    <CustomButton
                      text="Submit"
                      width="w-full sm:w-[50%] md:w-[12%]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <YouMightAlsoLike />
      </section>
      {/* Promotion Banner section */}
      <section className="w-full mt-4">
        <Image
          width={1000}
          height={1000}
          src="/images/pointspromotion.gif"
          alt="promotion"
          className="w-full"
        />
      </section>

      {/* Review Design Dialog */}
      <ReviewDesignDialog
        isOpen={isReviewDialogOpen}
        onClose={handleReviewClose}
        onConfirm={handleReviewConfirm}
      />

      {/* Cart Popup */}
      <CartPopup
        isOpen={isCartPopupOpen}
        onClose={closeCartPopup}
        item="85"
        price="85.00"
        cartItems={"1"}
        subtotal={12}
      />

      {/* New Options Dialog */}
      <OptionsDialog
        isOpen={isOptionsDialogOpen}
        onClose={() => setIsOptionsDialogOpen(false)}
      />

      {/* Add styles for flip animation */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </Layout>
  );
};

export default Products;
