"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Pagination from "@/components/pagination";
import Features from "@/components/features";

export default function Blog() {
  return (
    <div>
      {/* Hero Section with Breadcrumb */}
      <div className="relative h-64 bg-[#F9F1E7] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/shop.png" // Correct src for static image in public folder
          alt="Shop Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />

        {/* Overlay Content */}
        <div className="  relative text-center space-y-4">
          <Image
            src="./images/logo.png"
            width={77}
            height={77}
            className="pt"
            alt="Furniro"
          />
          <h1 className="text-4xl font-medium text-gray-900">Blog</h1>
          <nav className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">Blog</span>
          </nav>
        </div>
      </div>
      <div className="space-y-12">
        {/* Other shop content */}
        <Pagination currentPage={1} totalPages={3} />
        <Features />
      </div>
    </div>
  );
}
