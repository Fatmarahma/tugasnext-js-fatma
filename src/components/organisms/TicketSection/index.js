import ScheduleItem from "@/components/atoms/ScheduleItem";
import React from "react";

const TicketSection = () => {
  return (
    <section className="included py-10 bg-[#f3ecd2]">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Included in your ticket</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6">
          <ScheduleItem itemClassname="w-[192px] text-center">
            <p className="text-gray-700">Design &amp; No-Code Talks</p>
          </ScheduleItem>

          <ScheduleItem itemClassname="w-[192px] text-center">
            <p className="text-gray-700">
              <strong className="font-semibold">Food &amp; Drinks</strong> [Seven Brothers]
            </p>
          </ScheduleItem>

          <ScheduleItem itemClassname="w-[192px] text-center">
            <p className="text-gray-700">
              <strong className="font-semibold">Fun Outdoor Games</strong>
            </p>
          </ScheduleItem>

          <ScheduleItem itemClassname="w-[192px] text-center">
            <p className="text-gray-700">
              <strong className="font-semibold">Welcoming Community</strong>
            </p>
          </ScheduleItem>

          <ScheduleItem itemClassname="w-[192px] text-center">
            <p className="text-gray-700">
              <strong className="font-semibold">Happy Hour</strong> [With Live Music]
            </p>
          </ScheduleItem>

          <ScheduleItem itemClassname="w-[192px] text-center">
            <p className="text-gray-700">
              <strong className="font-semibold">Meet New Friends</strong>
            </p>
          </ScheduleItem>

          <ScheduleItem itemClassname="w-[192px] text-center">
            <p className="text-gray-700">
              <strong className="font-semibold">Interactive Workshops</strong>
            </p>
          </ScheduleItem>

          <ScheduleItem itemClassname="w-[192px] text-center">
            <p className="text-gray-700 font-semibold w-full">Great Vibes</p>
          </ScheduleItem>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;
