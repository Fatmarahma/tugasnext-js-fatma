import Button from "@/components/atoms/Button";
import React from "react";
import Image from "next/image";

const WristbandForm = () => {
  return (
    <div className="flex flex-col w-full border-r border-gray-300 bg-[#E0C097] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Secure Your Wristband</h2>
      <p className="text-sm mb-4">On Thursday 11th July 2024, FlowMCR is hosting a one-day event...</p>
      <Button href="https://www.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fmanchester-webflow-meetup-flowmcr%2Fevents%2F300594405%2F">
        <span className="mr-2">Get Your Wristband Now!</span>
        <Image
          src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/66164c09a29f594863a07b01_Wrist-Stick.svg"
          loading="lazy"
          width="60"
          height="40"
          alt="Get your wristband"
          className="ml-2"
        />
      </Button>
    </div>
  );
};

export default WristbandForm;
