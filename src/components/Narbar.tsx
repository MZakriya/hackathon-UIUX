// components/Navbar.js
import React from "react";
import { FiUser, FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-black flex items-center">
          <img src="./images/logo.png" width={50} height={50} alt="Furniro" />Furniro
          </div>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/shop">Shop</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/blog">Blog</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <FiUser className="text-xl text-gray-700 hover:text-black cursor-pointer" />
          <FiSearch className="text-xl text-gray-700 hover:text-black cursor-pointer" />
          <FiHeart className="text-xl text-gray-700 hover:text-black cursor-pointer" />
          <FiShoppingCart className="text-xl text-gray-700 hover:text-black cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-gray-700 focus:outline-none hover:text-black"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
