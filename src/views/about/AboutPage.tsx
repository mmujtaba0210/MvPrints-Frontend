"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import AboutCompany from "../components/AboutUsSection/AboutCompany";
import CoreValueText from "../components/AboutUsSection/CoreValueText";
import CoreValuePoint from "../components/AboutUsSection/CoreVauePoint";
import MissionSection from "../components/AboutUsSection/MissionSection";
import AboutFounder from "../components/AboutUsSection/AboutFounder";
import BreadCrumbSection from "../components/BreadCrumbSection";
import Header from "../components/Header";
import Layout from "@/components/layouts/Layout";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Layout>
      <BreadCrumbSection pageTitle="About Us" />
      <main className="mx-auto max-w-[290px] sd:max-w-[370px] 540:max-w-[480px]  sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1250px] xlfor32">
        <div data-aos="fade-right">
          <AboutFounder />
        </div>
        <div data-aos="fade-left">
          <AboutCompany />
        </div>
        <div data-aos="fade-up">
          <MissionSection />
        </div>
        <div data-aos="fade-up">
          <CoreValueText />
        </div>
        <div data-aos="fade-up" className="mb-4">
          <CoreValuePoint />
        </div>
      </main>
    </Layout>
  );
}
