import CustomButton from "@/components/CustomButton";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiTag, FiTrash } from "react-icons/fi";

const cartItems = [
  {
    id: 1,
    name: "Event Tickets",
    price: 39.99,
    image: "/images/tickets.jpg",
    quantity: 1,
  },
];

const discounts = [
  {
    code: "MO234231",
    desc: "Discount for all orders from",
    per: "10% OFF 200$",
    applied: false,
  },
  {
    code: "MO234231",
    desc: "Discount for all orders from",
    per: "10% OFF 200$",
    applied: true,
  },
  {
    code: "MO234231",
    desc: "Discount for all orders from",
    per: "10% OFF 200$",
    applied: false,
  },
];

const recommendations = [
  { id: 1, name: "Event Tickets", price: 39.99, image: "/images/tickets.jpg" },
  {
    id: 2,
    name: "Business Card ",
    price: 79.99,
    image: "/images/businesscard.png",
  },
  {
    id: 3,
    name: "T-shirt",
    price: 129.99,
    oldPrice: 98.0,
    image: "/images/Tshirts.png",
    sale: 25,
  },
  {
    id: 4,
    name: "Flyer",
    price: 219.99,
    oldPrice: 98.0,
    image: "/images/flyers.png",
    sale: 25,
  },
];

const shippingOptions = [
  {
    id: "standard",
    name: "Standard Shipping",
    price: 0,
    time: "3-5 business days",
  },
  {
    id: "express",
    name: "Express Shipping",
    price: 10,
    time: "1-2 business days",
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    price: 25,
    time: "Next day delivery",
  },
];

const packagingOptions = [
  {
    id: "regular",
    name: "Regular Packaging",
    price: 0,
    description: "Standard packaging",
  },
  {
    id: "gift",
    name: "Gift Packaging",
    price: 5,
    description: "Gift wrap and ribbon",
  },
];

const initialShippingCost = shippingOptions[0].price;
const initialPackagingCost = packagingOptions[0].price;

const CartPage = () => {
  const [voucher, setVoucher] = useState("");
  const [agree, setAgree] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState(
    shippingOptions[0].id
  );
  const [selectedPackaging, setSelectedPackaging] = useState(
    packagingOptions[0].id
  );
  const router = useRouter();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // Placeholder tax calculation (e.g., 8%)
  const tax = +(subtotal * 0.08).toFixed(2);
  // Shipping and packaging
  const shippingCost =
    shippingOptions.find((opt) => opt.id === selectedShipping)?.price ||
    initialShippingCost;
  const packagingCost =
    packagingOptions.find((opt) => opt.id === selectedPackaging)?.price ||
    initialPackagingCost;
  // Order total
  const orderTotal = (subtotal + tax + shippingCost + packagingCost).toFixed(2);

  return (
    <div className="grid grid-cols-4 pb-8 min-h-screen">
      {/* Progress Bar and Alert */}
      <div className="col-span-4 w-full p-8 mx-auto mb-4">
        <div className="bg-[#f7f7f7] rounded p-2 text-sm flex items-center justify-between mb-2 2xl:text-4xl">
          <span>
            Your cart will expire in{" "}
            <span className="text-[#ff3c3c] font-bold">Time's up</span> minutes!
            Please checkout now before your items sell out!
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm mb-2 2xl:text-3xl ">
          <span>
            Buy <span className="text-[#00c853] font-bold">$70.00</span> more to
            get <span className="font-bold">Freeship</span>
          </span>
        </div>
        <div className="w-full h-2 2xl:h-5 bg-gray-200 rounded-full mb-2">
          <div
            className="h-2 2xl:text-h-5 bg-[#0096ff] rounded-full"
            style={{ width: "40%" }}
          >
            {" "}
          </div>
        </div>
      </div>
      {/* Main Cart Layout */}
      <div className="col-span-4 flex gap-4 px-8">
        {/* Left: Cart Items and Discounts */}
        <div className="flex-1 shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-xl">
          {/* Cart Table Header */}
          <div className="hidden md:grid grid-cols-5 gap-4 p-4 text-gray-500 font-semibold border-b 2xl:text-4xl border-[#e5e7eb]">
            <div>Products</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total Price</div>
            <div>Options</div>
          </div>
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center px-4 py-4 border-b border-[#e5e7eb] bg-white mb-2"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 2xl:size-[8rem] object-cover rounded"
                />
                <div>
                  <div className="font-bold 2xl:text-3xl">{item.name}</div>
                </div>
              </div>
              <div className="font-semibold 2xl:text-2xl">
                ${item.price.toFixed(2)}
              </div>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="w-16 border  2xl:h-[55px] 2xl:text-2xl rounded px-2 py-1"
                  readOnly
                />
              </div>
              <div className="font-semibold 2xl:text-2xl">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <div>
                <button className="bg-[#ff0800] text-white px-3 py-2 rounded shadow cursor-pointer hover:bg-[#ff0800c7]">
                  <FiTrash className="w-5 h-5 2xl:size-[2.5rem]" />
                </button>
              </div>
            </div>
          ))}
          {/* Voucher/Discount Section */}
          <div className="flex flex-col rounded-lg p-4 mt-4">
            <div className="flex justify-center gap-4">
              {/* Voucher input section */}
              <div className="flex flex-col gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Add voucher discount"
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                  className="flex-1 border 2xl:text-[24px] 2xl:h-[55px] border-[#e5e7eb] rounded px-3 py-2"
                />
                <button className="bg-[#0096ff] text-white px-4 py-2 rounded font-semibold 2xl:text-3xl">
                  Apply Code
                </button>
              </div>

              {/* Voucher Options */}
              {discounts.map((d, i) => (
                <div
                  key={i}
                  className={`rounded border px-4 py-2 flex flex-col items-center ${
                    d.applied
                      ? "border-[#ff3c3c] bg-[#fff0f0]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="text-xs font-semibold 2xl:text-[24px] mb-1 px-6 text-center">
                    {d.desc}
                  </div>
                  <div className="text-xs font-bold mb-3  2xl:text-[24px] px-6 text-center">
                    {d.per}
                  </div>
                  <div className="font-mono text-xs mb-1 2xl:text-[20px]">
                    {d.code}
                  </div>
                  <button
                    className={`text-xs px-3 2xl:text-3xl py-1 rounded border cursor-pointer ${
                      d.applied
                        ? "border-[#ff3c3c] text-[#ff3c3c] bg-white"
                        : "border-[#e5e7eb] text-[#333333] bg-white hover:bg-[#0096ff] hover:text-white"
                    } font-semibold`}
                  >
                    Apply Code
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Order Summary */}
        <div className="w-sm bg-white p-6 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.35)] h-full">
          <div>
            <h2 className="text-xl font-semibold 2xl:text-4xl mb-4 border-b pb-2">
              ORDER SUMMARY
            </h2>
            <div className="space-y-2 2xl:text-[24px] mb-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Cost</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Packaging</span>
                <span>${packagingCost.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t pt-4 2xl:text-[24px]">
              <div className="flex justify-between font-bold text-lg">
                <span>Total Price:</span>
                <span>${orderTotal}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end h-32">
            <CustomButton
              text="Checkout"
              className="2xl:text-[24px]"
              width="100%"
              onClick={() => router.push("/checkout")}
            />
          </div>
        </div>
      </div>
      {/* Recommendations */}
      <div className=" col-span-4 max-w-6xl mx-auto mt-12">
        <div className="text-2xl 2xl:text-5xl font-bold mb-6 text-center">
          You May Also Like
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {recommendations.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
