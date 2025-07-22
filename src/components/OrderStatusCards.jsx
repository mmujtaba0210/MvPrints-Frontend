import React from "react";
import {
  FiShoppingCart,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
  FiRefreshCcw,
  FiXCircle,
  FiRepeat,
  FiSettings,
  FiFileText,
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

const OrderStatusCards = ({
  //   totalOrders,
  pendingOrders,
  processingOrders,
  completedOrders,
  declinedOrders,
  cancelledOrders,
  returnRequestOrders,
  replacementOrders,
  verificationOrders,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
      {/* Total Orders Card */}
      {/* <div className="bg-[#f3f0ff] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiShoppingCart className="w-6 h-6 text-gray-600" />,
            "text-gray-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-gray-800">
              {totalOrders}
            </div>
            <div className="text-sm text-gray-600 2xl:text-3xl">Total Orders</div>
          </div>
        </div>
      </div> */}

      {/* Pending Orders Card */}
      <div className="bg-[#fffbe6] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiClock className="w-6 h-6 text-yellow-700" />,
            "text-yellow-500"
          )}
          <div>
            <div className="text-2xl  2xl:text-3xlfont-bold text-yellow-700">
              {pendingOrders}
            </div>
            <div className="text-sm text-gray-600  2xl:text-3xl">
              Pending Orders
            </div>
          </div>
        </div>
      </div>

      {/* Processing Orders Card */}
      <div className="bg-[#e6f7ff] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiRefreshCcw className="w-6 h-6 text-blue-600" />,
            "text-blue-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-blue-600">
              {processingOrders}
            </div>
            <div className="text-sm text-gray-600 2xl:text-3xl">
              Processing Orders
            </div>
          </div>
        </div>
      </div>

      {/* Completed Orders Card */}
      <div className="bg-[#e6ffed] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiCheckCircle className="w-6 h-6 text-green-600" />,
            "text-green-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-green-600">
              {completedOrders}
            </div>
            <div className="text-sm text-gray-600 2xl:text-3xl">
              Completed Orders
            </div>
          </div>
        </div>
      </div>

      {/* Declined Orders Card */}
      <div className="bg-[#ffe9e6] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiXCircle className="w-6 h-6 text-red-600" />,
            "text-red-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-red-600">
              {declinedOrders}
            </div>
            <div className="text-sm text-gray-600 2xl:text-3xl">
              Declined Orders
            </div>
          </div>
        </div>
      </div>

      {/* Cancelled Orders Card */}
      <div className="bg-[#ffebee] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiAlertCircle className="w-6 h-6 text-red-500" />,
            "text-red-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-red-500">
              {cancelledOrders}
            </div>
            <div className="text-sm text-gray-600 2xl:text-3xl">
              Cancelled Orders
            </div>
          </div>
        </div>
      </div>

      {/* Orders Return Request Card */}
      <div className="bg-[#f3e6ff] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiRepeat className="w-6 h-6 text-purple-600" />,
            "text-purple-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-purple-600">
              {returnRequestOrders}
            </div>
            <div className="text-sm text-gray-600 2xl:text-3xl">
              Return Requests
            </div>
          </div>
        </div>
      </div>

      {/* Orders Replacement Card */}
      <div className="bg-[#e6f0ff] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiSettings className="w-6 h-6 text-indigo-600" />,
            "text-indigo-500"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-indigo-600">
              {replacementOrders}
            </div>
            <div className="text-sm text-gray-600 2xl:text-3xl">
              Order Replacements
            </div>
          </div>
        </div>
      </div>

      {/* Order Verification Card */}
      <div className="bg-[#fffae6] rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {renderCircularProgress(
            <FiFileText className="w-6 h-6 text-yellow-800" />,
            "text-yellow-700"
          )}
          <div>
            <div className="text-2xl font-bold 2xl:text-3xl text-yellow-800">
              {verificationOrders}
            </div>
            <div className="text-sm text-gray-600 2xl:text-3xl">
              Order Verification
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderStatusCards.propTypes = {
  totalOrders: PropTypes.number.isRequired,
  pendingOrders: PropTypes.number.isRequired,
  processingOrders: PropTypes.number.isRequired,
  completedOrders: PropTypes.number.isRequired,
  declinedOrders: PropTypes.number.isRequired,
  cancelledOrders: PropTypes.number.isRequired,
  returnRequestOrders: PropTypes.number.isRequired,
  replacementOrders: PropTypes.number.isRequired,
  verificationOrders: PropTypes.number.isRequired,
};

export default OrderStatusCards;
