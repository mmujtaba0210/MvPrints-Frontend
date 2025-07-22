import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import {
  FiFacebook,
  FiHeadphones,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

const FooterSection = () => {
  return (
    <footer className=" md:flex ">
      {/* Contact Us */}
      <div className="md:col-span-2 md:w-[22vw] 2xl:w-[30vw] bg-[#252525] py-4  md:my-12 px-8">
        <h3 className="text-[20px] font-bold mb-2 text-white pb-2 ">
          CONTACT INFO
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FiPhone
              className="mt-1 2xl:text-3xl "
              fill="white"
              color="#252525"
            />
            <div>
              <p className="text-[15px] 2xl:text-[23px] font-black">
                (877) 853-3484
              </p>
              <p className="text-[15px] 2xl:text-[23px]  text-white">
                Mon - Fri: 8am - 8pm
              </p>
              <p className="text-[15px] 2xl:text-[23px]  text-white">
                Sat: 10am-6pm
              </p>
              <p className="text-[15px] 2xl:text-[23px]  text-white">
                Sun & Public Holidays: CLOSED
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FiMail
              className="mt-1 2xl:text-3xl"
              fill="white"
              color="#252525"
            />
            <div>
              <p className=" text-[15px] 2xl:text-[23px]  font-black">
                contact@mecarviprints.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FiHeadphones className="mt-1 2xl:text-3xl" />
            <div>
              <p className="text-[15px] 2xl:text-[23px]  font-black text-white">
                Chat With Us
              </p>
              <p className="text-[15px] 2xl:text-[23px]  text-white">
                24/7 Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-8 md:grid-cols-4 justify-center my-17  items-baseline w-full gap-8 2xl:gap-25 md:gap-3">
        {/* Company Section */}
        <div className=" w-fit">
          <h3 className="text-[20px] 2xl:text-3xl font-black mb-4 text-white pb-2">
            COMPANY
          </h3>
          <ul className="flex flex-col gap-2 2xl:text-[23px]  text-[#AAAAAA] text-[15px] font-normal">
            <Link href="/about">
              <li className="cursor-pointer hover:text-[#0096ff]">About Us</li>
            </Link>
            <Link href="/careers">
              <li className="cursor-pointer hover:text-[#0096ff]">Careers</li>
            </Link>
            <Link href="/scholarship">
              <li className="cursor-pointer hover:text-[#0096ff]">
                Scholarship
              </li>
            </Link>
            <Link href="/sponsorship">
              <li className="cursor-pointer hover:text-[#0096ff]">
                Sponsorship
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer hover:text-[#0096ff]">
                Mecarvi Cares
              </li>
            </Link>
          </ul>
        </div>

        {/* Policy Center Section */}
        <div className=" w-fit">
          <h3 className="text-[20px] 2xl:text-3xl font-black mb-4 text-white pb-2">
            POLICY CENTER
          </h3>
          <ul className="flex flex-col 2xl:text-[23px]  gap-2 text-[#AAAAAA] text-[15px] font-normal">
            <li className="cursor-pointer hover:text-[#0096ff]">
              Shipping Policy
            </li>
            <li className="cursor-pointer hover:text-[#0096ff]">
              Return & Refund Policy
            </li>
            <li className="cursor-pointer hover:text-[#0096ff]">
              Membership Policy
            </li>
            <li className="cursor-pointer hover:text-[#0096ff]">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-[#0096ff]">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Our Brands Section */}
        <div className="w-fit">
          <h3 className="text-[20px]  2xl:text-3xl font-black mb-4 text-white pb-2">
            OUR BRANDS
          </h3>
          <ul className="flex flex-col 2xl:text-[23px]  gap-2 text-[#AAAAAA] text-[15px] font-normal transition-all duration-500">
            <li className="cursor-pointer hover:text-[#0096ff]">Mecarvi</li>
            <li className="cursor-pointer hover:text-[#0096ff]">
              Mecarvi Signs
            </li>
            <li className="cursor-pointer hover:text-[#0096ff]">
              Mecarvi Technologies
            </li>
            <li className="cursor-pointer hover:text-[#0096ff]">
              Mecarvi Wear
            </li>
            <li className="cursor-pointer hover:text-[#0096ff]">
              Mecarvi Consulting
            </li>
          </ul>
        </div>
        {/* Social Media and Payment Section */}
        <div className=" w-full">
          <div className="flex flex-col gap-8 items-start">
            <div>
              <h3 className="text-[20px] 2xl:text-3xl font-black mb-2 text-white pb-2">
                SOCIAL LINKS
              </h3>
              <div className="flex flex-wrap space-x-4">
                <Link href="#">
                  <FiFacebook className="w-[30px] h-[30px] 2xl:size-[50px]  text-white" />
                </Link>
                <Link href="#">
                  <FiTwitter className="w-[30px] h-[30px] 2xl:size-[50px]  text-white" />
                </Link>
                <Link href="#">
                  <FiInstagram className="w-[30px] h-[30px] 2xl:size-[50px]  text-white" />
                </Link>
                <Link href="#">
                  <FiLinkedin className="w-[30px] h-[30px] 2xl:size-[50px]  text-white" />
                </Link>
                <Link href="#">
                  <FaTiktok className="w-[30px] h-[30px] 2xl:size-[50px]  text-white" />
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-[20px] 2xl:text-3xl font-black mb-2 text-white pb-2">
                PAYMENT METHODS
              </h3>
              <div className="flex space-x-4 flex-wrap">
                <Image
                  src="/images/cards/visa.jpg"
                  alt="Visa"
                  width={44}
                  height={30}
                  className="w-[44px] h-[30px]"
                />
                <Image
                  src="/images/cards/master.jpg"
                  alt="MasterCard"
                  width={44}
                  height={30}
                  className="w-[44px] h-[30px]"
                />
                <Image
                  src="/images/cards/discover.jpg"
                  alt="Discover"
                  width={44}
                  height={30}
                  className="w-[44px] h-[30px]"
                />
                <Image
                  src="/images/cards/american.jpg"
                  alt="American Express"
                  width={44}
                  height={30}
                  className="w-[44px] h-[30px]"
                />
                <Image
                  src="/images/cards/paypal.webp"
                  alt="PayPal"
                  width={44}
                  height={30}
                  className="w-[44px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
