"use client";
import React from "react";

export default function AboutCompany() {
  return (
    <div className="mt-12">
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-[#0b163f] via-[#0b163f] to-[#7f8388]">
        <div
          className="relative w-full lg:w-[38%] h-[300px] lg:h-[400px] bg-center bg-no-repeat bg-cover rounded-[1em]"
          style={{
            backgroundImage: "url(/images/founder.png)",
          }}
        ></div>

        <div className="w-full lg:w-[50%]  text-white p-4 sm:p-8 lg:p-12 space-y-4">
          <h1 className="text-2xl 2xl:text-5xl  sm:text-3xl lg:text-4xl font-bold mb-3">
            About our Company
          </h1>
          <p className="2xl:text-2xl">
            Mecarvi Prints is an industry-leading printing company that offers a
            comprehensive range of integrated advertising and marketing
            solutions. With the aim of providing unparalleled print and creative
            solutions under one roof, we started our journey of excellence a
            decade ago as R&G Multimedia Enterprise.
          </p>
          <p className="2xl:text-2xl">
            In 2019, the founders rebranded it as Mecarvi Holding Corporation,
            embracing innovation and scale. Mecarvi brings concepts to life
            through expertise, execution, and technology — helping brands grow
            while saving clients time and money.
          </p>
          <p className="2xl:text-2xl">
            We design, print, and deliver over a million products nationally.
            With cutting-edge equipment and a skilled team, we promise top-notch
            quality at affordable prices. From small businesses to
            multi-nationals, we serve all with equal dedication.
          </p>
          <p className="2xl:text-2xl">
            Based in Forest Park, Georgia, we serve the USA, Canada, and the
            Caribbean. Our warehouses in Texas, California, and Georgia — and
            our 323 professionals — have helped us satisfy over 275,000
            customers. We look forward to expanding globally while staying
            committed to excellence and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
