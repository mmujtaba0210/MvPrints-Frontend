import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { FiArrowDownCircle, FiFlag } from "react-icons/fi";
import OrderStatusCards from "@/components/OrderStatusCards";

const mockOrders = [
  {
    orderDate: "Jan 3, 2025",
    orderTotal: 107.61,
    shipTo: "Randell Roberts",
    address: "4093 sharpstone bend, New Orleans, LA",
    orderNumber: "31735914015",
    status: "Cancelled",
    paymentMethod: "Credit Card xxxx1234",
    product: {
      image: "/images/tickets.jpg",
      name: "Event Tickets",
      returnsEligible: false,
    },
    actions: ["buyAgain", "report"],
  },
  {
    orderDate: "Jan 3, 2025",
    orderTotal: 107.61,
    shipTo: "Randell Roberts",
    address: "401 Shade Tree Drive, Stockbridge, GA",
    orderNumber: "31735892526",
    status: "Pending",
    paymentMethod: "PayPal xxxx123",
    product: {
      image: "/images/tickets.jpg",
      name: "Event Tickets",
      returnsEligible: false,
    },
    actions: ["cancel", "report", "review", "buyAgain"],
  },
  {
    orderDate: "Jan 4, 2025",
    orderTotal: 250.0,
    shipTo: "John Doe",
    address: "123 Main St, Anytown, CA",
    orderNumber: "31735914016",
    status: "Processing",
    paymentMethod: "Credit Card xxxx5678",
    product: {
      image: "/images/product2.jpg",
      name: "Custom T-Shirts",
      returnsEligible: true,
    },
    actions: ["report"],
  },
  {
    orderDate: "Jan 5, 2025",
    orderTotal: 75.5,
    shipTo: "Jane Smith",
    address: "456 Oak Ave, Villagetown, NY",
    orderNumber: "31735914017",
    status: "Completed",
    paymentMethod: "PayPal xxxx456",
    product: {
      image: "/images/product3.jpg",
      name: "Business Cards",
      returnsEligible: false,
    },
    actions: ["report", "review", "buyAgain"],
  },
  {
    orderDate: "Jan 6, 2025",
    orderTotal: 120.0,
    shipTo: "Peter Jones",
    address: "789 Pine Ln, Hamletville, TX",
    orderNumber: "31735914018",
    status: "Declined",
    paymentMethod: "Credit Card xxxx9012",
    product: {
      image: "/images/product4.jpg",
      name: "Flyers",
      returnsEligible: false,
    },
    actions: ["report"],
  },
  {
    orderDate: "Jan 7, 2025",
    orderTotal: 150.0,
    shipTo: "Mary Williams",
    address: "101 Elm St, Townsville, IL",
    orderNumber: "31735914019",
    status: "Orders return request",
    paymentMethod: "Credit Card xxxx3456",
    product: {
      image: "/images/product5.jpg",
      name: "Banners",
      returnsEligible: true,
    },
    actions: ["report"],
  },
  {
    orderDate: "Jan 8, 2025",
    orderTotal: 200.0,
    shipTo: "David Brown",
    address: "222 Oak Rd, Cityburg, FL",
    orderNumber: "31735914020",
    status: "Orders replacement",
    paymentMethod: "PayPal xxxx789",
    product: {
      image: "/images/product6.jpg",
      name: "Posters",
      returnsEligible: false,
    },
    actions: ["report"],
  },
  {
    orderDate: "Jan 9, 2025",
    orderTotal: 50.0,
    shipTo: "Sarah Green",
    address: "333 Pine Ave, Boroughville, WA",
    orderNumber: "31735914021",
    status: "Order verification",
    paymentMethod: "Credit Card xxxx1122",
    product: {
      image: "/images/product7.jpg",
      name: "Stickers",
      returnsEligible: false,
    },
    actions: ["report"],
  },
];

const statusColor = (status) => {
  if (status === "Cancelled") return "bg-red-100 text-red-500";
  if (status === "Pending") return "bg-gray-200 text-gray-500";
  if (status === "Declined") return "bg-orange-100 text-orange-500";
  if (status === "Processing") return "bg-blue-100 text-blue-500";
  if (status === "Orders return request")
    return "bg-purple-100 text-purple-500";
  if (status === "Orders replacement") return "bg-indigo-100 text-indigo-500";
  if (status === "Order verification") return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-600"; // Completed and others default to green
};

const OrderCard = ({ order }) => (
  <div className="bg-white rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] p-6 mb-6 border border-[#e5e7eb]">
    {/* Header Section */}
    <div className="flex 2xl:text-2xl flex-wrap justify-between items-center border-b pb-2 mb-4">
      <div className="flex flex-col gap-1 min-w-[180px]">
        <span className="text-xs font-bold text-[#333333] 2xl:text-3xl">
          ORDER DATE
        </span>
        <span className="font-semibold">{order.orderDate}</span>
      </div>
      <div className="flex flex-col gap-1 min-w-[180px]">
        <span className="text-xs font-bold text-[#333333] 2xl:text-3xl">
          ORDER TOTAL
        </span>
        <span className="font-semibold">${order.orderTotal.toFixed(2)}</span>
      </div>
      <div className="flex flex-col gap-1 min-w-[180px]">
        <span className="text-xs font-bold text-[#333333] 2xl:text-3xl">
          Payment Method
        </span>
        <span className="font-semibold">{order.paymentMethod}</span>
      </div>
      <div className="flex flex-col gap-1 min-w-[220px] text-right">
        <span className="text-xs 2xl:text-3xl font-bold text-[#333333]">
          ORDER# <span className="font-normal">{order.orderNumber}</span>
        </span>
        <a
          href="#"
          className="text-red-600 2xl:text-2xl text-xs font-semibold hover:underline"
        >
          Order Details
        </a>
      </div>
    </div>

    {/* Order Details Section */}
    <div className="flex justify-between items-center gap-2">
      <div className="flex flex-col 2xl:text-2xl justify-between w-fit h-full gap-2">
        <div
          className={`font-bold text-md mb-2 w-fit px-3 py-1 rounded-lg ${statusColor(
            order.status
          )}`}
        >
          {order.status}
        </div>
        <div className="flex items-center 2xl:text-2xl gap-6">
          <div className="flex flex-col gap-1 w-[70%] 2xl:w-[85%]">
            <span className="text-sm  2xl:text-2xl font-semibold text-[#333333]">
              Ship To
            </span>
            <span className="text-[#333333] text-md font-bold">
              {order.shipTo}
            </span>
            <span className="text-[#333333] text-sm 2xl:text-2xl">
              {order.address}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-full gap-2 -ml-50">
        <img
          src={order.product.image}
          alt={order.product.name}
          className="w-40 h-40 object-contain"
        />
        <div>
          <div className="font-bold text-red-600 2xl:text-3xl">
            {order.product.name}
          </div>
          <div className="text-[#333333] 2xl:text-2xl">
            Returns Not Eligible
          </div>
          <button className="mt-4 bg-[#0096ff] hover:bg-[#fa09a7] transition-all duration-280 text-sm text-white font-semibold px-6 py-2 rounded shadow 2xl:text-2xl">
            {" "}
            BUY IT AGAIN
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {order.status === "Pending" && (
          <button className="bg-[#0096ff] hover:bg-[#fa09a7] transition-all duration-280 text-sm 2xl:text-2xl text-white font-semibold px-6 py-2 rounded shadow w-full">
            CANCEL
          </button>
        )}
        <button className="bg-[#0096ff] hover:bg-[#fa09a7] transition-all duration-280 text-sm text-white font-semibold px-6 py-2 rounded shadow w-full flex items-center 2xl:text-2xl justify-center gap-2">
          <FiFlag fill="white" /> REPORT THIS ITEM
        </button>
        {order.status === "Pending" && (
          <button className="bg-[#0096ff] hover:bg-[#fa09a7] transition-all duration-280 text-sm 2xl:text-2xl text-white font-semibold px-6 py-2 rounded shadow w-full">
            WRITE A REVIEW
          </button>
        )}
      </div>
    </div>
  </div>
);

const OrderPanel = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate order counts for all statuses
  const totalOrders = mockOrders.length;
  const pendingOrders = mockOrders.filter(
    (order) => order.status === "Pending"
  ).length;
  const processingOrders = mockOrders.filter(
    (order) => order.status === "Processing"
  ).length;
  const completedOrders = mockOrders.filter(
    (order) => order.status === "Completed"
  ).length;
  const declinedOrders = mockOrders.filter(
    (order) => order.status === "Declined"
  ).length;
  const cancelledOrders = mockOrders.filter(
    (order) => order.status === "Cancelled"
  ).length;
  const returnRequestOrders = mockOrders.filter(
    (order) => order.status === "Orders return request"
  ).length;
  const replacementOrders = mockOrders.filter(
    (order) => order.status === "Orders replacement"
  ).length;
  const verificationOrders = mockOrders.filter(
    (order) => order.status === "Order verification"
  ).length;

  // Calculate indices for pagination
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = mockOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Calculate total pages
  const totalPages = Math.ceil(mockOrders.length / itemsPerPage);

  // Handle pagination button clicks
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {/* Order Status Cards */}
      <div className="col-span-4">
        <OrderStatusCards
          totalOrders={totalOrders}
          pendingOrders={pendingOrders}
          processingOrders={processingOrders}
          completedOrders={completedOrders}
          declinedOrders={declinedOrders}
          cancelledOrders={cancelledOrders}
          returnRequestOrders={returnRequestOrders}
          replacementOrders={replacementOrders}
          verificationOrders={verificationOrders}
        />
      </div>

      {/* Order Cards */}
      <div className="col-span-4 p-2 pt-0">
        {currentOrders.map((order, idx) => (
          <OrderCard key={idx} order={order} />
        ))}
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-[#0096ff] hover:bg-[#fa09a7] transition-all duration-280 text-white font-semibold px-6 py-2 rounded shadow disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            &laquo; Previous
          </button>
          <button
            className="bg-[#0096ff] hover:bg-[#fa09a7] transition-all duration-280 text-white font-semibold px-6 py-2 rounded shadow disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
