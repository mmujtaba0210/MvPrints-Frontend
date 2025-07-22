"use client";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/form/FormField";
import { CustomInput } from "@/components/formComponents/CustomInput";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  FiMapPin,
  FiCreditCard,
  FiShoppingCart,
  FiTag,
  FiHome,
  FiUser,
  FiGift,
} from "react-icons/fi";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState("information");
  const [selectedAddress, setSelectedAddress] = useState("address1");
  const [selectedShipping, setSelectedShipping] = useState("express");
  const [selectedPackaging, setSelectedPackaging] = useState("standard");
  const [shippingMethod, setShippingMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const router = useRouter();

  const addresses = [
    {
      id: "address1",
      name: "Bilal Ameen",
      company: "Ace Creatives",
      address: "1344 McDonough PL",
      city: "McDonough",
      state: "GA",
      zip: "30253",
      country: "United States",
      isDefault: true,
    },
    {
      id: "address2",
      name: "Ashley Joseph",
      company: "Ashley prints",
      address: "401 Shade Tree Drive",
      city: "Stockbridge",
      state: "GA",
      zip: "30281",
      country: "United States",
    },
    {
      id: "address3",
      name: "Kelvin marks",
      company: "Tammys Printing",
      address: "4093 sharpstone bend",
      city: "New Orleans",
      state: "LA",
      zip: "30281",
      country: "United States",
    },
  ];

  const pickupLocations = [
    {
      id: "pickup1",
      name: "Main Warehouse",
      address: "789 Warehouse Rd",
      city: "Atlanta",
      state: "GA",
      zip: "30301",
      hours: "Mon-Fri: 9AM - 5PM",
    },
    {
      id: "pickup2",
      name: "Branch Office",
      address: "101 Office Ave",
      city: "Stockbridge",
      state: "GA",
      zip: "30281",
      hours: "Mon-Sat: 10AM - 7PM",
    },
  ];

  const shippingOptions = [
    {
      id: "sameday",
      name: "Same Day Delivery",
      price: 24.99,
      time: "6-8 Hours",
      carrier: "Local Courier",
      deliveryDate: "Today",
    },
    {
      id: "express",
      name: "Express Next Day Delivery",
      price: 19.99,
      time: "1 Business Day",
      carrier: "UPS",
      deliveryDate: "Delivered By 13,May 2024",
    },
    {
      id: "priority",
      name: "Priority Two Day Delivery",
      price: 9.99,
      time: "2 Days",
      carrier: "FedEx",
      deliveryDate: "Delivered By 14,May 2024",
    },
    {
      id: "supersaver",
      name: "Super Saver",
      price: 0,
      time: "3-5 Business Days",
      carrier: "USPS",
      deliveryDate: "Delivered By 22,Nov 2022",
    },
  ];

  const packaging = [
    {
      id: 1,
      name: "Standard Packaging",
      image: "/images/packaging/standard.jpg",
      description: "Basic protective packaging for regular items",
      price: 0,
    },
    {
      id: 2,
      name: "Premium Packaging",
      image: "/images/packaging/premium.jpg",
      description: "Enhanced protection with bubble wrap and padding",
      price: 5,
    },
    {
      id: 3,
      name: "Gift Packaging",
      image: "/images/packaging/delux.png",
      description: "Elegant gift wrapping with ribbon and card",
      price: 10,
    },
  ];

  const subtotal = 85.0;
  const tax = 7.61;
  const initialShippingCost = 15.0;

  const calculateTotal = () => {
    let total = subtotal + tax;
    const shipping = shippingOptions.find((opt) => opt.id === selectedShipping);
    const packagingCost = packaging.find((opt) => opt.id === selectedPackaging);

    total += shipping ? shipping.price : initialShippingCost;
    total += packagingCost ? packaging.price : 0;

    return total.toFixed(2);
  };

  const orderTotal = calculateTotal();

  const orderItem = {
    image: "/images/tickets.jpg",
    name: "Event Tickets",
    soldBy: "Mecarvi",
    price: 85,
    details: {
      "Ticket Orientation": "Horizontal",
      "Ticket Size": "2 x 5.5 Inches",
      "Ticket Paper Type": "12pt Cardstock",
      "Ticket Coating": "Gloss - Front Side Only",
      "Ticket Rounded Corners": "No Rounded Corners",
      "Ticket Preferation": "No Ticket Preferation",
      "Ticket Sequential Numbering": "No Sequential Numbering",
      "Ticket QTY": "100 Event Tickets - Single Sided Graphics",
      "Ticket Shrink Wrapping": "No Shrink Wrapping",
      "Ticket Artwork": "Print Ready File",
      Quantity: 1,
      "Art Work": "",
    },
    estimatedDelivery: "Apr 27 - Apr 28 2025",
  };

  const favoriteItems = [
    {
      id: 1,
      name: "Business Cards",
      price: 20,
      image: "/images/businessCard.png",
    },
    { id: 2, name: "Flyers", price: 29.99, image: "/images/flyers.png" },
    {
      id: 3,
      name: "Business Cards",
      price: 20,
      image: "/images/businessCard.png",
    },
    { id: 4, name: "Flyers", price: 29.99, image: "/images/flyers.png" },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-12 lg:px-24 bg-[#f8f9fa]">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {/* Step 1: Personal Information */}
        <div
          className={`flex items-center 2xl:text-2xl px-6 py-2 rounded-l-md z-10 relative ${
            currentStep === "information"
              ? "text-white bg-[#0096ff] rounded-md"
              : "text-gray-600 bg-gray-200"
          }`}
        >
          <span
            className={`rounded-full 2xl:text-2xl w-6 h-6 flex items-center justify-center mr-2 font-bold ${
              currentStep === "information"
                ? "bg-white text-[#0096ff]"
                : "bg-white text-gray-600"
            }`}
          >
            1
          </span>
          <FiUser className="mr-2" /> Personal Information
          {/* <div className={`absolute right-0 top-0 h-full w-4 skew-x-[-20deg] transform origin-top-right -mr-[8px] ${currentStep === 'shipping' ? 'bg-[#0096ff]' : 'bg-gray-200'}`}></div> */}
        </div>
        {/* Step 2: Shipping */}
        <div
          className={`flex items-center px-6 py-2 2xl:text-2xl rounded-l-md z-10 relative ${
            currentStep === "shipping"
              ? "text-white bg-[#0096ff] rounded-md"
              : "text-gray-600 bg-gray-200"
          }`}
        >
          <span
            className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold ${
              currentStep === "shipping"
                ? "bg-white text-[#0096ff]"
                : "bg-white text-gray-600"
            }`}
          >
            2
          </span>
          <FiMapPin className="mr-2" /> Shipping Information
          {/* <div className={`absolute right-0 top-0 h-full w-4 skew-x-[-20deg] transform origin-top-right -mr-[8px] ${currentStep === 'shipping' ? 'bg-[#0096ff]' : 'bg-gray-200'}`}></div> */}
        </div>

        {/* Step 3: Packaging */}
        <div
          className={`flex items-center px-6 py-2 2xl:text-2xl relative ${
            currentStep === "packaging"
              ? "text-white bg-[#0096ff] rounded-r-md"
              : "text-gray-600 bg-gray-200"
          }`}
        >
          {/* <div className={`absolute left-0 top-0 h-full w-4 skew-x-[-20deg] transform origin-top-left -ml-[8px] ${currentStep === 'summary' ? 'bg-[#0096ff]' : 'bg-gray-200'}`}></div> */}
          <span
            className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold ${
              currentStep === "packaging"
                ? "bg-white text-[#0096ff]"
                : "bg-white text-gray-600"
            }`}
          >
            3
          </span>
          <FiGift className="mr-2" /> Packaging
        </div>
        {/* Step 4: Payment */}
        <div
          className={`flex items-center px-6 py-2 2xl:text-2xl relative z-0 ${
            currentStep === "payment"
              ? "text-white bg-[#0096ff] rounded-md"
              : "text-gray-600 bg-gray-200"
          }`}
        >
          <span
            className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold ${
              currentStep === "payment"
                ? "bg-white text-[#0096ff]"
                : "bg-white text-gray-600"
            }`}
          >
            4
          </span>
          <FiCreditCard className="mr-2" /> Payment Information
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- Left Section: Content changes based on step --- */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
          {/*  */}

          {/* --- Step1: Personal Information --- */}
          {currentStep === "information" && (
            <div className="h-full">
              <h2 className="text-xl 2xl:text-2xl font-semibold text-[#0096ff] mb-4">
                Please provide your information
              </h2>
              <div className="flex flex-col justify-between h-[90%]">
                <div className="relative grid grid-cols-2 gap-2">
                  <FormField
                    label="First Name"
                    name="firstName"
                    placeholder="Enter your first name"
                    type="text"
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter your last name"
                    type="text"
                  />
                  <FormField
                    label="Email"
                    name="email"
                    placeholder="Enter your Email"
                    type="email"
                  />
                  <FormField
                    label="Phone Number"
                    name="phnnumber"
                    placeholder="Enter your phone number"
                    type="number"
                  />
                </div>
                <div className="relative flex justify-end">
                  <button
                    onClick={() => setCurrentStep("shipping")}
                    className="bg-[#0096ff] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0095ffdc]"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Shipping Address Content */}
          {currentStep === "shipping" && (
            <div>
              <div>
                <h1 className="text-2xl 2xl:text-2xl font-semibold text-[#0096ff] mb-2">
                  Choose your delivery method
                </h1>
              </div>
              {/* Shipping Method Tabs */}
              <div className="flex gap-4 mb-6 w-full">
                <button
                  className={`flex 2xl:text-2xl justify-center items-center gap-3 w-full px-6 py-3 text-lg font-semibold ${
                    shippingMethod === "delivery"
                      ? "border border-[#0096ff] text-[#0096ff] bg-[#0095ff36]"
                      : "border border-gray-600 text-gray-600 hover:text-[#0096ff] hover:border-[#0096ff] bg-gray-200"
                  }`}
                  onClick={() => setShippingMethod("delivery")}
                >
                  🚚 Delivery
                </button>
                <button
                  className={`flex 2xl:text-2xl justify-center items-center gap-3 w-full px-6 py-3 text-lg font-semibold ${
                    shippingMethod === "pickup"
                      ? "border border-[#0096ff] text-[#0096ff]"
                      : "border border-gray-600 text-gray-600 hover:text-[#0096ff] hover:border-[#0096ff] bg-gray-200"
                  }`}
                  onClick={() => setShippingMethod("pickup")}
                  type="radio"
                >
                  📦 Pickup
                </button>
              </div>

              {shippingMethod === "delivery" && (
                <div>
                  {/* Shipping Method */}
                  <div className="mb-2">
                    <h2 className="text-xl 2xl:text-2xl font-semibold text-[#0096ff] mb-2">
                      Choose your Courier
                    </h2>
                    <div>
                      <div className="grid grid-cols-2 gap-2">
                        {shippingOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`flex items-center justify-between border rounded-md p-4 cursor-pointer ${
                              selectedShipping === option.id
                                ? "border-[#0096ff] ring-2 ring-[#0096ff]"
                                : "border-gray-300"
                            }`}
                            onClick={() => setSelectedShipping(option.id)}
                          >
                            <div className="flex items-center gap-4">
                              {/* Placeholder for Icon */}
                              <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                                🚚
                              </div>
                              <div>
                                <p className="font-semibold 2xl:text-2xl text-sm">
                                  {option.carrier}
                                </p>
                                <p className="text-xs 2xl:text-2xl text-gray-600">
                                  {option.deliveryDate}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-semibold text-sm 2xl:text-2xl">
                                ${option.price.toFixed(2)}
                              </span>
                              <input
                                type="radio"
                                name="shippingOption"
                                value={option.id}
                                checked={selectedShipping === option.id}
                                onChange={() => setSelectedShipping(option.id)}
                                className="h-4 w-4 2xl:text-2xl text-[#0096ff] focus:ring-[#0096ff] border-gray-300"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address Section */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl 2xl:text-2xl font-semibold text-[#0096ff]">
                      SHIPPING ADDRESS
                    </h2>
                    <CustomButton text="+ ADD NEW" width="16%" />
                  </div>

                  <div className="grid grid-cols-2 container gap-3 space-y-4 mb-6">
                    {addresses.map((addr) => (
                      <div
                        key={addr.id}
                        className={`border rounded-md p-4 cursor-pointer ${
                          selectedAddress === addr.id
                            ? "border-[#0096ff] ring-2 ring-[#0096ff]"
                            : "border-gray-300"
                        }`}
                        onClick={() => setSelectedAddress(addr.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              name="shippingAddress"
                              id={addr.id}
                              checked={selectedAddress === addr.id}
                              onChange={() => setSelectedAddress(addr.id)}
                              className="mr-3 2xl:text-2xl h-4 w-4 text-[#0096ff] focus:ring-[#0096ff] border-gray-300"
                            />
                            <div>
                              <p className="font-semibold 2xl:text-2xl">
                                {addr.name}
                              </p>
                              <p className="text-sm 2xl:text-2xl text-gray-600">
                                {addr.company}
                              </p>
                              <p className="text-sm 2xl:text-2xl text-gray-600">
                                {addr.address}
                              </p>
                              <p className="text-sm 2xl:text-2xl text-gray-600">{`${addr.city}, ${addr.state} ${addr.zip}`}</p>
                              <p className="text-sm 2xl:text-2xl text-gray-600">
                                {addr.country}
                              </p>
                            </div>
                          </div>
                          {addr.isDefault && (
                            <span className="bg-[#0096ff] text-white text-xs font-semibold px-2 py-1 2xl:text-2xl rounded">
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {shippingMethod === "pickup" && (
                <div>
                  <h2 className="text-xl font-semibold text-[#0096ff] mb-4">
                    SHIPPING METHOD
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <select className="border p-2 rounded-md bg-white">
                      <option>Select City</option>
                      {/* Add cities based on logic or API */}
                    </select>
                    <select className="border p-2 rounded-md bg-white">
                      <option>Select Location</option>
                      {/* Add locations based on logic or API */}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 container gap-3 space-y-4 mb-6">
                    {pickupLocations.map((location) => (
                      <div
                        key={location.id}
                        className={`border rounded-md p-4 cursor-pointer ${
                          selectedAddress === location.id
                            ? "border-[#0096ff] ring-2 ring-[#0096ff]"
                            : "border-gray-300"
                        }`}
                        onClick={() => setSelectedAddress(location.id)} // Assuming we use selectedAddress state for pickup too, or add a new state
                      >
                        <div className="flex items-center mb-2">
                          <FiHome size={24} className="mr-3 text-gray-600" />
                          <div>
                            <p className="font-semibold">{location.name}</p>
                            <p className="text-sm text-gray-600">
                              {location.address}
                            </p>
                            <p className="text-sm text-gray-600">{`${location.city}, ${location.state} ${location.zip}`}</p>
                            <p className="text-sm text-gray-600">
                              Hours: {location.hours}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t pt-6 mt-6 flex justify-between items-center">
                <CustomButton
                  text="BACK"
                  width="16%"
                  onClick={() => setCurrentStep("information")}
                />
                <CustomButton
                  text="CONTINUE"
                  width="16%"
                  onClick={() => setCurrentStep("packaging")}
                />
              </div>
            </div>
          )}

          {/* --- Step3: Packaging --- */}
          {currentStep === "packaging" && (
            <div className="h-full">
              <h2 className="text-xl font-semibold text-[#0096ff] mb-4">
                Selected Packaging
              </h2>
              <div className="flex flex-col justify-between h-[90%]">
                <div className="relative grid grid-cols-3 gap-2">
                  {packaging.map((option) => (
                    <div
                      key={option.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPackaging === option.id
                          ? "border-[#0096ff] ring-2 ring-[#0096ff]"
                          : "border-gray-300 hover:border-[#0096ff]"
                      }`}
                      onClick={() => setSelectedPackaging(option.id)}
                    >
                      <img
                        src={option.image}
                        alt={option.name}
                        className="w-full h-32 object-contain mb-3"
                      />
                      <h3 className="font-semibold text-lg mb-1">
                        {option.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {option.description}
                      </p>
                      <p className="text-[#0096ff] font-semibold">
                        {option.price === 0 ? "Free" : `$${option.price}`}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-6 mt-6 flex justify-between items-center">
                  <CustomButton
                    text="BACK"
                    width="16%"
                    onClick={() => setCurrentStep("shipping")}
                  />
                  <CustomButton
                    text="CONTINUE"
                    width="16%"
                    onClick={() => setCurrentStep("payment")}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Payment Method Content */}
          {currentStep === "payment" && (
            <div>
              <div>
                <h1 className="text-2xl font-semibold text-[#0096ff] mb-2">
                  Choose your payment method
                </h1>
              </div>
              {/* Payment Method Tabs */}
              <div className="flex gap-4 mb-6 w-full">
                <button
                  className={`flex justify-center items-center gap-3 w-full px-6 py-3 text-lg font-semibold ${
                    paymentMethod === "online"
                      ? "border border-[#0096ff] text-[#0096ff] bg-[#0095ff36]"
                      : "border border-gray-600 text-gray-600 hover:text-[#0096ff] hover:border-[#0096ff] bg-gray-200"
                  }`}
                  onClick={() => setPaymentMethod("online")}
                >
                  💳 Online Payment
                </button>
                <button
                  className={`flex justify-center items-center gap-3 w-full px-6 py-3 text-lg font-semibold ${
                    paymentMethod === "offline"
                      ? "border border-[#0096ff] text-[#0096ff]" // Assuming a different active style for offline tab, adjust as needed
                      : "border border-gray-600 text-gray-600 hover:text-[#0096ff] hover:border-[#0096ff] bg-gray-200"
                  }`}
                  onClick={() => setPaymentMethod("offline")}
                >
                  💰 Offline Payment
                </button>
              </div>

              {paymentMethod === "online" && (
                <div>
                  {/* Online Payment Content (Placeholder) */}
                  <h3 className="font-semibold text-xl text-[#0096ff] mb-4">
                    Credit Card Details
                  </h3>

                  {/* Debit Card Layout */}
                  <div className="relative flex flex-col items-center">
                    {/* Card Layout */}
                    <div className="relative w-80 h-48 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.55)] bg-gradient-to-r from-[#0095ff] to-[#000B5B] text-white p-6 flex flex-col justify-between">
                      {/* Card Chip */}
                      <div className="w-10 h-6 bg-yellow-300 rounded-sm mb-4"></div>
                      {/* Card Info */}
                      <div>
                        <input className="text-lg w-full font-semibold tracking-widest mb-2 bg-white/50" />

                        <div className="flex justify-between text-sm">
                          <div>
                            <div className="uppercase">Cardholder</div>
                            <input className="font-bold bg-white/50 w-[100%]" />
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="uppercase">Expires</div>
                            <input className="font-bold bg-white/50 w-[40%]" />
                          </div>
                        </div>
                      </div>
                      {/* Card Type/Logo */}
                      <div className="flex justify-end mt-2">
                        <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-bold shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
                          Visa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "offline" && (
                <div>
                  {/* Offline Payment Content (Placeholder) */}
                  <h3 className="font-semibold text-xl text-[#0096ff] mb-4">
                    Offline Payment Instructions
                  </h3>
                  <div className="text-gray-700 text-base">
                    <p className="mb-2">
                      Please follow the instructions below to complete your
                      offline payment:
                    </p>
                    <p className="mb-2">
                      1. Make a bank transfer to the following account:
                    </p>
                    <p className="ml-4 font-semibold">
                      Bank Name: [Your Bank Name]
                    </p>
                    <p className="ml-4 font-semibold">
                      Account Number: [Your Account Number]
                    </p>
                    <p className="ml-4 font-semibold">
                      Account Name: [Your Account Name]
                    </p>
                    <p className="mb-2 mt-4">
                      2. Use your Order Number as the payment reference.
                    </p>
                    <p className="mb-2">
                      3. Send a confirmation of your payment to [Your Email
                      Address] or [Your Phone Number].
                    </p>
                    <p className="mt-4 italic">
                      Your order will be processed once the payment is
                      confirmed.
                    </p>
                  </div>
                </div>
              )}

              <div className="border-t pt-6 mt-6 flex justify-between items-center">
                <CustomButton
                  text="BACK"
                  width="16%"
                  onClick={() => setCurrentStep("packaging")}
                />
                <CustomButton
                  text="CONTINUE"
                  width="16%"
                  onClick={() => router.push("/order-confirm")}
                />
              </div>
            </div>
          )}
        </div>

        {/* --- Right Section: Order Summary (remains constant for now) --- */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.35)] h-fit">
          <h2 className="text-xl 2xl:text-3xl font-semibold mb-4 border-b pb-2">
            ORDER SUMMARY
          </h2>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex 2xl:text-2xl justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex 2xl:text-2xl justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex 2xl:text-2xl justify-between">
              <span>Shipping Cost</span>
              <span>
                $
                {(
                  shippingOptions.find((opt) => opt.id === selectedShipping)
                    ?.price || initialShippingCost
                ).toFixed(2)}
              </span>
            </div>
            <div className="flex 2xl:text-2xl justify-between">
              <span>Packaging Cost</span>
              <span>
                $
                {(
                  packaging.find((opt) => opt.id === selectedPackaging)
                    ?.price || initialShippingCost
                ).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between 2xl:text-2xl font-bold text-lg">
              <span>Total Price:</span>
              <span>${orderTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
