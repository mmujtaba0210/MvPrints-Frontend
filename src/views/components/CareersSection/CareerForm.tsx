"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";
import "aos/dist/aos.css";
import { Form, Formik } from "formik";
import { CustomInput } from "@/components/formComponents/CustomInput";
import { CustomSelectOption } from "@/components/formComponents/CustomSelectOption";
import { CustomTextarea } from "@/components/formComponents/CustomTextArea";
import * as Yup from "yup";
import { FiMail } from "react-icons/fi";

const interestedPostions = [
  { value: "Morning", label: "Morning 8am-12pm" },
  { value: "Afternoon", label: "Afternoon 12pm-4pm" },
  { value: "Evening", label: "Evening 4pm-8pm" },
  { value: "Anytime", label: "Anytime" },
];

const positionType = [
  { value: "design", label: "Design" },
  { value: "print", label: "Print" },
  { value: "installation", label: "Installation" },
];

const CareerForm = () => {
  return (
    <div className="w-full  py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-6 space-y-6 ">
          <h3 className="text-lg sm:text-xl text-blue-500  2xl:text-3xl">
            Quick Support
          </h3>
          <p className="text-2xl  2xl:text-5xl sm:text-3xl font-bold leading-snug">
            Get in Touch Today!
          </p>
          <p className="text-sm sm:text-base text-gray-600  2xl:text-2xl">
            Proactively deliver seamless core competencies with scalable.
            Completely fabricate transparent paradigms.
          </p>

          <div className="grid grid-cols-1  2xl:mt-8 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-center items-center p-4 rounded-md bg-blue-200 w-12  2xl:w-24">
                <FaPhone className="text-blue-800 text-lg  2xl:text-3xl rotate-90" />
              </div>
              <h4 className="font-bold  2xl:mt-8 text-lg sm:text-xl  2xl:text-3xl">
                Call Us
              </h4>
              <p className="text-sm text-gray-600  2xl:text-2xl">
                Questions about our product or pricing? Call for support
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-center items-center p-4 rounded-md bg-pink-200 w-12 2xl:w-24">
                <FiMail
                  fill="pink"
                  className="text-pink-800 text-lg  2xl:text-3xl"
                />
              </div>
              <h4 className="font-bold  2xl:mt-8 text-lg sm:text-xl  2xl:text-3xl">
                Email Us
              </h4>
              <p className="text-sm text-gray-600  2xl:text-2xl">
                Our support will help you from{" "}
                <span className="font-bold">9am to 5pm EST...</span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 shadow-lg p-6 sm:p-8 rounded-lg bg-white">
          <h3 className="text-lg sm:text-xl font-semibold mb-6  2xl:text-3xl">
            Fill out the form and we will be in touch as soon as possible.
          </h3>

          <Formik
            initialValues={{
              businessName: "",
              email: "",
              phone: "",
              location: "",
              msg: "",
              inquiryReason: "",
              position: "",
              remmebr: false,
            }}
            validationSchema={Yup.object({
              businessName: Yup.string().required(
                "Please provide business name"
              ),
              email: Yup.string()
                .email("Invalid Email")
                .required("Please provide email address"),
              phone: Yup.string().required("Please provide phone number"),
              location: Yup.string().required("Please provide job location"),
              msg: Yup.string().required("Please provide your message"),
              inquiryReason: Yup.string().required(
                "Please select preferred contact method"
              ),
              position: Yup.string().required(
                "Please select best time to contact"
              ),
            })}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CustomInput
                    name="businessName"
                    type="text"
                    placeholder="Name"
                  />
                  <CustomInput name="email" type="email" placeholder="Email" />
                  <CustomInput name="phone" placeholder="Phone" />
                  <CustomInput name="location" placeholder="Job Location" />
                  <CustomSelectOption
                    name="inquiryReason"
                    placeholder="Preferred Contact Method"
                    options={interestedPostions}
                  />
                  <CustomSelectOption
                    name="position"
                    placeholder="Best Time to Contact You"
                    options={positionType}
                  />
                </div>

                <div className="mt-4">
                  <CustomTextarea
                    name="msg"
                    placeholder="Tell us more about your project, needs and budget"
                    rows={5}
                  />
                </div>

                <div className="mt-4">
                  <CustomInput
                    name="remmebr"
                    type="checkbox"
                    label="Yes, I would like to receive occasional marketing emails from us. I have the right to opt out at any time. View privacy policy."
                  />
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="w-full  2xl:text-3xl  2xl:w-[50%] mx-auto bg-pink-500 text-white font-bold py-2 px-6 rounded-md hover:bg-pink-600 transition-all"
                  >
                    Get Started
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
