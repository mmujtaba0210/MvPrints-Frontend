import React from "react";
import {
  FaAward,
  FaRunning,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaThumbsUp,
  FaBalanceScale,
  FaPeopleCarry,
} from "react-icons/fa";

export default function CoreValuePoint() {
  return (
    <>
      <div className=" m-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex shadow-xl min-h-[260px] rounded-tr-3xl rounded-br-3xl border border-pink-600">
            <div className="w-1/5 bg-pink-500 flex items-center justify-center">
              <div className="bg-pink-600 w-full text-center py-4 text-white">
                <h6 className="font-bold text-xl  2xl:text-3xl ">1</h6>
              </div>
            </div>
            <div className="flex-1 bg-red text-center py-6 px-2">
              <div className="flex justify-center">
                <FaAward className="text-pink-600 h-10 w-10 2xl:size-15" />
              </div>
              <h3 className="text-pink-600 font-bold text-xl  my-2  2xl:text-4xl">
                Excellence
              </h3>
              <p className="text-[12px]  2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, vitae consequuntur, laborum quas labore dignissimos,
                ipsum saepe eligendi aut corrupti accusamus veniam .
              </p>
            </div>
          </div>
          <div className="flex shadow-xl min-h-[260px] rounded-tr-3xl rounded-br-3xl border border-yellow-600">
            <div className="w-1/5 bg-yellow-500 flex items-center justify-center">
              <div className="bg-yellow-600 w-full text-center py-4 text-white">
                <h6 className="font-bold text-xl  2xl:text-3xl ">2</h6>
              </div>
            </div>
            <div className="flex-1 bg-red text-center py-6 px-2">
              <div className="flex justify-center">
                <FaRunning className="text-yellow-600 h-10 w-10 2xl:size-15" />
              </div>
              <h3 className="text-yellow-600 font-bold text-xl  my-2  2xl:text-4xl">
                Perseverance
              </h3>
              <p className="text-[12px]  2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, vitae consequuntur, laborum quas labore dignissimos,
                ipsum saepe eligendi aut corrupti accusamus veniam.
              </p>
            </div>
          </div>
          <div className="flex shadow-xl min-h-[260px] rounded-tr-3xl rounded-br-3xl border border-green-800">
            <div className="w-1/5 bg-green-700 flex items-center justify-center">
              <div className="bg-green-800 w-full text-center py-4 text-white">
                <h6 className="font-bold text-xl  2xl:text-3xl ">3</h6>
              </div>
            </div>
            <div className="flex-1 bg-red text-center py-6 px-2">
              <div className="flex justify-center">
                <FaLightbulb className="text-green-800 h-10 w-10 2xl:size-15" />
              </div>
              <h3 className="text-green-800 font-bold text-xl  my-2  2xl:text-4xl">
                Innovation
              </h3>
              <p className="text-[12px]  2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, vitae consequuntur, laborum quas labore dignissimos,
                ipsum saepe eligendi aut corrupti accusamus veniam.
              </p>
            </div>
          </div>
          <div className="flex shadow-xl min-h-[260px] rounded-tr-3xl rounded-br-3xl border border-orange-600">
            <div className="w-1/5 bg-orange-500 flex items-center justify-center">
              <div className="bg-orange-600 w-full text-center py-4 text-white">
                <h6 className="font-bold text-xl  2xl:text-3xl ">4</h6>
              </div>
            </div>
            <div className="flex-1 bg-red text-center py-6 px-2">
              <div className="flex justify-center">
                <FaHandshake className="text-orange-600 h-10 w-10 2xl:size-15" />
              </div>
              <h3 className="text-orange-600 font-bold text-xl  my-2  2xl:text-4xl">
                Respect
              </h3>
              <p className="text-[12px]  2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, vitae consequuntur, laborum quas labore dignissimos,
                ipsum saepe eligendi aut corrupti accusamus veniam.
              </p>
            </div>
          </div>
          <div className="flex shadow-xl min-h-[260px] rounded-tr-3xl rounded-br-3xl border border-purple-800">
            <div className="w-1/5 bg-purple-700 flex items-center justify-center">
              <div className="bg-purple-800 w-full text-center py-4 text-white">
                <h6 className="font-bold text-xl  2xl:text-3xl ">5</h6>
              </div>
            </div>
            <div className="flex-1 bg-red text-center py-6 px-2">
              <div className="flex justify-center">
                <FaUsers className="text-purple-800 h-10 w-10 2xl:size-15" />
              </div>
              <h3 className="text-purple-800 font-bold text-xl  my-2  2xl:text-4xl">
                Community
              </h3>
              <p className="text-[12px]  2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, vitae consequuntur, laborum quas labore dignissimos,
                ipsum saepe eligendi aut corrupti accusamus veniam.
              </p>
            </div>
          </div>
          <div className="flex shadow-xl min-h-[260px] rounded-tr-3xl rounded-br-3xl border border-red-600">
            <div className="w-1/5 bg-red-500 flex items-center justify-center">
              <div className="bg-red-600 w-full text-center py-4 text-white">
                <h6 className="font-bold text-xl  2xl:text-3xl ">6</h6>
              </div>
            </div>
            <div className="flex-1 bg-red text-center py-6 px-2">
              <div className="flex justify-center">
                <FaThumbsUp className="text-red-600 h-10 w-10 2xl:size-15" />
              </div>
              <h3 className="text-red-600 font-bold text-xl  my-2  2xl:text-4xl">
                Commitment
              </h3>
              <p className="text-[12px]  2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, vitae consequuntur, laborum quas labore dignissimos,
                ipsum saepe eligendi aut corrupti accusamus veniam.
              </p>
            </div>
          </div>
          <div className="flex shadow-xl min-h-[260px] rounded-tr-3xl rounded-br-3xl border border-teal-600">
            <div className="w-1/5 bg-teal-500 flex items-center justify-center">
              <div className="bg-teal-600 w-full text-center py-4 text-white">
                <h6 className="font-bold text-xl  2xl:text-3xl ">7</h6>
              </div>
            </div>
            <div className="flex-1 bg-red text-center py-6 px-2">
              <div className="flex justify-center">
                <FaBalanceScale className="text-teal-600 h-10 w-10 2xl:size-15" />
              </div>
              <h3 className="text-teal-600 font-bold text-xl  my-2  2xl:text-4xl">
                Honesty
              </h3>
              <p className="text-[12px]  2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, vitae consequuntur, laborum quas labore dignissimos,
                ipsum saepe eligendi aut corrupti accusamus veniam.
              </p>
            </div>
          </div>
          <div className="flex shadow-xl min-h-[260px] rounded-tr-3xl rounded-br-3xl border border-slate-600">
            <div className="w-1/5 bg-slate-500 flex items-center justify-center">
              <div className="bg-slate-600 w-full text-center py-4 text-white">
                <h6 className="font-bold text-xl  2xl:text-3xl ">8</h6>
              </div>
            </div>
            <div className="flex-1 bg-red text-center py-6 px-2">
              <div className="flex justify-center">
                <FaPeopleCarry className="text-slate-600 h-10 w-10 2xl:size-15" />
              </div>
              <h3 className="text-slate-600 font-bold text-xl  my-2  2xl:text-4xl">
                Teamwork
              </h3>
              <p className="text-[12px]  2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, vitae consequuntur, laborum quas labore dignissimos,
                ipsum saepe eligendi aut corrupti accusamus veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
