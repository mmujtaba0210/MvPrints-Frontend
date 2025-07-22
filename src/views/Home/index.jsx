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
      <div className=" mx-auto max-w-[350px] sd:max-w-[370px] 540:max-w-[480px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] xlfor32 ">
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
        {/* Mecarvi Gold section
        <section className="flex py-10 bg-[#efefef]">
          <div className='w-[50%] h-[500px]'>
            <img src='/images/DigitizingBanner.png' alt='' className='w-[77%]' />  
          </div>  
          <div className='w-[50%] h-[500px]'>
              <div className="container mx-auto px-4 py-10 text-center">
                <h2 className="text-3xl font-bold mb-4">Introducing Mecarvi Gold</h2>
                <p className="text-lg mb-6">
                  Empower your business with the Mecarvi Gold Card — the ultimate financial tool designed to help you grow, save, and succeed. Our exclusive card offers unparalleled benefits tailored to meet the needs of modern businesses.
                </p>
                <ul className="text-left mx-auto mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Earn Triple Rewards Points
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Build Business Credit
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Free Expedited Shipping
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Exclusive Discounts and Offers
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Flexible Payment Options
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Employee Card Benefits
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> No Hidden Fees
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Dedicated Customer Support
                  </li>
                </ul>
                <button className="bg-[#008cff] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0096ff] transition-colors">
                  Learn More
                </button>
              </div>
          </div>  
        </section> */}
      </div>
    </>
  );
};

export default HomePage;
