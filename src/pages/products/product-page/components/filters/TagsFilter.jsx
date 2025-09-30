"use client";
import React from "react";

const tags = [
  "Badge",
  "Banner",
  "Business Card",
  "Calendar",
  "Cap",
  "Cup",
  "Design Online",
  "Flyer",
  "Magazine",
  "Men's t-shirt",
  "Mouse Pad",
  "Mug",
  "Phone case",
  "Poster",
  "Sticker",
  "Sweatshirt",
  "T-shirt",
  "Triptych brochure",
];

export default function TagsFilter({ filters, setFilters }) {
  const toggleTag = (tag) => {
    setFilters((f) => {
      const tagsArray = Array.isArray(f.tags) ? f.tags : [];
      const exists = tagsArray.includes(tag);
      return {
        ...f,
        tags: exists ? tagsArray.filter((t) => t !== tag) : [...tagsArray, tag],
      };
    });
  };

  // ✅ Prevents undefined error
  const selectedTags = Array.isArray(filters?.tags) ? filters.tags : [];

  return (
    <div>
      <h3 className="font-semibold mb-5">Product Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-2 py-1 text-xs border rounded ${
              selectedTags.includes(tag)
                ? "bg-black text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
