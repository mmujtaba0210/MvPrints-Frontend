"use client";
import React, { useState } from "react";

export default function PriceFilter({
  min = 0,
  max = 100,
  onFilter = () => {},
}) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="p-4 bg-gray-50 shadow rounded-xl space-y-4">
      <h3 className="font-semibold text-lg">Filter by price</h3>

      {/* Slider track */}
      <div className="relative w-full h-2 bg-gray-200 rounded">
        <div
          className="absolute h-2 bg-purple-500 rounded"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
        />
      </div>

      {/* Display values safely */}
      <div className="flex justify-between items-center text-sm font-medium">
        <span>
          Price: ${(Number(minValue) || 0).toFixed(2)} — $
          {(Number(maxValue) || 0).toFixed(2)}
        </span>
        <button
          onClick={() => onFilter({ min: minValue, max: maxValue })}
          className="font-bold text-black hover:text-purple-600"
        >
          FILTER
        </button>
      </div>
    </div>
  );
}
