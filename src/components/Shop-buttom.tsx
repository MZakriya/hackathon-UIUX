"use client";

import { useState } from "react";
import { FaTrophy, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const ShopButtom = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showNext, setShowNext] = useState(true);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep === 3) {
      setShowNext(false);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
    if (currentStep === 2) {
      setShowNext(true);
    }
  };

  const steps = [
    {
      icon: <FaTrophy className="mr-2 text-blue-500 text-2xl" />,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: <FaShieldAlt className="mr-2 text-blue-500 text-2xl" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <FaTruck className="mr-2 text-blue-500 text-2xl" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <FaHeadset className="mr-2 text-blue-500 text-2xl" />,
      title: "24/7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="container bg-[#FAF3EA] mx-auto px-4 py-16">
      <div className="flex justify-between mb-12">
        <div className="flex items-center">
          {steps[currentStep - 1].icon}
          <h2 className="text-2xl font-bold">{steps[currentStep - 1].title}</h2>
        </div>
        <button
          onClick={handlePreviousStep}
          className={`px-4 py-2 text-white bg-blue-500 rounded ${
            currentStep === 1 ? "hidden" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          className={`px-4 py-2 text-white bg-blue-500 rounded ${
            !showNext ? "hidden" : ""
          }`}
        >
          Next
        </button>
      </div>
      <p className="text-lg">{steps[currentStep - 1].description}</p>
      <div className="flex justify-center mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-1/4 text-center ${
              index + 1 === currentStep ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {step.icon}
            <h3 className="text-lg">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopButtom;
