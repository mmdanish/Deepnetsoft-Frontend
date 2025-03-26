import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import Hamburger from '../assets/Hamburger.svg'; // Assuming you have this in your assets

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-4 sm:px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12">
          <img src={Logo} alt="Deep Net Logo" className="w-full h-full" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold uppercase text-[#32A0FF]">
          Deep <span className="text-white">Net Soft</span> 
        </h1>
      </div>

      {/* Hamburger Icon - Visible only on mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <img 
            src={Hamburger} 
            alt="Menu" 
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Menu - Hidden on mobile by default */}
      <ul className={`
        ${isOpen ? 'flex' : 'hidden'} 
        sm:flex flex-col sm:flex-row 
        absolute sm:static top-16 left-0 right-0 
        bg-black sm:bg-transparent 
        space-y-4 sm:space-y-0 sm:space-x-6 
        uppercase font-medium text-sm 
        p-4 sm:p-0
        z-10
      `}>
        <li className="hover:text-[#32A0FF] cursor-pointer">Home</li>
        <li className="text-[#32A0FF] cursor-pointer">Menu</li>
        <li className="hover:text-[#32A0FF] cursor-pointer">
          Make a Reservation
        </li>
        <li className="hover:text-[#FF0080] cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;