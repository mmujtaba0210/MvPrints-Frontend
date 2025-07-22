import React from "react";
import Image from "next/image";

// MegaMenuDropdown component displays a large dropdown menu with categories and a featured product
const MegaMenuDropdown = ({ productsData }) => {
  return (
    // Main dropdown container
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-10 w-[68vw] 2xl:w-[73vw] bg-white shadow-lg rounded-lg py-4 px-4 z-20 flex items-center">
      {/* Left section: First three main categories */}
      <div className="flex w-fit">
        {/* First main category */}
        <div className="py-2 border-r pr-4  border-gray-200">
          <h3 className="font-bold text-[#1E1E1E] text-[15px] 2xl:text-[20px] cursor-pointer hover:text-[#0096ff]">
            {productsData?.mainCategories[0]?.name}
          </h3>
          <ul className="text-[13px] 2xl:text-[20px] text-[#7D7D7D]">
            {productsData?.mainCategories[0]?.subCategories.map(
              (subCat, subIndex) => (
                <li
                  key={subIndex}
                  className="py-1 cursor-pointer hover:text-[#0096ff]"
                >
                  {subCat}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Second and third main categories */}
        <div className="py-2 border-r px-4 border-gray-200">
          <h3 className="font-bold text-[#1E1E1E] 2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff]">
            {productsData?.mainCategories[1]?.name}
          </h3>
          <ul className="text-[13px] 2xl:text-[20px] text-[#7D7D7D]">
            {productsData?.mainCategories[1]?.subCategories.map(
              (subCat, subIndex) => (
                <li
                  key={subIndex}
                  className="py-1 cursor-pointer hover:text-[#0096ff]"
                >
                  {subCat}
                </li>
              )
            )}
          </ul>

          <h3 className="font-bold text-[#1E1E1E] 2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff]">
            {productsData?.mainCategories[2]?.name}
          </h3>
          <ul className="text-[13px] 2xl:text-[20px] text-[#7D7D7D]">
            {productsData?.mainCategories[2]?.subCategories.map(
              (subCat, subIndex) => (
                <li
                  key={subIndex}
                  className="py-1 cursor-pointer hover:text-[#0096ff]"
                >
                  {subCat}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Middle section: Next main categories and a promotional banner */}
      <div className="flex flex-col gap-2 px-4">
        <div className="flex w-full">
          {/* Fourth main category */}
          <div className="py-2 border-r pr-4 border-gray-200 w-fit">
            <h3 className="font-bold text-[#1E1E1E]  2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff]">
              {productsData?.mainCategories[3]?.name}
            </h3>
            <ul className="text-[13px] 2xl:text-[20px] text-[#7D7D7D]">
              {productsData?.mainCategories[3]?.subCategories.map(
                (subCat, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-1 cursor-pointer hover:text-[#0096ff]"
                  >
                    {subCat}
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Fifth main category */}
          <div className="py-2 border-r px-4 border-gray-200 w-full">
            <h3 className="font-bold text-[#1E1E1E] 2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff]">
              {productsData?.mainCategories[4]?.name}
            </h3>
            <ul className="text-[13px] 2xl:text-[20px] text-[#7D7D7D]">
              {productsData?.mainCategories[4]?.subCategories.map(
                (subCat, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-1 cursor-pointer hover:text-[#0096ff]"
                  >
                    {subCat}
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Remaining main categories (names only) */}
          <div className="py-2 border-r px-4 border-gray-200 w-full">
            <h3 className="font-bold text-[#1E1E1E] text-[15px] 2xl:text-[20px] cursor-pointer hover:text-[#0096ff]">
              {productsData?.mainCategories[5]?.name}
            </h3>
            <h3 className="font-bold text-[#1E1E1E] 2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff] 2xl:text-2xl">
              {productsData?.mainCategories[6]?.name}
            </h3>
            <h3 className="font-bold text-[#1E1E1E] 2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff]">
              {productsData?.mainCategories[7]?.name}
            </h3>
            <h3 className="font-bold text-[#1E1E1E] 2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff]">
              {productsData?.mainCategories[8]?.name}
            </h3>
            <h3 className="font-bold text-[#1E1E1E] 2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff]">
              {productsData?.mainCategories[9]?.name}
            </h3>
            <h3 className="font-bold text-[#1E1E1E]  2xl:text-[20px] text-[15px] cursor-pointer hover:text-[#0096ff]">
              {productsData?.mainCategories[10]?.name}
            </h3>
          </div>
        </div>
        {/* Promotional banner section */}
        <div className="bg-[url('/header/productbanner.png')] bg-cover bg-no-repeat h-30 w-120 px-4 flex flex-col justify-center rounded-lg">
          <p className="text-[15px] font-bold">Packaging Design</p>
          <h1 className="text-[20px] font-bold">Thousands of free templates</h1>
          <button className="cursor-pointer bg-[#1E1E1E] text-white w-[24%] rounded-lg py-2 mt-2">
            Buy Now
          </button>
        </div>
      </div>

      {/* Right section: Featured product card */}
      <div className="bg-[url(/header/productbanner2.png)] bg-cover bg-no-repeat flex flex-col w-[26%] pl-4 h-[42vh] rounded-2xl">
        <div className="rounded-lg  flex items-center justify-center h-full">
          <div className="flex flex-col items-start gap-4 text-white">
            <p className="text-[15px] font-bold">
              {productsData.featuredProduct.description}
            </p>
            <h3 className="text-[20px] font-bold">
              {productsData.featuredProduct.title}
            </h3>
            <button className="cursor-pointer bg-[#1E1E1E] text-white w-[38%] rounded-lg py-2 mt-2">
              {productsData.featuredProduct.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuDropdown;
