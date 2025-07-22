"use client";
import React from "react";
import BreadCrumbSection from "../components/BreadCrumbSection";
import Benefits from "../components/CareersSection/Benefits";
import CareerFAQ from "../components/CareersSection/CareerFAQ";
import CareerForm from "../components/CareersSection/CareerForm";
import FeaturedJobs from "../components/CareersSection/FeaturedJobs";
import StartCareer from "../components/CareersSection/StartCareer";
import Steps from "../components/CareersSection/Steps";
import UploadResume from "../components/CareersSection/UploadResume";

export default function Careers() {
  return (
    <>
      <BreadCrumbSection pageTitle="Career"></BreadCrumbSection>

      <div className="w-full  text-center mt-12 mb-8 mx-auto max-w-[290px] [420]:max-w-[370px]  540:max-w-[480px]  sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1250px] xlfor32">
        <p className=" 2xl:text-2xl">
          With we want to optimize the customization process so your team can
          save time when building websites.
        </p>
      </div>
      <div className="mx-auto  max-w-[290px] sd:max-w-[370px] 540:max-w-[480px]  sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1250px] xlfor32">
        <StartCareer></StartCareer>
        <Benefits></Benefits>
        <Steps></Steps>
        <FeaturedJobs></FeaturedJobs>
        <CareerFAQ></CareerFAQ>
        <UploadResume></UploadResume>
        <CareerForm></CareerForm>
      </div>
    </>
  );
}
