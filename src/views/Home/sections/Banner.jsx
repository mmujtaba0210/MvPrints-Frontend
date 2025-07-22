import Image from "next/image";
import React from "react";
const carouselSlides = [
  {
    image: "/images/specialOffer.png",
    alt: "Special Offer",
  },
  {
    image: "/images/holidaySpecial.png",
    alt: "Holiday Special",
  },
  {
    image: "/images/newCustomers.png",
    alt: "New Customer Discount",
  },
];
const Banner = () => {
  return (
    <div className="flex gap-2 py-6 w-full px-8">
      <div className="flex flex-col gap-1">
        <Image
          src={carouselSlides[0]?.image}
          alt={carouselSlides[0]?.alt}
          width={800}
          height={200}
        />
        <Image
          src={carouselSlides[1]?.image}
          alt={carouselSlides[1]?.alt}
          width={800}
          height={200}
        />
      </div>
      <Image
        src={"/images/limitedTime.png"}
        alt={"limited offer"}
        width={400}
        height={200}
      />
      <div className="flex flex-col gap-1">
        <Image
          src={carouselSlides[2]?.image}
          alt={carouselSlides[2]?.alt}
          width={800}
          height={200}
        />
        <div className="w-full h-full bg-gradient-to-br from-[#fa09a662] to-[#0095ff62] flex justify-center items-center">
          <Image
            src={"/images/logo.png"}
            alt={"Mecarvi Prints"}
            width={800}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
