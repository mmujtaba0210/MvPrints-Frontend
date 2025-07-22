"use client";
import React, { useState, useEffect } from "react";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomInput } from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/formComponents/CustomButton";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface SignInFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function SignInForm() {
  const router = useRouter();
  const { login, setForgotToken, setForgotEmail } = useAuth();
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   setForgotToken(null)
  //   setForgotEmail(null)
  // }, []);

  const initialValues: SignInFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please provide email address"),
    password: Yup.string().required("Please provide password"),
    rememberMe: Yup.boolean(),
  });

  const handleSubmit = async (
    values: SignInFormValues,
    { setSubmitting }: FormikHelpers<SignInFormValues>
  ) => {
    setFormError(""); // Clear any existing error

    try {
      const credentials = {
        email: values.email,
        password: values.password,
      };

      const response = await login(credentials);

      if (response?.error) {
        setFormError(response.error);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      router.push("/dashboard");
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || "Login failed";
      setFormError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full bg-white space-y-4">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-[#ffffff99]">
              <div
                className="bg-cover bg-center bg-no-repeat h-[100vh]"
                style={{ backgroundImage: "url(images/embroidaryDye.jpg)" }}
              ></div>
            </div>
            <div className="col-span-12 md:col-span-6 p-12">
              <div className="custom-box-shadow p-6 mx-auto rounded-lg border border-gray-300">
                <div className="text-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 bg-clip-text text-transparent  2xl:text-5xl">
                    Welcome Back, Name
                  </h2>
                  <p className="my-3  2xl:text-3xl">
                    Do not have an account? <Link href="/signup"> Sign Up</Link>
                  </p>
                </div>
                {formError && (
                  <div className="bg-red-100 text-red-700 p-2 rounded-md mb-4 text-sm">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12">
                    <CustomInput
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
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
                    <div className="flex justify-between items-center">
                      <CustomInput
                        label="Remember me"
                        name="rememberMe"
                        type="checkbox"
                      />
                      <Link
                        href="/forgot-password"
                        className="underline  2xl:text-2xl text-pink-600"
                      >
                        Forget password
                      </Link>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-pink-600 p-3 w-[40%] rounded-[8px] text-white font-bold disabled:opacity-50  2xl:text-2xl"
                    >
                      {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                  </div>

                  {/* Optional Social Login Section */}
                  {/*
                  <div className='col-span-12'>
                    <div className='w-full flex gap-2 items-center text-gray-300 my-2'>
                      <hr className='w-full' />
                      <h3>OR</h3>
                      <hr className='w-full' />
                    </div>
                  </div>
                  <div className='col-span-12'>
                    <CustomButton 
                      label="SignIn Via Google" 
                      icon={<FontAwesomeIcon icon={faGoogle} className="text-pink-500 h-5 w-5" />} 
                      bgColor="bg-white" 
                      textColor="text-black" 
                      borderColor="border-gray-300" 
                    />
                  </div>
                  <div className='col-span-12'>
                    <CustomButton 
                      label="SignIn Via Facebook" 
                      icon={<FontAwesomeIcon icon={faFacebook} className="text-pink-500 h-5 w-5" />} 
                      bgColor="bg-white" 
                      textColor="text-black" 
                      borderColor="border-gray-300" 
                    />
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
