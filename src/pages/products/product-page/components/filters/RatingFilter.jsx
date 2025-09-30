"use client";
import React from "react";

const ratings = [
  { stars: 5, count: 45 },
  { stars: 4, count: 32 },
  { stars: 3, count: 20 },
];

export default function RatingFilter({ filters = {}, setFilters }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Rating</h3>
      <ul className="space-y-1 p-3 bg-gray-50 rounded-2xl">
        {ratings.map((r) => (
          <li key={r.stars}>
            <button
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  rating: f?.rating === r.stars ? 0 : r.stars,
                }))
              }
              className={`flex items-center gap-2 px-2 py-1 rounded ${
                filters?.rating === r.stars
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {"★".repeat(r.stars)}
              {"☆".repeat(5 - r.stars)} <span>({r.count})</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
