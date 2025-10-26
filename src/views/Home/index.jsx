"use client";

import DynamicCard from "@/components/DynamicCard";
import DynamicChoice from "@/components/DynamicChoice";
import TestimonialCard from "@/components/testimonialCard";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import ProductShowcase from "@/components/ProductShowcase";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React from "react";
import ProductSection from "./sections/ProductSection";
import Banner from "./sections/Banner";
import Services from "./sections/Services";
import ChoiceSection from "./sections/ChoiceSection";
import VideoSection from "./sections/VideoSection";
import ProgressTimeLine from "./sections/ProgressTimeLine";
import MobileApp from "./sections/MobileApp";
import CompaniesTrust from "./sections/CompaniesTrust";
import Testimonial from "./sections/Testimonial";
import LandingPage from "./sections/LandingPage";

const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* landing page */}
      <LandingPage />
      <div className=" mx-auto max-w-[350px] sd:max-w-[370px] 540:max-w-[480px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1240px] xlfor32 ">
        {/* Featured Products Section */}

        <ProductSection />
        {/* Banners */}
        <Banner />

        {/* Service Section */}
        <Services />

        {/* Choice Section */}

        <ChoiceSection />
        {/* Video Section */}
        <VideoSection />

        {/* Process Timeline Section */}
        <ProgressTimeLine />

        {/* Testimonials Section */}

        <Testimonial />
        {/* Companies Trust */}
        <CompaniesTrust />

        {/* Mobile App Section */}
        <MobileApp />
      </div>
    </>
  );
};

export default HomePage;
