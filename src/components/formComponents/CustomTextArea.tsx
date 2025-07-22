"use client";

import { Field, ErrorMessage } from "formik";
import React from "react";

interface CustomTextareaProps {
  label?: string;
  name: string;
  placeholder?: string;
  rows?: number;
}

export const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  name,
  placeholder,
  rows = 4,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block  2xl:text-3xl text-sm font-medium">
        {label}
      </label>
      <Field
        as="textarea"
        name={name}
        id={name}
        placeholder={placeholder}
        rows={rows}
        className="w-full  2xl:text-2xl p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 text-[12px]"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500  2xl:text-2xl text-xs mt-1"
      />
    </div>
  );
};
