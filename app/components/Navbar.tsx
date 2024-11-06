import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white text-black">
      <div className="flex justify-between py-5 container mx-auto ">
        <Image src="" alt="" />

        {/* links */}
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* icons */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;