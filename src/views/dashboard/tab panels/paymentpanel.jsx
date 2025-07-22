import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import FormField from "@/components/form/FormField";
import CustomButton from "@/components/CustomButton";

const mockCards = [
  {
    id: "card1",
    cardholder: "Alana Gibs",
    type: "Visa",
    number: "xxxx xxxx xxxx 4242",
    expiration: "11/2025",
    cvv: "123",
    billing: {
      address: "1344 McDonough Pl,ss",
      city: "McDonough",
      state: "GA",
      zip: "30253",
      country: "United States",
    },
    isDefault: true,
  },
  {
    id: "card2",
    cardholder: "Test alana",
    type: "Visa",
    number: "xxxx xxxx xxxx 4242",
    expiration: "09/23",
    cvv: "755",
    billing: {
      address: "812 kohl dr",
      city: "mcdonough",
      state: "GA",
      zip: "23456",
      country: "United States",
    },
    isDefault: false,
  },
  {
    id: "card3",
    cardholder: "alana gibbs",
    type: "American Express",
    number: "xxxx xxxx xxxx 4242",
    expiration: "09/26",
    cvv: "342",
    billing: {
      address: "3019 ne 133rd street",
      city: "seattle",
      state: "Washington",
      zip: "98125",
      country: "United States",
    },
    isDefault: false,
  },
  {
    id: "card4",
    cardholder: "Bilal",
    type: "Visa",
    number: "xxxx xxxx xxxx 6463",
    expiration: "11/11",
    cvv: "123",
    billing: {
      address: "Abbassia town,Rahim yar khan, https://hwryk.com",
      city: "Rahim Yar Khan",
      state: "Punjab",
      zip: "64200",
      country: "Pakistan",
    },
    isDefault: false,
  },
  {
    id: "card5",
    cardholder: "alana gibbs",
    type: "Discover",
    number: "xxxx xxxx xxxx 4242",
    expiration: "09/23",
    cvv: "342",
    billing: {
      address: "4014 fox Tree Drive",
      city: "san diego",
      state: "CA",
      zip: "43435",
      country: "United States",
    },
    isDefault: false,
  },
];

const cardTypes = ["Visa", "MasterCard", "American Express", "Discover"];

const countries = [
  "United States",
  "Afghanistan",
  "Albania",
  "Algeria",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "China",
  "Japan",
  "India",
  "Brazil",
  "Mexico",
];

const PaymentPanel = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [form, setForm] = useState({
    cardholder: "",
    cardType: cardTypes[0],
    cardNumber: "",
    cvv: "",
    expiryMonth: "",
    expiryYear: "",
    address: "",
    suite: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  useEffect(() => {
    const handleClick = () => setOpenMenuId(null);
    if (openMenuId !== null) {
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }
  }, [openMenuId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-xl p-4">
      <div className="flex  justify-between items-center border-b border-[#bfb7b7] pb-2 mb-4 gap-3">
        <span className="text-[#0096ff] text-xl font-bold 2xl:text-4xl">
          PAYMENT METHOD
        </span>
        <CustomButton
          text="+ ADD NEW"
          width="auto"
          className="min-w-[120px] 2xl:text-2xl"
          onClick={() => setIsDialogOpen(true)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {mockCards.map((card) => (
          <div key={card.id} className="relative flex flex-col items-center">
            {/* Card Layout */}
            <div className="relative w-full max-w-xs 2xl:max-w-[30rem] h-48 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.55)] bg-gradient-to-r from-[#0095ff] to-[#000B5B] text-white p-6 flex flex-col justify-between">
              {/* Dropdown menu button (top right) */}
              <div className="absolute top-3 right-3 z-20">
                <button
                  type="button"
                  className="bg-red-500 2xl:text-2xl hover:bg-red-600 shadow-[0_1px_4px_rgba(0,0,0,0.35)] text-white rounded px-2 py-1 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuId(openMenuId === card.id ? null : card.id);
                  }}
                >
                  <FaChevronDown />
                </button>
                {openMenuId === card.id && (
                  <div
                    className="absolute right-0 w-40 bg-white border border-[#bfb7b7] rounded shadow-lg z-30 text-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ul className="2xl:text-2xl">
                      <li
                        className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          /* handle edit */ setOpenMenuId(null);
                        }}
                      >
                        Edit
                      </li>
                      <li
                        className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          /* handle delete */ setOpenMenuId(null);
                        }}
                      >
                        Delete
                      </li>
                      {!card.isDefault && (
                        <li
                          className="pl-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            /* handle make default */ setOpenMenuId(null);
                          }}
                        >
                          Make This Default
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Chip */}
              <div className="w-10 h-6 2xl:w-18 2xl:h-8 bg-yellow-300 rounded-sm mb-4"></div>

              {/* Card Info */}
              <div>
                <div className="text-lg font-semibold tracking-widest mb-2 truncate 2xl:text-3xl">
                  {card.number}
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="uppercase 2xl:text-2xl">Cardholder</div>
                    <div className="font-bold truncate 2xl:text-2xl">
                      {card.cardholder}
                    </div>
                  </div>
                  <div>
                    <div className="uppercase 2xl:text-2xl">Expires</div>
                    <div className="font-bold 2xl:text-2xl">
                      {card.expiration}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Type/Logo */}
              <div className="flex justify-end mt-2">
                <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-bold 2xl:text-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
                  {card.type}
                </span>
              </div>

              {/* Default badge */}
              {card.isDefault && (
                <span className="absolute bottom-3 left-3 bg-[#006eff] text-white text-xs 2xl:text-xl font-semibold px-2 py-1 rounded">
                  Default
                </span>
              )}
            </div>

            {/* Billing Address below card */}
            <div className="mt-2 text-xs text-gray-700 w-full max-w-xs  2xl:max-w-[30rem] bg-gray-100 rounded p-2 text-center sm:text-left">
              <div className="font-bold">Billing Address:</div>
              <div className="truncate">{card.billing.address}</div>
              <div className="truncate">
                {card.billing.city}, {card.billing.state} {card.billing.zip}
              </div>
              <div>{card.billing.country}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Card Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-[#00000049] bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-[900px] max-w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsDialogOpen(false)}
            >
              &times;
            </button>
            <div className="grid grid-cols-2 gap-8">
              {/* Card Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#0096ff] mb-2">
                  Card Information
                </h2>
                <FormField
                  label="Cardholder Name"
                  placeholder="Card Holder"
                  name="cardholder"
                  value={form.cardholder}
                  onChange={handleChange}
                />
                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-[#333333] font-bold text-lg">
                    Card Type
                  </label>
                  <select
                    name="cardType"
                    value={form.cardType}
                    onChange={handleChange}
                    className="border-1 border-[#bfb7b7] p-2 rounded-md"
                  >
                    {cardTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <FormField
                  label="Card Number"
                  placeholder="Card Number"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                />
                <FormField
                  label="Cvv"
                  placeholder="Cvc"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                />
                <FormField
                  label="Expiry Month"
                  placeholder="Month"
                  name="expiryMonth"
                  value={form.expiryMonth}
                  onChange={handleChange}
                />
                <FormField
                  label="Expiry Year"
                  placeholder="Year"
                  name="expiryYear"
                  value={form.expiryYear}
                  onChange={handleChange}
                />
              </div>
              {/* Billing Address */}
              <div>
                <h2 className="text-2xl font-bold text-[#0096ff] mb-2">
                  Billing Address
                </h2>
                <FormField
                  label="Street Address"
                  placeholder="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
                <FormField
                  label="Suite/Unit/Apt"
                  placeholder="Suite/Unit/Apt"
                  name="suite"
                  value={form.suite}
                  onChange={handleChange}
                />
                <FormField
                  label="City"
                  placeholder="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />
                <FormField
                  label="State"
                  placeholder="state"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                />
                <FormField
                  label="Zip Code"
                  placeholder="zip code"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                />
                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-[#333333] font-bold text-lg">
                    Country
                  </label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="border-1 border-[#bfb7b7] p-2 rounded-md"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="bg-[#0096ff] hover:bg-[#0095ffc7] text-white px-6 py-2 rounded"
                onClick={() => setIsDialogOpen(false)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPanel;
