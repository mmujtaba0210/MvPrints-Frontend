import React from "react";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function FeaturedJobs({}) {
  return (
    <>
      <div className="bg-[#EAFAf1]  py-12 mt-12">
        <div className="w-[90%] mx-auto">
          <h3 className="text-center text-5xl font-bold uppercase">
            Featured Jobs
          </h3>
          <p className="text-center mt-4 2xl:text-2xl">
            Know your worth and find the job that qualify your life
          </p>
          <div className="grid grid-cols-12 gap-4 mt-12">
            <div className="col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="2xl:text-4xl"
                  ></FontAwesomeIcon>
                </div>
                <h3 className="uppercase  2xl:text-2xl">Web Development</h3>
              </div>
              <h3 className="font-bold  2xl:text-3xl">Front End Developer</h3>
              <h3 className="2xl:text-2xl">Remote Full Time</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">
                    2 Years Experience
                  </h3>
                  <p className="2xl:text-3xl">Mecarvi Creatives</p>
                </div>
                <Image src="/images/logo.png" alt="" width={90} height={90} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="2xl:text-4xl"
                  ></FontAwesomeIcon>
                </div>
                <h3 className="uppercase 2xl:text-2xl">
                  Graphics & UI/UX Design
                </h3>
              </div>
              <h3 className="font-bold 2xl:text-3xl">Graphics Designer</h3>
              <h3 className="2xl:text-2xl">Remote Full Time</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">
                    2 Years Experience
                  </h3>
                  <p className="2xl:text-3xl">Mecarvi Creatives</p>
                </div>
                <Image src="/images/logo.png" alt="" width={90} height={90} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="2xl:text-4xl"
                  ></FontAwesomeIcon>
                </div>
                <h3 className="uppercase 2xl:text-2xl">Production</h3>
              </div>
              <h3 className="font-bold 2xl:text-3xl">Digital Print Operator</h3>
              <h3 className="2xl:text-2xl">Remote Full Time</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">
                    2 Years Experience
                  </h3>
                  <p className="2xl:text-3xl">Mecarvi Creatives</p>
                </div>
                <Image src="/images/logo.png" alt="" width={90} height={90} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="2xl:text-4xl"
                  ></FontAwesomeIcon>
                </div>
                <h3 className="uppercase 2xl:text-2xl">Administration</h3>
              </div>
              <h3 className="font-bold 2xl:text-3xl">
                Administrative Assistant
              </h3>
              <h3 className="2xl:text-2xl">Remote Full Time</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">
                    2 Years Experience
                  </h3>
                  <p className="2xl:text-3xl">Mecarvi Creatives</p>
                </div>
                <Image src="/images/logo.png" alt="" width={90} height={90} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="2xl:text-4xl"
                  ></FontAwesomeIcon>
                </div>
                <h3 className="uppercase 2xl:text-2xl">Marketing</h3>
              </div>
              <h3 className="font-bold 2xl:text-3xl">Social Media Marketer</h3>
              <h3 className="2xl:text-2xl">Remote Full Time</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">
                    2 Years Experience
                  </h3>
                  <p className="2xl:text-3xl">Mecarvi Creatives</p>
                </div>
                <Image src="/images/logo.png" alt="" width={90} height={90} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="2xl:text-4xl"
                  ></FontAwesomeIcon>
                </div>
                <h3 className="uppercase 2xl:text-2xl">Customer Service</h3>
              </div>
              <h3 className="font-bold 2xl:text-3xl">Customer Service Agent</h3>
              <h3 className="2xl:text-2xl">Remote Full Time</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">
                    2 Years Experience
                  </h3>
                  <p className="2xl:text-3xl">Mecarvi Creatives</p>
                </div>
                <Image src="/images/logo.png" alt="" width={90} height={90} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="2xl:text-4xl"
                  ></FontAwesomeIcon>
                </div>
                <h3 className="uppercase 2xl:text-2xl">Customer Service</h3>
              </div>
              <h3 className="font-bold 2xl:text-3xl">Customer Service Agent</h3>
              <h3 className="2xl:text-2xl">Remote Full Time</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">
                    2 Years Experience
                  </h3>
                  <p className="2xl:text-3xl">Mecarvi Creatives</p>
                </div>
                <Image src="/images/logo.png" alt="" width={90} height={90} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="2xl:text-4xl"
                  ></FontAwesomeIcon>
                </div>
                <h3 className="uppercase 2xl:text-2xl">Sales</h3>
              </div>
              <h3 className="font-bold 2xl:text-3xl">Sales Representative</h3>
              <h3 className="2xl:text-2xl">Remote Full Time</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">
                    2 Years Experience
                  </h3>
                  <p className="2xl:text-3xl">Mecarvi Creatives</p>
                </div>
                <Image src="/images/logo.png" alt="" width={90} height={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//

// <div className="grid grid-cols-12 gap-4 mt-12">
// {jobs.map((job, index) => (
//   <Link key={index} href='careers/job-detail'>
//     <div className="cursor-pointer col-span-12 lg:col-span-3 md:col-span-4 p-4 space-y-8 bg-white shadow-lg rounded-[12px]">
//       <div className="flex justify-between items-center">
//         <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center p-5">
//           <FontAwesomeIcon icon={faDollar} className="2xl:text-4xl" />
//         </div>
//         <h3 className="uppercase 2xl:text-2xl">{job.category}</h3>
//       </div>
//       <h3 className="font-bold 2xl:text-3xl">{job.title}</h3>
//       <h3>{job.type}</h3>
//       <div className="flex justify-between items-center">
//         <div>
//           <h3 className="text-gray-700 text-[12px] 2xl:text-2xl">{job.experience}</h3>
//           <p>{job.company}</p>
//         </div>
//         <img src={job.logo} alt={job.company} width="90px" />
//       </div>
//     </div>
//   </Link>
// ))}
// </div>
