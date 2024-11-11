import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className='flex bg-white flex-wrap justify-center lg:flex-row lg:p-20 p-5'>
        <div className='lg:w-1/3'>
          {/* Defining layout as responsive and ensuring width and height */}
          <Image src="/Images/Gillingham_logo_1.svg" alt="Logo" width={150} height={80} layout="responsive" />
        </div>
        <div className='lg:w-2/3 flex flex-col lg:justify-center lg:pl-10'>
          <div className='flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/3 pt-5'>
              <h1 className='font-bold'>Address</h1>
              <p className='lg:w-4/5 lg:pt-5'>110 P.O Box Dzivarasekwa 1, Harare, Zimbabwe</p>
            </div>
            <div className='w-full lg:w-1/3 pt-5'>
              <h1 className='font-bold'>Our Contact Info</h1>
              <p className='lg:pt-5'>gillingham@co.zw</p>
              <p>+2630939939393</p>
            </div>
            <div className='w-full lg:w-1/3 pt-5'>
              <h1 className='font-bold'>Follow us on</h1>
              <div className='flex lg:pt-5'>
                <Image src="/Images/Facebook.svg" alt="Facebook" width={30} height={30} />
                <Image src="/Images/Instagram.svg" alt="Instagram" width={30} height={30} />
              </div>
            </div>
          </div>
          <div className='pt-10'>
            <h1 className='font-bold'>Quick links</h1>
            <div className='flex md:pt-10 lg:pt-10 justify-between lg:text-xl'>
              <p>Home</p>
              <p>About</p>
              <p>Admission</p>
              <p>Academics</p>
              <p>Donate</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* start copyright */}
      <div className='bg-primaryBlue p-5 text-white flex items-center justify-center flex-row'>
        <h1>gillingham@ 2024 copyright. Designed and developed by</h1>
        <p className='font-bold lg:pl-1'>Millie&#39;s Designs</p>
      </div>
      {/* end copyright */}
    </div>
  )
}

export default Footer;
