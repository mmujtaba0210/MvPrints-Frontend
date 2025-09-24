import React, { useState } from "react";
import RadioOptions from "@/components/RadioOptions";
import CustomButton from "@/components/CustomButton";
import { FiCheck } from "react-icons/fi";
import VariationPage from "./variation-page/page";

const OptionsDialog = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const [currentStep, setCurrentStep] = useState(1);

  // Define all steps, including those potentially completed before opening the dialog
  const allSteps = [
    { title: "Our product presets", completed: true, value: "Build Your Own" },
    { title: "Product", completed: true, value: "Leaflets & Flyers" },
    { title: "Type", completed: true, value: "Standard" },
    { title: "Size", completed: false, value: null }, // Current/upcoming step
    { title: "Paper Type", completed: false, value: null }, // Example of a subsequent step
    // Add more steps as needed
  ];

  // Define options data for each step that appears in the dialog
  const dialogStepsData = [
    {
      title: "Size", // Corresponds to allSteps[3]
      options: [
        { option: "A7" },
        { option: "A6" },
        { option: "A5" },
        { option: "A4" },
        { option: "A3" },
        { option: "DL" },
        { option: "105mm x 105mm" },
        { option: "148mm x 148mm" },
        { option: "210mm x 210mm" },
      ],
      // Add a selected state for options if needed
    },
    {
      title: "Paper Type", // Corresponds to allSteps[4]
      options: [
        { option: "150gsm Silk" },
        { option: "170gsm Uncoated" },
        { option: "250gsm Gloss" },
      ],
    },
    // Add more option data objects corresponding to dialog steps
  ];

  // Map currentStep index to dialogStepsData index (adjusting for pre-dialog steps)
  const dialogStepIndex = currentStep - 1; // Assuming the dialog starts at step 1 (which is 'Size' in allSteps)

  const handleNext = () => {
    if (currentStep < allSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed top-2 w-full h-full overflow-y-auto flex items-center justify-center z-50 rounded-2xl">
      {/* Dialog Header */}
      {/* <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold">Leaflets & Flyers</h2>{" "}
        </div> */}

      {/* Dialog Content Area (Main Options + Sidebar) */}
      <div className="flex  overflow-y-auto bg-white rounded-2xl">
        <div className="flex- overflow-y-auto pr-4 ">
          {/* {dialogStepIndex < dialogStepsData.length && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  {dialogStepsData[dialogStepIndex].title}
                </h3>
               
                {dialogStepsData[dialogStepIndex].title === "Size" ? (
                  <div className="grid grid-cols-3 gap-4">
                    <RadioOptions
                      title={dialogStepsData[dialogStepIndex].title}
                      options={dialogStepsData[dialogStepIndex].options}
                    />
                  </div>
                ) : (
                  <RadioOptions
                    title={dialogStepsData[dialogStepIndex].title}
                    options={dialogStepsData[dialogStepIndex].options}
                  />
                )}
              </div>
            )}

          
            <div className="flex justify-between mt-auto pt-4">
              {currentStep > 1 && (
                <CustomButton text="Previous" onClick={handlePrevious} />
              )}
              {currentStep < allSteps.length ? (
                <CustomButton
                  text="Next"
                  onClick={handleNext}
                  className="ml-auto"
                />
              ) : (
                <CustomButton
                  text="Add to basket"
                  onClick={onClose}
                  className="ml-auto bg-pink-500 text-white"
                />
              )}
            </div> */}
          <VariationPage />
        </div>

        {/* <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto rounded-md">
            <h3 className="text-xl font-semibold mb-4">Product Summary</h3>{" "}
            <ul className="space-y-3">
              {allSteps.map((step, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between text-sm ${
                    index + 1 <= currentStep
                      ? "font-bold text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  <span>{step.title}</span>
                  {index + 1 < currentStep && step.completed ? (
                    <span className="text-green-600">
                      <FiCheck size={18} />
                    </span> 
                  ) : index + 1 === currentStep ? (
                    <span className="text-blue-600">&gt;</span> 
                  ) : null}
                  {step.value && index + 1 < currentStep && (
                    <span className="text-gray-600 text-xs">{step.value}</span> 
                  )}
                </li>
              ))}
            </ul>
          </div> */}
      </div>

      {/* Close button - positioned absolutely within the outer dialog div */}
      <button
        onClick={onClose}
        className="absolute cursor-pointer top-7 right-10 text-gray-600 hover:text-gray-900 text-3xl"
      >
        &times;
      </button>
    </div>
  );
};

export default OptionsDialog;
