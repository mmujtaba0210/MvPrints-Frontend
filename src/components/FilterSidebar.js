'use client';

import { useState } from 'react';

const FilterSidebar = ({ onFilterChange, onPriceChange }) => {
  const categories = [
    'Booklets',
    'Business Essentials',
    'Digitizing',
    'Graphics Design',
    'Marketing Materials',
    'Packaging',
    'Photos',
    'Promotional',
    'Signages',
    'Hardware',
    'Super Saver'
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 35, max: 300 });

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  const handlePriceChange = (type, value) => {
    let newValue = parseInt(value) || 0;
    
    if (type === 'min') {
      newValue = Math.min(newValue, priceRange.max);
      setPriceRange({ ...priceRange, min: newValue });
    } else {
      newValue = Math.max(newValue, priceRange.min);
      setPriceRange({ ...priceRange, max: newValue });
    }
    
    onPriceChange({ min: priceRange.min, max: priceRange.max });
  };

  return (
    <div className="w-64 border border-[#cec7c7] rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Price</h3>
        <input
            type="range"
            min="0"
            max="1000"
            value={priceRange.max}
            onChange={(e) => handlePriceChange('max', e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        <div className="space-y-4">
          <div className="flex justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">Min price</label>
              <div className="relative">
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="absolute left-11 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">Max price</label>
              <div className="relative">
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="absolute left-11 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={category} className="ml-2 text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar; 