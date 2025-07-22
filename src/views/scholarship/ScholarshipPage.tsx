"use client";
import React from "react";
import BreadCrumbSection from "../components/BreadCrumbSection";
import EligibilityCriteria from "../components/Scholarship/EligibilityCriteria";
import Instructions from "../components/Scholarship/Instruction";
import ScholarshipGuideline from "../components/Scholarship/ScholarshipGuideline";
import ApplicationRequirements from "../components/Scholarship/ApplicationRequirements";

export default function Sponsorship() {
  return (
    <>
      <BreadCrumbSection pageTitle="Scholarship"></BreadCrumbSection>

      <main className="mx-auto max-w-[390px] sd:max-w-[370px] 540:max-w-[480px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] xlfor32">
        <div className="text-center mb-8">
          <p className=" 2xl:text-2xl">
            Thank you for your interest in applying for the Mecarvi Scholarship.
            We are intrigued that you are interested in furthering your
            education and we&apos;re here to help. Mecarvi Holding Corporation
            is proud to offer qualified students an academic scholarship to
            their desired accredited college or university for the 2023-2024
            academic school year. The scholarship award is solely based upon
            students who demonstrate exceptional academic achievements and wants
            to pursue an Associate or Undergraduate Degree.
          </p>
        </div>

        <EligibilityCriteria></EligibilityCriteria>
        <ApplicationRequirements></ApplicationRequirements>
        <ScholarshipGuideline></ScholarshipGuideline>
        <Instructions></Instructions>
      </main>
    </>
  );
}
