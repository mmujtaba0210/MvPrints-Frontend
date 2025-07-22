import React from 'react';

const OrderConfirmPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section: Thank you message and Billing Address */}
        <div className="flex-1 p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank you for your purchase!</h1>
          <p className="text-gray-600 mb-8">
            Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing address</h2>
          <div className="text-gray-700">
            <p className="mb-2"><span className="font-medium">Name:</span> Jane Smith</p>
            <p className="mb-2"><span className="font-medium">Address:</span> 456 Oak St #3b, San Francisco, CA 94102, United States</p>
            <p className="mb-2"><span className="font-medium">Phone:</span> +1 (415) 555-1234</p>
            <p className="mb-4"><span className="font-medium">Email:</span> jane.smith@email.com</p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Track Your Order
          </button>
        </div>

        {/* Right Section: Order Summary */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>

          <div className="grid grid-cols-3 gap-y-4 mb-6 text-gray-700">
            <div>
              <p className="font-medium text-sm">Date</p>
              <p>02 May 2023</p>
            </div>
            <div>
              <p className="font-medium text-sm">Order Number</p>
              <p>024-125478956</p>
            </div>
            <div>
              <p className="font-medium text-sm">Payment Method</p>
              <p>Mastercard</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {/* Product 1 */}
            <div className="flex items-center gap-4">
              <img src="/images/flyers.png" alt="All In One Chocolate Combo" className="w-20 h-20 object-cover"/>
              <div className="flex-1">
                <p className="font-medium text-gray-800">All In One Chocolate Combo</p>
                <p className="text-sm text-gray-600">Pack: Medium</p>
                <p className="text-sm text-gray-600">Qty: 1</p>
              </div>
              <p className="font-medium text-gray-800">$50.00</p>
            </div>

            {/* Product 2 */}
            <div className="flex items-center gap-4">
              <img src="/images/businessCard.png" alt="Desire Of Hearts" className="w-20 h-20 object-cover rounded-md"/>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Desire Of Hearts</p>
                <p className="text-sm text-gray-600">Pack: Large</p>
                <p className="text-sm text-gray-600">Qty: 1</p>
              </div>
              <p className="font-medium text-gray-800">$50.00</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6 space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>$100.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$2.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-800 pt-2">
              <span>Order Total</span>
              <span>$107.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmPage;