import TestimonialCard from "@/components/testimonialCard";
import React from "react";
const testimonialData = [
  {
    image: "/images/test/chasity.png",
    title: "Chasity Parker",
    country: "Georgia, USA",
    description:
      "My department and I have done business with Mecarvi and received positive results! Very professional and takes pride in their work. Thank you Sabrina and your staff.",
  },
  {
    image: "/images/test/cleanmental.png",
    title: "Clean Mental Clothing, Andrew Williams",
    country: "USA",
    description:
      "Great customer service. They have a variety of services to offer DTG printing and embroidery are the services I use them for and I would highly recommend them to anyone. There quality and time frame to finish product and return to the customer  is perfect!",
  },
  {
    image: "/images/test/MartinBrower.png",
    title: "Martin Brower, Aisha Felton",
    country: "USA",
    description: `I just want to say THANK YOU on behalf of Martin- Brower Company you surpassed all my expectations. I can't say it enough your work speaks for itself, thank you for your patience, thank you for being very PROFESSIONAL thoughtful all the ups and downs with us changing ideas you still stayed professional.`,
  },
  {
    image: "/images/test/mercedes.png",
    title: "Mercedes Benz - Atlanta",
    country: "USA",
    description: `I work for Mercedes-Benz I decided I wanted a jacket that was a little different than everybody else's so what I did was ordered a jacket off of Amazon I then went online to find somewhere to get it embroidered came across this company an was highly satisfied with all of the work I got done.`,
  },
];
const Testimonial = () => {
  return (
    <section className="relative mt-16 ">
      <div className="flex bg-[#f9f9f9] text-center">
        <div className="text-center text-[#858585] w-[100%] md:w-[70%] p-5 md:p-10">
          <h2 className="font-bold text-3xl 2xl:text-5xl">
            Customer Testimonials
          </h2>
          <p className="text-lg  mt-6  2xl:text-2xl">
            Our motto speaks for itself: "Your satisfaction defines our
            success." As an industry leader, we take immense pride in delivering
            exceptional quality, reliability and excellence in every project.
            Don't just take our word for it; our customers' experiences speak
            volume about our unwavering commitment to maintaining high standards
            in everything we do. Take a moment to read their testimonials and
            discover why they continue to trust us with all their printing and
            embroidery needs. We're confident in our ability to meet and exceed
            your expectations. You're in safe hands!
          </p>
        </div>
        <div className="w-[30%] hidden md:block h-[670px] -mt-14">
          <img
            src="/images/embroidaryDye.jpg"
            alt="machine"
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="absolute w-full md:-mt-[25%] 2xl:-mt-[15%]">
        <div className="relative overflow-hidden">
          <div className="flex animate-carousel 2xl:gap-40">
            {/* First set of testimonials */}
            {testimonialData.map((data, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-[350px]  px-2"
              >
                <TestimonialCard
                  image={data.image}
                  title={data.title}
                  country={data.country}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
