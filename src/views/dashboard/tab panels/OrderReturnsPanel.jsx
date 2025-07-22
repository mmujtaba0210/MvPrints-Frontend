import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";

const OrderReturnsPanel = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const quotations = [
    // Example data structure
    {
      orderNo: "ORD-001",
      orderDate: "27-Jan-2025",
      orderTotal: 1500,
      refundTotal: 1500,
      refundStatus: "Pending",
      refundMethod: "Bank Transfer",
      product: {
        name: "Product Name",
        image: "/images/product.png",
      },
    },
  ];

  const statusStyles = {
    Pending: "bg-gray-200 text-gray-500",
    Completed: "bg-green-100 text-green-600",
    Failed: "bg-red-100 text-red-500",
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(quotations.map((_, index) => index));
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
      {/* Order Return Table */}
      <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
        <h2 className="text-[#0096ff] font-bold text-lg py-4 px-4 2xl:text-4xl">
          ORDER RETURNS
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0095ff1a] 2xl:text-3xl text-[#333333] border-t border-[#dad9d9]">
                <th className="py-4 px-3 font-semibold text-left">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer rounded-full"
                    checked={selectedRows.length === quotations.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-4 px-3 font-semibold text-left">Order No</th>
                <th className="py-4 px-3 font-semibold text-left">
                  Order Date
                </th>
                <th className="py-4 px-3 font-semibold text-left">
                  Order Total
                </th>
                <th className="py-4 px-3 font-semibold text-left">
                  Refund Total
                </th>
                <th className="py-4 px-3 font-semibold text-left">
                  Refund Status
                </th>
                <th className="py-4 px-3 font-semibold text-left">
                  Refund Method
                </th>
                <th className="py-4 px-3 font-semibold text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {quotations.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="text-center 2xl:text-xl py-6 text-gray-500"
                  >
                    No data available in table
                  </td>
                </tr>
              ) : (
                quotations.map((q, idx) => (
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
                    <td className="py-3 px-3">{q.orderNo}</td>
                    <td className="py-3 px-3">{q.orderDate}</td>
                    <td className="py-3 px-3">${q.orderTotal}</td>
                    <td className="py-3 px-3">${q.refundTotal}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-4 py-2 rounded 2xl:text-2xl font-semibold text-sm ${
                          statusStyles[q.refundStatus] ||
                          "bg-gray-100  text-gray-600"
                        }`}
                      >
                        {q.refundStatus}
                      </span>
                    </td>
                    <td className="py-3 px-3">{q.refundMethod}</td>
                    <td className="py-3 px-3">
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
        <div className="flex items-center justify-between mt-2 text-sm p-4">
          <div>
            {selectedRows.length > 0 ? (
              <span className="text-[#0096ff] 2xl:text-2xl">
                {selectedRows.length} row(s) selected
              </span>
            ) : (
              <span className="2xl:text-2xl">Showing 1 to 1 of 1 entries</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              className="border border-[#bfb7b7] hover:bg-[#0096ff] hover:text-white 2xl:text-2xl rounded px-2 py-1 text-gray-500"
              disabled
            >
              Previous
            </button>
            <button className="border 2xl:text-2xl rounded px-2 py-1 bg-[#0096ff] text-white">
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
  );
};

export default OrderReturnsPanel;
