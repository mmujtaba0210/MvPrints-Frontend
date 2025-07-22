import React from "react";
import { JSX } from "react";

interface CustomButtonProps {
    label: string;
    icon?: JSX.Element;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    buttonType?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
  }
  
  export default function CustomButton({
    label,
    icon,
    bgColor = 'bg-white',
    textColor = 'text-black',
    borderColor = 'border-gray-300',
    buttonType = 'button',
    onClick,
  }: CustomButtonProps) {
    return (
      <button
        type={buttonType}
        onClick={onClick}
        className={`w-full flex items-center justify-center gap-1 px-10 py-2 rounded-md border shadow-sm font-medium transition hover:opacity-90 ${bgColor} ${textColor} ${borderColor}`}
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span>{label}</span>
      </button>
    );
  }
  