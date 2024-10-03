// src/components/molecules/ScheduleDetail.js

import Image from "next/image";
import PinnedAvatar from "../PinnedAvatar";

const ScheduleDetail = ({
  time,
  title,
  imageSrc1,
  imageAlt1,
  jobPosition1,
  pinned1,
  imageSrc2,
  imageAlt2,
  jobPosition2,
  pinned2,
  imageSrc3,
  imageAlt3,
  jobPosition3,
  pinned3,
  imageSrc4,
  imageAlt4,
  jobPosition4,
  pinned4,
  description,
  eventTitle,
  eventTitleBottom,
  eventDescBottom,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 bg-[#eab308] border border-gray-300 shadow-md rounded-lg p-6 mb-6 w-[90%] max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="schedule-time-text text-2xl font-semibold text-white">{time}</div>
        <div className="text-lg font-bold text-white">{title}</div>
      </div>

      <div className="flex items-center mt-4 gap-6 bg-white border border-gray-300 shadow-md rounded-2xl p-6 w-full">
        <PinnedAvatar imageSrc={imageSrc1} imageAlt={imageAlt1} jobPosition={jobPosition1} pinned={pinned1} />
        <PinnedAvatar imageSrc={imageSrc2} imageAlt={imageAlt2} jobPosition={jobPosition2} pinned={pinned2} />
        <PinnedAvatar imageSrc={imageSrc3} imageAlt={imageAlt3} jobPosition={jobPosition3} pinned={pinned3} />
        <PinnedAvatar imageSrc={imageSrc4} imageAlt={imageAlt4} jobPosition={jobPosition4} pinned={pinned4} />

        {eventTitle && (
          <div className="flex flex-col w-2/3">
            <div className="text-2xl font-bold text-gray-900 mb-4">{eventTitle}</div>
            <div className="text-gray-700 text-sm leading-relaxed">{description}</div>
          </div>
        )}
      </div>

      {eventTitleBottom && (
        <div class="schedule-content-detail mt-4">
          <div class="text-2xl font-bold text-gray-900 mb-2">{eventTitleBottom}</div>

          <div class="text-gray-700 text-sm leading-relaxed">{eventDescBottom}</div>
        </div>
      )}
    </div>
  );
};

export default ScheduleDetail;
