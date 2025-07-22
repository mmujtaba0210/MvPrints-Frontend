import React, { useState } from 'react'
import { FiArrowLeft, FiPlus } from 'react-icons/fi';

const AffiliateWithdrawalPanel = () => {
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

    const isEmailMethod = ["Paypal", "Skrill", "Payoneer"].includes(withdrawMethod);
    const isBankMethod = withdrawMethod === "Bank";

    const deposits = [
        {
          withdrawalDate: "Jan-24-2022",
          withdrawalAmount: "$323",
          withdrawalFees: "$4.22",
          payoutAmount: "$318.78",
          paymentMethod: "Skrill",
          status: "Completed",
        },
        {
          withdrawalDate: "Jan-31-2022",
          withdrawalAmount: "$100",
          withdrawalFees: "$1.99",
          payoutAmount: "$98.01",
          paymentMethod: "Paypal",
          status: "Completed",
        },
    ];

    const statusStyles = {
        Completed: "bg-green-100 text-green-600",
        Pending: "bg-gray-200 text-gray-500",
        Failed: "bg-red-100 text-red-500",
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
            setSelectedRows(selectedRows.filter(i => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    return (
        <div>
            <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
                <div className="flex justify-between items-center px-4 py-4">
                    <h2 className="text-[#0096ff] font-bold text-lg">
                        AFFILIATE WITHDRAWAL
                    </h2>
                    <button
                        className="flex items-center gap-2 bg-[#0096ff] text-white text-sm font-semibold px-3 py-2 rounded shadow cursor-pointer hover:bg-[#fa09a7] transition-all duration-280"
                        onClick={handleOpenModal}
                    >
                        <FiPlus color='white' fill='white' /> WITHDRAW
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-[#0095ff1a] text-[#333333] border-t border-[#dad9d9]">
                                <th className="py-4 px-3 font-semibold text-left">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 cursor-pointer rounded-full"
                                        checked={selectedRows.length === deposits.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="py-4 px-3 font-semibold text-left">Withdrawal Date</th>
                                <th className="py-4 px-3 font-semibold text-left">Withdrawal Amount</th>
                                <th className="py-4 px-3 font-semibold text-left">Withdrawal Fees</th>
                                <th className="py-4 px-3 font-semibold text-left">Payout Amount</th>
                                <th className="py-4 px-3 font-semibold text-left">Payment Method</th>
                                <th className="py-4 px-3 font-semibold text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deposits.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="text-center py-6 text-gray-500">
                                        No data available in table
                                    </td>
                                </tr>
                            ) : (
                                deposits.map((q, idx) => (
                                    <tr key={idx} className="border-y border-[#dad9d9]">
                                        <td className="py-2 pl-3">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 cursor-pointer rounded-full"
                                                checked={selectedRows.includes(idx)}
                                                onChange={() => handleSelectRow(idx)}
                                            />
                                        </td>
                                        <td className="py-3 px-3">{q.withdrawalDate}</td>
                                        <td className="py-3 px-3">
                                            <span className="font-semibold text-red-600">
                                                {q.withdrawalAmount}
                                            </span>
                                        </td>
                                        <td className="py-3 px-3">
                                            <span className="font-semibold text-red-600">
                                                {q.withdrawalFees}
                                            </span>
                                        </td>
                                        <td className="py-3 px-3">
                                            <span className="font-semibold text-green-600">
                                                {q.payoutAmount}
                                            </span>
                                        </td>
                                        <td className="py-3 px-3">{q.paymentMethod}</td>
                                        <td className="py-3 px-3">
                                            <span className={`px-4 py-2 rounded font-semibold text-sm ${statusStyles[q.status] || "bg-gray-100 text-gray-600"}`}>
                                                {q.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between mt-2 text-sm p-4">
                    <div>
                        {selectedRows.length > 0 ? (
                            <span className="text-[#0096ff]">{selectedRows.length} row(s) selected</span>
                        ) : (
                            <span>Showing 1 to {deposits.length} of {deposits.length} entries</span>
                        )}
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded px-2 py-1 text-gray-500" disabled>
                            Previous
                        </button>
                        <button className="border rounded px-2 py-1 bg-[#0096ff] text-white">1</button>
                        <button className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded px-2 py-1 text-gray-500" disabled>
                            Next
                        </button>
                    </div>
                </div>
            </div>
            {/* Withdraw Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000034] bg-opacity-30">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-5xl relative">
            <div className="flex justify-between items-center border-b mb-4 pb-2 border-[#bfb7b7]">
              <h2 className="text-[#0096ff] font-bold text-lg">WITHDRAWAL</h2>
              <button
                className="flex items-center gap-1 bg-[#0096ff] text-white px-3 py-1 rounded shadow hover:bg-[#0095ffc4]"
                onClick={handleCloseModal}
              >
                <FiArrowLeft /> BACK
              </button>
            </div>
            <div className="mb-4 font-semibold text-lg">
              Current Balance $20798.37
            </div>
            <form className="w-full" onSubmit={e => { e.preventDefault(); handleCloseModal(); }}>
              <div className="flex flex-col md:flex-row gap-6 mb-4">
                <div className="flex-1">
                  <label className="font-semibold block mb-1">Withdraw Method *</label>
                  <select
                    className="w-full border border-[#bfb7b7] rounded px-3 py-2 mb-2"
                    value={withdrawMethod}
                    onChange={e => setWithdrawMethod(e.target.value)}
                  >
                    <option value="">Select Withdraw Method</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Skrill">Skrill</option>
                    <option value="Payoneer">Payoneer</option>
                    <option value="Bank">Bank</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="font-semibold block mb-1">Withdraw Amount *</label>
                  <input
                    className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                    placeholder="Withdraw Amount"
                    value={withdrawAmount}
                    onChange={e => setWithdrawAmount(e.target.value)}
                  />
                </div>
              </div>
              {isEmailMethod && (
                <div className="mb-4">
                  <label className="font-semibold block mb-1">Enter Account Email *</label>
                  <input
                    className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                    placeholder="Enter Account Email"
                    value={accountEmail}
                    onChange={e => setAccountEmail(e.target.value)}
                  />
                </div>
              )}
              {isBankMethod && (
                <div className="flex flex-col md:flex-row gap-6 mb-4">
                  <div className="flex-1">
                    <label className="font-semibold block mb-1">Account Holder Name *</label>
                    <input
                      className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                      placeholder="Account Holder Name"
                      value={accountHolder}
                      onChange={e => setAccountHolder(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-semibold block mb-1">Address *</label>
                    <input
                      className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                      placeholder="Address"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              )}
              {isBankMethod && (
                <div className="flex flex-col md:flex-row gap-6 mb-4">
                  <div className="flex-1">
                    <label className="font-semibold block mb-1">Bank Account Number *</label>
                    <input
                      className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                      placeholder="Bank Account Number"
                      value={bankAccount}
                      onChange={e => setBankAccount(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-semibold block mb-1">Routing Number/Swift Code *</label>
                    <input
                      className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                      placeholder="Routing Number/Swift Code"
                      value={routing}
                      onChange={e => setRouting(e.target.value)}
                    />
                  </div>
                </div>
              )}
              <div className="mb-4">
                <label className="font-semibold block mb-1">Enter a Pin</label>
                <input
                  className="w-full border border-[#bfb7b7] rounded px-3 py-2"
                  placeholder="Enter a Pin"
                  value={pin}
                  onChange={e => setPin(e.target.value)}
                />
              </div>
              <div className="font-semibold mb-4">
                Withdraw Fee <span className="text-black">$0.99</span> and <span className="text-black">1%</span> will deduct from your account.
              </div>
              <button
                className="bg-[#0096ff] text-white px-6 py-2 font-semibold text-sm rounded shadow hover:bg-[#0095ffc4] mt-2"
                type="submit"
              >
                WITHDRAW
              </button>
            </form>
          </div>
        </div>
      )}
        </div>
    )
}

export default AffiliateWithdrawalPanel