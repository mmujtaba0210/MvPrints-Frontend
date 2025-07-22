"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaHandPointLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: Record<string, FaqItem[]> = {
  inquery: [
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
    {
      question: "How do I install Tailwind CSS?",
      answer: "To install Tailwind CSS, run `npm install tailwindcss`...",
    },
  ],
  aboutJS: [
    {
      question: "What is JavaScript?",
      answer: "JavaScript is a programming language...",
    },
    {
      question: "How do I start using JavaScript?",
      answer: "To use JavaScript, simply include it in your HTML files...",
    },
    {
      question: "What is the difference between var and const?",
      answer:
        "`var` is function-scoped, while `let` and `const` are block-scoped...",
    },
    {
      question: "What is an arrow function in JavaScript?",
      answer:
        "Arrow functions are a shorthand for regular function expressions...",
    },
  ],
  contactUs: [
    {
      question: "How can I contact customer support?",
      answer: "You can contact us via email or phone...",
    },
    {
      question: "What is your customer support working hours?",
      answer: "Our customer support is available from 9 AM to 6 PM...",
    },
    {
      question: "Do you provide live chat support?",
      answer: "Yes, we provide live chat support during working hours...",
    },
    {
      question: "Can I request a callback?",
      answer:
        "Yes, you can request a callback by filling out the contact form...",
    },
  ],
  MoreQuestios: [
    {
      question: "How can I contact customer support?",
      answer: "You can contact us via email or phone...",
    },
    {
      question: "What is your customer support working hours?",
      answer: "Our customer support is available from 9 AM to 6 PM...",
    },
    {
      question: "Do you provide live chat support?",
      answer: "Yes, we provide live chat support during working hours...",
    },
    {
      question: "Can I request a callback?",
      answer:
        "Yes, you can request a callback by filling out the contact form...",
    },
  ],
  faqCategory: [
    {
      question: "What is FAQ?",
      answer: "FAQ stands for Frequently Asked Questions...",
    },
    {
      question: "How do I submit a question?",
      answer: "You can submit your questions via the contact form...",
    },
    {
      question: "Is there a search feature for FAQs?",
      answer: "Yes, you can use the search feature to find specific FAQs...",
    },
    {
      question: "Can I suggest an FAQ?",
      answer: "Yes, you can suggest an FAQ by contacting our support team...",
    },
  ],
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("inquery");

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const groupItemsInPairs = (items: FaqItem[]) => {
    const grouped: FaqItem[][] = [];
    for (let i = 0; i < items.length; i += 2) {
      grouped.push(items.slice(i, i + 2));
    }
    return grouped;
  };

  return (
    <>
      <div className="text-center ">
        <h3 className="text-3xl md:text-5xl text-center font-semibold">
          Frequently Asked Questions
        </h3>
        <p className="mt-2 text-gray-500">
          Find answers to the most common questions about our services.
        </p>
      </div>

      <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {/* Tabs */}
        <div className="md:col-span-1">
          <div className="flex flex-col space-y-2">
            {Object.keys(faqData).map((tab, index) => (
              <button
                key={index}
                className={`text-left px-4 py-3 rounded-md font-medium text-gray-700 border-l-4 ${
                  activeTab === tab
                    ? "bg-pink-500 text-white border-pink-700"
                    : "hover:bg-pink-100 border-transparent"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Questions */}
        <div className="md:col-span-3">
          <div data-aos="fade-right">
            {groupItemsInPairs(faqData[activeTab]).map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              >
                {pair.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-pink-400"
                  >
                    <div className="absolute left-[-10px] top-0 w-4 h-4 bg-white border-2 border-pink-500 rounded-full z-10"></div>
                    <div className="border-b border-pink-500">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        className="flex items-center justify-between w-full px-5 pt-5 pb-3 font-medium text-gray-600 border border-b-0 border-pink-500 rounded-t-xl focus:ring-4 focus:ring-pink-600 hover:bg-white gap-3 text-left"
                        aria-expanded={activeIndex === index ? "true" : "false"}
                        aria-controls={`faq-body-${index}`}
                      >
                        <span>{item.question}</span>
                        <div
                          className={`bg-white flex items-center justify-center w-8 h-8 border-2 rounded-full ${
                            activeIndex === index
                              ? "border-pink-500 bg-pink-100"
                              : "border-pink-500"
                          }`}
                        >
                          <FaHandPointLeft className="text-pink-500 h-5 w-5" />
                        </div>
                      </button>
                      <div
                        id={`faq-body-${index}`}
                        className={`p-5 border border-gray-200 ${
                          activeIndex === index ? "" : "hidden"
                        }`}
                        aria-labelledby={`faq-heading-${index}`}
                      >
                        <p className="text-gray-500">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
