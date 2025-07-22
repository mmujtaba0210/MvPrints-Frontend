import React from "react";

const requirements = [
  {
    id: "01",
    color: "bg-pink-600",
    borderColor: "border-pink-600",
    text: "Candidates must have graduated high/higher school",
  },
  {
    id: "02",
    color: "bg-[#ec2328]",
    borderColor: "border-[#ec2328]",
    text: "US candidates must have a minimum cumulative GPA of 3.6 and international candidates must have a minimum of Eight (8) CXC Subjects",
  },
  {
    id: "03",
    color: "bg-[#ea3294]",
    borderColor: "border-[#ea3294]",
    text: "Candidates must be interested in pursuing either an associate or undergraduate degree at an accredited college or university in the United States",
  },
  {
    id: "04",
    color: "bg-[#5a4a9f]",
    borderColor: "border-[#5a4a9f]",
    text: "Candidates must demonstrate financial hardship",
  },
  {
    id: "05",
    color: "bg-[#40aa49]",
    borderColor: "border-[#40aa49]",
    text: "Candidates must remain enrolled as a full-time student for the duration of studies",
  },
  {
    id: "06",
    color: "bg-[#f16725]",
    borderColor: "border-[#f16725]",
    text: "Candidates must be already accepted into the University or Colleges for the Fall 2023 semester.",
  },
];

export default function EligibilityCriteria() {
  return (
    <div className="bg-gray-100 py-12 mt-12">
      <h3 className="text-2xl sm:text-3xl  2xl:text-5xl text-center font-bold uppercase">
        Eligibility Requirements
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4 sm:px-8">
        {requirements.map((item, idx) => (
          <div
            key={idx}
            className="relative shadow-lg rounded-[8px] bg-white min-h-[240px] flex"
          >
            <div
              className={`w-[35%] min-h-[240px] ${item.color} rounded-l-[8px] flex justify-center items-center z-10`}
            >
              <div className="border-4 border-white h-20 w-20 rounded-full flex justify-center items-center">
                <h3 className="text-white text-3xl">{item.id}</h3>
              </div>
            </div>

            {/* Overlapping white dot */}
            <div
              className={`absolute top-1/2 left-[25%]  md:left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-[5] ${item.borderColor} border-4 h-12 w-12 rounded-full flex items-center justify-center bg-white`}
            >
              <div className="h-4 w-4 bg-white rounded-full"></div>
            </div>

            <div className="w-full bg-gray-100 min-h-[240px] flex items-center justify-center px-6">
              <p className="text-lg font-semibold text-center  2xl:text-3xl">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
