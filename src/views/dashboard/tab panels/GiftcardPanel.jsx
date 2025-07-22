import React from "react";
import { FiGift } from "react-icons/fi";

const GiftCardPanel = () => {
  // Sample gift card orders data - replace with actual data from your backend
  const giftCardOrders = [
    {
      id: 1,
      recipientName: "John Doe",
      buyerName: "Jane Smith",
      note: "Happy Birthday!",
      type: "Birthday Gift Card",
      amount: 50,
      date: "2024-03-20",
    },
    {
      id: 2,
      recipientName: "Ajay",
      buyerName: "Jane Williams",
      note: "Have a great day!",
      type: "Paypal Gift Card",
      amount: 100,
      date: "2024-03-25",
    },
  ];

  return (
    <div>
      {/* Gift Card Orders */}
      <div className="bg-white col-span-3 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] p-4 w-full">
        <div className="text-[#0096ff] 2xl:text-4xl text-xl font-bold mb-4 pb-1 border-b border-[#cec7c7]">
          GIFT CARD ORDERS
        </div>

        {giftCardOrders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {giftCardOrders.map((order) => (
              <div
                key={order.id}
                className="relative bg-gradient-to-r from-[#0095ff] to-[#000B5B] rounded-xl p-6 text-white"
              >
                {/* Gift Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold 2xl:text-3xl ">
                      ${order.amount}
                    </h3>
                    <p className="text-sm opacity-90 2xl:text-3xl">
                      {order.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-90 2xl:text-3xl">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Gift Card Details */}
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm opacity-90 2xl:text-2xl">To</p>
                    <p className="font-semibold 2xl:text-2xl">
                      {order.recipientName}
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm opacity-90 2xl:text-2xl">From</p>
                    <p className="font-semibold 2xl:text-2xl">
                      {order.buyerName}
                    </p>
                  </div>

                  {order.note && (
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm opacity-90 2xl:text-2xl">Note</p>
                      <p className="font-semibold italic 2xl:text-2xl">
                        {order.note}
                      </p>
                    </div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-4 opacity-20">
                  <FiGift className="w-[40px] h-[40px]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <span>
              <img src="/emoji/sad.png" alt="Sad" width={"120px"} />
            </span>
            <div className="text-gray-700 text-lg mt-2">
              Sorry! There are no gift card orders.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftCardPanel;
