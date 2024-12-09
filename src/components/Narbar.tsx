"use client";

import React, { useState } from "react";
import { FiUser, FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-black flex items-center">
            <img src="./images/logo.png" width={50} height={50} alt="Furniro" />
            Furniro
          </div>
        </div>

        {/* Desktop Menu Items */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="hidden md:flex items-center space-x-4 text-xl text-gray-700 hover:text-black cursor-pointer">
          <FiUser />
          <FiSearch />
          <FiHeart />
          <FiShoppingCart />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none hover:text-black"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="space-y-4 py-4 px-4 text-sm font-medium text-gray-700">
            <li className="hover:text-black cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex justify-center space-x-6 py-4 text-xl text-gray-700 hover:text-black">
            <FiUser />
            <FiSearch />
            <FiHeart />
            <Link href={"/components/shopping-cart"}>
            <FiShoppingCart />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
