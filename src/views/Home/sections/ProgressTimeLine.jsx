import React from "react";

const ProgressTimeLine = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="absolute mt-22 w-full bg-[url(/images/timeline.png)] h-22 bg-no-repeat bg-cover"></div>
      <div className="container mx-auto px-4 2xl:my-10">
        <h2 className="text-3xl font-bold  2xl:text-5xl text-center mb-20 text-gray-800">
          How It Works
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-4 top-6 bottom-6 w-1 bg-gradient-to-b from-[#0096ff] to-purple-500 block md:hidden"
            style={{ zIndex: 1 }}
          ></div>
          {/* <div className="absolute left-0 right-0 top-6 h-1 bg-gradient-to-r from-[#0096ff] to-purple-500 hidden md:block" style={{ zIndex: 0, background: `repeating-linear-gradient(90deg, #60a5fa, #60a5fa 10px, transparent 10px, transparent 20px)` }}></div> */}

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-5 md:gap-x-8">
            {/* Step 1 */}
            <div className="relative md:col-start-1">
              <div
                className="absolute -left-1.5 top-3 md:left-1/2 2xl:-left-22 md:-ml-6 w-12 h-12 bg-[#0096ff] 2xl:size-18 2xl:text-2xl rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                style={{ zIndex: 2 }}
              >
                01
              </div>
              <div className="mt-16 md:mt-22 ml-16 md:ml-0 2xl:-translate-x-70 md:text-center bg-white hover:bg-[#0096ff] p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-200 group transition-all duration-300 2xl:h-max 2xl:w-[24rem]">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white 2xl:text-3xl transition-colors duration-300">
                  Place your Order
                </h3>
                <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-300 2xl:text-2xl">
                  To begin the process, you can place your order directly
                  through our web-site by selecting your desired product,
                  uploading your artwork, choosing your customized options and
                  completing the checkout process. Alternatively, if you prefer
                  to place an offline order, simply email us with the product
                  details, artwork, quantity and any specifications. Upon
                  receiving your request, we'll respond with a quotation and if
                  accepted, we'll provide a secure payment link to complete your
                  order. After receiving your order, our risk and safety team
                  will perform a thorough verification to prevent fraud and
                  ensure transaction accuracy. Once verified, we'll proceed with
                  processing and fulfilling your order.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative md:col-start-2">
              <div
                className="absolute -left-1.5 -top-9 md:left-1/2 md:-ml-6 2xl:left-14 w-12 h-12 2xl:size-18 2xl:text-2xl bg-[#0096ff] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                style={{ zIndex: 2 }}
              >
                02
              </div>
              <div className="mt-16 md:mt-10 ml-16 md:ml-0 md:text-center bg-white hover:bg-[#0096ff] p-6 rounded-lg shadow-md border border-gray-200 2xl:w-[24rem] 2xl:h-max 2xl:-translate-x-30 hover:border-blue-200 group transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white 2xl:text-3xl transition-colors duration-300">
                  Artwork Proofing
                </h3>
                <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-300 2xl:text-2xl">
                  We've started working on your order! As part of our process to
                  ensure a seamless production process and eliminate any
                  potential miscommunication, our expert team will conduct a
                  complimentary design file check and provide a detailed digital
                  mock-up proof of your artwork for your review and srcroval.
                  This crucial step allows you to thoroughly evaluate all
                  aspects of your design, ensuring it matches your
                  specifications. If revisions are needed, we offer unlimited
                  adjustments and will collaborate with you to refine the
                  artwork to perfection. Production will only begin after we
                  receive your formal srcroval of the final proof.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative md:col-start-3">
              <div
                className="absolute -left-1.5 top-4 md:left-1/2 md:-ml-6 w-12 h-12 bg-[#0096ff] rounded-full 2xl:left-46 flex items-center justify-center text-white 2xl:size-18 2xl:text-2xl font-bold text-xl shadow-lg"
                style={{ zIndex: 2 }}
              >
                03
              </div>
              <div className="mt-16 md:mt-22 ml-16 md:ml-0 md:text-center bg-white hover:bg-[#0096ff]    p-6 rounded-lg shadow-md border border-gray-200  hover:border-[#0096ff] group transition-all duration-300 2xl:w-[24rem] ">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white 2xl:text-3xl transition-colors duration-300">
                  Production
                </h3>
                <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-300 2xl:text-2xl">
                  This is the exciting part where visions come to life! Once
                  your artwork is srcroved, your order enters the production
                  phase. During this stage, our skilled production team
                  leverages state-of-the-art technology and premium materials to
                  craft the products you've envisioned. Every step is
                  meticulously monitored to ensure precision and attention to
                  detail. We srcly advanced techniques to achieve the perfect
                  finish, ensuring consistency and maintaining high quality
                  throughout the entire process. Our team works tirelessly to
                  deliver a product that not only reflects your vision but also
                  exceeds your expectations.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative md:col-start-4">
              <div
                className="absolute -left-1.5  2xl:left-73 -top-12 md:left-1/2 md:-ml-6 w-12 h-12 bg-[#0096ff] rounded-full flex items-center justify-center 2xl:size-18 2xl:text-2xl  text-white font-bold text-xl shadow-lg"
                style={{ zIndex: 2 }}
              >
                04
              </div>
              <div className="mt-16 md:mt-10 ml-16 md:ml-0 md:text-center bg-white hover:bg-[#0096ff] 2xl:w-[24rem] 2xl:translate-x-30 2xl:h-max  p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-200 group relative transition-all duration-300">
                {/* Image overlay */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white  2xl:text-3xl transition-colors duration-300">
                    Quality Check
                  </h3>
                  <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-300 2xl:text-2xl">
                    We're almost there! Once production is complete, before your
                    order is shipped or ready for pickup, our team conducts a
                    thorough and meticulous quality inspection to ensure every
                    item meets our rigorous standards. We check for accuracy,
                    durability, and overall finish to guarantee your
                    satisfaction. This final review ensures that the product you
                    receive is flawless and perfectly represents your brand.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative md:col-start-5">
              <div
                className="absolute -left-1.5  2xl:left-105 top-2 md:left-1/2 md:-ml-6 w-12 h-12 bg-[#0096ff] rounded-full flex items-center justify-center 2xl:size-18 2xl:text-2xl  text-white font-bold text-xl shadow-lg"
                style={{ zIndex: 2 }}
              >
                05
              </div>
              <div className="mt-16 md:mt-24 ml-16 md:ml-0 md:text-center bg-white hover:bg-[#0096ff] 2xl:translate-x-60 p-6 rounded-lg shadow-md border border-gray-200 2xl:w-[24rem] 2xl:h-max  hover:border-blue-200 group transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white 2xl:text-3xl transition-colors duration-300">
                  Delivery
                </h3>
                <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-300 2xl:text-2xl">
                  Woohoo! We're at the final stage! Your order has successfully
                  passed our rigorous quality control process. It's now
                  carefully packaged and prepared for dispatch or pickup. We
                  ensure secure packaging to protect your items during transit.
                  You'll receive a notification with tracking information once
                  your order is shipped, or details for pickup if you've chosen
                  that option. We strive to provide timely and reliable
                  delivery, ensuring your order reaches you safely and promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTimeLine;
