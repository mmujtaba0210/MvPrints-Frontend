"use client";
import React, { useState, useEffect } from "react";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { CustomInput } from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/formComponents/CustomButton";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import "react-phone-number-input/style.css";
import { CustomPhoneInput } from "@/components/form/CustomPhoneInput";
import { isValidPhoneNumber } from "react-phone-number-input";

export function SignUpForm() {
  const { register } = useAuth();
  const router = useRouter();
  const [formError, setFormError] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRules =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;

  const handleSubmit = async (
    values: any,
    { setSubmitting }: FormikHelpers<any>
  ) => {
    setFormError("");

    try {
      const response = await register(values);

      // If register throws a custom validation error
      if (response?.error) {
        setFormError(response.error);
        return;
      }
      router.push("/signin");
    } catch (error: any) {
      if (error.type === "validation") {
        const validationMessages = Object.values(error.errors).flat().join(" ");
        setFormError(validationMessages);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const message =
          error.response?.data?.message ||
          error.message ||
          "Registration failed";
        setFormError(message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        username: "",
        phone: "+1",
        pin: "",
        pin_confirmation: "",
        password: "",
        password_confirmation: "",
        // captchaCode: "",
        is_agree: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Please provide your full name"),
        email: Yup.string()
          .email("Invalid Email")
          .required("Please provide email address"),
        username: Yup.string().required("Please provide username"),
        phone: Yup.string()
          .required("Phone number is required")
          .test("is-valid-phone", "Phone number is invalid", function (value) {
            return isValidPhoneNumber(value || "");
          }),
        pin: Yup.string()
          .matches(/^\d{4,6}$/, "PIN must be 4 to 6 digits")
          .required("PIN is required"),
        pin_confirmation: Yup.string()
          .oneOf([Yup.ref("pin")], "PINs do not match")
          .required("Please confirm your PIN"),
        password: Yup.string()
          .matches(
            passwordRules,
            "Password must include uppercase, lowercase, number, special character, and be at least 8 characters"
          )
          .required("Please provide password"),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords do not match")
          .required("Please confirm your password"),
        // captcha: Yup.string().required("Captcha is required"),
        is_agree: Yup.boolean().oneOf(
          [true],
          "You must accept the terms and conditions"
        ),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full bg-white space-y-4">
          <div className="grid grid-cols-12 gap-4 justify-center items-center">
            <div className="col-span-12 md:col-span-6">
              <div
                className="bg-cover bg-center bg-no-repeat h-[100vh]"
                style={{ backgroundImage: "url(images/embroidaryDye.jpg)" }}
              ></div>
            </div>

            <div className="col-span-12 md:col-span-6 p-12">
              <div className="custom-box-shadow p-6 mx-auto rounded-lg border border-gray-300">
                <div className="text-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 bg-clip-text text-transparent  2xl:text-5xl">
                    Create a New Account
                  </h2>
                  <p className="my-3  2xl:text-3xl">
                    Already have an account? <Link href="/signin">Sign In</Link>
                  </p>
                </div>

                {formError && (
                  <div className="text-red-600 font-medium text-sm mb-2">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12">
                    <CustomInput
                      label="Full Name"
                      name="name"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <CustomInput
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <CustomPhoneInput
                      label="Phone Number"
                      name="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="col-span-12">
                    <CustomInput
                      label="Username"
                      name="username"
                      placeholder="Choose a username"
                    />
                  </div>

                  <div className="col-span-6">
                    <CustomInput
                      label="PIN"
                      name="pin"
                      placeholder="Enter a 4-6 digit PIN"
                      type={showPin ? "text" : "password"}
                      showToggleEye={true}
                      onToggleEye={() => setShowPin((prev) => !prev)}
                    />
                  </div>

                  <div className="col-span-6">
                    <CustomInput
                      label="Confirm PIN"
                      name="pin_confirmation"
                      placeholder="Confirm your PIN"
                      type={showConfirmPin ? "text" : "password"}
                      showToggleEye={true}
                      onToggleEye={() => setShowConfirmPin((prev) => !prev)}
                    />
                  </div>

                  <div className="col-span-12">
                    <CustomInput
                      label="Password"
                      name="password"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      showToggleEye={true}
                      onToggleEye={() => setShowPassword((prev) => !prev)}
                    />
                  </div>

                  <div className="col-span-12">
                    <CustomInput
                      label="Confirm Password"
                      name="password_confirmation"
                      placeholder="Confirm your password"
                      type={showConfirmPassword ? "text" : "password"}
                      showToggleEye={true}
                      onToggleEye={() =>
                        setShowConfirmPassword((prev) => !prev)
                      }
                    />
                  </div>
                  {/* 
                  <div className="col-span-12">
                    <div className="flex justify-center items-center mb-2">
                      <Image
                        src={captchaImg}
                        alt="captcha"
                        width={240}
                        height={140}
                      />
                    </div>
                    <CustomInput
                      name="captcha"
                      placeholder="Enter Captcha Code"
                    />
                  </div> */}

                  <div className="col-span-12">
                    <CustomInput
                      label="I confirm that I have read, understand and agree to the Terms and Conditions. Also, an SMS verification code will be sent to your phone number to complete your account registration. Message and data rates may apply."
                      name="is_agree"
                      type="checkbox"
                    />
                  </div>

                  <div className="col-span-12">
                    <button
                      type="submit"
                      className="bg-pink-600 p-3 w-full rounded-[8px] text-white font-bold disabled:opacity-50  2xl:text-2xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </button>
                  </div>

                  {/* Social Auth buttons could go here */}
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
