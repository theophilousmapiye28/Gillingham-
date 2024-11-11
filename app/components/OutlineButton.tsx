// OutlineButton.tsx
import React from 'react';

interface OutlineButtonProps {
  text: string;
  padding?: string;
  width?: string;
  minWidth?: string;
  onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  text,
  padding = 'py-3 px-7', // Default padding
  width = 'w-full sm:w-auto', // Default width
  minWidth = 'min-w-[150px]', // Minimum width for consistency
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`border border-primaryBlue text-primaryBlue ${padding} ${width} ${minWidth} rounded-2xl cursor-pointer text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primaryBlue hover:text-white lg:ml-5 md:mt-2 mt-2 lg:mt-0`}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
