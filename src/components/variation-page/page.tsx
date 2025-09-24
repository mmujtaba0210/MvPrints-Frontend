"use client";
import React from "react";
import { data } from "./components/productBox";

const VariationPage = () => {
  return (
    <main className=" overflow-y-auto shadow-2xl lg:flex rounded-2xl  lg:gap-6   mx-auto p-5">
      {/* //section 1 */}
      <section>
        <div>
          <h1 className="font-bold text-lg lg:text-2xl">Leaflets & Flyers</h1>
          <div className="flex items-center gap-2 mt-3  lg:mt-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00002 9.00002C3.00002 7.40872 3.63216 5.8826 4.75738 4.75738C5.8826 3.63216 7.40872 3.00002 9.00002 3.00002C10.5913 3.00002 12.1174 3.63216 13.2427 4.75738C14.3679 5.8826 15 7.40872 15 9.00002C15 10.5913 14.3679 12.1174 13.2427 13.2427C12.1174 14.3679 10.5913 15 9.00002 15C7.40872 15 5.8826 14.3679 4.75738 13.2427C3.63216 12.1174 3.00002 10.5913 3.00002 9.00002ZM9.00002 10.5C8.6022 10.5 8.22067 10.342 7.93936 10.0607C7.65806 9.77938 7.50002 9.39785 7.50002 9.00002C7.50002 8.6022 7.65806 8.22067 7.93936 7.93936C8.22067 7.65806 8.6022 7.50002 9.00002 7.50002C9.39785 7.50002 9.77938 7.65806 10.0607 7.93936C10.342 8.22067 10.5 8.6022 10.5 9.00002C10.5 9.39785 10.342 9.77938 10.0607 10.0607C9.77938 10.342 9.39785 10.5 9.00002 10.5Z"
                fill="url(#paint0_linear_5_60)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 9C-1.76116e-08 7.8181 0.232792 6.64778 0.685084 5.55585C1.13738 4.46392 1.80031 3.47177 2.63604 2.63604C3.47177 1.80031 4.46392 1.13738 5.55585 0.685084C6.64778 0.232792 7.8181 0 9 0C10.1819 0 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 3.55683e-08 11.3869 0 9ZM9 16C8.08075 16 7.17049 15.8189 6.32122 15.4672C5.47194 15.1154 4.70026 14.5998 4.05025 13.9497C3.40024 13.2997 2.88463 12.5281 2.53284 11.6788C2.18106 10.8295 2 9.91925 2 9C2 8.08075 2.18106 7.17049 2.53284 6.32122C2.88463 5.47194 3.40024 4.70026 4.05025 4.05025C4.70026 3.40024 5.47194 2.88463 6.32122 2.53284C7.17049 2.18106 8.08075 2 9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.8565 15.2625 12.637 13.9497 13.9497C12.637 15.2625 10.8565 16 9 16Z"
                fill="url(#paint1_linear_5_60)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5_60"
                  x1="15"
                  y1="9.00002"
                  x2="3.00002"
                  y2="9.00002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FD02A9" />
                  <stop offset="1" stopColor="#7E03C3" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5_60"
                  x1="18"
                  y1="9"
                  x2="0"
                  y2="9"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FD02A9" />
                  <stop offset="1" stopColor="#7E03C3" />
                </linearGradient>
              </defs>
            </svg>
            <p className=" font-semibold text-base lg:text-xl">
              Our product presets
            </p>
          </div>
          <p className=" leading-none  tracking-tight text-base mt-2 ">
            Build your own or choose from one of our preset options
          </p>
        </div>

        {/* boxes */}

        <div className="flex flex-col md:flex-row gap-5">
          {data.map((item) => (
            <article
              key={item.id}
              className="border w-[14rem] h-[13rem] p-3 rounded-lg mt-5 first:border-[#FD02A9]"
            >
              <h1>{item.svg}</h1>
              <h1 className=" font-bold text-base lg:text-xl mt-4">
                {item.title}
              </h1>
              <p className="leading-none line-clamp-[7] font-[400] tracking-tight text-base mt-4 ">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between mt-4">
          {/* //section 2 */}

          <article className="md:w-[50%]">
            <div className="flex items-center gap-2 mt-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.00002 9.00002C3.00002 7.40872 3.63216 5.8826 4.75738 4.75738C5.8826 3.63216 7.40872 3.00002 9.00002 3.00002C10.5913 3.00002 12.1174 3.63216 13.2427 4.75738C14.3679 5.8826 15 7.40872 15 9.00002C15 10.5913 14.3679 12.1174 13.2427 13.2427C12.1174 14.3679 10.5913 15 9.00002 15C7.40872 15 5.8826 14.3679 4.75738 13.2427C3.63216 12.1174 3.00002 10.5913 3.00002 9.00002ZM9.00002 10.5C8.6022 10.5 8.22067 10.342 7.93936 10.0607C7.65806 9.77938 7.50002 9.39785 7.50002 9.00002C7.50002 8.6022 7.65806 8.22067 7.93936 7.93936C8.22067 7.65806 8.6022 7.50002 9.00002 7.50002C9.39785 7.50002 9.77938 7.65806 10.0607 7.93936C10.342 8.22067 10.5 8.6022 10.5 9.00002C10.5 9.39785 10.342 9.77938 10.0607 10.0607C9.77938 10.342 9.39785 10.5 9.00002 10.5Z"
                  fill="url(#paint0_linear_5_60)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 9C-1.76116e-08 7.8181 0.232792 6.64778 0.685084 5.55585C1.13738 4.46392 1.80031 3.47177 2.63604 2.63604C3.47177 1.80031 4.46392 1.13738 5.55585 0.685084C6.64778 0.232792 7.8181 0 9 0C10.1819 0 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 3.55683e-08 11.3869 0 9ZM9 16C8.08075 16 7.17049 15.8189 6.32122 15.4672C5.47194 15.1154 4.70026 14.5998 4.05025 13.9497C3.40024 13.2997 2.88463 12.5281 2.53284 11.6788C2.18106 10.8295 2 9.91925 2 9C2 8.08075 2.18106 7.17049 2.53284 6.32122C2.88463 5.47194 3.40024 4.70026 4.05025 4.05025C4.70026 3.40024 5.47194 2.88463 6.32122 2.53284C7.17049 2.18106 8.08075 2 9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.8565 15.2625 12.637 13.9497 13.9497C12.637 15.2625 10.8565 16 9 16Z"
                  fill="url(#paint1_linear_5_60)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_60"
                    x1="15"
                    y1="9.00002"
                    x2="3.00002"
                    y2="9.00002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FD02A9" />
                    <stop offset="1" stopColor="#7E03C3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5_60"
                    x1="18"
                    y1="9"
                    x2="0"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FD02A9" />
                    <stop offset="1" stopColor="#7E03C3" />
                  </linearGradient>
                </defs>
              </svg>
              <p className=" font-semibold text-base lg:text-xl">Product</p>
            </div>
            <section className="flex flex-co gap-2 md:flex-ro mt-3">
              <div className="relative  w-30 lg:w-[9rem] rounded-2xl mt-2">
                <img src="/product2.png" alt="p2" />
                <h1 className="absolute bottom-0 bg-white text-sm p-1 rounded-lg text-center ml-2 w-[90%] ">
                  Leaflets & Flyers{" "}
                </h1>
              </div>
              <div className="relative  w-32 lg:w-[9rem] rounded-2xl mt-2">
                <img src="/product1.png" alt="p1" />
                <h1 className="absolute bottom-0 bg-white text-sm p-1 rounded-lg text-center ml-2 w-[90%]">
                  Folded Leaflets
                </h1>
              </div>
            </section>
          </article>
          <article className="md:w-[50%]">
            <div className="flex items-center gap-2 mt-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.00002 9.00002C3.00002 7.40872 3.63216 5.8826 4.75738 4.75738C5.8826 3.63216 7.40872 3.00002 9.00002 3.00002C10.5913 3.00002 12.1174 3.63216 13.2427 4.75738C14.3679 5.8826 15 7.40872 15 9.00002C15 10.5913 14.3679 12.1174 13.2427 13.2427C12.1174 14.3679 10.5913 15 9.00002 15C7.40872 15 5.8826 14.3679 4.75738 13.2427C3.63216 12.1174 3.00002 10.5913 3.00002 9.00002ZM9.00002 10.5C8.6022 10.5 8.22067 10.342 7.93936 10.0607C7.65806 9.77938 7.50002 9.39785 7.50002 9.00002C7.50002 8.6022 7.65806 8.22067 7.93936 7.93936C8.22067 7.65806 8.6022 7.50002 9.00002 7.50002C9.39785 7.50002 9.77938 7.65806 10.0607 7.93936C10.342 8.22067 10.5 8.6022 10.5 9.00002C10.5 9.39785 10.342 9.77938 10.0607 10.0607C9.77938 10.342 9.39785 10.5 9.00002 10.5Z"
                  fill="url(#paint0_linear_5_60)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 9C-1.76116e-08 7.8181 0.232792 6.64778 0.685084 5.55585C1.13738 4.46392 1.80031 3.47177 2.63604 2.63604C3.47177 1.80031 4.46392 1.13738 5.55585 0.685084C6.64778 0.232792 7.8181 0 9 0C10.1819 0 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 3.55683e-08 11.3869 0 9ZM9 16C8.08075 16 7.17049 15.8189 6.32122 15.4672C5.47194 15.1154 4.70026 14.5998 4.05025 13.9497C3.40024 13.2997 2.88463 12.5281 2.53284 11.6788C2.18106 10.8295 2 9.91925 2 9C2 8.08075 2.18106 7.17049 2.53284 6.32122C2.88463 5.47194 3.40024 4.70026 4.05025 4.05025C4.70026 3.40024 5.47194 2.88463 6.32122 2.53284C7.17049 2.18106 8.08075 2 9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.8565 15.2625 12.637 13.9497 13.9497C12.637 15.2625 10.8565 16 9 16Z"
                  fill="url(#paint1_linear_5_60)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_60"
                    x1="15"
                    y1="9.00002"
                    x2="3.00002"
                    y2="9.00002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FD02A9" />
                    <stop offset="1" stopColor="#7E03C3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5_60"
                    x1="18"
                    y1="9"
                    x2="0"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FD02A9" />
                    <stop offset="1" stopColor="#7E03C3" />
                  </linearGradient>
                </defs>
              </svg>
              <p className=" font-semibold text-base lg:text-xl">Type</p>
            </div>
            <section className="flex  gap-2 md:gap-6 mt-3">
              <div className="relative  w-32 lg:w-[9rem] rounded-2xl mt-2">
                <img src="/product2.png" alt="" />
                <h1 className="absolute bottom-0 bg-white text-sm p-1 rounded-lg text-center ml-2 w-[90%]">
                  Standard
                </h1>
              </div>
              <div className="relative  w-32  lg:w-[9rem] rounded-2xl mt-2">
                <img src="/product1.png" alt="p1" />
                <h1 className="absolute bottom-0 bg-white text-sm p-1 rounded-lg     text-center ml-2 w-[90%]">
                  Foiling
                </h1>
              </div>
            </section>
          </article>
        </div>
      </section>
      <section className="p-5 mt-8 md:mt-0 border border-[#7E03C3] rounded-xl w-full h-w-full">
        <h1 className="font-bold text-lg">Product Summary</h1>

        <article>
          <div className="flex leading-none font-semibold justify-between mt-5">
            <h1>
              Subtotal <br /> £0.03/ Unit
            </h1>{" "}
            <h1 className=" text-right">
              £62.46 <br />
              (£62.46 inc VAT)
            </h1>
          </div>

          <div className=" border-b pb-7 border-[#7E03C3]">
            <button className=" bg-[#FD02A9] w-full text-center hover:bg-[#ca088a] cursor-pointer text-white py-2 rounded-lg mt-8 ">
              Add to basket
            </button>
            <button className=" border-[#7E03C3] bg-gradient-to-r from-[#7E03C3] to-[#FD02A9] border w-full text-center hover:bg-[#7E03C3] cursor-pointer bg-clip-text text-transparent py-2 rounded-lg mt-2 ">
              Upload Artwork
            </button>
          </div>
          <div>
            <section className=" flex justify-between mt-5">
              <div className="flex items-start gap-2  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00002 9.00002C3.00002 7.40872 3.63216 5.8826 4.75738 4.75738C5.8826 3.63216 7.40872 3.00002 9.00002 3.00002C10.5913 3.00002 12.1174 3.63216 13.2427 4.75738C14.3679 5.8826 15 7.40872 15 9.00002C15 10.5913 14.3679 12.1174 13.2427 13.2427C12.1174 14.3679 10.5913 15 9.00002 15C7.40872 15 5.8826 14.3679 4.75738 13.2427C3.63216 12.1174 3.00002 10.5913 3.00002 9.00002ZM9.00002 10.5C8.6022 10.5 8.22067 10.342 7.93936 10.0607C7.65806 9.77938 7.50002 9.39785 7.50002 9.00002C7.50002 8.6022 7.65806 8.22067 7.93936 7.93936C8.22067 7.65806 8.6022 7.50002 9.00002 7.50002C9.39785 7.50002 9.77938 7.65806 10.0607 7.93936C10.342 8.22067 10.5 8.6022 10.5 9.00002C10.5 9.39785 10.342 9.77938 10.0607 10.0607C9.77938 10.342 9.39785 10.5 9.00002 10.5Z"
                    fill="url(#paint0_linear_5_60)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 9C-1.76116e-08 7.8181 0.232792 6.64778 0.685084 5.55585C1.13738 4.46392 1.80031 3.47177 2.63604 2.63604C3.47177 1.80031 4.46392 1.13738 5.55585 0.685084C6.64778 0.232792 7.8181 0 9 0C10.1819 0 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 3.55683e-08 11.3869 0 9ZM9 16C8.08075 16 7.17049 15.8189 6.32122 15.4672C5.47194 15.1154 4.70026 14.5998 4.05025 13.9497C3.40024 13.2997 2.88463 12.5281 2.53284 11.6788C2.18106 10.8295 2 9.91925 2 9C2 8.08075 2.18106 7.17049 2.53284 6.32122C2.88463 5.47194 3.40024 4.70026 4.05025 4.05025C4.70026 3.40024 5.47194 2.88463 6.32122 2.53284C7.17049 2.18106 8.08075 2 9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.8565 15.2625 12.637 13.9497 13.9497C12.637 15.2625 10.8565 16 9 16Z"
                    fill="url(#paint1_linear_5_60)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_60"
                      x1="15"
                      y1="9.00002"
                      x2="3.00002"
                      y2="9.00002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FD02A9" />
                      <stop offset="1" stopColor="#7E03C3" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_5_60"
                      x1="18"
                      y1="9"
                      x2="0"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FD02A9" />
                      <stop offset="1" stopColor="#7E03C3" />
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className=" text-sm">
                  Our product presets <br />
                  <span className=" font-semibold">Build Your Own</span>{" "}
                </h1>
              </div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                className="mt-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.2941 4.05893H2.5294C2.12378 4.05893 1.73477 4.22006 1.44795 4.50688C1.16113 4.7937 1 5.18271 1 5.58833V12.4706C1 12.8763 1.16113 13.2653 1.44795 13.5521C1.73477 13.8389 2.12378 14 2.5294 14H9.41171C9.81734 14 10.2063 13.8389 10.4932 13.5521C10.78 13.2653 10.9411 12.8763 10.9411 12.4706V11.7059"
                  stroke="#FD02A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1765 2.52948L12.4706 4.82359M13.5297 3.74154C13.8309 3.44036 14.0001 3.03188 14.0001 2.60595C14.0001 2.18003 13.8309 1.77155 13.5297 1.47037C13.2286 1.1692 12.8201 1 12.3941 1C11.9682 1 11.5597 1.1692 11.2586 1.47037L4.82361 7.88239V10.1765H7.11771L13.5297 3.74154Z"
                  stroke="#FD02A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </section>
            <section className=" flex justify-between mt-5">
              <div className="flex items-start gap-2  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00002 9.00002C3.00002 7.40872 3.63216 5.8826 4.75738 4.75738C5.8826 3.63216 7.40872 3.00002 9.00002 3.00002C10.5913 3.00002 12.1174 3.63216 13.2427 4.75738C14.3679 5.8826 15 7.40872 15 9.00002C15 10.5913 14.3679 12.1174 13.2427 13.2427C12.1174 14.3679 10.5913 15 9.00002 15C7.40872 15 5.8826 14.3679 4.75738 13.2427C3.63216 12.1174 3.00002 10.5913 3.00002 9.00002ZM9.00002 10.5C8.6022 10.5 8.22067 10.342 7.93936 10.0607C7.65806 9.77938 7.50002 9.39785 7.50002 9.00002C7.50002 8.6022 7.65806 8.22067 7.93936 7.93936C8.22067 7.65806 8.6022 7.50002 9.00002 7.50002C9.39785 7.50002 9.77938 7.65806 10.0607 7.93936C10.342 8.22067 10.5 8.6022 10.5 9.00002C10.5 9.39785 10.342 9.77938 10.0607 10.0607C9.77938 10.342 9.39785 10.5 9.00002 10.5Z"
                    fill="url(#paint0_linear_5_60)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 9C-1.76116e-08 7.8181 0.232792 6.64778 0.685084 5.55585C1.13738 4.46392 1.80031 3.47177 2.63604 2.63604C3.47177 1.80031 4.46392 1.13738 5.55585 0.685084C6.64778 0.232792 7.8181 0 9 0C10.1819 0 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 3.55683e-08 11.3869 0 9ZM9 16C8.08075 16 7.17049 15.8189 6.32122 15.4672C5.47194 15.1154 4.70026 14.5998 4.05025 13.9497C3.40024 13.2997 2.88463 12.5281 2.53284 11.6788C2.18106 10.8295 2 9.91925 2 9C2 8.08075 2.18106 7.17049 2.53284 6.32122C2.88463 5.47194 3.40024 4.70026 4.05025 4.05025C4.70026 3.40024 5.47194 2.88463 6.32122 2.53284C7.17049 2.18106 8.08075 2 9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.8565 15.2625 12.637 13.9497 13.9497C12.637 15.2625 10.8565 16 9 16Z"
                    fill="url(#paint1_linear_5_60)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_60"
                      x1="15"
                      y1="9.00002"
                      x2="3.00002"
                      y2="9.00002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FD02A9" />
                      <stop offset="1" stopColor="#7E03C3" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_5_60"
                      x1="18"
                      y1="9"
                      x2="0"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FD02A9" />
                      <stop offset="1" stopColor="#7E03C3" />
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className=" text-sm">
                  Product
                  <br />
                  <span className=" font-semibold">
                    {" "}
                    Leaflets & Flyers
                  </span>{" "}
                </h1>
              </div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                className="mt-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.2941 4.05893H2.5294C2.12378 4.05893 1.73477 4.22006 1.44795 4.50688C1.16113 4.7937 1 5.18271 1 5.58833V12.4706C1 12.8763 1.16113 13.2653 1.44795 13.5521C1.73477 13.8389 2.12378 14 2.5294 14H9.41171C9.81734 14 10.2063 13.8389 10.4932 13.5521C10.78 13.2653 10.9411 12.8763 10.9411 12.4706V11.7059"
                  stroke="#FD02A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1765 2.52948L12.4706 4.82359M13.5297 3.74154C13.8309 3.44036 14.0001 3.03188 14.0001 2.60595C14.0001 2.18003 13.8309 1.77155 13.5297 1.47037C13.2286 1.1692 12.8201 1 12.3941 1C11.9682 1 11.5597 1.1692 11.2586 1.47037L4.82361 7.88239V10.1765H7.11771L13.5297 3.74154Z"
                  stroke="#FD02A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </section>
            <section className=" flex justify-between mt-5">
              <div className="flex items-start gap-2  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00002 9.00002C3.00002 7.40872 3.63216 5.8826 4.75738 4.75738C5.8826 3.63216 7.40872 3.00002 9.00002 3.00002C10.5913 3.00002 12.1174 3.63216 13.2427 4.75738C14.3679 5.8826 15 7.40872 15 9.00002C15 10.5913 14.3679 12.1174 13.2427 13.2427C12.1174 14.3679 10.5913 15 9.00002 15C7.40872 15 5.8826 14.3679 4.75738 13.2427C3.63216 12.1174 3.00002 10.5913 3.00002 9.00002ZM9.00002 10.5C8.6022 10.5 8.22067 10.342 7.93936 10.0607C7.65806 9.77938 7.50002 9.39785 7.50002 9.00002C7.50002 8.6022 7.65806 8.22067 7.93936 7.93936C8.22067 7.65806 8.6022 7.50002 9.00002 7.50002C9.39785 7.50002 9.77938 7.65806 10.0607 7.93936C10.342 8.22067 10.5 8.6022 10.5 9.00002C10.5 9.39785 10.342 9.77938 10.0607 10.0607C9.77938 10.342 9.39785 10.5 9.00002 10.5Z"
                    fill="url(#paint0_linear_5_60)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 9C-1.76116e-08 7.8181 0.232792 6.64778 0.685084 5.55585C1.13738 4.46392 1.80031 3.47177 2.63604 2.63604C3.47177 1.80031 4.46392 1.13738 5.55585 0.685084C6.64778 0.232792 7.8181 0 9 0C10.1819 0 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 3.55683e-08 11.3869 0 9ZM9 16C8.08075 16 7.17049 15.8189 6.32122 15.4672C5.47194 15.1154 4.70026 14.5998 4.05025 13.9497C3.40024 13.2997 2.88463 12.5281 2.53284 11.6788C2.18106 10.8295 2 9.91925 2 9C2 8.08075 2.18106 7.17049 2.53284 6.32122C2.88463 5.47194 3.40024 4.70026 4.05025 4.05025C4.70026 3.40024 5.47194 2.88463 6.32122 2.53284C7.17049 2.18106 8.08075 2 9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.8565 15.2625 12.637 13.9497 13.9497C12.637 15.2625 10.8565 16 9 16Z"
                    fill="url(#paint1_linear_5_60)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_60"
                      x1="15"
                      y1="9.00002"
                      x2="3.00002"
                      y2="9.00002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FD02A9" />
                      <stop offset="1" stopColor="#7E03C3" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_5_60"
                      x1="18"
                      y1="9"
                      x2="0"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FD02A9" />
                      <stop offset="1" stopColor="#7E03C3" />
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className=" text-sm">
                  Type <br />
                  <span className=" font-semibold">Standard</span>{" "}
                </h1>
              </div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                className="mt-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.2941 4.05893H2.5294C2.12378 4.05893 1.73477 4.22006 1.44795 4.50688C1.16113 4.7937 1 5.18271 1 5.58833V12.4706C1 12.8763 1.16113 13.2653 1.44795 13.5521C1.73477 13.8389 2.12378 14 2.5294 14H9.41171C9.81734 14 10.2063 13.8389 10.4932 13.5521C10.78 13.2653 10.9411 12.8763 10.9411 12.4706V11.7059"
                  stroke="#FD02A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1765 2.52948L12.4706 4.82359M13.5297 3.74154C13.8309 3.44036 14.0001 3.03188 14.0001 2.60595C14.0001 2.18003 13.8309 1.77155 13.5297 1.47037C13.2286 1.1692 12.8201 1 12.3941 1C11.9682 1 11.5597 1.1692 11.2586 1.47037L4.82361 7.88239V10.1765H7.11771L13.5297 3.74154Z"
                  stroke="#FD02A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
};

export default VariationPage;
