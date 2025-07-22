import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    duration: "/90 Days",
    features: ["Free Standard Shipping on orders over $149"],
    button: "Get Started",
    highlight: false,
    expired: false,
    current: false,
  },
  {
    name: "Gold",
    price: "$29.99",
    duration: "/90 Days",
    features: [
      "Complimentary Express Shipping on orders over $249",
      "Priority Customer Support via Phone, Email or Live Chat",
      "Unlimited Complimentary Proofing & Design Revisions",
      "Unlimited Complimentary Prepaid Product Returns",
      "5 Restocking Fees Waiver Monthly",
      "Up to $1,000 Purchase Protection Monthly",
      "Complimentary Product Replacement Guarantee",
      "60% Off White Labeling Services & Order Fulfillment Service Fees",
      "Complimentary Product Samples on Bulk Orders",
      "2x Loyalty Reward Points on all orders",
      "Earn Mecarvi Cash Rewards for Reviews",
      "1% Monthly Bonus Cashback",
      "Additional Bonus 2% Discount on orders over $1999",
      "Mecarvi Plus Complimentary Products",
      "40% Discounted Shared Family Membership (up to 3 users)",
      "1 Complimentary Logo Digitizing",
      "Up to 5% Partner Discount on other Mecarvi-Branded Services",
      "Exclusive Weekly Discounts",
      "7-Day Money Back Guarantee on Membership",
    ],
    button: "Current Plan",
    highlight: true,
    expired: true,
    current: true,
  },
  {
    name: "Platinum",
    price: "$49.99",
    duration: "/90 Days",
    features: [
      "24/7 VIP Dedicated Account Customer Support via Phone, Email or Live Chat",
    ],
    button: "Get Started",
    highlight: false,
    expired: false,
    current: false,
  },
];

const MembershipPanel = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-[80vh] py-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl justify-center 2xl:gap-60">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-2xl shadow-[0_1px_8px_rgba(0,0,0,0.45)] min-w-[280px] 2xl:w-[45rem] max-w-md flex flex-col items-center pb-8 transform transition-transform duration-300 ${
              plan.highlight ? "scale-105 z-10" : "scale-100"
            }`}
          >
            <div className="w-full bg-gradient-to-r from-[#0095ff] to-[#000B5B] rounded-t-2xl text-center py-4">
              <div className="uppercase text-white tracking-widest font-bold text-lg 2xl:text-3xl">
                {plan.name}
              </div>
              <div className="text-3xl font-bold text-white mt-2">
                {plan.price}
                <span className="text-base font-normal 2xl:text-2xl">
                  {plan.duration}
                </span>
              </div>
            </div>
            <ul className="text-gray-700 2xl:text-xl text-sm px-8 py-6 flex-1 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 mb-2">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {plan.current ? (
              <>
                <button className="w-4/5 bg-[#0096ff] text-white font-semibold py-2 rounded-full 2xl:text-2xl mt-2 cursor-default opacity-90">
                  {plan.button}
                </button>
                {plan.expired && (
                  <>
                    <div className="text-xs 2xl:text-2xl text-gray-500 mt-2">
                      Expired
                    </div>
                    <button className="w-4/5 bg-[#0096ff] hover:bg-[#fa09a7] text-white 2xl:text-2xl font-semibold py-2 rounded-full mt-2">
                      Renew
                    </button>
                  </>
                )}
              </>
            ) : (
              <button className="w-4/5 bg-[#0096ff] hover:bg-[#fa09a7] text-white font-semibold py-2 2xl:text-2xl rounded-full mt-2">
                {plan.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPanel;
