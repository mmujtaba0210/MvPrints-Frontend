"use client";
import React from "react";
import { FaMosque } from "react-icons/fa";

const Steps = () => {
  const steps = [
    {
      color: "yellow-400",
      textColor: "yellow-500",
      borderColor: "border-yellow-400",
      title: "Apply",
      description:
        "Explain your requirements by selecting your preferred service and get a quotation. We'll be there if you need any consultation.",
    },
    {
      color: "teal-600",
      textColor: "teal-600",
      borderColor: "border-teal-600",
      title: "Review",
      description:
        "We analyze your request and prepare a detailed response or proposal tailored to your needs.",
    },
    {
      color: "blue-700",
      textColor: "blue-700",
      borderColor: "border-blue-700",
      title: "Process",
      description:
        "Once approved, our team begins working, keeping you updated throughout the process.",
    },
    {
      color: "green-600",
      textColor: "green-600",
      borderColor: "border-green-600",
      title: "Deliver",
      description:
        "We deliver your finalized service/product, ensuring quality and client satisfaction.",
    },
  ];
  return (
    <>
      <div className="2xl:mt-20">
        <div className="text-center mt-12 ">
          <h3 className="text-4xl text-center font-bold  2xl:text-5xl">
            How It Works
          </h3>
        </div>

        <div className="relative">
          <div className="grid grid-cols-4 my-4">
            <div className=" flex justify-center items-center">
              <div className="h-[24px] w-[24px] border-[4px] border-yellow-400 rounded-full flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="h-[24px] w-[24px] border-[4px] border-teal-600 rounded-full flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="h-[24px] w-[24px] border-[4px] border-blue-600 rounded-full flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="h-[24px] w-[24px] border-[4px] border-green-600 rounded-full flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-800 absolute left-0 right-0 top-[50%] z-[-1]"></div>
        </div>
        {/* <div className="grid grid-cols-1 gap-8">
          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <div className="curve-box relative border-[8px] border-yellow-400 rounded-[12px]">
              <div className="shadow-lg bg-white rounded-[12px] px-4 py-8 flex flex-col items-center space-y-4">
                <div className="border border-yellow-400 h-[68px] w-[68px] rounded-full flex justify-center items-center">
                  <FaMosque className="text-yellow-400 text-3xl" />
                </div>
                <h3 className="text-yellow-500 text-3xl text-center">Apply</h3>
                <p>
                  Explain your requirements by selecting your preferred service
                  and get quotation for your order. We&apos;ll be there if you
                  need any consultation
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <div className="curve-box2 relative border-[8px] border-teal-600 rounded-[12px]">
              <div className="shadow-lg bg-white rounded-[12px] px-4 py-8 flex flex-col items-center space-y-4">
                <div className="border border-teal-600 h-[68px] w-[68px] rounded-full flex justify-center items-center">
                  <FaMosque className="text-teal-600 text-3xl" />
                </div>
                <h3 className="text-teal-600 text-3xl text-center">Apply</h3>
                <p>
                  Explain your requirements by selecting your preferred service
                  and get quotation for your order. We&apos;ll be there if you
                  need any consultation
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <div className="curve-box3 relative border-[8px] border-blue-700 rounded-[12px]">
              <div className="shadow-lg bg-white rounded-[12px] px-4 py-8 flex flex-col items-center space-y-4">
                <div className="border border-blue-700 h-[68px] w-[68px] rounded-full flex justify-center items-center">
                  <FaMosque className="text-blue-700 text-3xl" />
                </div>
                <h3 className="text-blue-700 text-3xl text-center">Apply</h3>
                <p>
                  Explain your requirements by selecting your preferred service
                  and get quotation for your order. We&apos;ll be there if you
                  need any consultation
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 md:col-span-4">
            <div className="curve-box4 relative border-[8px] border-green-600 rounded-[12px]">
              <div className="shadow-lg bg-white rounded-[12px] px-4 py-8 flex flex-col items-center space-y-4">
                <div className="border border-green-600 h-[68px] w-[68px] rounded-full flex justify-center items-center">
                  <FaMosque className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-green-600 text-3xl text-center">Apply</h3>
                <p>
                  Explain your requirements by selecting your preferred service
                  and get quotation for your order. Well be there if you need
                  any consultation
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative border-[8px] ${step.borderColor} rounded-[12px]`}
            >
              <div className="shadow-lg bg-white rounded-[12px] px-6 py-8 flex flex-col items-center space-y-4 text-center h-full">
                <div
                  className={`border ${step.borderColor} h-[68px] w-[68px] rounded-full flex justify-center items-center`}
                >
                  <FaMosque
                    className={`text-${step.color}  2xl:text-4xl text-3xl`}
                  />
                </div>
                <h3
                  className={`text-${step.textColor}  2xl:text-4xl text-xl font-semibold`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm  2xl:text-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="grid grid-cols-4 my-4">
            <div className=" flex justify-center items-center">
              <div className="h-[24px] w-[24px] border-[4px] border-yellow-400 rounded-full flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="h-[24px] w-[24px] border-[4px] border-teal-600 rounded-full flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="h-[24px] w-[24px] border-[4px] border-blue-600 rounded-full flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="h-[24px] w-[24px] border-[4px] border-green-600 rounded-full flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-full h-[18px] w-[18px]"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-800 absolute left-0 right-0 top-[50%] z-[-1]"></div>
        </div>
      </div>
    </>
  );
};

export default Steps;
