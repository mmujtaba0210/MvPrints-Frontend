"use client";
import React from "react";
import {
  FaHeartbeat,
  FaUmbrellaBeach,
  FaBriefcaseMedical,
  FaPlaneDeparture,
  FaMoneyBillWave,
  FaPiggyBank,
  FaTag,
  FaUsers,
} from "react-icons/fa";

// ✅ 1. Benefit Content Array
const benefitsContent = [
  {
    title: "Health Coverage",
    description:
      "We offer comprehensive medical, dental and vision plans covering up to 85% of costs.",
    icon: FaHeartbeat,
  },
  {
    title: "Life Insurance",
    description:
      "We offer a variety of life insurance options for peace of mind and financial security.",
    icon: FaUmbrellaBeach,
  },
  {
    title: "Paid Time Off",
    description:
      "Employees can take paid time off as needed to recharge or handle personal matters.",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Paid Vacations",
    description:
      "Enjoy paid vacations as part of your compensation for work-life balance.",
    icon: FaPlaneDeparture,
  },
  {
    title: "Competitive Pay",
    description:
      "Market-based salary packages with bi-weekly pay periods and annual reviews.",
    icon: FaMoneyBillWave,
  },
  {
    title: "401(k) Retirement Savings",
    description:
      "Save for your future with auto contributions and company matching options.",
    icon: FaPiggyBank,
  },
  {
    title: "Employee Discounts",
    description:
      "Up to 40% off Mecarvi prints and 20% off affiliate brands post-probation.",
    icon: FaTag,
  },
  {
    title: "Travel Allowance",
    description:
      "Monthly fuel reimbursement and travel allowance for work-related trips.",
    icon: FaUsers,
  },
];

// ✅ 2. Separate Color Class Array
const benefitColors = [
  { bg: "bg-blue-300", icon: "text-blue-900", text: "text-blue-600" },
  { bg: "bg-pink-300", icon: "text-pink-900", text: "text-pink-600" },
  { bg: "bg-green-300", icon: "text-green-900", text: "text-green-600" },
  { bg: "bg-orange-300", icon: "text-orange-900", text: "text-orange-600" },
  { bg: "bg-blue-300", icon: "text-blue-900", text: "text-blue-600" },
  { bg: "bg-orange-300", icon: "text-orange-900", text: "text-orange-600" },
  { bg: "bg-teal-300", icon: "text-teal-900", text: "text-teal-600" },
  { bg: "bg-amber-300", icon: "text-amber-900", text: "text-amber-800" },
];

export default function Benefits() {
  return (
    <div className="bg-gray-100 w-full ">
      <div className="w-[90%] mx-auto py-4">
        <h3 className="text-center  2xl:text-5xl text-3xl sm:text-5xl font-bold uppercase">
          Benefits
        </h3>
        <p className="text-center mt-4  2xl:text-2xl text-gray-600">
          Nusid quod maxime placeat facere possimus, nisi assumenda est, omnis
          dolor
        </p>

        {/* ✅ 3. Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefitsContent.map((item, index) => {
            const colors = benefitColors[index % benefitColors.length];

            // ✅ 4. Apply both 'benefit-points' and 'benefit-point-{n}' classes
            const customClasses = `benefit-points benefit-point-${index + 1}`;

            return (
              <div key={index} className={`relative ${customClasses}`}>
                <div className="shadow-lg bg-white p-6 rounded-tl-[100px] rounded-br-[100px] flex flex-col items-center justify-center space-y-4 text-center h-full">
                  <div
                    className={`w-[80px] h-[80px] rounded-full ${colors.bg}  flex justify-center items-center`}
                  >
                    <item.icon className={`text-4xl  ${colors.icon}`} />
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold  2xl:text-4xl ${colors.text}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600  2xl:text-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
