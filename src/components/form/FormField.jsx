import React from "react";

const FormField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-[#333333] 2xl:text-2xl  font-bold text-lg">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={handleChange}
        placeholder={placeholder}
        className="border-1 border-[#bfb7b7] 2xl:text-2xl  p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
      ></input>
    </div>
  );
};

export default FormField;
