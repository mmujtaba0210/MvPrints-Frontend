"use client";
import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDollar,
  faLocation,
  faLocationDot,
  faBookmark,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "aos/dist/aos.css";
import { useState } from "react";
import Image from "next/image";
const tabLabels = [
  "Job Description",
  "Key Responsibilities",
  "Qualifications",
  "Benefits",
];

const JobDetails = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <>
      <div className="mx-auto rouned-[12px] mt-12">
        <div className="bg-white shadow-lg p-7 w-[90%] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-10 md:col-span-10">
              <div className="flex">
                <Image src="/images/logo.png" alt="" width={300} height={100} />
                <div>
                  <h3 className="text-3xl font-bold mb-3">
                    Front end Developer
                  </h3>
                  <div className="flex flex-wrap items-center gap-12">
                    <h3 className="text-pink-500">Mecarvi Creatives</h3>
                    <span className="text-gray-600">
                      <FontAwesomeIcon
                        className="mr-2 text-pink-500"
                        icon={faLocationDot}
                      ></FontAwesomeIcon>
                      Location :{" "}
                      <span className="font-bold text-black">Remote</span>{" "}
                    </span>
                    <span className="text-gray-600">
                      <FontAwesomeIcon
                        className="mr-2 text-pink-500"
                        icon={faDollar}
                      ></FontAwesomeIcon>
                      Salary : <span className="font-bold text-black">TBD</span>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2 md:col-span-2 text-right">
              <div className="">
                <FontAwesomeIcon
                  className="text-2xl"
                  icon={faBookmark}
                ></FontAwesomeIcon>
              </div>
              <button className="bg-pink-500 text-white px-6 py-4 rounded-[8px]">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-12 gap-8 w-[90%] mx-auto">
          <div className="col-span-12 lg:col-span-3 md:col-span-3 shadow-lg bg-white py-6 px-4 rounded-[10px] space-y-4">
            <h3 className="text-2xl font-bold uppercase">Job Overview</h3>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">No. of Vacancies</h3>
              <p className=" text-gray-500">1</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Position Type</h3>
              <p className=" text-gray-500">Full Time</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Job Type:</h3>
              <p className=" text-gray-500">Seasonal</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Shift Availability:</h3>
              <p className=" text-gray-500">Night</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Experience</h3>
              <p className=" text-gray-500">4 Years Required</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Job Location:</h3>
              <p className=" text-gray-500">Remote</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Category</h3>
              <p className=" text-gray-500">Web Development</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Gender</h3>
              <p className=" text-gray-500">FeMale Male</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Application Due:</h3>
              <p className=" text-gray-500">Jan-31-2023</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px]">Share Post:</h3>
              <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-gray-600"
                  icon={faFacebook}
                ></FontAwesomeIcon>
              </div>
              <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-gray-600"
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </div>
              <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-gray-600"
                  icon={faTwitter}
                ></FontAwesomeIcon>
              </div>
              <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-gray-600"
                  icon={faLinkedin}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 md:col-span-9">
            <div className="mb-4 border-b border-gray-200">
              <ul
                className="flex flex-wrap text-sm font-medium text-center"
                role="tablist"
              >
                {tabLabels.map((label, index) => (
                  <li key={index} className="me-2">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === index
                          ? "text-pink-500 border-pink-500"
                          : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 shadow-lg">
              {activeTab === 0 && (
                <div>
                  <h3 className="text-3xl font-bold">Job Description</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis non sit repudiandae alias magnam ullam, quasi totam
                    quae numquam eius iusto qui eaque adipisci vitae saepe illum
                    beatae, enim odio!
                  </p>
                  <div className="bg-gray-100 px-4 py-4 rounded-[10px] mt-6">
                    <div className="flex gap-6 items-center">
                      <h3 className="text-[18px]">Share Post:</h3>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faFacebook}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faInstagram}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faTwitter}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faLinkedin}
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <h3 className="text-3xl font-bold">Key Responsibilities</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis non sit repudiandae alias magnam ullam, quasi totam
                    quae numquam eius iusto qui eaque adipisci vitae saepe illum
                    beatae, enim odio!
                  </p>
                  <div className="bg-gray-100 px-4 py-4 rounded-[10px] mt-6">
                    <div className="flex gap-6 items-center">
                      <h3 className="text-[18px]">Share Post:</h3>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faFacebook}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faInstagram}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faTwitter}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faLinkedin}
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <h3 className="text-3xl font-bold">Qualifications</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis non sit repudiandae alias magnam ullam, quasi totam
                    quae numquam eius iusto qui eaque adipisci vitae saepe illum
                    beatae, enim odio!
                  </p>
                  <div className="bg-gray-100 px-4 py-4 rounded-[10px] mt-6">
                    <div className="flex gap-6 items-center">
                      <h3 className="text-[18px]">Share Post:</h3>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faFacebook}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faInstagram}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faTwitter}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faLinkedin}
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div>
                  <h3 className="text-3xl font-bold">Benefits</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis non sit repudiandae alias magnam ullam, quasi totam
                    quae numquam eius iusto qui eaque adipisci vitae saepe illum
                    beatae, enim odio!
                  </p>
                  <div className="bg-gray-100 px-4 py-4 rounded-[10px] mt-6">
                    <div className="flex gap-6 items-center">
                      <h3 className="text-[18px]">Share Post:</h3>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faFacebook}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faInstagram}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faTwitter}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="bg-gray-300 h-[28px] w-[28px] rounded-full p-4 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-gray-600"
                          icon={faLinkedin}
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 mt-12">
          <div className="grid grid-cols-12 p-6 gap-4 w-[90%] mx-auto">
            <div className="col-span-12 text-center my-12">
              <h3 className="text-5xl font-bold">Recent Jobs Posted</h3>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-4 shadow-lg bg-white rounded-[8px]">
              <div className="grid grid-cols-12 gap-4 p-6">
                <div className="col-span-12 lg:col-span-2 md:col-span-2">
                  <Image src="/images/logo.png" width={100} height={100} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-10 md:col-span-10 space-y-4">
                  <div className="flex gap-2 items-start">
                    <h3 className="text-3xl font-bold">
                      Customer Service Agent
                    </h3>
                    <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                  </div>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faSuitcase}
                    ></FontAwesomeIcon>{" "}
                    <span>Customer Service</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLocation}
                    ></FontAwesomeIcon>{" "}
                    <span>Customer Service</span>
                  </p>
                  <button className="bg-pink-200 text-pink-600 rounded-full px-5 py-2">
                    Full Time
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-4 shadow-lg bg-white rounded-[8px]">
              <div className="grid grid-cols-12 gap-4 p-6">
                <div className="col-span-12 lg:col-span-2 md:col-span-2">
                  <Image src="/images/logo.png" width={100} height={100} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-10 md:col-span-10 space-y-4">
                  <div className="flex gap-2 items-start">
                    <h3 className="text-3xl font-bold">
                      Customer Service Agent
                    </h3>
                    <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                  </div>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faSuitcase}
                    ></FontAwesomeIcon>{" "}
                    <span>Customer Service</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLocation}
                    ></FontAwesomeIcon>{" "}
                    <span>Customer Service</span>
                  </p>
                  <button className="bg-pink-200 text-pink-600 rounded-full px-5 py-2">
                    Full Time
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-4 shadow-lg bg-white rounded-[8px]">
              <div className="grid grid-cols-12 gap-4 p-6">
                <div className="col-span-12 lg:col-span-2 md:col-span-2">
                  <Image src="/images/logo.png" width={100} height={100} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-10 md:col-span-10 space-y-4">
                  <div className="flex gap-2 items-start">
                    <h3 className="text-3xl font-bold">
                      Customer Service Agent
                    </h3>
                    <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                  </div>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faSuitcase}
                    ></FontAwesomeIcon>{" "}
                    <span>Customer Service</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLocation}
                    ></FontAwesomeIcon>{" "}
                    <span>Customer Service</span>
                  </p>
                  <button className="bg-pink-200 text-pink-600 rounded-full px-5 py-2">
                    Full Time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
