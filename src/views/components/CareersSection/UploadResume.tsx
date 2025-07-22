"use client";
import { useRef } from "react";
import React from "react";

const UploadResume = () => {
  const fileInputRef2 = useRef<HTMLInputElement | null>(null);

  const handleUploadResume = () => {
    fileInputRef2.current?.click();
  };

  return (
    <div className="w-full  mt-12  2xl:mt-20">
      <div
        className="rounded-[12px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(images/resume-bg.png)",
          minHeight: "300px",
        }}
      >
        <div className=" p-6 sm:p-10 lg:p-16 space-y-6 text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900  2xl:text-5xl">
            Apply Today!
          </h3>
          <p className="text-sm sm:text-base  2xl:text-3xl text-gray-700">
            Ready to work at Mecarvi Prints?
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-blue-800 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition  2xl:text-3xl">
              Apply now
            </button>

            <div>
              <button
                onClick={handleUploadResume}
                className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition  2xl:text-3xl"
              >
                Upload Resume
              </button>
              <input
                type="file"
                ref={fileInputRef2}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    console.log(e.target.files[0].name);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
