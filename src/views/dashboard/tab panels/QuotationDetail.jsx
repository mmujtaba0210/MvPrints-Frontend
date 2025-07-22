import Image from "next/image";
import React from "react";
import { FiArrowLeft, FiPrinter } from "react-icons/fi";

const QuotationDetailPage = () => {
  return (
    <div className="min-h-screen p-4 pt-0 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#0096ff]"></h1> {/* empty, was the header first */}
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center gap-2 bg-[#0096ff] text-white hover:bg-[#fa09a7] rounded py-2 px-4 font-semibold transition-all cursor-pointer"
            onClick={() => window.history.back()}
          >
            <FiArrowLeft /> Back
          </button>
          <button className="flex items-center gap-2 bg-gray-600 text-white hover:bg-[#fa09a7] rounded py-2 px-4 font-semibold transition-all cursor-pointer">
            <FiPrinter /> Print
          </button>
        </div>
      </div>

      {/* Quotation Content */}
      <div
        id="quotation-content"
        className="bg-white rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.35)] p-6 relative"
      >
        {/* Blue Header Section */}
        <div className="bg-gradient-to-r from-[#0095ff] to-[#000B5B] text-white p-8 rounded-t-lg flex justify-between relative overflow-hidden">
          <div className=" text-3xl lg:text-[90px] font-bold opacity-10 select-none pointer-events-none">
            Quotation
          </div>
          <div className="text-right z-10">
            {/* Company Info */}
            <Image
              src={"/images/logo.png"}
              width={220}
              height={120}
              alt="Mecarvi Prints"
            />
            <div className="text-sm mt-2">
              335 Upper Riverdale Road<br/>
              Suite B1<br/>
              Jonesboro, GA 30236<br/>
              Phone: 877-854-5232<br/>
              Email: billing@mecarviprints.com<br/>
              Website: www.mecarviprints.com
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-8 pt-10 flex flex-col md:flex-row justify-between gap-8 relative">
          {/* Quotation To */}
          <div className="md:w-1/3 bg-gray-200 p-4 rounded-md shadow-inner">
            <h3 className="font-bold mb-2 text-gray-700">Quotation To:</h3>
            <p className="text-gray-600 leading-relaxed">
              Chris Hodnicak
              <br />
              6000 North Terminal Pkwy
              <br />
              Atrium Suite 4000
              <br />
              Atlanta, GA 30320
              <br />
              chris.hodnicak@atl.com
            </p>
          </div>

          {/* Quotation Number and Date */}
          <div className="md:text-right md:flex md:flex-col md:justify-center text-gray-700">
            <p>
              <span className="font-bold">Quotation No:</span> #E-0002
            </p>
            <p>
              <span className="font-bold">Quotation Date:</span> May 14 2024
            </p>
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0096ff] text-white text-left">
              <th className="p-3">Item</th>
              <th className="p-3">Description</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-3">Event Tickets</td>
              <td className="p-3">Double Sided Printed</td>
              <td className="p-3">14</td>
              <td className="p-3">$46.99</td>
              <td className="p-3 text-right">$657.86</td>
            </tr>
            {/* Add more items here */}
          </tbody>
        </table>

        {/* Summary */}
        <div className="flex justify-end p-8 pt-0">
          <div className="w-full max-w-sm">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-gray-700">Sub Total</span>
              <span className="text-gray-700">$657.86</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold text-gray-700">Delivery</span>
              <span className="text-gray-700">$25.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold text-gray-700">Tax</span>
              <span className="text-gray-700">$0.00</span>
            </div>
            <div className="flex justify-between border-t-2 border-gray-300 pt-2">
              <span className="text-xl font-bold text-gray-800">Total</span>
              <span className="text-xl font-bold text-gray-800">$682.86</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationDetailPage;
