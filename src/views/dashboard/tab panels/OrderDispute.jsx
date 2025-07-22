import React, { useState } from "react";

const mockDisputes = [
  {
    id: 1,
    subject: "Order not received",
    status: "Open",
    date: "2024-06-01",
    details: "Customer claims the order was not delivered.",
    messages: [
      {
        from: "Customer",
        text: "I haven't received my order yet.",
        date: "2024-06-01",
      },
      {
        from: "Support",
        text: "We're looking into this for you.",
        date: "2024-06-02",
      },
    ],
  },
  {
    id: 2,
    subject: "Wrong item sent",
    status: "Resolved",
    date: "2024-05-28",
    details: "Customer received a different item than ordered.",
    messages: [
      { from: "Customer", text: "I got the wrong item.", date: "2024-05-28" },
      {
        from: "Support",
        text: "We apologize, a replacement is on the way.",
        date: "2024-05-29",
      },
    ],
  },
];

const statusTabs = ["All", "Resolved", "Unresolved", "Open"];

const OrderDispute = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedDispute, setSelectedDispute] = useState(mockDisputes[0]);

  const filteredDisputes =
    selectedTab === "All"
      ? mockDisputes
      : mockDisputes.filter((d) => d.status === selectedTab);

  return (
    <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] p-4 h-[90vh] flex flex-col">
      <h2 className="text-[#0096ff] font-bold text-lg mb-2 2xl:text-4xl">
        DISPUTES
      </h2>
      <div className="flex border-b border-[#e5e7eb] mb-2">
        {statusTabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm 2xl:text-3xl font-semibold focus:outline-none ${
              selectedTab === tab
                ? "text-[#0096ff] border-b-2 border-[#0096ff] bg-[#0095ff1a]"
                : "text-gray-500"
            }`}
            onClick={() => {
              setSelectedTab(tab);
              setSelectedDispute(
                tab === "All"
                  ? mockDisputes[0]
                  : mockDisputes.find((d) => d.status === tab) || null
              );
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Dispute List */}
        <div className="w-1/3 border-r border-[#e5e7eb] bg-[#0095ff09] overflow-y-auto">
          {filteredDisputes.length === 0 ? (
            <div className="text-gray-400 2xl:text-2xl p-8 text-center">
              No disputes found.
            </div>
          ) : (
            filteredDisputes.map((d) => (
              <div
                key={d.id}
                className={`p-4 cursor-pointer border-b border-[#f0f0f0] ${
                  selectedDispute && selectedDispute.id === d.id
                    ? "bg-[#0095ff1a]"
                    : "hover:bg-[#0095ff1a]"
                }`}
                onClick={() => setSelectedDispute(d)}
              >
                <div className="font-semibold text-[#333] 2xl:text-3xl">
                  {d.subject}
                </div>
                <div className="text-xs text-gray-500 2xl:text-2xl">
                  {d.date}
                </div>
                <span
                  className={`inline-block mt-1 2xl:text-2xl px-2 py-0.5 rounded text-xs font-semibold ${
                    d.status === "Resolved"
                      ? "bg-green-100 text-green-600"
                      : d.status === "Open"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {d.status}
                </span>
              </div>
            ))
          )}
        </div>
        {/* Dispute Details */}
        <div className="flex-1 p-6 overflow-y-auto">
          {selectedDispute ? (
            <>
              <div className="mb-2">
                <div className="text-lg 2xl:text-3xl font-bold text-[#0096ff]">
                  {selectedDispute.subject}
                </div>
                <div className="text-xs 2xl:text-2xl text-gray-500 mb-2">
                  {selectedDispute.date}
                </div>
                <span
                  className={`inline-block px-2 2xl:text-2xl py-0.5 rounded text-xs font-semibold ${
                    selectedDispute.status === "Resolved"
                      ? "bg-green-100 text-green-600"
                      : selectedDispute.status === "Open"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {selectedDispute.status}
                </span>
              </div>
              <div className="mb-4 2xl:text-2xl text-gray-700">
                {selectedDispute.details}
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1 2xl:text-2xl">Messages:</div>
                <div className="space-y-2">
                  {selectedDispute.messages.map((msg, i) => (
                    <div key={i} className="text-sm 2xl:text-2xl">
                      <span className="font-bold 2xl:text-2xl">
                        {msg.from}:
                      </span>{" "}
                      {msg.text}
                      <span className="ml-2 text-xs 2xl:text-2xl text-gray-400">
                        {msg.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {selectedDispute.status !== "Resolved" && (
                <button
                  className="bg-[#0096ff] 2xl:text-2xl text-white px-4 py-2 rounded font-semibold hover:bg-[#fa09a7]  duration-280 transition"
                  onClick={() => {
                    // In a real app, update status in backend
                    selectedDispute.status = "Resolved";
                    setSelectedDispute({ ...selectedDispute });
                  }}
                >
                  Mark as Resolved
                </button>
              )}
            </>
          ) : (
            <div className="text-gray-400 2xl:text-2xl text-center mt-20">
              Select a dispute to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDispute;
