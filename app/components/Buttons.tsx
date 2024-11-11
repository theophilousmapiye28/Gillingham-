// Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  bgColor?: string;
  hoverColor?: string;
  padding?: string;
  width?: string;
  minWidth?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = 'bg-primaryBlue', // Updated to use custom blue background
  hoverColor = 'hover:bg-primaryBlue-dark', // Updated to use custom blue on hover
  padding = 'py-3 px-7',
  width = 'w-full sm:w-auto',
  minWidth = 'min-w-[150px]',
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-white ${padding} ${width} ${minWidth} ${bgColor} border border-primaryBlue rounded-2xl cursor-pointer ${hoverColor} text-center transition duration-300 ease-in-out transform hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;
