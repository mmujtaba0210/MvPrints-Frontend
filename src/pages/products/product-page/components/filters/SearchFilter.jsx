"use client";
import React from "react";

export default function SearchFilter({ filters = {}, setFilters = () => {} }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">Search</h3>
      <input
        type="text"
        value={filters?.search || ""}
        onChange={(e) =>
          setFilters((f) => ({
            ...f,
            search: e.target.value,
          }))
        }
        placeholder="Search products..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
