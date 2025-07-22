import React from 'react';

const CompaniesCarousel = () => {
  const companies = [
    {
      src: "/images/test/mercedes.png",
      alt: "Mercedes",
      width: "180px",
    },
    {
      src: "/images/test/MartinBrower.png",
      alt: "Martin Brower",
      width: "220px",
    },
    {
      src: "/images/companies/nksfb.png",
      alt: "NKSFB",
      width: "200px",
    },
    {
      src: "/images/companies/royalcuisinelogo.png",
      alt: "Royal Cuisine",
      width: "240px",
    },
    {
      src: "/images/companies/northclaytonLogo.png",
      alt: "North Clayton",
      width: "200px",
    },
    {
      src: "/images/companies/candidAmourLogo.png",
      alt: "Candid Amour",
      width: "200px",
    },
  ];

  return (
    <section className="relative">
      <div className="text-center mt-36 lg:my-18">
        <h2 className="text-[#343a40] text-3xl font-bold">
          Companies that Trust Us
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-carousel">
            {/* First set of companies */}
            <div className="flex-shrink-0 flex justify-around items-center w-full">
              {companies.map((company, index) => (
                <div key={index} className="flex hover:shadow-lg p-4">
                  <img
                    src={company.src}
                    alt={company.alt}
                    width={company.width}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 flex justify-around items-center w-full">
              {companies.map((company, index) => (
                <div key={index + companies.length} className="flex hover:shadow-lg p-4">
                  <img
                    src={company.src}
                    alt={company.alt}
                    width={company.width}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesCarousel; 