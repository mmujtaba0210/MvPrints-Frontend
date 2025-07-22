import CustomButton from "@/components/CustomButton";
import React from "react";
import { FiMail, FiMapPin, FiPhone, FiPlus } from "react-icons/fi";

const rewardsData = {
  points: 780,
  cash: 390,
  totalPoints: 640,
  totalCash: 320,
  history: [
    { date: "Nov 30 2021", points: 10, type: "Elite Rewards" },
    { date: "Nov 30 2021", points: 10, type: "Elite Rewards" },
  ],
};

const cashData = {
  user: {
    name: "Andri Jokall",
    avatar: "", // Removed avatar for testing initials
  },
  balance: 19266,
  affiliateBonus: 20798.37,
  redeemPoints: 390,
  loyaltyPoints: 0,
  transactions: [
    { date: "Feb 14 2023", method: "Paypal", amount: 9 },
    { date: "Dec 11 2023", method: "Debit/Credit Card", amount: 1000 },
    { date: "Dec 11 2023", method: "Paypal", amount: 1000 },
  ],
};

const ordersData = [
  {
    info: "o",
    id: "31735914015",
    date: "03 Jan 2025",
    total: 107.61,
    status: "Cancelled",
  },
  {
    info: "o",
    id: "31735892526",
    date: "03 Jan 2025",
    total: 107.61,
    status: "Pending",
  },
  {
    info: "o",
    id: "41735892172",
    date: "03 Jan 2025",
    total: 163.41,
    status: "Pending",
  },
  {
    info: "o",
    id: "41709300393",
    date: "01 Mar 2024",
    total: 14.88,
    status: "Pending",
  },
  {
    info: "o",
    id: "01709297551",
    date: "01 Mar 2024",
    total: 14.88,
    status: "Pending",
  },
];

const DashboardPanel = () => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Info Section */}
      <div className="col-span-2 w-full rounded-lg h-auto p-6 bg-gradient-to-r from-[#0095ff] to-[#000B5B] shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* Left: Avatar + Welcome */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {/* Avatar */}
            <div className="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
              {cashData.user.avatar ? (
                <div className="w-full h-full rounded-full bg-[url(/images/dashboard/infobg.jpg)] bg-cover bg-no-repeat" />
              ) : (
                <div className="w-full h-full rounded-full bg-[#ff00a7] flex items-center justify-center">
                  <span className="text-white text-4xl sm:text-5xl font-bold uppercase">
                    {getInitials(cashData.user.name)}
                  </span>
                </div>
              )}
            </div>

            {/* Greeting */}
            <div className="text-center sm:text-left">
              <p className="text-white text-lg sm:text-xl 2xl:text-3xl font-black">
                Hello!
              </p>
              <p className="text-white text-lg sm:text-xl font-bold 2xl:text-3xl ">
                Andri Jokall
              </p>
              <p className="text-white text-lg sm:text-xl font-bold 2xl:text-3xl ">
                Welcome to Mecarvi
              </p>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col   items-center sm:items-start gap-2">
            <p className="text-white  2xl:text-3xl  text-base sm:text-lg font-medium flex items-center gap-2">
              <FiMail /> andrijokall18@gmail.com
            </p>
            <p className="text-white text-base 2xl:text-3xl  sm:text-lg font-medium flex items-center gap-2">
              <FiPhone /> +923048239545
            </p>
            <p className="text-white text-base  2xl:text-3xl sm:text-lg font-medium flex items-center gap-2">
              <FiMapPin /> United States
            </p>
            <p className="text-white text-base 2xl:text-3xl  sm:text-lg font-medium flex items-center gap-2">
              <FiMapPin /> Georgia
            </p>
          </div>
        </div>
      </div>

      {/* Rewards and Cash Cards */}
      <div className=" col-span-2 flex flex-col md:flex-row gap-6">
        {/* Mecarvi Elite Rewards */}
        <div className="flex-1 bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] p-6 min-w-[350px]">
          <h2 className="font-bold text-lg mb-2 2xl:text-4xl ">
            Mecarvi Elite Rewards
          </h2>
          <div className="flex items-center gap-24 mb-2 w-full justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600">
                {rewardsData.points}
              </div>
              <div className="text-sm text-[#333333] 2xl:text-2xl ">
                Remaining Points
              </div>
            </div>
            <div className="border-l h-18 border-red-500"></div>
            <div className="text-center">
              <div className="text-5xl font-bold">${rewardsData.cash}</div>
              <div className="text-sm text-[#333333] 2xl:text-2xl ">
                Remaining Cash
              </div>
            </div>
          </div>
          <div className="text-center mb-2 border-1 rounded-sm p-2 bg-[#e1e1e1] text-[#333333] 2xl:text-3xl  border-[#bfb7b7]">
            Earn 10 points for every $100 spent
          </div>
          <div className="flex justify-end mb-2">
            <CustomButton
              text="Redemption History"
              className="2xl:text-3xl w-[30%] 2xl:w-[45%] "
            />
          </div>
          <div className="text-md font-bold mb-1 2xl:text-4xl ">OVERVIEW</div>
          <div className="flex justify-between text-sm mb-2 2xl:text-2xl ">
            <span>Total Points Earned = {rewardsData.totalPoints} Points</span>
            <span>Total Cash Redeemed = ${rewardsData.totalCash}</span>
          </div>
          <hr className="mb-2" />
          {rewardsData.history.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border mb-2 rounded p-2 bg-gray-50"
            >
              <div>
                <div className="font-bold text-md 2xl:text-2xl ">
                  ↻ {item.type}
                </div>
                <div className="text-xs text-gray-500 2xl:text-2xl ">
                  {item.date}
                </div>
              </div>
              <div className="font-bold text-sm 2xl:text-2xl ">
                {item.points} Points
              </div>
            </div>
          ))}
        </div>

        {/* Mecarvi Cash */}
        <div className="col-span-2 flex-1 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] min-w-[350px] text-[#333333] relative">
          <div className="flex flex-col gap-5 rounded-xl w-full bg-gradient-to-r from-[#0095ff] to-[#000B5B] py-4 pb-10 px-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/30 px-3 py-2 rounded-full flex items-center gap-3">
                <div className="relative rounded-full w-[42px] h-[42px] flex items-center justify-center">
                  {cashData.user.avatar ? (
                    <div className="w-full h-full rounded-full bg-[url(/images/dashboard/infobg.jpg)] bg-cover bg-no-repeat" />
                  ) : (
                    <div className="w-full h-full rounded-full bg-[#ff00a7] flex items-center justify-center">
                      <span className="text-white text-xl 2xl:text-3xl  font-bold uppercase">
                        {getInitials(cashData.user.name)}
                      </span>
                    </div>
                  )}
                </div>
                <span className="text-white font-bold 2xl:text-3xl ">
                  {cashData.user.name}
                </span>
              </div>
              <span className="bg-white/30 ml-auto px-2 py-1 text-white rounded-full font-light">
                <FiPlus className="w-[36px] h-[42px]" />
              </span>
            </div>
            <div className="flex justify-between gap-2 mb-2">
              <button className=" text-white px-3 py-1 rounded font-bold text-3xl">
                Mecarvi Cash
              </button>
              <button className="text-white px-3 py-1 rounded font-bold text-3xl">
                ${cashData.balance}
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-2 -mt-10">
            <div className="flex flex-col gap-2 bg-white py-2 w-[30%] px-6 rounded-lg shadow-lg">
              <div className="text-md 2xl:text-3xl  text-[#0096ff] font-bold">
                Affiliate Bonus
              </div>
              <div className="font-bold 2xl:text-3xl  bg-[#ebedf2] text-[#515365] text-center py-1 rounded-md">
                ${cashData.affiliateBonus}
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white py-3 w-[30%] px-6 rounded-lg shadow-lg">
              <div className="text-md text-[#0096ff] 2xl:text-3xl font-bold">
                Loyalty Points
              </div>
              <div className="font-bold bg-[#ebedf2] 2xl:text-3xl  text-[#515365] text-center py-1 rounded-md">
                ${cashData.redeemPoints}
              </div>
            </div>
          </div>
          <div className="bg-white/20 rounded p-2 px-10 mt-3">
            {cashData.transactions.map((tx, idx) => (
              <div
                key={idx}
                className="flex 2xl:text-2xl  justify-between text-sm py-4 border-b text-[#333333] border-[#bfb7b7] last:border-b-0"
              >
                <span>{tx.date}</span>
                <span>{tx.method}</span>
                <span>${tx.amount}</span>
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <CustomButton
                text="View Details"
                width="24%"
                className="2xl:text-3xl "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl col-span-2 shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
        <div className="flex justify-between items-center px-4 py-4">
          <h2 className="text-[#0096ff] font-bold text-lg 2xl:text-4xl ">
            RECENT ORDERS
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0095ff1a] 2xl:text-3xl  text-[#333333] border-t border-[#dad9d9]">
                <th className="py-4 px-3 font-semibold text-left">INFO</th>
                <th className="py-4 px-3 font-semibold text-left">Order</th>
                <th className="py-4 px-3 font-semibold text-left">Date</th>
                <th className="py-4 px-3 font-semibold text-left">
                  Order Total
                </th>
                <th className="py-4 px-3 font-semibold text-left">
                  Order Status
                </th>
              </tr>
            </thead>
            <tbody>
              {ordersData.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-6 2xl:text-3xl  text-gray-500"
                  >
                    No data available in table
                  </td>
                </tr>
              ) : (
                ordersData.map((order, idx) => (
                  <tr
                    key={idx}
                    className="border-y 2xl:text-2xl  border-[#dad9d9]"
                  >
                    <td className="py-3 px-3">{order.info}</td>
                    <td className="py-3 px-3">{order.id}</td>
                    <td className="py-3 px-3">{order.date}</td>
                    <td className="py-3 px-3">${order.total.toFixed(2)}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-4 py-2 rounded 2xl:text-2xl  font-semibold text-sm ${
                          order.status === "Cancelled"
                            ? "bg-red-100 text-red-500"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center 2xl:text-3xl  justify-between mt-2 text-sm p-4">
          <div>
            <span>
              Showing 1 to {ordersData.length} of {ordersData.length} entries
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white 2xl:text-3xl  rounded px-2 py-1 text-gray-500"
              disabled
            >
              Previous
            </button>
            <button className="border 2xl:text-3xl  rounded px-2 py-1 bg-[#0096ff] text-white">
              1
            </button>
            <button
              className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded 2xl:text-3xl  px-2 py-1 text-gray-500"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel;
