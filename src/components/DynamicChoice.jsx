import React from "react";
import CustomButton from "./CustomButton";

const DynamicChoice = ({ title, description, image }) => {
  return (
    <div className="flex flex-col justify-between h-full gap-6 border border-[#cec7c7] bg-white p-6 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#fa09a7] hover:bg-[#0096ff] hover:text-white hover:-translate-y-2 hover:rounded-tr-none hover:rounded-bl-none hover:rounded-4xl group">
      <div className="flex gap-4 items-center justify-center">
        <div className="flex items-center justify-center border-1 rounded-full p-2 w-[80px] h-[70px] z-10 group-hover:border-[#fa09a7] group-hover:border-2 group-hover:bg-white/30">
          <img src={image} alt="..." className="w-[140px]" />
        </div>
        <h2 className="text-2xl font-bold text-[#fa09a7] group-hover:text-white 2xl:text-4xl">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-3 text-justify">
        <p className="text-[#707070] group-hover:text-white 2xl:text-2xl">
          {description}
        </p>
      </div>
      <div className="flex justify-center">
        <CustomButton text="READ MORE" width="58%" className="2xl:text-2xl" />
      </div>
    </div>
  );
};

export default DynamicChoice;
