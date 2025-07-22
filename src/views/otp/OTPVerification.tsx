'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { useAuth } from '@/context/AuthContext';

export function OTPVerification() {
    const router = useRouter();
    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);
    const { verifyForgotOtp, forgotEmail, forgotToken } = useAuth();
    const [verificationData, setVerificationData] = useState({ email: '', token: '' });


    useEffect(() => {
        setVerificationData(prev => ({
            ...prev,
            email: forgotEmail,
            token: forgotToken
        }));
    }, [forgotEmail, forgotToken]);

    const inputRefs = useRef(Array.from({ length: 6 }, () => React.createRef<HTMLInputElement>()));

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, setFieldValue: any) => {
        const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
        setFieldValue(`digit${index + 1}`, value);

        if (value && index < 5) {
            inputRefs.current[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputRefs.current[index - 1].current?.focus();
        }
    };

    const handleSubmit = async (values: any) => {
        setSubmitError('');
        setLoading(true);
        try {
            const otp = Object.values(values).join('');
            const payload = {
                ...verificationData,
                otp: otp,
            };
            const response = await verifyForgotOtp({ ...payload });
            console.log("response")

            if (response?.success) {
                router.push('/reset-password');
            } else if (response?.error || response?.message) {
                const message = response.error || response.message
                setSubmitError(message);
                window.scrollTo({ top: 0, behavior: 'smooth' });

            } else {
                setSubmitError('Something went wrong.');
            }
        } catch (error: any) {
            if (error?.type === 'validation' && error.errors) {
                const validationMessages = Object.values(error.errors).flat().join(' ');
                console.log(validationMessages)
                console.log("validationMessages")
                setSubmitError(validationMessages);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const message =
                    error?.response?.data?.message || error?.message || 'Unexpected error occurred.';
                console.log(message)
                console.log("message")
                setSubmitError(message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Formik
            initialValues={{
                digit1: '',
                digit2: '',
                digit3: '',
                digit4: '',
                digit5: '',
                digit6: '',
            }}
            validationSchema={Yup.object({
                digit1: Yup.string().required('Required'),
                digit2: Yup.string().required('Required'),
                digit3: Yup.string().required('Required'),
                digit4: Yup.string().required('Required'),
                digit5: Yup.string().required('Required'),
                digit6: Yup.string().required('Required'),
            })}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue }) => (
                <Form className="w-full bg-white space-y-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-12 md:col-span-6">
                            <div
                                className="bg-cover bg-center bg-no-repeat h-[100vh]"
                                style={{ backgroundImage: 'url(images/embroidaryDye.jpg)' }}
                            ></div>
                        </div>
                        <div className="col-span-12 md:col-span-6 p-12">
                            <div className="custom-box-shadow p-6 mx-auto rounded-lg border border-gray-300">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                        OTP Verification
                                    </h2>
                                    <p className="my-3">
                                        We&apos;ve sent a code to <a className="font-bold"> {forgotEmail ?? ''}</a>
                                    </p>
                                    {submitError && (
                                        <div className="text-red-600 font-semibold text-sm">{submitError}</div>
                                    )}
                                </div>

                                <div className="grid grid-cols-12 gap-3 mt-4">
                                    {Array.from({ length: 6 }, (_, i) => (
                                        <div
                                            key={i}
                                            className="col-span-2 md:col-span-2 lg:col-span-2 text-center"
                                        >
                                            <Field name={`digit${i + 1}`}>
                                                {({ field }: any) => (
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        maxLength={1}
                                                        ref={inputRefs.current[i]}
                                                        className="border border-gray-300 rounded text-center w-full h-12 text-xl"
                                                        onChange={(e) => handleOtpChange(e, i, setFieldValue)}
                                                        onKeyDown={(e) => handleKeyDown(e, i)}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                    ))}

                                    <div className="col-span-12">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="bg-pink-600 p-3 w-full rounded-[8px] text-white font-bold"
                                        >
                                            {loading ? 'Verifying...' : 'Reset Password'}
                                        </button>
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
