import React from "react";
import Image from "next/image";

export default function ApplicationRequirements({}) {
  return (
    <>
      <section
        className="row_am app_solution_section mt-12"
        style={{ backgroundColor: "#F3F6FE" }}
      >
        <div className="w-[90%] mx-auto py-6">
          <div id="application_req">
            <h3 className="text-4xl  2xl:text-5xl font-bold text-center my-12">
              Application Requirements
            </h3>
            <div className="application_requirements">
              <div className="app_requirement_start">
                <div
                  className="app_r_row appRow_1"
                  data-r="1"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">
                    A completed scholarship application for
                  </p>
                </div>
                <div
                  className="app_r_row appRow_2"
                  data-r="2"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">
                    An official sealed transcript or a notarized certified copy
                    of CXC Certificate
                  </p>
                </div>
                <div
                  className="app_r_row appRow_3"
                  data-r="3"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">
                    Certified copies of all academic diplomas, certificates and
                    awards
                  </p>
                </div>
                <div
                  className="app_r_row appRow_4"
                  data-r="4"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">
                    A copy of ACT or SAT Score (if applicable)
                  </p>
                </div>
                <div
                  className="app_r_row appRow_5"
                  data-r="5"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">
                    A copy of a valid Government Issued ID
                  </p>
                </div>
              </div>
              <div className="app_requirement_middle">
                <h2>Requirements</h2>
                <Image
                  src="https://www.mecarviprints.com/public/assets//front/images/banner/Application-Requirements.svg"
                  alt="application image"
                  width={400}
                  height={300}
                />
              </div>
              <div className="app_requirement_end">
                <div
                  className="app_r_row appRow_10"
                  data-r="10"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">A 500-word typed essay</p>
                </div>
                <div
                  className="app_r_row appRow_9"
                  data-r="9"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">
                    Two notarized letters of recommendations/references in
                    sealed envelopes
                  </p>
                </div>
                <div
                  className="app_r_row appRow_8"
                  data-r="8"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">Tuition estimates per year</p>
                </div>
                <div
                  className="app_r_row appRow_7"
                  data-r="7"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">
                    Proof of enrollment at your desired educational institution
                    (Acceptance Letter)
                  </p>
                </div>
                <div
                  className="app_r_row appRow_6"
                  data-r="6"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <p className="mb-0 fw-bold">One recent passport size photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
