import React from "react";

export default function BreadCrumbSection({ pageTitle = "Page title" }) {
  return (
    <div
      className="bg-img-styling flex justify-center items-center bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(/images/bread-crumb-imgg.png)",
        height: "500px",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#333333] font-bold text-center ">
        {pageTitle}
      </h1>
    </div>
  );
}
