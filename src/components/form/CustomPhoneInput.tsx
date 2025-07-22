"use client";
import React from "react";
import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import { useField, useFormikContext } from "formik";
import "react-phone-number-input/style.css";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
}

export const CustomPhoneInput: React.FC<Props> = ({
  name,
  label,
  placeholder = "Enter your phone number",
}) => {
  const [field, meta, helpers] = useField(name);
  const { setFieldTouched } = useFormikContext();

  const handleChange = (value: string | undefined) => {
    helpers.setValue(value);
    setFieldTouched(name, true);
  };

  return (
    <div className="w-full mb-3">
      {label && (
        <label className="block  2xl:text-3xl text-gray-700 font-semibold mb-1">
          {label}
        </label>
      )}
      <PhoneInput
        international
        defaultCountry="US"
        value={field.value}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name, true)}
        placeholder={placeholder}
        className={`w-full  2xl:text-2xl  2xl:h-[55px] px-3 py-2 border rounded ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        }`}
        limitMaxLength={true}
      />
      {meta.touched && meta.error && (
        <div className="text-red-600 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};
