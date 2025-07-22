import TicketCard from "@/components/TicketCard";
import React, { useState } from "react";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import TicketStatusCards from "@/components/TicketStatusCards";

const mockDisputes = [
  {
    id: 1,
    subject: "My Account isn't working",
    status: "Open",
    date: "2024-06-01",
    details: "My Account isn't working, It doesn't let me login",
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
    subject: "Payment declined",
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

const SupportTicket = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedDispute, setSelectedDispute] = useState(mockDisputes[0]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [withdrawMethod, setWithdrawMethod] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [pin, setPin] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [address, setAddress] = useState("");
  const [routing, setRouting] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
    setWithdrawMethod("");
    setWithdrawAmount("");
    setPin("");
    setAccountEmail("");
    setAccountHolder("");
    setBankAccount("");
    setAddress("");
    setRouting("");
  };
  const handleCloseModal = () => setShowModal(false);

  const isEmailMethod = ["Paypal", "Skrill", "Payoneer"].includes(
    withdrawMethod
  );
  const isBankMethod = withdrawMethod === "Bank";

  const filteredDisputes =
    selectedTab === "All"
      ? mockDisputes
      : mockDisputes.filter((d) => d.status === selectedTab);

  // Calculate ticket counts
  const totalTickets = mockDisputes.length;
  const openTickets = mockDisputes.filter((d) => d.status === "Open").length;
  const resolvedTickets = mockDisputes.filter(
    (d) => d.status === "Resolved"
  ).length;
  const pendingTickets = mockDisputes.filter(
    (d) => d.status !== "Resolved" && d.status !== "Open"
  ).length;

  return (
    <div>
      {/* Status Cards Component */}
      <TicketStatusCards
        totalTickets={totalTickets}
        openTickets={openTickets}
        resolvedTickets={resolvedTickets}
        pendingTickets={pendingTickets}
      />
      <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] p-4 h-[90vh] flex flex-col">
        <div>
          <h2 className="text-[#0096ff] 2xl:text-4xl font-bold text-lg mb-2">
            SUPPORT TICKETS
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {mockDisputes.map((data, index) => (
            <div key={index}>
              <TicketCard
                subject={data.subject}
                date={data.date}
                status={data.status}
                id={data.id}
                messages={data.messages}
                onResolve={(id) => {
                  const updatedDisputes = mockDisputes.map((d) =>
                    d.id === id ? { ...d, status: "Resolved" } : d
                  );
                  console.log("Resolved ticket:", id);
                }}
                onReply={(id, message) => {
                  const newMessage = {
                    from: "Support",
                    text: message,
                    date: new Date().toISOString().split("T")[0],
                  };
                  const updatedDisputes = mockDisputes.map((d) =>
                    d.id === id
                      ? { ...d, messages: [...d.messages, newMessage] }
                      : d
                  );
                  console.log("New reply for ticket:", id, message);
                }}
              />
            </div>
          ))}
        </div>

        {/* <div className="flex justify-between">
        <h2 className="text-[#0096ff] font-bold text-lg mb-2">
          SUPPORT TICKETS
        </h2>
        <button
          className="flex items-center gap-2 bg-[#0096ff] text-white text-sm font-semibold px-3 py-2 rounded shadow cursor-pointer hover:bg-[#fa09a7] transition-all duration-280"
          onClick={handleOpenModal}
        >
          <FiPlus color="white" fill="white" /> ADD NEW
        </button>
      </div>
      <div className="flex border-b border-[#e5e7eb] mb-2">
        {statusTabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-semibold focus:outline-none ${
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
        {/* <div className="w-1/3 border-r border-[#e5e7eb] bg-[#0095ff09] overflow-y-auto">
          {filteredDisputes.length === 0 ? (
            <div className="text-gray-400 p-8 text-center">
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
                <div className="font-semibold text-[#333]">{d.subject}</div>
                <div className="text-xs text-gray-500">{d.date}</div>
                <span
                  className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold ${
                    d.status === "Resolved"
                      ? "bg-green-100 text-green-600"
                      : selectedDispute.status === "Open"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {d.status}
                </span>
              </div>
            ))}
        </div>
        {/* Dispute Details */}
        {/* <div className="flex-1 p-6 overflow-y-auto"> 
          {selectedDispute ? (
            <>
              <div className="mb-2">
                <div className="text-lg font-bold text-[#0096ff]">
                  {selectedDispute.subject}
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {selectedDispute.date}
                </div>
                <span
                  className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
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
              <div className="mb-4 text-gray-700">
                {selectedDispute.details}
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">Messages:</div>
                <div className="space-y-2">
                  {selectedDispute.messages.map((msg, i) => (
                    <div key={i} className="text-sm">
                      <span className="font-bold">{msg.from}:</span> {msg.text}
                      <span className="ml-2 text-xs text-gray-400">
                        {msg.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {selectedDispute.status !== "Resolved" && ( // Only show button if not resolved
                <button
                  className="bg-[#0096ff] text-white px-4 py-2 rounded font-semibold hover:bg-[#fa09a7] transition-all duration-280"
                  onClick={() => {
                    // In a real app, update status in backend
                    selectedDispute.status = "Resolved"; // This only updates local state, not mockDisputes
                    setSelectedDispute({ ...selectedDispute }); // Trigger re-render
                  }}
                >
                  Mark as Resolved
                </button>
              )}
            </>
          ) : (
            <div className="text-gray-400 text-center mt-20">
              Select a dispute to view details.
            </div>
          )}
        </div>
      </div> */}

        {/* Add new dialog */}

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-6 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-5xl relative">
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b mb-4 pb-2 border-gray-300">
                <h2 className="text-[#0096ff] font-bold text-lg">
                  Support Ticket
                </h2>
                <button
                  className="flex items-center justify-center w-8 h-8 text-xl bg-[#0096ff] text-white rounded-full shadow hover:bg-[#fa09a7] transition-all duration-300"
                  onClick={handleCloseModal}
                  aria-label="Close Modal"
                >
                  &times;
                </button>
              </div>

              {/* Modal Form */}
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCloseModal();
                }}
              >
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  placeholder="Name *"
                  required
                />
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  placeholder="Order Number *"
                  required
                />
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  placeholder="Subject *"
                  required
                />
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm min-h-[100px] resize-none"
                  placeholder="Your Message *"
                  required
                />

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    className="w-full bg-[#0096ff] text-white px-6 py-2 font-semibold rounded shadow hover:bg-[#fa09a7] transition-all duration-300"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportTicket;
