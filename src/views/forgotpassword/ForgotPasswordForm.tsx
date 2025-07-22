'use client';

import React, { useState } from 'react';
import { CustomInput } from '@/components/formComponents/CustomInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export function ForgotPasswordForm() {
  const router = useRouter();
  const { forgotPassword } = useAuth();
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    username: Yup.string().required('Username is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    username: '',
  };

  const handleSubmit = async (values: any) => {
    setSubmitError('');
    setLoading(true);
    try {
      const response = await forgotPassword(values);

      if (response?.success) {
        router.push('/otp');
      } else if (response?.error || response?.message) {
        setSubmitError(response.error || response.message);
      } else {
        setSubmitError('Something went wrong.');
      }
    } catch (error: any) {
      if (error?.type === 'validation' && error.errors) {
        const validationMessages = Object.values(error.errors)
          .flat()
          .join(' ');
        setSubmitError(validationMessages);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const message =
          error?.response?.data?.message || error?.message || 'Unexpected error occurred.';
        setSubmitError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="w-full bg-white space-y-4">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <div
                className="bg-cover bg-center bg-no-repeat h-[100vh]"
                style={{ backgroundImage: 'url(images/embroidaryDye.jpg)' }}
              ></div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6 p-12">
              <div className="custom-box-shadow p-6 mx-auto rounded-lg border border-gray-300">
                <div className="text-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Forgot Password?
                  </h2>
                  <p className="my-3 text-sm">
                    Please enter your personal information associated with your account to reset your password.
                    If you no longer have access to your email, please contact customer service for assistance.
                  </p>
                </div>

                {submitError && (
                  <div className="text-red-600 text-sm mb-4 text-center">
                    {submitError}
                  </div>
                )}

                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12">
                    <CustomInput
                      label="Name"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
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
                      label="Username"
                      name="username"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div className="col-span-12">
                    <button
                      type="submit"
                      className="bg-pink-600 p-3 w-full rounded-[8px] text-white font-bold cursor-pointer disabled:opacity-50"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Reset Password'}
                    </button>
                  </div>

                  <div className="col-span-12 text-center">
                    <h3 className="text-gray-400">
                      Return to the{' '}
                      <Link href="/signin">
                        <span className="text-blue-600 hover:underline">
                          Sign In <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
