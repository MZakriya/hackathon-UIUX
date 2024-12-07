import Link from "next/link";
import { Heart } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-[1440px]">
      <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full">
        <div className="flex-1 items-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="#" className="underline hover-text-slate-300">
            {""}
            Shop Now
            {""}
          </Link>
        </div>
        <div className="flex items-center gap-[2px]">
          <select
            name=""
            id=""
            className="bg-black text-white text-sm font-normal leading-[21px]"
          >
            <option value="">English</option>
            <option value="">Urdu</option>
            <option value="">Punjabi</option>
            <option value="">Hindi</option>
            <option value="">Arabic</option>
          </select>
        </div>
      </div>
      {/* {/*Main Nav */}
      <div className="flex justify-between items-center px-20 py-4">
        <h1 className="text-2xl font-bold text-black">Exclusive</h1>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-slate-600 hover:text-black underline">
            Home
          </Link>
          <Link href="/" className="text-slate-600 hover:text-black ">
            Contact
          </Link>
          <Link href="/" className="text-slate-600 hover:text-black ">
            About
          </Link>
          <Link href="/" className="text-slate-600 hover:text-black ">
            Sign Up
          </Link>
        </nav>
        {/* {Search Icon} */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-slate-100 outline-none text-sm"
            />
            <Search />
          </div>
          <Heart />
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}