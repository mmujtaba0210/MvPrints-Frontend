import React from "react";

const VideoSection = () => {
  return (
    <section className="py-10 bg-white ">
      <div className=" h-[620px] overflow-hidden px-8">
        <video
          autoPlay
          muted
          className="w-full h-full object-cover rounded-2xl"
        >
          <source src="/videos/front-video.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="absolute -mt-60  xl:-mt-37 left-[12%] flex flex-col gap-4 rounded-t-3xl bg-[#0c2d6270] w-[75%] sm:left-[10%] sm:-mt-56 sm:w-[80%] p-3 text-white text-center">
        <h2 className="font-semibold text-lg xl:text-2xl 2xl:text-4xl">
          Bringing Your Vision to Life — Unleashing the Power of Creative
          Graphic Designs, High-Quality Printing and Embroidery
        </h2>
        <p className="text-sm lg:text-[16px] 2xl:text-3xl">
          Discover how our expert team transforms ideas into reality through
          creative concepts, state-of-the-art technology and meticulous
          craftsmanship. We provide exceptional printing and embroidery
          solutions tailored to meet the unique needs of every project, ensuring
          your brand stands out with style, quality and precision.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
