import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { Formik, Form, FormikValues } from "formik";

import * as Yup from "yup";
import { CustomInput } from "@/components/formComponents/CustomInput";
import { CustomSelectOption } from "@/components/formComponents/CustomSelectOption";
import { CustomTextarea } from "@/components/formComponents/CustomTextArea";

const steps = ["Company Info", "Event Details", "Sponsorship Details"];

const validationSchemas = [
  Yup.object({
    companyName: Yup.string().required("Please enter company name"),
    responsiblePerson: Yup.string().required(
      "Please enter responsible person name"
    ),
    title: Yup.string().required("Please enter title"),
    mailingAddress: Yup.string().required("Please enter mailing address"),
    phone: Yup.string().required("Please enter phone"),
    email: Yup.string().required("Please enter email"),
    state: Yup.string().required("Please enter state"),
    isCompanyRegistered: Yup.string().required("Please enter company name"),
    organizationStaringDate: Yup.string().required(
      "Please select date company starting date"
    ),
  }),
  // /////////////////////////////////////////////////////////////// Event
  Yup.object({
    eventName: Yup.string().required("Please enter event name"),
    eventAddress: Yup.string().required("Please enter event address"),
    eventDate: Yup.date().required("Please select event date"),
    eventTime: Yup.string().required("Please seelct event time"),
    eventObjective: Yup.string().required("Please provide event objective"),
    contribution: Yup.string().required("Please provide event contribution"),
    audience: Yup.string().required("Please provide event targeted audience"),
  }),

  // /////////////////////////////////////////////////////////////// Sponsorship
  Yup.object({
    mecarviBenefit: Yup.string().required(
      "Please provide details about sponsorship's benefit to mecarvi"
    ),
    communityBenefit: Yup.string().required(
      "Please provide details about sponsorship's benefit to community"
    ),
    cashAmount: Yup.number().required("Requested Dollar Amount is required"),
    sponsorshipCategory: Yup.string().required(
      "Sponsorship Category is required"
    ),
    logoPlacement: Yup.string().required("Logo Placement is required"),
    expectedAttendees: Yup.number().required("Expected Attendees is required"),
  }),
];

export const statesList = [
  { value: "", label: "Select the state" },
  { value: "Alabama", label: "Alabama" },
  { value: "Alaska", label: "Alaska" },
  { value: "Arizona", label: "Arizona" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "California", label: "California" },
  { value: "Colorado", label: "Colorado" },
  { value: "Connecticut", label: "Connecticut" },
  { value: "Delaware", label: "Delaware" },
  { value: "Florida", label: "Florida" },
  { value: "Georgia", label: "Georgia" },
  { value: "Hawaii", label: "Hawaii" },
  { value: "Idaho", label: "Idaho" },
  { value: "Illinois", label: "Illinois" },
  { value: "Indiana", label: "Indiana" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Maine", label: "Maine" },
  { value: "Maryland", label: "Maryland" },
  { value: "Massachusetts", label: "Massachusetts" },
  { value: "Michigan", label: "Michigan" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "Nevada", label: "Nevada" },
  { value: "New Hampshire", label: "New Hampshire" },
  { value: "New Jersey", label: "New Jersey" },
  { value: "New Mexico", label: "New Mexico" },
  { value: "New York", label: "New York" },
  { value: "North Carolina", label: "North Carolina" },
  { value: "North Dakota", label: "North Dakota" },
  { value: "Ohio", label: "Ohio" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "Oregon", label: "Oregon" },
  { value: "Pennsylvania", label: "Pennsylvania" },
  { value: "Rhode Island", label: "Rhode Island" },
  { value: "South Carolina", label: "South Carolina" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Texas", label: "Texas" },
  { value: "Utah", label: "Utah" },
  { value: "Vermont", label: "Vermont" },
  { value: "Virginia", label: "Virginia" },
  { value: "Washington", label: "Washington" },
  { value: "West Virginia", label: "West Virginia" },
  { value: "Wisconsin", label: "Wisconsin" },
  { value: "Wyoming", label: "Wyoming" },
];

export const organizationStatus = [
  { value: "non-profit", label: "Non-Profit (501c3)" },
  { value: "for-profit", label: "For-Profit " },
];
export const eventType = [
  { value: "Concerts", label: "Concerts" },
  { value: "Walks-5K-Run", label: "Walks/5K Run" },
  { value: "Expo-Tradeshow-Fair", label: "Expo/Tradeshow/Fair" },
  { value: "Gala-Dinners", label: "Gala/Dinners" },
  { value: "Other", label: "Other" },
];
export const booleanOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const SponsorshipForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    companyName: "",
    responsiblePerson: "",
    title: "",
    phone: "",
    mailingAddress: "",
    email: "",
    state: "",
    isCompanyRegistered: "",
    organizationStaringDate: "",
    // ------------------- Event -----------------
    eventName: "",
    eventAddress: "",
    eventDate: "",
    eventTime: "",
    eventObjective: "",
    contribution: "",
    audience: "",
    // ---------- Sponsorship ---------------
    mecarviBenefit: "",
    communityBenefit: "",
    cashAmount: "",
    sponsorshipCategory: "",
    logoPlacement: "",
    expectedAttendees: "",
  });

  const handleNext = (values: FormikValues) => {
    setFormData((prev) => ({ ...prev, ...values }));
    setActiveStep((prev) => prev + 1);
  };

  const handleSubmit = (values: FormikValues) => {
    console.log("Final Form Data:", { ...formData, ...values });
    alert("Form submitted successfully!");
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <>
      <div className=" shadow-lg sponsorship-form-section py-12 rounded-[12px]">
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className="mb-6  2xl:text-3xl"
        >
          {steps.map((label) => (
            <Step key={label} className=" 2xl:text-3xl">
              <StepLabel className=" 2xl:text-3xl">{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep < steps.length ? (
          <Formik
            initialValues={formData}
            validationSchema={validationSchemas[activeStep]}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={(values) => {
              if (activeStep === steps.length - 1) {
                handleSubmit(values);
              } else {
                handleNext(values);
              }
            }}
          >
            {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
              <Form className="px-4">
                {activeStep === 0 && (
                  <>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="companyName"
                          label="Organization/Company Name:"
                          placeholder="Company name"
                        />
                      </div>

                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="taxId"
                          label="Federal Tax ID#:"
                          placeholder="Tax Id"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="responsiblePerson"
                          label="Full Name of Responsible Person:"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="title"
                          label="Title of Responsible Person:"
                          placeholder="Title"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="mailingAddress"
                          label="Mailing Address:"
                          placeholder="example@gmil.com"
                          type="email"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="phone"
                          label="Phone:"
                          placeholder="+1 234 456 789"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="fax"
                          label="Fax:"
                          placeholder="Fax #"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="email"
                          label="Email:"
                          placeholder="example@gmail.com"
                          type="email"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="website"
                          label="Website:"
                          placeholder="https://website.com"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="socialMediaLinks1"
                          label="Social Media links(Facebook/Tiktok):"
                          placeholder="Social Media links(Facebook/Instagram/Pinterest/Tiktok):"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="socialMediaLinks2"
                          label="Social Media links(Twitter/Linkedin/YouTube):"
                          placeholder="Social Media links(Twitter/Linkedin/YouTube ):"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="organization"
                          label="Is your company/organization US Based?"
                          placeholder="Is your company/organization US Based?"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomSelectOption
                          name="state"
                          label="Select State"
                          options={statesList}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="isCompanyRegistered"
                          label="If No, what country are you registered and operating in?"
                          placeholder="If No, what country are you registered and operating in?"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomSelectOption
                          name="organizationStatus"
                          label="Select State"
                          options={organizationStatus}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="organizationStaringDate"
                          label="When did your company/organization started?"
                          type="date"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 1: Event Details */}
                {activeStep === 1 && (
                  <>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="eventName"
                          label="Event Name:"
                          placeholder="Event Name"
                        />
                      </div>

                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="eventAddress"
                          label="Event Address:"
                          placeholder="Event Address:"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="eventDate"
                          label="Event Date:"
                          // placeholder="Event Date:"
                          type="date"
                        />
                      </div>
                      {/* title */}
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="eventTime"
                          label="Event Time:"
                          // placeholder="Title"
                          type="time"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomSelectOption
                          name="eventType"
                          label="Type of Event"
                          options={eventType}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomTextarea
                          name="eventObjective"
                          label="Purpose/Objective of Event:"
                          placeholder="Purpose/Objective of Event..."
                          rows={3}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomTextarea
                          name="contribution"
                          label="Purpose of Contribution:"
                          placeholder="Purpose of Contribution..."
                          rows={3}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomTextarea
                          name="audience"
                          label="What is your target audience?"
                          placeholder="What is your target audience..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Sponsorship Details */}
                {activeStep === 2 && (
                  <>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomTextarea
                          name="mecarviBenefit"
                          label="How will this sponsorship benefit Mecarvi Prints?"
                          placeholder="How will this sponsorship benefit Mecarvi Prints..."
                          rows={3}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomTextarea
                          name="communityBenefit"
                          label="How will the community benefit from this event?"
                          placeholder="How will the community benefit from this event..."
                          rows={3}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomSelectOption
                          name="competitor"
                          label="Are there any other companies sponsoring this event that is a direct competitor to Mecarvi Prints?"
                          options={booleanOptions}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="hasCompetitor"
                          label="If Yes, Please list company name"
                          placeholder="If Yes, Please list company name"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomSelectOption
                          name="isDonationReceived"
                          label="Have you received donations from mecarvi prints in the last 5 years?"
                          options={booleanOptions}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="donationReceivedTime"
                          label="If yes, when?"
                          placeholder="If yes, when?"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomSelectOption
                          name="sponsorshipcategory"
                          label="Sponsorship Category:"
                          options={booleanOptions}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="cashAmount"
                          label="Cash: Requested Dollar amount:"
                          placeholder="$1000"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="list"
                          label="In Kind-Donation: List Request:"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="deadline"
                          label="Sponsorship Deadline:"
                          type="date"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="attendees"
                          label="Expected number of attendees?"
                          placeholder="1500"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="logo"
                          label="Logo/ad placement on website:"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>Facebook</label>
                            <CustomInput name="facebook" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>Twitter</label>
                            <CustomInput name="twitter" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>Instagram</label>
                            <CustomInput name="instagram" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>Tiktok</label>
                            <CustomInput name="tiktok" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>Youtube</label>
                            <CustomInput name="youtube" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>Linkedin</label>
                            <CustomInput name="linkedin" type="checkbox" />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomSelectOption
                          name="logoPlacement"
                          label="Logo/ad placement print marketing material:"
                          options={booleanOptions}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomSelectOption
                          name="eventExhibition"
                          label="Does the sponsorship opportunity include exhibiting at the event?"
                          options={booleanOptions}
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="answer"
                          label="If Yes, what is the booth size?"
                        />
                      </div>

                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="addSubmission"
                          label="What is the ad submission deadline?"
                          type="date"
                        />
                      </div>

                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomInput
                          name="addDimension"
                          label="What is the ad dimension? e.g. 4x6, 8.5x11?"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>.pdf</label>
                            <CustomInput name="pdf" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>.psd</label>
                            <CustomInput name="psd" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>.jpeg</label>
                            <CustomInput name="jpeg" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>Ai</label>
                            <CustomInput name="ai" type="checkbox" />
                          </div>
                          <div className="col-span-12 lg:col-span-2 md:col-span-2">
                            <label>.png</label>
                            <CustomInput name="png" type="checkbox" />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-6 md:col-span-6">
                        <CustomTextarea
                          name="additionalComment"
                          label="Additional Comments:"
                          placeholder="Write something."
                          rows={3}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="d-flex  2xl:text-3xl justify-content-between mt-3">
                  {activeStep > 0 && (
                    <Button
                      variant="contained"
                      onClick={handleBack}
                      className=" 2xl:text-3xl"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    type="submit"
                    className=" 2xl:text-3xl"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <h3 className="text-center">Form submitted successfully!</h3>
        )}
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default SponsorshipForm;
