"use client";

import { Field, ErrorMessage } from "formik";
import React from "react";

interface CustomSelectProps {
  label?: string;
  name: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}

export const CustomSelectOption: React.FC<CustomSelectProps> = ({
  label,
  name,
  options,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm   2xl:text-3xl font-medium mb-1"
      >
        {label}
      </label>
      <Field
        as="select"
        name={name}
        id={name}
        className="w-full h-[46px]   2xl:h-[55px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 text-sm  2xl:text-2xl"
      >
        <option value="">
          {placeholder} {label}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500  2xl:text-2xl text-xs mt-1"
      />
    </div>
  );
};
