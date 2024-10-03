import Image from "next/image";
import React from "react";

const PinnedAvatar = ({ imageSrc, imageAlt, jobPosition, pinned = false }) => {
  return (
    <>
      {imageSrc && (
        <div className="relative min-w-[115px] max-w-[115px]">
          <Image src={imageSrc} alt={imageAlt} width={115} height={115} className="w-full h-full rounded-lg mb-4" />
          <div className="text-center text-sm text-gray-600">{jobPosition}</div>
          {pinned && (
            <Image
              src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/66465758a6fdf29397553a80_Yellow-Pin.svg"
              alt="Pin"
              className="absolute -top-3 right-8 w-8"
              width={32}
              height={48}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PinnedAvatar;
