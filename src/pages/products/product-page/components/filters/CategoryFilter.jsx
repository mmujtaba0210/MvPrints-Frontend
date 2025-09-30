"use client";
import React from "react";

const categories = [
  "Brochures & Catalogues",
  "Business Cards",
  "Calendars",
  "Design Online",
  "Flyers",
  "Folded Leaflets",
  "Greeting Cards",
  "Letterheads",
  "Notepads",
  "Packaging",
  "Placemats",
  "Postcards",
  "Posters & Ad Posters",
  "Presentation Folders",
  "Roller Banners",
  "Stickers",
  "Uncategorized",
];

export default function CategoryFilter({ filters = {}, setFilters }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">Categories</h3>
      <ul className="space-y-1 text-sm bg-gray-50 p-3 rounded-2xl">
        {(categories ?? []).map((cat) => (
          <li key={cat}>
            <button
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  category: f?.category === cat ? "" : cat,
                }))
              }
              className={`w-full text-left px-2 py-1 rounded transition ${
                filters?.category === cat
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
