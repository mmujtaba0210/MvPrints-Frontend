import React, { useState } from "react";

const CustomButton = ({
  text,
  onClick,
  width,
  bgColor = "#0096ff",
  hoverColor = "#fa09a7",
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`flex items-center justify-center py-3 px-4 rounded-md text-white font-bold cursor-pointer transition-all duration-280  ${className}`}
      style={{
        width: width,
        backgroundColor: isHovered ? hoverColor : bgColor,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default CustomButton;
