import React from "react";

const CompaniesTrust = () => {
  return (
    <section className="relative ">
      <div className="text-center mt-90 md:mt-60 2xl:mt-80">
        <h2 className="text-[#343a40] text-3xl font-bold 2xl:text-5xl">
          Companies that Trust Us
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-carousel">
            {/* First set of companies */}
            <div className="flex-shrink-0 flex justify-around items-center w-full">
              <div className="flex hover:shadow-lg p-4 mt-15 md:mt-25">
                <img
                  src="/images/test/mercedes.png"
                  alt="Company"
                  className="grayscale w-[180px] hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/test/MartinBrower.png"
                  alt="Company"
                  width={"220px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/companies/nksfb.png"
                  alt="Company"
                  width={"200px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/companies/royalcuisinelogo.png"
                  alt="Company"
                  width={"240px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/companies/northclaytonLogo.png"
                  alt="Company"
                  width={"200px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/companies/candidAmourLogo.png"
                  alt="Company"
                  width={"200px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 flex justify-around items-center w-full">
              <div className="flex hover:shadow-lg p-4">
                <img
                  src="/images/test/mercedes.png"
                  alt="Company"
                  className="grayscale w-[180px] hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/test/MartinBrower.png"
                  alt="Company"
                  width={"220px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/companies/nksfb.png"
                  alt="Company"
                  width={"200px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/companies/royalcuisinelogo.png"
                  alt="Company"
                  width={"240px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/companies/northclaytonLogo.png"
                  alt="Company"
                  width={"200px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="hover:shadow-lg p-4">
                <img
                  src="/images/companies/candidAmourLogo.png"
                  alt="Company"
                  width={"200px"}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesTrust;
