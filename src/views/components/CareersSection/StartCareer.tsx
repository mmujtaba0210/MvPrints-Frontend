import React from "react";

export default function StartCareer() {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  2xl:gap-16 items-center">
        {/* Text Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-4   2xl:mb-10 2xl:text-5xl">
            Your career starts at Mecarvi Prints
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify   2xl:text-2xl">
            Strategies, products and systems are all very important, but success
            comes from bringing the right people together. At Mecarvi our
            culture of growth starts with our people. We look for employees who
            are smart, creative, empathetic, and fun.
            <br />
            <br />
            Once they’re part of our team, we support them by giving them
            opportunities to grow. At Mecarvi, we recognize that employment is a
            two-way street and that jobs only work when they are mutually
            beneficial. Our core values articulate what we care about most.
            <br />
            <br />
            They guide how we work with each other, with our clients, and our
            partners. And most importantly, they help us become a better
            organization as a whole which serves its community. As an employer,
            Mecarvi understands its responsibility of treating its team with
            respect, empathy, care and consideration.
            <br />
            <br />
            We offer a wide range of benefits to our employees including market
            competitive salaries, health care, retirement funds, paid leaves,
            bonuses, employee discounts and much more. When we find the right
            people, we empower them to implement decisions on their own.
            <br />
            <br />
            If you want to work for a company that gives you the autonomy to
            explore and implement new ideas in a highly collaborative
            environment, you will succeed here. Join us!
          </p>
        </div>

        {/* Media Column */}
        <div className="space-y-6 my-16">
          {/* Responsive Video */}
          <div className="w-full">
            <video
              src="/images/video.mkv"
              controls
              className="w-full rounded-lg shadow-lg"
            ></video>
          </div>

          {/* Responsive Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-lg h-48 sm:h-64 w-full"
              style={{ backgroundImage: "url('/images/founder.png')" }}
            ></div>
            <div
              className="bg-cover bg-center bg-no-repeat rounded-lg h-48 sm:h-64 w-full"
              style={{ backgroundImage: "url('/images/founder.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
