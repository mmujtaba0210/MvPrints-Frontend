"use client";
import React from "react";

const MegaMenuDropdown = ({ productsData, loading }) => {
  if (loading) {
    return (
      <div className="absolute left-1/2 top-10 mt-4 w-[70vw] bg-white shadow-2xl rounded-xl py-10 text-center text-gray-500 -translate-x-1/2">
        Loading Mega Menu...
      </div>
    );
  }

  if (!productsData || !productsData.mega_menu?.length) {
    return (
      <div className="absolute left-1/2 top-10 mt-4 w-[70vw] bg-white shadow-2xl rounded-xl py-10 text-center text-gray-500 -translate-x-1/2">
        No Mega Menu Data Found
      </div>
    );
  }

  // ✅ Show first 4 main categories
  const categories = productsData.mega_menu.slice(0, 4);

  // ✅ Get banners (if exist)
  const banners = productsData?.banners || [];

  return (
    <div className="absolute left-1/2 top-5 mt-4 w-[65vw] bg-white shadow-2xl rounded-xl py-6 px-6 z-50 group-hover:flex hidden hover:flex transition-all duration-300 -translate-x-1/2">
      <div className="grid grid-cols-5 gap-6 w-full">
        <div className="col-span-3 grid grid-cols-3 gap-4 border-r border-gray-200 pr-4">
          {categories.map((category, catIdx) => {
            const subCategories = category.sub_categories?.slice(0, 4) || [];

            return (
              <div key={catIdx}>
                <h3 className="font-semibold text-[16px] mb-3 text-gray-800">
                  {category.name || "Unnamed Category"}
                </h3>

                {subCategories.length > 0 ? (
                  <ul className="space-y-2 text-[14px] text-[#6B6B6B]">
                    {subCategories.map((sub, subIdx) => (
                      <li
                        key={subIdx}
                        className="cursor-pointer hover:text-[#0096ff] transition"
                      >
                        {sub.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm italic">
                    No Subcategories
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= RIGHT SECTION (BANNERS) ================= */}
        <div className="col-span-2 flex flex-col justify-center items-center gap-4">
          {banners.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {banners.slice(0, 2).map((banner, idx) => (
                <img
                  key={idx}
                  src={banner.image}
                  alt={`Banner ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm italic">No banners available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuDropdown;
