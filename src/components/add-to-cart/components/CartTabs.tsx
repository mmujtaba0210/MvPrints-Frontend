"use client";
import React from "react";

import { useState } from "react";

const tabs = ["Note", "Shipping", "Coupon"];

export default function CartTabs() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="border-t p-4 ">
      <div className="flex gap-4  justify-evenly transition-transform duration-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(active === tab ? null : tab)}
            className={`px-3   rounded ${
              active === tab ? "bg-black text-white" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active && (
        <div className="p-3 border rounded transition-transform duration-500">
          <p>{active} content goes here...</p>
        </div>
      )}
    </div>
  );
}
