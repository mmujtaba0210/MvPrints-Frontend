"use client";
import React from "react";

const colors = ["black", "navy", "brown", "cyan", "pink", "purple"];

export default function ColorFilter({ filters = {}, setFilters }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">Filter by Color</h3>
      <div className="flex gap-2 flex-wrap bg-gray-50 p-3 rounded-2xl">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            className={`w-6 h-6 rounded-full border transition ${
              filters?.color === color ? "ring-2 ring-black" : ""
            }`}
            onClick={() =>
              setFilters((f) => ({
                ...f,
                color: f?.color === color ? "" : color,
              }))
            }
          />
        ))}
      </div>
    </div>
  );
}
