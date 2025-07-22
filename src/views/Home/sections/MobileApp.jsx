import CustomButton from "@/components/CustomButton";
import React from "react";

const MobileApp = () => {
  return (
    <section className="py-8 pb-14 w-full bg-white">
      <div className="mx-8  text-left bg-[url(/images/background.png)] bg-cover bg-no-repeat sm:h-[720px] md:h-[650px] rounded-2xl relative">
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
        <div className="relative p-8 grid grid-cols-1 md:grid-cols-2  z-10 justify-center items-center h-full">
          <div className="">
            <h2 className="text-3xl font-bold mb-4 2xl:text-5xl text-white">
              Download our Mobile src
            </h2>
            <p className=" mb-8 text-white 2xl:text-2xl">
              Ordering Simplified! Discover the convenience of finding the
              products you need for printing and embroidery on-demand, exactly
              when you need them. With our streamlined mobile src, it's now
              quicker and easier than ever to place orders—even while you're on
              the go. We stand by our promise of "FAST SERVICE WITH
              UNCOMPROMISING QUALITY!" Let us help you bring your vision to life
              with speed, precision and excellence at your fingertips.
            </p>
            <CustomButton
              text="Download Now"
              className="w-[100%] md:w-[60%] 2xl:text-3xl"
            />
            <p className="max-w-2xl mt-4 2xl:text-3xl text-white">
              Available in src Stores on March 27th 2025
            </p>
          </div>
          <div className=" flex justify-center mt-5  ">
            <img
              src="/images/app.png"
              alt="src"
              className=" w-[55%] xl:w-[55%] 2xl:w-[70%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
