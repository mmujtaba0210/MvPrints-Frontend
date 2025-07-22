import React from "react";

const LandingPage = () => {
  return (
    <main
      className=" min-h-[100vh]  md:min-h-[80vh] xl:min-h-[110vh] bg-[url('/header/bg.png')]    bg-top bg-no-repeat  xl:rounded-br-[19rem] xl:rotate- overflow-hidden   relative
"
    >
      <main className="md:flex gap-8 h-full  items-center mx-auto max-w-[290px] sm:max-w-[540px] md:max-w-[668px] lg:max-w-[924px] xl:max-w-[1180px] 2xl:max-w-[1436px]">
        <section className="">
          <h1 className="text-3xl lg:text-5xl xl:text-7xl pt-40 2xl:pt-80 2xl:text-9xl">
            Stunning package
            <br />
            printing solutions
          </h1>
          <p className="text-xs mt-10 md:w-[25rem] lg:w-[40rem] 2xl:w-[58rem] 2xl:text-2xl lg:text-[14.5px] xl:leading-5 2xl:leading-7">
            Lorem ipsum dolor sit amet consectetur. Fames tellus nullam
            vulputate sagittis nisl sed viverra pellentesque. Nec et quis elit
            volutpat enim turpis iaculis urna. Semper nisl euismod eget donec
            massa tortor lectus. Iaculis ut iaculis massa volutpat pellentesque
            vulputate morbi eget aliquam.
          </p>
        </section>
        <div>
          <img
            src="/header/landing.png"
            alt="kanif"
            className=" mt-8 w-[16rem] xl:translate-y-[10rem] mx-8 md:mx-0 md:w-full md:mt-46 z-10"
          />
        </div>
      </main>
    </main>
  );
};

export default LandingPage;
