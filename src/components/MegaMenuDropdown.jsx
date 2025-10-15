"use client";

import React from "react";

const dummyProductsData = {
  mainCategories: [
    {
      name: "Business Cards",
      subCategories: ["Standard", "Luxury", "Plastic", "Folded"],
    },
    { name: "Flyers", subCategories: ["A4 Flyers", "Tri-Fold", "Mini Flyers"] },
    { name: "Stickers", subCategories: ["Round", "Square", "Custom Shape"] },
    { name: "Banners", subCategories: ["Vinyl", "Mesh", "Retractable"] },
    {
      name: "Brochures",
      subCategories: ["Bi-Fold", "Tri-Fold", "Custom Size"],
    },
    { name: "Posters", subCategories: [] },
    { name: "Labels", subCategories: [] },
    { name: "Stationery", subCategories: [] },
    { name: "Calendars", subCategories: [] },
    { name: "Packaging", subCategories: [] },
    { name: "Apparel", subCategories: [] },
  ],
  featuredProduct: {
    description: "Premium Printing",
    title: "Quality that speaks for itself",
    buttonText: "Shop Now",
  },
};

const MegaMenuDropdown = ({ productsData = dummyProductsData }) => {
  return (
    <div className="absolute left-1/2 top-10 mt-4 w-[70vw] bg-white shadow-2xl rounded-xl py-6 px-6 z-50 group-hover:flex hidden hover:flex transition-all duration-300 -translate-x-1/2">
      <div className="grid grid-cols-3 gap-6 w-full">
        {/* ================= LEFT SECTION ================= */}
        <div className="flex flex-col sm:flex-row gap-6 border-r border-gray-200 pr-6">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <h3 className="font-semibold text-[#1E1E1E] text-[15px] 2xl:text-[18px] mb-2 cursor-pointer hover:text-[#0096ff] transition">
                {productsData.mainCategories[i]?.name}
              </h3>
              <ul className="text-[13px] 2xl:text-[15px] text-[#6B6B6B] space-y-1">
                {productsData.mainCategories[i]?.subCategories?.map(
                  (sub, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer hover:text-[#0096ff] transition"
                    >
                      {sub}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= MIDDLE SECTION ================= */}
        <div className="flex flex-col justify-between border-r border-gray-200 pr-6">
          <div className="grid grid-cols-2 gap-4">
            {[3, 4].map((i) => (
              <div key={i}>
                <h3 className="font-semibold text-[#1E1E1E] text-[15px] 2xl:text-[18px] mb-2 cursor-pointer hover:text-[#0096ff] transition">
                  {productsData.mainCategories[i]?.name}
                </h3>
                <ul className="text-[13px] 2xl:text-[15px] text-[#6B6B6B] space-y-1">
                  {productsData.mainCategories[i]?.subCategories?.map(
                    (sub, idx) => (
                      <li
                        key={idx}
                        className="cursor-pointer hover:text-[#0096ff] transition"
                      >
                        {sub}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[url('/header/productbanner.png')] bg-cover bg-no-repeat h-32 rounded-lg p-4 flex flex-col justify-center">
            <p className="text-[14px] font-semibold">Packaging Design</p>
            <h1 className="text-[18px] font-bold">
              Thousands of free templates
            </h1>
            <button className="cursor-pointer bg-[#1E1E1E] text-white w-fit px-4 py-2 mt-2 rounded-lg text-[13px]">
              Buy Now
            </button>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="relative bg-[url('/header/productbanner2.png')] bg-cover bg-center rounded-xl flex flex-col justify-end p-6 h-[45vh] text-white">
          <p className="text-[15px] font-semibold">
            {productsData.featuredProduct.description}
          </p>
          <h3 className="text-[20px] font-bold leading-snug">
            {productsData.featuredProduct.title}
          </h3>
          <button className="bg-[#1E1E1E]/80 hover:bg-[#0096ff] transition text-white w-fit px-5 py-2 mt-3 rounded-lg text-[13px]">
            {productsData.featuredProduct.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuDropdown;
