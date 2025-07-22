"use client";
import React from "react";
import BreadCrumbSection from "../../components/BreadCrumbSection";
import JobDetails from "../../components/CareersSection/JobDetails";

export default function Job() {
  return (
    <>
      <BreadCrumbSection pageTitle="Career"></BreadCrumbSection>
      <div className="w-[80%] m-auto text-center px-24 mb-8">
        <p>
          With we want to optimize the customization process so your team can
          save time when building websites.
        </p>
      </div>
      <div>
        <JobDetails></JobDetails>
      </div>
    </>
  );
}
