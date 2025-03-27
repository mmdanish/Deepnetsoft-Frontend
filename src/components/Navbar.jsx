import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Hamburger from '../assets/Hamburger.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative bg-black text-white px-7 sm:px-8 py-5 flex items-center justify-between z-50">
        <div className="absolute bottom-[-20px] left-15 mt-5 flex items-end">
          <div className="w-14 h-14 sm:w-16 sm:h-16">
            <img src={Logo} alt="Deep Net Logo" className="w-full h-full" />
          </div>
          <h1 className="text-xl sm:text-2xl uppercase leading-none ml-2 mb-2">
            <span className="text-[#32A0FF]">Deep</span>
            <span className="text-white"> Net</span>
            <br />
            <span className="text-[#857878] text-2xl sm:text-3xl block -mt-0">
              Soft
            </span>
          </h1>
        </div>

        <ul className="hidden sm:flex ml-auto space-x-6 uppercase font-medium text-sm">
          <li className="hover:text-[#32A0FF] cursor-pointer">Home</li>
          <li className="text-[#32A0FF] cursor-pointer">Menu</li>
          <li className="hover:text-[#32A0FF] cursor-pointer">
            Make a Reservation
          </li>
          <li className="hover:text-[#FF0080] cursor-pointer">Contact Us</li>
        </ul>


        {/* Mobile Menu */}
        <div className="sm:hidden ml-auto">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img src={Hamburger} alt="Menu" className="w-8 h-8" />
          </button>
        </div>

        <ul
          className={`
          ${isOpen ? "flex" : "hidden"} 
          sm:hidden flex-col absolute top-14 left-0 right-0 
          bg-black space-y-4 uppercase font-medium text-sm p-4 z-10
        `}
        >
          <li className="hover:text-[#32A0FF] cursor-pointer">Home</li>
          <li className="text-[#32A0FF] cursor-pointer">Menu</li>
          <li className="hover:text-[#32A0FF] cursor-pointer">
            Make a Reservation
          </li>
          <li className="hover:text-[#FF0080] cursor-pointer">Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
