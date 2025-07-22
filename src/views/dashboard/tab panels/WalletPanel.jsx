import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { FiArrowLeft, FiPlus, FiTrash } from "react-icons/fi";

const WalletPanel = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const transactions = [
    {
      orderNumber: "231023",
      transactionDate: "Nov-15-2020",
      amount: "+$500",
      paymentMethod: "Deposit",
    },
    {
      orderNumber: "231023",
      transactionDate: "Nov-15-2020",
      amount: "+$500",
      paymentMethod: "Deposit",
    },
    {
      orderNumber: "342732",
      transactionDate: "Nov-15-2020",
      amount: "+$155",
      paymentMethod: "Credit",
    },
    {
      orderNumber: "245030",
      transactionDate: "Nov-15-2020",
      amount: "-$51.98",
      paymentMethod: "Payment Via Wallet",
    },
    {
      orderNumber: "245790",
      transactionDate: "Nov-15-2020",
      amount: "-$41.49",
      paymentMethod: "Payment Via Wallet",
    },
  ];

  const deposits = [
    {
      depositDate: "Jan-24-2022",
      amount: "$100",
      method: "Debit/Credit Card",
      status: "Completed",
    },
    {
      depositDate: "Feb-14-2023",
      amount: "$10",
      method: "Debit/Credit Card",
      status: "Completed",
    },
    {
      depositDate: "May-21-2022",
      amount: "$100",
      method: "Debit/Credit Card",
      status: "Completed",
    },
    {
      depositDate: "Dec-11-2022",
      amount: "$1000",
      method: "Debit/Credit Card",
      status: "Completed",
    },
  ];

  const statusStyles = {
    Completed: "bg-green-100 text-green-600",
    Pending: "bg-gray-200 text-gray-500",
    Failed: "bg-red-100 text-red-500",
  };

  const cashData = {
    user: {
      name: "Andri Jokall",
      avatar: "/images/dashboard/infobg.jpg",
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

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(deposits.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  // Modal and form state
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
    setPaymentMethod("");
    setAmount("");
    setCard("");
    setCvv("");
    setMonth("");
    setYear("");
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Mecarvi Cash */}
      <div className="col-span-1 flex-1 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] min-w-[350px] text-[#333333] relative">
        <div className="flex flex-col gap-5 rounded-xl w-full justify-center items-center bg-gradient-to-r from-[#0095ff] to-[#000B5B] p-6">
          <div className="flex flex-col justify-between items-center gap-2 mb-2">
            <button className=" text-white  px-3 py-1 rounded font-bold text-3xl">
              Mecarvi Cash
            </button>
            <button className="text-white bg-white/20 px-4 py-1 rounded-xl font-bold text-3xl">
              ${cashData.balance}
            </button>
          </div>
        </div>
        <div className="flex justify-around items-center gap-4 p-4">
          <CustomButton
            text={"+ DEPOSIT"}
            width={"50%"}
            className="2xl:text-2xl"
            onClick={handleOpenModal}
          />
          <CustomButton
            text={"REDEEM POINTS"}
            width={"50%"}
            className="2xl:text-2xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 p-4">
          <div className="flex w-full justify-around gap-2 bg-white py-2 px-6 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
            <div className="text-md 2xl:text-2xl text-[#0096ff] font-bold">
              Affiliate Bonus
            </div>
            <div className="font-bold bg-[#ebedf2] text-[#515365] text-center py-1 px-[13%] 2xl:text-2xl rounded-md">
              ${cashData.affiliateBonus}
            </div>
          </div>
          <div className="flex gap-2 justify-around bg-white py-3 w-full px-6 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
            <div className="text-md 2xl:text-2xl text-[#0096ff] font-bold">
              Loyalty Points
            </div>
            <div className="font-bold bg-[#ebedf2] text-[#515365] text-center py-1 px-[18%] rounded-md 2xl:text-2xl">
              ${cashData.redeemPoints}
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Table */}
      <div className="col-span-2">
        <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
          <h2 className="text-[#0096ff] 2xl:text-4xl font-bold text-lg py-4 px-4">
            MECARVI TRANSACTIONS
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0095ff1a] 2xl:text-2xl text-[#333333] border-t border-[#dad9d9]">
                  <th className="py-4 px-3 font-semibold text-left">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer rounded-full"
                      checked={selectedRows.length === transactions.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="py-4 px-3 font-semibold text-left">
                    Order No
                  </th>
                  <th className="py-4 px-3 font-semibold text-left">
                    Transaction Date
                  </th>
                  <th className="py-4 px-3 font-semibold text-left">Amount</th>
                  <th className="py-4 px-3 font-semibold text-left">
                    Payment Method
                  </th>
                  <th className="py-4 px-3 font-semibold text-left">Options</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center 2xl:text-2xl py-6 text-gray-500"
                    >
                      No data available in table
                    </td>
                  </tr>
                ) : (
                  transactions.map((t, idx) => (
                    <tr
                      key={idx}
                      className="border-y 2xl:text-2xl border-[#dad9d9]"
                    >
                      <td className="py-2 pl-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer rounded-full"
                          checked={selectedRows.includes(idx)}
                          onChange={() => handleSelectRow(idx)}
                        />
                      </td>
                      <td className="py-3 px-3">{t.orderNumber}</td>
                      <td className="py-3 px-3">{t.transactionDate}</td>
                      <td className="py-3 px-3">
                        <span
                          className={`font-semibold ${
                            t.amount.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {t.amount}
                        </span>
                      </td>
                      <td className="py-3 px-3">{t.paymentMethod}</td>
                      <td className="py-3 px-3 flex gap-2">
                        <button className="bg-[#ff0800] text-white px-3 py-2 rounded shadow cursor-pointer hover:bg-[#ff0800c7]">
                          <FiTrash className="w-5 h-5 2xl:size-[2rem]" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center 2xl:text-2xl justify-between mt-2 text-sm p-4">
            <div>
              {selectedRows.length > 0 ? (
                <span className="text-[#0096ff]">
                  {selectedRows.length} row(s) selected
                </span>
              ) : (
                <span className="2xl:text-2xl">
                  Showing 1 to {transactions.length} of {transactions.length}{" "}
                  entries
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <button
                className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white 2xl:text-2xl rounded px-2 py-1 text-gray-500"
                disabled
              >
                Previous
              </button>
              <button className="border rounded px-2 py-1 bg-[#0096ff] text-white 2xl:text-2xl">
                1
              </button>
              <button
                className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white 2xl:text-2xl rounded px-2 py-1 text-gray-500"
                disabled
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000034] bg-opacity-30">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-4xl relative">
            <div className="flex justify-between items-center border-b mb-4 pb-2 border-[#bfb7b7]">
              <h2 className="text-[#0096ff] font-bold text-lg">DEPOSIT</h2>
              <button
                className="flex items-center gap-1 bg-[#0096ff] text-white px-3 py-1 rounded shadow hover:bg-[#0095ffc4]"
                onClick={handleCloseModal}
              >
                <FiArrowLeft /> BACK
              </button>
            </div>
            <div className="mb-4 font-semibold text-lg">
              Current Balance $19266
            </div>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-6 mb-4">
                <div className="flex-1">
                  <label className="font-semibold block mb-1">
                    Select Payment Method *
                  </label>
                  <select
                    className="w-full border border-[#bfb7b7] rounded px-3 py-2 mb-2"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Debit/Credit Card">Debit/Credit Card</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="font-semibold block mb-1">Amount *</label>
                  <div className="flex">
                    <input
                      className="w-full border border-[#bfb7b7] rounded-l px-3 py-1.5"
                      placeholder="Deposit Amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <span className="bg-[#e9ecef] border border-[#bfb7b7] border-l-0 rounded-r px-4 flex items-center">
                      USD
                    </span>
                  </div>
                </div>
              </div>
              {paymentMethod === "Debit/Credit Card" && (
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex-1 min-w-[180px]">
                    <label className="font-semibold block mb-1">Card *</label>
                    <input
                      className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                      placeholder="Card"
                      value={card}
                      onChange={(e) => setCard(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <label className="font-semibold block mb-1">Cvv *</label>
                    <input
                      className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                      placeholder="Cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <label className="font-semibold block mb-1">Month *</label>
                    <input
                      className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                      placeholder="Month"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <label className="font-semibold block mb-1">Year *</label>
                    <input
                      className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                      placeholder="Year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>
              )}
              <button
                className="bg-[#0096ff] text-white px-6 py-2 rounded shadow hover:bg-[#0095ffc4] mt-2"
                type="submit"
                onClick={handleCloseModal}
              >
                DEPOSIT
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletPanel;
