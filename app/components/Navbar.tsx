
'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "@/public/Images/Gillingham logo 1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white mb- text-black h-[15vh] flex items-center ">
      <div className="flex justify-between items-center container ml-[20px] px-4">
        
        {/* Logo */}
        <Link href="/">
          <Image className="h-[15vh] w-full" src={logo} alt="logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-xl font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Become a Sponsor Button */}
        <div className="hidden md:block">
          <Link href="/sponsor" className="bg-blue-700 font-bold text-lg rounded-lg text-white p-3">
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



