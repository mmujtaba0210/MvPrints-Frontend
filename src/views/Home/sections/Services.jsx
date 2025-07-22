import DynamicCard from "@/components/DynamicCard";
import React from "react";
const serviceCard = [
  {
    id: 1,
    title: "Printing",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
  {
    id: 2,
    title: "Graphics Design",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
  {
    id: 3,
    title: "Embroidery",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
  {
    id: 4,
    title: "Digitizing",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
];

const Services = () => {
  return (
    <div>
      <div className="2xl:my-16">
        <h2 className="text-3xl font-bold 2xl:text-5xl text-center text-[#fa09a7]">
          Our Services
        </h2>
        <p className="text-center mb-5 2xl:text-2xl text-[#fa09a7]">
          Quality and Affordability Unrivaled!
        </p>
      </div>
      <div className="grid grid-cols-3 mt-12 gap-8 ">
        <div className="">
          <img src="/images/tiger.gif" alt="..." />
        </div>
        <div className="col-span-2 grid xl:grid-cols-2 gap-8 z-10">
          {serviceCard.map((data, index) => (
            <div key={index} data-aos="fade-right">
              <DynamicCard title={data.title} description={data.description} />
            </div>
          ))}
        </div>
        <div className="absolute top-[253%] left-[50%] z-0">
          <div className="bg-gray-500 w-1 h-10"></div>
        </div>
        <div className="absolute top-[253%] right-[17%] z-0">
          <div className="bg-gray-500 w-1 h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
