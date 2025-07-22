import React from "react";
import { FiPackage, FiTruck, FiHome, FiCheck } from "react-icons/fi";

const mockTrackingData = {
  orderNumber: "522071219401322",
  product: {
    name: "Event Tickets",
    image: "images/tickets.jpg",
    quantity: 1,
  },
  currentLocation: "Atlanta Sorting Facility",
  estimatedDelivery: "January 15, 2024",
  status: "In Transit",
  trackingSteps: [
    {
      status: "Order Placed",
      date: "Jan 10, 2024 09:30 AM",
      location: "Online",
      completed: true,
      icon: FiPackage,
    },
    {
      status: "Picked Up",
      date: "Jan 11, 2024 02:15 PM",
      location: "Warehouse",
      completed: true,
      icon: FiTruck,
    },
    {
      status: "In Transit",
      date: "Jan 12, 2024 10:45 AM",
      location: "Atlanta Sorting Facility",
      completed: true,
      icon: FiTruck,
    },
    {
      status: "Out for Delivery",
      date: "Pending",
      location: "",
      completed: false,
      icon: FiTruck,
    },
    {
      status: "Delivered",
      date: "Pending",
      location: "",
      completed: false,
      icon: FiHome,
    },
  ],
};

const TrackingTimeline = ({ steps }) => (
  <div className="relative">
    {steps.map((step, index) => (
      <div key={index} className="flex mb-8 relative">
        <div className="flex items-center 2xl:text-3xl">
          <div
            className={`w-8 h-8 2xl:size-[3rem] rounded-full flex items-center justify-center ${
              step.completed ? "bg-[#0096ff] text-white" : "bg-gray-200"
            }`}
          >
            <step.icon size={20} />
          </div>
          <div
            className={`h-full ${
              index !== steps.length - 1 ? "border-l-2" : ""
            } ${
              step.completed ? "border-[#0096ff]" : "border-gray-200"
            } absolute top-8 left-4 h-[5rem] 2xl:left-6 2xl:h-[8rem]`}
          />
        </div>
        <div className="ml-4">
          <p className="font-semibold text-sm 2xl:text-2xl">{step.status}</p>
          <p className="text-sm text-gray-600 2xl:text-2xl">{step.date}</p>
          {step.location && (
            <p className="text-sm text-gray-600 2xl:text-2xl">
              {step.location}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);

const TrackOrderPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Order Tracking Code Section */}
      <div className="flex flex-col gap-2 shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-xl p-3 md:col-span-1">
        <p className="text-[#0096ff] font-bold text-lg mb-4 pb-2 pl-4 border-b border-[#bfb7b7] 2xl:text-4xl">
          ORDER TRACKING
        </p>
        <div className="flex flex-col gap-6 px-2 text-md">
          <p className="text-[#333333] 2xl:text-2xl">
            Please enter your order number below to check the status of your
            order. Once your order has been shipped, you will receive an email
            with the tracking number and the carrier that will deliver your
            order. Tracking information may not be available up to 24 hours
            after your order has been picked up by the carrier.
          </p>
          <div className="flex flex-col gap-6 justify-center items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border 2xl:text-2xl border-[#bfb7b7] w-full py-2 px-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Get Tracking Code"
              className="border 2xl:text-2xl border-[#bfb7b7] w-full py-2 px-3 rounded-md"
            />
            <button className="bg-[#0096ff] text-white md:w-[40%] px-5 py-2 rounded shadow 2xl:text-2xl cursor-pointer hover:bg-[#fa09a7] transition-all duration-280">
              VIEW TRACKING
            </button>
          </div>
        </div>
      </div>

      {/* Order Tracking Section */}
      <div className="md:col-span-2 shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-xl p-6">
        <div>
          <div className="flex justify-between items-start mb-8">
            <p className="text-gray-600 2xl:text-4xl">
              Order #{mockTrackingData.orderNumber}
            </p>

            <div className="text-right">
              <p className="font-bold text-lg 2xl:text-4xl text-[#0096ff]">
                {mockTrackingData.status}
              </p>
              <p className="text-gray-600 2xl:text-3xl">
                Est. Delivery: {mockTrackingData.estimatedDelivery}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src={mockTrackingData.product.image}
              alt={mockTrackingData.product.name}
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="font-bold 2xl:text-2xl text-lg">
                {mockTrackingData.product.name}
              </h3>

              <p className="text-gray-600 2xl:text-2xl">
                Quantity: {mockTrackingData.product.quantity}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Map Section */}
          <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center">
            {/* <p className="text-gray-500 text-center">
              Map visualization would go here
              <br />
              Current Location: {mockTrackingData.currentLocation}
            </p> */}
            <img
              src="images/map.png"
              alt="map"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>

          {/* Timeline Section */}
          <div className="p-4">
            <h4 className="font-bold text-lg mb-6 2xl:text-3xl">
              Tracking Timeline
            </h4>
            <TrackingTimeline steps={mockTrackingData.trackingSteps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPanel;
