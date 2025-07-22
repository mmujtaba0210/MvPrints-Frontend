import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  otp?: boolean;
  showToggleEye?: boolean;
  onToggleEye?: () => void;
}

export const CustomInput: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  otp = false,
  showToggleEye = false,
  onToggleEye,
}) => {
  const isRadio = type === "radio";
  const isCheckbox = type === "checkbox";
  const isPassword = type === "password" || type === "text";

  return (
    <div
      className={`mb-2 ${
        isRadio || isCheckbox ? "flex items-center gap-2 justify-start" : ""
      }`}
    >
      {label && !isRadio && !isCheckbox && (
        <label
          htmlFor={name}
          className="block text-sm  2xl:text-3xl font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <Field
          id={name + (value ? `-${value}` : "")}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={
            isRadio
              ? "w-4 h-4 text-pink-500 border-gray-300 focus:ring-pink-500"
              : isCheckbox
              ? "w-4 h-4 text-pink-500 border-gray-300 focus:ring-pink-500"
              : `w-full h-[46px]  2xl:h-[55px]   2xl:text-2xl px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 text-sm`
          }
        />
        {showToggleEye && isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={onToggleEye}
            tabIndex={-1}
          >
            {type === "password" ? "👁️" : "🙈"}
          </button>
        )}
      </div>
      {label && (isRadio || isCheckbox) && (
        <label
          htmlFor={name + (value ? `-${value}` : "")}
          className="text-sm  2xl:text-2xl font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      {label && !isRadio && !isCheckbox && (
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500  2xl:text-2xl text-xs mt-1"
        />
      )}
    </div>
  );
};
