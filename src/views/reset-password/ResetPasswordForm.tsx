'use client';

import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CustomInput } from '@/components/formComponents/CustomInput';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export function ResetPasswordForm() {
  const { resetPassword, forgotEmail, forgotToken } = useAuth();
  const router = useRouter();

  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [verificationData, setVerificationData] = useState({ email: '', token: '' });

  useEffect(() => {

      console.log("forgotEmail")
      console.log(forgotEmail)
      console.log("forgotToken")
      console.log(forgotToken)

    setVerificationData(prev => ({
      ...prev,
      email: forgotEmail,
      token: forgotToken
    }));
  }, [forgotEmail, forgotToken]);

  const passwordRules =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(
        passwordRules,
        'Password must include uppercase, lowercase, number, special character, and be at least 8 characters'
      )
      .required('Password is required'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Please confirm your password'),
  });

  const initialValues = {
    password: '',
    password_confirmation: '',
  };

  const handleSubmit = async (values: any) => {
    setSubmitError('');
    setLoading(true);
    try {

      const payload = {
        ...verificationData,
        ...values,
      };
      console.log(payload)
      const response = await resetPassword(payload);

      if (response?.success) {
        router.push('/signin');
      } else {
        setSubmitError(response?.error || response?.message || 'Something went wrong.');
      }
    } catch (error: any) {
      if (error?.type === 'validation' && error.errors) {
        const validationMessages = Object.values(error.errors).flat().join(' ');
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
            <div className="col-span-12 md:col-span-6">
              <div
                className="bg-cover bg-center bg-no-repeat h-[100vh]"
                style={{ backgroundImage: 'url(/images/auth-creative.png)' }}
              ></div>
            </div>

            <div className="col-span-12 md:col-span-6 p-12">
              <div className="custom-box-shadow p-6 mx-auto rounded-lg border border-gray-300">
                <div className="text-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Reset Your Password
                  </h2>
                  <p className="my-3 text-sm">
                    Please enter a new password for your account below.
                  </p>
                </div>

                {submitError && (
                  <div className="text-red-600 text-sm mb-4 text-center">{submitError}</div>
                )}

                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12 relative">
                    <CustomInput
                      label="New Password"
                      name="password"
                      placeholder="Enter new password"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <span
                      className="absolute right-4 top-10 cursor-pointer text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>

                  <div className="col-span-12 relative">
                    <CustomInput
                      label="Confirm Password"
                      name="password_confirmation"
                      placeholder="Confirm your new password"
                      type={showConfirmPassword ? 'text' : 'password'}
                    />
                    <span
                      className="absolute right-4 top-10 cursor-pointer text-gray-500"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>

                  <div className="col-span-12">
                    <button
                      type="submit"
                      className="bg-pink-600 p-3 w-full rounded-[8px] text-white font-bold cursor-pointer disabled:opacity-50"
                      disabled={loading}
                    >
                      {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                  </div>

                  <div className="col-span-12 text-center">
                    <h3 className="text-gray-400">
                      Return to{' '}
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
