import React from "react";
export default function TopProducts() {
  return (
    <div>
      <h3 className="font-semibold mb-2">Top Products</h3>
      <div
        className="space-y-2 my-4 bg-gray-50 p-3 rounded-2xl
      "
      >
        <div className="flex items-center gap-2">
          <img src="https://via.placeholder.com/50" alt="" />
          <div>
            <p className="text-sm">Product A</p>
            <p className="text-xs text-gray-500">$10 - $15</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://via.placeholder.com/50" alt="" />
          <div>
            <p className="text-sm">Product B</p>
            <p className="text-xs text-gray-500">$20 - $30</p>
          </div>
        </div>
      </div>
    </div>
  );
}
