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
