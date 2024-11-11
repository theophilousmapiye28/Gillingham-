
'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons from react-icons
import logo from "@/public/Images/Gillingham logo 1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white mb- text-black h-[15vh] flex items-center drop-shadow-2xl ">
      <div className="flex justify-between items-center container m-[20px] px-4">
        
        {/* Logo */}
        <Link href="/">
          <Image className="h-12 w-full sm:h-16 sm:w-full md:h-[15vh] md:w-[15vh] " src={logo} alt="logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-xl font-semibold">
          <Link className="active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all" href="/">Home</Link>
          <Link className="active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all" href="/about">About Us</Link>
          <Link className="active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all" href="/academy">Academy</Link>
          <Link className="active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all" href="/contact">Contact Us</Link>
        </div>

        {/* Become a Sponsor Button */}
        <div className="hidden md:block">
          <Link href="/sponsor" className="bg-blue-700 active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all font-bold text-lg rounded-lg text-white p-3 ">
            Become our sponsor
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full absolute top-[15vh] left-0 shadow-md">
          <div className="flex flex-col space-y-4 p-4 text-center text-xl font-semibold">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/academy" onClick={toggleMenu}>Academy</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            <Link href="/sponsor" onClick={toggleMenu} className="bg-blue-700 text-white p-2 rounded-lg">
              Become our sponsor
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;



