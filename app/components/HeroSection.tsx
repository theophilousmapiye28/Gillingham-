import React from 'react';
import Button from '../components/Buttons';
import OutlineButton from '../components/OutlineButton';
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className='px-5 lg:px-20'>
      {/* Start Hero */}
      <div className='flex flex-wrap w-[100%] lg:justify-between'>
        <div className='lg:w-3/5 flex flex-col lg:justify-center'>
          <h1 className='text-6xl md:text-8xl font-bold pt-10 md:pt-10'>Gillingham </h1>
          <h2 className='text-4xl md:text-7xl lg:text-[67px] font-bold text-primaryBlue md:pt-2'>Primary School</h2>
          <p className='pt-5 md:w-96'>Education characterized by an outstanding breadth of opportunity. We teach you the right skills.</p>
          <div className='flex flex-col justify-center md:justify-start md:flex-row pt-5'>
            <Button text="Enroll Today" />
            <OutlineButton text="Learn More" />
          </div>
        </div>
        <div className='pt-10 lg:w-2/5'>
          {/* Specifying layout as responsive for Hero image */}
          <Image src="/Images/Hero_Image.svg" alt="Hero image" width={500} height={400} layout="responsive" />
        </div>
      </div>
      {/* End Hero */}
    </div>
  )
}

export default HeroSection;
