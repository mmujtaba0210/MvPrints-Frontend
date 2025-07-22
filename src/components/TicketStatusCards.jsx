import React from "react";
import {
  FiShoppingCart,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
} from "react-icons/fi";
import PropTypes from "prop-types";

// Function to render circular progress (simplified for static display)
const renderCircularProgress = (icon, colorClass) => (
  <div className="relative w-18 h-18">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      {/* Background circle */}
      <circle
        className="text-gray-300 stroke-current"
        strokeWidth="6"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      {/* Progress circle (simplified) */}
      <circle
        className={`${colorClass} stroke-current`}
        strokeWidth="10"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDasharray="150.2"
        strokeDashoffset="50"
      ></circle>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      {icon}
    </div>
  </div>
);

const TicketStatusCards = ({
  totalTickets,
  openTickets,
  resolvedTickets,
  pendingTickets,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Total Tickets Card */}
      <div className="bg-[#f3f0ff] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiShoppingCart className="w-6 h-6 text-gray-600" />,
            "text-gray-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-gray-800">
              {totalTickets}
            </div>
            <div className="text-sm 2xl:text-3xl text-gray-600">
              Total Tickets
            </div>
          </div>
        </div>
        {/* Optional: Add percentage here */}
      </div>

      {/* Open Tickets Card */}
      <div className="bg-[#fffbe6] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiClock className="w-6 h-6 text-yellow-700" />,
            "text-yellow-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-yellow-700">
              {openTickets}
            </div>
            <div className="text-sm 2xl:text-3xl text-gray-600">
              Open Tickets
            </div>
          </div>
        </div>
        {/* Optional: Add percentage here */}
      </div>

      {/* Resolved Tickets Card */}
      <div className="bg-[#e6ffed] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiCheckCircle className="w-6 h-6 text-green-600" />,
            "text-green-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-green-600">
              {resolvedTickets}
            </div>
            <div className="text-sm 2xl:text-3xl text-gray-600">
              Resolved Tickets
            </div>
          </div>
        </div>
        {/* Optional: Add percentage here */}
      </div>

      {/* Pending Tickets Card */}
      <div className="bg-[#ffebee] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiAlertCircle className="w-6 h-6 text-red-500" />,
            "text-red-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-red-500">
              {pendingTickets}
            </div>
            <div className="text-sm 2xl:text-3xl text-gray-600">
              Pending Tickets
            </div>
          </div>
        </div>
        {/* Optional: Add percentage here */}
      </div>
    </div>
  );
};

TicketStatusCards.propTypes = {
  totalTickets: PropTypes.number.isRequired,
  openTickets: PropTypes.number.isRequired,
  resolvedTickets: PropTypes.number.isRequired,
  pendingTickets: PropTypes.number.isRequired,
};

export default TicketStatusCards;
