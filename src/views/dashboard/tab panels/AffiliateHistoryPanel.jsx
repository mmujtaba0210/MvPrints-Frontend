import React, { useState } from "react";

const AffiliateHistoryPanel = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const affiliate = [
    {
      product: {
        id: "2",
        name: "Business Cards",
        image: "/images/businessCard.png", // Replace with actual image if available
      },
      customer: "John Doe",
      affiliateEarning: "$50.00",
      date: "Jan-24-2024",
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
      setSelectedRows(affiliate.map((_, index) => index));
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

  return (
    <div>
      <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
        <h2 className="text-[#0096ff] font-bold text-lg py-4 px-4">
          AFFILIATE EARNING HISTORY
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0095ff1a] text-[#333333] border-t border-[#dad9d9]">
                <th className="py-4 px-3 font-semibold text-left">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer rounded-full"
                    checked={selectedRows.length === affiliate.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-4 px-3 font-semibold text-left">Product</th>
                <th className="py-4 px-3 font-semibold text-left">Customer</th>
                <th className="py-4 px-3 font-semibold text-left">
                  Affiliate Earning
                </th>
                <th className="py-4 px-3 font-semibold text-left">Date</th>
                <th className="py-4 px-3 font-semibold text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {affiliate.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                affiliate.map((a, idx) => (
                  <tr key={idx} className="border-y border-[#dad9d9]">
                    <td className="py-2 pl-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer rounded-full"
                        checked={selectedRows.includes(idx)}
                        onChange={() => handleSelectRow(idx)}
                      />
                    </td>
                    <td
                      className="py-0 px-3 flex items-center gap-4 w-36 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleProductClick(a.product.id)}
                    >
                      <span className="font-semibold">{a.product.name}</span>
                      <img
                        src={a.product.image}
                        alt="product"
                        className="mt-1 w-20 h-20"
                      />
                    </td>
                    <td className="py-3 px-3">{a.customer}</td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-green-600">
                        {a.affiliateEarning}
                      </span>
                    </td>
                    <td className="py-3 px-3">{a.date}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-4 py-2 rounded font-semibold text-sm ${
                          statusStyles[a.status] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {a.status}
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
              <span className="text-[#0096ff]">
                {selectedRows.length} row(s) selected
              </span>
            ) : (
              <span>
                Showing 1 to {affiliate.length} of {affiliate.length} entries
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded px-2 py-1 text-gray-500"
              disabled
            >
              Previous
            </button>
            <button className="border rounded px-2 py-1 bg-[#0096ff] text-white">
              1
            </button>
            <button
              className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white rounded px-2 py-1 text-gray-500"
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

export default AffiliateHistoryPanel;
