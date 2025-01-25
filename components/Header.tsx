'use client'
import React, { useContext } from "react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import logoicon from "../public/Logo Icon.webp";
import Carticon from "../public/Cart.webp";
import Navbar from "./Navbar";
import Link from "next/link";
import CartContext from "@/Context/NewContext";
// import { useCart } from "../Context/CartContext";

function Header() {
  // Destructure cartCount from useCart
  // useCart();
  const {cartCount} = useContext(CartContext)!
  
  return (
    <div>
      <div className="w-full h-[45px] bg-secondary md:px-[150px] sm:px-[25px] py-[14px] flex items-center justify-between">
        <div>
          <h3 className="font-normal text-xs md:text-sm text-white/70">
            Free shipping on all orders over $50
          </h3>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex">
            <h3 className="font-normal text-xs md:text-sm text-white/70">
              Eng
            </h3>
            <ChevronDownIcon className="h-5 w-5 text-white/70" />
          </div>
          <div>
            <Link href="/faq">
              <h3 className="font-normal sm:text-xs md:text-sm text-white/70">
                Faqs
              </h3>
            </Link>
          </div>
          <div className="flex">
            <QuestionMarkCircleIcon className="h-5 w-5 text-white/70" />
            <h3 className="font-normal sm:text-xs md:text-sm text-white/70">
              Need Help
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full h-[84px] bg-[#F0F2F3] flex md:px-[150px] sm:px-[25px] justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src={logoicon} alt="Logo" width={40} height={40} />
          <h1 className="font-medium md:text-[26px] sm:text-xl text-secondary">
            Comforty
          </h1>
        </div>

        <Link href="/cart">
          <div className="w-[120px] h-[44px] bg-white rounded-md flex items-center justify-around px-2 py-3">
            <div className="flex items-center space-x-1">
              <Image src={Carticon} alt="carticon" width={22} height={22} />
              <h4 className="text-xs text-secondary">Cart</h4>
            </div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#007580] flex justify-center items-center">
              <h3 className="text-[10px] font-medium text-white text-center">
                {cartCount}
              </h3>
            </div>
          </div>
        </Link>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
