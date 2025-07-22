import DynamicChoice from "@/components/DynamicChoice";
import React from "react";
const choiceCard = [
  {
    id: 1,
    image: "/images/choice1.png",
    title: "Printing",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
  {
    id: 2,
    image: "/images/choice2.png",
    title: "Graphics Design",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
  {
    id: 3,
    image: "/images/choice3.png",
    title: "Embroidery",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
  {
    id: 4,
    image: "/images/choice4.png",
    title: "Digitizing",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours! `,
  },
  {
    id: 5,
    image: "/images/choice5.png",
    title: "Digitizing",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
  {
    id: 6,
    image: "/images/choice6.png",
    title: "Digitizing",
    description: `When we say It'll be done, it will! Our designers are absolute professionals with amazing turnaround time. Get your design in 12-24 hours!`,
  },
];
const ChoiceSection = () => {
  return (
    <div>
      <div className="my-16 ">
        <h2 className="text-3xl 2xl:text-5xl  font-bold text-center text-[#fa09a7]">
          Why Choose Mecarvi Prints?
        </h2>
      </div>
      <div className="flex gap-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {choiceCard.map((data, index) => (
            <div key={index} data-aos="fade-up">
              <DynamicChoice
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoiceSection;
