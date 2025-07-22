import React from "react";
import { FiStar } from "react-icons/fi";

const TestimonialCard = ({ image, title, country, description }) => {
  return (
    <div className="bg-white p-4 shadow-[0_1px_10px_rgba(0,0,0,0.25)] rounded-2xl m-2 min-w-[320px] max-w-[340px] 2xl:min-w-[470px]">
      <div className="flex bg-[#f9f9f9] p-4 border-1 border-[rgba(0,0,0,.05)] gap-4 items-center">
        <img
          src={image}
          alt="Client"
          className="w-[70px] h-[70px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-[22px] font-semibold 2xl:text-3xl">{title}</h2>
          <p className="text-[14px] text-[#858585] 2xl:text-3xl">{country}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <p className="italic text-[13px] text-justify 2xl:text-2xl">
          {description}
        </p>
        <div className="flex">
          <FiStar color="gold" fill="gold" className="w-[24px] h-[24px]" />
          <FiStar color="gold" fill="gold" className="w-[24px] h-[24px]" />
          <FiStar color="gold" fill="gold" className="w-[24px] h-[24px]" />
          <FiStar color="gold" fill="gold" className="w-[24px] h-[24px]" />
          <FiStar color="gold" fill="gold" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
