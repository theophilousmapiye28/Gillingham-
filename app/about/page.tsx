import React from 'react'
import Navbar from "@/app/components/Navbar";
import Image from 'next/image';
import hero from '@/public/Images/Facebook.svg'
const page = () => {
  return (
    <div className=''>
        <Navbar/>
       <Image src={hero} alt="" />
     </div>
  )
}

export default page
