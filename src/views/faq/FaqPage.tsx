import React from "react";
import BreadCrumbSection from "../components/BreadCrumbSection";
import FAQSection from "../components/FAQ/Faq";

export default function FAQ() {
  return (
    <>
      <BreadCrumbSection pageTitle="Frequently Asked Question"></BreadCrumbSection>
      <div className="mx-auto max-w-[390px] sd:max-w-[370px] 540:max-w-[480px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] xlfor32">
        <FAQSection></FAQSection>
      </div>
    </>
  );
}
