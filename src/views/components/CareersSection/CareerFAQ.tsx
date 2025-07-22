"use client";
import React, { useEffect, useState } from "react";
import { FaHandPointLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What is Flowbite?",
    answer: "Flowbite is an open-source library for Tailwind CSS...",
  },
  {
    question: "How can I get started with Flowbite?",
    answer: "To get started, install it via npm or yarn...",
  },
  {
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework...",
  },
];

const CareerFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="text-center  mt-12  2xl:mt-20">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mt-4 2xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          deserunt sed eligendi velit laboriosam suscipit, quisquam eveniet illo
          soluta adipisci necessitatibus officia id blanditiis voluptates eos.
          Ab alias inventore molestiae.
        </p>
      </div>

      <div className="w-full px-4  mt-12  2xl:mt-20">
        <div data-aos="fade-right">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-pink-500 my-3">
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-4 sm:px-5 py-4 font-medium text-gray-700 border border-b-0 border-pink-500 rounded-t-xl focus:ring-2 focus:ring-pink-400 hover:bg-white gap-3 text-left transition-all duration-300"
                aria-expanded={activeIndex === index ? "true" : "false"}
                aria-controls={`faq-body-${index}`}
              >
                <span className="text-sm sm:text-base 2xl:text-3xl">
                  {item.question}
                </span>
                <div
                  className={`flex items-center justify-center w-8 h-8 border-2 rounded-full transition ${
                    activeIndex === index
                      ? "bg-purple-100 border-pink-500"
                      : "border-pink-500"
                  }`}
                >
                  <FaHandPointLeft className="text-pink-500 h-5 w-5" />
                </div>
              </button>
              <div
                id={`faq-body-${index}`}
                className={`px-4 sm:px-5 py-3 border border-gray-200 transition-all duration-300 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
                aria-labelledby={`faq-heading-${index}`}
              >
                <p className="text-sm text-gray-600  2xl:text-3xl">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CareerFAQ;
