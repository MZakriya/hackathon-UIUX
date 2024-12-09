"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface ProductSpec {
  label: string;
  value1: string;
  value2: string;
}

const generalSpecs: ProductSpec[] = [
  { label: "Style Package", value1: "1 (sectional sofa)", value2: "1 (head+table, 2 single)" },
  { label: "Model Number", value1: "7CH-Unassembled", value2: "7CH-Unassembled" },
  { label: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
  { label: "Configuration", value1: "L-shaped", value2: "L-shaped" },
  { label: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
  { label: "Upholstery Color", value1: "Bright Grey & Iron", value2: "Bright Grey & Iron" },
];

const productSpecs: ProductSpec[] = [
  { label: "Filling Material", value1: "Foam", value2: "None" },
  { label: "Finish Type", value1: "Bright Grey & Iron", value2: "Bright Grey & Iron" },
  { label: "Adjustable Headrest", value1: "No", value2: "Yes" },
  { label: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
  { label: "Origin of Manufacture", value1: "India", value2: "India" },
];

const dimensionSpecs: ProductSpec[] = [
  { label: "Width", value1: "265.32 cm", value2: "265.32 cm" },
  { label: "Height", value1: "76 cm", value2: "76 cm" },
  { label: "Depth", value1: "167.38 cm", value2: "167.38 cm" },
  { label: "Weight", value1: "45 KG", value2: "45 KG" },
  { label: "Seat Height", value1: "40.52 cm", value2: "41.52 cm" },
  { label: "Leg Height", value1: "5.46 cm", value2: "5.46 cm" },
];

const warrantySpecs: ProductSpec[] = [
  {
    label: "Warranty Summary",
    value1: "1 Year Manufacturing Warranty",
    value2: "12 Year Manufacturing Warranty",
  },
  {
    label: "Warranty Service Type",
    value1:
      "For Warranty Claims Or Any Product Related Issues Please Email at help@xyz.com",
    value2:
      "For Warranty Claims Or Any Product Related Issues Please Email at help@xyz.com",
  },
  {
    label: "Covered in Warranty",
    value1: "Warranty Against Manufacturing Defect",
    value2: "Warranty of the product is limited to manufacturing defects only",
  },
  {
    label: "Not Covered in Warranty",
    value1:
      "The Warranty Does Not Cover Any Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
    value2:
      "The Warranty Does Not Cover Any Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
  },
  {
    label: "Domestic Warranty",
    value1: "1 Year",
    value2: "3 Months",
  },
];

export default function ProductComparison() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-lg font-medium mb-2">
          Go to Product page for more Products
        </h2>
        <button className="text-sm text-gray-600 hover:text-gray-900">
          View More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-6">
        {/* Product Headers */}
        <div className="hidden md:block" />
        <div className="space-y-4">
          <div className="relative h-48 w-full">
            <Image
              src="/images/sofa-main.png"
              alt="Asgaard Sofa"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-medium">Asgaard Sofa</h3>
            <p className="text-sm text-gray-600">Rs. 250,000.00</p>
            <div className="flex items-center justify-center md:justify-start mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">4.7</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative h-48 w-full">
            <Image
              src="/images/sofa1.png"
              alt="Outdoor Sofa Set"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-medium">Outdoor Sofa Set</h3>
            <p className="text-sm text-gray-600">Rs. 270,000.00</p>
            <div className="flex items-center justify-center md:justify-start mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">4.2</span>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="space-y-8 text-center md:text-left">
          <h3 className="font-medium text-lg">General</h3>
          <h3 className="font-medium text-lg">Product</h3>
          <h3 className="font-medium text-lg">Dimensions</h3>
          <h3 className="font-medium text-lg">Warranty</h3>
        </div>

        {/* Product 1 Specs */}
        <div className="space-y-4">
          {generalSpecs.map((spec, index) => (
            <div key={index} className="text-sm">
              <span className="block text-gray-600 md:hidden">{spec.label}:</span>
              <span>{spec.value1}</span>
            </div>
          ))}
          <button className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#A17D2A] transition-colors">
            Add To Cart
          </button>
        </div>

        {/* Product 2 Specs */}
        <div className="space-y-4">
          {generalSpecs.map((spec, index) => (
            <div key={index} className="text-sm">
              <span className="block text-gray-600 md:hidden">{spec.label}:</span>
              <span>{spec.value2}</span>
            </div>
          ))}
          <button className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#A17D2A] transition-colors">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
 