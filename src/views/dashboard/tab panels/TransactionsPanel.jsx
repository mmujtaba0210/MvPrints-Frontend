import React, { useState } from "react";
import { FiEye, FiTrash } from "react-icons/fi";

const TransactionsPanel = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const transactions = [
    {
        orderNumber: '231023',
        transactionDate: 'Nov-15-2020',
        amount: '+$500',
        paymentMethod: 'Deposit'
    },
    {
        orderNumber: '231023',
        transactionDate: 'Nov-15-2020',
        amount: '+$500',
        paymentMethod: 'Deposit'
    },
    {
        orderNumber: '342732',
        transactionDate: 'Nov-15-2020',
        amount: '+$155',
        paymentMethod: 'Credit'
    },
    {
        orderNumber: '245030',
        transactionDate: 'Nov-15-2020',
        amount: '-$51.98',
        paymentMethod: 'Payment Via Wallet'
    },
    {
        orderNumber: '245790',
        transactionDate: 'Nov-15-2020',
        amount: '-$41.49',
        paymentMethod: 'Payment Via Wallet'
    },
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(transactions.map((_, index) => index));
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
        <h2 className="text-[#0096ff] font-bold text-lg py-4 px-4">
          DEPOSIT TRANSACTIONS
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0095ff1a] text-[#333333] border-t border-[#dad9d9]">
                <th className="py-4 px-3 font-semibold text-left">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer rounded-full"
                    checked={selectedRows.length === transactions.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-4 px-3 font-semibold text-left">Order No</th>
                <th className="py-4 px-3 font-semibold text-left">Transaction Date</th>
                <th className="py-4 px-3 font-semibold text-left">Amount</th>
                <th className="py-4 px-3 font-semibold text-left">Payment Method</th>
                <th className="py-4 px-3 font-semibold text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                transactions.map((t, idx) => (
                  <tr key={idx} className="border-y border-[#dad9d9]">
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
                      <span className={`font-semibold ${t.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {t.amount}
                      </span>
                    </td>
                    <td className="py-3 px-3">{t.paymentMethod}</td>
                    <td className="py-3 px-3 flex gap-2">
                      <button className="bg-[#ff0800] text-white px-3 py-2 rounded shadow cursor-pointer hover:bg-[#ff0800c7]">
                      <FiTrash className='w-5 h-5' />
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
              <span className="text-[#0096ff]">{selectedRows.length} row(s) selected</span>
            ) : (
              <span>Showing 1 to {transactions.length} of {transactions.length} entries</span>
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
    </div>
  );
};

export default TransactionsPanel;
