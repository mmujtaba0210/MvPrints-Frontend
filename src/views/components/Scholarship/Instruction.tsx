import React from "react";

export default function Instructions() {
  return (
    <div className="pb-12 mt-12 ">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Application Instructions Card */}
          <div className="rounded-xl bg-gray-200 shadow-md p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4  2xl:text-5xl">
                Application Instructions
              </h3>
              <p className="text-base md:text-lg leading-relaxed  2xl:text-2xl text-gray-800">
                To apply for the Mecarvi Scholarship, please send your completed
                application by <strong>June 11, 2023</strong>.{" "}
                <span className="text-gray-600  2xl:text-2xl">
                  Applications postmarked after this date will not be accepted.
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl  2xl:text-3xl font-semibold mb-4">
                Please send completed application packet to:
              </h3>
              <address className="not-italic text-gray-700  2xl:text-3xl leading-relaxed">
                Mecarvi Holdings Corporation <br />
                526 Forest Parkway <br />
                Forest Park GA 30297
              </address>
            </div>

            <div className=" 2xl:text-3xl">
              <p className="text-gray-800 ">
                If you have any questions, please
              </p>
              <a
                href="mailto:scholarships@mecarvicorporation.com"
                className="text-blue-600 underline"
              >
                Email To Us
              </a>
            </div>
          </div>

          {/* Essay Topics Card */}
          <div className="rounded-xl bg-gray-200 shadow-md p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl  2xl:text-5xl font-bold mb-4">
                Essay – Please choose one topic below:
              </h3>
              <ul className="list-disc pl-6 text-base  2xl:mt-12 md:text-lg  2xl:text-3xl text-gray-800 space-y-4">
                <li>
                  Why should you be considered for the 2023 Mecarvi Scholarship?
                </li>
                <li>How do you anticipate making a contribution to society?</li>
                <li>
                  Describe your career goals and what strengths/assets you have
                  that you feel would contribute to your chosen profession.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
