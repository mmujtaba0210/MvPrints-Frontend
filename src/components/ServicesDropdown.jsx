import Image from "next/image";
import React from "react";

const ServicesDropdown = () => {
  return (
    <div className="absolute flex top-full justify-between px-2 left-1/2 -translate-x-1/2 mt-10 w-[40vw] items-center bg-white shadow-lg rounded-lg py-2 z-20">
      <ul className="text-[#333333] font-semibold text-md border-r pr-2 border-gray-200">
        <li className="px-4 py-2 rounded-lg hover:bg-[#0096ff] hover:text-white cursor-pointer">
          Digitizing
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-[#0096ff] hover:text-white cursor-pointer">
          Embroidery
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-[#0096ff] hover:text-white cursor-pointer">
          Graphics Design
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-[#0096ff] hover:text-white cursor-pointer">
          Printing
        </li>
      </ul>
      <div>
        <Image
          src={"/header/servicedrop.png"}
          width={466}
          height={80}
          alt="Buy Now"
        />
        <div className="absolute top-10 ml-3 flex flex-col gap-4">
          <div className="text-white">
            <p className="text-[15px] font-semibold">Packaging Design</p>
            <h1 className="text-[20px] font-bold">
              Thousands of free <br/> templates
            </h1>
          </div>
          <div>
            <button className="bg-[#1E1E1E] rounded-lg font-bold text-[15px] text-white px-10 py-3">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
