"use client";
import React from "react";
import { fetchFacts } from "@/redux/slices/Facts/FactsSlice";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CounterSection() {
  const dispatch: AppDispatch = useDispatch();
  const { factsData } = useSelector((state: RootState) => state.facts);

  const colors = ["#FF1493", "#3faa48", "#E92529"];

  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);

  return (
    <section className="counter-cos mt-12" data-aos="fade-up">
      <div className="w-[90%] pl-12">
        <div className="grid grid-cols-12 justify-between">
          {factsData.map((factEle, index) => {
            const circleClass = `circle-${index + 1}`;
            const lineClass = `line-${index + 1}`;
            return (
              <div
                key={factEle.id}
                className="col-span-12 md:col-span-4 lg:col-span-4"
              >
                <div className="relative flex items-center justify-center shadow-lg h-[190px] w-[190px] rounded-full bg-white z-[-1]">
                  <div className={`below-circle ${circleClass}`}>
                    <div
                      className={`flex items-center justify-center shadow h-[186px] w-[186px] rounded-full bg-white line ${lineClass} z-[2]`}
                    >
                      <div className="h-[156px] w-[156px] rounded-full bg-white shadow-lg flex flex-col items-center justify-center">
                        <div className="z-[2] h-[56px] w-[56px] rounded-full bg-white shadow-lg flex items-center justify-center">
                          <h3
                            className="font-bold text-3xl"
                            style={{ color: colors[index] }}
                          >
                            {factEle.years_in_business}
                          </h3>
                        </div>
                        <h3
                          className="font-[600] text-wrap px-5 text-center leading-tight"
                          style={{ color: colors[index] }}
                        >
                          {factEle.location}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
