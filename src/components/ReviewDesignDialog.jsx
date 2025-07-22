'use client'
import React, { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

const ReviewDesignDialog = ({ isOpen, onClose, onConfirm }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (isConfirmed) {
      onConfirm();
    }
  };

  const checklistItems = [
    {
      title: 'Check Spelling and Grammar',
      description: 'Double-check all text in your design for accuracy to ensure there are no spelling, grammatical, or typographical errors. Carefully review every detail before submission to avoid any costly reprints, unnecessary issues or delays. We also recommend having a second person review your design to catch any potential mistakes you may have overlooked.'
    },
    {
      title: 'Inspect Image Quality',
      description: 'Ensure all images and graphics in your artwork are high resolution to maintain sharpness and clarity in the final print. Low-resolution files can result in blurriness, pixelation or loss of detail, which may compromise the quality of your printed product. For best results, verify that your images are at least 500 DPI (dots per inch) and appropriately scaled for the size of the print.'
    },
    {
      title: 'Confirm Layout and Alignment',
      description: 'Ensure that all design elements, such as text, images and graphics, are properly aligned and spaced to create a cohesive and professional appearance. Check that margin, padding and any other layout elements are consistent and visually balanced. Proper alignment not only enhances the overall aesthetics of your design but also ensures that it will be printed accurately.'
    },
    {
      title: 'Review Colors',
      description: 'Ensure the colors in your design align with your expectations, keeping in mind that there may be slight variations between on-screen colors and printed results. Please be advised that we use the CMYK color model for printing to achieve accurate and vibrant results.'
    },
    {
      title: 'Validate Dimensions and Bleed Area',
      description: 'Confirm that the file size and dimensions of your design are correct and align with the printing requirements. Ensure the bleeding area is properly included to prevent any cropping or scaling issues when the design is trimmed. Adhering to these specifications ensures that your design will be printed accurately and without any unintended loss of content or visual distortion.'
    }
  ];

  return (
    <div className="fixed inset-0 bg-[#00000050] bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-md overflow-hidden shadow-xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-[#0096ff] mb-2">Review Your Design</h2>
          <p className="text-sm text-gray-600 mb-4">
            Take a final review of your design before submitting your order to ensure everything is flawless. 
            Verifying these details will help ensure your print order meets your expectations and is produced exactly as you envisioned.
          </p>

          <div className=" max-h-80 overflow-y-auto pr-2">
            {checklistItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start pb-3 p-2 ${index % 2 === 0 ? 'bg-white' : 'bg-[#c9c9c98a]'}`}
              >
                <FiCheck className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-sm">{item.title}:</span>
                  <span className="text-sm text-[#333333] ml-1">{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-[#cec7c7] pt-4">
             <label className="flex items-center cursor-pointer">
                <input 
                    type="checkbox" 
                    checked={isConfirmed}
                    onChange={() => setIsConfirmed(!isConfirmed)}
                    className="h-5 w-5 text-[#0096ff] rounded border-gray-300 focus:ring-[#0096ff] mr-2"
                />
                <span className="text-sm">I have reviewed and approved my design</span>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end items-center p-4 bg-gray-100 border-t border-[#cec7c7]">
          <button 
            onClick={onClose} 
            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            Close
          </button>
          <button 
            onClick={handleConfirm} 
            disabled={!isConfirmed} 
            className={`bg-[#0096ff] text-white px-4 py-2 rounded-md transition-colors text-sm font-medium ${!isConfirmed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#fa09a7]'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDesignDialog; 