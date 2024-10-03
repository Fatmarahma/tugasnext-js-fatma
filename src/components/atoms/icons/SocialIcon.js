// src/components/atoms/SocialIcon.js
import React from "react";

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-200 ease-in-out"
  >
    {children}
  </a>
);

export default SocialIcon;
