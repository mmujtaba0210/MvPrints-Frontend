import React from "react";
export default function MissionSection() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-12 mt-12 statements">
        {/* <div className="col-span-12 lg:col-span-6 md:col-span-6"> */}
        <div className="md:w-1/2 bg-[#113D48] p-12 rounded-xl">
          <h1 className="text-[#fff] text-3xl mb-4 2xl:text-5xl">
            Mission Statement
          </h1>
          <p className="text-[#ffffff99] 2xl:text-2xl">
            Our mission is to serve as our client&apos;s most trusted
            indispensable partner. We work in close liaison with customers to
            empower their brand value, fuel their growth and achieve their goals
            by providing fast innovative solutions that will lead to
            unprecedented results.
          </p>
        </div>

        {/* </div> */}
        {/* <div className="col-span-12 lg:col-span-6 md:col-span-6"> */}
        <div className="md:w-1/2 bg-[#113D48] p-12 rounded-xl">
          <h1 className="text-[#fff] text-3xl mb-4 2xl:text-5xl">
            Vision Statement
          </h1>
          <p className="text-[#ffffff99] 2xl:text-2xl">
            Our mission is to serve as our client&apos;s most trusted
            indispensable partner. We work in close liaison with customers to
            empower their brand value, fuel their growth and achieve their goals
            by providing fast innovative solutions that will lead to
            unprecedented results.
          </p>
          {/* </div>   */}
        </div>
      </div>
    </div>
  );
}
