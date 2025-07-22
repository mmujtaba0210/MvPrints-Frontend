import React from "react";
import CustomButton from "./CustomButton";

const DynamicCard = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-between h-full border text-[#333333] border-[#cec7c7] bg-white p-6 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#fa09a7] hover:bg-[#0096ff] hover:text-white group">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-[#fa09a7] group-hover:text-white 2xl:text-4xl">
          {title}
        </h2>
        <p className="2xl:text-2xl">{description}</p>
      </div>
      <div className="flex justify-end mt-8">
        <CustomButton
          text="READ MORE"
          className="w-[80%] md:w-[50%] 2xl:w-[40%] 2xl:text-2xl"
        />
      </div>
    </div>
  );
};

export default DynamicCard;
